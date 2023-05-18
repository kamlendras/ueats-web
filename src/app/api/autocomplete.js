// located in <root>/pages/api/autocomplete.js
import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";

const connector = new ElasticsearchAPIConnector({
  host: "<elasticsearch host>",
  index: "<elasticsearch index>",
  apiKey: "<api key>" // optional
});

export default async function handler(req, res) {
  const { requestState, queryConfig } = req.body;
  const response = await connector.onAutocomplete(requestState, queryConfig);
  res.json(response);
}