let error= document.getElementById('error');

// Function to generate a random 16-byte access token
function generateAccessToken() {
    let token = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 16;
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }
  
  // Function to handle user signup
  function signup() {
    // Get input field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    //validate the password
    if(password!==confirmPassword){
       error.textContent = 'Error: Password are not matching.';
        return; 
    }
  
    // Validate input fields
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      error.textContent = 'Error: All fields are mandatory.';
      return;
    }
  
    // Generate access token
    const accessToken = generateAccessToken();
  
    // Create user object
    const user = {
      userName:name,
      email:email,
      password:password,
      acessToken:accessToken
    };
  
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(user));
  
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  
    // Show success message
    document.getElementById('error').textContent = '';
    document.getElementById('success').innerHTML = `
      <p class="success">Successfully Signd Up!</p>
    `;
    setTimeout(()=>{
      // Redirect to profile page
      window.location.href = 'profile.html';
    }, 1500)
    
  }
  
  // Function to check if the user is authenticated
  function isAuthenticated() {
    const user = localStorage.getItem('user');
    return user && JSON.parse(user).acessToken;
  }
  
  // Function to redirect to the signup page if not authenticated
  function redirectToSignup() {
    if (!isAuthenticated()) {
      window.location.href = 'index.html';
    }
  }
  
//   Function to redirect to the profile page if authenticated
  function redirectToProfile() {
    if (isAuthenticated()) {
      window.location.href = 'profile.html';
    }
  }
  
  // Function to display user's details on the profile page
  function displayProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    let userDataName=document.getElementById('user-name') ;
    let userDataEmail=document.getElementById('user-email');
    let userDataPassword=document.getElementById('user-password');


    userDataName.innerHTML=`${user.userName}`;
    userDataEmail.innerHTML=`${user.email}`;
    userDataPassword.innerHTML=`${user.password}`;
  }
  
  // Function to handle logout
  function logout() {
    // Clear user data from localStorage
    localStorage.removeItem('user');
  
    // Redirect to signup page
    window.location.href = 'index.html';
  }
  
  // Check if the user is authenticated on page load
  window.onload = function() {
    if (window.location.pathname === '/index.html') {
      redirectToProfile();
    } else if (window.location.pathname === '/profile.html') {
      redirectToSignup();
      displayProfile();
    }
  };
  
