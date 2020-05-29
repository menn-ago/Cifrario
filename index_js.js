
function cifra() {
    var alf = "abcdefghijklmnopqrstuvxyz";
    var numb = parseInt(document.getElementById("num").value);
    var text1 = document.getElementById("testo1");
    var text2 = document.getElementById("testo2");
    var length = text1.value.length;
    var i;
    for(var i = 0; i < length; i++) {
        var v1 = text1.value.charAt(i);
        var pos = alf.indexOf(v1);
        var n1 = alf.charAt(pos + numb);
        text2.value = text2.value + n1;
    }
}

