const axios = require('axios');

module.exports = {
  config: {
    name: "sim",
    version: 2.0,
    author: "ArYAN",
    longDescription: {
      en: "FunChat with SimiSimi",
    },
    category: "simisimi",
    guide: {
      en: "{p}sim [ chat ]",
    },
  },
  t: async function (a) {
    try {
      const response = await axios.get(`https://global-sprak.onrender.com/api/sim?chat=${a}&lang=en`);
      return response.data.chat;
    } catch (error) {
      throw error;
    }
  },
  handleCommand: async function ({ message, event, args, api }) {
    try {
      const a = encodeURIComponent(args.join(" "));
      const result = await this.t(a);

      message.reply({
        body: `\n\n${result}`,
      }, (err, info) => {
        api.onReply.set(info.messageID, {
          commandName: this.config.name,
          messageID: info.messageID,
          author: event.senderID
        });
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  },
  onStart: function (params) {
    return this.handleCommand(params);
  },
  onReply: function (params) {
    return this.handleCommand(params);
  },
};
