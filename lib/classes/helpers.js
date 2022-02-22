import { files } from '@jmarroyave/fw-console';
const __dirname = files.getDirname();

export const makeUnique = (value, index, self) => self.indexOf(value) === index;
export const getID = (href) => {
    return href?.split("/")?.[2]?.split("?")[0]
}
export const getImageSrc = (srcset) => {
    return srcset?.split(', ').slice(-1)?.pop()?.split(" ")[0]
}

export const getModule = async (version) => {
    const mod = await import(`file://${__dirname}/layouts/${version}/index.js`);
    return mod
}