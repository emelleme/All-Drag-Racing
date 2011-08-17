<% include VideoSidebar %>
<section id="container"><!-- #container -->
	<section id="content"><!-- #content -->
		<div style="float: right;left: 225px;position: relative;">
			<form id="searchform" action="/search">
				<input type="text" class="text" id="q" name="search" value="" placeholder="Search Videos">
			</form>
		</div>
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
				<h1>$Parent.Title - $Title</h1>
				<% if CurrentMember %>
				<div id="top_player" class="rtmp" alt="$VideoLink">
					<a id="player" class="rtmp" alt="$VideoLink" href="#">
					$VideoImage.setRatioSize(680,400)
					<h2>$Parent.Title - $Title</h2>
					<p>Click to Play</p>
					</a>
				</div>
				<% else %>
					<a href="Security/login?BackURL=$FullLink/$URLSegment">
					$VideoImage.setRatioSize(680,400)
					<h2>$Parent.Title - $Title</h2>
					<p>Click to Play</p>
					</a>
				<% end_if %>

				<h2>$Parent.Title Playlist</h2>
				<div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#appId=207604255917606&amp;xfbml=1"></script><fb:like href="$FullLink" send="true" width="450" show_faces="true" action="recommend" colorscheme="dark" font="verdana"></fb:like>
				<div style="position:relative;height:130px;">
					<% control Playlist %>
					<div style="float:left;padding:10px 10px 10px 0;"><a href="$Link">$VideoImage.SetRatioSize(80,80)<br>$Title</a></div>
					<% end_control %>
				</div>
			
			<div>
			Added: $Created.NiceUS</div>

			<% if CurrentMember %>
			<div>Play Count: $TotalPlays</div>
			<% end_if %>	
			<div><p>$Parent.MetaDescription</p></div>
			<br />
			
			
			

	<!--  Specify your splash image. Be sure it is the same size as your player.
	This code is optional — if you do not want a splash image, erase this line. --> 
			<% require javascript(mysite/javascript/video_player.js) %>
			$Content
			$Form
			<div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:comments href="$FullLink" num_posts="5" width="720" colorscheme="dark"></fb:comments>
		</div>
	</section><!-- end of #content -->
</section><!-- end of #container -->

