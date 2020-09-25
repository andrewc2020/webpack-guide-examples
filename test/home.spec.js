import React, {Component} from 'react';
import { expect } from 'chai';
import Home from './home'
import getComponent from './index'



describe("all tests",()=>{
    it('should find a tag on the component',()=>{
        const wrapper = shallow(<Home/>);
    expect(wrapper.find(Home)).to.have.length(0);

    })
    it('should be able to call doit',()=>{

        let result = doit();
        expect(result.to.equal(1));

    })
})