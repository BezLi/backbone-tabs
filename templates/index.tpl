<% var tabs = _.sortBy(model, function(item) {
	return item.order
})%>
<div class="navbar navbar-default">
	<div class="navbar-header col-sm-12">
		<div class="navbar-header">
		  <a class="navbar-brand" href="/">Dummmy page</a>
		</div>		
	</div>
</div>
<ul class="nav nav-tabs">	
	<%_.each(tabs, function(item, i) {
		var selected = false;
		if (!url && i == 0) {
			selected = true
		} else if (url && item.path == ("tabs/"+url+".js")) {
			selected = true
		} 
	%>
		<li <%if (selected) {%> class="active"<%}%>role="presentation"><a href="#<%=item.path.split('.js')[0]%>"><%=item.title%></a></li>
	<%})%>
</ul>
<div class="js-container"></div>

