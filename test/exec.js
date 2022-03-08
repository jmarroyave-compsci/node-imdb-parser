import { parseTitle, parseTitleKeywords, log, saveResp, parseTitleEpisodes } from "./_.js"

const _parseTitle = async (caseNum) => {
	var resp = await parseTitle(caseNum);
	saveResp(caseNum, resp);
}

const _parseTitleKeywords = async (caseNum) => {
	var resp = await parseTitleKeywords(caseNum);
	saveResp(caseNum, resp);
}

const _parseTitleEpisodes = async (caseNum) => {
	var resp = await parseTitleEpisodes(caseNum);
	saveResp(caseNum, resp);
}


//await _parseTitle(6)
await _parseTitleEpisodes(7)