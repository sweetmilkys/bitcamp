<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="menu_box">
	<ul id="menu">
		<li><a id="move_member_list">MEMBER LIST</a></li>
		<li><a id="move_member_search")">MEMBER SEARCH</a></li>
		<li><a id="move_member_list">HOME</a></li>
	</ul>
</div>
<script>
	document.getElementById('move_member_list').addEventListener('click', function() {
		router.move({context : '${context}', domain : 'member', action : 'list', page : 'member_list'});
	});
	document.getElementById('move_member_search').addEventListener('click', function() {
		router.move({context : '${context}', domain : 'member', action : 'search', page : 'search_id_form'});
	});
	document.getElementById('move_member_home').addEventListener('click', function() {
		router.move({context : '${context}', domain : 'amdin', action : 'move', page: 'main'});
	});
</script>