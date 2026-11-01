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

node.js natively executes Javascript files not typescript files ts-node solves this by compiling typescript and executing it without requirin you to manually geneate Javascript files

npm i winston
no i -d @types/winston

{error:0,warn:1,info:2,http:3,verbosr:4,debug:5,silly:6}//highest to lowest

silent:true(To stop logging)

//Erro Handling:Global Erro Handler

>npm install --save-dev jest
npm install --save-dev ts-jest
>npx ts-jest config:init
>npm install --save-dev @types/jest

//--runInBand:jest testcase run concurrently that can be issue I want test run sequentially