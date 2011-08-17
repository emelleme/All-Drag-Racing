<aside id="sidebar"><!-- sidebar -->
		<a href="/"><img src="assets/logo-tv.jpg" height="75px" /></a>
			
				<h2>Queued:<hr> $Title</h2>
				
			
					

				<% include LatestVideos %>
				
				<% if CurrentMember %>
				<h2><a href='videos'>View All Videos</a></h2>
				<% else %>
				<h2><a href="/in">Join Now</a></h2>
				<% end_if %>
				

		</aside><!-- end of sidebar -->

<section id="container"><!-- #container -->
	<section id="content"><!-- #content -->
	<% include TopMenu %>
	<div class="typography">
	<style>
#top_player {
			display:block;
			width:640px;
			height:480px;		
			margin:25px 0;
			text-align:center;
			background-color:black;
}
</style>
		<h1>$Title</h1>
		<div style="position:relative;height:130px;">
		<% control Playlist %>
		<div style="float:left;padding:10px 10px 10px 0;"><a href="$Link">$VideoImage.SetRatioSize(120,120)<br>$Title</a></div>
		<% end_control %>
		</div>
 
<% control FirstVideo %>
<% if CurrentMember %>
<div id="top_player" class="rtmp" alt="$VideoLink">
	<% control Menu(1) %>
		<% if First %>
	<a id="player" class="rtmp" alt="$VideoLink" href="#">
	$VideoImage.setRatioSize(680,400)
	<h2>$Parent.Title - $Title</h2>
	<p>Click to Play</p>
	</a>
		<% end_if %>
	<% end_control %>
</div>
<% else %>
	<% control Level(3) %>
	<a href="$Link">
	$VideoImage.setRatioSize(680,400)
	<h2>$Parent.Title - $Title</h2>
	<p>Click to Play</p>
	</a>
	<% end_control %>
<% end_if %>
<% end_control %>

<div>Added: $Created.NiceUS</div>
<div><p>$MetaDescription</p></div>
<!--  Specify your splash image. Be sure it is the same size as your player.
This code is optional — if you do not want a splash image, erase this line. --> 
<% require javascript(mysite/javascript/video_playlist.js) %>
		$Content
		$Form
<div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:comments href="$BaseHref/$Link" num_posts="5" width="720" colorscheme="dark"></fb:comments>
</div>
</section><!-- end of #content -->
</section><!-- end of #container -->

