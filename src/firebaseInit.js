// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBdfbHhiOncEba6v2VoNN6WXR0F6sV48Tw',
	authDomain: 'blogs-52a65.firebaseapp.com',
	projectId: 'blogs-52a65',
	storageBucket: 'blogs-52a65.appspot.com',
	messagingSenderId: '664974592809',
	appId: '1:664974592809:web:327d87b96eed5920a94538',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
