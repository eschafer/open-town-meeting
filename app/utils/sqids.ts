import Sqids from 'sqids';

const sqids: Sqids = new Sqids({
  alphabet: 'uszp2thmvric4yqdao6w9xkgfn8l07bj3e51',
  minLength: 6,
});

export const encodeId = (id: string) => {
  const encodedId = sqids.encode([parseInt(id, 10)]);
  return encodedId;
};

export const decodeId = (encodedId: string) => {
  const decodedId = sqids.decode(encodedId);
  return decodedId[0];
};
