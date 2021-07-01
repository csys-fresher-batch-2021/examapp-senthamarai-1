let userContent = document.getElementById('user-content');
displayUsers();
let x=1;
/**
 * Function to display all users to table.
 */
async function displayUsers()
{
    let users = await UserManager.getAllUsers();
    users.forEach(element => {
        //creating tr for a user list.
        let tr = DynamicElements.createTableRow();

        //creating th for serial number.
        let thNumber = DynamicElements.createTableHeader();
        thNumber.innerText = x;
        x=x+1;
        tr.appendChild(thNumber);

        //creating td for user id.
        let tdId = DynamicElements.createTableData();
        tdId.innerText = element.user_id;
        tr.appendChild(tdId);

        //creating td for first name.
        let tdFirst = DynamicElements.createTableData();
        tdFirst.innerText = element.firstname;
        tr.appendChild(tdFirst);        

        //creating td for last name.
        let tdLast = DynamicElements.createTableData();
        tdLast.innerText = element.lastname;
        tr.appendChild(tdLast);

        //creating td for email.
        let tdEmail = DynamicElements.createTableData();
        tdEmail.innerText = element.email;
        tr.appendChild(tdEmail);

        //creating td for organization name.
        let tdName = DynamicElements.createTableData();
        tdName.innerText = element.organization_name;
        tr.appendChild(tdName);

        //creating td for created time.
        let tdTime= DynamicElements.createTableData();
        tdTime.innerText = element.created_on;
        tr.appendChild(tdTime);

        //creating td for login time.
        let tdLogin = DynamicElements.createTableData();
        tdLogin.innerText = element.last_login;
        tr.appendChild(tdLogin);
        userContent.appendChild(tr);
    });
}

