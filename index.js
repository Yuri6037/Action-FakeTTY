const core = require('@actions/core');
const exec = require('@actions/exec');

core.exportVariable("TERM", "xterm-256color");

if (process.platform === "win32") {
    //Setup windows
    core.addPath("./script/win32/");
} else if (process.platform === "darwin") {
    //Setup macosx
    exec.exec("brew install expect");
    core.addPath("./script/darwin/");
} else {
    //Setup linux
    core.addPath("./script/linux/");
}
