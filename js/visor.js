var mapa = new L.map('mi-mapa', {
    center: [41.0831, -3.9760],
    zoom: 9.5    
});


var capaOSM = new L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png');
//var capaRelieve = new L.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg');
var capaHibrido = new L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{	
			attribution: 'Mapa híbrido de Google',
			maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] });

capaHibrido.addTo(mapa);
//capaRelieve.addTo(mapa);
//capaOSM.addTo(mapa);


var capasBase = {
    "HibridoGoogle": capaHibrido,
    "OpenStreetMap": capaOSM
};

var selectorCapas = new L.control.layers(capasBase);
selectorCapas.addTo(mapa);

//METE EL CONTROL DE PANTALLA COMPLETA-NO VA Y PARA TODO LO SIGUIENTE
//L.control.Fullscreen().addTo(mapa);

//METE EL MARKER DRAGABLE
	L.marker([41.0831, -3.9760], {	
		draggable: true
	}).addTo(mapa).on('dragend', onClick);


