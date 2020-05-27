const core = require('@actions/core');
const { exec } = require('child_process');

core.exportVariable("TERM", "xterm-256color");

if (process.platform === "win32") {
    //Setup windows
    exec("Set-Alias faketty Invoke-Expression \"$args\"");
} else if (process.platform === "darwin") {
    //Setup macosx
    exec("brew install expect");
    exec("alias faketty=\"unbuffer $*\"");
} else {
    //Setup linux
    exec("alias faketty=\"script -c -e \\\"$*\\\"\"");
}
