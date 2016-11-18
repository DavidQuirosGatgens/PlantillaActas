

function CreaDocumentoActa(IdOrden)
{
		
	var db:NotesDatabase=session.CurrentDatabase()
    
    var documento:NotesDocument = db.createDocument();

	documento.Form = "Acta"	
	documento.Replaceitemvalue("NumeroActa","0011")	
	documento.Replaceitemvalue("FechaActa", @Now().toString())
	documento.Replaceitemvalue("IDdocOrden",IdOrden)
	
	documento.save()	
    
	
}

  
	