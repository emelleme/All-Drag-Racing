<% require themedCSS(overlay) %>
<% require javascript(mysite/javascript/signup.js) %>
<!-- overlay trigger element 
<a id="formDemo" rel="#sheet">test</a>-->

<!-- the overlay -->
<div id="sheet" class="rounded">

	<!-- the form is on the first tab pane -->
	<div class="pane" id="pane1">

		<form class="rounded" id="myform">

		</form>
	</div>

	<!-- second tab pane -->
	<div class="pane" id="pane2"> ...  </div>

	<!-- other tab panes ... -->
	<div class="pane" id="pane3"> ...  </div>
	<div class="pane" id="pane4"> ...  </div>
	<div class="pane" id="pane5"> ...  </div>
	...
</div>
