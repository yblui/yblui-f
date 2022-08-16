var sin, mns = 0, tfd = 0, tfb = 0, str = "", num = 1, std = false, bfs = false, sdb = [], mbs = 0, czs = '', val, nwo = 0, ifmy = 0, mi = 7;
var counting = {
	'1分钟': 0,
	'3分钟': 0,
	'5分钟': 0,
	'10分钟': 0
};
var jso = {
	'1分钟': 60000,
	'3分钟': 180000,
	'5分钟': 300000,
	'10分钟': 600000
};
var ysj = {
	'1分钟': 60000,
	'3分钟': 180000,
	'5分钟': 300000,
	'10分钟': 600000
};
var tui = {
	"早上好": 3600001
}
var tda = [0, 300000, 600000, 1200000, 1800000, 3600000];
var cities = [
	"北京，中国", "成都，中国", "大理，中国", "大连，中国", "广州，中国", "哈尔滨，中国", "杭州，中国", "拉萨，中国", "南京，中国", "青岛，中国", "厦门，中国", "上海，中国",
	"深圳，中国", "沈阳，中国", "苏州，中国", "阿尔伯克基，新墨西哥州，美国", "阿卡迪亚，加利福尼亚州，美国", "阿克伦，俄亥俄州，美国", "阿灵顿，弗吉尼亚州，美国",
	"阿伦敦，宾夕法尼亚州，美国", "阿马里洛，得克萨斯州，美国", "阿纳海姆，加利福尼亚州，美国", "阿普尔顿，威斯康星州，美国", "埃尔帕索，得克萨斯州，美国", "伯明翰，英格兰",
	"布拉德福，英格兰", "布赖顿，英格兰", "布里斯托尔，英格兰", "多佛尔，英格兰", "赫尔，英格兰", "剑桥，英格兰", "考文垂，英格兰", "利物浦，英格兰", "利兹，英格兰",
	"伦敦，英格兰", "曼彻斯特，英格兰", "罗德城，英属维尔京群岛", "南安普敦，英国", "牛津，英格兰", "阿纳德尔，俄罗斯", "鄂木斯克，俄罗斯", "伏尔加格勒，俄罗斯", "海参崴，俄罗斯",
	"加里宁格勒，俄罗斯", "堪察加彼得罗巴甫洛夫斯克，俄罗斯", "克拉斯诺雅思克，俄罗斯", "马加丹，俄罗斯", "摩尔曼斯克，俄罗斯", "莫斯科，俄罗斯", "乔库尔达赫，俄罗斯",
	"萨马拉，俄罗斯", "圣彼得堡，俄罗斯", "乌法，俄罗斯", "下诺夫哥罗德，俄罗斯", "乌兰巴托，蒙古", "阿格拉，印度", "艾哈迈达巴德，印度", "班加罗尔，印度", "果阿，印度",
	"海德拉巴，印度", "加尔各答，印度", "孟买，印度", "浦那，印度", "钦奈，印度", "瓦腊纳西，印度", "平壤，朝鲜", "阿拉木图，哈萨克斯坦", "阿斯塔纳，哈萨克斯坦", "彬马那，缅甸",
	"曼德勒，缅甸", "奈比多，缅甸", "仰光，缅甸", "加德满都，尼泊尔", "河内，越南", "胡志明市，越南", "岘港，越南", "廷布，不丹", "比什凯克，吉尔吉斯斯坦", "杜尚别，塔吉克斯坦",
	"喀布尔，阿富汗", "白沙瓦，巴基斯坦", "费萨那巴德，巴基斯坦", "卡拉奇，巴基斯坦", "拉合尔，巴基斯坦", "拉瓦尔品第，巴基斯坦", "摩耳坦，巴基斯坦", "伊斯兰堡，巴基斯坦",
	"万象，老挝", "冲绳，日本", "大阪，日本", "东京，日本", "福冈，日本", "高知，日本", "广岛，日本", "横滨，日本", "金泽，日本", "京都，日本", "九州，日本", "名古屋，日本",
	"奈良，日本", "千叶，日本", "秋田，日本", "神户，日本", "大丘，韩国", "大邱，韩国", "大田，韩国", "釜山，韩国", "光州，韩国", "首尔，韩国", "达沃，菲律宾", "马尼拉，菲律宾",
	"宿务岛，菲律宾", "哥打基纳巴卢，马来西亚", "古晋，马来西亚", "吉隆坡，马来西亚", "纳闽，马来西亚", "普特拉贾亚，马来西亚", "柔佛巴鲁，马来西亚", "云顶高原，马来西亚",
	"班达尔斯里巴加湾，文莱", "巴厘岛，印度尼西亚", "登巴萨，印度尼西亚", "棉兰，印度尼西亚", "泗水，印度尼西亚", "万隆，印度尼西亚", "雅加达，印度尼西亚",
	"阿德莱德，南澳大利亚，澳大利亚", "布里斯班，昆士兰，澳大利亚", "达尔文，北领地，澳大利亚", "黄金海岸，昆士兰，澳大利亚", "霍巴特，塔斯马尼亚，澳大利亚", "堪培拉，澳大利亚",
	"墨尔本，维多利亚，澳大利亚", "纽卡斯尔，澳大利亚", "珀斯，西澳大利亚，澳大利亚", "悉尼，新南威尔士，澳大利亚", "巴西利亚，巴西", "阿雷格里港，巴西", "贝洛哈里桑塔，巴西",
	"福塔雷萨，巴西", "坎皮纳斯，巴西", "库里提巴，巴西", "库亚巴，巴西", "累西腓，巴西", "里约布兰科，巴西", "里约热内卢，巴西", "马瑙斯，巴西", "纳塔尔，巴西", "萨尔瓦多，巴西",
	"桑托斯，巴西", "圣保罗，巴西", "埃德蒙顿，阿尔伯达省，加拿大", "奥沙瓦，安大略省，加拿大", "多伦多，安大略省，加拿大", "哈利法克斯，新斯科舍省，加拿大",
	"赫尔，魁北克省，加拿大", "怀特霍斯，育空地区，加拿大", "基洛纳，不列颠哥伦比亚省，加拿大", "卡尔加里，阿尔伯达省，加拿大", "魁北克市，魁北克省，加拿大",
	"里贾纳，萨斯喀彻温省，加拿大", "蒙特利尔，魁北克省，加拿大", "米西索加，安大略省，加拿大", "尼亚加拉瀑布城，安大略省，加拿大", "纽芬兰，加拿大", "萨斯喀彻温，加拿大"
];
var oct = [];
var dif = [
	8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, -6, -7, -4, -4, -4, -5, -7, -5, -6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -4, 1, 1, 12, 6, 3, 10, 2, 12, 7, 11, 3, 3, 11,
	4, 3, 5, 3, 8, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 9, 6, 6, 6.5, 6.5, 6.5, 6.5, 5.75, 7, 7, 7, 6, 6, 5, 4.5, 5, 5, 5, 5, 5, 5, 5, 7, 9, 9, 9, 9, 9, 9,
	9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 9.5, 10, 9.5, 10, 10, 10, 10, 10, 8, 10, -3, -3, -3, -3, -3, -3, -4,
	-3, -5, -3, -4, -3, -3, -3, -3, -6, -4, -4, -3, -3, -7, -7, -6, -4, -6, -4, -4, -4, -3, -6
];
setInterval(function () {
	var a = new Date().getHours();
	var b = new Date().getMinutes();
	var c = a, d = b;
	if (b.toString().length == 1) d = "0" + b;
	document.getElementById("lct").innerText = c + ":" + d;
	document.getElementById("wdt").innerText = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate();
	document.getElementById("wdu").innerText = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate();
	for (y = 0; y < oct.length; y++) {
		var i = Number(new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), a, b, 0, 0)) + 3600000 * (dif[oct[y]] + new Date()
			.getTimezoneOffset() / 60);
		c = new Date(i).getHours();
		d = new Date(i).getMinutes();
		if (new Date(i).getMinutes().toString().length == 1) d = "0" + new Date(i).getMinutes();
		document.getElementById("city" + oct[y]).getElementsByClassName("fsj")[0].innerText = c + ":" + d;
		document.getElementById("city" + oct[y]).getElementsByClassName("rqj")[0].innerText = new Date(i).getFullYear() + "/" + new Date(i).getMonth() + "/" + new Date(i)
			.getDate() + ", " + (dif[oct[y]] + new Date().getTimezoneOffset() / 60) + "小时";
		document.getElementById("hde").getElementsByClassName("rqj")[y + 1].innerText = new Date(i).getFullYear() + "/" + new Date(i).getMonth() + "/" + new Date(i)
			.getDate() + ", " + (dif[oct[y]] + new Date().getTimezoneOffset() / 60) + "小时";
		var f = new Date().getHours() + dif[oct[y]] + new Date().getTimezoneOffset() / 60;
		document.getElementById("cpa" + oct[y]).getElementsByClassName("duy")[0].innerHTML = "<td>" + (f + 20 + nwo) % 24 + "</td><td>" + (f + 21 + nwo) % 24 +
			"</td><td>" + (f + 22 + nwo) % 24 + "</td><td>" + (f + 23 + nwo) % 24 + "</td><td>" + (f + nwo) % 24 + "</td><td>" + (f + 1 + nwo) % 24 + "</td><td>" + (f + 2
				+ nwo) % 24 + "</td><td>" + (f + 3 + nwo) % 24 + "</td><td>" + (f + 4 + nwo) % 24 + "</td>";
	}
	document.getElementById("vgo").innerHTML = "<td>" + (new Date().getHours() + 20 + nwo) % 24 + "</td><td>" + (new Date().getHours() + 21 + nwo) % 24 + "</td><td>" +
		(new Date().getHours() + 22 + nwo) % 24 + "</td><td>" + (new Date().getHours() + 23 + nwo) % 24 + "</td><td>" + (new Date().getHours() + nwo) % 24 + "</td><td>" +
		(new Date().getHours() + 1 + nwo) % 24 + "</td><td>" + (new Date().getHours() + 2 + nwo) % 24 + "</td><td>" + (new Date().getHours() + 3 + nwo) % 24 + "</td><td>"
		+ (new Date().getHours() + 4 + nwo) % 24 + "</td>";
	for (var p = 1; p < document.getElementsByClassName("sma").length; p++) {
		var lp = document.getElementsByClassName("tmd")[p - 1].innerText.split(":");
		var ltp = (lp[0] * 3600000 + lp[1] * 60000 + 86400000 - new Date() % 86400000 + new Date().getTimezoneOffset() * 60000) % 86400000;
		mi = 7;
		for (var lxp = 0; lxp < 7; lxp++) {
			if ((new Date().getHours() > lp[0] || (new Date().getHours() == lp[0] && new Date().getMinutes() > lp[1])) && mi == 0 && new Date().getDay() == lxp) continue;
			if (document.getElementsByClassName("sma")[p].getElementsByTagName("button")[lxp].style.borderColor != "" && document.getElementsByClassName("sma")[p]
				.getElementsByTagName("button")[lxp].style.borderColor != "gray") mi = Math.min((lxp + 7 - new Date().getDay()) % 7, mi);
		}
		if (!chl(p)) mi = 0;
		document.getElementsByClassName("lte")[p - 1].getElementsByTagName("span")[1].innerText = mi + "天" + (ltp - ltp % 3600000) / 3600000 + "小时" + (ltp - (ltp - ltp
			% 3600000) - ltp % 60000) / 60000 + "分钟内";
		if (lp[0] * 3600000 + lp[1] * 60000 == new Date().getHours() * 3600000 + new Date().getMinutes() * 60000 && document.getElementById("naozhong").innerHTML
			.indexOf('<div class="fdo"><b class="nzn">' + document.getElementsByClassName("hel")[p - 1].innerText + '</b>') == -1 && document.getElementsByClassName("cbx")[p - 1]
				.checked && ifmy < 0 && (document.getElementsByClassName("sma")[p].getElementsByTagName("button")[new Date().getDay()].style.borderColor != "" || document
					.getElementsByClassName("sma")[p].getElementsByTagName("button")[new Date().getDay()].style.borderColor != "gray" || !chl(p))) {
			document.getElementById("naozhong").innerHTML += ('<div class="fdo"><b class="nzn">' + document.getElementsByClassName("hel")[p - 1].innerText + '</b><br/>\
				推迟时间为<select class="slc"><option>已禁用</option><option>5分钟</option><option>10分钟</option><option>20分钟</option><option>30分钟</option><option>1小时</option>\
				</select><button class="wib" onclick="chi(document.getElementsByClassName(\'hel\')[' + p + ' - 1], this);">推迟</button><button class="wib" onclick="xch(this)">消除</button></div>');
			document.getElementsByClassName("slc")[document.getElementsByClassName("slc").length - 1].getElementsByTagName("option")[Number(document
				.getElementsByClassName("lte")[p - 1].parentNode.classList[1][3])].selected = "selected";
			ifmy = 60000;
			if (!chl(p)) document.getElementsByClassName("cbx")[p - 1].checked = "";
		}
		if (tui[document.getElementsByClassName("hel")[p - 1].innerText] != 3600001) tui[document.getElementsByClassName("hel")[p - 1].innerText] -= 10;
		if (tui[document.getElementsByClassName("hel")[p - 1].innerText] <= 0) {
			document.getElementById("naozhong").innerHTML += ('<div class="fdo"><b class="nzn">' + document.getElementsByClassName("hel")[p - 1].innerText + '</b><br/>\
			推迟时间为<select class="slc"><option>已禁用</option><option>5分钟</option><option>10分钟</option><option>20分钟</option><option>30分钟</option><option>1小时</option>\
			</select><button class="wib" onclick="chi(document.getElementsByClassName(\'hel\')[' + p + ' - 1], this);">推迟</button><button class="wib" onclick="xch(this)">消除</button></div>');
			document.getElementsByClassName("slc")[document.getElementsByClassName("slc").length - 1].getElementsByTagName("option")[Number(document
				.getElementsByClassName("lte")[p - 1].parentNode.classList[1][3])].selected = "selected";
			tui[document.getElementsByClassName("hel")[p - 1].innerText] = 3600001;
		}
	}
	ifmy -= 10;
}, 10);

