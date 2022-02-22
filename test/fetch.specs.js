import { files, console } from "@jmarroyave/fw-console"
const __dirname = files.getDirname()
import { fetch as _fetch } from '../lib/index.js';
import assert from 'assert';

describe(`fetch a page`, function() {

  it(`test`, async function() {
    const uri = "https://www.imdb.com/title/tt2527336/keywords"
    const resp = await _fetch( uri )
    files.save(`${__dirname}/data/fetch/test.html`, resp)
    assert.equal(1,1)
  });    


});
