const mark1 = document.getElementById('series1');
const mark2 = document.getElementById('series2');
const attendance = document.getElementById('attendance');
const assignments = document.getElementById('assignments');
const result = document.getElementById('result');

function calculateTotal(event) {

    event.preventDefault();
    
    const seriesAvg = (parseFloat(mark1.value) / 50) * 12.5 + (parseFloat(mark2.value) / 50) * 12.5;
    let attendanceMark = 0;
    const attendancePercentage = parseFloat(attendance.value);
    if (attendancePercentage >= 90) {
        attendanceMark = 10;
    } else if (attendancePercentage >= 80 && attendancePercentage < 90) {
        attendanceMark = 9;
    }else {
        attendanceMark = 8.5;
    }

    const totalMark = seriesAvg + parseFloat(assignments.value) + attendanceMark;
    result.textContent = totalMark;
}
document.getElementById('marksForm').addEventListener('submit', calculateTotal);