# packagejsonexample
I made this some time ago, and just recently I've noticed it's gotten a few stars, despite me not updating it in forever. If you are new here, please visit the following resources which are probably more up to date:

* [npm docs for package.json](https://npmjs.org/doc/json.html)
* [Introduction to npm (and package.json)](http://howtonode.org/introduction-to-npm)
* [A package.json interactive guide](http://package.json.nodejitsu.com/)

In particular, I just found this one (as of time of writing) which I like a lot:

* [Package.json Validator](http://package-json-validator.com/)

And have used it to validate (and update) this projects `package.json`.



## Summary
This package consists of a regular JavaScript object in a regular `src/package.js` file with notes (JavaScript allows comments), that gets used to create the `package.json` for this project.



## docs
[Generated docs should be found here](http://htmlpreview.github.com/?https://github.com/jeremyosborne/packagejsonexample/blob/master/docs/package.html). If for some reason I broke this link, just check out the `docs/package.html` in your favorite browser.



## Requirements
[Node.js](http://nodejs.org).



## Building the distribution

    npm install
    # build docs and package.json file
    npm run-script dist
