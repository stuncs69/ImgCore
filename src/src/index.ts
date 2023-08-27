(async () => {
    try {
        await main()
    } catch (error) {
        console.error(error)
    }
})()

import express from "express";
import { renderToString } from 'vue/server-renderer';
import ViteExpress from "vite-express";

async function main() {
    
    const app = express()

    

}
