let nameDropdown = document.getElementById('selectName');
displaySubjects();
/**
 * Function to display all questions to table.
 * @param {*} subject
 */
async function displaySubjects()
{
    let subjects = await SubjectManager.getAllSubjects();
    localStorage.setItem("subjects", JSON.stringify(subjects));  
    let optionName=DynamicElements.createOption();
    optionName.innerHTML="Subject Name";
    nameDropdown.appendChild(optionName); 
    for(let i=0; i<subjects.length; i++)
    {
        let option=DynamicElements.createOption();
        option.innerHTML=subjects[i].subject_name;
        nameDropdown.appendChild(option);        

    }
}
async function setCode()
{
    let subjects = await SubjectManager.getAllSubjects();
    let name=document.getElementById('selectName').value;
    for(let i=0; i<subjects.length; i++)
    {
        if(subjects[i].subject_name==name)
        {
            let subCode =document.getElementById('selectCode');
            subCode.value=subjects[i].subject_code;
            subCode.readOnly=true;
  
        }
    }
}
/**
* Function to store the new question details to storage.
*/
document.getElementById('submit').addEventListener('click',async function addQuestion() 
{
    event.preventDefault();
    let code = document.getElementById('selectCode').value;
    let name = document.getElementById('selectName').value;
    let question = document.getElementById('question').value;
    let option1 = document.getElementById('option1').value;
    let option2 = document.getElementById('option2').value;
    let option3 = document.getElementById('option3').value;
    let option4 = document.getElementById('option4').value;
    let answer = document.getElementById('answer').value;
    let addQuestions = 
    {
        "subject_code": code,
        "subject_name": name,
        "question": question,
        "option1": option1,
        "option2": option2,
        "option3": option3,
        "option4": option4,
        "answer": answer
    };
    let s1=checkQuestion();
    console.log(s1);
    if(notNull() && checkCodeAndName() && checkOptions() && checkQuestion())
    {
        let result = await QuestionManager.addQuestion(addQuestions);
        document.getElementById('errorMessage').innerHTML=" ";
        alert("Question Added Successfully");
        document.getElementById("form").reset();

    }
    else if(code=="Subject Code" || name=="Subject Name")
    {
        document.getElementById('errorMessage').innerHTML="Select subject code and name";
    }
    else if(!notNull())
    {
        document.getElementById('errorMessage').innerHTML="Fill all the fields";
    }
    else if(!checkCodeAndName())
    {
        document.getElementById('errorMessage').innerHTML="Select correct subject code and name";
    }
    else if(!checkOptions())
    {
        document.getElementById('errorMessage').innerHTML="Answer is not valid";
    }
    else if(!checkQuestion())
    {
        document.getElementById('errorMessage').innerHTML="Question already exists";
    }

});

function notNull()
{
    let subcode = document.getElementById('selectCode').value;
    let subname = document.getElementById('selectName').value;
    let ques = document.getElementById('question').value;
    let op1 = document.getElementById('option1').value;
    let op2 = document.getElementById('option2').value;
    let op3 = document.getElementById('option3').value;
    let op4 = document.getElementById('option4').value;
    let ans = document.getElementById('answer').value;
    let valid=false;
    if (subcode.length>0 && subcode!="Subject Code" && subname!="Subject Name" && subname.length>0 && ques.length>0 && op1.length>0 && op2.length>0 && op3.length>0 && op4.length>0 && ans.length>0) 
    {
        valid = true;
    }
    return valid;
}

function checkCodeAndName()
{
    var subjectsList = localStorage.getItem("subjects");
    var subjectsArray = JSON.parse(subjectsList);
    let subcode = document.getElementById('selectCode').value;
    let subname = document.getElementById('selectName').value;
    let status=false;
    for(let i=0; i<subjectsArray.length; i++)
    {   
        if(subjectsArray[i].subject_code==subcode && subjectsArray[i].subject_name==subname)
        {
            status=true;
        } 
    }
    return status;
}

function checkOptions()
{
    let op1 = document.getElementById('option1').value;
    let op2 = document.getElementById('option2').value;
    let op3 = document.getElementById('option3').value;
    let op4 = document.getElementById('option4').value;
    let answer = document.getElementById('answer').value;
    let value=false;
    if(answer==op1 || answer==op2 || answer==op3 || answer==op4)
    {
        value=true;
    }
    return value;
}

async function checkQuestion()
{
    let question = await QuestionManager.getAllQuestions();
    let ques = document.getElementById('question').value;
    let status=true;
    for(let i=0; i<question.length; i++)
    {   
        if(question[i].question.toUpperCase()==ques.toUpperCase())
        {
            status=false;
        }   
    }
    return status;
}