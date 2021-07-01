let subjects = [];
class SubjectManager 
{
    /**
     * Function to add new subject to local storage.
     * @param {*} subject
     */
    static async addNewSubject(subject)
    {
        try 
        {
            let url = "http://localhost:3000/api/admin/subjects";
            let result = await axios.post(url, subject);
            return result;
        } 
        catch (err) 
        {
            console.log(err);
        }
    }

    /**
     * Function to display all subjects.
     */
    static async getAllSubjects() 
    {
        try 
        {
            let url = "http://localhost:3000/api/subjects";
            let result = await axios.get(url);
            return result.data;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    /**
     * Function to delete subject by id 
     */
    static async deleteSubject(subject_id)
    {
        try 
        {
            let url = "http://localhost:3000/api/admin/subjects/" + subject_id;
            let result = await axios.delete(url);
            return result;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    /**
     * Function to get a subject details by using id.
     * @param {*} subject_id 
     */
    static async getSubjectDetail(subject_id)
    {
        try 
        {
            let url = "http://localhost:3000/api/subjects"+ subject_id;
            let result = await axios.get(url);
            return result.data;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

     /**
     * Function to change subject details
     * @param {*} updatedDetails
     */
    static async updateSubject(updatedDetails)
    {
        try 
        {
            let url = "http://localhost:3000/api/admin/updatesubject";
            let result = await axios.put(url, updatedDetails);
            return result;
        } 
        catch (error) 
        {
            console.log(error.response.data);
        }    
    }
}