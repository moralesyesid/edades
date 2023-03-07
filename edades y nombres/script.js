function compararEdades() {
    var nombre1 = document.getElementById("nombre1").value;
    var edad1 = parseInt(document.getElementById("edad1").value);
    var nombre2 = document.getElementById("nombre2").value;
    var edad2 = parseInt(document.getElementById("edad2").value);
    var nombre3 = document.getElementById("nombre3").value;
    var edad3 = parseInt(document.getElementById("edad3").value);
  
    var mayor = "";
  
    if (edad1 > edad2 && edad1 > edad3) {
      mayor = nombre1;
    } else if (edad2 > edad1 && edad2 > edad3) {
      mayor = nombre2;
    } else if (edad3 > edad1 && edad3 > edad2) {
      mayor = nombre3;
    } else {
      mayor = "No se pudo determinar la persona más mayor";
    }
  
    document.getElementById("resultado").innerHTML = mayor + " es la persona más mayor";
  }