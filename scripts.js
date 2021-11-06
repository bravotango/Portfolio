function createDescription(
  el,
  title,
  description,
  repoUrl,
  deployedUrl,
  small
) {
  var titleEl = $("<h3>").text(title);
  var pEl = small ? $("<p class='small'>") : $("<p>");
  var strongDescriptionEl = $("<strong>").text("Description");
  var strongRepoEl = $("<strong>").text("Repo");
  var strongDeployedEl = $("<strong>").text("Deployed location");

  var aRepoEl = $("<a>")
    .attr("href", repoUrl)
    .attr("target", "_blank")
    .text(repoUrl);
  var aDeployedEl = $("<a>")
    .attr("href", deployedUrl)
    .attr("target", "_blank")
    .text(deployedUrl);
  pEl
    .append(strongDescriptionEl)
    .append(description)
    .append(strongRepoEl)
    .append(aRepoEl)
    .append(strongDeployedEl)
    .append(aDeployedEl);

  el.append(titleEl).append(pEl);
}

createDescription(
  $("#project-1"),
  "Movie & Cocktail",
  "Search movies for synopsis & receive drink suggestions",
  "https://github.com/bravotango/Movie-and-Cocktail",
  "https://bravotango.github.io/Movie-and-Cocktail/",
  false
);

createDescription(
  $("#react"),
  "React",
  "8 slides used in conjunction with React and Redux to simulate a walk sequence",
  "https://github.com/bravotango/React-Redux-Walk-Sequence",
  "https://www.btgraphix.com/walk",
  true
);

createDescription(
  $("#angular"),
  "Angular",
  'Based on "Angular - Tutorial: Tour of Heroes", added MaterializeCSS, swapped out tutorial characters for characters of Overwatch',
  "https://github.com/bravotango/Tour-of-Heroes-Overwatch",
  "https://www.btgraphix.com/overwatch/",
  true
);

createDescription(
  $("#weather"),
  "Weather Dashboard",
  "As a traveler, search the weather outlook for multiple destinations to plan a trip accordingly",
  "https://github.com/bravotango/Weather-Dashboard",
  "https://bravotango.github.io/Weather-Dashboard/",
  true
);

createDescription(
  $("#workday"),
  "Work Day Scheduler",
  "A simple calendar app for scheduling your work day",
  "https://github.com/bravotango/Work-Day-Scheduler",
  "https://bravotango.github.io/Work-Day-Scheduler/",
  true
);
