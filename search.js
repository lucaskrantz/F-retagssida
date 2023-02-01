  // Skapar söknings-inputen och elementen
  var searchInput = document.getElementById("search-input");
  var linkList = document.getElementById("link-list");
  var linkContainer = document.getElementById("link-drop");
  // En event listener på inputen
  searchInput.addEventListener("input", function() {
    // Hämtar searchqueryn
    var searchQuery = this.value.toLowerCase();
    
    if (searchQuery.length == 0)
    {   
      linkContainer.style.display = "none";
    }
    
    // Loopar igenom varje länk i listan
    for (var i = 0; i < linkList.children.length; i++) {
      var link = linkList.children[i];
      
      // Sedan hämtar länkens text
      var linkText = link.textContent.toLowerCase();
      
      // Visa länken bara ifall den matchar search queryn
      //Gömmer även alla länkar ifall sökfältet är tomt
      if ( searchQuery && linkText.indexOf(searchQuery) !== -1) {
        console.log(linkText.indexOf(searchQuery) );
        link.style.display = "";
        linkContainer.style.display = "block";
      } else {
        link.style.display = "none";
      }
    }
  });
  
  
  