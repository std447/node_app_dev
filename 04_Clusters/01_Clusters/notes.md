## Clusters in Node.JS

- Clusters provide advantage of multicore system
- Single instance of NodeJS runs single thread
- User can launch clusters of NodeJS process
- NodeJS proide inbuilt `Cluster` module

Two benifits
- Fellover process :- One of NodeJS processes fails and load of that is balanced by other NodeJS processess ensuring zero downtime.

- Increase efficiency by distrubuting incoming requests dividing in various workers by one master process.


Two ways to use clusters
- By using Cluster module
- By using various Package managers ex npm.

Two mechanisms of how clusters works - 
1. Round-robin approach :- using round-robin algo
    - Work is distributed between master and workers   
    - Master takes incoming requests by listening to incoming port and then distributes workload among workers.  


1. Master creates the listen socket and sends to workers.
    - Workers take responsibility directly of accepting responsibily of listening to incoming connections directly.

Cluster mechanism : - 



22/07/22

- Git repo.
Create an app/project implementing my learning.
    
 - focus on showcasing nodejs skill/technique. Don't go offtrack/sidetrack in related technology.
 - Learning core NodeJS
 - MongoDB




 ## Learning Tips
 - Crash course cover **IMP/major** things and move forward
 - Learn in details while implementing.