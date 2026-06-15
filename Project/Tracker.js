import Student from './Students.js'

class Tracker {
    constructor() {
        this.students = [];
    }

    addStudent(id, name, grades = []) {
        const isExist = this.students.find(s => s.id === id)
        if (isExist) {
            console.log(`Student with this id: ${id} already exist!`);
            return;
        }
        const student = new Student(id, name, grades);
        this.students.push(student);
        console.log(`Added: ${name}`)
    }

    removeStudent(id) {
        const before = this.students.length;
        this.students = this.students.filter(s => s.id !== id);
        if (this.students.length < before) {
            console.log(`Removed student ID: ${id}`)
        } else {
            console.log(`Student ID ${id} not found.`);
        }
    }
    getClassAverage() {
        if (this.students.length === 0) return 0;
        const total = this.students.reduce((acc, cur) => acc + cur.getAverage(), 0)
        return Math.round(total / this.students.length);
    }

    getTopStudent() {
        if (this.students.length === 0) return null;
        return this.students.reduce((acc, s) => s > acc ? s : acc)
    }

    getPassingStudents() {
        return this.students.filter(s => s.isPassing())
    }

    getFailingStudents() {
        return this.students.filter(s => !s.isPassing())
    }

    getSummary() {
        return this.students.map((s) => ({
            name: s.name,
            average: s.getAverage(),
            status: s.isPassing() ? "Passing" : "Failing"
        }))
    }
    displayAll() {
        if (this.students.length === 0) {
            console.log("No students found.");
            return;
        }
        console.log("\n===== All Students =====");
        this.students.forEach(s => s.display());
        console.log(`Class Average: ${this.getClassAverage()}`);
        console.log("========================\n");
    }
}

export default Tracker