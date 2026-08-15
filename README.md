# ESO Helper

A small Elder Scrolls Online helper website created by Rutaus and Kartiv.

---

# Git Dictionary

## Before Starting to Work

Always make sure you are working from the latest version of the `main` branch.


## switch to main, then pull the latest version of the main branch with:
```bash
git switch main
git pull
```

## Create a new branch for whatever you work on.
Use "git switch -c" and then name the new branch for whatever you are working on.


for example: git switch -c To-Do
```bash
git switch -c new-branch
```

## After finishing your work, push your changes to github with:
```bash
git add .
git commit -m "Whatever i changed"
```

## Then create a pull request (PR) with:
```bash
git push -u origin new-branch
```
for example: git push -u origin To-Do


since we first called our new branch "To-Do" this is the way we will push it

## Note that: the branch name you use when creating the branch and pushing it should be the same.


# Other useful commands:
## Check the current status:
```bash
git status
```
this tells you:


1. Which branch you are currently on
2. Whether you have unsaved/uncommitted changes
3. Which files have been changed
4. Whether your branch is up to date with GitHub

## See your branches:
```bash
git branch
```
The branch with the '*' is the branch you are currently working on.


## For swapping between branches:
```bash
git switch branch-name
```


# IMPORTANT:
## Do not start new work directly on main.
## Create a new branch first.