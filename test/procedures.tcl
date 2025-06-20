# Tcl procedures
proc greet {name} {
    return "Hello, $name!"
}

proc add {a b} {
    return [expr $a + $b]
}

proc factorial {n} {
    if {$n <= 1} {
        return 1
    } else {
        return [expr $n * [factorial [expr $n - 1]]]
    }
}

# Call procedures
puts [greet "World"]
puts [add 5 3]
puts [factorial 5]

# Procedure with variable arguments
proc sum {args} {
    set total 0
    foreach arg $args {
        set total [expr $total + $arg]
    }
    return $total
}

puts [sum 1 2 3 4 5]