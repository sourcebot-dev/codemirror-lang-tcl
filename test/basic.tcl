# Basic Tcl commands and variables
set name "John Doe"
set age 30
set pi 3.14159

puts "Hello, $name!"
puts "Age: $age"
puts "Pi: $pi"

# Simple command
expr $age + 5

# Variable with braces
set complex_var {This is a multi-line
string with $variables that are
not substituted}

puts $complex_var