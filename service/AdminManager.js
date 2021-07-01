let admins = [];
class AdminManager 
{
    /**
     * Function to display all users.
     */
    static async getAllAdmin() 
    {
        try 
        {
            let url = "http://localhost:3000/api/admin";
            let result = await axios.get(url);
            return result.data;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    /**
     * Function to add new subject to local storage.
     * @param {*} userList
     */
    static async authenticateUser(userList)
    {
        try 
        {
            let url = "http://localhost:3000/api/admin/login";
            let result = await axios.post(url, userList);
            return result;
        } 
        catch (err) 
        {
            console.log(err.response);
        }
    }

    /**
    * Function add new user  to data.
    * @param {*} userDetails
    */
    static async addUser(userDetails)
    {
        try 
        {
            let url = "http://localhost:3000/api/admin";
            let result = await axios.post(url, userDetails);
            return result;
        } 
        catch (err) 
        {
            console.log(err);
        }
            
    }

     /**
    * Function add new user  to data.
    * @param {*} updateDetails
    */
    static async changePassword(updateDetails)
    {
        try 
        {
            let url = "http://localhost:3000/api/admin/changepassword";
            let result = await axios.put(url, updateDetails);
            return result;
        } 
        catch (err) 
        {
            console.log(err);
        }
            
    }

    static async getUserDetailByEmail(email)
    {
        let users = await this.getAllAdmin();
        let value=true;
        for(let i=0; i<users.length; i++)
        {   
            if(users[i].email==email)
            {
                value=false;
            }   
        }
        return value;

    }
}
