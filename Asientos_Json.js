function cargaTabla(){
	var peticion = new XMLHttpRequest();
	
	peticion.onload = function(){
		
		if(peticion.status == 200){
			var respuesta = JSON.parse(peticion.responseText);
						
			var contenedor = document.getElementById('tabla');
			
			var tabla = document.createElement('table');
			tabla.setAttribute("border","2");
			contenedor.appendChild(tabla);
			
			var cabecera = document.createElement('tr');
			cabecera.setAttribute("id","cabecera");
			tabla.appendChild(cabecera);
			
			var thCabecera = document.createElement('th');
			thCabecera.setAttribute("colspan","3");
			var tituloCabecera = document.createTextNode("EXTRACTO");
			thCabecera.appendChild(tituloCabecera);			
			cabecera.appendChild(thCabecera);
			
			var primeraFila = document.createElement('tr');
			primeraFila.setAttribute("id","encabezado");
			tabla.appendChild(primeraFila);
   
    		var thFecha = document.createElement('th');
			thFecha.setAttribute("class","subTitulos");
    		var fecha = document.createTextNode("Fecha");
			thFecha.appendChild(fecha);
			primeraFila.appendChild(thFecha);
			
			var thConcepto = document.createElement('th');
			thConcepto.setAttribute("id","titulo-concepto");
			var concepto = document.createTextNode('Concepto');
			thConcepto.appendChild(concepto);
			primeraFila.appendChild(thConcepto);
			
			var thImporte = document.createElement('th');
			thImporte.setAttribute("class","subTitulos");
			var importe = document.createTextNode('Importe');
			thImporte.appendChild(importe);
			primeraFila.appendChild(thImporte);
						
			for(var i=0;i<respuesta.asientos.length;i++){
				
				var fila = document.createElement('tr');
				tabla.appendChild(fila);
				
				var tdFecha = document.createElement('td');
				
				var datoFecha = document.createTextNode(respuesta.asientos[i].fecha);
				tdFecha.appendChild(datoFecha);
				fila.appendChild(tdFecha);
				
				var tdConcepto = document.createElement('td');
				
				var datoConcepto = document.createTextNode(respuesta.asientos[i].concepto);
				tdConcepto.appendChild(datoConcepto);
				fila.appendChild(tdConcepto);
				
				var tdImporte = document.createElement('td');
				
				var datoImporte = document.createTextNode(respuesta.asientos[i].importe + " €");
				tdImporte.setAttribute("id","ajuste-importe");
				tdImporte.appendChild(datoImporte);
				fila.appendChild(tdImporte);
			}
			contenedor.appendChild(tabla);
			
		}
	
	}
	
	peticion.open('GET','json/Asientos.json',true);
	peticion.send(null);
}




function main(){
	
	document.getElementById('boton').addEventListener('click',cargaTabla,false);
	
}
	
	
window.addEventListener("load",main, false);