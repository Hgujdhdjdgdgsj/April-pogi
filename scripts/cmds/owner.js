const axios = require("axios");

module.exports = {
  config: {
    name: "owner",
    aliases: ["owner"],
    shortDescription: {
      en: "owner details."
    },
    category: "owner",
    usage: "{p}market [itemID]",
    version: "1.5",
    role: 0,
    author: "April",
  },

module.exports.run = async ({ api, event }) => {
  try {
    const ownerInfo = {
      name: 'April M. Manalo',
      gender: 'Male',
      age: '15',
      height: '5'10',
      facebookLink: 'https://www.facebook.com/profile.php?id=100075247455712',
      status: 'In a relationship'
    };

    const videoUrl = 'https://drive.google.com/file/d/16MwwSknEOBRXm79clUOAMcPsxnEP45lb/view?usp=drivesdk'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
Owner Information:
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Age: ${ownerInfo.age}
Height: ${ownerInfo.height}
Facebook: ${ownerInfo.facebookLink}
Status: ${ownerInfo.status}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🫡', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
};
