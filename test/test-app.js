const assert = require('chai').assert;
const app = require('../app').newTable;
const expected1 = [
    {"A": "1", "B": "2"}
];

describe('App', function(){
	it('Test Description', function(){
		let result = app('test.csv')
		assert.equal(result, expected1);
	});		
});