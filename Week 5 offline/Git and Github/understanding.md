For vs code get known about your Account
git config --global user.name "name"
git config --global user.email "email@username.com"


This is for if anytime we stike a error in git vs code opens up showing wait msg in terminal 

git config --global core.editor "code --wait"


so that we can work upon different os (like mac and windows)
git config --global core.autocrlf

stages:
U -> untracked 
A -> added or staged
C -> Commited 

-----------------------------------------------------
for adding changes and from untracked to staged or added just stage them and commit them but not sync them 

for checking all checkpoint :
enter => git log --oneline

For going to those checkpoints :
we can go steps back :
there are three methods hard soft mixed
git reset --hard HEAD~1
this request call means reset to one head before goes one commit before 



check kr shkte h kya ki konsi file kis mein hai -> git status -s , git status s

kitne checkpoints hai ->git log --online --graph , git log , git log --online .


-----------------------------------------------------
git status -s
after give as ?? -> when file is unknown for git 
give us A -> means we entered in source control and added changes to staged changes 
give us AM -> means we After adding it to staged chagnes , modified the file and still not staged changes .
give us M -> means we modified the file after commiting that file 
