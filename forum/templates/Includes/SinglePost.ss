<div class="userInformation">
	<% control Author %>
		<a class="authorTitle" href="$Link" title="<% _t('GOTOPROFILE','Go to this User\'s Profile') %>">$Nickname</a><br />
	
		<img class="userAvatar" src="$FormattedAvatar" alt="Avatar" /><br />
	<% if ForumRank %><span class="rankingTitle expert">$ForumRank</span><br /><% end_if %>
	<% if NumPosts %><span class="postCount">$NumPosts posts</span><% end_if %>
	<% end_control %>
</div>
<div class="posterContent">
	<div class="quickReply">
		<% control Top %>
			<% if CheckForumPermissions(post) %>
				<p><a href="$ReplyLink" title="<% _t('CLICKREPLY', 'Click to Reply') %>"><% _t('REPLY', 'Reply') %></a></p>
			<% end_if %>
		<% end_control %>
	</div>
	<h4><a href="$Link">$Title <img src="forum/images/right.png" alt="Link to this post" title="Link to this post" /></a></h4>
	<p class="postDate">$Created.Long at $Created.Time 
	<% if Updated %>
		<strong><% _t('LASTEDITED','Last edited:') %> $Updated.Long <% _t('AT') %> $Updated.Time</strong>
	<% end_if %></p>
	<% if EditLink || DeleteLink %>
		<div class="postModifiers">
			<% if EditLink %>
				$EditLink
			<% end_if %>
			<% if DeleteLink %>
				$DeleteLink
			<% end_if %>
			<% if MarkAsSpamLink %>
				$MarkAsSpamLink
			<% end_if %>
		</div>
	<% end_if %>
	<div class="postType">
		$Content.Parse(BBCodeParser)
	</div>
	
	<% if DisplaySignatures %>
		<% control Author %>
			<% if Signature %>
				<div class="signature">
					<p>$Signature</p>
				</div>
			<% end_if %>
		<% end_control %>
	<% end_if %>

	<% if Attachments %>
		<div class="attachments">
			<strong><% _t('ATTACHED','Attached Files') %></strong> 
			<ul class="attachmentList">
			<% control Attachments %>
				<li class="attachment">
					<a href="$Link"><img src="$Icon"></a>
					<a href="$Link">$Name</a><br />
					<% if ClassName = "Image" %>$Width x $Height - <% end_if %>$Size
				</li>
			<% end_control %>
			</ul>
		</div>
	<% end_if %>
</div>
