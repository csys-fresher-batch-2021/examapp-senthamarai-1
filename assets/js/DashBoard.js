displayQuestions();
displaySubjects();
displayUsers();

/**
 * Function to display all questions to table.
 * @param {*} subject
 */
async function displayQuestions()
{
    let questions = await QuestionManager.getAllQuestions();
    document.getElementById('question').innerHTML=questions.length; 
}

/**
 * Function to display all subjects to table.
 * @param {*} subject
 */
async function displaySubjects()
{
    let subjects = await SubjectManager.getAllSubjects();
    document.getElementById('subject').innerHTML=subjects.length;
}

/**
 * Function to display all users to table.
 * @param {*} subject
 */
async function displayUsers()
{
    let users = await UserManager.getAllUsers();
    document.getElementById('user').innerHTML=users.length;  
}