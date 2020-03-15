//backgroundchangecolor
var colors = ['white','black'];
var active = 0;
setInterval(function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 9000);
//backgroundchangecolor



//window.alert--------------------
function myFunction() {
// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ coded = "rIcKG0j1[9w]1C.CG"
  key = "W8vcsufjo963MP2p5DxVtAFdkSmJhlBT1b4rLwnXQKiCeOIUyRzN0YaEg7ZqHG"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }

}

    alert(link);
  }
//-/window.alert-------------


//-Disclaimer-------------
function myDisclaimer() {
    alert("This website is built under open-source code. The respective sources can be identified in the code itself. The owner does not collect any data from their visitors. And, unless I'm quoting someone, they're just my own views.");
  }
//-/Disclaimer-------------
