# Simple Site Crawler

This is robust site crawler, collecting unique list of its static resources. Current approach works in batches - first we get the initial file, then generate crawlable links output/links.json, then from those links generate new resources links/. When no new resources are found, then list of unique static resources is generated to output/output.json from resources/ directory.

To start this app, links/ and resources/ folders should be empty. Folders aren't empty for demonstartion purposes only.

## Install

```bash
npm i
```

## Run

```bash
# links amd resources directory shuld be empty
npm run start
```

## Possible extentions

* Find anything, for example, some data
* Find 404s

## TODO

* Implement checking if url is a;ready crawled, data is on parsed/parsed.json anyway, without it, it will just run forever.
* Also, some TODOs inside the code
* Some function level testing, because we need more checks for more real life situations
* Remove setInterval for appropriate EventEmitter queue
