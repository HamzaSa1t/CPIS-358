async function confirmWorkout() {
    const selectedExercises = [];
    let totalTime = 0;

    document.querySelectorAll('.exercise-check').forEach(box => {
        if (box.checked) {
            const name = box.dataset.name;
            const time = parseInt(box.dataset.time);
            selectedExercises.push({ name, time });
            totalTime += time;
        }
    });

    const waitTime = totalTime;
    const finalTime = totalTime + waitTime;

    // Save to localStorage
    localStorage.setItem('selectedExercises', JSON.stringify(selectedExercises));
    localStorage.setItem('workoutTime', totalTime);
    localStorage.setItem('waitTime', waitTime);
    localStorage.setItem('totalWorkoutTime', finalTime);
    localStorage.setItem('previousWorkoutPage', window.location.pathname);

    // 🔁 Send data to backend
   
  


    // ✅ Continue as normal
    window.location.href = 'workout-plan.html';
}
