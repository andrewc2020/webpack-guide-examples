import { expect } from 'chai';

let mochaAsync = (fn:any) => {
    return (done:any) => {
      fn.call().then(done, (err: any)=>{done(err)});
    };
  };

  let someLongSetupCode = () =>{
    setTimeout(()=>{}, 200);
  }

  beforeEach(mochaAsync(async () => {
    await someLongSetupCode();
}));

describe('async tests',()=>{

    // it("Sample async/await mocha test using wrapper", mochaAsync(async () => {
    //     var x = await someAsyncMethodToTest();
    //     expect(x).to.equal(true);
    // }));
    it('should pass',()=>{
        let one = 1;
        expect(one).to.equal(1);
    })

    it("Using a Promise with async/await that resolves successfully", async function() {
        var testPromise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve("Hello!");
            }, 200);
        });
    
        var result = await testPromise;
    
        expect(result).to.equal("Hello!");
    });

    

})