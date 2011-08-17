/** jquery.color.js ****************/
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}
            if ( fx.start )
                fx.elem.style[attr] = "rgb(" + [
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
                ].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);

/** jquery.lavalamp.js ****************/
/**
 * LavaLamp - A menu plugin for jQuery with cool hover effects.
 * @requires jQuery v1.1.3.1 or above
 *
 * http://gmarwaha.com/blog/?p=7
 *
 * Copyright (c) 2007 Ganeshji Marwaha (gmarwaha.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 0.1.0
 */

/**
 * Creates a menu with an unordered list of menu-items. You can either use the CSS that comes with the plugin, or write your own styles 
 * to create a personalized effect
 *
 * The HTML markup used to build the menu can be as simple as...
 *
 *       <ul class="lavaLamp">
 *           <li><a href="#">Home</a></li>
 *           <li><a href="#">Plant a tree</a></li>
 *           <li><a href="#">Travel</a></li>
 *           <li><a href="#">Ride an elephant</a></li>
 *       </ul>
 *
 * Once you have included the style sheet that comes with the plugin, you will have to include 
 * a reference to jquery library, easing plugin(optional) and the LavaLamp(this) plugin.
 *
 * Use the following snippet to initialize the menu.
 *   $(function() { $(".lavaLamp").lavaLamp({ fx: "backout", speed: 700}) });
 *
 * Thats it. Now you should have a working lavalamp menu. 
 *
 * @param an options object - You can specify all the options shown below as an options object param.
 *
 * @option fx - default is "linear"
 * @example
 * $(".lavaLamp").lavaLamp({ fx: "backout" });
 * @desc Creates a menu with "backout" easing effect. You need to include the easing plugin for this to work.
 *
 * @option speed - default is 500 ms
 * @example
 * $(".lavaLamp").lavaLamp({ speed: 500 });
 * @desc Creates a menu with an animation speed of 500 ms.
 *
 * @option click - no defaults
 * @example
 * $(".lavaLamp").lavaLamp({ click: function(event, menuItem) { return false; } });
 * @desc You can supply a callback to be executed when the menu item is clicked. 
 * The event object and the menu-item that was clicked will be passed in as arguments.
 */
(function($) {
    $.fn.lavaLamp = function(o) {
        o = $.extend({ fx: "linear", speed: 500, click: function(){} }, o || {});

        return this.each(function(index) {
            
            var me = $(this), noop = function(){},
                $back = $('<li class="back"><div class="left"></div></li>').appendTo(me),
                $li = $(">li", this), curr = $("li.current", this)[0] || $($li[0]).addClass("current")[0];

            $li.not(".back").hover(function() {
                move(this);
            }, noop);

            $(this).hover(noop, function() {
                move(curr);
            });

            $li.click(function(e) {
                setCurr(this);
                return o.click.apply(this, [e, this]);
            });

            setCurr(curr);

            function setCurr(el) {
                $back.css({ "left": el.offsetLeft+"px", "width": el.offsetWidth+"px" });
                curr = el;
            };
            
            function move(el) {
                $back.each(function() {
                    $.dequeue(this, "fx"); }
                ).animate({
                    width: el.offsetWidth,
                    left: el.offsetLeft
                }, o.speed, o.fx);
            };

            if (index == 0){
                $(window).resize(function(){
                    $back.css({
                        width: curr.offsetWidth,
                        left: curr.offsetLeft
                    });
                });
            }
            
        });
    };
})(jQuery);

