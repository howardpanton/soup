// Gridset Overlay JS

gs = {

	init: function () {
		
		if (window.location.href.match('gridset=show')) gs.show();
	
		gs.bind(document, 'keydown', function (e) { 
		
			if (!e) var e = window.event;
		
			if(e.metaKey || e.ctrlKey) {
				
				switch (e.which || e.keyCode) {
					case 71:
					
						var gw = document.querySelectorAll('.gridsetoverlaywrap, #gridsetoverlaystyles, #gridscreenwidthwrap');
					
						if (gw.length == 0) gs.show();
						else gs.remove(gw);
						
						gs.prevent(e);
						break;
						
				}
				
			}
		
		
		});
	
	},
	
	remove: function (gw) {
		
		var i = gw.length;
		
		while (i-- > 0) {
		
			if (gw[i]) gw[i].parentNode.removeChild(gw[i]);
			
		}
		
		if(window.detachEvent) window.detachEvent('onresize', gs.width);
		else window.removeEventListener('resize', gs.width, false);
	
	},
	
	width: function () {
		
		var swv = document.getElementById('gridscreenwidthval');
		if (swv) swv.innerHTML = window.innerWidth + 'px';
		
	},

	show: function () {
	
		var b = document.getElementsByTagName('body')[0],
				gridareas = document.querySelectorAll('[class*=-showgrid]'),
				areacount = gridareas.length,
				wrapper = document.querySelectorAll('.wrapper'),
			
				breaks = '',
			
				styles = '.gridsetoverlaywrap{display:block;position:absolute;top:0;left:0;width:100%;height:100%;z-index:10000;pointer-events:none;}.gridsetnoareas .gridsetoverlaywrap{position:fixed;}.gridwrap{display:block;position:absolute;top:0;left:0;width:100%;height:100%;font-family:Helvetica, Arial, sans-serif !important;}.gridoverlay{position:relative;height:100%;overflow:hidden !important;background:none !important;}.gridoverlay div{display:block;position:static;height:100%;color:#bcbcff;}.gridoverlay .gridset{position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.7;}.gridoverlay .gridset div{text-align:left;font-size:10px !important;border-right:1px solid #bcbcff;border-left:1px solid #bcbcff;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}.gridoverlay div small{width:100%;display:block;text-align:center;color:#7D80DB;font-weight:700 !important;border-bottom:1px solid #bcbcff;border-top:1px solid #bcbcff;padding-top:0 !important;background-color:rgb(240,240,255) !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;}.gridoverlay .gridset:nth-child(2) div{border-style:dashed;padding-top:23px;}.gridoverlay .gridset:nth-child(2) small{border-style:dashed;}.gridoverlay .gridset:nth-child(3) div{border-style:dotted;padding-top:45px;}.gridoverlay .gridset:nth-child(3) small{border-style:dotted;}.gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{display:block;width:100%;position:absolute;bottom:0;left:0;height:30px;border-top:1px solid #7D80DB;opacity:0.7;color:#7D80DB;background-color:rgb(240,240,255) !important;}.gridsetnoareas #gridscreenwidthwrap{position:fixed;}#gridscreenwidth{display:block;width:100%;text-align:center;font-size:12px;line-height:1;padding-top:8px;}#gridscreenwidth strong{text-transform:none;}@media only screen and (max-width:767px) {.gridsetoverlaywrap [class*=m1],.gridsetoverlaywrap [class*=m2],.gridsetoverlaywrap [class*=m3],.gridsetoverlaywrap [class*=m4],.gridsetoverlaywrap .m-all{display:block;float:left;margin-right:-100%;}.gridsetoverlaywrap [class*=m1]{width:19.375%;margin-left:0%;}.gridsetoverlaywrap [class*=m2]{width:19.375%;margin-left:26.875%;}.gridsetoverlaywrap [class*=m3]{width:19.375%;margin-left:53.75%;}.gridsetoverlaywrap [class*=m4]{width:19.375%;margin-left:80.625%;}.gridsetoverlaywrap .m-hide{display:none !important;}}@media only screen and (min-width:768px) and (max-width:959px) {.gridsetoverlaywrap [class*=t1],.gridsetoverlaywrap [class*=t2],.gridsetoverlaywrap [class*=t3],.gridsetoverlaywrap [class*=t4],.gridsetoverlaywrap [class*=t5],.gridsetoverlaywrap [class*=t6],.gridsetoverlaywrap [class*=t7],.gridsetoverlaywrap [class*=t8],.gridsetoverlaywrap .t-all{display:block;float:left;margin-right:-100%;}.gridsetoverlaywrap [class*=t1]{width:9.765625%;margin-left:0%;}.gridsetoverlaywrap [class*=t2]{width:9.765625%;margin-left:12.890625%;}.gridsetoverlaywrap [class*=t3]{width:9.765625%;margin-left:25.78125%;}.gridsetoverlaywrap [class*=t4]{width:9.765625%;margin-left:38.671875%;}.gridsetoverlaywrap [class*=t5]{width:9.765625%;margin-left:51.5625%;}.gridsetoverlaywrap [class*=t6]{width:9.765625%;margin-left:64.453125%;}.gridsetoverlaywrap [class*=t7]{width:9.765625%;margin-left:77.34375%;}.gridsetoverlaywrap [class*=t8]{width:9.765625%;margin-left:90.234375%;}.gridsetoverlaywrap .t-hide{display:none !important;}}@media only screen and (min-width:960px) {.gridsetoverlaywrap [class*=d1],.gridsetoverlaywrap [class*=d2],.gridsetoverlaywrap [class*=d3],.gridsetoverlaywrap [class*=d4],.gridsetoverlaywrap [class*=d5],.gridsetoverlaywrap [class*=d6],.gridsetoverlaywrap [class*=d7],.gridsetoverlaywrap [class*=d8],.gridsetoverlaywrap [class*=d9],.gridsetoverlaywrap [class*=d10],.gridsetoverlaywrap [class*=d11],.gridsetoverlaywrap [class*=d12],.gridsetoverlaywrap .d-all{display:block;float:left;margin-right:-100%;}.gridsetoverlaywrap [class*=d1]{width:6.04166666%;margin-left:0%;}.gridsetoverlaywrap [class*=d2]{width:6.04166666%;margin-left:8.54166666%;}.gridsetoverlaywrap [class*=d3]{width:6.04166666%;margin-left:17.08333332%;}.gridsetoverlaywrap [class*=d4]{width:6.04166666%;margin-left:25.62499998%;}.gridsetoverlaywrap [class*=d5]{width:6.04166666%;margin-left:34.16666664%;}.gridsetoverlaywrap [class*=d6]{width:6.04166666%;margin-left:42.7083333%;}.gridsetoverlaywrap [class*=d7]{width:6.04166666%;margin-left:51.24999996%;}.gridsetoverlaywrap [class*=d8]{width:6.04166666%;margin-left:59.79166662%;}.gridsetoverlaywrap [class*=d9]{width:6.04166666%;margin-left:68.33333328%;}.gridsetoverlaywrap [class*=d10]{width:6.04166666%;margin-left:76.87499994%;}.gridsetoverlaywrap [class*=d11]{width:6.04166666%;margin-left:85.4166666%;}.gridsetoverlaywrap [class*=d12]{width:6.04166666%;margin-left:93.95833326%;}.gridsetoverlaywrap .d-hide{display:none !important;}}';
		
		if (areacount) {
			
			var j = areacount;
			
			while (j-- > 0) {
			
				var area = gridareas[j];
			
				breaks = gs.buildgrid(area, j, breaks, areacount);
				
				if (window.getComputedStyle(area,null).getPropertyValue("position") == 'static') area.style.position = 'relative';
				
			}
			
		}
		else {
			
			if (!b.className.match('gridsetnoareas')) b.className += ' gridsetnoareas';
			
			gs.buildgrid(b, j, breaks, areacount);
		
		}
		
		var newstyles = document.createElement('style'),
				newwidth = document.createElement('div');
		
		newstyles.id = 'gridsetoverlaystyles';
		newstyles.innerHTML = styles;
		newstyles.type = 'text/css';
		
		newwidth.id = 'gridscreenwidthwrap';
		newwidth.innerHTML = '<p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p>';
		
		b.appendChild(newstyles);
		b.appendChild(newwidth);
		
		gs.width();
		gs.bind(window, 'resize', gs.width);
	
	},
	
	buildgrid: function (area, j, breaks, showgrid) {
		
		var p = ['d','t','m'],
				c = [12,8,4],
				w = [960,768,320],
		
				gridwrap = document.createElement('div'),
				grid = (showgrid) ? '<div class="gridwrap"><div class="gridoverlay">' : '<div class="gridwrap"><div class="gridoverlay wrapper">',
				
				k = 0;
		
		if (showgrid) gridwrap.className = 'gridsetoverlaywrap';
		else gridwrap.className = 'gridsetoverlaywrap';
		
		while (p[k]) {
			
			if (area.className.match(p[k] + '-showgrid') || !showgrid) {
			
				var hides = '', 
						l = 0;
			
				if (w[k] != breaks && k == 0) grid += '<div>';
			
				while (p[l]) {
			
					if (l != k && w[l] != w[k]) hides += p[l] + '-hide ';
					l++;			
			
				}
			
				grid += '<div class="gridset ' + hides + '"><div class="'+p[k]+'1"><small>'+p[k]+'1</small></div>';
			
				var i = 1;
			
				while (i++ < c[k]) grid += '<div class="'+p[k]+i+'"><small>'+p[k]+i+'</small></div>';
			
				grid += '</div>';
			
				if (k == w.length - 1) grid += '</div>';
				
				breaks = w[k];
			
			}
		
			k++;
		
		}
		
		grid += '</div></div>';
		
		gridwrap.innerHTML = grid;
		
		area.appendChild(gridwrap);
		
		return breaks;
		
	},
	
	bind : function (t, e, f) {
		
		if (t.attachEvent) t.attachEvent('on' + e, f);
		else t.addEventListener(e, f, false);
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	}


};

gs.init();