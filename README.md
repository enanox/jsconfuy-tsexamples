# TypeScript examples for JSConfUY 2015

Hi everyone, I hope these examples could have helped you through the vast overview of the TypeScript language.

Just a reminder, to get full info about TypeScript check out [its official site](http://www.typescriptlang.org), and the list of definitions for a lot of [common libraries](http://definitelytyped.org).

In order to compile and run the examples, I've put together a runner for NodeJS (also written in TypeScript) to alleviate the compilation process.

## Prerequisites
- NodeJS
- Clone this repository
- Install `typescript` as a global module this way: 
`$ npm install typescript -g` (this will install the 1.5.0-alpha version)
- `cd` to the root directory, and compile the runner with 
`$ tsc runner.ts --module CommonJS`
- Run it with
`$ node runner`
- If you want to run the examples, you could choose among the options listed before.

## Compiling and running each example
- __"MiamiBox app"__
	- `$ tsc ../standalone/MiamiBox/contents.ts ../standalone/MiamiBox/miamiboxapp.ts ../standalone/MiamiBox/shipmean.ts ../standalone/MiamiBox/shipment.ts ../standalone/MiamiBox/view.ts --out ../standalone/MiamiBox/app.js --target ES5`
	- `$ node ../standalone/MiamiBox/app.js`
- __Functions__
	- `$ tsc ../standalone/Functions/functions.ts`
	- `$ node ../standalone/Functions/functions.js`
- __Generics__
	- `$ tsc ../standalone/Generics/generics.ts --target ES5`
	- `$ node ../standalone/Generics/generics.js`
- __"AsyncTask" example__
	- `$ tsc ../standalone/AsyncTask/asyncTask.ts`
	- `$ node ../standalone/AsyncTask/asyncTask.js`

License MIT 2015 - Mathias Rodriguez