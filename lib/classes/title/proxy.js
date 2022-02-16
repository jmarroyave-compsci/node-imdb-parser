import v2021A from './title_2021_a.js'

class Title {

    constructor ($, version) {
        var parser;
        switch(version){
            case "2021_A":
                parser = v2021A
                break;
            default:
                throw Error(`version ${version} not implemented`)
        }

        new parser($, this)
    }

}

export {
    Title
}