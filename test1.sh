git rm -r --cached test
git commit -m 'delete test dir-1'
git push -u origin master
yarn build
git add .
git commit -m 'dist'
git push