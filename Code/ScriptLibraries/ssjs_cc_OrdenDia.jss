function querySaveDocument(){
	var agent = database.getAgent('(SaveOrdenDia)');
	if(null != agent){
		var document = document1.getDocument(true); 
		if(null != document){
			try{
				agent.runWithDocumentContext(document);
				document1.setValue("NumerOrden",document.getItemValueString("NumerOrden"));
			}catch(e){
				print('Error: ' + e);
				return;
			}
			//document.save();
		}
	}

}

function postSaveDocument(){
	sessionScope.RedirectTema="/xpOrden.xsp?documentId="+currentDocument.getDocument().getUniversalID() + "&action=editDocument";
	
}
