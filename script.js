var sin, mns = 0, tfd = 0, tfb = 0, str = "", num = 1, std = false, bfs = false, sdb = [], mbs = 0, czs = '', val;
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
var cities = [
	"北京，中国", "成都，中国", "大理，中国", "大连，中国", "广州，中国", "哈尔滨，中国", "杭州，中国", "拉萨，中国", "南京，中国", "青岛，中国", "厦门，中国", "上海，中国",
	"深圳，中国", "沈阳，中国", "苏州，中国", "阿尔伯克基，新墨西哥州，美国", "阿卡迪亚，加利福尼亚州，美国", "阿克伦，俄亥俄州，美国", "阿灵顿，弗吉尼亚州，美国", "阿伦敦，宾夕法尼亚州，美国",
	"阿马里洛，得克萨斯州，美国", "阿纳海姆，加利福尼亚州，美国", "阿普尔顿，威斯康星州，美国", "埃尔帕索，得克萨斯州，美国"
];
var oct = [];
var dif = [
	8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, -6, -7, -4, -4, -4, -5, -7, -5, -6
];
setInterval(function () {
	var a = new Date().getHours();
	var b = new Date().getMinutes();
	var c = a, d = b;
	if (a.length == 1) c = "0" + a;
	if (b.length == 1) d = "0" + b;
	document.getElementById("lct").innerText = c + ":" + d;
	document.getElementById("wdt").innerText = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate();
	for (x = 0; x < oct.length; x++) {
		if (a.length == 1) c = "0" + a;
		if (b.length == 1) d = "0" + b;
		var i = Number(new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), a, b, 0, 0)) + 3600000 * (dif[oct[x]] + new Date()
			.getTimezoneOffset() / 60);
		document.getElementById("city" + oct[x]).getElementsByClassName("fsj")[0].innerText = new Date(i).getHours() + ":" + new Date(i).getMinutes();
		document.getElementById("city" + oct[x]).getElementsByClassName("rqj")[0].innerText = new Date(i).getFullYear() + "/" + new Date(i).getMonth() + "/" + new Date(i)
			.getDate() + ", " + (dif[oct[x]] + new Date().getTimezoneOffset() / 60) + "小时";
	}
}, 10);

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
	tfd = Number(document.getElementById("a").innerText) * 3600000 + Number(document.getElementById("b").innerText) * 60000 +
		Number(document.getElementById("c").innerText) * 1000 + Number(document.getElementById("d").innerText) * 10;
	str = ((tfd - tfb) - (tfd - tfb) % 3600000) / 3600000 + ":" + ((((tfd - tfb) - (tfd - tfb) % 60000) / 60000) % 60) + ":" +
		(((((tfd - tfb) - (tfd - tfb) % 1000) / 1000) % 60)) + "." + (((((tfd - tfb) - (tfd - tfb) % 10) / 10) % 100));
	str = str.split("");
	if (str[1] == ":") str.splice(0, 0, "0");
	if (str[4] == ":") str.splice(3, 0, "0");
	if (str[7] == ".") str.splice(6, 0, "0");
	if (str.length == 10) str.splice(9, 0, "0");
	str = str.join("");
	document.getElementById("tbl").innerHTML += ("<tr id='tr" + num + "'><th>" + num + "</th><td class='kmb'></td><td class='csj'>" +
		str + "</td><td>" + document.getElementById("div").innerText + "</td>");
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
	tfb = Number(document.getElementById("a").innerText) * 3600000 + Number(document.getElementById("b").innerText) * 60000 +
		Number(document.getElementById("c").innerText) * 1000 + Number(document.getElementById("d").innerText) * 10;
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
		document.getElementById(["jsq", "naz", "sjz", "mib", "set"][i]).className = ""
		document.getElementById(["jishiqi", "naozhong", "shijieshizhong", "miaobiao", "shezhi"][i]).style.display = "none"
		if (sle == ["jsq", "naz", "sjz", "mib", "set"][i]) mbs = i
	}
	document.getElementById(sle).className = "sld"
	document.getElementById(["jishiqi", "naozhong", "shijieshizhong", "miaobiao", "shezhi"][mbs]).style.display = "block"
}

