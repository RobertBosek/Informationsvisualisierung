var arr = [
			{label:"Episode 1", link: "episode1.html"},
			{label:"Episode 2", link: "episode2.html"},
			{label:"Episode 3", link: "episode3.html"},
			{label:"Episode 4", link: "episode4.html"},
			{label:"Episode 5", link: "episode5.html"},
			{label:"Episode 6", link: "episode6.html"},
			{label:"Episode 7", link: "episode7.html"},
			{label:"Episode 8", link: "episode8.html"}
];
var templ = document.querySelector('#id_hor_menu');
for (var i = 0; i < arr.length; i++) {
	var data = arr[i];
	var clone = templ.content.cloneNode(true);
	var cloneEl = clone.querySelectorAll('ul li a');
	// set attributes to "a" from the list
	cloneEl[0].href = data.link;
	if(data.label.toString() === "Episode 4"){
	cloneEl[0].className = "current";
	}
	cloneEl[0].innerHTML = data.label;
	templ.parentNode.appendChild(clone);
}