import { importX509, JWTPayload, jwtVerify, KeyLike } from 'jose';

const PUBLIC_KEYS_URL =
  'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
const ISSUER = 'https://securetoken.google.com/open-town-meeting';
const AUDIENCE = 'open-town-meeting';

// Fetch the public keys from Google's public key endpoint
async function fetchPublicKeys(): Promise<Record<string, string>> {
  const publicKeysResponse = await fetch(PUBLIC_KEYS_URL);
  const publicKeys: Record<string, string> = await publicKeysResponse.json();

  return publicKeys;
}

// Validate a Firebase ID token
export default async function validateFirebaseIdToken(
  token: string,
): Promise<JWTPayload> {
  if (typeof token !== 'string') {
    throw new Error('Invalid token: token must be a string');
  }

  try {
    // Fetch the public keys from Google
    const publicKeys = await fetchPublicKeys();

    // Decode the token to get the key ID (kid)
    const header: { kid: string } = JSON.parse(atob(token.split('.')[0]));

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
  } catch (error) {
    throw new Error(`Invalid token: ${error.message}`);
  }
}
