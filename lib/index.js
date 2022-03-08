import cheerio from 'cheerio'
import { getTitle, getKeywords, getEpisodes } from './classes/index.js'
import _fetch from 'node-fetch';

class IMDBParser {

    constructor (options) {
        Object.assign(this, options)   
        this.defaultVersion = "2021_A"
    }

    getHTMLDOM( htmlText ){      
        const options = {
            xmlMode: false,
        }  
        return cheerio.load(htmlText, options)
    }

    async title (htmlText, version=null) {
        version = version ?? this.defaultVersion
        const $ = this.getHTMLDOM( htmlText )
        return await getTitle($, version)
    }

    async titleKeywords (htmlText, version=null) {
        version = version ?? this.defaultVersion
        const $ = this.getHTMLDOM( htmlText )
        return await getKeywords($, version)
    }

    async titleEpisodes (htmlText, version=null) {
        version = version ?? this.defaultVersion
        const $ = this.getHTMLDOM( htmlText )
        return await getEpisodes($, version)
    }
}


const fetch = async(uri) => {
    const response = await _fetch(uri);
    const body = await response.text();
    return body
}

export { 
    IMDBParser, fetch
}