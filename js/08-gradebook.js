function getGrade(points) {
    if (points < 60) {
        return 'F';
    } else if (points < 70) {
        return 'D';
    } else if (points < 80) {
        return 'C';
    } else if (points < 90) {
        return 'B';
    } else if (points <= 100) {
        return 'A';
    } else {
        return 'Invalid Entry';
    }
}

var avgPoints = 0;
var ursulaGrade, paulGrade, henryGrade, tabithaGrade, lucyGrade;
var grade;

//Get Grade for Ursula
grade = window.prompt('Enter grade for Ursula');
avgPoints += parseInt(grade, 10);
ursulaGrade = getGrade(grade);
//console.log('Average point ' + avgPoints);

//Get Grade for Paul
grade = window.prompt('Enter grade for Paul');
avgPoints += parseInt(grade, 10);
paulGrade = getGrade(grade);
//console.log('Average point ' + avgPoints);

//Get Grade for Henry 
grade = window.prompt('Enter grade for Henry');
avgPoints += parseInt(grade, 10);
henryGrade = getGrade(grade);
//console.log('Average point ' + avgPoints);

//Get Grade for Tabitha
grade = window.prompt('Enter grade for Tabitha');
avgPoints += parseInt(grade, 10);
tabithaGrade = getGrade(grade);
//console.log('Average point ' + avgPoints);

//Get Grade for Lucy
grade = window.prompt('Enter grade for Lucy');
avgPoints += parseInt(grade, 10);
lucyGrade = getGrade(grade);
//console.log('Average point ' + avgPoints);

avgPoints = Math.round(avgPoints / 5);

console.log('Student(s)     Grade');
console.log('Ursula     ' + ursulaGrade);
console.log('Paul   ' + paulGrade);
console.log('Henry  ' + henryGrade);
console.log('Tabitha    ' + tabithaGrade);
console.log('Lucy   ' + lucyGrade);
console.log('Average point ' + avgPoints);
