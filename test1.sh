git rm -r --cached test
git commit -m 'delete test dir-4'
git push -u origin master
yarn build
git add .
git commit -m 'dist-c'
git push