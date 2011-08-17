// What is $(document).ready ? See: http://flowplayer.org/tools/documentation/basics.html#document_ready
$(document).ready(function() {
 
// initialize scrollable together with the navigator plugin
$("#browsable").scrollable({circular: true, speed: 1000}	).autoscroll(3000);
$("#latestvids").scrollable({circular: true, speed: 1000}	).autoscroll(6000).navigator();
});
