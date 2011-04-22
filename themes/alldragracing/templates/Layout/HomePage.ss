<% include LeftSideBar %>
<section id="container"><!-- #container -->
	<section id="content"><!-- #content -->
		<div class="typography">
			<style>
		#top_player {
					display:block;
					width:740px;
					height:450px;
					margin:25px 0;
					text-align:center;
					background-color:black;
		}
		</style>
				<h1>$Title<span style="float:right"><a href="/register">Join</a></span></h1>
				<!--  Specify the name of your video in the href- attribute below. You uploaded this in step 2e; in this example it is an .mp4 file
			 When playing mp4s, you must write it as you see it below--mp4:NAME_OF_FILE (Note the .mp4 file extension is removed) -->
		<div id="top_player" class="rtmp">
		</div>
		
		<div>Added: March 15, 2011</div>
		<div>Duration: 18:77</div>

		<!--  Specify your splash image. Be sure it is the same size as your player.
		This code is optional — if you do not want a splash image, erase this line. --> 
		<% require javascript(mysite/javascript/home_player.js) %>
				$Content
				$Form
				$PageComments
				<!-- Include the Google Friend Connect javascript library. -->
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


