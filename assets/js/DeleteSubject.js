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
           let subcode = document.getElementById('code');
           subcode.value=subjects[i].subject_code;
           subcode.readOnly=true;
           let subname= document.getElementById('name');
           subname.value=subjects[i].subject_name;
           subname.readOnly=true;  
        }
    }
}

/**
* Function to store the delete subject details to storage.
*/
document.getElementById('delete').addEventListener('click',async function deleteSubject() 
{
    event.preventDefault();
    let subject_id= document.getElementById('selectid').value;
    let subject_code = document.getElementById('code').value;
    let subject_name = document.getElementById('name').value;
    if (subject_id!="Subject Id" && subject_code!=""  && subject_name!="") 
    {
        let status=confirm("Do you want to delete");
        if(status=true)
        {
            let result = await SubjectManager.deleteSubject(subject_id);
            document.getElementById('errorMessage').innerHTML=" ";
            document.getElementById("form").reset();
            window.location.reload();
        }
    }
    else if(subject_id=="Subject Id" || subject_code=="" || subject_name=="")
    {
        document.getElementById('errorMessage').innerHTML="Fill all the fields";
    }    
});