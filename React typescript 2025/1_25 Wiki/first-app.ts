let userName: string = "Tibi";
//useName =34;/bad
userName = 'Max';

let userAge = 34;

let usValid = true;

type StingOrNumb = string | number

let unionA: StingOrNumb/* string |number */ = 123;
unionA = "asdasd"

//string, number, boolean
//npx tsc first-app.ts

// let user: object
// let user:{}
type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}

let user: User;

user = {
    name: "hello",
    age: 26,
    isAdmin: true,
    id: 33 /*asdsad*/
}

// let hoobies: Array<string>;

let hoobies: string[];

//{name:_stirng; age:number}[]

hoobies = ['sport', 'guitar', 'coding'];

//function add(a: number, b: number) : undefined <-NEM ADOK VISSZA ÉRTÉKET = void <- ugyan az  {
function add(a: number, b: number): number {
    const result = a + b;
    console.log(result);
    return result;
}

type AddFn = (a: number, b: number) => number

function calculate(
    a: number,
    b: number,
    //  calcFn: (a: number, b: number) => number
    calcFn: AddFn
) {
    calcFn(a, b)
}
calculate(2, 5, add)

interface Credentials {
    password: string;
    email: string;
    /*key: type*/
}

let creds: Credentials;

creds = {
    password: 'abc',
    email: 'test@email.com'
}

class AuthCredentials implements Credentials {
    email: string;
    password: string;
    userName: string;
}

function login(credentials: Credentials) {

}

login(new AuthCredentials())


//1: WITH TYPES

// type Admin = {
//     permissions: string[];
// }

// type AppUser = {
//     userName: string;
// }

// // type AddAdmin = Admin | AppUser;
// type AddAdmin = Admin & AppUser;

// let admin: AddAdmin;

// admin = {
//     permissions: ['login'],
//     userName: 'Tibi'
// }


//2: WITH interface

interface Admin {
    permissions: string[];
}
interface AppUser {
    userName: string;
}
interface AddAdmin extends Admin, AppUser { }

let admin: AddAdmin;

admin = {
    permissions: ['login'],
    userName: 'tibi'
}

let role: 'admin' | 'user' | 'editor' //'admin' or 'user' or 'editor'
type Role = 'admin' | 'user' | 'editor'

function performAction(action: string, roleL: Role) {
    if (role === 'admin') {
        //...
    }
}

let roles: Array<Role>


//<T>-will be write bármilyen karaketer lehet
type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
}

/*itt meghatározhetom mi a T*/
const textStorage: DataStorage<string> = {
    storage: [],
    add: function(data) {
        this.storage.push(data);
    }
};

const numberStorage: DataStorage<number> = {
    storage: [],
    add: function(data) {
        this.storage.push(data);
    }
};

const userStorage: DataStorage<User> = {
    storage: [],
    add: function(user) {
        this.storage.push(user);
    }
}

//REACT: 

//npm create vite@latest react-ts-basics
//npm i 
//npm run dev
