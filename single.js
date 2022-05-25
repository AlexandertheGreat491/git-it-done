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
//html_url property links to the full issue on GitHub.
//target="_blank" attribute in each <a> element opens the link in a new tab instead of replacing the current webpage.
issueEl.setAttribute("target", "_blank");

// creates span to hold issue title
var titleEl = document.createElement("span");
titleEl.textContent = issues[i].title;

// appends to container
var typeEl = document.createElement("span");

// These conditions check if issue is an actual issue or a pull request.
if (issues[i].pull_request) {
    typeEl.textContent = "(Pull requestion)";
} else {
    typeEl.textContent = "(Issue)";
}

// appends to container
issueEl.appendChild(typeEl);
}
}
}

getRepoIssues("facebook/react");