/**@ts-check */
import inquirer from "inquirer"
import { addToUserAnswers, handleInputs, switchPaths, switchTypeChoice } from "./functions.js"

const ask = async () => {


   /**@type {UserAnswers} */
   const answers = await inquirer.prompt(handleInputs())
   addToUserAnswers(answers)
   const spec = await inquirer.prompt(switchTypeChoice())
   switchPaths(spec)




}

ask()