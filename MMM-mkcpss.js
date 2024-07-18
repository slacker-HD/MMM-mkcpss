/* Magic Mirror
 * Module: mkcpss
 * Magic Mirror显示中文的小学生数学知识点
 * By 胡迪
 */
Module.register("MMM-mkcpss", {
	// Default module config.
	defaults: {
		updateInterval: 30, //数据更新显示间隔，单位为秒
		animationSpeed: 1 //动画显示间隔，单位为秒
	},
	start () {
		Log.info(`Starting module: ${this.name}`);
		this.sendSocketNotification("getmkcpss_s", null);

		this.getData(this.config.updateInterval * 1000);
	},
	getRandomInt (N) {
		return Math.floor(Math.random() * (N + 1));
	},
	getDom () {
		if (!this.HistoryData) {
			const wrapper = document.createElement("div");
			const loading = document.createElement("div");
			loading.className = "title bright medium normal";
			loading.innerHTML = "数据获取中...";
			wrapper.appendChild(loading);
			this.sendSocketNotification("getmkcpss_s", null);
			return wrapper;
		}

		const wrapper = document.createElement("div");
		const titleWrapper = document.createElement("div");
		const contentWrapper = document.createElement("div");
		const index = this.getRandomInt(this.HistoryData.length);
		wrapper.className = "container";

		titleWrapper.className = "title bright medium normal";
		contentWrapper.className = "title bright medium light";

		titleWrapper.innerHTML = this.HistoryData[index].title;
		contentWrapper.innerHTML = this.HistoryData[index].content;

		wrapper.appendChild(titleWrapper);
		wrapper.appendChild(contentWrapper);
		return wrapper;
	},
	getData (specifiedDelay) {
		this.sendSocketNotification("getmkcpss_s", null);
		var self = this;
		setInterval(function () {
			self.updateDom(self.config.animationSpeed * 1000);
		}, specifiedDelay);
	},

	socketNotificationReceived (notification, data) {
		Log.info("data");
		if (notification === "getmkcpss_r") {
			Log.info("获取数学数据。");
			this.HistoryData = data;
			this.updateDom(this.config.animationSpeed * 1000);
		}
	}
});
