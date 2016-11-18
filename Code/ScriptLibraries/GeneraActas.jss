function creaActas(){
			
		//Por tipo doc, hacer un getAllDocumentsByKey para traer las actividades por tipo
		//Por cada doc actividad, crear un documento de Cumplimiento de actividad
	
		// Traer el tipo para el activo seleccionado
	var vActivos:NotesView= database.getView("(ActivosByID)");
	var docActivo:NotesDocument= vActivos.getDocumentByKey(currentDocument.getItemValueString("Activo"), true);
	var tipo= docActivo.getItemValueString("Tipo");	 
	
	// Obtener las actividades segun el tipo
	var vActividades:NotesView= database.getView("(ActividadesPorTipo)");
	var dcActividades:NotesDocumentCollection= vActividades.getAllDocumentsByKey(tipo, true);
	
	// Recorrer los documentos de actividades
	var docActividad:NotesDocument= dcActividades.getFirstDocument();
	var contador= 0;
	while(docActividad!=null || contador>100){
		// Crear documentos de Cumplimiento, uno por cada doc de Actividad
		var newDoc:NotesDocument= database.createDocument();
		newDoc.replaceItemValue("Actividad", docActividad.getItemValueString("NombreActividad"))
		//newDoc.replaceItemValue("TiempoInicio", newDoc.getCreated())
		newDoc.replaceItemValue("Estado", "Pendiente") 
		newDoc.replaceItemValue("DuracionEstimada", docActividad.getItemValueInteger("Tiempo"))
		newDoc.replaceItemValue("Form", "CumplimientoActividades")
		newDoc.replaceItemValue("IDDocIncidente", currentDocument.getItemValueString("IDdocIncidentes"))
		
		newDoc.save(true, true, false)
		
		docActividad= dcActividades.getNextDocument(docActividad);
		
		contador= contador+1;
	}
}