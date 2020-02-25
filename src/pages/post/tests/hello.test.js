import React from 'react';
const greetme = "Hello!";
describe("Our first test!", () => {
   it("Should say hello!", () => {
      expect(greetme).toBe("Hello!");
   });
});