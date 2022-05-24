var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
// These first two variables will help with handling form submissions.
// formSubmitHandler will be executed upon a form submission browser event.
var repoContainerEl = document.querySector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");
var formSubmitHandler = function(event) {
    event.preventDefault();
    //console.log(event);
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username.");
    }
};

userFormEl.addEventListener("submit",formSubmitHandler);

var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
            displayRepos(data, user);
        });
    });
};

// json() method formats the response as json.
// then() method returns a Promise & takes up to 2 new arguments: callback functions for the success and failure cases of the Promise.
// Promise object represents the eventual completion or failure of an asynchronous operation and its resulting value.

var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
}
getUserRepos();