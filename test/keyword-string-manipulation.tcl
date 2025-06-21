# Test string manipulation keywords
string length "hello"
regexp {pattern} $text
regsub {old} $text {new}
format "%s %d" $str $num
scan $input "%s %d" var1 var2