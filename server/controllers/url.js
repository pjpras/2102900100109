const URL = require("../models/user");
const ShortUniqueId = require("short-unique-id");

const uid = new ShortUniqueId({ length: 8 });

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortID = uid.rnd();
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitedHistory: [],
  });

  return res.json({ id: shortID });
}

async function handleUpdateAndRedirect(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: {
          timestamp: Date.now(),
        },
      },
    }
  )

  res.redirect(entry.redirectUrl);
}

async function handleAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    const obj = {
        'Total Clicks' : result.visitedHistory.length,
        Analytics: result.visitedHistory
    }
    res.json(obj);
}

module.exports = {
  handleGenerateNewShortUrl,
  handleUpdateAndRedirect,
  handleAnalytics
};
