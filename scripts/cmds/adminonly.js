const fs = require("fs-extra");
const { config } = global.GoatBot;
const { client } = global;

module.exports = {
	config: {
		name: "adminonly",
		aliases: ["adonly", "onlyad", "onlyadmin"],
		version: "1.5",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "báº­t/táº¯t cháº¿ Ä‘á»™ chá»‰ admin má»›i cÃ³ thá»ƒ sá»­ dá»¥ng bot",
			en: "turn on/off only admin can use bot"
		},
		category: "owner",
		guide: {
			vi: "   {pn} [on | off]: báº­t/táº¯t cháº¿ Ä‘á»™ chá»‰ admin má»›i cÃ³ thá»ƒ sá»­ dá»¥ng bot"
				+ "\n   {pn} noti [on | off]: báº­t/táº¯t thÃ´ng bÃ¡o khi ngÆ°á»i dÃ¹ng khÃ´ng pháº£i lÃ  admin sá»­ dá»¥ng bot",
			en: "   {pn} [on | off]: turn on/off the mode only admin can use bot"
				+ "\n   {pn} noti [on | off]: turn on/off the notification when user is not admin use bot"
		}
	},

	langs: {
		vi: {
			turnedOn: "ÄÃ£ báº­t cháº¿ Ä‘á»™ chá»‰ admin má»›i cÃ³ thá»ƒ sá»­ dá»¥ng bot",
			turnedOff: "ÄÃ£ táº¯t cháº¿ Ä‘á»™ chá»‰ admin má»›i cÃ³ thá»ƒ sá»­ dá»¥ng bot",
			turnedOnNoti: "ÄÃ£ báº­t thÃ´ng bÃ¡o khi ngÆ°á»i dÃ¹ng khÃ´ng pháº£i lÃ  admin sá»­ dá»¥ng bot",
			turnedOffNoti: "ÄÃ£ táº¯t thÃ´ng bÃ¡o khi ngÆ°á»i dÃ¹ng khÃ´ng pháº£i lÃ  admin sá»­ dá»¥ng bot"
		},
		en: {
			turnedOn: "Turned on the mode only admin can use bot",
			turnedOff: "Turned off the mode only admin can use bot",
			turnedOnNoti: "Turned on the notification when user is not admin use bot",
			turnedOffNoti: "Turned off the notification when user is not admin use bot"
		}
	},

	onStart: function ({ args, message, getLang }) {
		let isSetNoti = false;
		let value;
		let indexGetVal = 0;

		if (args[0] == "noti") {
			isSetNoti = true;
			indexGetVal = 1;
		}

		if (args[indexGetVal] == "on")
			value = true;
		else if (args[indexGetVal] == "off")
			value = false;
		else
			return message.SyntaxError();

		if (isSetNoti) {
			config.hideNotiMessage.adminOnly = !value;
			message.reply(getLang(value ? "turnedOnNoti" : "turnedOffNoti"));
		}
		else {
			config.adminOnly.enable = value;
			message.reply(getLang(value ? "turnedOn" : "turnedOff"));
		}

		fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
	}
};
