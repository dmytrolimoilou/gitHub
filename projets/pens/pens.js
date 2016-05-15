var stock = new Array();
var k = 0;
for (var i = flex.childNodes.length - 1; i >= 0; i--)
    {
        if(flex.childNodes[i].tagName)
            {
                stock[k] = flex.childNodes[i];
                k++;
            }
        flex.removeChild(flex.childNodes[i]);
    }
    
stock.forEach( function (obj)
    {
        flex.appendChild(obj);
    }
    );