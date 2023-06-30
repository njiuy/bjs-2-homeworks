let StudentFirst = new Student("Елена", "женский", 21);
let StudentSecond = new Student("Владимир", "мужской", 20);
let StudentThird = new Student("Ольга", "женский", 22);

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (typeof this.marks === false || this.marks === undefined) {
    return 0;
  }
    this.marks = [...this.marks, ...marksToAdd];
  }


Student.prototype.getAverage = function (...marks) {
  if (this.marks === undefined || this.marks === []) {
    return 0;
  } else {
    return this.marks.reduce((acc, item, index, marks) => acc + item / marks.length, 0);
  } 
} 


Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}