function chi(a, b) {
	tui[a.innerText] = tda[b.parentNode.getElementsByTagName('select')[0].selectedIndex];
	xch(b);
}

function chl(xp) {
	for (var lxp = 0; lxp < 7; lxp++) {
		if (document.getElementsByClassName("sma")[xp].getElementsByTagName("button")[lxp].style.borderColor != "" && document.getElementsByClassName("sma")[xp]
			.getElementsByTagName("button")[lxp].style.borderColor != "gray") return true;
	}
	return false;
}

function da() {
	if (!std) {
		std = true;
		document.getElementById("bta").innerText = "停止";
		document.getElementById("btb").disabled = "";
		document.getElementById("btc").disabled = "";
		var dte = new Date();
		var csz = Number(document.getElementById("a").innerText) * 3600000 + Number(document.getElementById("b").innerText) * 60000 +
			Number(document.getElementById("c").innerText) * 1000 + Number(document.getElementById("d").innerText) * 10;
		sin = setInterval(function () {
			var dts = new Date();
			var mns = csz + Number(dts - dte);
			if ((mns - mns % 3600000) / 3600000 >= 10) {
				document.getElementById("a").innerText = (mns - mns % 3600000) / 3600000;
			} else {
				document.getElementById("a").innerText = "0" + ((mns - mns % 3600000) / 3600000);
			}
			if (((mns - mns % 60000) / 60000) % 60 >= 10) {
				document.getElementById("b").innerText = ((mns - mns % 60000) / 60000) % 60;
			} else {
				document.getElementById("b").innerText = "0" + (((mns - mns % 60000) / 60000) % 60);
			}
			if (((mns - mns % 1000) / 1000) % 60 >= 10) {
				document.getElementById("c").innerText = ((mns - mns % 1000) / 1000) % 60;
			} else {
				document.getElementById("c").innerText = "0" + (((mns - mns % 1000) / 1000) % 60);
			}
			if (((mns - mns % 10) / 10) % 100 >= 10) {
				document.getElementById("d").innerText = ((mns - mns % 10) / 10) % 100;
			} else {
				document.getElementById("d").innerText = "0" + (((mns - mns % 10) / 10) % 100);
			}
		}, 10)
	} else {
		document.getElementById("bta").innerText = "开始";
		sin = clearInterval(sin);
		std = false;
		document.getElementById("btb").disabled = "disabled";
	}
}

