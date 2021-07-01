let subjectContent = document.getElementById('subject-content');
displaySubjects();
let x=1;
/**
 * Function to display all users to table.
 */
async function displaySubjects()
{
    let subjects = await SubjectManager.getAllSubjects();
    subjects.forEach(element => {
        //creating tr for a subject list.
        let tr = DynamicElements.createTableRow();

        //creating th for serial number.
        let thNumber = DynamicElements.createTableHeader();
        thNumber.innerText = x;
        x=x+1;
        tr.appendChild(thNumber);

        //creating td for subject id.
        let tdId = DynamicElements.createTableData();
        tdId.innerText = element.subject_id;
        tr.appendChild(tdId);        

        //creating td for subject code.
        let tdCode = DynamicElements.createTableData();
        tdCode.innerText = element.subject_code;
        tr.appendChild(tdCode);


        //creating td for subject name.
        let tdName = DynamicElements.createTableData();
        tdName.innerText = element.subject_name;
        tr.appendChild(tdName);
        subjectContent.appendChild(tr);
    });
}