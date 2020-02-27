const axios = require('axios');

const { getStackOutputs } = require('../utils/cloudformation');
const { STACK_NAME } = process.env;

test('Accessing API endpoint should succeed', async () => {
    const { ApiEndpoint: apiEndpoint } = await getStackOutputs(STACK_NAME);
    const { data, status } = await axios.get(`${apiEndpoint}/greetings`);
    expect(status).toBe(200);
    expect(data.hamburg).toBeDefined();
    expect(data.de).toBeDefined();
    expect(data.en).toBeDefined();
});