function db() {
	tfd = Number(document.getElementById("a").innerText) * 3600000 + Number(document.getElementById("b").innerText) * 60000 + Number(document.getElementById("c")
		.innerText) * 1000 + Number(document.getElementById("d").innerText) * 10;
	str = ((tfd - tfb) - (tfd - tfb) % 3600000) / 3600000 + ":" + ((((tfd - tfb) - (tfd - tfb) % 60000) / 60000) % 60) + ":" + (((((tfd - tfb) - (tfd - tfb) % 1000) /
		1000) % 60)) + "." + (((((tfd - tfb) - (tfd - tfb) % 10) / 10) % 100));
	str = str.split("");
	if (str[1] == ":") str.splice(0, 0, "0");
	if (str[4] == ":") str.splice(3, 0, "0");
	if (str[7] == ".") str.splice(6, 0, "0");
	if (str.length == 10) str.splice(9, 0, "0");
	str = str.join("");
	document.getElementById("tbl").innerHTML += ("<tr id='tr" + num + "'><th>" + num + "</th><td class='kmb'></td><td class='csj'>" + str + "</td><td>" + document
		.getElementById("div").innerText + "</td>");
	sdb[sdb.length] = tfd - tfb;
	for (var i = 0; i < sdb.length; i++) {
		if (sdb[i] == Math.max.apply(null, sdb)) {
			document.getElementById("tr" + (i + 1)).getElementsByClassName("kmb")[0].innerText = "最慢";
		} else if (sdb[i] == Math.min.apply(null, sdb)) {
			document.getElementById("tr" + (i + 1)).getElementsByClassName("kmb")[0].innerText = "最快";
		} else {
			document.getElementById("tr" + (i + 1)).getElementsByClassName("kmb")[0].innerText = "";
		}
	}
	tfb = Number(document.getElementById("a").innerText) * 3600000 + Number(document.getElementById("b").innerText) * 60000 + Number(document.getElementById("c")
		.innerText) * 1000 + Number(document.getElementById("d").innerText) * 10;
	num++;
	document.getElementById("tbl").style.display = "table";
}

