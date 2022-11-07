# IMAX ticket booking system

## Steps to Run the project

1. Open a terminal (Terminal 1) and run the below npm command to install JSON Server globally 
```
$ npm install -g json-server
```

2. After installation, change the directory to the project folder
```
cd /path/to/folder
```

3. Run the below command to start the JSON server and do not close this terminal
```
json-server --watch database.json
```

4. Open a different terminal (Terminal 2) and change the directory to the project folder
```
cd /path/to/folder
```

5. Run the below command to install all the necessary packages and dependencies
```
npm init
```

6. Run the below command to install the app globally from local source code.
```
npm install -g ./
```

7. Run the below comand to start the ticket booking process(menu style)
```
imax bm
```

7. Run the below comand to know more about the ticket booking process(CLI style)
```
imax b --help
```

8. Run the below command to test the the ticket booking process(CLI style)
```
imax b -mc bpwf -dt 11/10 -sc s1 -st 4 -sa front -sn i5 i6 i7
```


