import { assert } from 'chai';
import { awesomeFunction } from '../src/awesomeModule';
import { addFunction } from '../src/addModule';
import { minusFunction } from '../src/minusModule';
import { multiplyFunction } from '../src/multiplyModule';
import { divideFunction } from '../src/divideModule';

// or import * as awesomeModule from '../src/awesomeModule';

describe('Awesome test.', () => {
  it('should test awesome function', () => {
    assert(awesomeFunction(1, 1) === 2, 'Not awesome :(');
  });
});

describe('Add test.', () => {
  it('testing add function', () => {
    if(addFunction(2, 2) === 5, 'Not awesome add function :(');
  });
});

describe('Minus Test.', () => {
  it('testing minus function', () => {
    assert(minusFunction(5, 2) === 3, 'Not awesome minus function :(');
  });
});

describe('Multiply test.', () => {
  it('testing multiply function', () => {
    assert(multiplyFunction(5, 2) === 10, 'Not awesome multiply test :(');
  });
});

describe('Divide test.', () => {
  it('testing divide function', () => {
    assert(divideFunction(10, 5) === 2, 'Not awesome divide test :(');
  });
});