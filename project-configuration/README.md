# Node Project Configuration Task

This project left empty open intentionally. Check the branch __demo/project-configuration__ for the solution. 

Tasks
 - [ ] Initialize Node Project, _package.json_
 - [ ] Configure ESLint
   - [ ] Use AirBnB Settings
   - [ ] Semicolons are required
   - [ ] Indentation is 2 spaces
   - [ ] Maximum length of line is 120 characters
   - [ ] Curly braces required for all blocks
   - [ ] Use camelCase naming convention
   - [ ] Add Scripts for checking and fixing style rule violations
 - [ ] Add Jest Configuration
   - [ ] Add test script
   - [ ] Calculate test coverage
   - [ ] Include all source files into coverage report
   - [ ] Add minimum code coverage quality gate
 - [ ] Refactor the code for ESLint and add Tests. 
 - [ ] Extend gitignore file properly!

### Project Initialization
```shell
npm init
```

### ESLint Config
 - Add eslint as devDependency

```shell
npx eslint --init
```

```shell
You can also run this command directly using 'npm init @eslint/config'.
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2
✔ Would you like to install them now with npm? · No / Yes
Installing eslint-config-airbnb-base@latest, eslint@^7.32.0 || ^8.2.0, eslint-plugin-import@^2.25.2

added 61 packages, and audited 145 packages in 9s
```

- Turn on ESLint in WebStrom. File/Settings/Languages & Frameworks/JavaScript/Code Quality Tools/ESLint. Set to _Automatic ESLint configuration_.
