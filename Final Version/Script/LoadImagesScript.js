var url = "Resources/bilder/";

var htmlElements = "";
  for (var i = 2; i <= 7; i++) {
    imageName = i.toString();
    htmlElements += '<a >' +
                      '<div class="col-4 col-s-12 picture">' +
                        '<div class="images">' +
                          '<img id="'+ imageName +'" src="' + url + imageName +'.jpg" alt="Picture" onclick=loadDetailImage(this.id);>' +
                        '</div>' +
                      '</div>' +
                    '</a>'
  }

var container = document.getElementById("container");
container.innerHTML = htmlElements;

function loadDetailImage(id) {
  imgId = id.toString();

  location.replace("detail.html?/"+imgId);
}
