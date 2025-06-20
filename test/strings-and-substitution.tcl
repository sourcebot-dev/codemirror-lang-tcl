# String handling and substitution examples
set var1 "simple"
set var2 {complex with spaces}

# Double quoted strings with substitution
set greeting "Hello, $var1 world!"
set message "The value is [expr 2 + 3] and var2 is $var2"

# Braced strings without substitution
set literal {$var1 will not be substituted here}
set multiline {
    This is a
    multi-line string
    with $variables that won't be substituted
}

# Nested braces
set nested {outer {inner string} more}

# Complex substitutions
set result "Result: [expr {$var1 eq "simple" ? 100 : 0}]"

# String with quotes inside
set quoted_string {He said "Hello there!"}
set double_quoted "She replied 'How are you?'"

# Empty strings
set empty1 ""
set empty2 {}

puts $greeting
puts $message
puts $literal
puts $nested