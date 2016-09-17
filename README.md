# Cellular Automata

Following along with [@_lrlna](https://twitter.com/_lrlna) and
[@mpjme](https://twitter.com/mpjme) as they code up
[rule 73](http://atlas.wolfram.com/01/01/73/) of cellular automata.

[Video](https://youtu.be/bc-fVdbjAwk)

# Develop

* clone the repo `git clone <git url>`

* npm install in the root directory `npm install`

* `npm run watch` in one terminal window

* `npm run browser-sync` in another terminal window

[Browsersync](https://www.browsersync.io) should open a browser window and
point to [`localhost:3000`](http://localhost:3000) where it's serving up the project.
It will also refresh the browser page when it detects changes.

[Watchify](https://github.com/substack/watchify) will rebuild the bundle when
you make changes to index.js and browser-sync will refesh the browser window.
