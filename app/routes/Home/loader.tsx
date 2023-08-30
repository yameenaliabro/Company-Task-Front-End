import { type LoaderFunction, json } from "@remix-run/node";
export let loader: LoaderFunction = async () => {
    const BASE_URL = process.env.Base_URL;
    return json({ BASE_URL });
};

