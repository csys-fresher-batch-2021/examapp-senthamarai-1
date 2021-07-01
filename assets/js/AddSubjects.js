document.getElementById('submit').addEventListener('click',async function addSubject() 
{
    event.preventDefault();
    let subjects = await SubjectManager.getAllSubjects();
    let code = document.getElementById('code').value;
    let name = document.getElementById('name').value;
    let addSubjects = 
    {
        "subject_code": code,
        "subject_name": name
    };
    localStorage.setItem("subjectsDB", JSON.stringify(subjects));
    if(notNull() && checkCodeAndName())
    {
        let result = await SubjectManager.addNewSubject(addSubjects);
        document.getElementById('errorMessage').innerHTML=" ";
        alert("Subject Added Successfully");
        document.getElementById("form").reset();
    }
    else if(!notNull())
    {
        document.getElementById('errorMessage').innerHTML="Fill all the fields";
    }
    else if(!checkCodeAndName())
    {
        document.getElementById('errorMessage').innerHTML="Subject details already exists";
    }
});

function notNull()
{
    let subcode = document.getElementById('code').value;
    let subname = document.getElementById('name').value;
    let valid=false;
    if (subcode.length>0 && subcode!="" && subname!=""&& subname.length>0) 
    {
        valid = true;
    }
    return valid;
}

function checkCodeAndName()
{
    var subjectsList = localStorage.getItem("subjectsDB");
    var subjectsDB = JSON.parse(subjectsList);
    let subcode = document.getElementById('code').value;
    let subname = document.getElementById('name').value;
    let status=true;
    for(let i=0; i<subjectsDB.length; i++)
    {   
        if(subjectsDB[i].subject_code.toUpperCase()==subcode.toUpperCase() || subjectsDB[i].subject_name.toUpperCase()==subname.toUpperCase())
        {
            status=false;
        }
        
    }
    return status;
}