var arr = [
			{label:"Home", link: "resources/home.html"},
			{label:"Personenliste", link: "resources/persons.html"},
			{label:"Planeten", link: "resources/planets.html"},
			{label:"Spezies", link: "resources/species.html"},
			{label:"Raumschiffe", link: "resources/starships.html"},
			{label:"Fahrzeuge", link: "resources/vehicles.html"}
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