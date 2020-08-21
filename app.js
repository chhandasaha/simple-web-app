
	var counter = 0;
	var users = {}
	var index;
	function submit(){
		var str = "<table> <tr><th>Number </th><th>Name </th><th>Email </th></tr>";
		var username = document.getElementById('username').value;
		var email = document.getElementById('email').value;
		counter=counter+1;
		users[counter] ={username, email};
		for (var i = 1; i<= counter; i++){
			index = i;
			str = str 
            	+ "<tr class ='trow' onclick='showDetails(`"+i+"`)'>" 
                + "<td>"+ i + "</td>"
                + "<td>"+ users[i].username + "</td>"
                + "<td>"+ users[i].email + "</td>"
                + "</tr>" ;
		}
		//console.log(users);
		document.getElementById('userForm').style.display = "none";
		document.getElementById('userButton').style.display="block";
		document.getElementById('appTable').innerHTML = str + "</table>";
		document.getElementById('username').value = "";
		document.getElementById('email').value = "";
		}
	function showForm(){
		document.getElementById('userForm').style.display="block";
		document.getElementById('userButton').style.display="none";
	}
	function showDetails(i){
		console.log(i + ', ' + users[i].username + ',' + users[i].email );
		//alert(index);
	}