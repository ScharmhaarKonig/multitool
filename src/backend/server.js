const express = require('express');
const app = express();
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');

app.use(express.json());

app.post('/convert', async (req, res) => {
  const { inputLink, conversionType } = req.body;

  if (!inputLink || !conversionType) {
    return res.status(400).json({ message: 'Please provide a valid YouTube link and conversion type.' });
  }

  try {
    const video = ytdl(inputLink);

    if (conversionType === 'mp3') {
      res.header('Content-Disposition', `attachment; filename="converted_file.mp3"`);
      ffmpeg(video)
        .toFormat('mp3')
        .pipe(res, { end: true });
    } else if (conversionType === 'mp4') {
      res.header('Content-Disposition', `attachment; filename="converted_file.mp4"`);
      ffmpeg(video)
        .toFormat('mp4')
        .pipe(res, { end: true });
    } else {
      return res.status(400).json({ message: 'Invalid conversion type. Please choose mp3 or mp4.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred during the conversion process.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});