/* Magic Mirror
 * Module: mkcpss
 * Magic Mirror显示中文的小学生数学知识点
 * By 胡迪
 */
const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
	start () {
	},
	async socketNotificationReceived (notification, payload) {
		if (notification === "getmkcpss_s") {
			const data = require("./data.json");
			this.sendSocketNotification("getmkcpss_r", data);
		}
	}
});

