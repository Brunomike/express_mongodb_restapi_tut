import axios from 'axios';
const API_URL = '/api/goals/';

//Create new goal
const createGoal = async (goal,token) => {
    const config={
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.post(API_URL,goal,config);
    return response.data;
};

//Get user goals
const getGoals = async (token) => {
    const response = await axios.get(API_URL,{ headers: { 'Authorization': `Bearer ${token}` }});    
    return response.data;
};


//Update user goal
const updateGoal = async (goal) => {
    localStorage.removeItem('user');
};


//Delete user goal
const deleteGoal = async (goalId,token) => {
    const response = await axios.delete(API_URL+goalId,{ headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
};


const goalService = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};

export default goalService;