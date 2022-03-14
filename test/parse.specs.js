import { 
  parseTitle, 
  parseTitleKeywords,
  parseTitleEpisodes,
  parseEpisode,
  getExpectedResp, 
  saveResp
} from "./_.js"
import assert from 'assert';

describe(`Parsing a title's page`, function() {

  it(`Test Case 1`, async function() {
    const caseNumber = 1
    const resp = await parseTitle(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    

  it(`Test Case 2`, async function() {
    const caseNumber = 2
    const resp = await parseTitle(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    

  it(`Test Case 3`, async function() {
    const caseNumber = 3
    const resp = await parseTitle(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    

  it(`Test Case 4`, async function() {
    const caseNumber = 4
    const resp = await parseTitle(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    


  it(`Test Case 5`, async function() {
    const caseNumber = 5
    const resp = await parseTitleKeywords(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    

  it(`Test Case 6`, async function() {
    const caseNumber = 6
    const resp = await parseTitle(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    

  it(`Test Case 7`, async function() {
    const caseNumber = 7
    const resp = await parseEpisode(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    

  it(`Test Case 8`, async function() {
    const caseNumber = 8
    const resp = await parseTitleEpisodes(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    

  it(`Test Case 9`, async function() {
    const caseNumber = 9
    const resp = await parseTitle(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    

  it(`Test Case 10`, async function() {
    const caseNumber = 10
    const resp = await parseTitle(caseNumber)
    const expected = getExpectedResp( caseNumber );
    assert.equal(JSON.stringify(resp), JSON.stringify(expected))
  });    



});
