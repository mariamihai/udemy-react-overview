# React - The Complete Guide (incl Hooks, React Router, Redux)

Overview of the entire course and all the projects from "React - The Complete Guide (incl Hooks, React Router, Redux)" [Udemy course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).

---

## Projects

The next projects are based on the course rewrite done in April 2021.

### React Complete Guide

My implementation of the (new) initial project related to this course can be found [here](./CompleteGuide/).

### Course Goals (styling project)

The implementation is done [here](./CourseGoals/).

### Username App (A complete practice project)

The implementation is done [here](./UsernameApp/).

### Typical App

Implementation done under **Section 10: Advanced: Handling Side Effects, Using Reducers & Using the Context API.**. My implementaion can be found [here](./TypicalApp/).

### Food Order App (a practice project)

Implementation done under **Section 11: Practice Project: Building a Food Order App**.

#### Details

Simple application for displaying meals and adding or removing them from the cart. The ordering is not implemented. My code can be found [here](./TheFoodOrderApp/).

### Building class-based components

Implementation done under **Section 13: An Alternative Way Of Building Components: Class-based Components**

#### Details

Exemple of using React with the preferred method of creating components before React 16.8. Before the course rewrite class-based components were more common and can't connect them to a specific legacy project. My implementation for Section 13 can be found [here](./ClassBasedComponents/).

### HTTP related application

Implementation done under **Section 14: Sending HTTP Requests (e.g. Connecting to a Database)**

#### Details

Connecting to a database with a Firebase project with the Fetch API - project [here](./HttpRequests/).

### Custom Hooks

Implementation done under **Section 15: Building Custom React Hooks**

#### Counter custom hook

A small application for showing how custom hooks work. Code [here](./CounterCustomHooks/).

### Forms and User Input

Implementation done under **Section 16: Working with Forms & User Input** - code [here](./FormsAndUserInput/).

### Adding authentication

Implementation done under **Section 22: Adding Authentication To React Apps** - project [here](https://github.com/mariamihai/udemy-react-authentication).

### React hooks

Implementation done for **Section 28: React Hooks Introduction and Summary** - code [here](./ReactHooks)

---

## Legacy Projects

The course was redone and the previous projects can be found [here](https://github.com/mariamihai/udemy-react-legacy-overview).

---

## Merging multiple repositories

Start with a repo that has at least one commit (it contains a master / main branch).

For simplicity, make sure the new repo files are in a folder.

Add a remote for the repo to be merged:
> git remote add -f another_repo <Another repo URL>

Merge the files into current repo master branch:
> git merge another_repo/master --allow-unrelated-histories

Remove the remote for the added repo:
> git remote remove another_repo

The history is now concatenated and the second repository can be deleted.
