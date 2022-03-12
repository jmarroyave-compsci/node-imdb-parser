import { files } from '@jmarroyave/fw-console';
const __dirname = files.getDirname();

export const makeUnique = (value, index, self) => self.indexOf(value) === index;
export const getID = (href) => {
    return href?.split("/")?.[2]?.split("?")[0]
}

export const getModule = async (version) => {
    const mod = await import(`file://${__dirname}/layouts/${version}/index.js`);
    return mod
}

export const _DATE = (d) => {
    try {
        return new Date(Date.parse(`${d?.trim().replace(/\./g, "")} 00:00:00 GMT`)).toISOString()
    }catch(ex){
        return d
    }
}

export const _INT = (d) => {
    try {
        return parseInt(d)
    }catch(ex){
        return d
    }
}

export const _FLOAT = (d) => {
    try {
        return parseFloat(d)
    }catch(ex){
        return d
    }
}

export const getImageSrc = (srcset) => {
    return srcset?.split(', ').slice(-1)?.pop()?.split(" ")[0]
}

export const _IMG = (img) => {
    if(!img) return null;
    if(img.attr('srcset')){
        return img.attr('srcset')?.split(', ').slice(-1)?.pop()?.split(" ")[0]    
    } else if(img.attr('src')){
        return img.attr('src')    
    }
    
}


