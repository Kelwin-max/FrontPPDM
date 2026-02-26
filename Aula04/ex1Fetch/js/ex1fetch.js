fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => {
        const userList = document.getElementById('userList');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} (${user.email})`;
            userList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Erro ao buscar usuários:', error)); 
    