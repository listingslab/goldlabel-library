"use client"; 
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './AppState';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Layout } from "./Layout";
import { MUI } from "./Design";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

export default function GLLibrary(props: any) {
  const {children} = props
  return <Provider store={store}>
          <MUI>
            <Layout type={"default"}>
              {children}
            </Layout>
          </MUI>
        </Provider>
}
