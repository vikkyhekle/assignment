document.getElementById("btn").addEventListener('click',toggle);

function toggle() {
    document.getElementById("side-header").classList.add("side-toggle");
}

function remtoggle() {
    document.getElementById("side-header").classList.remove("side-toggle");
}


document.getElementById("ptd1").addEventListener("mouseover",setptd);
document.getElementById("ptd1").addEventListener("mouseout",remptd);
document.getElementById("ptd2").addEventListener("mouseover",setptd1);
document.getElementById("ptd2").addEventListener("mouseout",remptd1);
document.getElementById("ptd3").addEventListener("mouseover",setptd2);
document.getElementById("ptd3").addEventListener("mouseout",remptd2);
document.getElementById("ptd4").addEventListener("mouseover",setptd3);
document.getElementById("ptd4").addEventListener("mouseout",remptd3);

function setptd() {
   document.getElementById("ptd1").classList.add("ptd");
}
function remptd() {
    document.getElementById("ptd1").classList.remove("ptd");
 }
 function setptd1() {
    document.getElementById("ptd2").classList.add("ptd");
 }
 function remptd1() {
     document.getElementById("ptd2").classList.remove("ptd");

  }
  function setptd2() {
    document.getElementById("ptd3").classList.add("ptd");
 }
 function remptd2() {
     document.getElementById("ptd3").classList.remove("ptd");

  }
  function setptd3() {
    document.getElementById("ptd4").classList.add("ptd");
 }
 function remptd3() {
     document.getElementById("ptd4").classList.remove("ptd");

  }

  const nnavbar = document.getElementById(mnavbar);

  window.onscroll = function()
      {
        if(window.pageYOffset > 700)
        {
            document.getElementById("mnavbar").classList.add("navbars");
        }
        else
        {
            document.getElementById("mnavbar").classList.remove("navbars");
        }
    }
