(function () {
	"use strict";
    var reponse = true;
    var template = document.querySelector("template").content.firstElementChild;

    preparerTemplate();
    function preparerTemplate()
    {
            for(var i = template.childNodes.length - 1; i >= 0 ; i--)
                {
                    if(!template.childNodes[i].tagName)
                    {
                        template.removeChild(template.childNodes[i]);
                    }
                }
    }
    
    var select = document.getElementById("selectSkin");
    select.onchange = function(){ 
        changeColor(this.options[this.selectedIndex].value);
        sauvegarder(this.selectedIndex);
    };
    
    function changeColor(selCol)
    {
        document.documentElement.setAttribute("class", selCol);
    }

    var strBar = window.location.search;
    
   // alert(localStorage.getItem("lclCol"));
    
    if (strBar.search("skin=") != -1)
        {
            var tab = select.options;
            for(var i = 0; i < select.options.length; i++)
            {
                if (select.options[i].value == strBar.substr(strBar.search("skin=")+5).split("&")[0])
                    {
                        select.options[i].setAttribute("selected", "selected");
                        sauvegarder(i);
                    }
            }
            changeColor(strBar.substr(strBar.search("skin=")+5).split("&")[0]);
        }
    else
        {
            select.options[obtenir()].setAttribute("selected", "selected");
            changeColor(select.options[obtenir()].value);
        }

    function sauvegarder(iii)
    {
        
        localStorage.setItem("lclCol", iii);
    }
    
    function obtenir()
    {
        if(localStorage.getItem("lclCol") == null) return 0;
        else  return localStorage.getItem("lclCol");
    }
    
    input.onkeydown = function(e){ 
    if (e.keyCode == 13) { 
        ajouterTodo(input.value, false);
        input.value = "";
        checkLists();
    }
    };

    var projets = [
        { nom: "Chose à faire"              },
        { nom: "Autre chose à faire"        },
        { nom: "Encore une chose à faire"   }
    ];
        var flex = document.getElementById("flex");
        var todolist = document.createElement("div");
        todolist.setAttribute("id", "todolist");
        var donelist = document.createElement("div");
        donelist.setAttribute("id", "donelist");
        
        var chImg = document.createElement("input");
        chImg.type = "checkbox";
        chImg.checked = true;
        chImg.disabled = true;
        var btnMarquer = document.createElement("button");
        btnMarquer.textContent = "Marquer toutes les tâches comme complétées";
        btnMarquer.insertBefore(chImg, btnMarquer.firstChild);
        btnMarquer.onclick = marquer;
        
        var imag = document.createElement("img");
        imag.setAttribute("src", "delete64.png");
        imag.setAttribute("id", "btnimg");
        var btnEffacer = document.createElement("button");
        btnEffacer.textContent = "Effacer les tâshes complétées";
        btnEffacer.insertBefore(imag, btnEffacer.firstChild);
        btnEffacer.onclick = effacer;

        flex.appendChild(todolist);  
        flex.appendChild(donelist);  
        document.body.appendChild(btnMarquer);
        document.body.appendChild(btnEffacer);

        function marquer()
        {
            while(todolist.childNodes.length)
                {
                    todolist.firstChild.firstChild.click();
                }
            
            checkLists();
        }
        
    
        function effacer()
        {
            while(donelist.childNodes.length)
                {
                    deleteTodo(donelist.firstChild.firstChild);
                }
            
            checkLists();
        }
    
        function checkLists()
        {
            if (todolist.childNodes.length == 0)
            {
                btnMarquer.disabled = true;
            }
            else
            {
                btnMarquer.disabled = false;
            }
            
            if (donelist.childNodes.length == 0)
            {
                btnEffacer.disabled = true;
            }
            else
            {
                btnEffacer.disabled = false;
            }
        }
    
    
    initArticle();

    function initArticle(){

        projets.forEach( function (arrayItem)
        {
            ajouterTodo(arrayItem.nom, true);
        }
        );
        checkLists();
        }
    
        function checkChange()
        {
            if (this.checked)
                {
                    this.parentNode.style.opacity = "0.5";
                    this.parentNode.childNodes[1].style.textDecoration = "line-through";
                    this.parentNode.childNodes[1].style.textDecorationColor = "red";
                }
            else
                {
                    this.parentNode.style.opacity = "1";
                    this.parentNode.childNodes[1].style.textDecoration = "none";
                    this.parentNode.childNodes[1].style.textDecorationColor = "red";
                }
           // checkLists();
        }
    
        function checkOnclick()
        {
            if(this.checked)
            {
                donelist.insertBefore(this.parentNode, donelist.firstChild);
                donelist.firstChild.firstChild.focus();
                //this.checked = checkVerifierBas(this);
            }
            else
            {
                todolist.appendChild(this.parentNode);
                todolist.lastChild.firstChild.focus();
               // this.checked = checkVerifierHaut(this);
            }
            checkLists();
        }
        
        function checkVerifierBas(bla)
        {
            reponse = true;
            if (bla.parentNode.nextSibling != null)
                {
                    if(!bla.parentNode.nextSibling.firstChild.checked)
                        {
                            bla.parentNode.nextSibling.firstChild.click();
                            reponse = false;
                        }
                }
            return reponse;
        }
    
        function checkVerifierHaut(bla)
        {
            reponse = false;
            if (bla.parentNode.previousSibling != null)
                {
                    if(bla.parentNode.previousSibling.firstChild.checked)
                        {
                            bla.parentNode.previousSibling.firstChild.click();
                            reponse = true;
                        }
                }
            return reponse;
        }
    
    
        function deleteTransfer()
        {
            deleteTodo(this);
           // checkLists();
        }
        
        function deleteTodo(blablabla)
        {
            var pere = blablabla.parentNode.parentNode;
            pere.removeChild(blablabla.parentNode);
            checkLists();
            //alert(pere.childNodes.length);
        }
    
        function ajouterTodo(msg, ok)
        {
         if (msg != "")
            {
                var article = template.cloneNode(true);
                
                var premier = article.firstChild;
                var deuxieme = premier.nextElementSibling;
                var troisieme = article.lastChild;
        
                premier.onclick = checkOnclick;
                premier.onchange = checkChange;
                premier.onkeypress = function(e){ 
                if (e.keyCode == 13) { 
                    this.click();
                }
                };
                deuxieme.textContent = msg;
                deuxieme.onkeypress = function(e){ 
                if (e.keyCode == 13) { 
                    premier.focus();
                }
                };
                
                troisieme.onclick = deleteTransfer;
                troisieme.onkeypress = function(e){ 
                if (e.keyCode == 13) { 
                    deleteTodo(this);
                }
                };
                
            if (ok)
                {
                    todolist.appendChild(article);
                }
            else
                {
                    todolist.insertBefore(article, todolist.firstChild);
                }
            }
            else
                {
                    alert("Inserez un article!");
                }
        }

})();
