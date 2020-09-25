import { expect } from 'chai';

let mochaAsync = (fn) => {
    return async (done) => {
        try {
            await fn();
            done();
        } catch (err) {
            done(err);
        }
    };
};
let someAsyncMethodToTest = async () =>{
    setTimeout(function() {
        
    }, 200);

}
describe('async tests',()=>{

    it("Sample async/await mocha test using wrapper", mochaAsync(async () => {
        var x = await someAsyncMethodToTest();
        expect(x).to.equal(true);
    }));

})