import { 
	parseTitle, 
	parseEpisode,
	parseTitleKeywords, 
	parseTitleEpisodes,
	log, saveResp } from "./_.js"

const exec = async ( caseNum, parseFunction ) => {
	const resp = await parseFunction(caseNum);
	saveResp(caseNum, resp);
}

await exec(6, parseTitle)
await exec(10, parseTitle)
//await exec(7, parseEpisode)
//await exec(8, parseTitleEpisodes)
