export const tag_url_decode = (x: string) => x.replace(/\+/g, " ");
export const tag_url_encode = (x: string) => x.replace(/ /g, "+");
