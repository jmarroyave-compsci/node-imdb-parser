
import { parseTitle, saveResp, getExpectedResp } from "./_.js"
import assert from 'assert';

describe(`Parsing a title's page`, function() {

  it(`Test Case 1`, function() {
    const caseNumber = 1
    const resp = parseTitle(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    

  it(`Test Case 2`, function() {
    const caseNumber = 2
    const resp = parseTitle(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    

  it(`Test Case 3`, function() {
    const caseNumber = 3
    const resp = parseTitle(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    

  it(`Test Case 4`, function() {
    const caseNumber = 4
    const resp = parseTitle(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    
});
