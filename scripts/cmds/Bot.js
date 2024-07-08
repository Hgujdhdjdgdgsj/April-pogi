module.exports = {
    config: {
        name: "bot",
        version: "1.0",
        author: "April Pogi",
        countDown: 5,
        role: 0,
        shortDescription: "bot response",
        longDescription: "kapag nag send ka Ng word na bot mag re reply ",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        const lowerCaseBody = event.body.toLowerCase();
        if (lowerCaseBody.includes("Pogi") || lowerCaseBody.includes("April Pogi") ||
lowerCaseBody.includes("Pogi") ||
lowerCaseBody.includes("April Pogi")) {
            return message.reply(`busy pa master ko`);
        }
    }
};
