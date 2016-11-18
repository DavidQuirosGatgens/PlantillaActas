var SwSkipClosePrompt=0;

if(document.attachEvent)
 document.attachEvent("onreadystatechange", AttSubHide);

function SwInitializeControl(formName, maxAttachments) {
	document.SwControl.SW_OnLoadSet(formName, maxAttachments);
}

function AttSubHide(){
	if (document.readyState=="complete")
		document.SwControl.SW_OnDocumentComplete();
		
	return true;
}

function SwOnBeforeUnload(){

	if ((document.getElementById("#{id:SwIsEditMode}").value == "1") && (SwSkipClosePrompt == 0)){
		event.returnValue = "You are editing the document!";
	}	
}