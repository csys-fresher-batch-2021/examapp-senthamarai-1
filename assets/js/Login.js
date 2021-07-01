document.getElementById('login').addEventListener('click',async function userLogin() 
{
    event.preventDefault();
    let userEmail=document.getElementById('email').value;
    let userPassword=document.getElementById('password').value;
    const userList = 
    {
        "email":userEmail,
        "password": userPassword
    };
    if(notNull() && checkEmail() && ! await checkExistingEmail())
    {
        let result = await UserManager.authenticateUser(userList);
        document.getElementById('errorMessage').innerHTML=" ";
        alert("Login Successfully");
        window.location.href="ListSubject.html";

    }
    else if(!notNull())
    {
        document.getElementById('errorMessage').innerHTML="Fill all the fields";
    }
    else if(!checkEmail())
    {
        document.getElementById('errorMessage').innerHTML="Enter valid email";
    }
    else if(await checkExistingEmail())
    {
        document.getElementById('errorMessage').innerHTML="Email id is not exists";
    }
});

function notNull()
{
    let userEmail=document.getElementById('email').value;
    let userPassword=document.getElementById('password').value;
    let valid=false;
    if (userEmail.length>0 && userPassword.length>0) 
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

async function checkExistingEmail()
{
    let userEmail = document.getElementById('email').value;
    let result=await UserManager.getUserDetailByEmail(userEmail);
    return result;
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