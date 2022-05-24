var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
};

// json() method formats the response as json.
// then() method returns a Promise & takes up to 2 new arguments: callback functions for the success and failure cases of the Promise.
// Promise object represents the eventual completion or failure of an asynchronous operation and its resulting value.

getUserRepos();