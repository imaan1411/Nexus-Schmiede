var url = "Final Version/Resources/bilder";
var imageContainer = document.getElementById("image");



var htmlElements = "";
  for (var i = 1; i < 4; i++) {
    imageName = i.toString();
    htmlElements += '<img id="image" src="'+ imageName + '.jpg" alt="">';
  }

var container = document.getElementById("container");
container.innerHTML = htmlElements;
