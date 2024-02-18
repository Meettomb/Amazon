

/*==============================================BACK TO TOP=====================================================*/
function topFunction() 
    {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    } 

var btnUp=document.getElementById("myBtn")
btnUp.onclick=function scrollTop() {
window.scroll(20000, window.screenY + 0);
}


/*==============================================GO DOWN=====================================================*/

var btnDown=document.getElementById("down");
btnDown.onclick=function scrollDown() {
window.scroll(0, window.scrollY + 20000);
}

/*=========================================PHONE SIZE SIDE_NAV========================================*/

    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("Xdiv").style.width = "100%";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("Xdiv").style.width = "0";
    }
/*=========================================DECSTOP SIZE SIDE-NAV===========================================*/


function sideNav() {
          document.getElementById("sidenavbar").style.width = "300px";
          document.getElementById("Xnavdiv").style.width = "100vw";
        }
        
        function closeNavbar() {
          document.getElementById("sidenavbar").style.width = "0";
          document.getElementById("Xnavdiv").style.width = "0";
        }


function login(){
    window.location.href = "login.html"
}