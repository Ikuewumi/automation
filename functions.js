/**@ts-check */

import { args } from "./start.js"
import { questions, userAnswers } from "./objects.js"
import { commands, deps, devDeps } from "./generator.js"
import { execCmd } from "./terminal.js"

/**
 * Join multiple terminal commands
 * @param  {...string} args 
 * @returns {string} Combined command
 */
export function j(...args) {
   return args.join(' && ')
}



/**
 * 
 * @param {{[index: string]: any}} obj The object of properties to be added
 */
export function addToUserAnswers(obj) {
   //@ts-nocheck
   Object.keys(obj).forEach(key => {
      userAnswers[key] = obj[key]
   })
}



/**
 * Add properties based on termainal input
 * @returns {UserQuestions}
 */
export function handleInputs() {
   let q = questions.slice(0, 4)
   const types = ['backend', 'frontend', 'fullstack']

   if (args.ts) {
      userAnswers.typescript = true
      q = q.filter(u => u.name !== 'typescript')
   }
   if (args.type && types.includes(args.type)) {
      userAnswers.type = args.type
      q = q.filter(u => u.name !== 'type')
   }

   return q
}

/**
 * @returns {UserQuestions} appropriate question
 */
export function switchTypeChoice() {
   let q = questions

   switch (userAnswers.type) {
      case ("backend"):
         q = q.filter(u => u.name === 'server')
         break;
      case ("frontend"):
      case ("fullstack"):
      default:
         q = q.filter(u => u.name === "client")
         break;
   }

   return q
}

function tsInstall(server = false) {
   if (!userAnswers.typescript) return commands.cd('.')

   let s = server ? [...devDeps.tsServer, ...devDeps.restType] : []
   let array = [...devDeps.ts, ...s]

   const cmd = commands.install(array, true)

   return cmd
}


/**
 * @param {{[index: string]: any}} props 
 */
export function switchPaths(props) {
   let varCmd = ''
   let cmd = ''
   let func = () => console.log('done..')

   switch (userAnswers.type) {
      case ('backend'):
         varCmd = props.server ? commands.install(deps.rest) : commands.install(deps.package)


         cmd = j(
            commands.mkdir(userAnswers.name),
            commands.cd(userAnswers.name),
            commands.init,
            varCmd,
            commands.install(devDeps.server, true),
            tsInstall(true),
            commands.cd('../')
         )

         func = () => {
            console.log(`backend-app ${userAnswers.name} created ...\n\n🌠 cd ${userAnswers.name}\nnpm install`)
         }

         execCmd(cmd, func)
         break;
      case ('frontend'):

         cmd = j(
            commands.vite(userAnswers.name, props.client, Boolean(userAnswers?.typescript)),
            commands.cd(`/${userAnswers.name}`),
            commands.install(devDeps.client, true),
            commands.cd('../')
         )

         func = () => {
            console.log(`frontend-app ${userAnswers.name} created ...\n\n🌠 cd ${userAnswers.name}\nnpm install`)
         }

         execCmd(cmd, func)

         break;
      case ('fullstack'):
         cmd = j(
            commands.mkdir(userAnswers.name),
            commands.cd(userAnswers.name),
            commands.init,
            commands.install(deps.rest),
            commands.install(devDeps.server, true),
            commands.install(devDeps.fullstack, true),
            tsInstall(true),
            commands.vite('client', props.client, Boolean(userAnswers?.typescript)),
            commands.cd(`/client`),
            commands.install(devDeps.client, true),
            commands.cd('../../')
         )

         func = () => {
            console.log(`fullstack-app ${userAnswers.name} created ...\n\n🌠 cd ${userAnswers.name}\nnpm install\n\n🌠 cd client\nnpm install`)
         }

         execCmd(cmd, func)
         break;
      default:
         console.error('invalid input')
   }
}
