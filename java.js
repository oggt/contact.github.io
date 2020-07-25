var firebaseConfig = {
    apiKey: "AIzaSyAtF7yZFZ18xzl_mz3PFu4mQrhXrXNL4Gs",
    authDomain: "contact-form-df695.firebaseapp.com",
    databaseURL: "https://contact-form-df695.firebaseio.com",
    projectId: "contact-form-df695",
    storageBucket: "contact-form-df695.appspot.com",
    messagingSenderId: "765685836411",
    appId: "1:765685836411:web:bcec69b2794b8e09b990de",
    measurementId: "G-Y8ZWF3HZRQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var messagesRef = firebase.database().ref('messages');
  document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){
	e.preventDefault();
	var first_name = getInputVal('first_name');
	var last_name = getInputVal('last_name');
	var contact = getInputVal('contact');
	var email = getInputVal('email');
	var message = getInputVal('message');
	saveMessage(first_name,last_name,contact,email,message);

}
function getInputVal(id) {
	return document.getElementById(id).value;
	// body...
}
function saveMessage(first_name,last_name,contact,email,message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		first_name:first_name,
        last_name:last_name,
        contact:contact,
		email:email,
		message:message,
		
	});
}