document.addEventListener("DOMContentLoaded", function () {
    const updateDataButton = document.getElementById("updateData");

    updateDataButton.addEventListener("click", function () {
        // Get user-inputted data
        const cropAStatusInput = document.getElementById("cropAStatusInput").value;
        const cropALastWateredInput = document.getElementById("cropALastWateredInput").value;
        const cropBStatusInput = document.getElementById("cropBStatusInput").value;
        const cropBLastWateredInput = document.getElementById("cropBLastWateredInput").value;

        // Update the DOM with user-inputted data
        document.getElementById("cropAStatus").textContent = cropAStatusInput;
        document.getElementById("cropALastWatered").textContent = cropALastWateredInput;
        document.getElementById("cropBStatus").textContent = cropBStatusInput;
        document.getElementById("cropBLastWatered").textContent = cropBLastWateredInput;
    });
});