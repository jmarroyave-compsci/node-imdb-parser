import { getModule } from './helpers.js' 

export const getTitleKeywords = async($, version) => {
    const resp = {}
    const mod = await getModule(version);        
    return mod.getTitleKeywords($, resp);
}