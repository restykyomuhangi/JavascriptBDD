const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

  let answer = 0

  Given ('I start with {int}', function(input) {
    answer = input;
  });
  When('I add {int}', function(input) {
    answer += input;
  });
  Then('I end up with {int}', function(input) {
    assert.equal(answer, input);
  });

  When('I multiply by {int}', function(input){
    answer *= input;	
});

  When('I subtract {int}', function(input){
    answer -= input;	
});
  When('I divide it by {int}', function(input){
    answer /= input;	
});
  When('I power it by {int}', function(input){
    answer **= input;	
});
  When('I take the modulo of {int}', function(input){
    answer %= input;	
});
  When('I floor divide it by {int}', function(input){
    answer = Math.floor(answer / input);
});



number = 0;
let comparisonNumber = 0;
let result = false;

Given('I have the number {int}', function(input) {
  number = input;
});

When('I check if it is greater than {int}', function(input) {
  comparisonNumber = input;
  result = number > comparisonNumber; 
});

Then('the result should be true', function() {
  assert.strictEqual(result, true); 
});

Then('the result should be false', function() {
  assert.strictEqual(result, false); 
});

When('I check if it is greater than or equal to {int}', function(input) {
  comparisonNumber = input;
  result = number >= comparisonNumber; 
});
When('I check if it is less than {int}', function(input) {
  comparisonNumber = input;
  result = number < comparisonNumber; 
});

When('I check if it is less than or equal to {int}', function(input) {
  comparisonNumber = input;
  result = number <= comparisonNumber; 
});
When('I check if it is equal to {int}', function(input) {
  comparisonNumber = input;
  result = number == comparisonNumber; 
});