import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

async function getYouTube() {

    try {
        const url = await fetch('https://www.youtube.com/');
        const body = await url.text();
        const $ = cheerio.load(body)

        const item = $('#contents')

        let scraped = $(item).find('#video-title-link').text();

        console.log(scraped)

    } catch (error) {
        console.log(error);
    }
                                                            
    }
    
    getYouTube();