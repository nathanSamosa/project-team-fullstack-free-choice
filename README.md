# Fullstack Team Project

This is the second ofthe fullstack team projects. This time, however, each team has free choice as to what it is you're going to build!  

## Learning Objectives

- Use agile ceremonies including stand-ups, retrospectives, sprint planning and stakeholder demos to develop software as a team
- Design and build a full-stack architecture that has a frontend application consuming data from a backend API
- Use a source code management tool to integrate work in one codebase with multiple contributors

## Project Requirements

- Must contain a well thought out entity relationship diagram and application design built via user stories
- Must be a full-stack application with a [ReactJS](https://reactjs.org/) frontend consuming data from an [ElephantSQL](https://www.elephantsql.com/) database that is exposed to the client via an API built using [Express](https://expressjs.com/) and [Prisma](https://www.prisma.io/)
- Must not expose sensitive information
- Must not contain hard coded URL’s (routes are fine, `http://localhost` is not)
- Commit messages must be consistent and meaningful
    - Keep them in present tense (✅ `add, remove, update` ❌ `added, removed, updated`)
    - Keep them short and descriptive ( `change hashing library`, `add password to user model` )
    - [Here are some good guidelines](https://reflectoring.io/meaningful-commit-messages/) but don’t go overboard, the above two bullet points are enough

## Assessment

- Students will work on feature branches and create pull requests to merge in to the `main` branch upon teacher approval. The team must discuss and provide feedback on the implementation in the PR before a teacher provides their feedback and final approval. [See pull-requests.md for the process.](./pull-requests.md)
- Stakeholder demo’s at the end of each sprint (3 days)
    - Did you plan effectively for the current sprint?
    - Did you perform daily standups?
    - Can you accurately explain the work you’ve completed?
    - Did you complete all of the tasks in the sprint?
- End of project retrospectives

## Getting started

1. Choose which application it is you want to build as a team.
2. Complete your sprint planning stage
3. Read the setup instructions below

## Setting up

- One team member must fork the repository and ensure each team member has access to contribute to the fork.
- Other team members will *clone* that fork. All work will be pushed to the single forked repository. At the end of the project, you can fork the fork so everybody has the finished project in their personal github accounts.
- One team member must create a pull request to merge this `empty` branch into the `main` branch.

## Starting advice

- You need to have both a backend *and* a frontend in this same repository. For ideas about how to accomplish this, you may want to refer back to how the _scaffolded_ branch was set up in the prior [fullstack team project](https://github.com/boolean-uk/project-team-fullstack).
- Running two sides of an application will require either having two terminals open, one running each, or using the `concurrently` npm package.
- Using `create-react-app` and then moving files around is a completely acceptable way to initiate a project. In fact, that's how the `scaffolded` branch was set up.
