var mapa = new L.map('mi-mapa', {
    center: [20, 50],
    zoom: 2    
});

var capaOSM = new L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png');
//var capaRelieve = new L.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg');
var capaHibrido = new L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{	
			attribution: 'Mapa híbrido de Google',
			maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] });

capaRelieve.addTo(mapa);
//capaOSM.addTo(mapa);


var capasBase = {
    "Relieve": capaRelieve,
    "OpenStreetMap": capaOSM
};

var selectorCapas = new L.control.layers(capasBase);
selectorCapas.addTo(mapa);
