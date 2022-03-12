import { makeUnique, getID, _IMG, _DATE, _FLOAT, _INT } from '../../helpers.js'

const VERSION = 1

export const getTitleEpisodes = ($, data) => {
    data = {
        season: _INT($('#episode_top').text().split(/[\s]+/)[1]),
        numberOfEpisodes: _INT($('[itemprop="numberofEpisodes"]').attr('content')?.trim()),
        episodes: null,
        version: VERSION
    }

    data.episodes = $('div.list_item').map(function ( node, el ) { 
        const episode = {
            episodeNumber: _INT($(el).find('[itemprop="episodeNumber"]').attr('content')?.trim()),
            img: _IMG($(el).find('img').first()),
            title: $(el).find('[itemprop="name"]').text()?.trim(),
            rating: {
                rating : _FLOAT($(el).find('div.ipl-rating-star.small span.ipl-rating-star__rating').text()?.trim()),
                votes: _INT($(el).find('span.ipl-rating-star__total-votes').text()?.trim()?.replace(/[\(\)\,]/g, "")),
            },
            onAir: _DATE($(el).find('.airdate').text()),
            plot: $(el).find('[itemprop="description"]').text()?.trim(),
        }
        return episode
    }).toArray();
    

    return data
}
