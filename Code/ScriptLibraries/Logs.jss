function CreateLog(docActual:NotesDocument,docAnterior:NotesDocument,key){
	//docActual,docAnterior

		var vParametros=database.getView("vListaValores");
		var docParam:NotesDocument =vParametros.getDocumentByKey("Bitacora-Campos-" + key,true);
		
		if(docParam!=null){
			var campos=docParam.getItemValue("values");
			for (var i=0;i<campos.length;i++){
				if(!docActual.getItemValueString(campos[i]).equals(docAnterior.getItemValueString(campos[i]))){
					var bitacora = "Cambio en el Campo: '" + campos[i] +"'- Valor Anterior: [ " + docAnterior.getItemValueString(campos[i]) + " ] , Valor Actual: [ " + docActual.getItemValueString(campos[i]) + " ] ";
					var docLogger=database.createDocument();
					docLogger.replaceItemValue("form","frmLog");
					docLogger.replaceItemValue("IDPadre",docActual.getItemValueString("IDDocumento"));
					docLogger.replaceItemValue("Accion",bitacora);
					docLogger.computeWithForm(true,false);
					docLogger.save(true);
				}
			}
		}

}
function CreateLogLine(action, docActual:NotesDocument){
					var docLogger=database.createDocument();
					docLogger.replaceItemValue("form","frmLog");
					docLogger.replaceItemValue("IDPadre",docActual.getItemValueString("IDDocumento"));
					docLogger.replaceItemValue("Accion",action);
					docLogger.computeWithForm(true,false);
					docLogger.save(true);
}