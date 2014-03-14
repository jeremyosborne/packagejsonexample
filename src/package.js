// This file is the source for constructing a `package.json` file.
// JSON is a wonderful interchange format, but due to the fact that the
// [JSON Specification](http://json.org) does not allow for comments, I find
// it horrid for self documenting examples.
//
// JavaScript allows for comments and inherently allows JSON. This file will
// act as the source for building a `package.json` file that also manages this
// package.
//
// It is the closest I can get to a self-documenting `package.json` file.



// The `package.json` file always consists of one top level object, which is
// what we export here in a [Node.js](http://nodejs.org) friendly way that
// will allow us to build our `package.json` file. A real `package.json` file
// will not contain the `exports = ` definition, nor any of these comments.
module.exports = {
    // Many of the following `package.json` parameters are optional depending
    // on whether or not this package will ever be published, and depending
    // on how much management we want to delegate to npm. I did not mark
    // optional vs. not-optional for the parameters, as a `package.json` file
    // is by its nature always optional.

    // Our npm package name needs to be unique only if we are going to publish
    // our package into an npm registry. If we aren't going to publish the
    // package the name can be anything we want.
    //
    // Leave off redundant affixes like `node-package` or `package-js`.
    // We know it is JavaScript for Node.
    "name": "packagejsonexample",
    // A single line, or sometimes slightly longer, description of our package.
    "description": "A documented package.json file",
    // [npm](http://npmjs.org) enforces the X.Y.Z semantic version
    // scheme that is described at [http://semver.org/](http://semver.org/)
    // and we should follow this versioning for our package.
    "version": "0.0.5",
    // URL to the homepage for this project. Might be distinct from repository.
    "homepage": "https://github.com/jeremyosborne/packagejsonexample",
    // An array of keywords used to describe this package to search engines,
    // mainly for people searching within the npm universe.
    "keywords": [
        "package.json",
        "package",
        "example"
    ],
    // Where is the source of truth for this code, and what type of repo is it?
    "repository": {
        "type": "git",
        "url": "https://github.com/jeremyosborne/packagejsonexample.git"
    },
    // File bugs here.
    "bugs": {
        "url": "https://github.com/jeremyosborne/packagejsonexample/issues"
    },
    // Every package should have at least one author. There are a couple of
    // formats for the author. This is the explicit format.
    // Think BDFL or original author.
    "author": {
        "name": "Jeremy Osborne",
        "email": "jeremywosborne@gmail.com",
        "url": "http://jeremyosborne.com/"
    },
    // People giving to the project. Same format as the author, except in
    // as array of people vs. just a single person.
    "contributors": [
        {
            "name": "Jeremy Osborne",
            "email": "jeremywosborne@gmail.com",
            "url": "http://jeremyosborne.com/"
        }
    ],
    // What licenses govern this code, and where is the license associated
    // with this code?
    // The complex form, "licenses", is an array of objects.
    // The simplest form is "license", and may point to just a string that
    // represents the standard name of the license, like "MIT".
    "licenses": [
        {
            "type": "MIT",
            "url": "http://github.com/jeremyosborne/packagejsonexample/blob/master/LICENSE.txt"
        }
    ],
    // If there is a file that should be loaded when require()ing this
    // folder-as-a-package, declare this file here, relative to our package
    // structure.
    "main": "src/package.js",
    // Essentially, which Node.js platforms do we support? These are glob
    // like expressions supported by the
    // [npm semantic version parser](https://npmjs.org/doc/semver.html):
    "engines": {
        "node": ">= 0.6.x"
    },
    // What other modules/libraries do we require for our own module?
    // The beauty of this dependencies block is that these modules will
    // be downloaded magically when we run npm install from within our
    // directory. npm itself will sort out any dependency conflicts within
    // our own dependencies and we can be pretty much assured that the
    // modules we need will be ready to run.
    //
    // Since json is yucky to hand edit, running the following auto-adds:
    //
    //     npm i some-module-name --save
    "dependencies": {
        "fs-extra": "0.3.x",
        "package-json-validator": "~0.5.6",
        "async": "~0.2.10"
    },
    // What dependencies are useful only for developers?
    // Installed when we `npm install` in our working directory, but not
    // when people require our package in their own package.json. This is the
    // usual and accepted place to put test frameworks and documentation
    // tools.
    //
    // Since json is yucky to hand edit, running the following auto-adds:
    //
    //     npm i some-module-name --save-dev
    "devDependencies": {
        "docco": "*"
    },
    // Should we disallow publishing to npm? Default is false.
    //
    // NOTE: Previous versions had this marked as true. I have unpublished
    // this code from npm as it isn't the sort of code that should be up
    // on npm (it's an example, not a useful module).
    "private": true,
    // npm has can manage a set of standard and non-standard scripts. The
    // standard set of scripts can be run with:
    //
    //     npm standard-script-name
    //
    // The non-standard scripts can be run with:
    //
    //     npm run-script script-name
    //
    // `dist` is a non-standard script, and can be run with:
    //
    //     npm run-script dist
    "scripts": {
        "dist": "node dist; node node_modules/.bin/docco src/package.js"
    }
};
