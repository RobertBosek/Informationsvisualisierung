var arr = [
			{label:"Home", link: "home.html"},
			{label:"Personenliste", link: "persons.html"},
			{label:"Planeten", link: "planets.html"},
			{label:"Spezies", link: "species.html"},
			{label:"Raumschiffe", link: "starships.html"},
			{label:"Fahrzeuge", link: "vehicles.html"}
];
var templ = document.querySelector('#id_vert_menu');
for (var i = 0; i < arr.length; i++) {
	var data = arr[i];
	var clone = templ.content.cloneNode(true);
	var cloneEl = clone.querySelectorAll('ul li a');
	// set attributes to "a" from the list
	cloneEl[0].href = data.link;
	if(data.label.toString() === "Home"){
	cloneEl[0].className = "current";
	}
	cloneEl[0].innerHTML = data.label;
	templ.parentNode.appendChild(clone);
}