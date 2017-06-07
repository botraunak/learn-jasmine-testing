
// Describe a Suite you want to test  
// Can be thought of as a module you would like to test
describe("BasicTestingSuite", function() {
    var a;
    // Individual tests or specs are define by the it
    it("Basic Spec", function() {
        a = true;
        // Asserting your unit tests
        expect(a).toBe(true);
    });
});

