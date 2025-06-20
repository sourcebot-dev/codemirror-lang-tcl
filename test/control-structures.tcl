# Control structures in Tcl
set x 10

# If statement
if {$x > 5} {
    puts "x is greater than 5"
} else {
    puts "x is not greater than 5"
}

# While loop
set i 0
while {$i < 3} {
    puts "Iteration: $i"
    incr i
}

# For loop
for {set j 0} {$j < 5} {incr j} {
    puts "For loop: $j"
}

# Foreach loop
set fruits {apple banana orange}
foreach fruit $fruits {
    puts "Fruit: $fruit"
}

# Switch statement
switch $x {
    1 { puts "One" }
    10 { puts "Ten" }
    default { puts "Other" }
}