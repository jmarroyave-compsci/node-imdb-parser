import { makeUnique, getID, getImageSrc } from '../../helpers.js'

const TYPE_MOVIE = "movie"
const VERSION = 1

export const getEpisode = ($, data) => {
    const type = $('[property="og:type"]').attr('content')?.replace('video.', '');

    data.id = $('[property="imdb:pageConst"]').attr('content');
    data.info = { 
        release : null, 
        title : { default: null },
        classification: null, plot: null, genres: null, type : null, keywords: null,
        language: null, production: null, filmLocations: null, countryOfOrigin: null,
        ratings: { imdb: { rating: null, votes: null }, },
        tech: { color: null, soundmix: null, aspectRatio: null, runtime: null},
        links : { officialSite: null, },
    }  

    data.info.type = type
    data.info.title.default = $('[data-testid="hero-title-block__title"]').text().trim()
    data.info.release = $('[data-testid="title-details-releasedate"] .ipc-metadata-list-item__content-container a').text().trim();
    if (data.info.release) {
        data.info.release = new Date(data.info.release);
    }
    const header = $('[data-testid="hero-title-block__metadata"] li').toArray()


    data.info.classification = $('[data-testid="storyline-certificate"]  span').last().text().trim();         
    data.info.genres = $('[data-testid="genres"] a').map(function () {
        return $(this).text()
    }).toArray()
    data.info.countryOfOrigin = $('[data-testid="title-details-origin"] div').last().text().trim(); 
    data.info.filmLocations = $('[data-testid="title-details-filminglocations"] div').last().text().trim(); 
    data.info.plot = $('[data-testid="plot"] > span[data-testid="plot-xl"]').text().trim()
    data.info.plot = (data.info.plot == "Add a plot") ? null : data.info.plot;
    data.info.ratings.imdb.rating = $('[data-testid="hero-rating-bar__aggregate-rating__score"] > span').first().text().trim();
    data.info.ratings.imdb.votes = $('div[class^="AggregateRatingButton__TotalRatingAmount"]').first().text().replace(' ', ',').trim();        
    data.info.keywords = $('[data-testid="storyline-plot-keywords"] a').map(function () { return $(this).text().trim()}).toArray().filter( r => !r.endsWith(" more"));
    data.info.language = $('[data-testid="title-details-languages"] li').map(function () { return $(this).text().trim()}).toArray();
    data.info.production = $('[data-testid="title-details-companies"] li').map(function ( node, el ) { 
        return { name: $(this).text().trim(), href: $(this).find("a").attr('href') }
    }).get();
    data.info.links.officialSite = $('[data-testid="title-details-officialsites"] li a').map(function () { 
        return { 
            name: $(this).text().trim(), 
            href: $(this).attr('href'),
        }
    }).toArray();

    data.info.tech.color = $('[data-testid="title-techspec_color"] li').map(function () { return $(this).text().trim()}).toArray();
    data.info.tech.aspectRatio = $('[data-testid="title-techspec_aspectratio"]  span').last().text().trim(); 
    data.info.tech.soundmix = $('[data-testid="title-techspec_soundmix"] li').map(function () { return $(this).text().trim()}).toArray();
    data.info.tech.runtime = $('[data-testid="title-techspec_runtime"] div').last().text().trim(); 

    data.media = { poster: null, trailer: null, photos : null, videos: null }
    data.media.poster = getImageSrc($('[data-testid="hero-media__poster"] img').first()?.attr('srcset'))
    data.media.trailer = $('.hero-media__slate-overlay').attr('href')
    data.media.photos = $('[data-testid="Photos"] img').map(function ( node, elem ) { 
        return getImageSrc($(elem).attr('srcset'))
    }).toArray().filter(makeUnique);
    data.media.videos = $('[data-testid="videos-section"] .ipc-lockup-overlay').map(function ( node, elem ) { 
        return $(elem).attr('href')
    }).toArray().filter(makeUnique);

    data.people = { directors : null, writers: null, stars : null, cast : null }
    data.people.directors = $('li[data-testid="title-pc-principal-credit"]:first-child ul').first().children("li").map(function () { 
        return { 
            name : $(this).text().trim(), 
            id: getID($(this).find("a").attr('href'))
        }
    }).toArray().filter(makeUnique);

    data.people.writers = $('li[data-testid="title-pc-principal-credit"]').map(function () { 
        const lbl = $(this).children("span").text().toLowerCase();
        if(lbl != "writers") return;

        return $(this).find("div ul li").map( function(){
            return { 
                name : $(this).text().trim(), 
                id: getID($(this).find("a").attr('href'))
            }        
        } ).toArray();

    }).toArray()

    data.people.writers = data.people.writers?.slice(0, data.people.writers.length / 2)

    data.people.stars = $('li[data-testid="title-pc-principal-credit"]:last-child div ul').first().children("li").map((item, elem) => { 

        return { 
            name : $(elem).text().trim(), 
            id: getID($(elem).find("a").attr('href'))
        }
    }).get()

    data.people.cast = $('[data-testid="title-cast"] [data-testid="title-cast-item"]').map( (item, card) => {
        const resp = { id: null, avatar: null, name: null, episodes: null, year: null }
        card = $(card)
        resp.id = getID(card.find('[data-testid="title-cast-item__actor"]')?.attr('href'))
        resp.avatar = card.find('[data-testid="title-cast-item__avatar"] img').attr('src')
        resp.name = card.find('[data-testid="title-cast-item__actor"]')?.text()
        resp.episodes = card.find('[data-testid="title-cast-item__episodes--short"]').text()?.split(" ")?.[0]
        resp.episodes = (resp.episodes) ? parseInt(resp.episodes) : null;
        resp.as = card.find('[data-testid="cast-item-characters-with-as"]').text()?.split("as ")?.[1]
        resp.as = (resp.as) ? resp.as : null;

        resp.year = card.find('[data-testid="title-cast-item__tenure"]').text()
        resp.year = (resp.year) ? parseInt(resp.year) : null;
        return resp;
    }).get()

    data.related = $('[data-testid="MoreLikeThis"] .ipc-poster-card').map( (item, card) => {
        const resp = { id: null, poster: null, title: null}
        card = $(card)
        resp.id = card.find('.ipc-poster-card__title').attr('href').split("/")[2]
        resp.poster = card.find('.ipc-media img').attr('src')
        resp.title = card.find('.ipc-poster-card__title').text()
        return resp;            
    }).get()

    data.seasons = $('#browse-episodes-season option')
        .filter(function () { return Number($(this).attr('value') >= 1)})
        .map(function () { return Number($(this).attr('value'))})
        .toArray()
        .filter(x => x)
        .sort();

    data.version = VERSION

    return data
}
