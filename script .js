document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('attendance-form');
    const attendanceList = document.getElementById('attendance-list');
    const studentNameInput = document.getElementById('student-name');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const studentName = studentNameInput.value.trim();
        
        if (studentName) {
           
            const listItem = document.createElement('li');
            listItem.textContent = studentName;

           
            attendanceList.appendChild(listItem);

           
            studentNameInput.value = '';
        } else {
            alert('Please enter a student name.');
        }
    });
});
