/// <reference path="./lib/node.d.ts"/>

import childProcess = require("child_process");
var args = process.argv.splice(2);
var part = parseInt(args[0], 10);
var verbose = args.indexOf("-v") != -1;
var target = "--target ES5";
var tasks = [
    { compile: "", execute: ""},
    { compile: "tsc ../standalone/MiamiBox/app.ts " + target, execute: "node ../standalone/MiamiBox/app.js" }, 
    { compile: "tsc ../standalone/Functions/functions.ts " + target, execute: "node ../standalone/Functions/functions.js" },
    { compile: "tsc ../standalone/Generics/generics.ts " + target, execute: "node ../standalone/Generics/generics.js" },
    { compile: "tsc ../standalone/AsyncTask/asyncTask.ts " + target, execute: "node ../standalone/AsyncTask/asyncTask.js" },
];
var showResult = function(error, stdout, stderr) {
    if (verbose) {
        console.log("-----------------------\n")
    }
    console.log(stdout);
};

if ([1, 2, 3, 4].indexOf(part) != -1) {
    if (verbose) {
        console.log("-----------------------\nDebug info\n-----------------------");
        console.log("Compile command: " + tasks[part].compile);
    }
    var compile = childProcess.exec(tasks[part].compile);
    compile.stdout.on("data", function(data) {
        if (verbose) {
            console.log("Compile info: ", data);
        }
    });
    compile.stderr.on("data", function(data) {
        console.log("Compile error on", data);
    });
    compile.stdout.on("close", function(data) {
        if (verbose) {
            console.log(tasks[part].execute);
        }

        var run = childProcess.exec(tasks[part].execute, showResult);
        run.stderr.on("data", function(data) {
            if (verbose) {
                console.log("Runtime error on", data);
            }
        });
    });
} else {
    console.log("Example runner for TypeScript JSConfUY 2015 \n");
    console.log("Run: node runner [example] [-v]");
    console.log("Options:");
    console.log("    example - Could be any of the following codes: ");
    console.log("       1    - 'MiamiBox app' references, classes, enums and interfaces example.");
    console.log("       2    - Functions.");
    console.log("       3    - Generics - classes, interfaces and functions");
    console.log("       4    - 'AsyncTask' - generic classes and implementations");
    console.log("      -v    - verbose mode, show errors and messages\n");
    console.log("License: MIT 2015 - Mathias Rodriguez <mathias.rodriguez@gmail.com>");
}