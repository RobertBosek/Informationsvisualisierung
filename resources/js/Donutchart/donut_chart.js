//Radiobuttons based on: http://ninjapixel.io/StackOverflow/doughnutTransition.html
//Pie-Chart based on:  


    var d3 = d3 || {};
    var fileData;
    var eyeColorsToVis = [], genToVis = [], fractionWeightToVis = [], hairColorsToVis = [], skinColorsToVis = [];
    var onChangee    

    function doDonut() {

        d3.json("data/database/people.json", function (data) {

            fileData = data;
            var fileLength = fileData.length;

            //FRACTIONS
            function getFractionWeight(fileData) {
                
                var arrFraction = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
                var fractionNames = ['Rebel Alliance', 'Galactic Empire', 'Neutral'];
                
                var request = new XMLHttpRequest();
                request.open("GET", "data/database/people_fractions.csv", false);
                request.send(null);
                
                var csvData = new Array();
                var jsonObject = request.responseText.split(/\r?\n|\r/);
                for (var h = 0; h < jsonObject.length; h++) {
                    csvData.push(jsonObject[h].split(','));
                }

                for (var i = 0; i < fileLength; i++){
                    if (csvData[i][1] === fractionNames[0]) {	
                        arrFraction[0].push(fileData[i]['name']);
                    } else if (csvData[i][1] === fractionNames[1]) {
                        arrFraction[1].push(fileData[i]['name']);
                    } else { 
                        arrFraction[2].push(fileData[i]['name']);
                    }
                }
                

                for (var j = 0; j < fractionNames.length; j++) {
                    var newObject = {name: fractionNames[j], value: "" + arrFraction[j].length, character: "" + arrFraction[j]};
                    fractionWeightToVis[j] = newObject;
                }

                var defaultObject = {name: "", value: 0, character: ""};
                for (var k = 3; k < 31; k++) {
                    fractionWeightToVis[k] = defaultObject;
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
                    var newObject = {name: gender[k], value: "" + arrGender[k].length, character: "" + arrGender[k]};
                    genToVis[k] = newObject;
                }

                var defaultObject = {name: "", value: 0, character: ""};
                for (var l = 13; l < 31; l++) {
                    genToVis[l] = defaultObject;
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
                    } else if (fileData[j]['skin_color'] === skinColors[5] || fileData[j]['skin_color'] === skinColors[30] ) {
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
                    } else if (fileData[j]['skin_color'] === skinColors[17] || fileData[j]['skin_color'] === skinColors[25]) {
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
                    } else if (fileData[j]['skin_color'] === skinColors[26]) {
                        arrSkinColor[25].push(fileData[j]['name']);
                    } else if (fileData[j]['skin_color'] === skinColors[27]) {
                        arrSkinColor[26].push(fileData[j]['name']);
                    } else if (fileData[j]['skin_color'] === skinColors[28]) {
                        arrSkinColor[27].push(fileData[j]['name']);
                    } else if (fileData[j]['skin_color'] === skinColors[29]) {
                        arrSkinColor[28].push(fileData[j]['name']);
                    } else {
                        arrSkinColor[29].push(fileData[j]['name']);
                    }
                }

                for (var k = 0; k < arrSkinColor.length; k++) {
                    var newObject = {name: skinColors[k], value: "" + arrSkinColor[k].length, character: "" + arrSkinColor[k]}
                    skinColorsToVis[k] = newObject;
                }
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
            hairColorsToVis = getDifferentHairColors(fileData);
            skinColorsToVis = getDifferentSkinColors(fileData);
            eyeColorsToVis = getDifferentEyeColors(fileData);
            //Method-calls to initate data-arrays end --------------------------------------------------------------

            var path, pie, arc, color, svg, tooltip;
            var width = 540, height = 500, radius = Math.min(width, height) / 2; 

            function changeColorSet(val) {
                var colors = [];
                if (val === "rad1") {
                        colors = ["#2c736b", "#b44848", "#f4f2d2"];
                    } else if (val === "rad2") {
                        colors = ["#7c98b3", "#ff99cc", "#f4f2d2"];
                    } else if (val === "rad3") {
                        colors = ["#FFFFCC", "#fffff9", "#ffffef", "#633a10", "#837042", "#000000", "#9f6e5d", "#835c4f", "#f4f0ee", "#b0b0b0", "#430c0a", "#ffffff"];
                    } else if (val === "rad4") {
                        colors = ["#2c736b", "#ced000", "#b44848", "#633a10", "#75869f", "#000000", "#ff7400", "#b2790c", "#ff4451", "#ffffff", "#c573ea", "#e1a851", "#c2ff00", "#f4f0f0", "#3a2005"];
                    } else {
                        colors = ["#ecc8ae", "#e1a851", "#9fc8c2", "#f4f0f0", "#ffffef", "#f08080", "#ffffff", "#7a871d", "#515e30", "#fbc88a", "#4f4f4f", "#3a2005", "#562c10", "#633a10", "#928c81", "#24270f", "#ff7400", "#75869f", "#8b5151", "#b44848", "#2c736b", "#595e3b", "#ced000", "#c3a383", "#dfee8f", "#658e94", "#ee6055", "#767a5e", "#d2adf2", "#c1a06d"];
                    }
                return colors;
            }

            function getButtonId(nodeList) {
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].checked === true) {
                        return nodeList[i].id;
                    }
                }
            }

            function doDonut(data, startData) {

                var transitionGoing = true;

                color = ["#c90707", "#2c736b", "#f4f2d2"];

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
                    .style("opacity", 0.5)
                    .on("click", function(d){
                        selectedPerson = d.data.character;
                    })

                    //Based on https://stackoverflow.com/questions/30066259/d3-js-changing-opacity-of-element-on-mouseover-if-condition-false
                    .on("mouseover",function(d){
                        if(d3.select(this).style("opacity") != 0){
                            path.transition()        
                                .duration(200)      
                                .style("opacity", 1)

                        }
                        d3.select(this).style("cursor", "pointer");
                        tooltip.text(d.data.name + ": " + d.data.value);
                        return tooltip.style("visibility", "visible");
                    })
                    .on("mouseout", function(){
                        if(d3.select(this).style("opacity") != 0){
                            path.transition()        
                                .duration(200)      
                                .style("opacity", 0.5);
                        }
                        d3.select(this).style("cursor", "default");
                        return tooltip.style("visibility", "hidden");
                    })

                path.transition()
                    .duration(500)
                    .attr("fill", function(d, i) { 
                            return color[i];
                    })
                    .attr("d", arc)
                    .each(function(d) {
                        this._current = d;
                     });
            }
            doDonut(fileData, fractionWeightToVis);

            function onChange(data){
                path.data(pie(data));
                path.transition()
                    .duration(750)
                    .attrTween("d", arcTween)
                    .attr("fill", function (d, i) {
                        var nodeList = document.querySelectorAll('input[name="radData"]');
                        var id = getButtonId(nodeList);
                        var color = changeColorSet(id);
                        return color [i];
                });
            }
            
            onChangee = onChange;

            function arcTween(a) {
                var i = d3.interpolate(this._current, a);
                this._current = i(0);
                    return function(t) {
                        return arc(i(t));
                    };
            }
        });
    }
doDonut();

function change(data) {
    
    onChangee(data);
}