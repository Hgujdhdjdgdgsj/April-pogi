let fontEnabled = true;

function formatFont(text) {
	const fontMapping = {
		a: "ð–º", b: "ð–»", c: "ð–¼", d: "ð–½", e: "ð–¾", f: "ð–¿", g: "ð—€", h: "ð—", i: "ð—‚", j: "ð—ƒ", k: "ð—„", l: "ð—…", m: "ð—†",
		n: "ð—‡", o: "ð—ˆ", p: "ð—‰", q: "ð—Š", r: "ð—‹", s: "ð—Œ", t: "ð—", u: "ð—Ž", v: "ð—", w: "ð—", x: "ð—‘", y: "ð—’", z: "ð—“",
		A: "ð– ", B: "ð–¡", C: "ð–¢", D: "ð–£", E: "ð–¤", F: "ð–¥", G: "ð–¦", H: "ð–§", I: "ð–¨", J: "ð–©", K: "ð–ª", L: "ð–«", M: "ð–¬",
		N: "ð–­", O: "ð–®", P: "ð–¯", Q: "ð–°", R: "ð–±", S: "ð–²", T: "ð–³", U: "ð–´", V: "ð–µ", W: "ð–¶", X: "ð–·", Y: "ð–¸", Z: "ð–¹"
	};

	let formattedText = "";
	for (const char of text) {
		if (fontEnabled && char in fontMapping) {
			formattedText += fontMapping[char];
		} else {
			formattedText += char;
		}
	}

	return formattedText;
}

const os = require('os');
const fs = require('fs').promises;
const pidusage = require('pidusage');

async function getStartTimestamp() {
	try {
		const startTimeStr = await fs.readFile('time.txt', 'utf8');
		return parseInt(startTimeStr);
	} catch (error) {
		return Date.now();
	}
}

async function saveStartTimestamp(timestamp) {
	try {
		await fs.writeFile('time.txt', timestamp.toString());
	} catch (error) {
		console.error('Error saving start timestamp:', error);
	}
}

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

function getUptime(uptime) {
	const days = Math.floor(uptime / (3600 * 24));
	const hours = Math.floor((uptime % (3600 * 24)) / 3600);
	const mins = Math.floor((uptime % 3600) / 60);
	const seconds = Math.floor(uptime % 60);
	const months = Math.floor(days / 30);
		const remainingDays = days % 30;

	return `Uptime: ${months} month(s}, ${remainingDays} day(s), ${hours} hour(s), ${mins} minute(s), and ${seconds} second(s)`;
}

async function onStart({ api, event }) {
	const startTime = await getStartTimestamp();
	const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);

	const usage = await pidusage(process.pid);
	const osInfo = {
		platform: os.platform(),
		architecture: os.arch()
	};

	const timeStart = Date.now();
	const uptimeMessage = getUptime(uptimeSeconds);
	const uid = "100065005240232";
	const returnResult = `BOT has been working for ${uptimeMessage}\n\nâ– Cpu usage: ${usage.cpu.toFixed(1)}%\nâ– RAM usage: ${byte2mb(usage.memory)}\nâ– Cores: ${os.cpus().length}\nâ– Ping: ${Date.now() - timeStart}ms\nâ– Operating System Platform: ${osInfo.platform}\nâ– System CPU Architecture: ${osInfo.architecture}`;

	await saveStartTimestamp(startTime);
	return api.shareContact(formatFont(returnResult), uid, event.threadID);
}

module.exports = {
	config: {
		name: 'uptime',
		version: '2.1.0',
		author: "Cliff", // Do not change credits
		countDown: 5,
		role: 0,
		shortDescription: 'shows how long uptime',
		longDescription: {
			en: ''
		},
		category: 'system',
		guide: {
			en: '{p}uptime'
		}
	},
	byte2mb,
	getStartTimestamp,
	saveStartTimestamp,
	getUptime,
	onStart
};
