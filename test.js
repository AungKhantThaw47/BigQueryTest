  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function listDatasets() {
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    const projectId = "testingakt";

    // Lists all datasets in the specified project.
    // If projectId is not specified, this method will take
    // the projectId from the authenticated BigQuery Client.
    const [datasets] = await bigquery.getDatasets({projectId});
    console.log('Datasets:');
    datasets.forEach(dataset => console.log(dataset.id));
  }

  listDatasets()