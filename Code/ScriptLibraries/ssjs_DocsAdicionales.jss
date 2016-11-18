
function labelCantidadDocsAdicionales(nombreVista, key){
	var vDocAdicionales:NotesView= database.getView(nombreVista);
	var dcDocs:NotesDocumentCollections= vDocAdicionales.getAllDocumentsByKey(key, true);
	return "(" + dcDocs.getCount().toString() + ")"
}