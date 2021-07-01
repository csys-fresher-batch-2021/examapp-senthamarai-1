let idDropdown = document.getElementById('selectid');
displaySubjects();
/**
 * Function to display all subjects to table.
 * @param {*} subject
 */
async function displaySubjects()
{
    let subjects = await SubjectManager.getAllSubjects();
    let option=DynamicElements.createOption();
    option.innerHTML="Subject Id";
    idDropdown.appendChild(option);  
    for(let i=0; i<subjects.length; i++)
    {
        let option=DynamicElements.createOption();
        option.innerHTML=subjects[i].subject_id;
        idDropdown.appendChild(option);        
    } 
}
async function setField()
{
    let subjects = await SubjectManager.getAllSubjects();
    let subject_id= document.getElementById('selectid').value;
    for(let i=0; i<subjects.length; i++)
    {
        if(subjects[i].subject_id==subject_id)
        {
            document.getElementById('code').value=subjects[i].subject_code;
            document.getElementById('name').value=subjects[i].subject_name;
            
        }

    }
   
}

/**
 * Function to store the update subject details to storage.
*/
document.getElementById('update').addEventListener('click',async function updateSubject() 
{
    event.preventDefault();
    let subject_id= document.getElementById('selectid').value;
    let subject_code = document.getElementById('code').value;
    let subject_name = document.getElementById('name').value;

    const updatedSubject = 
    {
        "subject_id":subject_id,
        "subject_code": subject_code,
        "subject_name": subject_name
    };
    if (subject_id!="Subject Id" && subject_code!=""  && subject_name!="") 
    {
        let result = await SubjectManager.updateSubject(updatedSubject);
        document.getElementById('errorMessage').innerHTML=" ";
        alert("Updated Successfully");
        document.getElementById("form").reset();
    }
    else if(subject_id=="Subject Id" || subject_code=="" || subject_name=="")
    {
        document.getElementById('errorMessage').innerHTML="Fill all the fields";
    }    
});