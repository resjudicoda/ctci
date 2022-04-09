# ctci

This is my personal repository for working through CTCI in Javascript.

The solutions here are all or mostly mine. I try to include comments in solutions if I looked to code from an outside source to help me solve the problem. The tests are written in Jasmine, and they are all mine. I build them out as I solve the problems.

Note - I work through these solutions before checking for an answer, meaning they aren't always the most optimal.

To help with the repetition of coding and testing, I wrote a custom shell command that takes one argument from the shell, creates a directory with that argument name, moves into that directory, creates template .js and spec.js files (again with the argument name), and then opens those files in VSCode.

For example, running "problem is_unique" from the shell creates a directory called "is_unique." The new directory will have three files called "is_unique.js", "is_unique.spec.js", and "is_unique_solution.js", each populated with some working template code. Running "jasmine is_unique.spec.js" will run the tests (assuming you have Jasmine installed). Changing the function in your .js file to return 'true' will get the test in the .spec.js file passing. From there, its up to you.

The shell command function is:

function problem() {
mkdir $1
cd $1
touch $1.js
cat <<eos > $1.js
const $1 = function() {
return false;
}
module.exports = $1
eos
touch $1.spec.js
cat <<eos > $1.spec.js
const $1 = require('./$1')
describe('$1', function() {
it('works', function() {
expect($1('test')).toEqual(true);
});
});
eos
code .
}

Here is a tutorial on how to create custom shell commands if you need it (I sure did). https://medium.com/devnetwork/how-to-create-your-own-custom-terminal-commands-c5008782a78e

Go ahead if you just want to copy this repo. I have migrated my finished solutions to separate files so the repo can be cloned and worked on from scratch (don't use the solution files). I have temporarily disabled all but the first of each spec with "xit". Make sure to enable them as you work on your solutions.
