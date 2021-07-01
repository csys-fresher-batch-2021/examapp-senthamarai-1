var passwordMessage = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
// When the user clicks on the password field, show the message box
passwordMessage.onfocus = function() 
{
    document.getElementById("message").style.display = "block";
}
// When the user clicks outside of the password field, hide the message box
passwordMessage.onblur = function() 
{
    document.getElementById("message").style.display = "none";
}
// When the user starts to type something inside the password field
passwordMessage.onkeyup = function() 
{
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(passwordMessage.value.match(lowerCaseLetters)) 
    {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else 
    {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(passwordMessage.value.match(upperCaseLetters)) 
    {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else 
    {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    
    // Validate numbers
    var numbers = /[0-9]/g;
    if(passwordMessage.value.match(numbers)) 
    {  
        number.classList.remove("invalid");
        number.classList.add("valid");
    } 
    else 
    {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
        
    // Validate length
    if(passwordMessage.value.length >= 8) 
    {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } 
    else 
    {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

function showpass()
{
    let status= document.getElementById("password");
    document.getElementById("togglePassword").className="far fa-eye";
    if(status.type=="password")
    {
        status.type="text";
    }
}

function hidepass()
{
    let status= document.getElementById("password");
    document.getElementById("togglePassword").className="far fa-eye-slash";
    status.type="password";
}


/**
* Function to store the new question details to storage.
*/
document.getElementById('signin').addEventListener('click',async function addAdmin() 
{
    event.preventDefault();
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let organizationName = document.getElementById('organizationname').value;
    let password = document.getElementById('password').value;
    let addAdmin = 
    {
        "firstname": firstName,
        "lastname": lastName,
        "email": email,
        "organization_name": organizationName,
        "password": password
    };
    if(notNull() && checkEmail() && checkPassword() && await checkExistingEmail())
    {
        let result = await AdminManager.addUser(addAdmin);
        document.getElementById('errorMessage').innerHTML=" ";
        alert("Registered Successfully");
        window.location.href="AdminLogin.html"

    }
    else if(!notNull())
    {
        document.getElementById('errorMessage').innerHTML="Fill all the fields";
    }
    else if(!checkEmail())
    {
        document.getElementById('errorMessage').innerHTML="Enter valid email";
    }
    else if(!checkPassword())
    {
        document.getElementById('errorMessage').innerHTML="Password is not valid";
    }
    else if(!await checkExistingEmail())
    {
        document.getElementById('errorMessage').innerHTML="Email id already exists";
    }

});


function notNull()
{
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let organizationName = document.getElementById('organizationname').value;
    let password = document.getElementById('password').value;
    let valid=false;
    if (firstName.length>0 && lastName.length>0 && email.length>0 && organizationName.length>0 && password.length>0) 
    {
        valid = true;
    }
    return valid;
}

function checkEmail()
{
    let email = document.getElementById('email').value;
    let status=false;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailPattern.test(email))
    {
        status=true;
    }
    return status;
}

function checkPassword()
{
    let password = document.getElementById('password').value;
    let status=false;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if(password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.match(numbers) && password.length>=8)
    {
        status=true;
    }
    return status;
}


async function checkExistingEmail()
{
    let email = document.getElementById('email').value;
    let result=await AdminManager.getUserDetailByEmail(email);
    return result;
}
