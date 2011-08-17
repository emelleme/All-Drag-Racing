<% include LeftSideBar %>
<section id="container"><!-- #container -->
	<section id="content"><!-- #content -->
	<% include TopMenu %>
		<div class="typography">
		<% if CurrentMember %>
		 <h1>$Title</h1>
		 <span style="float:left"><a href="$Website" title="Click to Play $Parent.Title - $Title">$Website</a></span>
		 <span style="float:right"><a href="$Link" title="Click to Play $Parent.Title - $Title">$ProducerLogo.SetRatioSize(150,150)</a></span>
		 <hr>
		 <% else %>
			<h1>$Title Collection</h1><hr>
		<% end_if %>
		<h2>Videos</h2>
			<% control Children %>
			<div>
				
				<span style="float:left"><a href="$Link" title="Click to Play $Parent.Title - $Title">$VideoImage.SetHeight(150)</a></span>
				<span>
				<h2 style=""><a href="$Link" title="Click to Play $Parent.Title - $Title">$Title.LimitCharacters(100)</a></h2>
				<p style="float:left">$MetaDescription.LimitCharacters(250)</p>
				</span>
			</div>

			<% end_control %>
			
		<div class="navi"></div>
		<br>
		<hr>


		<!--  Specify your splash image. Be sure it is the same size as your player.
		This code is optional — if you do not want a splash image, erase this line. --> 
		<h2> About $Title</h2>
				$Content
				$Form
				$PageComments
	
	
	<% if CurrentMember %>
	<% else %>
			<h2>Join Now!</h2>
			<% include RegistrationForm %>
	<% end_if %>
		</div>
	</section><!-- end of #content -->
</section><!-- end of #container -->


