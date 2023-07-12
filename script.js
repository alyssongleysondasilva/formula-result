function area_circulo() {
    var raio = parseFloat(document.getElementById('raio').value);
    var area = Math.PI*(raio**2);
    document.getElementById('area').value = area;
}
function area_losango() {
    var diagonal_maior = parseFloat(document.getElementById('diagonal_maior').value);
    var diagonal_menor = parseFloat(document.getElementById('diagonal_menor').value);
    var area = (diagonal_maior * diagonal_menor)/2;
    document.getElementById('area').value = area;
}
function area_paralelogramo() {
    var altura = parseFloat(document.getElementById('altura').value);
    var base = parseFloat(document.getElementById('base').value);
    var area = altura * base;
    document.getElementById('area').value = area;
}
function area_quadrado(){
    var lado = parseFloat(document.getElementById('lado').value);
    var area = lado**2;
    document.getElementById('area').value = area;
}
function area_retangulo(){
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = base * altura;
    document.getElementById('area').value = area;
}
function area_trapezio(){
    var base_maior = parseFloat(document.getElementById('base_maior').value);
    var base_menor = parseFloat(document.getElementById('base_menor').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = ((base_maior*base_menor)*altura)/2;
    document.getElementById('area').value = area;
}
function area_triangulo(){
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = (base*altura)/2;
    document.getElementById('area').value = area;
}
function area_trianguloEquilatero(){
    var lado = parseFloat(document.getElementById('lado').value);
    var area = ((lado**2)*Math.sqrt(3))/4;
    document.getElementById('area').value = area;
}