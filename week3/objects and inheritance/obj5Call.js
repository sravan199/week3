var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"sravan",
    lastName: "reddy",
}
var person2 = {
    firstName:"vanamala",
    lastName: "anugu",
}
person.fullName.call(person1);
console.log(person.fullName.call(person1));