class Person {
	firstName: string = "";
   	get firstName() { return this.firstName; }
   	set firstName(value: string) { this.firstName = value.toUpperCase(); }
}

var p = new Person();
p.firstName = "Suman";
console.log(p.firstName);