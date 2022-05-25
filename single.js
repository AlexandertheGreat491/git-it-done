var getRepoIssues = function(repo) {
    console.log(repo);
    // format the URL
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl).then(function(data){
        // request was successful
        if (response.ok) {
            response.json().then(function(data){
                console.log(data);
            });
        } else {
            alert("There was a problem with your request!");
        }
    });
}
var displayIssues = function(issues){

}

getRepoIssues("facebook/react");