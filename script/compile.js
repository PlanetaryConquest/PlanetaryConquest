var fs = require("fs");
var path = require("path");
process.chdir(path.resolve(path.dirname(process.argv[1]), ".."));
var watch = process.argv[2] === "--watch" ? " --watch " : "";
// fs.renameSync("node_modules", ".node_modules");
require("child_process").exec("node_modules/coffee-script/bin/coffee --map --compile" + watch + " .", function (error, stdout, stderr) {
  // fs.renameSync(".node_modules", "node_modules");
  if (error) {
    console.log("error");
    console.log(error);
    return;
  }
  process.stdout.write(stdout);
  process.stderr.write(stderr);
});
