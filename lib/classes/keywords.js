import { getModule } from './helpers.js' 

export const getKeywords = async($, version) => {
    const resp = {}
    const mod = await getModule(version);        
    return mod.getKeywords($, resp);
}