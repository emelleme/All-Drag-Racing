<aside id="sidebar"><!-- sidebar -->
		<a href="/"><img src="assets/logo-tv.jpg" height="75px" /></a>
			
				<h2>Now Playing:<hr> $Parent.Title</h2>
				
			
					<ul>
					<% control Menu(2) %>
						<li><a href="$Link" title="Go to the $Title.XML page" class="$LinkingMode">$VideoImage.setRatioSize(120,120)<br> $MenuTitle.XML</a></li>
					<% end_control %>
					</ul>

				<% include LatestVideos %>

		</aside><!-- end of sidebar -->

