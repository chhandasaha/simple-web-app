
	var counter = 0;
	var users = {}
	function submit(){
		var username = document.getElementById('username').value;
		var email = document.getElementById('email').value;
		counter=counter+1;
		users[counter] ={username, email};
		console.log(users);
		document.getElementById('userForm').style.display = "none";
		document.getElementById('userButton').style.display="block";
		}
	function showForm(){
		document.getElementById('userForm').style.display="block";
		document.getElementById('userButton').style.display="none";
	}
 