function dc() {
	if (std) da();
	document.getElementById("a").innerText = "00";
	document.getElementById("b").innerText = "00";
	document.getElementById("c").innerText = "00";
	document.getElementById("d").innerText = "00";
	num = 1;
	document.getElementById("tbl").innerHTML = "<tr id='ttr'><th>分圈计时</th><th></th><th>时间</th><th>总计</th></tr>";
	tfb = 0;
	document.getElementById("btc").disabled = "disabled";
	sdb = [];
	document.getElementById("tbl").style.display = "none";
}

function fsc() {
	if (bfs) {
		document.exitFullscreen();
		document.getElementById("fcb").innerText = "展开";
		document.getElementById("btb").style.display = "inline";
		document.getElementById("tbl").style.display = "";
		bfs = false;
		document.getElementById("div").style.fontSize = "70pt";
	} else {
		document.getElementById("miaobiao").requestFullscreen();
		document.getElementById("fcb").innerText = "还原";
		document.getElementById("btb").style.display = "none";
		document.getElementById("tbl").style.display = "none";
		bfs = true;
		document.getElementById("div").style.fontSize = "100pt";
	}
}

function sel(sle) {
	for (var i = 0; i <= 4; i++) {
		document.getElementById(["jsq", "naz", "sjz", "mib", "set"][i]).className = "";
		document.getElementById(["jishiqi", "naozhong", "shijieshizhong", "miaobiao", "shezhi"][i]).style.display = "none";
		if (sle == ["jsq", "naz", "sjz", "mib", "set"][i]) mbs = i;
	}
	document.getElementById(sle).className = "sld";
	document.getElementById(["jishiqi", "naozhong", "shijieshizhong", "miaobiao", "shezhi"][mbs]).style.display = "block";
}

