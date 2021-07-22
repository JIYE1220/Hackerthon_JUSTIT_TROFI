npm run heroku-postbuild
docker build . -t trofi
docker run -p 30000:80 -d trofi