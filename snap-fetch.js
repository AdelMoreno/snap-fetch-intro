

	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			console.log(myJson);
			document.getElementById("demo").innerHTML = fetch();
		});


