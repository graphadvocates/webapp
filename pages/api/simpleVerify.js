export default function handler(req, res) {
  const { key } = req.body;
  const secretKey = process.env.WEB_RESOURCE_KEY_SPOTLIGHT;

  if (key === secretKey) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ error: 'Invalid key' });
  }
}
