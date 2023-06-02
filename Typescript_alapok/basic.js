//Primives: number, string, boolean
//More conplex types: arrays, object
//Function type, parameters
//Primitivs:
var age;
//kisbetüvel kell a typust kezdeni.
age = 12.1;
var userName;
userName = "Tibi";
var isInstructor;
isInstructor = true;
// undefined
// let hobbies: null;
// hobbies = 12; //HIBA!!!
var hobbies; //Csak string kerülhet a tömbe, de működik minden primitivvel .
hobbies = ["Sports", "Cooking"]; //hibát dob ha szám is van benne
var person; //minden lehet
var otherpersons;
person = {
    name: "TI2",
    age: 32,
}[];
// otherpersons = {
//   isEmployee: true
// };
//hibát fog dobni
var people; //olyan tárgyak tömbje
people = { name: 'hello', age: 10 }, { name: 'Tibi', age: 20 };
console.log(people);
var cores = 'React-The Complete Guride';
//lényegében itt nem kell leíni, hogy stringet fogadjon csak le mert kikövetkeztetni az inicalizálásból, hogy csak ilyen lehet innentől
// course=12341;//hibás emiatt ez
var otherCorse = 'Így se hibás';
//van Unió type amivel mind 2 lehet
var unionType = 'Most megadhatok neki numbert is';
var OtherUserName;
//sajtá típust találhatunk ki és alkamazhatunk? 
