// import { initializeApp } from 'firebase-admin';
import { https } from 'firebase-functions';
import nextjs from './next';

// initializeApp();

exports.nextServer = https.onRequest(nextjs);