function tun(ltm) {
	if (ltm) {
		document.getElementsByTagName("html")[0].className = "";
	} else {
		document.getElementsByTagName("html")[0].className = "dke";
	}
}

function stt(sti) {
	if (document.getElementById("j" + sti).parentNode.parentNode.getElementsByTagName("button")[0].innerText == "开始") {
		document.getElementById("j" + sti).parentNode.parentNode.getElementsByTagName("button")[0].innerText = "停止";
		counting[sti] = new Date();
		var vli = document.getElementById("j" + sti).innerText.split(":");
		var dlo = vli[0] * 3600000 + vli[1] * 60000 + vli[2] * 1000;
		jso[sti] = dlo;
		var fda, sts;
		if (!val) {
			val = setInterval(function () {
				for (var i in counting) {
					if (counting[i] != 0) {
						fda = new Date();
						if ((jso[i] - (fda - counting[i])) <= 0) {
							document.getElementById("j" + i).parentNode.parentNode.getElementsByTagName("button")[0].innerText = "开始";
							document.getElementById("j" + i).parentNode.parentNode.getElementsByTagName("button")[0].disabled = "disabled";
							counting[i] = 0;
							return;
						}
						var tmp = jso[i] - (fda - counting[i]);
						sts = ((tmp - tmp % 3600000) / 3600000 + ":" + ((tmp - tmp % 60000) / 60000) % 60 + ":" + ((tmp - tmp % 1000) / 1000) % 60).split("");
						if (sts[1] == ":") sts.splice(0, 0, "0");
						if (sts[4] == ":") sts.splice(3, 0, "0");
						if (sts.length == 7) sts.splice(6, 0, "0");
						sts = sts.join("");
						document.getElementById('j' + i).innerText = sts;
					}
				}
			}, 10)
		}
	} else {
		document.getElementById("j" + sti).parentNode.parentNode.getElementsByTagName("button")[0].innerText = "开始";
		counting[sti] = 0;
	}
}

