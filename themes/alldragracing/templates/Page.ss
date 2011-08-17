<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
<!-- Site by Emelle.me -->
	<% base_tag %>
		<title><% if MetaTitle %><% if Parent %>$Parent.Title - <% end_if %> $MetaTitle<% else %>$Parent.Title - $Title<% end_if %> &raquo; $SiteConfig.Title</title>
		$MetaTags(false)
		<link rel="shortcut icon" href="/favicon.ico" />
		<link  href="http://fonts.googleapis.com/css?family=VT323:regular" rel="stylesheet" type="text/css" >
		<link  href="http://fonts.googleapis.com/css?family=Expletus+Sans:400,500,600,700" rel="stylesheet" type="text/css" >
		<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
		<% require themedCSS(layout) %> 
		<% require themedCSS(typography) %> 
		<% require themedCSS(menu) %> 
		<% require themedCSS(form) %> 
		<% require themedCSS(styles) %>
		<script src="mysite/javascript/flowplayer-3.2.4.min.js"></script>
		<script src="http://cdn.jquerytools.org/1.2.5/full/jquery.tools.min.js"></script>
		
	<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-22913951-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>
<body>
<div id="wrapper"><!-- #wrapper -->

	
	
	
	


	<section id="main"><!-- #main content and sidebar area -->
	
			$Layout
			
		
	</section><!-- end of #main content and sidebar-->

	<% include Footer %>

<% include SignUpOverlay %>
</div><!-- #wrapper -->
<script type="text/javascript" charset="utf-8">
  var is_ssl = ("https:" == document.location.protocol);
  var asset_host = is_ssl ? "https://s3.amazonaws.com/getsatisfaction.com/" : "http://s3.amazonaws.com/getsatisfaction.com/";
  document.write(unescape("%3Cscript src='" + asset_host + "javascripts/feedback-v2.js' type='text/javascript'%3E%3C/script%3E"));
</script>

<script type="text/javascript" charset="utf-8">
  var feedback_widget_options = {};

  feedback_widget_options.display = "overlay";  
  feedback_widget_options.company = "alldragracingtv";
  feedback_widget_options.placement = "left";
  feedback_widget_options.color = "#222";
  feedback_widget_options.style = "idea";
  
  
  
  
  
  
  

  var feedback_widget = new GSFN.feedback_widget(feedback_widget_options);
</script>
<script type="text/javascript">var switchTo5x=false;</script><script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script><script type="text/javascript">stLight.options({publisher:'58f2bdcf-41e3-4f94-820d-8852975d51e4'});</script>

</body>
</html>
