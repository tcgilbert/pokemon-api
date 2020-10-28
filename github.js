fetch('https://api.github.com/users/tcgilbert')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})

