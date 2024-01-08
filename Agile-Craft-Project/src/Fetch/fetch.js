const signUpUser = async (userData) => {
    try {


        console.log(JSON.stringify(userData))

        const response = await fetch('http://localhost:3001/register', {
            method: 'POST',

            body: userData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

export default signUpUser;