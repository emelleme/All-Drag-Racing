<!doctype html>
<html lang="en">
<head>
	<% base_tag %>
		<title><% if MetaTitle %><% if Parent %>$Parent.Title - <% end_if %> $MetaTitle<% else %>$Parent.Title - $Title<% end_if %> &raquo; $SiteConfig.Title</title>
		$MetaTags(false)
		<link rel="shortcut icon" href="/favicon.ico" />
		<link  href="http://fonts.googleapis.com/css?family=VT323:regular" rel="stylesheet" type="text/css" >
		<link  href="http://fonts.googleapis.com/css?family=Expletus+Sans:400,500,600,700" rel="stylesheet" type="text/css" >
		<% require themedCSS(layout) %> 
		<% require themedCSS(typography) %> 
		<% require themedCSS(form) %> 
		<% require themedCSS(styles) %>
		<script src="mysite/javascript/flowplayer-3.2.4.min.js"></script>
		<script src="http://cdn.jquerytools.org/1.2.5/full/jquery.tools.min.js"></script>
		
	<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body>
<div id="wrapper"><!-- #wrapper -->

	
	
	
	


	<section id="main"><!-- #main content and sidebar area -->
	
			$Layout
			
		
	</section><!-- end of #main content and sidebar-->

	<% include Footer %>

<% include SignUpOverlay %>
</div><!-- #wrapper -->
</body>
</html>
