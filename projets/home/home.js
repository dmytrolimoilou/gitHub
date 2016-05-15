(function () {
	"use strict";

    
    
//    var projets = [
//        { nom: "Langues", 
//          dir: "langues",
//            description: "Pratique de l'utilisation des sélecteurs et de la mise en page avec CSS3",
//            sujet:["CSS3","HTML5","Sélecteurs"] },
//        { nom: "Pens", 
//          dir: "pens" ,  
//            description: "Exercices que j'ai faits sur CodePen."},
//        { nom: "Youtube", 
//          dir: "video" },
//        { nom: "Tutoriel", 
//          dir: "tutorielJS" },
//        { nom: "Todo list", 
//          dir: "Todo" }
//    ];
    
	jQuery.getJSON("projets.json").done(function(jsonData){
		//console.log(JSON.stringify(jsonData, null,4));
        var context = {projets:jsonData};
        var theTemplateScript = $("#templateScript").html();
        var theTemplate = Handlebars.compile(theTemplateScript);
        var theCompiledHtml = theTemplate(context);
        $("#ulMenu").append(theCompiledHtml);
	})
	.fail(function(){
		console.log("Impossible de charger le JSON");
	});

    /*
    
     var theTemplateScript = $("#templateScript").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // This is the default context, which is passed to the template
  var context = {
    projets : [
        { nom: "Langues",
          dir: "langues"
         ,  description: "Pratique de l'utilisation des sélecteurs et de la mise en page avec CSS3",
            sujet:["CSS3","HTML5","Sélecteurs"] 
        },
        { nom: "Pens", 
          dir: "pens" 
         ,  description: "Exercices que j'ai faits sur CodePen."
        },
        { nom: "Youtube", 
          dir: "video" },
        { nom: "Tutoriel", 
          dir: "tutorielJS" },
        { nom: "Todo", 
          dir: "Todo" },
        { nom: "Todo ", 
          dir: "Todo" ,
            skin: "?skin=",
            descrip: "(classic)"},
        { nom: "Todo ", 
          dir: "Todo" ,
            skin: "?skin=blue-on-orange",
            descrip: "(orange)"},
        { nom: "Todo ", 
          dir: "Todo" ,
            skin: "?skin=vert-on-rouge",
            descrip: "(autre)"
        }
    ]
  };
  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $("#ulMenu").append(theCompiledHtml);
*/

   // var template = document.querySelector("template").content.firstElementChild;
    
    //initMenu();
    /*
    function initMenu(){
        
       projets.forEach( function (arrayItem)
	   {
		var a = document.createElement("a");
		a.href = "../"+arrayItem.dir + "/index.html";
		a.textContent = arrayItem.nom;
		var li = document.createElement("li");
		li.appendChild(a);
           
       if(arrayItem.description != undefined)  {
           var ddd = document.createElement("div");
           ddd.innerHTML += arrayItem.description;
           if(arrayItem.sujet != undefined)
              {
                  ddd.innerHTML += "<br>Sujets:";
                  arrayItem.sujet.forEach( function (suj)
                    {
                      ddd.innerHTML += " " + suj;
                  });
              }
           li.appendChild(ddd);
       }
		ulMenu.appendChild(li);
	});
        
    }
    */
    
})();

var maMusique = document.querySelector('audio');

    sour.onmouseover = () =>{
		
	if(chb1.checked == true)
        {
            sour.setAttribute("title", "Désactiver la sourdine");
		}
	else
        {
            sour.setAttribute("title", "Activer la sourdine");
        }
	}

    chb1.onclick = function(){
    if(chb1.checked == true)
        {
            localStorage.setItem("check", "oui");
            maMusique.pause();
		}
	else
        {
            localStorage.setItem("check", "no");
            maMusique.play();
        }
    }
             if (localStorage.getItem("check") == "oui")
        {
            chb1.checked = true;
        }
    else
        {
            chb1.checked = false;
            maMusique.play();
        }   