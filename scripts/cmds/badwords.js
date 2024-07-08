module.exports = {
	config: {
		name: "badwords",
		aliases: ["badword"],
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		description: {
			vi: "Báº­t/táº¯t/thÃªm/xÃ³a cáº£nh bÃ¡o vi pháº¡m tá»« thÃ´ tá»¥c, náº¿u thÃ nh viÃªn vi pháº¡m sáº½ bá»‹ cáº£nh bÃ¡o, láº§n 2 sáº½ kick khá»i box chat",
			en: "Turn on/off/add/remove bad words warning, if a member violates, he will be warned, the second time he will be kicked out of the chat box"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} add <words>: thÃªm tá»« cáº¥m (cÃ³ thá»ƒ thÃªm nhiá»u tá»« cÃ¡ch nhau báº±ng dáº¥u pháº©y \",\" hoáº·c dáº¥u gáº¡ch Ä‘á»©ng \"|\""
				+ "\n   {pn} delete <words>: xÃ³a tá»« cáº¥m (cÃ³ thá»ƒ xÃ³a nhiá»u tá»« cÃ¡ch nhau báº±ng dáº¥u pháº©y \",\" hoáº·c dáº¥u gáº¡ch Ä‘á»©ng \"|\""
				+ "\n   {pn} list <hide | Ä‘á»ƒ trá»‘ng>: táº¯t cáº£nh bÃ¡o (thÃªm \"hide\" Ä‘á»ƒ áº©n tá»« cáº¥m)"
				+ "\n   {pn} unwarn [<userID> | <@tag>]: xÃ³a 1 láº§n cáº£nh bÃ¡o cá»§a 1 thÃ nh viÃªn"
				+ "\n   {pn} on: táº¯t cáº£nh bÃ¡o"
				+ "\n   {pn} off: báº­t cáº£nh bÃ¡o",
			en: "   {pn} add <words>: add banned words (you can add multiple words separated by commas \",\" or vertical bars \"|\")"
				+ "\n   {pn} delete <words>: delete banned words (you can delete multiple words separated by commas \",\" or vertical bars \"|\")"
				+ "\n   {pn} list <hide | leave blank>: turn off warning (add \"hide\" to hide banned words)"
				+ "\n   {pn} unwarn [<userID> | <@tag>]: remove 1 warning of 1 member"
				+ "\n   {pn} on: turn off warning"
				+ "\n   {pn} off: turn on warning"
		}
	},

	langs: {
		vi: {
			onText: "báº­t",
			offText: "táº¯t",
			onlyAdmin: "âš ï¸ | Chá»‰ quáº£n trá»‹ viÃªn má»›i cÃ³ thá»ƒ thÃªm tá»« cáº¥m vÃ o danh sÃ¡ch",
			missingWords: "âš ï¸ | Báº¡n chÆ°a nháº­p tá»« cáº§n cáº¥m",
			addedSuccess: "âœ… | ÄÃ£ thÃªm %1 tá»« cáº¥m vÃ o danh sÃ¡ch",
			alreadyExist: "âŒ | %1 tá»« cáº¥m Ä‘Ã£ tá»“n táº¡i trong danh sÃ¡ch tá»« trÆ°á»›c: %2",
			tooShort: "âš ï¸ | %1 tá»« cáº¥m khÃ´ng thá»ƒ thÃªm vÃ o danh sÃ¡ch do cÃ³ Ä‘á»™ dÃ i nhá» hÆ¡n 2 kÃ½ tá»±: %2",
			onlyAdmin2: "âš ï¸ | Chá»‰ quáº£n trá»‹ viÃªn má»›i cÃ³ thá»ƒ xÃ³a tá»« cáº¥m khá»i danh sÃ¡ch",
			missingWords2: "âš ï¸ | Báº¡n chÆ°a nháº­p tá»« cáº§n xÃ³a",
			deletedSuccess: "âœ… | ÄÃ£ xÃ³a %1 tá»« cáº¥m khá»i danh sÃ¡ch",
			notExist: "âŒ | %1 tá»« cáº¥m khÃ´ng tá»“n táº¡i trong danh sÃ¡ch tá»« trÆ°á»›c: %2",
			emptyList: "âš ï¸ | Danh sÃ¡ch tá»« cáº¥m trong nhÃ³m báº¡n hiá»‡n Ä‘ang trá»‘ng",
			badWordsList: "ðŸ“‘ | Danh sÃ¡ch tá»« cáº¥m trong nhÃ³m báº¡n: %1",
			onlyAdmin3: "âš ï¸ | Chá»‰ quáº£n trá»‹ viÃªn má»›i cÃ³ thá»ƒ %1 tÃ­nh nÄƒng nÃ y",
			turnedOnOrOff: "âœ… | Cáº£nh bÃ¡o vi pháº¡m tá»« cáº¥m Ä‘Ã£ %1",
			onlyAdmin4: "âš ï¸ | Chá»‰ quáº£n trá»‹ viÃªn má»›i cÃ³ thá»ƒ xÃ³a cáº£nh bÃ¡o vi pháº¡m tá»« cáº¥m",
			missingTarget: "âš ï¸ | Báº¡n chÆ°a nháº­p ID ngÆ°á»i dÃ¹ng hoáº·c tag ngÆ°á»i dÃ¹ng",
			notWarned: "âš ï¸ | NgÆ°á»i dÃ¹ng %1 chÆ°a bá»‹ cáº£nh bÃ¡o vi pháº¡m tá»« cáº¥m",
			removedWarn: "âœ… | NgÆ°á»i dÃ¹ng %1 | %2 Ä‘Ã£ Ä‘Æ°á»£c xÃ³a bá» 1 láº§n cáº£nh bÃ¡o vi pháº¡m tá»« cáº¥m",
			warned: "âš ï¸ | Tá»« cáº¥m \"%1\" Ä‘Ã£ Ä‘Æ°á»£c phÃ¡t hiá»‡n trong tin nháº¯n cá»§a báº¡n, náº¿u tiáº¿p tá»¥c vi pháº¡m báº¡n sáº½ bá»‹ kick khá»i nhÃ³m.",
			warned2: "âš ï¸ | Tá»« cáº¥m \"%1\" Ä‘Ã£ Ä‘Æ°á»£c phÃ¡t hiá»‡n trong tin nháº¯n cá»§a báº¡n, báº¡n Ä‘Ã£ vi pháº¡m 2 láº§n vÃ  sáº½ bá»‹ kick khá»i nhÃ³m.",
			needAdmin: "Bot cáº§n quyá»n quáº£n trá»‹ viÃªn Ä‘á»ƒ kick thÃ nh viÃªn bá»‹ ban",
			unwarned: "âœ… | ÄÃ£ xÃ³a bá» cáº£nh bÃ¡o vi pháº¡m tá»« cáº¥m cá»§a ngÆ°á»i dÃ¹ng %1 | %2"
		},
		en: {
			onText: "on",
			offText: "off",
			onlyAdmin: "âš ï¸ | Only admins can add banned words to the list",
			missingWords: "âš ï¸ | You haven't entered the banned words",
			addedSuccess: "âœ… | Added %1 banned words to the list",
			alreadyExist: "âŒ | %1 banned words already exist in the list before: %2",
			tooShort: "âš ï¸ | %1 banned words cannot be added to the list because they are shorter than 2 characters: %2",
			onlyAdmin2: "âš ï¸ | Only admins can delete banned words from the list",
			missingWords2: "âš ï¸ | You haven't entered the words to delete",
			deletedSuccess: "âœ… | Deleted %1 banned words from the list",
			notExist: "âŒ | %1 banned words do not exist in the list before: %2",
			emptyList: "âš ï¸ | The list of banned words in your group is currently empty",
			badWordsList: "ðŸ“‘ | The list of banned words in your group: %1",
			onlyAdmin3: "âš ï¸ | Only admins can %1 this feature",
			turnedOnOrOff: "âœ… | Banned words warning has been %1",
			onlyAdmin4: "âš ï¸ | Only admins can delete banned words warning",
			missingTarget: "âš ï¸ | You haven't entered user ID or tagged user",
			notWarned: "âš ï¸ | User %1 has not been warned for banned words",
			removedWarn: "âœ… | User %1 | %2 has been removed 1 banned words warning",
			warned: "âš ï¸ | Banned words \"%1\" have been detected in your message, if you continue to violate you will be kicked from the group.",
			warned2: "âš ï¸ | Banned words \"%1\" have been detected in your message, you have violated 2 times and will be kicked from the group.",
			needAdmin: "Bot needs admin privileges to kick banned members",
			unwarned: "âœ… | Removed banned words warning of user %1 | %2"
		}
	},

	onStart: async function ({ message, event, args, threadsData, usersData, role, getLang }) {
		if (!await threadsData.get(event.threadID, "data.badWords"))
			await threadsData.set(event.threadID, {
				words: [],
				violationUsers: {}
			}, "data.badWords");

		const badWords = await threadsData.get(event.threadID, "data.badWords.words", []);

		switch (args[0]) {
			case "add": {
				if (role < 1)
					return message.reply(getLang("onlyAdmin"));
				const words = args.slice(1).join(" ").split(/[,|]/);
				if (words.length === 0)
					return message.reply(getLang("missingWords"));
				const badWordsExist = [];
				const success = [];
				const failed = [];
				for (const word of words) {
					const oldIndex = badWords.indexOf(word);
					if (oldIndex === -1) {
						badWords.push(word);
						success.push(word);
					}
					else if (oldIndex > -1) {
						badWordsExist.push(word);
					}
					else
						failed.push(word);
				}
				await threadsData.set(event.threadID, badWords, "data.badWords.words");
				message.reply(
					success.length > 0 ? getLang("addedSuccess", success.length) : ""
						+ (badWordsExist.length > 0 ? getLang("alreadyExist", badWordsExist.length, badWordsExist.map(word => hideWord(word)).join(", ")) : "")
						+ (failed.length > 0 ? getLang("tooShort", failed.length, failed.join(", ")) : "")
				);
				break;
			}
			case "delete":
			case "del":
			case "-d": {
				if (role < 1)
					return message.reply(getLang("onlyAdmin2"));
				const words = args.slice(1).join(" ").split(/[,|]/);
				if (words.length === 0)
					return message.reply(getLang("missingWords2"));
				const success = [];
				const failed = [];
				for (const word of words) {
					const oldIndex = badWords.indexOf(word);
					if (oldIndex > -1) {
						badWords.splice(oldIndex, 1);
						success.push(word);
					}
					else
						failed.push(word);
				}
				await threadsData.set(event.threadID, badWords, "data.badWords.words");
				message.reply(
					(success.length > 0 ? getLang("deletedSuccess", success.length) : "")
					+ (failed.length > 0 ? getLang("notExist", failed.length, failed.join(", ")) : "")
				);
				break;
			}
			case "list":
			case "all":
			case "-a": {
				if (badWords.length === 0)
					return message.reply(getLang("emptyList"));
				message.reply(getLang("badWordsList", args[1] === "hide" ? badWords.map(word => hideWord(word)).join(", ") : badWords.join(", ")));
				break;
			}
			case "on": {
				if (role < 1)
					return message.reply(getLang("onlyAdmin3", getLang("onText")));
				await threadsData.set(event.threadID, true, "settings.badWords");
				message.reply(getLang("turnedOnOrOff", getLang("onText")));
				break;
			}
			case "off": {
				if (role < 1)
					return message.reply(getLang("onlyAdmin3", getLang("offText")));
				await threadsData.set(event.threadID, false, "settings.badWords");
				message.reply(getLang("turnedOnOrOff", getLang("offText")));
				break;
			}
			case "unwarn": {
				if (role < 1)
					return message.reply(getLang("onlyAdmin4"));
				let userID;
				if (Object.keys(event.mentions)[0])
					userID = Object.keys(event.mentions)[0];
				else if (args[1])
					userID = args[1];
				else if (event.messageReply)
					userID = event.messageReply.senderID;
				if (isNaN(userID))
					return message.reply(getLang("missingTarget"));
				const violationUsers = await threadsData.get(event.threadID, "data.badWords.violationUsers", {});
				if (!violationUsers[userID])
					return message.reply(getLang("notWarned", userID));
				violationUsers[userID]--;
				await threadsData.set(event.threadID, violationUsers, "data.badWords.violationUsers");
				const userName = await usersData.getName(userID);
				message.reply(getLang("unwarned", userID, userName));
			}
		}
	},

	onChat: async function ({ message, event, api, threadsData, prefix, getLang }) {
		if (!event.body)
			return;
		const threadData = global.db.allThreadData.find(t => t.threadID === event.threadID) || await threadsData.create(event.threadID);
		const isEnabled = threadData.settings.badWords;
		if (!isEnabled)
			return;
		const allAliases = [...(global.GoatBot.commands.get("badwords").config.aliases || []), ...(threadData.data.aliases?.["badwords"] || [])];
		const isCommand = allAliases.some(a => event.body.startsWith(prefix + a));
		if (isCommand)
			return;
		const badWordList = threadData.data.badWords?.words;
		if (!badWordList || badWordList.length === 0)
			return;
		const violationUsers = threadData.data.badWords?.violationUsers || {};

		for (const word of badWordList) {
			if (event.body.match(new RegExp(`\\b${word}\\b`, "gi"))) {
				if ((violationUsers[event.senderID] || 0) < 1) {
					message.reply(getLang("warned", word));
					violationUsers[event.senderID] = violationUsers[event.senderID] ? violationUsers[event.senderID] + 1 : 1;
					await threadsData.set(event.threadID, violationUsers, "data.badWords.violationUsers");
					return;
				}
				else {
					await message.reply(getLang("warned2", word));
					api.removeUserFromGroup(event.senderID, event.threadID, (err) => {
						if (err)
							return message.reply(getLang("needAdmin"), (e, info) => {
								let { onEvent } = global.GoatBot;
								onEvent.push({
									messageID: info.messageID,
									onStart: ({ event }) => {
										if (event.logMessageType === "log:thread-admins" && event.logMessageData.ADMIN_EVENT == "add_admin") {
											const { TARGET_ID } = event.logMessageData;
											if (TARGET_ID == api.getCurrentUserID())
												api.removeUserFromGroup(event.senderID, event.threadID, () => onEvent = onEvent.filter(item => item.messageID != info.messageID));
										}
									}
								});
							});
					});
				}
			}
		}
	}
};


function hideWord(str) {
	return str.length == 2 ?
		str[0] + "*" :
		str[0] + "*".repeat(str.length - 2) + str[str.length - 1];
      }
