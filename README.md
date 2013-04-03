# Planetary Conquest

## Setting up source maps
Always compile coffeescript using `script/compile` (`node script\compile.js` on windows). This will generate source maps along with the compiled javascript. Use `script/compile --watch` (`node script\compile.js --watch` on windows) to compile any coffeescript when it is saved automatically.

When using Chrome Canary, in-browser source map support can be enabled in the developer tools configuration. Open the developer tools (Tools > Developer Tools) and click the gear icon in the bottom right. Under "Sources," check "Enable source maps."