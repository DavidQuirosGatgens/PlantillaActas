function FinalizaDocsAsociados( curDocument:NotesDocument ){
	try {
		var vAsociados:NotesView=database.getView("(TodosDocumentos_GroupByAsociados)");
		var colAsociados:NotesDocumentCollection=vAsociados.getAllDocumentsByKey(curDocument.getItemValueString("IDdocOrden"))
		var docIter:NotesDocument=colAsociados.getFirstDocument();
		while(docIter!=null){
			if(docIter.getUniversalID()!=curDocument.getUniversalID()){
				docIter.replaceItemValue("Estado","Cerrado");
				docIter.save(true,false)
			}
			docIter=colAsociados.getNextDocument(docIter);
		}
	} catch(e){ /*Debug.logException( e );*/ 
		print('Error: ' + e);

	}
}
function ReemplazaLectoresDocsAsociados( curDocument:NotesDocument,lectores:Vector ){
	try {
		var vAsociados:NotesView=database.getView("(TodosDocumentos_GroupByAsociados)");
		var colAsociados:NotesDocumentCollection=vAsociados.getAllDocumentsByKey(curDocument.getItemValueString("IDdocOrden"))
		var docIter:NotesDocument=colAsociados.getFirstDocument();
		while(docIter!=null){
			if(docIter.getUniversalID()!=curDocument.getUniversalID()){
				docIter.replaceItemValue("Lectores",lectores);
				docIter.save(true,false)
			}
			docIter=colAsociados.getNextDocument(docIter);
		}
	} catch(e){ /*Debug.logException( e );*/ 
		print('Error: ' + e);
	}
}
function ReemplazaAutoresDocsAsociados( curDocument:NotesDocument,lectores:Vector ){
	try {
		var vAsociados:NotesView=database.getView("(TodosDocumentos_GroupByAsociados)");
		var colAsociados:NotesDocumentCollection=vAsociados.getAllDocumentsByKey(curDocument.getItemValueString("IDdocOrden"))
		var docIter:NotesDocument=colAsociados.getFirstDocument();
		while(docIter!=null){
			if(docIter.getUniversalID()!=curDocument.getUniversalID()){
				docIter.replaceItemValue("Autores",lectores);
				docIter.save(true,false)
			}
			docIter=colAsociados.getNextDocument(docIter);
		}
	} catch(e){ /*Debug.logException( e );*/ 
		print('Error: ' + e);

	}
}