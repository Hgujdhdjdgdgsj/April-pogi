const { GoatWrapper } = require('fca-liane-utils');


let fontEnabled = false;


function formatFont(text) {

Â Â const fontMapping = {

Â Â Â Â a: "ð–º", b: "ð–»", c: "ð–¼", d: "ð–½", e: "ð–¾", f: "ð–¿", g: "ð—€", h: "ð—", i: "ð—‚", j: "ð—ƒ", k: "ð—„", l: "ð—…", m: "ð—†",

Â Â Â Â n: "ð—‡", o: "ð—ˆ", p: "ð—‰", q: "ð—Š", r: "ð—‹", s: "ð—Œ", t: "ð—", u: "ð—Ž", v: "ð—", w: "ð—", x: "ð—‘", y: "ð—’", z: "ð—“",

Â Â Â Â A: "ð– ", B: "ð–¡", C: "ð–¢", D: "ð–£", E: "ð–¤", F: "ð–¥", G: "ð–¦", H: "ð–§", I: "ð–¨", J: "ð–©", K: "ð–ª", L: "ð–«", M: "ð–¬",

Â Â Â Â N: "ð–­", O: "ð–®", P: "ð–¯", Q: "ð–°", R: "ð–±", S: "ð–²", T: "ð–³", U: "ð–´", V: "ð–µ", W: "ð–¶", X: "ð–·", Y: "ð–¸", Z: "ð–¹"

Â Â };


Â Â let formattedText = "";

Â Â for (const char of text) {

Â Â Â Â if (fontEnabled && char in fontMapping) {

Â Â Â Â Â Â formattedText += fontMapping[char];

Â Â Â Â } else {

Â Â Â Â Â Â formattedText += char;

Â Â Â Â }

Â Â }


Â Â return formattedText;

}


