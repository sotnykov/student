class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  present() {
    this._updateAttendance(true);
  }

  absent() {
    this._updateAttendance(false);
  }

  _updateAttendance(isPresent) {
    const totalAttendance = this.attendance.filter(val => val !== null).length;
    if (totalAttendance < 25) {
      this.attendance[totalAttendance] = isPresent;
    } else {
      console.log('The maximum number of attendance records has already been reached.');
    }
  }

  summary() {
    const averageGrade = this.grades.reduce((acc, val) => acc + val, 0) / this.grades.length;
    const attendanceRatio = this.attendance.filter(val => val === true).length / 25;

    if (averageGrade > 90 && attendanceRatio > 0.9) {
      return 'Excellent!';
    } else if (averageGrade > 90 || attendanceRatio > 0.9) {
      return 'Good, but could be better.';
    } else {
      return 'Bad!';
    }
  }
}

const student1 = new Student('Alex', 'Mercer', 2000);
const student2 = new Student('Niki', 'De Saint', 1999);

student1.addGrade(95);
student1.addGrade(85);
student1.addGrade(90);

student2.addGrade(92);
student2.addGrade(87);
student2.addGrade(80);

student1.present();
student1.present();
student1.absent();

student2.present();
student2.present();
student2.present();

console.log(student1.summary());
console.log(student2.summary());