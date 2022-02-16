
export const makeUnique = (value, index, self) => self.indexOf(value) === index;
export const getID = (href) => {
    return href?.split("/")?.[2]?.split("?")[0]
}
export const getImageSrc = (srcset) => {
    return srcset?.split(', ').slice(-1)?.pop()?.split(" ")[0]
}
