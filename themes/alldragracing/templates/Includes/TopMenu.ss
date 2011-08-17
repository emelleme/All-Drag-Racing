<% require javascript(mysite/javascript/menu.js) %>
<nav><!-- top nav -->
		<div id="menu">
    <ul class="menu">
        <li><a href="home" class="parent"><span>Home <span class="subtext">home</span></span></a>
            
        </li>
        <li><a href="producers" class="parent"><span>Producers <span class="subtext">producers</span></span></a>
            <ul>
            	<% control ChildrenOf(producers) %>	  
  				<li><a href="$Link" title="Checkout videos by $Title.XML" class="$LinkingMode"><span>$MenuTitle.XML</span></a>
  					<ul>
  					<% control Children %>
  					<li><a href="$Link" title="Watch $Title.XML now!" class="$LinkingMode"><span>$MenuTitle.LimitCharacters(35)</span></a></li>
  					<% end_control %>
  					</ul>
  				</li>
   				<% end_control %>
            </ul>
        </li>
        <li><a href="videos"><span>Videos <span class="subtext">Video Collection</span></span></a></li>
        <li><a href="about"><span>About <span class="subtext">AllDragRacing.tv</span></span></a></li>
        <% if CurrentMember %>
        <li class="last"><a href="#"><span>Account</span></a>
        <ul>
        	<li class="last"><a href="#"><span>Settings</span></a></li>
        	<li class="last"><a href="#"><span>Subscription</span></a></li>
        	<li class="last"><a href="out"><span>Sign Out</span></a></li>
        </ul>
        </li>
        
        </ul>
       	
        
        <% else %>
        <li class="last"><a href="in"><span>Strap In</span></a></li>
        </ul>
        <% end_if %>
    
</div>
	</nav><!-- end of top nav -->
