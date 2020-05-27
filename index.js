const { exec } = require("child_process");

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
