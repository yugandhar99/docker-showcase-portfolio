const normalizeUrl = (url, fallback) => {
  const value = url || fallback;
  return value.endsWith("/") ? value : `${value}/`;
};

const ServerUrl = {
  BASE_URL: normalizeUrl(process.env.REACT_APP_API_BASE_URL, "http://127.0.0.1:8000"),
  WS_BASE_URL: normalizeUrl(process.env.REACT_APP_WS_BASE_URL, "ws://127.0.0.1:8000"),
};

export default ServerUrl;
