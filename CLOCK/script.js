function updateClock() {
    const now = new Date(); // Get the current date and time using the Date object
    let hours = now.getHours(); // Extract the current hour from the Date object
    let minutes = now.getMinutes(); // Extract the current minute from the Date object
    let seconds = now.getSeconds(); // Extract the current second from the Date object

    // Add leading zeros if necessary (e.g., convert 9 to 09)
    hours = hours < 10 ? `0${hours}` : hours; // If hours is less than 10, prepend a '0' to maintain two digits
    minutes = minutes < 10 ? `0${minutes}` : minutes; // If minutes is less than 10, prepend a '0'
    seconds = seconds < 10 ? `0${seconds}` : seconds; // If seconds is less than 10, prepend a '0'

    const timeString = `${hours}:${minutes}:${seconds}`; // Create a string in the format HH:MM:SS

    document.getElementById('clock').textContent = timeString; // Update the element with ID 'clock' to display the current time
}

// Update clock every second
setInterval(updateClock, 1000); // Use setInterval to call the updateClock function every 1000 milliseconds (1 second)

// Initial call to display the clock immediately
updateClock(); // Call the updateClock function once to display the time right away without waiting for the interval

