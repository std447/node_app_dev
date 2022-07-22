const assert = require('assert');
const { clearScreenDown } = require('readline');

describe('Array',()=>{
    it("Return -1 if value is not present in Array",()=>{
        assert.equal([1,2,3].indexOf(4),-1);
    });
});