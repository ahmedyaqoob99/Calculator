var memory = 0;

function get(a) {
    document.getElementById("screen").value += a.innerHTML;
}

function clr() {
    document.getElementById("screen").value = "";
}

function result() {
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}

function del() {
    var a = document.getElementById("screen").value;
    var b = new Array();
    for (var i = 0; i < a.length - 1; i++) {
        b[i] = a.charAt(i);
    }
    document.getElementById("screen").value = b.join("");
}

function m_p() {
    memory += eval(document.getElementById("screen").value);
}

function m_m() {
    memory -= eval(document.getElementById("screen").value);
}

function m_r() {
    document.getElementById("screen").value = memory;
}

function per() {
    document.getElementById("screen").value = parseInt(eval(document.getElementById("screen").value)) / 100;
}