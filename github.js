const container = document.querySelector('.container');
const pTag = document.createElement('p');

fetch('https://api.github.com/users/tcgilbert')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    const thomas = {
        name: data.name,
        bio: data.bio,
        username: data.login
    }
    pTag.innerText = thomas.name;
    container.appendChild(pTag);
    console.log(thomas);
})

