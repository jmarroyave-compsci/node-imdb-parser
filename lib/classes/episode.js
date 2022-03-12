import { getModule } from './helpers.js' 

export const getEpisode = async($, version) => {
    const resp = {}
    const mod = await getModule(version);        
    return mod.getEpisode($, resp);
}