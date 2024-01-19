function Verificar() {
    var sticker1 = parseInt(document.getElementById("sticker1").value);
    var sticker2 = parseInt(document.getElementById("sticker2").value);
    var sticker3 = parseInt(document.getElementById("sticker3").value);
    var total = sticker1 + sticker2 + sticker3;
    if (total <= 10) {
      document.getElementById("resultado").innerHTML = "Llevas " + total + " stickers";
    } else {
      document.getElementById("resultado").innerHTML = "Llevas demasiados stickers";
    }
  }
