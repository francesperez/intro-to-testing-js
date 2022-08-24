// Unit tests for the helloWorld function
//describe is the name of the test suite, in this case, it is called helloWorld
describe('helloWorld', function() { //this anohnymous function right here is the second parameter of the describe
    // function.
    it('should be a defined function', function() { //the it function is a built-in function from the Jasmine
        // library; the it funciton includes a message (aka Title of the spec/specification)
      expect(typeof helloWorld).toBe('function'); //an expectation has an assertion(expect) and a matcher (.to be/
        // not.toBe)
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function() {
    it('should be a defined function', function() { //the it function is a built-in function from the Jasmine
        // library; the it funciton includes a message (aka Title of the spec/specification)
        expect(typeof sayHello).toBe('function'); //an expectation has an assertion(expect) and a matcher (.to be/
        // not.toBe)
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, (name)!" input when executed', function() {
        expect(sayHello()).toBe(sayHello());
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});

