function highlight(el){
	var str1 = "div-"
	var str2 = el.id[4];
	var id = el.id;
	
	for (i=0; i<5; i++){
		var id2 = str1.concat(i+1);
		if (id2 != id) {
			document.getElementById(id2).style = "opacity=:.1;";
		} else {
			document.getElementById(id2).style = "opacity=.1; background-color:#F9E79F;"
		}
	}
}

function prev() {
	var img1 = document.querySelector("img[alt='photo1']");
	var img2 = document.querySelector("img[alt='photo2']");
	var img3 = document.querySelector("img[alt='photo3']");

	if (img3.className == "visible"){
		img2.setAttribute("class", "visible");
		img3.setAttribute("class", "invisible");
	} else if (img2.className == "visible"){
		img1.setAttribute("class", "visible");
		img2.setAttribute("class", "invisible");
	}
}

function next() {
	var img1 = document.querySelector("img[alt='photo1']");
	var img2 = document.querySelector("img[alt='photo2']");
	var img3 = document.querySelector("img[alt='photo3']");

	if (img1.className == "visible"){
		img2.setAttribute("class", "visible");
		img1.setAttribute("class", "invisible");
	} else if (img2.className == "visible"){
		img3.setAttribute("class", "visible");
		img2.setAttribute("class", "invisible");
	}
}