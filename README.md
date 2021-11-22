# Git Explorer Coding Challenge

Welcome to Determined AI!

Today we have a fun exercise for you to make. You will be making a **Git Explorer** webapp in React! What does the **Git Explorer** do? Great question!

**Git Explorer** is a basic public git repository explorer. The app allows you to:

* View summary info about the repository, such as the repo name, homepage and when it started.
* Browse through the commit history.
* Search for keywords in the commit history.

For this challenge, focus on building out the **Commits** page. If you have some time left, connect up the navbar repo picker so you can change which repo's commit history you are viewing.

## Design Comprehensives

Our design team has worked hard to provide you the necessary design comps to reference as you build your webapp to spec. The redline comp overlays distances between objects, paddings, margins and object sizes.

* [Overview Comp](https://determined-ai-docs.s3-us-west-2.amazonaws.com/public/git-explorer-react-challenge/comp-overview.png)
* [Commits Comp](https://determined-ai-docs.s3-us-west-2.amazonaws.com/public/git-explorer-react-challenge/comp-commits.png)
* [Commits Redline](https://determined-ai-docs.s3-us-west-2.amazonaws.com/public/git-explorer-react-challenge/comp-commits-redline.png)

All the assets you will need can be found in the `src/assets` folder of this repo.

The only font family being used in the comps is `Roboto` and it is already included in the project.

## Challenge Milestones and Requirements

There are 2 primary milestones for you to achieve and a final bonus milestone for extra credit. You can do them in any order you'd like.

### 1st Milestone - Layout Commit Page

Start scaffolding what you need for each page. Use mock data as place holder until you get real data from the endpoint.

* Scaffold the **Commits** page and the necessary sub components.
* Only the area below the search box should scroll.
* Implement "show commits with comments only" filter.

### 2nd Milestone - API Integration

* Fetch the repo commit history to populate the page.
* Fetch the most recent 7 days worth of commit history to display on the Commits page.
* If user enters a search string, filter the commits based on search string.

### Bonus Milestones

* Match the styling as close to the Design comps as possible.
* Build out the **Overview** page.
* Implement infinite scrolling for the commit history list.
    * Initially load the last 7 days.
    * When you scroll to the bottom, load another 7 days.
* Use the Context API for the Repo picker and where applicable.

## API Communication

You will be using the [Github REST API v3](https://docs.github.com/en/rest/reference/repos#list-commits) to fetch your repo data.

The relevant endpoints that are of interest to you.

```
Repo Info
GET https://api.github.com/repos/[OWNER]/[REPO]

Repo Commits
GET https://api.github.com/repos/[OWNER]/[REPO]/commits
more info at: https://developer.github.com/v3/repos/commits/

Search Repo Commits
GET https://api.github.com/search/commits?q=[SEARCH QUERY]
more info at: https://developer.github.com/v3/search/#search-commits
```

If you are looking at the `facebook/react` repo, `facebook` would be the `[OWNER]` param and `react` would be the `[REPO]` param.

## To Get Started

Install all the necessary dependencies and start the local development environment.

```
nom install
npm start
```

Point your browser to [localhost:3000](http://localhost:3000). As you edit your code the page will automatically get updated via Hot Module Replacement. You will also see any lint errors in the console.

## Included Libraries and Packages

The following libraries and packages are available for you to use. You are not required to use them.

* [axios](https://github.com/axios/axios) for REST http calls.
* [moment.js](https://momentjs.com/docs/) for date manipulation and formatting.
* [node-sass](https://sass-lang.com/documentation) to allow Sass styles.
* [less.js](http://lesscss.org/usage/) to allow Less styles.

If you have a package you want use, please ask the interviewer to see if it is ok.

## Questions?

Please ask us any questions you have through out the challenge.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
