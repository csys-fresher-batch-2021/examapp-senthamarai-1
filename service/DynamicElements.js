class DynamicElements
{
    /**
     * Function to create button.
     */
    static createButton()
    {
        let button = document.createElement('button');
        button.type ="button";
        button.setAttribute('id',"clickHere");
        button.className = 'btn btn-link clickHere';
        button.innerText = "Click Here!";
        return button;
    }

    /**
     * Function to create dropdown.
     */
    static createSelect()
    {
        let select = document.createElement('select');
        select.setAttribute("id","myselect");
        return select;
    }

    /**
     * Function to create dropdown.
     */
    static createOption()
    {
        let option = document.createElement('option');
        return option;
    }

    /**
     * Function to create tr tag.
     */
    static createTableRow()
    {
        let tr = document.createElement('tr');
        return tr;
    }

    /**
     * Function to create th tag with innertext.
     * @param {*} value 
     */
    static createTableHeader(value)
    {
        let th = document.createElement('th');
        th.scope = "row";
        th.innerText = value;
        return th;
    }

    /**
     * Function to create td tag.
     */
    static createTableData()
    {
        let td = document.createElement('td');
        return td;
    }

    /**
     * Function to create a column class for responsive page.
     */
    static createColumn()
    {
        let section = document.createElement('section');
        section.className = "col-lg-4";
        return section;
    }

    /**
     * Function to create label.
     */
    static createLabel()
    {
        let label=  document.createElement('label');
        return label;
    }

    /**
     * Function to create heading.
     */
    static createLabel()
    {
        let heading = document.createElement("H1");
        return heading;
    }

}