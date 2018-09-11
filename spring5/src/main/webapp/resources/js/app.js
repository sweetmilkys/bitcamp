"use strict";
var app = app || {};
var user = user || {};
app = {
	init : x => {
		console.log('step1');
		app.session.context(x);
		app.onCreate();
		user.onCreate();
	},
	onCreate : ()=>{
		console.log('step3');
		app.setContentView();
		$('#addMenu').click (() => {
			location.href = app.x() + '/move/auth/member/add';
		});
		$('#modifyMenu').click (()=>{
			location.href = app.x() + '/move/member/member/modify';
		});
		$('#removeMenu').click (()=>{
			location.href = app.x() + '/move/member/member/remove';
		});
		$('#loginMenu').click (() => {
			location.href = app.x() + '/move/auth/member/login';
		});
		$('#logoutMenu').click (() => {
			location.href = app.x() + '/member/logout';
			sessionStorage.clear();
		});
		$('#addBtn').click (() => {
			alert('가입버튼클릭');
			/*var form = document.getElementById('addBox');
			form.action = app.x() +"/member/add";
			form.method = "post";
			form.submit();*/
			$('#addForm')
			.attr({
				action : app.x()+"/member/add", 
				method : "POST"})
			.submit();
		});
		$('#searchBtn').click (() => {
			var search = $('.searchInfo');
			$('#searchForm')
			.attr({
				action : app.x()+ '/member/serach'
					+ '/condition=' + search[0].value 
					+ '/word=' + search[1].value,
				method : "GET"})
			.submit();
		});
		$('#modifyBtn').click (() => {
			alert('버튼클릭');
			$('#modifyForm')
			.append('<input type="hidden" name="userid" value="' + user.get('userid') + '"/>')
			.attr({
				action : app.x()+"/member/modify",
				method : "POST"})
			.submit();
		});
		$('#removeBtn').click (() => {
			$('removeForm')
			.append('<input type="hidden" name="userid" value="' + user.get('userid') + '"/>')
			.attr({
				action : app.x() + "/member/remove",
				method : "POST"
			})
			.submit();
		});
		$('#loginBtn').click (() => {
			$('#loginForm')
			.attr({
				action : app.x() + "/member/login",
				method : "POST"
			})
			.submit();
		});
	},
	setContentView : ()=>{
		console.log('step4'+ app.session.path('js'));
	}
};
app.session = {
	context : x => {
		console.log('step2 : ' + x);
		sessionStorage.setItem('context', x);
		sessionStorage.setItem('js', '/resources/js');
		sessionStorage.setItem('css', '/resources/css');
		sessionStorage.setItem('img', '/resources/img');
	},
	path : x => {
		return sessionStorage.getItem(x);
	}
};
app.x = ()=>{
	return app.session.path('context');
};
app.j = ()=>{
	return app.session.path('js');
};
app.c = ()=>{
	return app.session.path('css');
};
app.i = ()=>{
	return app.session.path('img');
};

user = {
	session : x => {
		$.each(x, (k, v)=>{
			sessionStorage.setItem(k, v);
		});
	},
	get : x =>{
		return sessionStorage.getItem(x);
	},
	onCreate : () => {
		alert('세션확인'+user.get('userid'));
		$('#userid').text(user.get('userid'));
		$('#name').text(user.get('name'));
		$('#infoTeamid').append(user.get('teamid'));
		$('#infoRoll').append(user.get('roll'));
		$('input[name="teamid"]').val([user.get('teamid')]);
		$('#roll').val(user.get('roll')).prop('selected', true);
	}
}