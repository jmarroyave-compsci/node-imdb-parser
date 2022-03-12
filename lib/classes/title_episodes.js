import { getModule } from './helpers.js' 

export const getTitleEpisodes = async($, version) => {
    const resp = {}
    const mod = await getModule(version);        
    return mod.getTitleEpisodes($, resp);
}