import * as algebra from "./algebra.js";

var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;

// import { Expression, Equation } from './algebra.js';

const z = new algebra.Expression('♥');
const eq = new algebra.Equation(z.subtract(4), 8);
const answer = eq.solveFor('♥');

const calcul = algebra.parse('(1 - 2 / 1) / (-1)');
const exp1 = algebra.Expression('x*2/(5-(x*3))=12.0');

console.log(answer.toString());
console.log(calcul.toString());

