var fs = require("fs");
var path = require("path");
process.chdir(path.resolve(path.dirname(process.argv[1]), ".."));
require("child_process").exec("node script/compile.js", function (error, stdout, stderr) {
  if (error) {
    console.log("error compiling");
    console.log(error);
    return;
  }
  process.stdout.write(stdout);
  process.stderr.write(stderr);
  var proc = require("child_process").spawn("node", ["server"]);
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
});
