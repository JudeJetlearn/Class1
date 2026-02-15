window.onresize = screenSizer
window.onload = screenSizer

function screenSizer() {

    WIDTH = window.innerWidth
    document.getElementById("size").innerHTML = WIDTH+"px"


}
