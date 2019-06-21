var url = "Resources/bilder/";
var pathArray = window.location.search.split('/');
var imgId = pathArray[1];

var texte = {1: "Unsere erste gemeinsame Teilnahme an einem Cospla-Contest. Wir waren an der Fantasy Basel und haben am Gruppencontest des SwissCosplayAwards mitgemacht und gewonnen. Auf dem Bild sind die erstplatzierten Cosplays aus dem Einzel und Gruppencontest. Nochmals Gratulation von uns an Tania Sofia De Andrade für den ersten Platz im Einzelcontest.",
2: "Diese Bild ist von der Fantasy Basel wo wir unsere Cosplays das erste mal präsentiert haben. Angela hat den Charakter «Fire keeper» aus dem Game «Darksouls 3» gecosplayt. Damian hat «Champion Gundyr» ebenfalls aus «Darksouls 3» gecosplayt. Beide Cosplays sind handgefertigt von der Gruppe Nexus Schmiede. Die Rüstung ist zudem aus über 40kg Edelstahl.",
3: "Die Rüstung als Damian sie das erste mal getragen hat. Mit Hilfe unseres Schmiedes Cederic haben wir die einzelnen Teile perfekt auf den Körper von Damian angepasst. So dass das Gewicht der Stahlrüstung nicht zu sehr einschränkt.",
4: "Die Gleve für das «Gundyr Cosplay». Sie ist etwa 8kg schwer und aus Stahl die Verzierungen wurden von Damian entworfen und von Cederic angebracht.",
5: "Die vorbereiteten Oberschenkelschützer wurden von Damian mit Verzierungen versehen. Sie wurden danach aufgeschweisst und mit Meissel und Hammer graffiert.",
6: "Cederic ist am aufschneiden des Brustpanzers so dass wir ihn danach modifizieren können für das «Gundyr» Cosplay. Es hilft extrem einen Experten für Stahl in der Gruppe zu haben, der mit Tips und Tricks, sowie seinem können zur Seite steht.",
7: "Das Meisterwerk von Cederic. Sein erster Helm mit Kronenaufsatz. Er hat alle Teile handgeschmiedet."};

var titles = {1: "Banner",
2: "Angi und Damian",
3: "Rüstung von hinten",
4: "Gleve",
5: "Angezeichnete Teile",
6: "Cedi am zuschneiden",
7: "Krone Gundyr"};

var imageElements = '<img id="'+ imgId +'" class="detailImage" width="100%" src="' + url + imgId +'.jpg" alt="Picture" onclick="bildanschauen()">';

var detailImage = document.getElementById("detailImage");
detailImage.innerHTML = imageElements;

var contentElements = texte[imgId];
var detailContent = document.getElementById("detailContent");
detailContent.innerHTML = contentElements;

var titleElements = '<h2 class="title">'+titles[imgId]+'</h2>';

var detailTitle = document.getElementById("detailTitle");
detailTitle.innerHTML = titleElements;
