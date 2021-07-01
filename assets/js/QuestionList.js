let questionContent = document.getElementById('question-content');
displayQuestions();
let x=1;

/**
 * Function to display all questions to table.
 */
async function displayQuestions()
{
    let questions = await QuestionManager.getAllQuestions();
    questions.forEach(element => {
        //creating tr for a question list.
        let tr = DynamicElements.createTableRow();

        //creating th for serial number.
        let thNumber = DynamicElements.createTableHeader();
        thNumber.innerText = x;
        x=x+1;
        tr.appendChild(thNumber);

        //creating td for question d.
        let tdId = DynamicElements.createTableData();
        tdId.innerText = element.question_id;
        tr.appendChild(tdId);        

        //creating td for subject code.
        let tdCode = DynamicElements.createTableData();
        tdCode.innerText = element.subject_code;
        tr.appendChild(tdCode);


        //creating td for subject name.
        let tdName = DynamicElements.createTableData();
        tdName.innerText = element.subject_name;
        tr.appendChild(tdName);

        //creating td for question.
        let tdQuestion = DynamicElements.createTableData();
        tdQuestion.innerText = element.question;
        tr.appendChild(tdQuestion); 

        //creating td for option 1.
        let tdOption1 = DynamicElements.createTableData();
        tdOption1.innerText = element.option1;
        tr.appendChild(tdOption1); 

        //creating td for option 2.
        let tdOption2 = DynamicElements.createTableData();
        tdOption2.innerText = element.option2;
        tr.appendChild(tdOption2); 

        //creating td for option 3.
        let tdOption3 = DynamicElements.createTableData();
        tdOption3.innerText = element.option3;
        tr.appendChild(tdOption3); 

        //creating td for option 4.
        let tdOption4 = DynamicElements.createTableData();
        tdOption4.innerText = element.option4;
        tr.appendChild(tdOption4); 

        //creating td for answer.
        let tdAnswer = DynamicElements.createTableData();
        tdAnswer.innerText = element.answer;
        tr.appendChild(tdAnswer); 
            
        //creating td for created time.
        let tdTime = DynamicElements.createTableData();
        tdTime.innerText = element.created_on;
        tr.appendChild(tdTime); 
            
        questionContent.appendChild(tr);
    });
}

