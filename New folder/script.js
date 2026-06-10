// Function to close the notification bar
function closeNotification() {
    const bar = document.getElementById('notification-bar');
    bar.classList.add('hidden');
}

// Function to show the notification bar
function showNotification() {
    const bar = document.getElementById('notification-bar');
    bar.classList.remove('hidden');
}
