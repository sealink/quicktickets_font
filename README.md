### Why

Generates the quicktickets font from a Fontello configuration and exposes it as
an npm package which is more easily consumed by webpack.

Future icon work in QuickTickets web should move away from the fontello approach
and use more standard npm packages such as font-awesome.

### Deployment

Build / Deployment is handled via travis CI.
Package management is via NPM.

First create the release branch
```
git branch release/0.3.0
```

Second Update package.json and specify the version you are releasing

Next Tag and push to travis
```
git tag v0.3.0
git push origin master --tags
```
Remember to merge changes back to the master branch
