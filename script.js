function see() {
    var base = (document.getElementById("base").value);
    console.log(base);
    return add();
}
function add() {
    let nmbr = document.getElementById("nmbr").value;
    let prcnt = document.getElementById("prcnt");
    let marks = document.getElementById("marks");
    if (nmbr != "" && base.value == "cgpa") {
        prcnt.value = parseFloat(nmbr * 9.5).toFixed(2) + " " + "%";
        marks.value = parseFloat(nmbr * 9.5 * 12).toFixed(2);
    }
    else if (nmbr != "" && base.value == "sgpa") {
        prcnt.value = parseFloat(nmbr * 9.5).toFixed(2) + " " + "%";
        marks.value = parseFloat(nmbr * 9.5 * 6).toFixed(2);
    }
    else {
        document.getElementById("nmbr").value = "";
        prcnt.value = "";
        marks.value = "";
    }
}
function visit(){
    window.open ("https://znap.link/lfgraphics", "_blank");
}