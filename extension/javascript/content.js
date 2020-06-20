var domainName = "";


var getWebsiteURL = function(){
	console.log("get web URL");
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	    var url = tabs[0].url;
	    console.log("the URL is: " + url);

	    //parse URL here
	    // REGEX TO FIND DOMAIN NAME
	    var domain = url.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
	    // console.log(domain);
	    domainName = domain;
			console.log("the parsed URL is: " + domain);
			
			document.getElementById("findTheDomain").innerHTML = domainName;

	    // $("#findTheDomain").html(domainName);
	    getData();

	});
}

var init = function(){
	getWebsiteURL();
	// getData();
};

init();