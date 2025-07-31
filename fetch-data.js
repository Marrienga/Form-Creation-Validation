// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container for displaying data
    const dataContainer = document.getElementById('api-data');

    // Step 4: Fetch data using try-catch
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create the <ul> list element
        const userList = document.createElement('ul');

        // Step 7: Loop through users and create <li> items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Append the user list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 9: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
}

// Step 10: Invoke the function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
