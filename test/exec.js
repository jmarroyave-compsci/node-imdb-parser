import { parseTitle, parseTitleKeywords, log, saveResp } from "./_.js"

const _parseTitle = async (caseNum) => {
	var resp = await parseTitle(caseNum);
	saveResp(caseNum, resp);
}

const _parseTitleKeywords = async (caseNum) => {
	var resp = await parseTitleKeywords(caseNum);
	saveResp(caseNum, resp);
}

await _parseTitle(4)
await _parseTitleKeywords(5)