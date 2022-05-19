module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  keys: [myKeyA, myKeyB],
});
