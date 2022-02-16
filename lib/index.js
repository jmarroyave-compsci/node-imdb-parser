import cheerio from 'cheerio'
import { Title } from './classes/index.js'

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

    title (htmlText, version=null) {
        version = version ?? this.defaultVersion
        const $ = this.getHTMLDOM( htmlText )
        return new Title($, version)
    }
}

export { 
    IMDBParser 
}