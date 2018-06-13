//Radiobuttons based on: http://ninjapixel.io/StackOverflow/doughnutTransition.html
//Pie-Chart based on: http://bl.ocks.org/enjalot/1203641


    var d3 = d3 || {};

    var eyeColorsToVis = [], genToVis = [], fractionWeightToVis = [], hairColorsToVis = [], skinColorsToVis = [];
    var fractionNames = ['Rebel Alliance', 'Galactic Empire', 'Neutral'];
	var fileData = data;
	var fileLength = data.length;
	

	//FRACTIONS
	function getFractionWeight(fileData) {
		var arrRa = [], arrGe = [], arrN = [];
		for (var i = 0; i < fileLength; i++){
			if (fileData[i]['fraction'] === fractionNames[0]) {	
				arrRa.push(fileData[i]['name']);
			} else if (fileData[i]['fraction'] === fractionNames[1]) {
				arrGe.push(fileData[i]['name']);
			} else { 
				arrN.push(fileData[i]['name']);
			}
		}
		var newObject1 = {name:"" + fractionNames[0], value: "" + arrRa.length, charcter:"" + arrRa}
		var newObject2 = {name:"" + fractionNames[1], value: "" + arrGe.length, character:"" + arrGe}
		var newObject3 = {name:"" + fractionNames[2], value: "" + arrN.length, character:"" + arrN}
		var newObject4 = {name:"", value: 0, character:""}
		
		fractionWeightToVis[0] = newObject1;
		fractionWeightToVis[1] = newObject2;
		fractionWeightToVis[2] = newObject3;
		
		for (var k = 3; k < 31; k++) {
			fractionWeightToVis[k] = newObject4;
		}
		
		return fractionWeightToVis;
	}

	//Gender
	function getGenderWeight(fileData) {
        
        var arrGender = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
        var gender = ["male", "female", "genderless"];
        
		for (var i = 0; i < fileLength; i++) {
			if (fileData[i]['gender'] === 'male') {	
				arrGender[0].push(fileData[i]['name']);
			} else if (fileData[i]['gender'] === 'female') {
				arrGender[1].push(fileData[i]['name']);
			} else {
				arrGender[2].push(fileData[i]['name']);
			}
		}
		
		for (var k = 0; k < arrGender.length; k++) {
			var newObject = {name: gender[k], value: "" + arrGender[k].length, character: "" + arrGender[k]}
			genToVis[k] = newObject;
		}
	
		var defaultObject = {name: "", value: 0, character: ""}
		for (var l = 13; l < 31; l++) {
			hairColorsToVis[l] = defaultObject;
		}
		
		return genToVis;
	}

	//SKIN-COLOR

	function getDifferentSkinColors(fileData) {
		
        var skinColors = [];
		var arrSkinColor = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
		
		skinColors[0] = fileData[0]['skin_color'];
		for (var i = 1; i < fileLength; i++) {
			if (skinColors.indexOf(fileData[i]['skin_color']) === -1) {
				skinColors.push(fileData[i]['skin_color']);
			}
		}	
        console.log(skinColors);
		
		for (var j = 0; j < fileLength; j++) {
			if (fileData[j]['skin_color'] === skinColors[0]) {
				arrSkinColor[0].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[1]) {
				arrSkinColor[1].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[2]) {
				arrSkinColor[2].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[3]) {
				arrSkinColor[3].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[4]) {
				arrSkinColor[4].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[5]) {
				arrSkinColor[5].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[6]) {
				arrSkinColor[6].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[7]) {
				arrSkinColor[7].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[8]) {
				arrSkinColor[8].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[9]) {
				arrSkinColor[9].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[10]) {
				arrSkinColor[10].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[11]) {
				arrSkinColor[11].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[12]) {
				arrSkinColor[12].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[14]) {
				arrSkinColor[13].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[15]) {
				arrSkinColor[14].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[16]) {
				arrSkinColor[15].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[17]) {
				arrSkinColor[16].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[18]) {
				arrSkinColor[17].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[19]) {
				arrSkinColor[18].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[20]) {
				arrSkinColor[19].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[21]) {
				arrSkinColor[20].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[22]) {
				arrSkinColor[21].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[23]) {
				arrSkinColor[22].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[24]) {
				arrSkinColor[23].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[25]) {
				arrSkinColor[24].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[26]) {
				arrSkinColor[25].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[27]) {
				arrSkinColor[26].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[28]) {
				arrSkinColor[27].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[29]) {
				arrSkinColor[28].push(fileData[j]['name']);
			} else if (fileData[j]['skin_color'] === skinColors[30]) {
				arrSkinColor[29].push(fileData[j]['name']);
			} else {	
				arrSkinColor[30].push(fileData[j]['name']);
			}
		}

        for (var k = 0; k < arrSkinColor.length; k++) {
			var newObject = {name: skinColors[k], value: "" + arrSkinColor[k].length, character: "" + arrSkinColor[k]}
			skinColorsToVis[k] = newObject;
		}
        console.log(skinColorsToVis);
		return skinColorsToVis;
	}	

	//HAIR-COLOR

	function getDifferentHairColors(fileData) {
        
		var hairColors = [];
		var arrHairColor = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
		
		hairColors[0] = fileData[0]['hair_color'];
		for (var i = 1; i < fileLength; i++) {
			if (hairColors.indexOf(fileData[i]['hair_color']) === -1) {
				hairColors.push(fileData[i]['hair_color']);
			}
		}	
		
        console.log(hairColors);
        
		for (var j = 0; j < fileLength; j++) {
			if (fileData[j]['hair_color'] === hairColors[0]) {
				arrHairColor[0].push(fileData[j]['name']);
			} else if (fileData[j]['hair_color'] === hairColors[1] || fileData[j]['hair_color'] === hairColors[2] || fileData[j]['hair_color'] === hairColors[12]) {
				arrHairColor[2].push(fileData[j]['name']);
			} else if (fileData[j]['hair_color'] === hairColors[3]) {
				arrHairColor[3].push(fileData[j]['name']);
			} else if (fileData[j]['hair_color'] === hairColors[4]) {
				arrHairColor[4].push(fileData[j]['name']);
			} else if (fileData[j]['hair_color'] === hairColors[5]) {
				arrHairColor[5].push(fileData[j]['name']);
			} else if (fileData[j]['hair_color'] === hairColors[6]) {
				arrHairColor[6].push(fileData[j]['name']);
			} else if (fileData[j]['hair_color'] === hairColors[7]) {
				arrHairColor[7].push(fileData[j]['name']);
			} else if (fileData[j]['hair_color'] === hairColors[8]) {
				arrHairColor[8].push(fileData[j]['name']);
			} else if (fileData[j]['hair_color'] === hairColors[9]) {
				arrHairColor[9].push(fileData[j]['name']);
			} else if (fileData[j]['hair_color'] === hairColors[10]) {
				arrHairColor[10].push(fileData[j]['name']);
			} else {
				arrHairColor[11].push(fileData[j]['name']);
			}
		}
		
		for (var k = 0; k < arrHairColor.length; k++) {
			var newObject = {name: hairColors[k], value: "" + arrHairColor[k].length, character: "" + arrHairColor[k]}
			hairColorsToVis[k] = newObject;
		}
	
		var defaultObject = {name: "", value: 0, character: ""}
		for (var l = 13; l < 31; l++) {
			hairColorsToVis[l] = defaultObject;
		}
		
		return hairColorsToVis;
	}	
	
	//EYE-COLOR
	
	function getDifferentEyeColors(fileData) {
		
        var eyeColors = [];
		var arrEyeColor = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
		
		eyeColors[0] = fileData[0]['eye_color'];
		for (var i = 1; i < fileLength; i++) {
			if (eyeColors.indexOf(fileData[i]['eye_color']) === -1) {
				eyeColors.push(fileData[i]['eye_color']);
			}
		}	
		
		for (var j = 0; j < fileLength; j++) {
			if (fileData[j]['eye_color'] === eyeColors[0]) {
				arrEyeColor[0].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[1]) {
				arrEyeColor[1].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[2]) {
				arrEyeColor[2].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[3]) {
				arrEyeColor[3].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[4]) {
				arrEyeColor[4].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[5]) {
				arrEyeColor[5].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[6]) {
				arrEyeColor[6].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[7]) {
				arrEyeColor[7].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[8]) {
				arrEyeColor[8].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[9]) {
				arrEyeColor[9].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[10]) {
				arrEyeColor[10].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[11]) {
				arrEyeColor[11].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[12]) {
				arrEyeColor[12].push(fileData[j]['name']);
			} else if (fileData[j]['eye_color'] === eyeColors[13]) {
				arrEyeColor[13].push(fileData[j]['name']);
			} else { 
				arrEyeColor[14].push(fileData[j]['name']);
			}
		}
		
		for (var k = 0; k < arrEyeColor.length; k++) {
			var newObject = {name: eyeColors[k], value: "" + arrEyeColor[k].length, character: "" + arrEyeColor[k]}
			eyeColorsToVis[k] = newObject;
		}
		
		var defaultObject = {name: "", value: 0, character: ""}
		for (var l = 15; l < 31; l++) {
			eyeColorsToVis[l] = defaultObject;
		}

		return eyeColorsToVis;
	}
	
	//Calculate methods end ----------------------------------------------------------------------------
	
	//Method-calls to initate data-arrays start --------------------------------------------------------------
	fractionWeightToVis = getFractionWeight(fileData); 
	genToVis = getGenderWeight(fileData);
	haircolorToVis = getDifferentHairColors(fileData);
	skincolorToVis = getDifferentSkinColors(fileData);
	eyecolorToVis = getDifferentEyeColors(fileData);
	//Method-calls to initate data-arrays end --------------------------------------------------------------

    var path, pie, arc, color, svg, tooltip, chartDiv, tooltipDiv;
    var width = 540, height = 500, radius = Math.min(width, height) / 2; 

    function doDonut(data, startData) {

		function getRandomColor() {
			var colors = [];
			for (var k = 0; k < 32; k++) {
				var color = '#';
				var letters = '0123456789ABCDEF';
				for (var i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() * 16)];
				}
				colors.push(color);
			}
			return colors;
		}
		
		color = getRandomColor();
        
        arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(radius - 70);

        pie = d3.pie()
            .sort(null)
            .value(function (d) {
                return d.value;
            });

        svg = d3.select(".chartDiv").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("align","center")
            .attr("id", "pieChart")
            .append("g")
            .attr("class", "hover")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        
        tooltip = d3.select(".chartDiv")
            .append("div")
            .attr("id", "tooltipDiv")
            .style("visibility", "hidden");

        var selectedPerson = null;
        
        path = svg.selectAll("path")
            .data(pie(startData))
            .enter()
            .append("path")
            .on("mouseover",function(d){
                tooltip.text(d.data.name + ": " + d.data.value);
                selectedPerson = d.data.name;
                return tooltip.style("visibility", "visible");
            })
            .on("mouseout", function(){
                return tooltip.style("visibility", "hidden");
            })
            
        
        path.transition()
            .duration(500)
            .attr("fill", function(d, i) { 
                   return color[i];
            })
            .attr("d", arc)
            .each(function(d) { 
                this._current = d; });
    }
    doDonut(fileData, fractionWeightToVis);

    function change(data){
        path.data(pie(data));
        path.transition().duration(750).attrTween("d", arcTween);
    }

    function arcTween(a) {
        var i = d3.interpolate(this._current, a);
        this._current = i(0);
            return function(t) {
                return arc(i(t));
            };
    }