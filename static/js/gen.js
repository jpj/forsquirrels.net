function getArgs() {
	var args = new Object();
	var query = location.search.substring(1);
	var pairs = query.split(",");
	for (var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf('=');
		if (pos == -1) continue;
		var argname = pairs[i].substring(0,pos);
		var value = pairs[i].substring(pos+1);
		args[argname] = unescape(value);
	}
	return args;
}

function navbarHover(element) {
	document.getElementById(element).style.backgroundColor='#add8e6';
}
function navbarOut(element) {
	document.getElementById(element).style.backgroundColor='#cc6600';
}
function navbarOutSelected(element) {
	document.getElementById(element).style.backgroundColor='#ffffff';
}


function doHelp(page) {
	window.open(page,'','toolbar=1,resizable=1,scrollbars=1,location=1,width=500,height=500');
}
