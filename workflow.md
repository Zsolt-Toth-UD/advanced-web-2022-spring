# Git

Project work must be uploaded to GitHub. 
Only master branch will be evaluated. 

Project Management is not a requirement but strongly suggested. 
Proper project management will facilitate the development and helps you keeping track of your progress. 

Resources:
 - [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20is%20a%20legacy%20Git,software%20development%20and%20DevOps%20practices.)
 - [Commit Message Guideline](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53)
 - [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
 - [Make a meaningful git commit](https://blog.devgenius.io/make-a-meaningful-git-commit-message-with-semantic-commit-message-b39a79b13aa3)

## Issues

An issues is a task you have to deal with. 
It is recommended to create small issues. 
You should spend some time to refine your tasks and break them down into sub tasks. 
In GitHub, you can refer to issues by # and issues id, so you can define sub tasks if it is necessary. 

### User Story
Issues have a free text body part where you should specify the task. 
Using user stories to describe tasks is suggested. 
A user story is a structures sentence that describes an operation with the system. 

```
As a <role>, I want to <do something> [so that <benefits>].

Example:
As a debit card holder, I want to set the withdrawal limmits, so that I cannot spend more money a day then the given amount. 
```

Issues are often categories by their size. 
Theme, Epic, User Story and Task sizes are distinguished. 
I suggest to define as small issues as you can. 

As a rule of thumb, you should be solve an issue in a session (1 day, 1-2 hours, up  to you). 

### Acceptance Criteria
In the details part you should define your acceptance criteria.
You can use markdown format to list the goals and objectives of your issue. 
There should be at least one criterium and it must be reachable (objective and measurable). 

```
 - GET /api/cars 
 [{car1}, {car2},...]
```

Acceptance Criteria should no refer to the Definition of Done. 

#### Definition of Done
You should consider an issue done if
 - quality gates are passed
   - code style (ESLint)
   - Code Coverage

### Cost Estimation
Cost estimation of issues is a nice to have feature. 
It helps you to predict (guess) the required work for the project. 
You should measure the actual time cost of the development as well. 

You should use the same metric for your estimations. 
Story points are commonly used in Agile Teams. 
For your own project you could use more concrete metrics such as T-Shirt sizing or time cost. 

## Branching

Branching is a vital part of using git and managing your issues. 
A branch is a line of the development. 
For each issue, you should create a new branch where you solve your task.
GitFlow gives a popular settings of branches. 

### Branches
__master__: Released versions of your product
__devel__: Development branch. You can merge it into the __master__. 
__feature__: Solve an issue on these branches. These branches are merged into the __devel__. Feature branches are called _feature/id_name_. For example, _feature/123_add_car_registration_form_. 
__hotfix__, __release__, and other branches will not be necessary for your project. 

### Pull Requests

Pull Request is a process when you want to merge your modifications from one branch into another. 
The purpose of pull requests is to share the responsibility and ownership of the code base. 
In addition, this is a corner stone of quality assurance in software development. 

Unfortunately, Pull Requests requires a team. 
Because you are going to work alone on your project, you shall review your own work. 
I suggest to review your own pull request after a brief break.
It helps you to prevent bugs and you will be more critical with your solution. 

Pull Request should have at least two steps
1) Dynamic Testing
2) Static Code Review

If you have question about your work, it is a good idea to create a pull request and ask review. 


## Commit Messages

Commit messages are important part of communication and helps tracking changes. 

Although your branches will be deleted after is would be merged, the commit messages will remain part of your logs (commit history). 

Writing a good commit message is difficult but you shall practice it. 

Avoid meaningless messages such as
```
asdf
fix
chenges
testing
```

Your commit messages are getting worse over time. 
So you pay attention to them.

__Do not squash commits in this project!__


### Conventional Commit

Conventional Commits gives a simple and popular template for commit messages. 
In the template project, I tried to follow and write conventional commits. 
I recommend you to write conventional commits too. 

Title, body and footer are the three major part s of conventional commits. 
Title is the most important part because it can be seen in short format (git log, IDE, GitHub).
Type, scope and description are main parts of the title. 
You will use the following types: __feat__, __fix__, __test__, __docs__, __refactor__, __chore__. 
In the scope field you should write either the issue id or which part of the system you were working on. 
Description should be short, informative and imperative. 

Body part is optional. 
Based on my experience, you will not write it. 

Footer is also optional. 
If you write the issue id into the scope then you should skip it. 
Otherwise, you should refer to the issue id in the footer. 

```
fix: refuse negative cost values in ProductRegistrationService

Ref: #123

----------
feat(backend): add ProductRegistrationService

Ref: #321
----------
refactor(#101): add guard statements to ProductRegistrationService instead of nesting if conditions 
----------
refactor(#101): convert nested if conditions to guard statements
```

_Note:_ The hashtag (#) in the issue id may cause some minor troubles in terminal. 


### Git Config

```
[user]
	email = *****@****.***
  name = ****** ****
[core]
	editor = vi
	autocrlf = input
	abbrev = 8
[format]
	pretty = oneline
[log]
	abbrevCommit = true

```
