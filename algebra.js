// var Fraction = require('./src/fractions');
// var Expression = require('./src/expressions').Expression;
// var Equation = require('./src/equations');
// var Parser = require('./src/parser');

import Fraction  from './src/fractions.js';
import { Expression } from './src/expressions.js';
import Equation from './src/equations.js';
import Parser from './src/parser.js';

var parse = function(input){
	var parser = new Parser();
	var result = parser.parse(input);
	return result;
};

var toTex = function(input) {
    if (input instanceof Fraction || input instanceof Expression || input instanceof Equation) {
        return input.toTex();
    } else if (input instanceof Array) {
        return input.map(
            function(e) {
                if (e instanceof Fraction) {
                    return e.toTex();
                } else {
                    return e.toString();
                }
            }
        ).join();
    } else {
        return input.toString();
    }
};

export {
    Fraction as Fraction,
    Expression as Expression,
    Equation as Equation,
    parse as parse,
    toTex as toTex
};
