//@ts-check
import minimist from "minimist";

/**@type {{[index: string]: any}} */
export const args = minimist(process.argv.slice(2))
