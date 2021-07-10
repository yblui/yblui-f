var sin, mns = 0,tfd = 0, tfb = 0, str = "", num = 1, std = false, bfs = false, sdb=[], mbs=0;
document.getElementById("lct").innerText=new Date().getHours()+":"+new Date().getMinutes()

function da() {
	if (!std) {
		std = true;
		document.getElementById("bta").innerText = "停止";
		document.getElementById("btb").disabled = "";
		document.getElementById("btc").disabled = "";
		var dte = new Date();
		var csz = Number(document.getElementById("a").innerText) * 3600000 + Number(document.getElementById("b").innerText) * 60000 +
			Number(document.getElementById("c").innerText) * 1000 + Number(document.getElementById("d").innerText) * 10;
		sin = setInterval(function() {
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
	str = ((tfd - tfb) - (tfd - tfb) % 3600000) / 3600000 + ":" + ((((tfd - tfb) - (tfd - tfb) % 60000) / 60000) % 60) + ":" + (((((tfd - tfb) - (tfd -
		tfb) % 1000) / 1000) % 60)) + "." + (((((tfd - tfb) - (tfd - tfb) % 10) / 10) % 100));
	str = str.split("");
	if (str[1] == ":") str.splice(0, 0, "0");
	if (str[4] == ":") str.splice(3, 0, "0");
	if (str[7] == ".") str.splice(6, 0, "0");
	if (str.length == 10) str.splice(9, 0, "0");
	str = str.join("");
	document.getElementById("tbl").innerHTML += ("<tr id='tr"+num+"'><th>" + num + "</th><td class='kmb'></td><td class='csj'>" + str + "</td><td>" +
		document.getElementById("div").innerText + "</td>");
	sdb[sdb.length]=tfd-tfb;
	for (var i = 0; i<sdb.length; i++){
		if (sdb[i] == Math.max.apply(null,sdb)){
			document.getElementById("tr" + (i + 1)).getElementsByClassName("kmb")[0].innerText = "最慢";
		} else if (sdb[i] == Math.min.apply(null,sdb)){
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
		document.getElementById("div").style.fontSize="70pt";
	} else {
		document.getElementsByTagName("html")[0].requestFullscreen();
		document.getElementById("fcb").innerText = "还原";
		document.getElementById("btb").style.display = "none";
		document.getElementById("tbl").style.display = "none";
		bfs = true;
		document.getElementById("div").style.fontSize="100pt";
	}
}

function sel(sle){
	for(var i=0;i<=4;i++){
		document.getElementById(["jsq","naz","sjz","mib","set"][i]).className=""
		document.getElementById(["jishiqi","naozhong","shijieshizhong","miaobiao","shezhi"][i]).style.display="none"
		if(sle==["jsq","naz","sjz","mib","set"][i]) mbs = i
	}
	document.getElementById(sle).className="sld"
	document.getElementById(["jishiqi","naozhong","shijieshizhong","miaobiao","shezhi"][mbs]).style.display="block"
}

function tun(ltm){
	if(ltm){
		document.getElementsByTagName("html")[0].className=""
	} else {
		document.getElementsByTagName("html")[0].className="dke"
	}
}