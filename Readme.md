//what is --save-exact
//what is @types/node
//we use this .prettierc inside git hooks to do formatting inside ci/cd pipeline
//Install prettier
//npx tsc --init andi install typescript compatiblr version with es-lint
//Install eslint
//npx eslint .
//npx eslint --fix(To fix someof the eslint issue)
//npm run lint:check
//npm run lint:fix

//Install husky
//npx husky init
//what is the role of prepare key in script object of package.json

//prepare script is npm script

//npm install --save-dev lint-staged

//why we need ts-node

node.js natively executes Javascript files not typescript files ts-node solves this by compiling typescript and executing it without requiring you to manually geneate Javascript files

npm i winston
no i -d @types/winston

{error:0,warn:1,info:2,http:3,verbosr:4,debug:5,silly:6}//highest to lowest

silent:true(To stop logging)

//Erro Handling:Global Erro Handler

> npm install --save-dev jest
> npm install --save-dev ts-jest
> npx ts-jest config:init
> npm install --save-dev @types/jest

//--runInBand:jest testcase run concurrently that can be issue I want test run sequentially


//PORT BINDING:Expose the docker port in host machine basically docker application port accessible form app

//Build dockerImage and here tag 
docker build -t auth-service:dev -f docker/dev/Dockerfile .

docker run --rm -it -v %cd%:/usr/src/app -v /usr/src/app/node_modules  --env-file %cd%/.env -p 5501:5501 -e NODE_ENV=development auth-service:dev


//--rm:once container stop so we delete that automatically use (--rm)
//-t:to run container in interactive mode(attach terminal to container)
//-d:detach mode
//-v:container or source code folder sync(Munt Bind)

-v /usr/src/app/node_modules :container node_modules not sync node_modules with host machine node_modules
//Mount Binding vs Volume Binding


//Node_module have own binary file in each compile environment

//left side:Host Machine
//Right side:Docker machinr

//Pass env variables
--env-file  %cd%/.env -p 5501:5501 -e NODE_ENV=development

//Run docker image
docker run --rm -it -v %cd%:/usr/src/app -v /usr/src/app/node_modules --env-file %cd%/.env -p 5501:5501 -e NODE_ENV=development auth-service:dev

//Show all docker images
docker image ls

if container is running in interactive mode
ctrl+c

if container is running in detach mode
docker ps
docker stop <container id>