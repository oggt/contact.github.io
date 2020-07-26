var firebaseConfig = {
  apiKey: "AIzaSyAaIh4n5O9lpZbPqlPbukW-PO5Zx1-u4Fo",
  authDomain: "contact-form-8408d.firebaseapp.com",
  databaseURL: "https://contact-form-8408d.firebaseio.com",
  projectId: "contact-form-8408d",
  storageBucket: "contact-form-8408d.appspot.com",
  messagingSenderId: "21074218842",
  appId: "1:21074218842:web:a85d3bfe0586c39a45ad63",
  measurementId: "G-X00FE114Z8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.database();

  var messagesRef = firebase.database().ref('messages');
  document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){
	e.preventDefault();
	var name = getInputVal('fn');
	var name = getInputVal('ln');
	var contact = getInputVal('contact');
	var email = getInputVal('email');
	var message = getInputVal('msg');
	saveMessage(name,name,contact,email,message);

}
function getInputVal(id) {
	return document.getElementById(id).value;
	// body...
}
function saveMessage(name,name,contact,email,message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name:name ,
        name:name,
        contact:contact,
		email:email,
		message:message,
		
	});
}