(function(){function i(n){for(var t=sj_et(n),i,u;t!=null;){if(t.tagName.toLowerCase()=="a"){if(t.getAttribute("state")=="h")return;if(i=t.getAttribute("href"),!i||i.indexOf(".bing.com/ck")<0&&i.indexOf(".bing.com/ac")<0&&i.indexOf(".bing.com/clk")<0)return;if(u="",!t.hasAttribute("hover-url")){if(u=r(i,"u"),!u)return;Log.Log("HoverLink","Original","Hover",!1)}break}t=t.parentNode}}function r(n,t){var r=new RegExp("[?&]{1}"+t+"=([^&]+)([\\/\\\\][^?#]*)?([?#].*)?","i"),i=n.match(r);return i?i[1]:null}for(var t=_d.getElementsByTagName("a"),n=0;n<t.length;n++)typeof t[n]!="undefined"&&t[n].hasAttribute("href")&&(t[n].getAttribute("href").indexOf(".bing.com/ck")>=0||t[n].getAttribute("href").indexOf(".bing.com/ac")>=0||t[n].getAttribute("href").indexOf(".bing.com/clk")>=0)&&sj_be(t[n],"mouseenter",i)})()