function rst(rsi) {
	val = clearInterval(val);
	document.getElementById("j" + rsi).innerText = (ysj[rsi] - ysj[rsi] % 3600000) / 3600000 + ":" + ((ysj[rsi] - ysj[rsi] % 60000) / 60000) % 60 + ":" + ((ysj[rsi] -
		ysj[rsi] % 1000) / 1000) % 60;
	czs = document.getElementById("j" + rsi).innerText.split("");
	if (czs[1] == ":") czs.splice(0, 0, "0");
	if (czs[4] == ":") czs.splice(3, 0, "0");
	if (czs.length == 7) czs.splice(6, 0, "0");
	czs = czs.join("");
	document.getElementById("j" + rsi).innerText = czs;
	document.getElementById("j" + rsi).parentNode.parentNode.getElementsByTagName("button")[0].disabled = "";
	document.getElementById("j" + rsi).parentNode.parentNode.getElementsByClassName("blb")[0].innerText = "开始";
}

function sve(nam, tim) {
	if (!isNaN(jso[nam])) return;
	tim = tim.split(":");
	if (tim[0].length != 2 || tim[1].length != 2 || tim[2].length != 2) return;
	tim = tim.join(":");
	document.getElementById("jishiqi").innerHTML += ('<div class="box">' + nam + '<div class="cte"><span id="j' + nam + '">' + tim +
		'</span></div><div class="cte"><button onclick="stt(\'' + nam + '\')" class="blb">开始</button><button onclick="rst(\'' + nam +
		'\')">重置</button><button onclick="jfc(this);">展开</button></div>');
	tim = tim.split(":");
	jso[nam] = tim[0] * 3600000 + tim[1] * 60000 + tim[2] * 1000;
	ysj[nam] = tim[0] * 3600000 + tim[1] * 60000 + tim[2] * 1000;
	document.getElementById("add").style.display = "none";
}

