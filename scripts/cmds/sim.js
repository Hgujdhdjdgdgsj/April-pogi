const axios = require("axios");

module.exports = {
  config: {
    name: 'sim',
    aliases: ['simsimi'],
    version: '1.0',
    author: 'Eugene Aguilar',
    countDown: 3,
    role: 0,
    shortDescription: 'Chat with Simini',
    longDescription: 'sim your message',
    category: 'fun',
    guide: '{pn}',
  },

onStart: async function ({ api, event, args, reply }) {
  try {
	 let message = args.join(" ");
	 if (!message) {
		return api.sendMessage(`please put a message`, event.threadID, event.messageID);
	 }

	 const response = await axios.get(`https://simsimi.diciper09.repl.co/sim?ask=${message}`);
	 const respond = response.data.respond;
	 api.sendMessage(respond, event.threadID, event.messageID);
  } catch (error) {
	 console.error("An error occurred:", error);
	 api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
  }
  }
};
