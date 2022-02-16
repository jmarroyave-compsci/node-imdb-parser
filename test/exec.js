import { parseTitle, log, saveResp } from "./_.js"

var caseNum = 1
var resp;
resp = parseTitle(caseNum);
///log(resp)
saveResp(caseNum, resp);
