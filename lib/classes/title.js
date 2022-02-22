import { getModule } from './helpers.js' 

export const getTitle = async($, version) => {
    const resp = {}
    const mod = await getModule(version);        
    return mod.getTitle($, resp);
}
