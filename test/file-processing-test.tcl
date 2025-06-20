#!/usr/bin/tclsh
# Real-world Tcl script example - File processing utility

# Configuration
set input_dir "/tmp/input"
set output_dir "/tmp/output"
set log_file "/tmp/process.log"

# Logging procedure
proc log_message {level message} {
    global log_file
    set timestamp [clock format [clock seconds] -format "%Y-%m-%d %H:%M:%S"]
    set log_entry "\[$timestamp\] $level: $message"
    
    puts $log_entry
    
    if {[catch {open $log_file a} log_handle]} {
        puts stderr "Warning: Could not open log file: $log_file"
    } else {
        puts $log_handle $log_entry
        close $log_handle
    }
}

# File processing procedure
proc process_file {input_file output_file} {
    if {![file exists $input_file]} {
        log_message "ERROR" "Input file does not exist: $input_file"
        return 0
    }
    
    if {[catch {open $input_file r} input_handle]} {
        log_message "ERROR" "Could not open input file: $input_file"
        return 0
    }
    
    if {[catch {open $output_file w} output_handle]} {
        log_message "ERROR" "Could not create output file: $output_file"
        close $input_handle
        return 0
    }
    
    set line_count 0
    while {[gets $input_handle line] >= 0} {
        # Process line (example: convert to uppercase)
        set processed_line [string toupper $line]
        puts $output_handle $processed_line
        incr line_count
    }
    
    close $input_handle
    close $output_handle
    
    log_message "INFO" "Processed $line_count lines from $input_file to $output_file"
    return 1
}

# Main processing
proc main {} {
    global input_dir output_dir
    
    log_message "INFO" "Starting file processing"
    
    if {![file isdirectory $input_dir]} {
        log_message "ERROR" "Input directory does not exist: $input_dir"
        exit 1
    }
    
    if {![file isdirectory $output_dir]} {
        if {[catch {file mkdir $output_dir}]} {
            log_message "ERROR" "Could not create output directory: $output_dir"
            exit 1
        }
    }
    
    set files_processed 0
    foreach input_file [glob -nocomplain [file join $input_dir "*.txt"]] {
        set filename [file tail $input_file]
        set output_file [file join $output_dir "processed_$filename"]
        
        if {[process_file $input_file $output_file]} {
            incr files_processed
        }
    }
    
    log_message "INFO" "Processing complete. $files_processed files processed."
}

# Error handling wrapper
if {[catch {main} error]} {
    log_message "FATAL" "Unexpected error: $error"
    exit 1
}