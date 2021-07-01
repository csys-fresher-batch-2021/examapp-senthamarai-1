let codeDropdown = document.getElementById('selectCode');
let nameDropdown = document.getElementById('selectName');
let idDropdown = document.getElementById('selectid');
displaySubjects();
displayQuestions();

/**
 * Function to display all subjects to table.
 * @param {*} subject
 */
async function displaySubjects()
{
    let subjects = await SubjectManager.getAllSubjects();
    let optionCode=DynamicElements.createOption();
    optionCode.innerHTML="Subject Code";
    codeDropdown.appendChild(optionCode);  

    let optionName=DynamicElements.createOption();
    optionName.innerHTML="Subject Name";
    nameDropdown.appendChild(optionName); 
    for(let i=0; i<subjects.length; i++)
    {
        let option=DynamicElements.createOption();
        option.innerHTML=subjects[i].subject_code;
        codeDropdown.appendChild(option);        

    }
    for(let i=0; i<subjects.length; i++)
    {
        let option=DynamicElements.createOption();
        option.innerHTML=subjects[i].subject_name;
        nameDropdown.appendChild(option);        

    }
}

/**
 * Function to display all questions to table.
 * @param {*} subject
 */
async function displayQuestions()
{
    let questions = await QuestionManager.getAllQuestions();
    let option=DynamicElements.createOption();
    option.innerHTML="Question Id";
    idDropdown.appendChild(option);  
    for(let i=0; i<questions.length; i++)
    {
        let option=DynamicElements.createOption();
        option.innerHTML=questions[i].question_id;
        idDropdown.appendChild(option);        

    }
   
}

async function setField()
{
    let questions = await QuestionManager.getAllQuestions();
    let question_id= document.getElementById('selectid').value;
    for(let i=0; i<questions.length; i++)
    {
        if(questions[i].question_id==question_id)
        {
            document.getElementById('selectCode').value=questions[i].subject_code;
            document.getElementById('selectName').value=questions[i].subject_name;
            document.getElementById('question').value=questions[i].question;
            document.getElementById('option1').value=questions[i].option1;
            document.getElementById('option2').value=questions[i].option2;
            document.getElementById('option3').value=questions[i].option3;
            document.getElementById('option4').value=questions[i].option4;
            document.getElementById('answer').value=questions[i].answer;
            
        }

    }
   
}

/**
 * Function to store the update question details to storage.
*/
document.getElementById('update').addEventListener('click',async function updateQuestion() 
{
    event.preventDefault();
    let question_id= document.getElementById('selectid').value;
    let subject_code = document.getElementById('selectCode').value;
    let subject_name = document.getElementById('selectName').value;
    let question = document.getElementById('question').value;
    let option1 = document.getElementById('option1').value;
    let option2 = document.getElementById('option2').value;
    let option3 = document.getElementById('option3').value;
    let option4 = document.getElementById('option4').value;
    let answer = document.getElementById('answer').value;

    const updatedQuestion = 
    {
        "question_id":question_id,
        "subject_code": subject_code,
        "subject_name": subject_name,
        "question": question,
        "option1": option1,
        "option2": option2,
        "option3": option3,
        "option4": option4,
        "answer": answer
    };
    if(notNull() && checkCodeAndName() && checkOptions())
    {
        let result = await QuestionManager.updateQuestion(updatedQuestion);
        document.getElementById('errorMessage').innerHTML=" ";
        alert("Updated Successfully");
        document.getElementById("form").reset();

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
});

function notNull()
{
    let question_id= document.getElementById('selectid').value;
    let subject_code = document.getElementById('selectCode').value;
    let subject_name = document.getElementById('selectName').value;
    let question = document.getElementById('question').value;
    let option1 = document.getElementById('option1').value;
    let option2 = document.getElementById('option2').value;
    let option3 = document.getElementById('option3').value;
    let option4 = document.getElementById('option4').value;
    let answer = document.getElementById('answer').value;
    let valid=false;
    if (question_id!="Question Id"&& subject_code!=""  && subject_name!=""  && question!=""  && option1!=""  && option2!=""  && option3!=""  && option4!="" && answer!="") 
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
    let option1 = document.getElementById('option1').value;
    let option2 = document.getElementById('option2').value;
    let option3 = document.getElementById('option3').value;
    let option4 = document.getElementById('option4').value;
    let answer = document.getElementById('answer').value;

    let value=false;
    if(answer==option1 || answer==option2 || answer==option3 || answer==option4)
    {
        value=true;
    }
    return value;
}