function tun(ltm) {
	if (ltm) {
		document.getElementsByTagName("html")[0].className = ""
	} else {
		document.getElementsByTagName("html")[0].className = "dke"
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
							document.getElementById("j" + i).parentNode.parentNode.getElementsByTagName("button")[0].disabled =
								"disabled";
							counting[i] = 0;
							return;
						}
						var tmp = jso[i] - (fda - counting[i]);
						sts = ((tmp - tmp % 3600000) / 3600000 + ":" + ((tmp - tmp % 60000) / 60000) % 60 + ":" + ((tmp - tmp %
							1000) / 1000) % 60).split("");
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
	document.getElementById("j" + rsi).innerText = (ysj[rsi] - ysj[rsi] % 3600000) / 3600000 + ":" + ((ysj[rsi] - ysj[rsi] % 60000) /
		60000) % 60 + ":" + ((ysj[rsi] - ysj[rsi] % 1000) / 1000) % 60;
	czs = document.getElementById("j" + rsi).innerText.split("");
	if (czs[1] == ":") czs.splice(0, 0, "0");
	if (czs[4] == ":") czs.splice(3, 0, "0");
	if (czs.length == 7) czs.splice(6, 0, "0");
	czs = czs.join("");
	document.getElementById("j" + rsi).innerText = czs;
	document.getElementById("j" + rsi).parentNode.parentNode.getElementsByTagName("button")[0].disabled = "";
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
	for (var x = 0; x < document.getElementById("jishiqi").getElementsByClassName("box").length; x++) {
		document.getElementById("jishiqi").getElementsByClassName("box")[x].getElementsByTagName("button")[2].innerText = "删除";
		document.getElementById("bjj").style.display = "none";
		document.getElementById("tjj").innerText = "完成";
	}
}

function adj() {
	if (document.getElementById("tjj").innerText == "添加新计时器") {
		document.getElementById('add').style.display = 'block';
	} else {
		for (var x = 0; x < document.getElementById("jishiqi").getElementsByClassName("box").length; x++) {
			document.getElementById("jishiqi").getElementsByClassName("box")[x].getElementsByTagName("button")[2].innerText = "展开";
		}
		document.getElementById("bjj").style.display = "inline";
		document.getElementById("tjj").innerText = "添加新计时器";
	}
}

function tjn() {
	if (document.getElementById("nzf").innerText == "添加闹钟") {
		document.getElementById('xnz').style.display = 'block';
	} else {
		for (var x = 0; x < document.getElementsByClassName("ltb").length; x++) {
			document.getElementsByClassName("cbx")[x].style.display = "inline";
			document.getElementsByClassName("ltb")[x].style.display = "none";
		}
		document.getElementById("nzf").innerText = "添加闹钟";
		document.getElementById("nze").style.display = "inline";
	}
}

function bcn(tme, nme, a, b, c, d, e, f, g) {
	var a = tme.split(":");
	a[0] = Number(a[0]).toString();
	a = a.join(":");
	document.getElementById("naozhong").innerHTML += ('<div class="box"><div class="lte"><input type="checkbox" class="cbx" checked="checked"/><button onclick="dbx(this\
		.parentNode.parentNode)" class="ltb fan">删除</button><br /><span class="tmd">' + a + '</span><span></span><br /><span class="hel">' + nme + '</span><div class="sma"><button style="border-color:' +
		a + '">日</button><button style="border-color:' + b + '">一</button><button style="border-color:' + c + '">二</button><button style="border-color:' + d +
		'">三</button><button style="border-color:' + e + '">四</button><button style="border-color:' + f + '">五</button><button style="border-color:' + g +
		'">六</button></div></div></div>')
	document.getElementById("xnz").style.display = "none";
}

function ccl(cle) {
	if (cle.style.borderColor == "" || cle.style.borderColor == "gray") {
		cle.style.borderColor = "#065378";
		document.getElementById("cfn").checked = "checked";
	} else {
		cle.style.borderColor = "gray";
		for (var x = 0; x < document.getElementsByClassName("sma")[1].getElementsByTagName("button").length; x++) {
			if (document.getElementsByClassName("sma")[1].getElementsByTagName("button")[x].style.borderColor != "gray" && document.getElementsByClassName("sma")[1].getElementsByTagName("button")[x].style.borderColor != "") return;
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
	document.getElementById("search").style.display = "block";
}

function hdt() {
	document.getElementById("cpr").style.display = "none";
	document.getElementById("ced").style.display = "none";
	document.getElementById("cac").innerText = "完成";
}

function srh(srt) {
	document.getElementById("blx").innerHTML = "";
	if (srt != "") {
		for (var x = 0; x < cities.length; x++) {
			if (cities[x].indexOf(srt) != -1) document.getElementById("blx").innerHTML += ("<span onclick='aci(" + x + ")'>" + cities[x] + "</span><br/>");
		}
	}
}

function aci(act) {
	document.getElementById("shijieshizhong").innerHTML += '<div class="box vrg" id="city' + act + '"><span class="fsj"></span><div class="ilk"><b>' + cities[act] + '</b><br /><span class="rqj"></span>\
		</div></div>';
	oct[oct.length] = act;
}

function qut() {
	document.getElementById("search").style.display = "none";
}