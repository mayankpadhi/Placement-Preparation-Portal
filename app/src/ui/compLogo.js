var auth_token = Cookies.get('auth_token');
function loadLogo() {
	var notifBar = "";
	var notifList;
	var selectRequest = new XMLHttpRequest();
	selectRequest.onreadystatechange=function() {
		if(selectRequest.readyState===XMLHttpRequest.DONE && selectRequest.status===200) {
			notifList = JSON.parse(selectRequest.responseText);
			var n = notifList.length;
			for(var i=0; i < n; i++) {
				notifBar += creatLogoTemplate(notifList[i])
			}
			if(notifBar === "") {
				notifBar = "<h1>No New Notifications!</h1>";
			}
			logo1.innerHTML = notifBar;
		}
	}
	selectRequest.open('POST', "https://data.affirmatively33.hasura-app.io/v1/query",true);
	selectRequest.setRequestHeader('Content-type','application/json');
	selectRequest.setRequestHeader('Authorization','Bearer '+auth_token);
	selectRequest.send(JSON.stringify({type: "select",args:{table: "companyInfo", columns:["*"], order_by:"compID"}}));
}

function creatLogoTemplate(data) {
	var logoLink = data.logoLink;
	var compID = data.compID;

	var cardTemplateNotifQueue = `
		<div class="col-lg-3" style="position: relative; border-radius: 8px; overflow: hidden;"><a onclick="fetchpastCompanyDetails(${compID})" target="_blank" data-pwt="true" title="Logos" style="cursor: zoom-in; border-radius: 6px; display: block; padding: 0px; font-weight: bold; text-decoration: none; color: rgb(113, 113, 113); overflow: hidden; background: rgb(249, 249, 249) none repeat scroll 0% 0%;"><img alt="img1" src="${logoLink}"  style="transition: opacity 0.04s linear 0s; border-radius: inherit; opacity: 1; display: block; margin: 0px auto; border: 0px none; width: 100%; max-width: 100%; vertical-align: middle; position: relative;  "></a></div>
		`;
		return cardTemplateNotifQueue;	
}
