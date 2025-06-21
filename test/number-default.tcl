proc check_connection_status {server endpoint handler {timeout 30}} {
	if {[catch {set connection [socket $server $endpoint]} errorMsg] == 1} {
		puts "connection failed: '$errorMsg'"
		{*}$handler 0
		return
	}

	fconfigure $connection -buffering none \
		-translation binary \
		-encoding binary

	set timeoutId [after [expr {$timeout * 1000}] [list connection_handler "" $connection 0 $handler]]
	fileevent $connection readable [list connection_handler $timeoutId $connection 1 $handler]
}