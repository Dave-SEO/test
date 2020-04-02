git rm -r  build
git commit -m 'delete build dir-4'
git push -u origin master
yarn build
git add .
git commit -m 'build-c'
git push