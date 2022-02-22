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

### Jest Config

 - Add jest as devDependency
 - Test files should match to a pattern.
   - test directory
     - per project 
     - per directory
   - filename.test.js
   - filename.spec.js
   - ```[ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ]```
 - Add jest.config.js
 - There are different test naming strategies. Each strategy has advantages and drawbacks.

#### Test Naming Strategies

```(*.)+(spec|test).js```

Test files with test suffix are placed next to the source.

 - Pros
   - Test suites and source placed next to each other.
   - Shorter import/require statements. 

 - Cons
   - Source and Test is mixed.
   - Test should not be part of production code. Extra step in build process.

```**/__test__/**/*.js```

Test files are put into a ```__test__``` directory which contains tests for source files in the parent. 

 - Pros
   - Source and Test files are separated.
   - Short import/require statements.
 - Cons
   - Many ```__test__``` directories.
   - Test files still should be removed from sources.

```<rootDir>/src, <rootDir>/test```

Source and Test files are placed in different directories under the project root. 
Similar to Java Maven. 
You may be already familiar with this approach.

 - Pros
   - Source and Test directories are distinguished.
   - Simple build process. Copy only the ```src``` directory. 
 - Cons
   - Longer import/require statements.
   - Should create the same directory hierarchy twice. 
   - Test files still named according to ```(*.)+(spec|test).js```  pattern.

In order to keep the project directory small and clean, we are going to create src and test directories. 

Move existing source files into src directory. 
The main file ```index.js``` could be placed either under ```src``` or project root. 

Create the ```jest.config.js``` file in the project root. 
This config file should export a [configuration](https://jestjs.io/docs/configuration) object.

Create ```test``` directory and implement test suites and cases.

```javascript
describe('test suite', ()=>{
  it('tests something', ()=>{
    // given
    const expected = 'expected value';
    // when
    const actual = service.doSomehting();
    // then
    expect(actual).toBe(expected); 
  });
});
```

Your test cases should be [F.I.R.S.T](https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6).
Use the given-when-then patter to separate the major steps of unit test case.

#### Mocking
