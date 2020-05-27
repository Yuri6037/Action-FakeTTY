const core = require('@actions/core');
const exec = require('@actions/exec');

core.exportVariable("TERM", "xterm-256color");

if (process.platform === "win32") {
    //Setup windows
    exec.exec("Set-Alias faketty Invoke-Expression \"$args\"");
} else if (process.platform === "darwin") {
    //Setup macosx
    exec.exec("brew install expect");
    exec.exec("alias faketty=\"unbuffer $*\"");
} else {
    //Setup linux
    exec.exec("alias faketty=\"script -c -e \\\"$*\\\"\"");
}
