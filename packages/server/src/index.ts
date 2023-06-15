import { AppOptions, initializeApp } from 'firebase-admin/app';

export * from './app/functions';

const options: AppOptions = {
  projectId: 'screenguessr',
  storageBucket: 'screenguessr.appspot.com',
};

initializeApp(options);