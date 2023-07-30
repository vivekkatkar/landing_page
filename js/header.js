

function menu()
{
   var icon1 = document.getElementById("menuicon");
   icon1.style.display = "none";
   
   var icon2 = document.getElementById("closeicon");
   icon2.style.display = "flex";

   var desk = document.getElementById("desktopNav");
   desk.style.display = "none";

   var l1 = document.getElementById("newnav");
   l1.style.display = "flex";

}


function closeMenu()
{
    console.log("hello");
    var desk = document.getElementById("desktopNav");
    desk.style.display = "flex";
 
    var l1 = document.getElementById("newnav");
    l1.style.display = "none";

    
   var icon1 = document.getElementById("menuicon");
   icon1.style.display = "flex";
   
}