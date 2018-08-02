/*(function() {
	
}());*/

// 에러나면 바로 보여주겠음
"use strict";

let router = (()=>{
// key default value is String
	return {move : x => {
		location.href = 
			x.context + '/' 
			+ x.domain
			+ '.do?action=' + x.action 
			+ '&page=' + x.page;
		}
	};
})();

let service = (()=>{
	return {
		null_chk : x =>{
			let i = 0;
			let json = {
					checker : true,
					text : '필수입력값이 입력되지 않았습니다.'
			};
			
			for (i in x){
				if(x[i] === '') json.checker = false;
			}
			
			return json;
		},
		addClass : (dom,cName) => {
			var arr = cName.split(" ");
			// 특정값을 찾을 수 없으면 -1을 리턴
			if (arr.indexOf(cName) == -1) {
				dom.className += " " + cName;
			}
		}
	};
})();

var admin = (()=>{
	return{
		check : x => {
			router.move({
				context : x, 
				domain : 'admin', 
				action : 'list', 
				page : 'main'});
			/*var isAdmin = confirm('관리자입니까');
			if(isAdmin){
				var password = prompt('관리자비번을 입력바랍니다');
				if(password == 1){
						alert('관리자페이지 이동');
						router.move({
							context : x, 
							domain : 'admin', 
							action : 'list', 
							page : 'main'});
				}
			}else{
				alert('관리자만 접근이 허용 됩니다.');
			}*/
		},
		main : x => {
			service.addClass(
					document.getElementById('admin_content_box'),
					'admin_content '
				);
				service.addClass(
					document.getElementById('admin_search_select'),
					'adminSelect '
				);
				service.addClass(
					document.getElementById('admin_search_form_box'),
					'adminSearchForm '
				);
				service.addClass(
					document.getElementById('admin_search_form_box').word,
					'adminSearchFormText '
				);
/*				service.addClass(
					document.getElementById('admin_search_select'),
					'admin_search_select '
				);*/
/*				service.addClass(
					document.getElementById('admin_search_text'),
					'admin_search_text '
				);*/
				service.addClass(
					document.getElementById('admin_search_btn'),
					'adminSearchBtn '
				);
				service.addClass(
					document.getElementById('admin_context_box_table'),
					'adminList '
				);
				service.addClass(
					document.getElementById('admin_list_tab_box'),
					'adminListTable '
				);
				service.addClass(
					document.getElementById('admin_list_tab_meta'),
					'adminListTableMeta '
				);
				
				document.getElementById('admin_search_btn').addEventListener('click', function(){
					var form = document.getElementById('admin_search_form_box');
					var s = document.getElementById('admin_search_select');
					var condition = s.options[s.selectedIndex].value;
					
					alert(condition);
					var result;
					
					switch (condition) {
					case "userid" :
						result = x+'/admin.do?action=retrive&page=memberDetail&search_id='+ form.word.value;
						break;		
					case "name" :
					case "teamName" :
						result = x+'/admin.do?action=search&page=main&condition=' + condition
							+ '&word=' + form.word.value;
						break;
					default:
						break;
					}
					alert(result);
					form.action = result;
					form.method = "post";
					form.submit();
					
				});

				for(var i of document.querySelectorAll('.username')){					
					i.style.color = 'red';
					i.style.cursor = 'pointer';
					i.addEventListener('click', function(){
						alert('클릭'+this.getAttribute('id'));
						location.href= x + "/admin.do?action=retrive&page=memberDetail&search_id=" + this.getAttribute('id');
					});
				}	
		}
	};
})();

let member = (()=>{
	let _id,_pw,_name,_gender,_ssn,_age,_teamid,_roll,_subjec,join;
	let setId = x => {this._id = x;}
	let setPw = x => {this._pw = x;}
	let setName = x => {this._name = x;}
	let setGender = x => {
		var rs;
		
		switch (x) {
			case '1':
			case '3':
			case '5':
				rs = "남자";
				break;
			case '2':
			case '4':
			case '6':
				rs = "여자";
				break;
			default:
				rs = "?";
				break;
		}
		
		this._gender = rs;}
	let setSsn = x => {this._ssn = x;}
	let setAge = x => {this._age = new Date().getFullYear() - +(19 + x.substring(0, 2)) + 1;}
	let setTeamid = x => {this._teamid = x;}
	let setRoll = x => {this._roll = x;}
	let setSubject = x => {this._subject = x;}
	let getId = () => {return this._id;}
	let getPw = () => {return this._pw;}
	let getName = () => {return this._name;}
	let getGender = () => {return this._gender;}
	let getSsn = () => {return this._ssn;}
	let getAge = () => {return this._age;}
	let getTeamid = () => {return this._teamid;}
	let getRoll = () => {return this._roll;}
	let getSubject = () => {return this._subject;}
	
	return {
		setId,
		setPw,
		setName,
		setGender,
		setSsn,
		setAge,
		setTeamid,
		setRoll,
		setSubject,
		getId,
		getPw,
		getName,
		getGender,
		getSsn,
		getAge,
		getTeamid,
		getRoll,
		getSubject,
		join : x => {
			setSsn(x[0]+'-'+x[1]);
			setGender(x[1]);
			setAge(x[0]);
			}
		};
})();