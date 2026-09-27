// script.js
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload on form submit
  
  const emailInput = e.target.email.value.trim();
  const passwordInput = e.target.password.value;
  
  // Basic front-end validation could be added here if desired
  // For now, just log the input values to console for demo
  
  console.log('Login form submitted:');
  console.log('Email or Phone:', emailInput);
  console.log('Password:', passwordInput);
  
  // Placeholder for connecting to backend login logic later

  // Optional: Clear password field after submit
  e.target.password.value = '';
});
