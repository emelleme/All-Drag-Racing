<% require javascript(mysite/javascript/scroller.js) %>
		<% require javascript(mysite/javascript/slider.js) %>
		<h3 style="border-bottom: 1px solid">Producers</h3>
		<div class="scrollable" id="browsable">
			<div class="items">
			<% control ChildrenOf(producers) %>
				<div>
				<p class="rights"><a href="$Link">$Title.LimitCharacters(100)</a></p>
				<span><a href="$Link" title="Click to Visit Producer Page">$ProducerLogo.SetWidth(200)</a></span><br>
				</div>
			<% end_control %>
		
			</div>
		</div>