function jfc(jft) {
	if (jft.innerText == "展开") {
		jft.parentNode.parentNode.requestFullscreen();
		jft.parentNode.parentNode.getElementsByTagName("span")[0].style.fontSize = "60pt";
		jft.parentNode.parentNode.getElementsByTagName("span")[0].style.fontWeight = "100";
		jft.innerText = "收起";
	} else if (jft.innerText == "收起") {
		document.exitFullscreen();
		jft.parentNode.parentNode.getElementsByTagName("span")[0].style.fontSize = "30pt";
		jft.parentNode.parentNode.getElementsByTagName("span")[0].style.fontWeight = "500";
		jft.innerText = "展开";
	} else {
		document.getElementById("jishiqi").removeChild(jft.parentNode);
		jso[jft.parentNode.parentNode.getElementsByTagName("span")[0].id.replace("j", "")] = null;
	}
}

function edt() {
	for (var z = 0; z < document.getElementById("jishiqi").getElementsByClassName("box").length; z++) {
		document.getElementById("jishiqi").getElementsByClassName("box")[z].getElementsByTagName("button")[2].innerText = "删除";
		document.getElementById("bjj").style.display = "none";
		document.getElementById("tjj").innerText = "完成";
	}
}

function adj() {
	if (document.getElementById("tjj").innerText == "添加新计时器") {
		document.getElementById('add').style.display = 'block';
	} else {
		for (var m = 0; m < document.getElementById("jishiqi").getElementsByClassName("box").length; m++) {
			document.getElementById("jishiqi").getElementsByClassName("box")[m].getElementsByTagName("button")[2].innerText = "展开";
		}
		document.getElementById("bjj").style.display = "inline";
		document.getElementById("tjj").innerText = "添加新计时器";
	}
}

function tjn() {
	if (document.getElementById("nzf").innerText == "添加闹钟") {
		document.getElementById('xnz').style.display = 'block';
	} else {
		for (var n = 0; n < document.getElementsByClassName("ltb").length; n++) {
			document.getElementsByClassName("cbx")[n].style.display = "inline";
			document.getElementsByClassName("ltb")[n].style.display = "none";
		}
		document.getElementById("nzf").innerText = "添加闹钟";
		document.getElementById("nze").style.display = "inline";
	}
}

function bcn(tme, nme, a, b, c, d, e, f, g, z) {
	var a = tme.split(":");
	a[0] = Number(a[0]).toString();
	a = a.join(":");
	document.getElementById("naozhong").innerHTML += ('<div class="box sct' + z + '"><div class="lte"><input type="checkbox" class="cbx" /><button onclick="dbx(this\
		.parentNode.parentNode)" class="ltb fan">删除</button><span class="tmd">' + a + '</span><br /><span></span><br /><span class="hel">' + nme +
		'</span><div class="sma"><button style="border-color:' + a + '">日</button><button style="border-color:' + b + '">一</button><button style="border-color:' + c +
		'">二</button><button style="border-color:' + d + '">三</button><button style="border-color:' + e + '">四</button><button style="border-color:' + f +
		'">五</button><button style="border-color:' + g + '">六</button></div></div></div>');
	document.getElementById("xnz").style.display = "none";
	document.getElementsByClassName("cbx")[document.getElementsByClassName("cbx").length - 1].checked = true;
	tui[nme] = 3600001;
}

