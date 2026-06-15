class Student {
    constructor(id, name, grades) {
        this.id = id;
        this.name = name;
        this.grades = grades
    };

    getAverage() {
        if (!this.grades.length === 0) "grades cannot be empty!";
        const totalMarks = this.grades.reduce((acc, cur) => acc + cur, 0);
        return Math.round(totalMarks / this.grades.length);
    }
    isPassing() {
        return this.getAverage() >= 50;
    }

    display() {
        const status = this.isPassing() ? "Passing" : "Failing";
        console.log(`[${this.id}] ${this.name} | Avg: ${this.getAverage()} | ${status}`)
    }
}

export default Student;
