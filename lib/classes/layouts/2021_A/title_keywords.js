import { makeUnique, getID, getImageSrc } from '../../helpers.js'

const TYPE_MOVIE = "movie"
const VERSION = 1

export const getTitleKeywords = ($, data) => {
    data.keywords = []
    data.keywords = $('td.soda').map(function ( node, el ) { 
        var relevancy = $(el).find("div.interesting-count-text").text().trim().split(" found")[0]
        relevancy = ( relevancy.includes("Is this relevant") ) ? null : relevancy.split(" of ").map( p => parseInt(p.trim()))
        relevancy = (relevancy) ? { n : relevancy[0], of: relevancy[1], prop: parseFloat((relevancy[0]/relevancy[1]).toFixed(2)) } : null
        return { 
            name: $(el).find("div.sodatext").text().trim(), 
            relevancy: relevancy,
        }
    }).get();

    data.version = VERSION

    return data
}

