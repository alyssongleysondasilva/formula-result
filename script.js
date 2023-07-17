function area_circulo() {
    var raio = parseFloat(document.getElementById('raio').value);
    var area = Math.PI*(raio**2);
    //document.getElementById('area').value = area;
    document.getElementById('area').value = (area.toFixed(2));
}
function area_losango() {
    var diagonal_maior = parseFloat(document.getElementById('diagonal_maior').value);
    var diagonal_menor = parseFloat(document.getElementById('diagonal_menor').value);
    var area = (diagonal_maior * diagonal_menor)/2;
    //document.getElementById('area').value = area;
    document.getElementById('area').value = (area.toFixed(2));
}
function area_paralelogramo() {
    var altura = parseFloat(document.getElementById('altura').value);
    var base = parseFloat(document.getElementById('base').value);
    var area = altura * base;
    //document.getElementById('area').value = area;
    document.getElementById('area').value = (area.toFixed(2));
}
function area_quadrado(){
    var lado = parseFloat(document.getElementById('lado').value);
    var area = lado**2;
    //document.getElementById('area').value = area;
    document.getElementById('area').value = (area.toFixed(2));
}
function area_retangulo(){
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = base * altura;
    //document.getElementById('area').value = area;
    document.getElementById('area').value = (area.toFixed(2));
}
function area_trapezio(){
    var base_maior = parseFloat(document.getElementById('base_maior').value);
    var base_menor = parseFloat(document.getElementById('base_menor').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = ((base_maior+base_menor)*altura)/2;
    //document.getElementById('area').value = area;
    document.getElementById('area').value = (area.toFixed(2));
}
function area_triangulo(){
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = (base*altura)/2;
    //document.getElementById('area').value = area;
    document.getElementById('area').value = (area.toFixed(2));
}
function area_trianguloEquilatero(){
    var lado = parseFloat(document.getElementById('lado').value);
    var area = ((lado**2)*Math.sqrt(3))/4;
    //document.getElementById('area').value = area;
    document.getElementById('area').value = (area.toFixed(2));
}
function volume_cilindro(){
    var raio_base = parseFloat(document.getElementById('raio_base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var volume = Math.PI*(raio_base**2)*altura;
    //document.getElementById('volume').value = volume;
    document.getElementById('volume').value = (volume.toFixed(2));
}
function volume_cone(){
    var raio = parseFloat(document.getElementById('raio').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var volume = (Math.PI*(raio**2)*altura)/3;
    //document.getElementById('volume').value = volume;
    document.getElementById('volume').value = (volume.toFixed(2));
}
function volume_cubo(){
    var lado = parseFloat(document.getElementById('lado').value);
    var volume = lado**3;
    //document.getElementById('volume').value = volume;
    document.getElementById('volume').value = (volume.toFixed(2));
}
function volume_esfera(){
    var raio = parseFloat(document.getElementById('raio').value);
    var volume = (4*Math.PI*(raio**3))/3;
    //document.getElementById('volume').value = volume;
    document.getElementById('volume').value = (volume.toFixed(2));
}
function volume_paralelepipedo(){
    var altura_base = parseFloat(document.getElementById('altura_base').value);
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    var volume = altura_base * comprimento;
    //document.getElementById('volume').value = volume;
    document.getElementById('volume').value = (volume.toFixed(2));
}
function volume_piramide(){
    var area_base = parseFloat(document.getElementById('area_base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var volume = (area_base*altura)/3;
    //document.getElementById('volume').value = volume;
    document.getElementById('volume').value = (volume.toFixed(2));
}
function volume_prismaHexagonal(){
    var altura = parseFloat(document.getElementById('altura').value);
    var area_base = parseFloat(document.getElementById('area_base').value);
    var volume = altura*area_base;
    //document.getElementById('volume').value = volume;
    document.getElementById('volume').value = (volume.toFixed(2));

}