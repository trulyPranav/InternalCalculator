const mainContent = document.getElementById('container');
const mark1 = document.getElementById('series1');
const mark2 = document.getElementById('series2');
const attendance = document.getElementById('attendance');
const assignments = document.getElementById('assignments');
const resultText = document.getElementById('resultText');
const popup = document.getElementById('popup');
const form = document.getElementById('marksForm');

function calculateTotal(event) {
    event.preventDefault();
    let flag = 0;
    const seriesAvg = (parseFloat(mark1.value) / 50) * 12.5 + (parseFloat(mark2.value) / 50) * 12.5;
    const attendancePercentage = parseFloat(attendance.value);
    let attendanceMark = 0;

    if (attendancePercentage > 100 || attendancePercentage < 0) {
        alert('Enter a Valid Attendance Percentage');
        flag = 1;
    }
    if (parseFloat(mark1.value) > 50 || parseFloat(mark2.value) > 50 || parseFloat(mark1.value) < 0 || parseFloat(mark2.value) < 0) {
        alert('Enter Valid Series Marks');
        flag = 1;
    }
    if (parseFloat(assignments.value) > 15 || parseFloat(assignments.value) < 0) {
        alert('Enter a Valid Overall Assignment Score');
        flag = 1;
    }

    if (flag === 0) {
        if (attendancePercentage >= 90 && attendancePercentage <= 100) {
            attendanceMark = 10;
        } else if (attendancePercentage >= 80 && attendancePercentage < 90) {
            attendanceMark = 9;
        } else {
            attendanceMark = 8.5;
        }

        const totalMark = seriesAvg + parseFloat(assignments.value) + attendanceMark;
        resultText.textContent = `Your Internal Mark is ${totalMark.toFixed(2)}`;
        popup.style.display = 'block';
        form.reset();
        mainContent.classList.add('blur');
    }
}
document.getElementById('marksForm').addEventListener('submit', calculateTotal);

function calculateAgain() {
    popup.style.display = 'none';
    mainContent.classList.remove('blur');
}

document.getElementById('calculateAgain').addEventListener('click', calculateAgain);
document.getElementById('marksForm').addEventListener('submit', calculateTotal);

document.addEventListener("DOMContentLoaded", function () {
    const showDevelopersButton = document.getElementById("showDevelopers");
    const developerList = document.getElementById("developerList");

    showDevelopersButton.addEventListener("click", function () {
        if (developerList.style.display === "none") {
            developerList.style.display = "block";
        } else {
            developerList.style.display = "none";
        }
    });
});
