var url = "Resources/bilder/";
var imageContainer = document.getElementById("image");

var htmlElements = "";
  for (var i = 2; i <= 7; i++) {
    imageName = i.toString();
    htmlElements += '<a href="detail.html">' +
                      '<div class="col-4 col-s-12 picture">' +
                        '<div class="images">' +
                          '<img src="' + url + imageName +'.jpg" alt="Picture">' +
                        '</div>' +
                      '</div>' +
                    '</a>'
  }

var container = document.getElementById("container");
container.innerHTML = htmlElements;
