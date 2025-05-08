function confirmWorkout() {
    const selectedExercises = [];
    let totalTime = 0;

    // Loop through all exercise checkboxes
    document.querySelectorAll('.exercise-check').forEach(box => {
        if (box.checked) {
            const name = box.dataset.name;
            const time = parseInt(box.dataset.time);

            // Add selected exercise with its details
            selectedExercises.push({ name, time });

            // Add time to total
            totalTime += time;
        }
    });

    // Calculate wait time as same as total workout time (for 2 people before you)
    const waitTime = totalTime;
    const finalTime = totalTime + waitTime;

    // Save everything to localStorage
    localStorage.setItem('selectedExercises', JSON.stringify(selectedExercises));
    localStorage.setItem('workoutTime', totalTime);
    localStorage.setItem('waitTime', waitTime);
    localStorage.setItem('totalWorkoutTime', finalTime);

    // Save source page to go back to it later
    localStorage.setItem('previousWorkoutPage', window.location.pathname);

    // Redirect to summary page
    window.location.href = 'workout-plan.html';
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('workout-plan.html')) {
        const exercises = JSON.parse(localStorage.getItem('selectedExercises')) || [];
        const workoutTime = parseInt(localStorage.getItem('workoutTime')) || 0;
        const waitTime = parseInt(localStorage.getItem('waitTime')) || 0;
        const totalTime = parseInt(localStorage.getItem('totalWorkoutTime')) || 0;

        // Fill the exercise table
        const tableBody = document.querySelector('#exerciseTable tbody');
        if (tableBody) {
            if (exercises.length === 0) {
                const row = document.createElement('tr');
                row.innerHTML = `<td colspan="2" style="color:red;">No exercises selected.</td>`;
                tableBody.appendChild(row);
            } else {
                exercises.forEach(ex => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${ex.name}</td>
                        <td>${ex.time}</td>
                    `;
                    tableBody.appendChild(row);
                });
            }
        }

        // Update workout summary
        const set = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        };

        set('workoutTime', workoutTime);
        set('waitTime', waitTime);
        set('totalTime', totalTime);

        // Set dynamic back link
        const backLink = document.getElementById('backLink');
        if (backLink) {
            const previousPage = localStorage.getItem('previousWorkoutPage');
            backLink.href = previousPage ? previousPage : 'lap4.html';
        }
    }
});
