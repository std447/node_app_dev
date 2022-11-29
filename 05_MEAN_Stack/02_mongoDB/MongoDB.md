# MongoDB

<details>
<summary>Table of Contents</summary>

## Table of Contents
- [MongoDB](#mongodb)
- [Table of Contents](#table-of-contents)


</details>



## Mongosh

**Mongosh** is command line interface for interacting with our database 
|Command|Usage|
|:---|:-----|
| `mongosh --help` | Shows help |
| `mongosh`| opens interactive MongoDB Shell CLI instance |
|`show dbs`| Show all databases|
|`use <dbName>`|Switch to that database or <br> Create new if doesn't exist |
|`show collections`<br>`show tables`|Show list of Collections inside that particular db|

Add data to db using mongosh CLI

Go to database where we need to change.
Select (or create) a collection


|Method <br> **Base-Command** - `db.collection_Name`|Usage|
|:--|:---|
|`.insertOne()`|Insert one entry in db collection|
|`.insertMany()`|Insert many entries at once in db collection|








DataSample - `{title: "Atomic Habits", author: "James Clear", pages : 300, genres : ["habits","self-help"], rating: 9},{ title: "Focus", author: "Danial Goleman", pages : 250, genres : ["productivity","discipline"], rating: 7},{ title: "The 80/20 Principle", author: "Richard Koch", pages : 350, genres : ["strategy"], rating: 9},{ title: "The Now Habit", author: "Neil Flore", pages : 175, genres : ["time-management","habit"], rating: 10}`