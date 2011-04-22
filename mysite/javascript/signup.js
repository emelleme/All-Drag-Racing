// validator. we use custom message layout with a CSS arrow
/* Depricated $("#myform").validator({
	message: '<div><em/></div>',
	position: 'top left',
	offset: [3, 40]
}); */

// dateinput and it's configuration
$(":date").dateinput({ trigger: true, format: 'dddd mmm yyyy', offset: [2, 0] });

// rangeinput with default configuration
$(":range").rangeinput();

// overlay with masking. when overlay is loaded or closed we hide error messages if needed
$("#see").overlay({mask: '#999', fixed: false}).bind("onBeforeClose", function(e) {
	$(".error").hide();
});

// tabs. possible error messages are visible only on the first tab pane
$("#navi").tabs(".pane").bind("onClick", function(e, index) {
	$(".error").toggle(!index);
});
