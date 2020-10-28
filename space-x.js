//all capsules
fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(data => {
    // console.log(data);
})
.catch(error => {
    // console.log(error);
})

// falcon one history
fetch('https://api.spacexdata.com/v3/history/1')
.then(response => {
    return response.json();
})
.then(data => {
    // console.log(data);
})
.catch(error => {
    // console.log(error);
})

// landing pads
fetch('https://api.spacexdata.com/v3/landpads')
.then(response => {
    return response.json();
})
.then(data => {
    // console.log(data);
})
.catch(error => {
    // console.log(error);
})

