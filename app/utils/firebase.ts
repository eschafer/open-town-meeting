import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_advhmPGSFw5j1YBsprIVt_oHa4e7Nrc',
  authDomain: 'open-town-meeting.firebaseapp.com',
  databaseURL: 'https://open-town-meeting-default-rtdb.firebaseio.com',
  projectId: 'open-town-meeting',
  storageBucket: 'open-town-meeting.appspot.com',
  messagingSenderId: '72845727988',
  appId: '1:72845727988:web:49882b0f0a178dcd15a6a1',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
