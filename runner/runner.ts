/// <reference path="./lib/node.d.ts"/>

import { exec } from "child_process";

class Task {
    constructor(public compile: string = "", public execute: string = "") {}
}

class EventInfo {
    text: string;
    data: Object;
}

var showUsage = function() {
    console.log("Example runner for TypeScript JSConfUY 2015 \n");
    console.log("Run: node runner [example] [-v]");
    console.log("Options:");    
    console.log("\t-v\t  - verbose mode, show errors and messages");
    console.log("\t[example] - Could be any of the following codes: ");
    console.log("\t   1      - \"MiamiBox app\" references, classes, enums and interfaces example.");
    console.log("\t   2      - Functions.");
    console.log("\t   3      - Generics - classes, interfaces and functions");
    console.log("\t   4      - \"AsyncTask\" - generic classes and implementations");
    console.log("License: MIT 2015 - Mathias Rodriguez <mathias.rodriguez@gmail.com>");
};

function logInfo (mode: string, task: EventInfo | Task): void;
function logInfo (mode: "eventInfo", task: EventInfo): void;
function logInfo (mode: "compile", task: Task): void;
function logInfo (mode: "execute", task: Task): void;
function logInfo (mode: "decoration"): void;
function logInfo (mode: string, task?: Object): void {
    if (verbose) {
        if (mode == "eventInfo" && task instanceof EventInfo) {
            console.log(task.text, task.data);
        } else if (task instanceof Task) {
            switch (mode) {
                case "compile":
                    console.log("-------------------------\n|\tDebug info\t|\n-------------------------");
                    console.log("Compile command: " + task.compile);
                    break;
                case "execute":
                    console.log("Run command: " + tasks[part].execute);
                    break;
                default:
                    break;
            }
        } else if (mode == "decoration") {
            console.log("-------------------------\n");
        }
    }
}

var args = process.argv.splice(2);
var part = parseInt(args[0], 10);
var verbose = args.indexOf("-v") != -1;
var tasks: Task[] = [
    new Task(),
    new Task("cd ../standalone/MiamiBox && tsc", "node ../standalone/MiamiBox/app.js"), 
    new Task("tsc ../standalone/Functions/functions.ts", "node ../standalone/Functions/functions.js"),
    new Task("cd ../standalone/Generics && tsc", "node ../standalone/Generics/gen.js"),
    new Task("tsc ../standalone/AsyncTask/asyncTask.ts", "node ../standalone/AsyncTask/asyncTask.js"),
];

var showResult = function(error, stdout, stderr) {
    logInfo("decoration");
    console.log(stdout);
};

if ([1, 2, 3, 4].indexOf(part) != -1) {
    logInfo("compile", tasks[part]);
    var compile = exec(tasks[part].compile);

    compile.stdout.on("data", function(data) {
        logInfo("eventInfo", { text: "Compile info: ", data: data});
    });
    compile.stderr.on("data", function(data) {
        logInfo("eventInfo", { text: "Compile error on", data: data});
    });
    compile.stdout.on("close", function(data) {
        logInfo("execute", tasks[part]);
        var run = exec(tasks[part].execute, showResult);

        run.stderr.on("data", function(data) {
            logInfo("eventInfo", { text: "Runtime error on", data: data });
        });
    });
} else {
    showUsage();
}