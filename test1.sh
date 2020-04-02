git rm -r --cached test
git commit -m 'delete test dir-3'
git push -u origin master
yarn build
git add .
git commit -m 'dist-b'
git push