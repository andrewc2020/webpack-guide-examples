import { expect } from 'chai';
import sinon from 'sinon';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

 
global.expect = expect;
global.sinon = sinon;
global.mount = mount;
global.render = render;
global.shallow = shallow;


 
configure({ adapter: new Adapter() });