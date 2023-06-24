// let form=document.getElementById("submit-form");
// 

// // form.addEventListener("submit", (e)=>{
// //     e.preventDefault();
// //     console.log("err")
// //     let userName=document.getElementById("name").value;
// //     let eMail=document.getElementById("email").value;
// //     let password=document.getElementById("password").value;
// //     let ConfirmPassword=document.getElementById("confirm-password").value;

// //     if(password!==ConfirmPassword){
// //         error.innerText="Password Not Matching";
// //         return
// //     }
// //     if (userName.trim() === '' || eMail.trim() === '' || password.trim() === '') {
// //        error.textContent = 'All fields are mandatory.';
// //         console.log("test")
// //         return;
// //     }
// //     else{
// //         document.getElementById('profile').innerHTML = `
// //         <p class="success">Signup successful!</p>
// //     `;
// //     }
    
// //     let user={
// //         userName:userName,
// //         email:eMail,
// //         password:password,
// //         accessKey:generateAccessKey(),
// //     };

// //     localStorage.setItem("user", JSON.stringify(user));
// //     window.location.href="profile.html";

   

// //     // Show success message
    
   
// // })

// function signUp(){
   
//     console.log("err")
//     let userName=document.getElementById("name").value;
//     let eMail=document.getElementById("email").value;
//     let password=document.getElementById("password").value;
//     let ConfirmPassword=document.getElementById("confirm-password").value;

//     if(password!==ConfirmPassword){
//         error.innerText="Password Not Matching";
//         return
//     }
//     if (userName.trim() === '' || eMail.trim() === '' || password.trim() === '') {
//        error.textContent = 'All fields are mandatory.';
//         console.log("test")
//         return;
//     }
//     else{
//         document.getElementById('profile').innerHTML = `
//         <p class="success">Signup successful!</p>
//     `;
//     }
    
//     let user={
//         userName:userName,
//         email:eMail,
//         password:password,
//         accessKey:generateAccessKey(),
//     };

//     localStorage.setItem("user", JSON.stringify(user));
//     window.location.href="profile.html";

   

//     // Show success message
    
   
// }

// function generateAccessKey(){
//     let word="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//     let lenght=16;
//     token=""
//     for(let i=0;i<lenght;i++){
//         token+=word.charAt(Math.floor(Math.random()*word.length));
//     }
//     console.log(token)
//     return token;
// }


// // Function to redirect to the signup page if not authenticated
// function redirectToSignup() {
//     if (!isAuthenticated()) {
//       window.location.href = 'index.html';
//     }
//   }

// function redirectToProfile() {
//   if (isAuthenticated()) {
//     window.location.href = 'profile.html';
//   }
// }

// // / Check if the user is authenticated on page load
// window.onload = function() {
//   if (window.location.pathname === '/index.html') {
//     redirectToProfile();
//   } else if (window.location.pathname === '/profile.html') {
//     redirectToSignup();
//     displayProfile();
//   }
// };


// function isAuthenticated() {
//     const user = localStorage.getItem('user');
//     return user && JSON.parse(user).accessToken;
// }

// function displayProfile() {
//     const user = JSON.parse(localStorage.getItem('user'));
//     document.getElementById('profile-name').textContent = user.userName;
//     document.getElementById('profile-email').textContent = user.email;
//     document.getElementById('profile-password').textContent = user.password;
//   }

// function logout(){
//     localStorage.removeItem('user');
//     window.location.href = 'index.html';
// }

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
      name,
      email,
      password,
      accessToken
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
      <p class="success">Signup successful!</p>
    `;
  
    // Redirect to profile page
    window.location.href = 'profile.html';
  }
  
  // Function to check if the user is authenticated
  function isAuthenticated() {
    const user = localStorage.getItem('user');
    return user && JSON.parse(user).accessToken;
  }
  
  // Function to redirect to the signup page if not authenticated
  function redirectToSignup() {
    if (!isAuthenticated()) {
      window.location.href = 'signup.html';
    }
  }
  
  // Function to redirect to the profile page if authenticated
  function redirectToProfile() {
    if (isAuthenticated()) {
      window.location.href = 'profile.html';
    }
  }
  
  // Function to display user's details on the profile page
  function displayProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('name').textContent = user.name;
    document.getElementById('email').textContent = user.email;
    document.getElementById('password').textContent = user.password;
  }
  
  // Function to handle logout
  function logout() {
    // Clear user data from localStorage
    localStorage.removeItem('user');
  
    // Redirect to signup page
    window.location.href = 'signup.html';
  }
  
  // Check if the user is authenticated on page load
  window.onload = function() {
    if (window.location.pathname === '/signup.html') {
      redirectToProfile();
    } else if (window.location.pathname === '/profile.html') {
      redirectToSignup();
      displayProfile();
    }
  };
  
