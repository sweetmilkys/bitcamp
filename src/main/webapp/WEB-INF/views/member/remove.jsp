<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="content">
	<h3>회원 탈퇴</h3>
	<form id="removeform">
		<table>
			<tr>
				<td >아이디</td>
				<td>${user.memId}</td>
			</tr>
			<tr>
				<td class="removeInfo" id='${user.passWord}' >비밀번호</td>
				<td>
					<input id="${user.passWord}" type="text" name="pw1"/>
				</td>
			</tr>
			<tr>
				<td>비밀번호 확인</td>
				<td>
					<input type="text" name="pw2"/>
				</td>
			</tr>
		</table>
		<br />
		<input class="formBtn" id="removeBtn" type="button" value="회원탈퇴"/>
	</form>
</div>