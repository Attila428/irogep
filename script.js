let szovegdoboz = document.getElementById("szovegdoboz");
let szamlalo = document.getElementById("szamlalo");    

szovegdoboz.addEventListener("input",function(){
    let karakterek = szovegdoboz.value;
    let karakterekSzama = karakterek.length;
    szamlalo.textContent = karakterekSzama;
});