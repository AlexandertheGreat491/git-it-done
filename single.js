var getRepoIssues = function(repo) {
    console.log(repo);
    // format the URL
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    
    fetch(apiUrl).then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(data) {
            // pass response data to dom function
            displayIssues(data);
          });
        }
        else {
          alert("There was a problem with your request!");
        }
      });

var displayIssues = function(issues){
// This loop will loop over the response data and create <a> element for each issue.
for (var i = 0; i < issues.length; i++) {
    // creates a link element to take users to the issue on github.
var issueEl = document.createElement("a");
issueEl.classList = "list-item flex-row justify-space-between align-center";
issueEl.setAttribute("href", issue[i].html_url);
issueEl.setAttribute("target", "_blank");
}
}
}

getRepoIssues("facebook/react");