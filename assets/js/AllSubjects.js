let tableContent = document.getElementById('table-content');
displaySubjects();
let x=1;
/**
 * Function to display all subjects to table.
 * @param {*} subject
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

        //creating td for subject name.
        let tdName = DynamicElements.createTableData();
        tdName.innerText = element.subject_name;
        tdName.id="name";
        tr.appendChild(tdName);

        //creating td for button.
        let tdButton = DynamicElements.createTableData();
            
        //creating button
        let button = DynamicElements.createButton();
        let functionName = "goToSubject('" +  element.subject_name + "')"; 
        button.setAttribute('onclick', functionName);
        tdButton.appendChild(button);
        tr.appendChild(tdButton);
        tableContent.appendChild(tr);
    });
}

function goToSubject(name)
{
    localStorage.setItem('name',JSON.stringify(name));
    window.location.href="Instructions.html";
}

// /**
//  * Function to add event listner to all dynamically created buttons
//  */
// function addListenerToButtons()
// {
//    if(document.querySelector('button'))
//     {
//         document.querySelectorAll('.clickHere').forEach(function(event)
//         {
//             //alert("sin");
//             event.addEventListener('click', function(e)
//             {
//                 e.preventDefault();
//                 let name = e.target.parentNode.parentNode.querySelector('#name').innerText;
//                 alert(name);
//                 localStorage.setItem('name',JSON.stringify(name));
//                 window.location.href="Instructions.html";
//             });
//         });
//     }
// }
