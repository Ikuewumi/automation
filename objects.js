/**
 * The user answers object. Usually contains the default properties
 *  @type {UserAnswers}
 */
export let defaultAnswers = {
   type: 'fullstack',
   typescript: false,
   name: 'cool-project',
   description: 'A blazingly fast - 🔥 and a super-cool project - 😉'
}

/**
 * The user answers object. Usually contains the default properties
 *  @type {UserAnswers}
 */
export let userAnswers = defaultAnswers

/**
 * The user questions array
 *  @type {UserQuestions}
 */
export let questions = [
   {
      name: 'type',
      type: 'rawlist',
      message: 'Select the flavor of the project',
      choices: ["backend", "frontend", "fullstack"]
   }, {
      name: 'typescript',
      type: 'confirm',
      message: 'Do you want to use TypeScript'
   }, {
      name: 'name',
      type: 'input',
      message: 'Project name',
      default: 'cool-project'
   }, {
      name: 'description',
      type: 'input',
      message: 'Add a description',
      default: 'A blazingly fast - 🔥 and a super-cool project - 😉'
   },
   {
      name: 'client',
      type: 'rawlist',
      message: 'Choose your framework',
      choices: ['vue', 'react', 'svelte', 'lit', 'angular'],
      default: 'vue',
   },
   {
      name: 'server',
      type: "confirm",
      message: 'Building a REST API?',
   },
]