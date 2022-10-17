/**@ts-check */
/**
* @typedef {{ 
*type:'backend'|'fullstack'|'frontend',
*typescript:boolean,
*name:string,
*description:string
*}} UserAnswers  
*/

/**
 * @typedef {'vue'|'react'|'svelte'|'angular'|'lit'} ClientLibraries
 */

/**
 * @typedef {Array<{
 * name:'type'|'typescript'|'name'|'description'|'server'|'client',
 * type:string,
 * message:string,
 * choices?: Array<UserAnswers["type"]|ClientLibraries>,
 * default?: string
 * }>} UserQuestions 
*/

/**
 * The Blueprint for a dependency object
 * @typedef {{ [index: string]: string | "latest" }} DepsObject 
 */

/**
 * The Blueprint for a scripts object
 * @typedef {{ [index: string]: string }} ScriptsObject 
 */

/**
 * Blueprint of a package.json text
 * @typedef {{
 * name: string,
 * private?: boolean,
 * description: string,
 * version: string,
 * license: string,
 * author: string,
 * scripts: ScriptsObject,
 * dependencies?: DepsObject,
 * devDependencies?: DepsObject,
 * [index: string]: string | Array<any> | object
 * }} PackageJSONObject
 */
