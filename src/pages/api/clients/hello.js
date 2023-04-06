// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "create by ": "ドリフト王",
    name: 'API test',
    method: req.method
  })
}
