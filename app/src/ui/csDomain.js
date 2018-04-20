var auth_token ;
var domID;
var flag=0;

function selectDomain(domainID) {
	domID = domainID;
	var url = window.location.href;
	if(!url.includes("/csdomain"))
	{
		
		window.location = '/csdomain/'+domID;
	}
	auth_token = Cookies.get('auth_token'); 
	var notifBar = "";
	var notifBar2 = "";
	var notifList;
	var selectRequest = new XMLHttpRequest();
	selectRequest.onreadystatechange=function() {
		if(selectRequest.readyState===XMLHttpRequest.DONE && selectRequest.status===200) {
			notifList = JSON.parse(selectRequest.responseText);
			var n = notifList.length;
			for(var i=0; i < n; i++) {
				notifBar += CSDomainCardQueue1(notifList[i]);
				notifBar2 += CSDomainCardQueue2(notifList[i]);
				
				
			}
			if(notifBar === "") {
				notifBar = "<h3>No Course Added!</h3>";
			}
			domainHeading.innerHTML = notifBar;
			domainbox.innerHTML = notifBar2;
		}
	}
	selectRequest.open('POST', "https://data.affirmatively33.hasura-app.io/v1/query",true);
	selectRequest.setRequestHeader('Content-type','application/json');
	selectRequest.setRequestHeader('Authorization','Bearer '+auth_token);
	selectRequest.send(JSON.stringify({type: "select",args:{table: "CSDomains", columns:["*"], where: {domainID: domainID}}}));
}


function CSDomainCardQueue1(data) {
	var domainName = data.domainName;

	var cardTemplateNotifQueue = `
		<table>
		 <div id="flip7" style="  margin-left: -17px; height:50px;width: 1008px; background-color: #70c0e4; padding-left: 10px; padding-top: 5px; font-size: 30px; text-align: left;">${domainName}</div>
		`;
		return cardTemplateNotifQueue;	
}

function CSDomainCardQueue2(data) {
	var domaindetails = data.domaindetails;

	var cardTemplateNotifQueue = `
		${domaindetails}
		`;
		return cardTemplateNotifQueue;	
}
