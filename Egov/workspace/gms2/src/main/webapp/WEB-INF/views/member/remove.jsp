<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="content">
	<h3>회원 탈퇴</h3>
	<form id="removeForm">
		<table>
			<tr>
				<td >아이디</td>
				<td>${user.userid}</td>
			</tr>
			<tr>
				<td>비밀번호</td>
				<td>
					<input type="text" name="pw"/>
				</td>
			</tr>
			<tr>
				<td>비밀번호 확인</td>
				<td>
					<input type="text" name="password"/>
				</td>
			</tr>
		</table>
		<br />
		<input class="formBtn" id="removeBtn" type="button" value="회원탈퇴"/>
	</form>
</div>
<script>
	$('#removeBtn').click (function () {
		if($('input[name="pw"]').val() !== $('input[name="password"]').val()){
			alert('기존비밀번호와 확인 비밀번호가 일치하지 않습니다.');
		}else if('${user.password}' !== $('input[name="pw"]').val()){
			alert('기존비밀번호가 일치하지 않습니다.');
		}else{
			alert('탈퇴완료');
			$('#removeForm')
			.attr({
				action : '${context}/member/remove',
				method : 'POST'})
			.submit();
		}
	});
</script>