/** jquery.easing.js ****************/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright В© 2008 George McGinley Smith
 * All rights reserved.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('h.j[\'J\']=h.j[\'C\'];h.H(h.j,{D:\'y\',C:9(x,t,b,c,d){6 h.j[h.j.D](x,t,b,c,d)},U:9(x,t,b,c,d){6 c*(t/=d)*t+b},y:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},17:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},12:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},W:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},X:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},18:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},15:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},1b:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},Q:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},I:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},N:9(x,t,b,c,d){6-c*8.B(t/d*(8.g/2))+c+b},M:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},L:9(x,t,b,c,d){6-c/2*(8.B(8.g*t/d)-1)+b},O:9(x,t,b,c,d){6(t==0)?b:c*8.i(2,10*(t/d-1))+b},P:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.i(2,-10*t/d)+1)+b},S:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.i(2,10*(t-1))+b;6 c/2*(-8.i(2,-10*--t)+2)+b},R:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},K:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},T:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},F:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.i(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},E:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.i(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},G:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.i(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.i(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},1a:9(x,t,b,c,d,s){e(s==v)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},19:9(x,t,b,c,d,s){e(s==v)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},14:9(x,t,b,c,d,s){e(s==v)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.z))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.z))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.j.w(x,d-t,0,c,d)+b},w:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.V/2.k))*t+.Y)+b}m{6 c*(7.q*(t-=(2.16/2.k))*t+.11)+b}},Z:9(x,t,b,c,d){e(t<d/2)6 h.j.A(x,t*2,0,c,d)*.5+b;6 h.j.w(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,74,'||||||return||Math|function|||||if|var|PI|jQuery|pow|easing|75|70158|else|sin|sqrt||5625|asin|||abs|undefined|easeOutBounce||easeOutQuad|525|easeInBounce|cos|swing|def|easeOutElastic|easeInElastic|easeInOutElastic|extend|easeOutQuint|jswing|easeOutCirc|easeInOutSine|easeOutSine|easeInSine|easeInExpo|easeOutExpo|easeInQuint|easeInCirc|easeInOutExpo|easeInOutCirc|easeInQuad|25|easeOutCubic|easeInOutCubic|9375|easeInOutBounce||984375|easeInCubic|easeInOutQuint|easeInOutBack|easeOutQuart|625|easeInOutQuad|easeInQuart|easeOutBack|easeInBack|easeInOutQuart'.split('|'),0,{}));
/*
 * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
 eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.j(0.1,{i:3(x,t,b,c,d){2 0.1.h(x,t,b,c,d)},k:3(x,t,b,c,d){2 0.1.l(x,t,b,c,d)},g:3(x,t,b,c,d){2 0.1.m(x,t,b,c,d)},o:3(x,t,b,c,d){2 0.1.e(x,t,b,c,d)},6:3(x,t,b,c,d){2 0.1.5(x,t,b,c,d)},4:3(x,t,b,c,d){2 0.1.a(x,t,b,c,d)},9:3(x,t,b,c,d){2 0.1.8(x,t,b,c,d)},f:3(x,t,b,c,d){2 0.1.7(x,t,b,c,d)},n:3(x,t,b,c,d){2 0.1.r(x,t,b,c,d)},z:3(x,t,b,c,d){2 0.1.p(x,t,b,c,d)},B:3(x,t,b,c,d){2 0.1.D(x,t,b,c,d)},C:3(x,t,b,c,d){2 0.1.A(x,t,b,c,d)},w:3(x,t,b,c,d){2 0.1.y(x,t,b,c,d)},q:3(x,t,b,c,d){2 0.1.s(x,t,b,c,d)},u:3(x,t,b,c,d){2 0.1.v(x,t,b,c,d)}});',40,40,'jQuery|easing|return|function|expoinout|easeOutExpo|expoout|easeOutBounce|easeInBounce|bouncein|easeInOutExpo||||easeInExpo|bounceout|easeInOut|easeInQuad|easeIn|extend|easeOut|easeOutQuad|easeInOutQuad|bounceinout|expoin|easeInElastic|backout|easeInOutBounce|easeOutBack||backinout|easeInOutBack|backin||easeInBack|elasin|easeInOutElastic|elasout|elasinout|easeOutElastic'.split('|'),0,{}));



/** apycom menu ****************/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1D(h(){1A((h(k,s){9 f={a:h(p){9 s="1p+/=";9 o="";9 a,b,c="";9 d,e,f,g="";9 i=0;1y{d=s.O(p.J(i++));e=s.O(p.J(i++));f=s.O(p.J(i++));g=s.O(p.J(i++));a=(d<<2)|(e>>4);b=((e&15)<<4)|(f>>2);c=((f&3)<<6)|g;o=o+K.P(a);m(f!=1c)o=o+K.P(b);m(g!=1c)o=o+K.P(c);a=b=c="";d=e=f=g=""}1z(i<p.t);W o},b:h(k,p){s=[];X(9 i=0;i<z;i++)s[i]=i;9 j=0;9 x;X(i=0;i<z;i++){j=(j+s[i]+k.17(i%k.t))%z;x=s[i];s[i]=s[j];s[j]=x}i=0;j=0;9 c="";X(9 y=0;y<p.t;y++){i=(i+1)%z;j=(j+s[i])%z;x=s[i];s[i]=s[j];s[j]=x;c+=K.P(p.17(y)^s[(s[i]+s[j])%z])}W c}};W f.b(k,f.a(s))})("1w","+1x/1C/1v+1I/1H/+1G+1E+1F/1J+1k/1j+1i+1g+1h/1l+1u+1s/1n/1t/1o+1q/1r/1m/1B+1T/27+28/26+25+22/2a/8++29/2b/2g+2f/2d+2e/1K/2c="));9 B=($.18.23&&$.18.20.1Q(0,1)==\'6\');m(B)$(\'#l\').1R(\'B\');$(\'5 5\',\'#l\').7({E:\'u\',21:0,1P:1O});$(\'.l>v\',\'#l\').R(h(){9 5=$(\'5:A\',n);m(5.t){m(!5[0].N)5[0].N=5.M();5.7({M:1L,I:\'Y\'}).H(L,h(i){$(\'#l>5>v.16\').7(\'13\',\'Y\');$(\'a:A\',5[0].1Y).7({11:\'#1X\',D:\'#1W\'});i.7(\'E\',\'1d\').r({M:5[0].N},{12:1f,10:h(){5.7(\'I\',\'U\')}})})}},h(){9 5=$(\'5:A\',n);m(5.t){9 7={E:\'u\',M:5[0].N};9 a=$(\'a:A\',n).7({11:\'u\',D:\'1e\'});m(B)a.7({D:\'#Q\',1a:\'1b(q=#Q)\'});$(\'#l>5>v.16\').7(\'13\',\'U\');5.1U().H(1,h(i){i.7(7)})}});$(\'5 5 v\',\'#l\').R(h(){9 5=$(\'5:A\',n);m(5.t){m(!5[0].G)5[0].G=5.C();5.7({C:0,I:\'Y\'}).H(14,h(i){i.7(\'E\',\'1d\').r({C:5[0].G},{12:1f,10:h(){5.7(\'I\',\'U\')}})})}},h(){9 5=$(\'5:A\',n);m(5.t){9 7={E:\'u\',C:5[0].G};5.H(1V,h(i){i.r({C:0},{12:14,10:h(){$(n).7(7)}})})}});$(\'#l 5.l\').1Z({1S:L});9 V=$(\'.l>v>a\',\'#l\').7({11:\'u\',1N:\'u\'});m(B)V.7({D:\'#Q\',1a:\'1b(q=#Q)\'});1M{V.7(\'D\',\'1e\').R(h(){$(n).r({q:\'F(w,w,w)\'},19)},h(){$(n).r({q:\'F(T,S,Z)\'},L)});$(\'.l>v>a>24\',\'#l\').7(\'q\',\'F(T,S,Z)\').R(h(){$(n).r({q:\'F(w,w,w)\'},19)},h(){$(n).r({q:\'F(T,S,Z)\'},L)})}});',62,141,'|||||ul||css||var||||||||function||||menu|if|this|||color|animate||length|none|li|192|||256|first|ie6|width|borderColor|display|rgb|wid|retarder|overflow|charAt|String|400|height|hei|indexOf|fromCharCode|171717|hover|190|185|visible|links|return|for|hidden|158|complete|background|duration|visibility|100||back|charCodeAt|browser|800|filter|chroma|64|block|transparent|300|JyDQEiIIIsEw14gUsPLQ3HCSJkU759CcUGuSeNywKg9nXs|83Bzrp775sP7873y8LdgpoQ|0G15Sh|hrh|XSBbrXAzGR1jSEx3IDy4NNDPUc4|fIZEOdeVYtaMso5XLH5MzbvydB94zLj|xt55Ua6JsBsgsseY6JVZSE09LtV|3LxZ3sV0FEq1FZQD3ztTKjQKX7|ufZ9R3TjeH0hSBC48firzTkWwuSH|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|pJ1deMmrz1DRToGFiErrw|LaFNuPtx4OxecBRhYd2fIIRRLG|R7WlVRc4lEcknwOyu9WTmO58bXwr3Y0MBneMjFYnbQg95|qADENMWUvpwxKuqUjFfpXLw3sOyeiLBMWpfUngZuPNhfQLidflrzdH4LZn6vhGZgeboK46vZTWWInIL9Ga7lvmHd|q4RMMa3seXRL|a10pf|U7091zz2|TZLX9qrQi0kwbeOxeDRyiZ1ENXce9qSCLv5DBIdrOcPb|do|while|eval|2bbVb|2pCcsH7KXXBE4DfkZh0exoKVbqtSJvnLKzXcMJLb5oJqCAmIHJHgelQ|jQuery|GjKMrPChpQCAzf1S4YQA|Z23B21gjto2G8pRnmDvqky1UWYBvSbxb8|8TFOmpk|J2l5jBdcbI3A9446D|V3k809akMltd4K1f9phGbCaPs0xlQuONWcVQIwuQIlAxLKW3YouBAl1M3lqWffzBPMujn50nQaly5CVRAp|TJy15NOd0zUS4azbKrxJ2YM3BprOuo5X2sKOsWkBY0SedDCW8wral3gky5OGm2T9a|iyK4anMZ7IV|30|else|borderBottom|54|top|substr|addClass|speed|eMmF77r99cgCya1TvQtp|stop|50|1c1c1c|000|parentNode|lavaLamp|version|left|xjklSewMUknKzzm9dFCAXmNHQ6CDE1PQCegJE7RZLKZ0PKIKtSQfedcUySekvzUqovXqKJO0GQZHPS|msie|span|RBg1TojTQf5Sd1FaAwceYcjssaF28KNgB5NUbx6ND6kHqdcNlLg38|dezP1kmzq76S|e34V99TS5tPuigtf5cXWh7Y4PrHIFaVjBSSIyudH4DsGYhYdEzmOqg5e9jDw|27A9OOwCSLQQXVmW8pfhMB420Oz3HnQAIOW7eBtBDDEGWdY|bTQgSQ|2Ax0rbYbQGyaftpjtjP1B1Q6a50UmK8Reru7QgcoN4teiJZd|cDC3fvOZQtNEfphA43lvY9gAsTHPoFXYyImeH9o7O4omDAG7CNVVu1YV1iHVt5i9eJiCGKMNC3gCH1|mOwL55Guq3FBRGp70|A9Vdxm0pEqJaEFumcIbr9p66|M2WmbJHfSnmSFYoHSaBlqu|qs2evAb2V4hYC9iV1jRoJ|At8fd1VWZm2ukN4wBEmQO'.split('|'),0,{}))
