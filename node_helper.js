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

