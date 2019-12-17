function getAlerted(){
	var person1 = {name: "Winston", age: 20, job: "Software Engineer", graduated: true};
	var person2 = {name: "Amy", age: 21, job: "Teacher", graduated: true};
	var person3 = {name: "Alex", age: 25, job: "Driver", graduated: false};

	var people = [person1, person2, person3];
	for(var i = 0; i < people.length; i++){
		if(people[i].graduated == true){
			document.getElementById('demo').innerHTML += people[i].name + ' is graduated' + '<br>';
		}else{
			document.getElementById('demo').innerHTML += people[i].name + ' is not graduated' + '<br>';
		}
	}
}