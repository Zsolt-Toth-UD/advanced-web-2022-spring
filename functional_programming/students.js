const maxPoints = 100;
const students = [
    { name: 'alice', points: 42},
    { name: 'bob', points: 89},
    { name: 'charlie', points: 12},
    { name: 'david', points: 53},
    { name: 'eve', points: 62},
    { name: 'frank', points: 41},
    { name: 'gabe', points: 28},
    { name: 'hugo', points: 73},
    { name: 'ivy', points: 72},
    { name: 'john', points: 49},
    { name: 'kevin', points: 82},
    { name: 'louise', points: 91},
    { name: 'maria', points: 39},
    { name: 'nora', points: 93},
    { name: 'oliver', points: 84},
    { name: 'peter', points: 72},
    { name: 'quentin', points: 74},
    { name: 'robert', points: 63},
    { name: 'sarah', points: 54},
    { name: 'tomas', points: 52},
]

const hasPassed = (points) => points > 50;

students.map((student) => {
    return {...student, hasPassed: hasPassed(student.points)};
})
    .filter(student => student.hasPassed)
    .forEach(student => console.log(student));


const passedStudentCount = students.map((student) => {
    return {...student, hasPassed: hasPassed(student.points)};
})
    .filter(student => student.hasPassed)
    .reduce((acc)=> ++acc, 0);
console.log(`${passedStudentCount} students has passed!`);

const markStudent = (points) => {
    const markLookUp = {
        '1': [0, 50],
        '2': [51, 65],
        '3': [66, 75],
        '4': [76, 90],
        '5': [91, 100]
    }
    return Object.keys(markLookUp).find(mark => {
        const [min,max] = markLookUp[mark];
        return min <= points && points <= max;
    }) || 'Problem';
}

students.map((student) => {
    return {...student, mark: markStudent(student.points)};
})
    .forEach((student) => console.log(student));

// Task:
//  - Grade Students on a Curve
//  - https://www.thoughtco.com/grading-on-a-curve-3212063#:~:text=Grading%20on%20a%20curve%20is,perhaps%20increasing%20the%20letter%20grade.
//  - https://tophat.com/glossary/g/grading-on-a-curve/
