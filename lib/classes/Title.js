const makeUnique = (value, index, self) => self.indexOf(value) === index;

class Title {

    constructor ($) {
        const self = this

        this.title = $('[data-testid="hero-title-block__title"]').text().trim()

        this.originalTitle = $('[data-testid="hero-title-block__original-title"]').text().trim().replace('Original title: ') || null

        this.release = $('[data-testid="title-details-releasedate"] .ipc-metadata-list-item__content-container a').text().trim();

        if (this.release) {
            this.release = new Date(this.release);
        }

        this.runtime = $('[data-testid="hero-title-block__metadata"] li span').last().text().trim()
        
        this.genre = $('[data-testid="genres"] a').map(function () {
            return $(this).text()
        }).toArray()

        this.plot = $('[data-testid="plot"]').first().text().trim()
        this.plot = (this.plot == "Add a plot") ? null : this.plot;

        this.director = $('li[data-testid="title-pc-principal-credit"]:first-child li').map(function () { 
            return $(this).text().trim()
        }).toArray().filter(makeUnique);

        this.stars = $('li[data-testid="title-pc-principal-credit"]:last-child li').map(function () { 
            return $(this).text().trim()
        }).toArray().filter(makeUnique);

        this.poster = $('[data-testid="hero-media__poster"] img')
            .first()
            ?.attr('srcset')
            ?.split(', ')
            ?.pop()
            .trim()
            .split(' ')[0];


        this.metascore = $('.score-meta').text().trim() || null;

        this.imdbRating = $('[data-testid="hero-rating-bar__aggregate-rating__score"] > span').first().text().trim();

        this.imdbVotes = $('div[class^="AggregateRatingButton__TotalRatingAmount"]').first().text().replace(' ', ',').trim();

        this.imdbID = $('[property="imdb:pageConst"]').attr('content');
        
        this.type = $('[property="og:type"]').attr('content')?.replace('video.', '');

        this.tagline = $('[data-testid="storyline-taglines"] div').text().trim();
        this.sl_plot_keywords = $('[data-testid="storyline-plot-keywords"] a').map(function () { return $(this).text().trim()}).toArray();

        this.language = $('[data-testid="title-details-languages"] li').map(function () { return $(this).text().trim()}).toArray();

        this.production = $('[data-testid="title-details-companies"] li').map(function () { return $(this).text().trim()}).toArray();

        this.officialSite = $('[data-testid="title-details-officialsites"] li').map(function () { return $(this).text().trim()}).toArray();


        this.akas = $('[data-testid="title-details-akas"] li').map(function () { return $(this).text().trim()}).toArray();

        this.tech_color = $('[data-testid="title-techspec_color"] li').map(function () { return $(this).text().trim()}).toArray();
        this.tech_soundmix = $('[data-testid="title-techspec_soundmix"] li').map(function () { return $(this).text().trim()}).toArray();


        this.seasons = $('#browse-episodes-season option')
            .filter(function () { return Number($(this).attr('value') >= 1)})
            .map(function () { return Number($(this).attr('value'))})
            .toArray()
            .filter(x => x)
            .sort();

        this.version = 2

    }

}

module.exports = Title