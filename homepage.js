var getUserRepos = function() {
    //console.log("function was called");
    fetch("https://api.github.com/users/octocat/repos");
    // Fetch API provides a specifc interface for fetching resoures.
};

getUserRepos();