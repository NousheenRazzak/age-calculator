// Age Calculator
import inquirer from 'inquirer';
import chalk from 'chalk';
let age = await inquirer.prompt({
    name: 'year',
    type: 'number',
    message: 'Enter your birth year to calculate your age: '
});
let birth_year = age.year;
let answer = (2024 - birth_year);
console.log(chalk.cyan(`You are ${answer} years old.`));
