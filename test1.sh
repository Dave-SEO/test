git rm -r --cached test
git commit -m 'delete test dir-2'
git push -u origin master
yarn build
git add .
git commit -m 'dist-a'
git push