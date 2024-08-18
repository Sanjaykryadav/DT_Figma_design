// Sidebar Toggle Functionality
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const mainContent = document.querySelector('.main-content');

sidebarToggle.addEventListener('click', function() {
  sidebar.classList.toggle('expanded');
  mainContent.classList.toggle('shifted');
  
  // Change the arrow direction when toggling
  if (sidebar.classList.contains('expanded')) {
    sidebarToggle.innerHTML = '&#8249;'; // Left arrow
  } else {
    sidebarToggle.innerHTML = '&#8250;'; // Right arrow
  }
});

// Notification Panel Toggle Functionality
const notificationPanel = document.getElementById('notification-panel');
const notificationToggle = document.querySelector('.notification-toggle');

notificationToggle.addEventListener('click', function() {
  notificationPanel.classList.toggle('expanded');
  
  // Change the arrow direction when toggling
  if (notificationPanel.classList.contains('expanded')) {
    notificationToggle.innerHTML = '&#8250;'; // Left arrow
  } else {
    notificationToggle.innerHTML = '&#8249;'; // Right arrow
  }
});

// Placeholder for Notification interactions (if any needed)
document.querySelector('.submit-task-button').addEventListener('click', function() {
  alert('Subscribed!');
});

document.querySelector('.sub-thread-btn').addEventListener('click', function() {
  alert('Idea added to Thread A');
});
