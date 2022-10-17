// @ts-check
import child from "node:child_process"

const p = child

/**
 * Runs a given command in the shell
 * @param {string} cmdString The string of the command
 * @param {() => ?} func Function to be run after the command is run exits. The node process is exited after this
 */
export const execCmd = (cmdString = 'ls .', func) => {
   p.exec(cmdString, (err, _) => {
      if (err) {
         console.error(err)
         return process.exit(0)
      }

      func()
      process.exit(1)
   })
}