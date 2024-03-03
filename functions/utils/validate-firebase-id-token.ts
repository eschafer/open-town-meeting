import { importX509, JWTPayload, jwtVerify, KeyLike } from 'jose';

const PUBLIC_KEYS_URL =
  'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
const ISSUER = 'https://securetoken.google.com/open-town-meeting';
const AUDIENCE = 'open-town-meeting';

type PublicKeyRecord = Record<string, string>;

interface JWTHeader {
  kid: string;
}

// Fetch the public keys from Google's public key endpoint
async function fetchPublicKeys(): Promise<PublicKeyRecord> {
  try {
    const publicKeysResponse = await fetch(PUBLIC_KEYS_URL);

    if (!publicKeysResponse.ok) {
      throw new Error(
        `Failed to fetch public keys: ${publicKeysResponse.statusText}`,
      );
    }

    const publicKeys: PublicKeyRecord = await publicKeysResponse.json();

    return publicKeys;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error; // Re-throw the error to be handled by the caller
    } else {
      throw new Error('Failed to fetch public keys: unknown error');
    }
  }
}

// Validate a Firebase ID token
export default async function validateFirebaseIdToken(
  token: string,
): Promise<JWTPayload | Error> {
  if (typeof token !== 'string') {
    throw new Error('Invalid token: token must be a string');
  }

  try {
    // Fetch the public keys from Google
    const publicKeys = await fetchPublicKeys();

    // Decode the token to get the key ID (kid)
    const header: JWTHeader = JSON.parse(atob(token.split('.')[0]));

    // Use the kid to select the correct public key
    const publicKeyPem: string = publicKeys[header.kid];
    if (!publicKeyPem) {
      throw new Error('Invalid token: no matching kid found');
    }

    // Import the public key
    const publicKey: KeyLike = await importX509(publicKeyPem, 'RS256');

    // Verify the token with the public key
    const response = await jwtVerify(token, publicKey, {
      issuer: ISSUER,
      audience: AUDIENCE,
    });
    const payload: JWTPayload = response.payload;
    return payload;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('Invalid token: unknown error');
    }
  }
}
