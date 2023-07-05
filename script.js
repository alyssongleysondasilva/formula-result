function area_circulo() {
    var raio = parseFloat(document.getElementById('raio').value);
    var area = Math.PI*(raio**2);
    document.getElementById('area').value = area;
}
