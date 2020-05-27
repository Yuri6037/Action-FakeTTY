const core = require('@actions/core');
const exec = require('@actions/exec');
const fs = require('fs');

const scriptDir = __dirname + "/script/";

core.exportVariable("TERM", "xterm-256color");

if (process.platform === "win32") {
    core.addPath(scriptDir + "win32");
} else if (process.platform === "darwin") {
    exec.exec("brew install expect");
    core.addPath(scriptDir + "darwin");
    fs.chmodSync(scriptDir + "darwin/faketty", 0755);
} else {
    core.addPath(scriptDir + "linux");
    fs.chmodSync(scriptDir + "linux/faketty", 0755);
}
