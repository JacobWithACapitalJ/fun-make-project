const cmd = require("node-cmd");
const inquirer = require("inquirer");
function makeProject(dir) {
  cmd.get(
    `cd .. && mkdir ${dir} && cd ${dir} && touch index.js && mkdir spec && cd spec && touch index-spec.js && cd .. && npm install -d mocha chai`
  );
}
inquirer
  .prompt([
    {
      type: "input",
      name: "directory",
      message: "what would you like to name the new project?"
    }
  ])
  .then(answers => {
    console.log(answers);
    makeProject(answers.directory);
  });
