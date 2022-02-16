import { files, console } from "@jmarroyave/fw-console"
const __dirname = files.getDirname();
import { IMDBParser } from '../lib/index.js';

export const log = ( data ) => console.log(JSON.stringify( data , null , 2))

const path = `${__dirname}/data`
export const getCase = ( caseNumber ) => files.get(`${path}/case-${caseNumber}.html`)
export const getExpectedResp = ( caseNumber ) => files.getJSON(`${path}/case-${caseNumber}.expected.json`)
export const saveResp = ( caseNumber, data ) => files.saveJSON(`${path}/case-${caseNumber}.v.${data.version}.json`, data)

export const parseTitle = ( caseNumber ) => {
  const parser = new IMDBParser();
  const html = getCase(caseNumber);
  const resp = parser.title( html )
  saveResp( caseNumber, resp )
  return resp
} 