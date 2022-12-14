//Nivell 1
//Exercici 1
//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

function asynFunction(wasSuccess) {
    return new Promise((resolve, reject) => {
        if (wasSuccess == true) {
            resolve("eventual finalizacio");
        } else {
            reject("falla o error");
        }
    });
}

//console.log(asynFunction(true));
//console.log(asynFunction(false));

//Exercici 2
//Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge
//o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

//higher function
const infoClient = (name, callback) => {
    const day = `Bon dia ${name}!`;
    const night = `Bona nit ${name}!`;
    if (Math.random() < 0.5) {
        console.log(callback(day));
    } else {
        console.log(callback(night));
    }
};

//callback
let saludar = (name) => {
    console.log(name);
};

//infoClient("Moritz", saludar);

//Nivell 2
//Exercici 1
//Donats els objectes employees i salaries, crea una arrow function getEmployee()
//que retorni una Promise efectuant la cerca en l'objecte pel seu id.

let employees = [
    {
        id: 1,
        name: "Linux Torvalds",
    },
    {
        id: 2,
        name: "Bill Gates",
    },
    {
        id: 3,
        name: "Jeff Bezos",
    },
];

let salaries = [
    {
        id: 1,
        salary: 4000,
    },
    {
        id: 2,
        salary: 1000,
    },
    {
        id: 3,
        salary: 2000,
    },
];

const getEmployee = (id) => {
    const employee = employees.find((employees) => employees.id == id);
    const promise = new Promise((resolve, reject) => {
        if (!employee) {
            reject(`Aquest ${id} no existeix`);
        } else {
            resolve(employee);
        }
    });
    return promise;
};

/* getEmployee(1)
    .then((res) => console.log(res))
    .catch((err) => console.log(err)); */

//Exercici 2
//Crea una altra arrow function getSalary() similar a l'anterior
//que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (employee) => {
    const salary = salaries.find((salary) => salary.id == employee.id);
    const promise = new Promise((resolve, reject) => {
        if (!salary) {
            reject(`Aquest ${salary} no existeix`);
        } else {
            resolve(salary);
        }
    });
    return promise;
};

//Exercici 3
//Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises
//de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

/* getEmployee(3).then((employee) =>
    getSalary(employee).then((salary) =>
        console.log(`${employee.name}: ${salary.salary}`)
    )
); */

//Nivell 3
//Exercici 1
//Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

/* getEmployee(8)
    .then((res) => console.log(res))
    .catch((err) => console.log(err)); */

//Export per Entrega 1.4: Async / Await
module.exports = {
    getEmployee: getEmployee,
    getSalary: getSalary,
};
