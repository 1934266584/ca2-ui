#!/usr/bin/env sh

# 进入生成的文件夹
cd site

# 如果是发布到自定义域名
# echo 'document.lhanyun.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:1934266584/document.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:1934266584/ca2-ui.git master:gh-pages

cd -