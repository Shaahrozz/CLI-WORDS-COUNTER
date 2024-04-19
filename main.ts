#! /usr/bin/env node 
import inquirer from 'inquirer';
import chalk from 'chalk'
console.log(chalk.bgYellow("*Welcome to Words Counter program*"))
let data= await inquirer.prompt([{
    name: 'a',
    type: 'input',
    message:'Please input text: '
}]) 
if (data.a !==""){
    let ans= data.a.trim().split(" ")
    console.log(ans)
    console.log(`\n\t Your Sentence Word Count is ${ans.length} words`)
}
else{
    console.log(chalk.red('No text entered!'))
}
