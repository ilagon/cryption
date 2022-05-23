# Cryption

A Standalone Express Application that queries current market prices of crypto and stocks from external APIs at certain intervals.

Queried prices are then used to update custom notion pages to reflect updated prices using the NotionAPI.

## Tech Stack:
- NodeJS
- Express
- NotionAPI

## APIs:
- [CoinGecko](https://www.coingecko.com/en/api)
- [FinnHub](https://finnhub.io/docs/api)
- [NotionAPI](https://developers.notion.com)

## Setup requirements:
- A notion database with minimally [these](https://lorenzo-adco.notion.site/a66abb2318a546bd93f20de20c2298f4?v=976b04b7193642559f8767cdaf632105) columns for crypto

- A notion database with minimally [these](https://lorenzo-adco.notion.site/5985efa693a44833b09a08d0fec30fc2?v=ced3a3efaafc4a63ab2a0505d44747bc) columns for stocks

- Your own notion API key and database keys. Check [here](https://developers.notion.com/docs/getting-started) for instructions on getting your own keys

## Usage:
- To manually trigger crypto price updates, simply hit up '/notion/crypto' endpoint.
- To manually trigger crypto price updates, simply hit up '/notion/crypto' endpoint.

## Coming Soon:
- Stock database auto update API
- Automatic scheduled triggers of APIs

### Dev Notes:
*I figured that creating an automatic scheduler would require me to deploy somewhere that will allow the app to run 24/7. Now this requirement isn't exactly available for free and I am currently not willing to pay for that feature on any platform.*

*I will continue developing the scheduler portion but the current implementation would be deployed to heroku and use Windows Task Scheduler to trigger a curl script (Included in the util folder) every week to hit the API.*
