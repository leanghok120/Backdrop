import { Client, Storage } from "appwrite";

const client = new Client();
client.setProject(import.meta.env.VITE_PROJECT_ID);

const storage = new Storage(client);

export { client, storage };
