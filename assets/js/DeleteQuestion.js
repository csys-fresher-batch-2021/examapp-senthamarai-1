let idDropdown = document.getElementById('selectid');
displayQuestions();

/**
 * Function to display all quetions to table.
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
            let subcode=document.getElementById('selectCode');
            subcode.value=questions[i].subject_code;
            subcode.readOnly=true;

            let subname=document.getElementById('selectName');
            subname.value=questions[i].subject_name;
            subname.readOnly=true;

            let ques=document.getElementById('question');
            ques.value=questions[i].question;
            ques.readOnly=true;

            let op1=document.getElementById('option1');
            op1.value=questions[i].option1;
            op1.readOnly=true;
            
            let op2=document.getElementById('option2');
            op2.value=questions[i].option2;
            op2.readOnly=true;

            let op3=document.getElementById('option3');
            op3.value=questions[i].option3;
            op3.readOnly=true;

            let op4=document.getElementById('option4');
            op4.value=questions[i].option4;
            op4.readOnly=true;

            let ans=document.getElementById('answer');
            ans.value=questions[i].answer;
            ans.readOnly=true;  
        }
    } 
}

/**
* Function to store the delete question details to storage.
*/
document.getElementById('delete').addEventListener('click',async function deleteQuestion() 
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
    if (question_id!="Question Id" && subject_code!=""  && subject_name!=""  && question!=""  && option1!=""  && option2!=""  && option3!=""  && option4!="" && answer!="") 
    {
        let status=confirm("Do you want to delete");
        if(status=true)
        {
            let result = await QuestionManager.deleteQuestion(question_id);
            document.getElementById('errorMessage').innerHTML=" ";
            document.getElementById("form").reset();
            window.location.reload();
        }
    }
    else if(question_id=="Question Id" || subject_code=="" || subject_name=="" || question=="" || option1=="" || option2=="" || option3=="" || option4=="" || answer=="")
    {
        document.getElementById('errorMessage').innerHTML="Fill all the fields";
    }    
});