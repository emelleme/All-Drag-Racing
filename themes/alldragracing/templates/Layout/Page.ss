<% include LeftSideBar %>
<section id="container"><!-- #container -->
	<section id="content"><!-- #content -->
	<% include TopMenu %>
<div class="typography">

	<% if Level(2) %>
	  	<% include BreadCrumbs %>
	<% end_if %>
	
		<h2>$Title</h2>
	
		$Content
		$Form
		<h2><a href="register">Register Now!</h2>
		<% if CurrentMember %>
		<% else %>
		<% include RegistrationForm %>
		<% end_if %>
</div>
</section><!-- end of #content -->
</section><!-- end of #container -->
