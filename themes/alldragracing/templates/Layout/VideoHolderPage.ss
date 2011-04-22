<aside id="sidebar"><!-- sidebar -->
		<a href="/"><img src="assets/logo-tv.jpg" height="75px" /></a>
			
				<h2>Queued:<hr> $Title</h2>
				
			
					<ul>
					<% control Menu(2) %>
						<li><a href="$Link" title="Go to the $Title.XML page" class="$LinkingMode">$VideoImage.setRatioSize(120,120)<br> $MenuTitle.XML</a></li>
					<% end_control %>
					</ul>

				<% include LatestVideos %>

		</aside><!-- end of sidebar -->

<section id="container"><!-- #container -->
	<section id="content"><!-- #content -->
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
		<!--  Specify the name of your video in the href- attribute below. You uploaded this in step 2e; in this example it is an .mp4 file
     When playing mp4s, you must write it as you see it below--mp4:NAME_OF_FILE (Note the .mp4 file extension is removed) -->
 
<% control FirstVideo %>
<div id="top_player" class="rtmp" alt="$VideoLink">
<!-- specify a splash image inside the container -->
	<a id="player" class="rtmp" alt="$VideoLink" href="#">
	$VideoImage.setRatioSize(680,400)
	<h2>$Parent.Title - $Title</h2>
	<p>Click to Play</p>
	</a>
</div>
<% end_control %>

<div>Added: $Created.NiceUS</div>
<div>Duration: $VideoDuration</div>
<!--  Specify your splash image. Be sure it is the same size as your player.
This code is optional — if you do not want a splash image, erase this line. --> 
<% require javascript(mysite/javascript/video_playlist.js) %>
		$Content
		$Form
<script type="text/javascript" src="http://www.google.com/friendconnect/script/friendconnect.js"></script>
<!-- Define the div tag where the gadget will be inserted. -->
<div id="div-3178014029513621217" style="width:720px;border:1px solid #cccccc;"></div>
<!-- Render the gadget into a div. -->
<script type="text/javascript">
var skin = {};
skin['FONT_FAMILY'] = 'courier new,monospace';
skin['BORDER_COLOR'] = '#cccccc';
skin['ENDCAP_BG_COLOR'] = '#000000';
skin['ENDCAP_TEXT_COLOR'] = '#cccccc';
skin['ENDCAP_LINK_COLOR'] = '#99ff99';
skin['ALTERNATE_BG_COLOR'] = '#ffffff';
skin['CONTENT_BG_COLOR'] = '#ffffff';
skin['CONTENT_LINK_COLOR'] = '#0000cc';
skin['CONTENT_TEXT_COLOR'] = '#333333';
skin['CONTENT_SECONDARY_LINK_COLOR'] = '#7777cc';
skin['CONTENT_SECONDARY_TEXT_COLOR'] = '#666666';
skin['CONTENT_HEADLINE_COLOR'] = '#ff0000';
skin['DEFAULT_COMMENT_TEXT'] = '- add your comment here -';
skin['HEADER_TEXT'] = 'Comments';
skin['POSTS_PER_PAGE'] = '5';
google.friendconnect.container.setParentUrl('/' /* location of rpc_relay.html and canvas.html */);
google.friendconnect.container.renderWallGadget(
 { id: 'div-3178014029513621217',
   site: '02032454443682928501',
   'view-params':{"disableMinMax":"true","scope":"PAGE","allowAnonymousPost":"true","startMaximized":"true"}
 },
  skin);
</script>
</div>
</section><!-- end of #content -->
</section><!-- end of #container -->