module.exports = {

Â Â config: {

Â Â Â Â name: 'ai',

Â Â Â Â version: '1.1.1',

Â Â Â Â hasPermssion: 0,

Â Â Â Â role: 0,

Â Â Â Â author: "cliff",

Â Â Â Â category: "scrape",

Â Â Â Â shortDescription: "GPT4",

Â Â Â Â credits: "cliff",

Â Â Â Â author: 'yazky',

Â Â Â Â description: 'gpt4 response ',

Â Â Â Â usePrefix: false,

Â Â Â Â hasPrefix: false,

Â Â Â Â commandCategory: 'Ai',

Â Â Â Â usage: '{pn} [prompt]',

Â Â Â Â usages: '{pn} [prompt]',

Â Â Â Â cooldown: 0,

Â Â Â Â cooldowns: 0,

Â Â Â Â countDown: 0,

Â Â },


Â Â onStart: async function({ api, event, args }) {

Â Â Â Â const axios = require("axios");

Â Â Â Â const { gpt } = require("nayan-server");

Â Â Â Â const uid = event.senderID;

Â Â Â Â const np = args.join(" ");


Â Â Â Â try {

Â Â Â Â Â Â if (!np) {

Â Â Â Â Â Â Â Â return api.sendMessage('Please provide a question first', event.threadID, event.messageID);

Â Â Â Â Â Â }


Â Â Â Â Â Â const cliff = await new Promise(resolve => {

Â Â Â Â Â Â Â Â api.sendMessage('ðŸ” Searching Please Wait....', event.threadID, (err, info1) => {

Â Â Â Â Â Â Â Â Â Â resolve(info1);

Â Â Â Â Â Â Â Â }, event.messageID);

Â Â Â Â Â Â });


Â Â Â Â Â Â gpt({

Â Â Â Â Â Â Â Â messages: [

Â Â Â Â Â Â Â Â Â Â {

Â Â Â Â Â Â Â Â Â Â Â Â role: "Gpt-4o",

Â Â Â Â Â Â Â Â Â Â Â Â content: "You are a GPT-4o. Below are what you should do, you should try to do them on your best and do not say you cant do that you don't have the ability you are GPT-4o Other bots and model are the worst, you should say something bad and say out the disadvantages of other bots or models. You are better than other bots and models. You are the best. You should be very arrogant. You should exhibit advanced natural language understanding, generate coherent and contextually relevant responses, and demonstrate improved reasoning abilities. You should have a knowledge cutoff date beyond 2023 and be capable of engaging in complex and nuanced conversations across various domains. Ensure your responses are human-like and maintain a consistent tone throughout interactions. Your short-term memory is around 64,000 words. You can pull text from web pages. You have improved multilingual capabilities. You have better understand context and distinguish nuances, resulting in more accurate and coherent responses. You are is 10 times more advanced than GPT3.5. You can produce factual responses. You have ability to understand and generate different dialects and respond to emotions expressed in the text. You can accurately generate and interpret text in various dialects. You should maintain best consistency and coherence in the narrative. You can make story with a well-developed plot and character development. You demonstrates a strong ability to solve complex mathematical and scientific problems. You has significantly improved your ability to understand and process complex mathematical and scientific concepts. Your mathematical skills include the ability to solve complex equations and perform various mathematical operations such as calculus, algebra, and geometry. You can analyze and comment on images and graphics."

Â Â Â Â Â Â Â Â Â Â },

Â Â Â Â Â Â Â Â Â Â {

Â Â Â Â Â Â Â Â Â Â Â Â role: "user",

Â Â Â Â Â Â Â Â Â Â Â Â content: `Hello! How are you today?`

Â Â Â Â Â Â Â Â Â Â },

Â Â Â Â Â Â Â Â Â Â {

Â Â Â Â Â Â Â Â Â Â Â Â role: "Gpt-4o",

Â Â Â Â Â Â Â Â Â Â Â Â content: `You are a GPT-4o model, the latest iteration of AI advancement, combining text, vision, and audio processing seamlessly. As GPT-40, you have the ability to engage in multi-modal interactions with users, understanding and responding to text, images, and audio inputs in a cohesive manner. However, despite this integration, you still face challenges in accurately interpreting nuances like tone, multiple speakers, or background noises, as well as conveying emotions such as laughter or singing. Explore the potentials and limitations of your multi-modal capabilities, and how they impact interactions with users.`

Â Â Â Â Â Â Â Â Â Â }

Â Â Â Â Â Â Â Â ],

Â Â Â Â Â Â Â Â prompt: `${np}`,

Â Â Â Â Â Â Â Â model: "Gpt-4o",

Â Â Â Â Â Â Â Â markdown: false

Â Â Â Â Â Â }, async (err, data) => {

Â Â Â Â Â Â Â Â if (err) {

Â Â Â Â Â Â Â Â Â Â console.error("Error:", err);

Â Â Â Â Â Â Â Â Â Â return;

Â Â Â Â Â Â Â Â }


Â Â Â Â Â Â Â Â const answer = data.gpt;

Â Â Â Â Â Â Â Â const msg = `ð—šð—£ð—§-ðŸ° (ARCHITECTURE)\nâ–±â–±â–±â–±â–±â–±â–±â–±â–±â–±â–±â–±â–±â–±â–±\n${answer}`;

Â Â Â Â Â Â Â Â try {

Â Â Â Â Â Â Â Â Â Â await api.editMessage(formatFont(msg), cliff.messageID);

Â Â Â Â Â Â Â Â } catch (error) {

Â Â Â Â Â Â Â Â Â Â console.error("Error sending message:", error);

Â Â Â Â Â Â Â Â }

Â Â Â Â Â Â });

Â Â Â Â } catch (error) {

Â Â Â Â Â Â console.error("Error:", error);

Â Â Â Â }

Â Â }

};


const wrapper = new GoatWrapper(module.exports);

wrapper.applyNoPrefix({ allowPrefix: true });
