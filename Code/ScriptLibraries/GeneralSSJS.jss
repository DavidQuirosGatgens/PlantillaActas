//$splice -> Array.splice according to ECMA standards
function SpliceArray( array, startIndex, numItems ){
	try {


		//return array;
		var endIndex = startIndex + numItems;


		var itemsBeforeSplice = [], splicedItems = [], itemsAfterSplice = [];
		for( var i = 0; i < array.length; i++ ){
			if( i < startIndex & (array[i] !=undefined)){ 
				itemsBeforeSplice.push( array[i] );
			}
			if( i >= startIndex && i < endIndex & (array[i] !=undefined))
			{ 
					splicedItems.push( array[i] ); 
					
			}
			if( i >= endIndex & (array[i] !=undefined)){ 
				itemsAfterSplice.push( array[i] ); 
			}      
		}
		// Insert all arguments/parameters after numItems
		for( i = 3; i < arguments.length; i ++ ){   
			itemsBeforeSplice.push( arguments[ ''+i ] );   
		}
		// Combine before/after arrays
		var remainingItems = itemsBeforeSplice.concat( itemsAfterSplice );
		return remainingItems;
		// Rewrite array. Arrays can't be overwritten directly in SSJS

//		return splicedItems;
	} catch(e){ /*Debug.logException( e );*/ 
		print('Error: ' + e);
		//return array;


	}
}
function InitRedirect(){

	sessionScope.RedirectTema="";
	sessionScope.RedirectSeguimiento="";
	sessionScope.RedirectComunicado="";
	sessionScope.RedirectOrdenDia="";
	sessionScope.RedirectAcuerdo="";
	sessionScope.RedirectActa="";
	sessionScope.RedirectTarea="";
}
function ArrayMoveUp( array:Array, itemMove){
	Array.prototype.moveUp = function(value, by) {
	    var index = this.indexOf(value),     
	        newPos = index - (by || 1);
	    
	    if(index === -1) 
	        throw new Error("Element not found in array");
	    
	    if(newPos < 0) 
	        newPos = 0;
	        
	    this.splice(index,1);
	    this.splice(newPos,0,value);
	};
	try {

		array.moveUp(itemMove);
		return array;

	} catch(e){ /*Debug.logException( e );*/ 
		print('Error: ' + e);
		//return array
	}
}
function ArrayMoveDown( array:Array, itemMove){
	Array.prototype.moveDown = function(value, by) {
	    var index = this.indexOf(value),     
	        newPos = index + (by || 1);
	    
	    if(index === -1) 
	        throw new Error("Element not found in array");
	    
	    if(newPos >= this.length) 
	        newPos = this.length;
	    
	    this.splice(index, 1);
	    this.splice(newPos,0,value);
	};
	try {
		array.moveDown(itemMove);
		return array;


	} catch(e){ /*Debug.logException( e );*/ 
		print('Error: ' + e);
		//return array;


	}
}
function CreateBitacora(User1:NotesName,Action:String,Detalle:String,IdAsociado:String){
	try {
		var docBitacora:NotesDocument;
		docBitacora=database.createDocument();
		docBitacora.replaceItemValue("form","Bitacora");
		docBitacora.replaceItemValue("IDDocBitacora",IdAsociado);
		docBitacora.replaceItemValue("IDDocumento",docBitacora.getUniversalID());
		docBitacora.replaceItemValue("Usuario",User1.getAbbreviated());
		docBitacora.replaceItemValue("hora",docBitacora.getCreated());
		docBitacora.replaceItemValue("Accion",Action);
		docBitacora.replaceItemValue("Detalle",Detalle);
		docBitacora.save()
	} catch(e){ 
		print('Error: ' + e);

	}
}
function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
function ObtieneDatosTema(idTema){
	print(idTema);
	
	try{
		var viewTemas:NotesView=database.getView("(IdDocumentos)");
		if(viewTemas!=null){
			if(!idTema.equals("")){
				var docTema=viewTemas.getDocumentByKey(idTema,true);
				if (docTema!=null){
					currentDocument.setValue("SesionReferencia",docTema.getItemValueString("NumerOrden"));
					currentDocument.setValue("ArticuloReferencia",docTema.getItemValueString("NumeroTema"));
					currentDocument.setValue("IDTemaReferencia",docTema.getUniversalID());
				}else{
					currentDocument.setValue("SesionReferencia","");
					currentDocument.setValue("ArticuloReferencia","");
					currentDocument.setValue("IDTemaReferencia","");
				}
			}else{
				currentDocument.setValue("SesionReferencia","");
				currentDocument.setValue("ArticuloReferencia","");
				currentDocument.setValue("IDTemaReferencia","");
			}
		}else{
			currentDocument.setValue("SesionReferencia","");
			currentDocument.setValue("ArticuloReferencia","");
			currentDocument.setValue("IDTemaReferencia","");
		}
	}catch(e){
		print('Error: ' + e);
		return "";
	}

}
