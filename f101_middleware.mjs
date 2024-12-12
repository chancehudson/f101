export default (req, res) => {
  /// assign a mdn compliant URL object
  /// how we build it varies based on whether we're in NodeJS
  /// or a cloudflare datacenter
  req.url = new URL(
    process.env.WEBWORKER
      ? req.url
      : req.protocol + "://" + req.get("host") + req.originalUrl,
  );
};
