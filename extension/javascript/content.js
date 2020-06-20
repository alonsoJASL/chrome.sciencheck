var domainName = "";

var setCollapsibleEntries = function() {
	console.log("[setCollapsibleEntries]");
	var coll = document.getElementsByClassName("collapsible");
	var ix;

	for (ix = 0; ix < coll.length; ix++) {
			coll[ix].addEventListener("click", function () {
					this.classList.toggle("active");
					var content = this.nextElementSibling;
					if (content.style.maxHeight) {
							content.style.maxHeight = null;
					}
					else {
							content.style.maxHeight = content.scrollHeight + "px";
					}
			});
	}
}

var getWebsiteURL = function(){
	console.log("[getWebsiteURL]");
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
	    // getData();

	});
}

var init = function(){
	getWebsiteURL();
	setCollapsibleEntries();
};

init();