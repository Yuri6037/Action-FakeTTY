const core = require('@actions/core');
const exec = require('@actions/exec');
//const fs = require('fs');

//const homedir = require('os').homedir();
const scriptDir = __dirname + "/script/";

core.exportVariable("TERM", "xterm-256color");

if (process.platform === "win32") {
    //Setup windows
    core.addPath(scriptDir + "win32");
} else if (process.platform === "darwin") {
    //Setup macosx
    exec.exec("brew install expect");
    core.addPath(scriptDir + "darwin");
} else {
    //Setup linux
    core.addPath(scriptDir + "linux");
}
