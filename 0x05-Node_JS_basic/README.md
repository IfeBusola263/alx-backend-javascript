## NodeJS

* 0-console.js
```
a function named displayMessage that prints in STDOUT the string argument.

```

* 1-stdin.js
```
a program named that will be executed through command line.
Displays the message 'Welcome to Holberton School, what is your name?' (followed by a new line)
The user can input their name on a new line
The program displays 'Your name is: INPUT'
When the user ends the program, it displays 'This important software is now closing' (followed by a new line)
```

* 2-read_file.js
```
Contains a function named countStudents. It should accept a path in argument.
The script attempt to read the database file synchronously.
If the database is not available, it throws an error with the text 'Cannot load the database'.
If the database is available, it logs the following message to the console 'Number of students: NUMBER_OF_STUDENTS'.
It logs the number of students in each field, and the lists with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES.
CSV file can contain empty lines (at the end) - and they are not a valid student!
```

* 3-read_file_async.js
```
Contains a function named countStudents. It accepts a path in argument (same as in 2-read_file.js).
The script attempts to read the database file asynchronously.
The function returns a Promise.
If the database is not available, it throws an error with the text 'Cannot load the database'.
If the database is available, it logs the following message to the console 'Number of students: NUMBER_OF_STUDENTS'.
It log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and it does not account for that as valid student.
```

* 4-http.js
```
A small HTTP server using the http module:

Assigned variable app and this is exported.
HTTP server listens on port 1245.
Displays Hello Holberton School! in the page body for any endpoint as plain text.
```

* 5-http.js
```
a small HTTP server using the http module:

Assigned to the variable app, which is exported.
HTTP server listens on port 1245.
It returns plain text.
When the URL path is /, it displays Hello Holberton School! in the page body
When the URL path is /students, it displays 'This is the list of our students' followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file.
CSV file can contain empty lines (at the end) - and it does not account for that as valid student.
```

* 6-http_express.js
```
a small HTTP server using Express module:

Assigned to the variable app and is exported.
HTTP server listens on port 1245.
Displays Hello Holberton School! in the page body for the endpoint /.
```

* 7-http_express.js
```
Assigned to the variable app, which is exported.
HTTP server listens on port 1245.
It returns plain text.
When the URL path is /, it displays Hello Holberton School! in the page body
When the URL path is /students, it displays 'This is the list of our students' followed by the same\
 content as the file 3-read_file_async.js (with and without the database) - the name of the databas\
e must be passed as argument of the file.
CSV file can contain empty lines (at the end) - and it does not account for that as valid student.
```

* full_server/
```
A full server.
```
