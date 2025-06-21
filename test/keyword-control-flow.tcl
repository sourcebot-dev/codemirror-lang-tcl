# Test control flow keywords

if {$var eq "test"} {
    puts "if works"
} elseif {$var eq "other"} {
    puts "elseif works"
} else {
    puts "else works"
}

while {$count lt 10} {
    puts "while loop"
    incr count
}

for {set i 0} {$i lt 10} {incr i} {
    puts "for loop: $i"
}

foreach item $list {
    puts "foreach: $item"
}

switch $value {
    "case1" {
        puts "switch case 1"
    }
    "case2" {
        puts "switch case 2"
    }
    default {
        puts "default case"
    }
}

return $result
break
continue