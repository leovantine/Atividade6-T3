// Crie um objeto que receba ao menos três propriedades sobre você.

let profile = {
    
    name: "Leonardo",
    age: 16,
    height: 183
}
console.log(profile)

// Adicione uma nova propriedade sem alterar seu objeto inicial.

profile.color = "Blue"

// Remova uma propriedade desse objeto.

delete profile.height

//Mostre no console todas as propriedades desse objeto.

console.log(profile)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.


let cadastro = [{

    nome: "Leonardo", 
    idade: 16,
    telefone: 32984204812,
    amigos: ["Maria", "Tobias", "Isabela", "Heloa"]
},

{
    nome: "Maria",
    idade: 16,
    telefone: 24981205839,
    amigos: ["Celina", "Gustavo", "Jorge", "Samuel"]
},

{
    nome: "Tobias",
    idade: 16,
    telefone: 24981569246,
    amigos: ["Silvana", "Júlia", "Victoria", "Juliana"]
},

{
    nome: "Isabela",
    idade: 14,
    telefone: 24981205739,
    amigos: ["Natasha", "Matheus", "Débora", "Vanessa"]
},

{
    nome: "Heloa",
    idade: 18, 
    telefone: 24981502948,
    amigos: ["Ricardo", "Joyce", "Marcos", "James"]
}
]

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[1].amigos)
console.log(cadastro[0].amigos)
console.log(cadastro[0].amigos)
console.log(cadastro[2].amigos)
console.log(cadastro[3].amigos)