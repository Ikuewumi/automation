export const commands = {
   mkdir: (folder = '') => `mkdir ${folder}`,

   cd: (folder = '') => `cd ${folder}`,

   init: `npm init -y`,

   install: (deps = ['lodash'], isDevDep = false) => {
      return (`npm install${isDevDep ? ' -D' : ''} ${deps.join(' ')}`)
   },

   vite: (dir = '', lang = 'vue', ts = false) => {
      return (`npm create vite@latest ${dir} -- --template ${lang}${ts ? '-ts' : ''}`)
   }
}

export const deps = {
   rest: ['express', 'mongoose', 'bcrypt', 'jsonwebtoken', 'config', 'dotenv', 'cors', 'body-parser', 'needle'],
   package: ['minimist', 'uuid', 'inquirer'],
}
export const devDeps = {
   rest: ['nodemon'],
   package: ['nodemon'],
   server: ['nodemon', 'morgan'],
   restType: ['@types/express', '@types/bcrypt', '@types/jsonwebtoken', '@types/config', '@types/node'],
   ts: ['typescript'],
   tsServer: ['ts-node'],
   client: ['sass'],
   fullstack: ['concurrently']
}