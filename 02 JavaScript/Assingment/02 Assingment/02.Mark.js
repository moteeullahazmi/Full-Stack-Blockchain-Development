// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

function grade(marks) {
 
  switch (true) {
    case 90 <= marks && marks <= 100:
      console.log("S grade");
      break;
    case 80 <= marks && marks <= 90:
      console.log("A grade");
      break;
    case 70 <= marks && marks <= 80:
      console.log("B grade");
      break;
    case 60 <= marks && marks <= 70:
      console.log("C grade");
      break;
    case 50 <= marks && marks <= 60:
      console.log("D grade");
      break;
    case 40 <= marks && marks <= 50:
      console.log("E grade");
      break;
    case 0 <= marks && marks <= 40:
      console.log("Student has Failed");
      break;
    default:
      console.log("Invalid Marks");
      break;
  }
}

grade(80);