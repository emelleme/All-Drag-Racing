<h3>Latest Videos</h3><hr>

<% require javascript(mysite/javascript/scroller.js) %>
		<% require javascript(mysite/javascript/slider.js) %>
		<div class="scrollable" id="latestvids">
			<div class="items">
			<% control LatestVideos %>
			<div>
				
				<span style="text-align:center"><a href="$Link" title="Click to Play $Parent.Title - $Title">$VideoImage.SetRatioSize(100,100)</a></span><br>
				<p style="float:left;font-size:10px;"><a href="$Link" title="Click to Play $Parent.Title - $Title">$Title.LimitCharacters(20)</a></p>
				<p style="float:left;font-size:10px;">$MetaDescription.LimitCharacters(200)</p>
			</div>

			<% end_control %>
			</div>
		</div>
		<hr>
<p><a href="collection">View All</a></p>
