// document.querySelector() is used to select an element from the document using its ID
let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "black";
let submitButton = document.querySelector('#submitButton');
let refreshButton = document.querySelector('#refreshButton');
let userText = document.getElementById('textBox');
// alphaNums contains the characters with which you want to create the CAPTCHA
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];

// This loop generates a random string of 7 characters using alphaNums
// Further this string is displayed as a CAPTCHA
for (let i = 1; i <= 7; i++) 
{
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''),captchaText.width/4, captchaText.height/2);

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

var reenterPasswordMessage = document.getElementById("reenter");
var letter1 = document.getElementById("letter1");
var capital1 = document.getElementById("capital1");
var number1 = document.getElementById("number1");
var length1 = document.getElementById("length1");
reenterPasswordMessage.onfocus = function() 
{
    document.getElementById("message1").style.display = "block";
}
   
// When the user clicks outside of the password field, hide the message box
reenterPasswordMessage.onblur = function() 
{
    document.getElementById("message1").style.display = "none";
}
    
// When the user starts to type something inside the password field
reenterPasswordMessage.onkeyup = function() 
{
    // Validate lowercase letters
    var lowerCaseLetters1 = /[a-z]/g;
    if( reenterPasswordMessage.value.match(lowerCaseLetters1)) 
    {  
        letter1.classList.remove("invalid");
        letter1.classList.add("valid");
    } 
    else 
    {
        letter1.classList.remove("valid");
        letter1.classList.add("invalid");
    }
        
    // Validate capital letters
    var  upperCaseLetters1 = /[A-Z]/g;
    if(reenterPasswordMessage.value.match(upperCaseLetters1)) 
    {  
        capital1.classList.remove("invalid");
        capital1.classList.add("valid");
    } 
    else 
    {
        capital1.classList.remove("valid");
        capital1.classList.add("invalid");
    }
    
    // Validate numbers
    var numbers1 = /[0-9]/g;
    if( reenterPasswordMessage.value.match(numbers1)) 
    {  
        number1.classList.remove("invalid");
        number1.classList.add("valid");
    } 
    else 
    {
        number1.classList.remove("valid");
        number1.classList.add("invalid");
    }
        
    // Validate length
    if(reenterPasswordMessage.value.length >= 8) 
    {
        length1.classList.remove("invalid");
        length1.classList.add("valid");
    } 
    else 
    {
        length1.classList.remove("valid");
        length1.classList.add("invalid");
    }
}

function showpass()
{
    let status1= document.getElementById("password");
    let status2= document.getElementById("reenter");
    document.getElementById("togglePassword").className="far fa-eye";
    if(status1.type=="password" && status2.type=="password")
    {
        status1.type="text";
        status2.type="text";
    }
}

function hidepass()
{
    let status1= document.getElementById("password");
    let status2= document.getElementById("reenter");
    document.getElementById("togglePassword").className="far fa-eye-slash";
    status1.type="password";
    status2.type="password";
}

/**
* Function to store the update details to storage.
*/
document.getElementById('submit').addEventListener('click',async function changePassword() 
{
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password= document.getElementById('password').value;
    let reenterPassword = document.getElementById('reenter').value;
    let updateUsers = 
    {
        "email": email,
        "password": password
    };
    if(notNull() && checkEmail() && checkPassword(password) && ! await checkExistingEmail() && password==reenterPassword && checkCaptcha())
    {
        let result = await UserManager.changePassword(updateUsers);
        document.getElementById('errorMessage').innerHTML=" ";
        alert("Password Changed Successfully");
        window.location.href="Login.html"

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
    else if(await checkExistingEmail())
    {
        document.getElementById('errorMessage').innerHTML="Email is not exists";
    }
    else if(!checkCaptcha())
    {
        document.getElementById('errorMessage').innerHTML="Enter Correct Captcha";
    }
    else if(reenterPassword!=password)
    {
        document.getElementById('errorMessage').innerHTML="Enter the same password";
    }

});


function notNull()
{
    let email = document.getElementById('email').value;
    let password= document.getElementById('password').value;
    let reenterPassword = document.getElementById('reenter').value;
    let captcha = document.getElementById('textBox').value;
    let valid=false;
    if (email.length>0&& password.length>0 && reenterPassword.length>0 && captcha.length>0) 
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
    let password= document.getElementById('password').value;
    let reenterPassword = document.getElementById('reenter').value;
    let status=false;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if(password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.match(numbers) && password.length>=8
    && reenterPassword.match(lowerCaseLetters) && reenterPassword.match(upperCaseLetters) && reenterPassword.match(numbers) && reenterPassword.length>=8)
    {
        status=true;
    }
    return status;
}


async function checkExistingEmail()
{
    let userEmail = document.getElementById('email').value;
    let result=await UserManager.getUserDetailByEmail(userEmail);
    return result;
}

function checkCaptcha() 
{
    let status=false;
    if (userText.value === c) 
    {
        status=true
    }
    return status
}

function refreshCaptcha() 
{
    userText.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) 
    {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = refreshArr.join('');
    ctx.fillText(refreshArr.join(''),captchaText.width/4, captchaText.height/2);
    document.getElementById('errorMessage').innerHTML = "";
}
