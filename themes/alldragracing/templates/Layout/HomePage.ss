<% include LeftSideBar %>
<section id="container"><!-- #container -->
	<section id="content"><!-- #content -->
	<% include TopMenu %>
		<div class="typography">
		<% if CurrentMember %>
		 <h1>Welcome back, $CurrentMember.FirstName!</h1>
		 <hr>
		 <% else %>
			<h1>Welcome to AllDragRacing.tv!</h1><hr>
			$Content
		<% end_if %>

<% require javascript(mysite/javascript/scroller.js) %>
		<% require javascript(mysite/javascript/slider.js) %>
		<div class="homescrollable" id="latestvids">
			<div class="items homeitems">
			<% control LatestVideos %>
			<div>
				
				<span style="float:left"><a href="$Link" title="Click to Play $Parent.Title - $Title">$VideoImage.SetHeight(150)</a></span>
				<span>
				<h2 style=""><a href="$Link" title="Click to Play $Parent.Title - $Title">$Title.LimitCharacters(100)</a></h2>
				<p style="float:left">$MetaDescription.LimitCharacters(250) <a href="$Link" title="Click to Play $Parent.Title - $Title">Watch Now!</a></p>
				</span>
			</div>

			<% end_control %>
			</div>
			
		</div>
		<div class="navi"></div>
		<br>
		<p><a href="collection">View Our Entire Collection</a></p>
		<hr>


		<!--  Specify your splash image. Be sure it is the same size as your player.
		This code is optional — if you do not want a splash image, erase this line. --> 
				
				$Form
				$PageComments
	<h2>Join Now!</h2>
			<% include RegistrationForm %>
		</div>
	</section><!-- end of #content -->
</section><!-- end of #container -->


