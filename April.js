module.exports = {
    config: {
        name: "April",
        version: "1.0",
        author: "April Pogi",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        const lowerCaseBody = event.body.toLowerCase();
        if (lowerCaseBody.includes("Pogi") || lowerCaseBody.includes("jay d bohol") ||
lowerCaseBody.includes("bohol") ||
lowerCaseBody.includes("April Pogi")) {
            return message.reply(`busy pa master ko`);
        }
    }
};
