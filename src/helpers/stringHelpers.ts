export const url_decode = (x: string) =>
  decodeURIComponent(x).replace(/\+/g, " ");
export const url_encode = (x: string) =>
  encodeURIComponent(x).replace(/%20/g, "+");
