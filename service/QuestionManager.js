let questions = [];
class QuestionManager 
{
    /**
     * Function to display all questions.
     */
    static async getAllQuestions() 
    {
        try 
        {
            let url = "http://localhost:3000/api/questions";
            let result = await axios.get(url);
            return result.data;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    /**
     * Function to get a questions details by using subject name.
     * @param {*} subject_name 
     */
    static async getQuestionDetail(subject_name)
    {
        try 
        {
            let url = "http://localhost:3000/api/question/name/"+ subject_name;
            let result = await axios.get(url);
            return result.data;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
   
    /**
    * Function add question to data.
    * @param {*} question
    */
    static async addQuestion(question)
    {
        try 
        {
            let url = "http://localhost:3000/api/admin/questions";
            let result = await axios.post(url, question);
            return result;
        } 
        catch (err) 
        {
            console.log(err);
        }
            
    }

    /**
    * Function update question to data.
    * @param {*} question
    */
    static async updateQuestion(updateQuestion)
    {
        try 
        {
            let url = "http://localhost:3000/api/admin/updatequestions";
            let result = await axios.put(url, updateQuestion);
            return result;
        } 
        catch (error) 
        {
            console.log(error.response.data);
        }
    }

    /**
     * Function to delete question by id 
     */
    static async deleteQuestion(question_id)
    {
        try 
        {
            let url = "http://localhost:3000/api/admin/questions/" + question_id;
            let result = await axios.delete(url);
            return result;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
}