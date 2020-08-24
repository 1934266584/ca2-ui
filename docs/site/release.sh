#!/usr/bin/env sh
vant-cli build-site

# superman-cdn /ca2-ui ./site/*.js

# rm -rf site/*.js

gh-pages -d site --add


