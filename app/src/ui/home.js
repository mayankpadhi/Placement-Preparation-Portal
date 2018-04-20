var signout= document.getElementById('signout_btn');
var pass= document.getElementById('chg_pass_btn');
var auth_token;

////////////////////////////////////////////////////////////////
//////////display functions
function intEventQueue() {
	var notifBar = "";
	var notifList;
	var selectRequest = new XMLHttpRequest();
	selectRequest.onreadystatechange=function() {
		if(selectRequest.readyState===XMLHttpRequest.DONE && selectRequest.status===200) {
			notifList = JSON.parse(selectRequest.responseText);
			var n = notifList.length;
			for(var i=0; i < n; i++) {
				/*var data = {
					eventDetails : notifList[i].eventDetails,
					eventOrgsr : notifList[i].eventOrgsr
					}*/
				notifBar += intEventCardNotifQueue(notifList[i]);
			}
			if(notifBar === "") {
				notifBar = "<h1>No New Notifications!</h1>";
			}
			gm101.innerHTML = notifBar;
		}
	}
	selectRequest.open('POST', "https://data.affirmatively33.hasura-app.io/v1/query",true);
	selectRequest.setRequestHeader('Content-type','application/json');
	selectRequest.setRequestHeader('Authorization','Bearer '+auth_token);
	selectRequest.send(JSON.stringify({type: "select",args:{table: "intNotification", columns:["*"], order_by:"addTime"}}));
}

function extEventQueue() {
	var notifBar = "";
	var notifList;
	auth_token = Cookies.get('auth_token');
	var selectRequest = new XMLHttpRequest();
	selectRequest.onreadystatechange=function() {
		if(selectRequest.readyState===XMLHttpRequest.DONE && selectRequest.status===200) {
		//alert('request successful');
		//console.log(selectRequest.responseText);
			notifList = JSON.parse(selectRequest.responseText);
			//console.log(notifList);
			var n = notifList.length;
			for(var i=0; i < n; i++) {
				/*var data = {
					eventLink : notifList[i].eventLink,
					eventDetails1 : notifList[i].eventDetails,
					eventOrgsr1 : notifList[i].eventOrgsr
					}*/
				notifBar += extEventCardNotifQueue(notifList[i]);
				//console.log(notifBar);
			}
			
			if(notifBar === "") {
				notifBar = "<h1>No New Notifications!</h1>";
			}
			gm102.innerHTML = notifBar;
		}
	}
	selectRequest.open('POST', "https://data.affirmatively33.hasura-app.io/v1/query",true);
	selectRequest.setRequestHeader('Content-type','application/json');
	selectRequest.setRequestHeader('Authorization','Bearer '+auth_token);
	selectRequest.send(JSON.stringify({type: "select",args:{table: "extNotification", columns:["*"], order_by:"addTime"}}));
}

function projPoolQueue() {
	var notifBar = "";
	var notifList;
	var selectRequest = new XMLHttpRequest();
	selectRequest.onreadystatechange=function() {
		if(selectRequest.readyState===XMLHttpRequest.DONE && selectRequest.status===200) {
			notifList = JSON.parse(selectRequest.responseText);
			var n = notifList.length;
			for(var i=0; i < n; i++) {
				/*var data = {
					projID : notifList[i].projID,
					projectTitle : notifList[i].projectTitle,
					keywords : notifList[i].keywords,
					contributors : notifList[i].contributors
					}*/
				notifBar += projPoolCardNotifQueue(notifList[i]);
			}
			if(notifBar === "") {
				notifBar = "<h1>No New Notifications!</h1>";
			}
			gm103.innerHTML = notifBar;
		}
	}
	selectRequest.open('POST', "https://data.affirmatively33.hasura-app.io/v1/query",true);
	selectRequest.setRequestHeader('Content-type','application/json');
	selectRequest.setRequestHeader('Authorization','Bearer '+auth_token);
	selectRequest.send(JSON.stringify({type: "select",args:{table: "projPool", columns:["*"], order_by:"projID"}}));
}


function companyQueue() {
	var notifBar = "";
	var notifList;
	var selectRequest = new XMLHttpRequest();
	selectRequest.onreadystatechange=function() {
		if(selectRequest.readyState===XMLHttpRequest.DONE && selectRequest.status===200) {
			notifList = JSON.parse(selectRequest.responseText);
			var n = notifList.length;
			for(var i=0; i < n; i++) {
				/*var data = {
					companyName : notifList[i].companyName,
					companyLink : notifList[i].companyLink,
					arrivalDate : notifList[i].arrivalDate
					}*/
				notifBar += companyCardNotifQueue(notifList[i]);
			}
			if(notifBar === "") {
				notifBar = "<h1>No New Notifications!</h1>";
			}
			gm104.innerHTML = notifBar;
		}
	}
	selectRequest.open('POST', "https://data.affirmatively33.hasura-app.io/v1/query",true);
	selectRequest.setRequestHeader('Content-type','application/json');
	selectRequest.setRequestHeader('Authorization','Bearer '+auth_token);
	selectRequest.send(JSON.stringify({type: "select",args:{table: "upcomCompanies", columns:["*"], order_by:"arrivalDate"}}));
}

