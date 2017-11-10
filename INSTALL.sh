#!/bin/bash

PID_ANGULAR=""
PID_NODE=""
PID_MONGO=""

if [[ $1 == "dev" ]]
then
    # run angular compilation
    cd web-app ; ng build --watch -dev & PID_ANGULAR=$!; echo $PID_ANGULAR

    # run api server
    cd ../api ; node api.js & PID_NODE=$!; echo $PID_NODE

    # run mongodb server
    mongod --dbpath data/ & PID_MONGO=$!; echo $PID_MONGO

    while :
    do
        # TASK 1
        read -t 1 -n 1 key

        if [[ $key == "q" ]]
        then
            (kill -9 $PID_ANGULAR > /dev/null 2>&1);
            (kill -9 $PID_NODE > /dev/null 2>&1);
            (kill -9 $PID_MONGO > /dev/null 2>&1);
            break
        fi
    done
else
    echo "Usage: ./INSTALL.sh dev"
fi