/*
 *	區域和地區配置
 *	author		yulei@addcn.com
 *	updateTime	2015-04-07
 */

//定義
define(function (require, exports, module){
	var lang = require("./widget_zh");
	//大區域
	var region = [];
	region = [
		{"id":0,"name":lang.region[0]},
		{"id":1,"name":lang.region[1]},
		{"id":2,"name":lang.region[2]},
		{"id":3,"name":lang.region[3]},
		{"id":4,"name":lang.region[4]},
		{"id":5,"name":lang.region[5]}
	];

	//小區域
	var s_region = [];
	s_region[1] = [
		{"id":1,"name":lang.area.s_region[1]},
		{"id":2,"name":lang.area.s_region[2]},
		{"id":3,"name":lang.area.s_region[3]},
		{"id":4,"name":lang.area.s_region[4]}
	];
	s_region[2] = [
		{"id":5,"name":lang.area.s_region[5]},
		{"id":6,"name":lang.area.s_region[6]},
		{"id":7,"name":lang.area.s_region[7]},
		{"id":8,"name":lang.area.s_region[8]}
	];
	s_region[3] = [
		{"id":9,"name":lang.area.s_region[9]},
		{"id":10,"name":lang.area.s_region[10]},
		{"id":11,"name":lang.area.s_region[11]},
		{"id":12,"name":lang.area.s_region[12]}
	];
	s_region[4] = [{"id":13,"name":lang.area.s_region[13]}];
	s_region[5] = [{"id":14,"name":lang.area.s_region[14]}];
	//地區
	var section = [];
	section[1] = {
		1:lang.section[1],
		2:lang.section[2],
		3:lang.section[3],
		4:lang.section[4]
	};
	section[2] = {
		5:lang.section[5],
		6:lang.section[6],
		7:lang.section[7],
		8:lang.section[8]
	};
	section[3] = {
		9:lang.section[9],
		10:lang.section[10],
		11:lang.section[11],
		12:lang.section[12],
		13:lang.section[13],
		14:lang.section[14]
	};
	section[4] = {
		15:lang.section[15],
		16:lang.section[16],
		17:lang.section[17],
		18:lang.section[18],
		19:lang.section[19],
		20:lang.section[20],
		21:lang.section[21]
	};
	section[5] = {
		22:lang.section[22],
		23:lang.section[23],
		24:lang.section[24],
		25:lang.section[25],
		26:lang.section[26],
		29:lang.section[29],
		30:lang.section[30]
	};
	section[6] = {
		31:lang.section[31],
		32:lang.section[32],
		33:lang.section[33]
	};
	section[7] = {
		34:lang.section[34],
		35:lang.section[35],
		36:lang.section[36],
		37:lang.section[37],
		38:lang.section[38],
		39:lang.section[39]
	};
	section[8] = {
		40:lang.section[40],
		41:lang.section[41],
		42:lang.section[42],
		43:lang.section[43],
		44:lang.section[44],
		45:lang.section[45]
	};
	section[9] = {
		46:lang.section[46],
		47:lang.section[47],
		48:lang.section[48],
		27:lang.section[27],
		28:lang.section[28]
	};
	section[10] = {
		49:lang.section[49],
		50:lang.section[50],
		51:lang.section[51],
		52:lang.section[52],
		53:lang.section[53],
		67:lang.section[67]
	};
	section[11] = {
		54:lang.section[54],
		56:lang.section[56],
		57:lang.section[57]
	};
	section[12] = {
		58:lang.section[58],
		59:lang.section[59]
	};
	section[13] = {
		60:lang.section[60],
		61:lang.section[61],
		62:lang.section[62],
		63:lang.section[63],
		64:lang.section[64],
		65:lang.section[65],
		66:lang.section[66],
	};
	section[14] = {
		68:lang.section[68],
		69:lang.section[69],
		70:lang.section[70],
		71:lang.section[71],
		72:lang.section[72],
		73:lang.section[73],
		74:lang.section[74],
		75:lang.section[75],
		76:lang.section[76],
		77:lang.section[77],
		78:lang.section[78],
		79:lang.section[79],
		80:lang.section[80],
		81:lang.section[81],
		82:lang.section[82],
		83:lang.section[83],
		84:lang.section[84],	
		85:lang.section[85],
		86:lang.section[86],
        87:lang.section[87],
        88:lang.section[88],
        89:lang.section[89],
	}

	//獲取大區域對應的小區域 
	module.exports.getsection = function(value){
		var _section = [];
		if(value > 0){
			$.each(s_region[value],function(k,v){
				$.each(section[v.id],function(k,v){
					_section[k] = v;
				})
			})
		}
		return _section;
	}
	
	//大區域
	module.exports.region = region;

	//小區域
	module.exports.s_region = s_region;

	//具體區域
	module.exports.section = section;
})


