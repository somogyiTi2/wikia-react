//Primives: number, string, boolean
//More conplex types: arrays, object
//Function type, parameters

//Primitivs:
let age: number;
//kisbetüvel kell a typust kezdeni.
age = 12.1;
let userName: string;
userName = "Tibi";

let isInstructor: boolean;

isInstructor = true;

// undefined
// let hobbies: null;
// hobbies = 12; //HIBA!!!

let hobbies: string[]; //Csak string kerülhet a tömbe, de működik minden primitivvel .
hobbies = ["Sports", "Cooking"]; //hibát dob ha szám is van benne

let person: any; //minden lehet

let otherpersons: {
  name: string;
  age: number;
};

person = {
  name: "TI2",
  age: 32,
};

// otherpersons = {
//   isEmployee: true
// };
//hibát fog dobni

let people: {
  name: string;
  age: number;
}[]; //olyan tárgyak tömbje

let cores = "React-The Complete Guride";
//lényegében itt nem kell leíni, hogy stringet fogadjon csak le mert kikövetkeztetni az inicalizálásból, hogy csak ilyen lehet innentől
// course=12341;//hibás emiatt ez
let otherCorse: string = "Így se hibás";

//van Unió type amivel mind 2 lehet
let unionType: string | number = "Most megadhatok neki numbert is";
let OtherUserName: string | string[];

interface PersonInterface {
  name?: string;
  age?: number; //így lehet opcionális a kérdőjellel
  ageFn: (param1: number) => string; //lehet fügvényt is megadni
}

let personI: PersonInterface = {
  ageFn(param1: number) {
    return param1.toString();
  },
};

type Person = {
  name?: string;
  age: number;
};
//sajtá típust találhatunk ki

let person_: Person = { age: 5, name: "asdasdasd" };
let person2: {
  name: string;
  age: number;
} = { age: 5, name: "asdasdasd" };

//Funkciók és típusok
// function add(a: number, b: number):ez jöhet ki ezt kikövetkeztetni
function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  //unction print(): void (+1 overload) nincs visszatérési értéke void a visszatérési érték undefinited
  console.log(value);
}

//Generics
function otherInserAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

function inserAtBeginning<T>(array: T[], value: T) {
  //sajtá kellékele <T>-álltalános típus
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = inserAtBeginning(demoArray, -1); //[-1,1,2,3]
const stringArray = inserAtBeginning(['a','b','c'],'d');

// updatedArray[0].split("");
