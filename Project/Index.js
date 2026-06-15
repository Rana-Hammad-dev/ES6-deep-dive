import Tracker from './Tracker.js'

async function main() {
    const tracker = new Tracker();

    tracker.displayAll();

    //   Add a new student manually
    tracker.addStudent(101, "Ali Khan", [88, 92, 79, 95]);
    tracker.addStudent(102, "Sara Ahmed", [45, 38, 52, 41]);
    tracker.addStudent(103, "Ahmed Raza", [70, 65, 80, 75]);

    // Try adding duplicate
    tracker.addStudent(101, "Ali Khan"); // should warn

    //  Display updated list
    tracker.displayAll();

    // Show top student
    const top = tracker.getTopStudent();
    console.log(`\n🏆 Top Student: ${top.name} (Avg: ${top.getAverage()})`);

    //  Show passing students
    const passing = tracker.getPassingStudents();
    console.log(`\n Passing Students (${passing.length}):`);
    passing.forEach(s => s.display());

    //  Show failing students
    const failing = tracker.getFailingStudents();
    console.log(`\n Failing Students (${failing.length}):`);
    failing.forEach(s => s.display());

    //  Print summary table using map
    console.log("\n Summary:");
    console.table(tracker.getSummary());

    //  Remove a student
    tracker.removeStudent(102);
    console.log(`\nAfter removing Sara:`);
    tracker.displayAll();
}

main();