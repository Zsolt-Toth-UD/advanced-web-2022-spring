
// fist class function
function greetings(name){
    return `Hello ${name}`;
}

// Arrow Function
const wellcome = (name) => {
    return `Hello ${name}`;
}

const sayHello = greetings;

console.log(greetings('JavaScript'));
console.log(sayHello('JavaScript'));
console.log(wellcome('JavaScript'));

// Note:
//  - Functions can be used as variables

// callback
const greetingsToStream = (name, stream) => {
    stream(greetings(name));
}
greetingsToStream('JavaScript', console.log);
greetingsToStream('JavaScript', console.error);
greetingsToStream('JavaScript', (message)=>{
    console.log(message.toUpperCase());
});

// Note:
//  - You can pass functions as arguments
//  - You can combine it with arrow functions


//currying
// f(arg_1, arg_2, arg_n)
// f(arg_1) => g(arg_2) => .. => h(arg_n)

const power = (base) => (exponent) => Math.pow(base, exponent);
console.log(Math.pow(2,10))
console.log(power(2)(10))

// Note:
//  - You can return with a function!

// closure
const Counter = (initVal, step) => {
    var val = initVal
    return () => {
        val += step;
        return val;
    }
}

const counter1 = Counter(10, 5);
const counter2 = Counter(0, -2);

for(let i = 0; i < 10; i++){
    console.log(`${i},${counter1()},${counter2()}`);
}

// Note:
//  - You can access the variables of the wrapping function.

// Promise

const isEven = (number) => {
    return new Promise(((resolve, reject) => {
        const sleepInterval = 1000;
        setTimeout(()=>{
            number % 2 === 0 ? resolve(number) : reject(number);
        }, sleepInterval)
    }));
}

isEven(10)
    .then((n) => console.log(`${n} is Even!`))
    .catch((n) => console.log(`${n} is Odd!`));

// Note:
//  - Chaining Promises could lead to difficult code

// async / await

const decideIsEven = async (number) => {
    try{
        let n = await isEven(number);
        console.log(`${n} is Even`);
    }
    catch (e) {
       console.error({error: e});
    }
}
decideIsEven(2);
decideIsEven(3)

//     decorator

const loggingDecorator = (fn) => async (args) => {
    const startTimestamp = new Date();
    const result = await fn(args);
    const endTimestamp = new Date();
    console.log(`Elapsed Time: ${endTimestamp - startTimestamp}`);
    return result;
}

const logIsEven = loggingDecorator(decideIsEven);
logIsEven(12);

// Note:
//  - Logging behaviour was added to the decideIsEven Function
