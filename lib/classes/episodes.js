import { getModule } from './helpers.js' 

export const getEpisodes = async($, version) => {
    const resp = {}
    const mod = await getModule(version);        
    return mod.getEpisodes($, resp);
}