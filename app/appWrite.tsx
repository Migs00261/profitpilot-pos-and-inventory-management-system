'use client'
import { Client, Account,Storage } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('6676cf11002262ad8091'); // Replace with your project ID

export const account = new Account(client);

//export the storage
export const storage = new Storage(client)

export { ID } from 'appwrite';

