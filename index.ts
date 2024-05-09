#!/usr/bin/env node

import inquirer from "inquirer";

// let fruitchat = ["Banana", "Apple","Mangoes", "Orange" ];
// console.log(fruitchat);

// //push()
// fruitchat.push("Melon");             // 1 value add hojaegi
// console.log(fruitchat);

// //pop()
// fruitchat.pop();                      // 1 value kam hojaegi
// console.log(fruitchat);

// //concat()
// fruitchat = fruitchat.concat("Kiwi", "Melon");
// console.log(fruitchat);



//loops

// let i = 0;

// while (i <= 10){
//     console.log(i);
//     i++
// };






// let todos = [];
// let condition = true;


// while(condition)
//     {
// let addTask = await inquirer.prompt(
//     [
//         {
//             name : "todo",
//             message :"What you want to add in your todos?",
//             type : "input" ,
//         },
//         {
//             name : "addMore",
//             message : "Do you want to add more ?",
//             type : "confirm",
//             default : "false",
//         }
//     ]
// );

// todos.push(addTask.todo);
// condition = addTask.addMore
// console.log(todos);

//     };





let todos = [];
let condition = true;

while(condition)
    {

let todoQuestion = await inquirer.prompt(
    [
        {
            name : "firstQuestion",
            type : "input",
            message : "What would you like to add in your todos?",
        },
        {
            name : "secondQuestion",
            type : "confirm",
            message : "Would you like to add more in your todos?",
            default : "true",
        }
    ]
);

todos.push(todoQuestion.firstQuestion);
console.log(todos);
condition = todoQuestion.secondQuestion;

    };



// read, update , delete , Add home work