function ccl(cle) {
	if (cle.style.borderColor == "" || cle.style.borderColor == "gray") {
		cle.style.borderColor = "#065378";
		document.getElementById("cfn").checked = "checked";
	} else {
		cle.style.borderColor = "gray";
		for (var x = 0; x < 7; x++) {
			if (document.getElementById("xnz").getElementsByClassName("sma")[0].getElementsByTagName("button")[x].style.borderColor != "gray" && document
				.getElementById("xnz").getElementsByClassName("sma")[0].getElementsByTagName("button")[x].style.borderColor != "") return;
		}
		document.getElementById("cfn").checked = "";
	}
}

function dbx(dbs) {
	dbs.parentNode.removeChild(dbs);
}

function ted() {
	for (var x = 0; x < document.getElementsByClassName("ltb").length; x++) {
		document.getElementsByClassName("cbx")[x].style.display = "none";
		document.getElementsByClassName("ltb")[x].style.display = "inline";
	}
	document.getElementById("nze").style.display = "none";
	document.getElementById("nzf").innerText = "完成";
}

function adc() {
	if (document.getElementById("cac").innerText == "添加新城市") {
		document.getElementById("search").style.display = "block";
	} else {
		for (var x = 0; x < (document.getElementById("shijieshizhong").getElementsByClassName("fan").length - 3); x++) {
			if (document.getElementById("shijieshizhong").getElementsByClassName("fan")[x + 3].parentNode.parentNode.id != "hde") {
				document.getElementById("shijieshizhong").getElementsByClassName("fan")[x + 3].style.display = "none";
			}
		}
		document.getElementById("cpr").style.display = "inline";
		document.getElementById("ced").style.display = "inline";
		document.getElementById("cac").innerText = "添加新城市";
		document.getElementById("hde").style.display = "none";
	}
}

function hdt() {
	for (var x = 0; x < (document.getElementById("shijieshizhong").getElementsByClassName("fan").length - 3); x++) {
		document.getElementById("shijieshizhong").getElementsByClassName("fan")[x + 3].style.display = "inline";
	}
	document.getElementById("cpr").style.display = "none";
	document.getElementById("ced").style.display = "none";
	document.getElementById("cac").innerText = "完成";
}

function srh(srt) {
	document.getElementById("blx").innerHTML = "";
	if (srt != "") {
		for (var x = 0; x < cities.length; x++) {
			if (cities[x].indexOf(srt) != -1) document.getElementById("blx").innerHTML += ("<div onclick='aci(" + x + ");qut();'>" + cities[x] + "</div>");
		}
	}
}

function aci(act) {
	document.getElementById("shijieshizhong").innerHTML += '<div class="box vrg" id="city' + act + '"><button class="fan" onclick="dee(this.parentNode)">删除</button>\
		<span class="fsj"></span><div class="ilk"><b>' + cities[act] + '</b><br /><span class="rqj"></span></div></div>';
	document.getElementById("hde").innerHTML += '<div class="box vrg" id="cpa' + act + '"><div><b>' + cities[act] + '</b><br /><span class="rqj"></span></div><button\
		onclick="rev()" class="fan nrt">向前</button><table><tr class="duy"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\
		</table><button onclick="ext()" class="fan nrt">向后</button></div>';
	oct[oct.length] = act;
}

function qut() {
	document.getElementById("search").style.display = "none";
}

function dee(det) {
	for (var x = 0; x < oct.length; x++) {
		if (oct[x] == det.id.replace("city", "")) {
			oct.splice(x, 1);
			break;
		}
	}
	document.getElementById("hde").removeChild(document.getElementById("cpa" + det.id.replace("city", "")));
	det.parentNode.removeChild(det);
}

function cmp() {
	document.getElementById("hde").style.display = "block";
	document.getElementById("cpr").style.display = "none";
	document.getElementById("ced").style.display = "none";
	document.getElementById("cac").innerText = "完成";
}

function rev() {
	nwo--;
}

function ext() {
	nwo++;
}

function xch(thi) {
	thi.parentNode.parentNode.removeChild(thi.parentNode);
}