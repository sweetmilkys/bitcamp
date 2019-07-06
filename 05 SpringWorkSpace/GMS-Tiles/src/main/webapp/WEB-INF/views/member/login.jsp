<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="loginContent">
	<form id="loginForm">
	  <div class="loginImgcontainer">
	    <img src="${context}/resources/img/profileImg.png" alt="profileImg">
	  </div>
	
	  <div class="loginContainer">
	    <label for="id"><b>Userid</b></label>
	    <input class="loginInfo" type="text" placeholder="Enter Username" name="userid" required>
	
	    <label for="pw"><b>Password</b></label>
	    <input class="loginInfo" type="text" placeholder="Enter Password" name="password" required>
	        
	    <button type="button" class="formBtn" id="loginBtn" >Login</button>
	    <!-- <label>
	      <input type="checkbox" checked="checked" name="remember"> Remember me
	    </label> -->
	    <button type="button" id="loginCancelbtn">Cancel</button>
	    <!-- <span class="psw">Forgot <a href="#">password?</a></span> -->
	  </div>
	</form>
</div>
