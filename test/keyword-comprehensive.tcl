# Comprehensive test of all TclKeyword recognition
# This tests that keywords are properly recognized when standalone

# Core command keywords
expr
puts

# Control flow keywords (standalone recognition)
if
else
elseif
while
for
foreach
switch
return
break
continue

# Variable and scope keywords
global
variable
uplevel
upvar

# List manipulation keywords
list
llength
lindex
lappend
linsert
lreplace
lsearch
lsort
join
split

# String manipulation keywords
string
regexp
regsub
format
scan

# Array and dict keywords
array
dict

# Variable manipulation keywords
incr
append
unset

# Introspection keywords
info

# Evaluation keywords
eval
source

# Program control keywords
exit
error
catch
try
finally
throw

# Namespace keywords
namespace

# System keywords
clock
file
glob
cd
pwd

# I/O keywords
open
close
read
write
gets
flush
seek
tell
eof
fconfigure
encoding
binary

# Event keywords
after
update
vwait
trace

# Comparison operators (standalone)
eq
ne
lt
gt
le
ge
