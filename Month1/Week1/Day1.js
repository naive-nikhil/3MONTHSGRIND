// Question 1
// Create and array with 5 Students names, after that create a function which takes 2 parameters (allStudents, studentName) and iterate over all students and find that specific user "studentName".

// Solution
const allStudents = ["Nikhil", "Suyash", "Prashant", "Nishi", "Varsha"];
const studentName = "Varsha";

function findStudent(allStudents, studentName) {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log("Found", studentName);
    }
  }
}

findStudent(allStudents, studentName);