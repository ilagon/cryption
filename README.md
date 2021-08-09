# Notion Update Scheduler

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
- A notion database similar to [this](https://lorenzo-adco.notion.site/a66abb2318a546bd93f20de20c2298f4?v=976b04b7193642559f8767cdaf632105) (Only Active Track, ID and Price properties are actually required)

- Your own notion API key and database keys. Check [here](https://developers.notion.com/docs/getting-started) for instructions on getting your own keys

## Usage:
- To manually trigger crypto price updates, simply hit up '/notion/crypto' endpoint.

## Coming Soon:
- Stock database auto update API
- Automatic scheduled triggers of APIs