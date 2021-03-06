/* global exports */
const apiHost = `https://cloud.redhat.com`;
const frontendHost = (process.env.PLATFORM === 'linux') ? 'localhost' : 'host.docker.internal';
const chromeHost = 'https://ci.cloud.redhat.com';

exports.routes = {
    '/api/insights/v1/': { host: apiHost },
    '/apps/chrome': { host: chromeHost },
    '/apps/insights/': { host: `http://${frontendHost}:8002` },
    '/insights': { host: `http://${frontendHost}:8002` }
};
