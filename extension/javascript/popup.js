// document.addEventListener('DOMContentLoaded', function(){
//     const bg = chrome.extension.getBackgroundPage()
//     Object.keys(bg.bears).forEach(function (url){
//         const div = document.createElement('div')
//         div.textContent = `${url}: ${bg.bears[url]}`
//         document.body.appendChild(div)
//     });

// }, false)

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
