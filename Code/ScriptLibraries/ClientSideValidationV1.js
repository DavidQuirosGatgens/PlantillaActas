function checkSearchField(element, length, message){
	alert("Prueba Cambio");
	return false;
} 
function checkSearchField1(element, length, message){
	if(null != element){
		if(element.value == ""){
			alert(message);
			element.focus();
			return false;
		}
		if(element.value.length < length){
			alert("Please enter a value of at least " +length + " characters.");
			element.select();
			return false;
		}
		return true;
	}
} 
function validaCampoTextoSimple(element){
	if(null != element){
		if(element.value == ""){
			element.focus();
			return false;
		}
	}
	return true;
} 
function validaCampoTexto(element){
	if(null != element){
		if(element.value == ""){
			return false;
		}
	}
	return true;
}
function validaComboBox(element) {
	var valor;
	if(null != element){
		if (element.selectedIndex == -1 ){
			return false;
		}else{
			if(element.options[valor.selectedIndex].text == "") {
				return false; 
			}else{
				return true;
			}
		} 
	}
}
function ValidaRadChk(element) 
{
	var valor;
	if(null != element){
		for (i=0; i<element.length; i++) {
			if (element[i].checked)
			{return true}
		}
	}
	return false
}