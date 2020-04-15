#!/usr/bin/env sh
vant-cli build-site

# superman-cdn /zv-ui ./site/*.js

# rm -rf site/*.js

# gh-pages -d site --add

# 进入生成的文件夹
cd ../../site

# 如果是发布到自定义域名
# echo 'document.lhanyun.com' > CNAME

git init
git add -A
git commit -m 'docs: deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:122687220/document.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:122687220/zv-ui.git master:gh-pages

cd -
