# Automation

## An opinionated package to help quickly create project structures

### Getting Started
To use, just type:

```js
npm i -g @ayobamsik/automation
npx automation
```


### Parameters(Optional)
- ```--ts```: if flag is added, uses TypeScript while creating template
- ```--type```: valid values(```frontend```, ```backend```, ```fullstack```). can be used to select the template types stated above. Pretty self-explanatory names; _I hope_


### Behind The Scenes

It uses **```vite```** (and ```sass```) for the front-end template under the hood and installs the following for the server side template:

- **REST API**: ```express```, ```mongoose```, ```morgan```, ```bcrypt```, ```config```, ```dotenv```,  ```jsonwebtoken```, ```body-parser```, ```cors```, ```needle```, (```concurrently``` - fullstack).

- **PACKAGES**: ```minimist```, ```uuid```, ```inquirer```

plus ```nodemon```, (```typescript```, ```ts-node```) if ```TypeScript``` is enabled

---

If you want to clone the package and make it your own, Feel free and you can also check my [GitHub](https://github.com/Ikuewumi) for other stuff I do.

Please feel free to comment on **anything** you want about the code or just in general.

Happy Coding,
Ayobami Ikuewumi
