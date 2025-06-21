# Test list manipulation keywords
list a b c
llength $mylist
lindex $mylist 0
lappend mylist "new item"
linsert mylist 1 "inserted"
lreplace mylist 0 1 "replacement"
lsearch $mylist "pattern"
lsort $mylist
join $mylist " "
split $string " "