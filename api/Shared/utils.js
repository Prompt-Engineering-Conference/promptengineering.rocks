const getClientPrincipal = (req) => {
  try {
    const header = req.headers['x-ms-client-principal'];
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');
    return JSON.parse(decoded);
  } catch (error) {
    return {};
  }
};

const getOperationIdOverride = (context) => {
  return {
    'ai.operation.id': context.traceContext.traceparent,
  };
};

const getEndpointHash = (s) => {
  // https://stackoverflow.com/a/33647870/1310228
  var hash = 0,
    i = 0,
    len = s.length;
  while (i < len) {
    hash = ((hash << 5) - hash + s.charCodeAt(i++)) << 0;
  }
  return (hash + 2147483647 + 1).toString(16);
};

const defaultNotification = {
  title: 'Notification Title',
  actions: [
    {
      action: 'open_url',
      title: 'Open URL',
    },
  ],
  body: 'Test notification body',
  dir: 'auto',
  lang: 'en-US',
  renotify: 'true',
  requireInteraction: 'true',
  tag: 'tag',
  vibrate: [300, 100, 400],
};

module.exports = {
  getClientPrincipal,
  getOperationIdOverride,
  getEndpointHash,
  defaultNotification,
};
