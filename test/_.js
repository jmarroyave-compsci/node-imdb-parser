import { files, console } from "@jmarroyave/fw-console"
const __dirname = files.getDirname();
import { IMDBParser } from '../lib/index.js';

export const log = ( data ) => console.log(JSON.stringify( data , null , 2))

const path = `${__dirname}/data`
export const getCase = ( caseNumber ) => files.get(`${path}/parse/case-${caseNumber}.html`)
export const getExpectedResp = ( caseNumber ) => files.getJSON(`${path}/parse/case-${caseNumber}.expected.json`)
export const saveResp = ( caseNumber, data ) => files.saveJSON(`${path}/parse/case-${caseNumber}.v.${data.version}.json`, data)

export const parseTitle = async( caseNumber ) => {
  const parser = new IMDBParser();
  const html = getCase(caseNumber);
  const resp = await parser.title( html )
  saveResp( caseNumber, resp )
  return resp
} 

export const parseTitleKeywords = async( caseNumber ) => {
  const parser = new IMDBParser();
  const html = getCase(caseNumber);
  const resp = await parser.titleKeywords( html )
  saveResp( caseNumber, resp )
  return resp
} 