// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('background-audio');
  
    // Add click event to welcome screen
    welcomeScreen.addEventListener('click', () => {
      // Hide welcome screen
      welcomeScreen.style.display = 'none';
      // Show main content
      mainContent.style.display = 'block';
      // Play audio
      audio.play();
    });
  });