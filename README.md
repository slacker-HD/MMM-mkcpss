# MMM-mkcpss

中文的小学生数学知识点。


## 预览
![MMM-mkcpss](screenshot.png)

## 安装
运行以下命令：

```shell
cd modules
git clone https://github.com/slacker-HD/MMM-mkcpss.git
```
## 使用
在 `config/config.js` 文件中添加如下内容：
```js
var config = {
    modules: [
        {
			module: "MMM-mkcpss",
			position: "upper_third",
			config: {
				updateInterval: 30, //以秒为单位更新内容
			},
		},
    ]
}
```