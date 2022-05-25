var getRepoIssues = function(repo) {
    console.log(repo);
    // format the URL
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl);
}

getRepoIssues("facebook/react");