import React, {Component} from 'react';
import { expect } from 'chai';
import Home from './home'
import doit from './index'
import { mochaAsync } from './mochaAsync';






describe("Enzyme and async tests",()=>{
    it('should find a tag on the component',()=>{
        const wrapper = shallow(<Home/>);
    expect(wrapper.find(Home)).to.have.length(0);

    })
    it('should be able to call doit',()=>{

        let result = doit();
        console.log(result);
        expect(result).to.equal(1);

    });
    it("Using setTimeout to simulate asynchronous code!", function(done){
        setTimeout(function() {
            done();
        }, 200);
    });
    it("Using a Promise that resolves ", function(done) {
        var testPromise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve("Hello!");
            }, 200);
        });
    
        testPromise.then(function(result){
            try {
                expect(result).to.equal("Hello!");
                done();
            } catch(err) {
                done(err);
            }
        }, done);
    });

    it('should find a div on the component',()=>{
        const wrapper = shallow(<Home />);
    expect(wrapper.find('div')).to.have.length(1);

    })

    
   
    
   
    
})// end of describe