function extRecruitQueue() {
	var notifBar = "";
	var notifList;
	var selectRequest = new XMLHttpRequest();
	selectRequest.onreadystatechange=function() {
		if(selectRequest.readyState===XMLHttpRequest.DONE && selectRequest.status===200) {
			notifList = JSON.parse(selectRequest.responseText);
			var n = notifList.length;
			for(var i=0; i < n; i++) {
				/*var data = {
					recruitLink : notifList[i].recruitLink,
					recruitDetails : notifList[i].recruitDetails
					}*/
				notifBar += extRecruitmentCardNotifQueue(notifList[i]);
			}
			if(notifBar === "") {
				notifBar = "<h1>No New Notifications!</h1>";
			}
			gm105.innerHTML = notifBar;
		}
	}
	selectRequest.open('POST', "https://data.affirmatively33.hasura-app.io/v1/query",true);
	selectRequest.setRequestHeader('Content-type','application/json');
	selectRequest.setRequestHeader('Authorization','Bearer '+auth_token);
	selectRequest.send(JSON.stringify({type: "select",args:{table: "extRecruitment", columns:["*"], order_by:"recruitNo"}}));
}

function storyQueue() {
	var notifBar = "";
	var notifList;
	var selectRequest = new XMLHttpRequest();
	selectRequest.onreadystatechange=function() {
		if(selectRequest.readyState===XMLHttpRequest.DONE && selectRequest.status===200) {
			notifList = JSON.parse(selectRequest.responseText);
			var n = notifList.length;
			for(var i=0; i < n; i++) {
				/*var data = {
					story : notifList[i].story
					}*/
				notifBar += storyCardNotifQueue(notifList[i]);
			}
			if(notifBar === "") {
				notifBar = "<h1>No New Notifications!</h1>";
			}
			gm106.innerHTML = notifBar;
		}
	}
	selectRequest.open('POST', "https://data.affirmatively33.hasura-app.io/v1/query",true);
	selectRequest.setRequestHeader('Content-type','application/json');
	selectRequest.setRequestHeader('Authorization','Bearer '+auth_token);
	selectRequest.send(JSON.stringify({type: "select",args:{table: "successStory", columns:["*"], order_by:"storyNo"}}));
}





////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////HTML queues

function CSDomainCardQueue(data) {
	var domaindetails = data.domaindetails;
	var domainName = data.domainName;

	var cardTemplateNotifQueue = `
		<table>
			<tr>
<td><b></b><a href=${domaindetails}> ${domainName} </a><br></td>
				<td><br></td>
			</tr>
		</table>
		`;
		return cardTemplateNotifQueue;	
}

function companyCardNotifQueue(data) {
	var companyName = data.companyName;
	var companyLink = data.companyLink;
	var companyNo = data.companyNo;
	var arrivalDate = data.arrivalDate;
	
	var cardTemplateNotifQueue = `
		<table class="tg">
                <tr>
                  <th class="tg-yw4l"><h4><a href=$(companyLink)> ${companyName}- ${arrivalDate} </a></h4></th>
                </tr>
                
             </table>
		`;
		return cardTemplateNotifQueue;	
}

function extRecruitmentCardNotifQueue(data) {
	var recruitLink = data.recruitLink;
	var recruitDetails = data.recruitDetails;
	var recruitNo = data.recruitNo;

	var cardTemplateNotifQueue = 
		`<table class="tg">
                <tr>
				<th class="tg-yw4l"><h4><a href=${recruitLink}> ${recruitDetails}</a></h4></th>
                </tr>
                
              </table>
			  `;
		
		return cardTemplateNotifQueue;	
}

function storyCardNotifQueue(data) {	
	var story = data.story;
	var storyNo = data.storyNo;
	var storyTitle = data.storyTitle;
	
	var cardTemplateNotifQueue = `
		<table class="tg">
                <tr>
                  <th class="tg-yw4l"><h4>  ${storyTitle} </h4><p>${story}</p></th>
                </tr>
                
             </table>
		`;
		return cardTemplateNotifQueue;	
}

function extEventCardNotifQueue(data) {
	var eventLink = data.eventLink;
	var eventDetails1 = data.eventDetails;
	var eventOrgsr1 = data.eventOrgsr;
	
	var cardTemplateNotifQueue = `
			<table class="tg">
                <tr>
                  <th class="tg-yw4l"><h4><a href=${eventLink}> ${eventDetails1}- ${eventOrgsr1}</a></h4></th>
                </tr>                
             </table>
		
		`;
		return cardTemplateNotifQueue;	
}

function intEventCardNotifQueue(data) {
	var eventDetails = data.eventDetails;
	var eventOrgsr = data.eventOrgsr;
	var notifID = data.notifID;
	var cardTemplateNotifQueue = `
		<table>
		<table class="tg">
                <tr>
                  <th class="tg-yw4l"><h4> ${eventDetails} - ${eventOrgsr}</h4></th>
                </tr>
                
             </table>
		`;
		return cardTemplateNotifQueue;	
}
function projPoolCardNotifQueue(data) {
	var projID = data.projID;
	var projLink = data.projLink;
	var projectTitle = data.projectTitle;
	var keywords = data.keywords;
	var contributors = data.contributors;
	var cardTemplateNotifQueue = `
		<table class="tg">
                <tr>
				<th class="tg-yw4l"><h4><a href=${projLink}> ${projectTitle} </a>(${keywords}) - ${contributors}</h4></th>
                </tr>
                
             </table>
		`;
		return cardTemplateNotifQueue;	
}
