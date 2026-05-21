// concept: Destructuring, Spread, Rest in one function
function createUser({
    name,
    age = 18,
    city: location,
    role = 'user',
    ...extraInfo
} = {}) {
    return {
        name,
        age,
        location,
        role,
        ...extraInfo
    }
}

const profile = createUser({
    name: 'Alice',
    city: 'New York',
    age: 25,
    github: 'alice123',
    twitter: '@alice'
})

// console.log(profile)

// All 5 concepts in ONE problem:
const student = {
    name: "Ali",
    age: 22,
    city: "Lahore",
    scores: [88, 92, 75, 95, 60]
};

// Your Tasks:
// Task 1 — Destructure name and age from student
const { name, age } = student;

// Task 2 — Destructure city but rename it to location
const { citt: location } = student;

// Task 3 — Destructure a field country that doesn't exist — give it default value "Pakistan"
const { country = "Pakistan" } = student;

// Task 4 — Destructure scores array — store first score in topScore, store remaining in otherScores using rest
const { scores: [topScore, ...otherScores] } = student;

// Task 5 — Create a new object updatedStudent that has all properties of student + add a new field grade: "A" using spread
const { ...updatedStudent } = student;
updatedStudent.grade = "A";
// console.log(updatedStudent); // Ali

function exercise() {

    // Exercise 1 — destructure a user object
    // Extract name, age, and city. Rename city to location. Provide a default for role.
    const user = { name: "Ali", age: 22, city: "Lahore" };
    const { name, age, city: location, role = "user" } = user;
    // console.log(name, location, role);//Ali Lahore user

    // Exercise 2 — swap two variables
    // Use array destructuring to swap a and b in ONE line — no temp variable.
    let a = 10, b = 20;
    // swap using destructuring
    [b, a] = [a, b]
    // console.log(a, b); // should print: 20 10

    // Exercise 3 — merge objects with spread
    // Merge defaults and userSettings.userSettings values should win.Use spread operator.
    const defaults = { theme: "light", lang: "en", fontSize: 14 };
    const userSettings = { theme: "dark", fontSize: 18 };
    const final = { ...defaults, ...userSettings };

    console.log(final); // { theme: "dark", lang: "en", fontSize: 18 }
}
exercise()