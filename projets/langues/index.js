//(function(){
var ok = true;
var iframe = document.querySelector("iframe");
iframe.onload = (function()
{
    iframe.style.height = "initial";
    iframe.style.height = this.contentDocument.body.scrollHeight + 200 + 'px';
    var iframeRoot = iframe.contentDocument;
    //var $p = $('p', iframeRoot);
    var $p = $(iframeRoot).find('p');
    //var $p = $(iframeRoot.querySelectorAll('p'));
    var $but = $(iframeRoot).find("button");

    b2.onclick = (function()
    {
    if(ok)
        {
            $p.slideUp(2000);
            ok = false;
        }
    else
        {
            $p.slideDown(2000);
            ok = true;
        }
    });

    var $art = $(iframeRoot).find("article");
	for(var i = 0; i<$art.length; i++)
		{
            $($art[i].firstElementChild).before(
            "<button class='artbtn'>Basculer affichage</button>");
		}
    var $btn = $art.find('button');
    $($btn).css({opacity: "0.5", position: "relative", float: "right", marginRight: "6px", marginTop: "6px"});
    //$($btn).css("position", "relative");
    
    $btn.hover(function(){
		
        $(this).filter(':not(:animated)').animate({
						opacity:1
						}, 500, "linear")
		$(this).css("color", "red");
		$(this).css("cursor", "pointer");
		}, 
        
        function(){
			$(this).animate({
						opacity:0.5,
						}, 500, "linear", function(){
			$(this).css("color", "black")
		})
    });

    $btn.on("click", function()
    {
        $ap = $(this).parent().find("p");
        $ap.fadeToggle("slow", "linear");
        $aol = $(this).parent().find("ol");
        $aol.fadeToggle("slow", "linear");
    });
    
    $btn.fadeToggle("slow", "linear");
    
    b3.onclick = (function()
    {
        $btn.fadeToggle("slow", "linear");
    });
   
});
//var button1 = document.getElementById("b1");
b1.onclick = (function()
{
    $(iframe).fadeToggle("slow", "linear");
});
//})();
