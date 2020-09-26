
import compiler from './compiler';
import { expect } from 'chai';

describe('loader test',()=>{

    it('Should insert name and outputs JavaScript', async () => {
        const stats = await compiler('example.txt');
        const output = stats.toJson().modules[0].source;
      
        expect(output).to.equal('export default "Hey Alice!\"');
      });
})

