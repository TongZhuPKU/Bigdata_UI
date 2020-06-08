/*
 Highcharts JS v8.1.0 (2020-05-05)

 Dependency wheel module

 (c) 2010-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/dependency-wheel",["highcharts","highcharts/modules/sankey"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,f,d,l){a.hasOwnProperty(f)||(a[f]=l.apply(null,d))}a=a?a._modules:{};d(a,"modules/dependency-wheel.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,
d){var f=d.animObject;d=d.seriesType;var l=a.seriesTypes.sankey.prototype;d("dependencywheel","sankey",{center:[null,null],curveFactor:.6,startAngle:0},{orderNodes:!1,getCenter:a.seriesTypes.pie.prototype.getCenter,createNodeColumns:function(){var a=[this.createNodeColumn()];this.nodes.forEach(function(c){c.column=0;a[0].push(c)});return a},getNodePadding:function(){return this.options.nodePadding/Math.PI},createNode:function(a){var c=l.createNode.call(this,a);c.index=this.nodes.length-1;c.getSum=
function(){return c.linksFrom.concat(c.linksTo).reduce(function(a,c){return a+c.weight},0)};c.offset=function(a){function h(a){return a.fromNode===c?a.toNode:a.fromNode}var p=0,b,g=c.linksFrom.concat(c.linksTo);g.sort(function(a,c){return h(a).index-h(c).index});for(b=0;b<g.length;b++)if(h(g[b]).index>c.index){g=g.slice(0,b).reverse().concat(g.slice(b).reverse());var n=!0;break}n||g.reverse();for(b=0;b<g.length;b++){if(g[b]===a)return p;p+=g[b].weight}};return c},translate:function(){var d=this.options,
c=2*Math.PI/(this.chart.plotHeight+this.getNodePadding()),n=this.getCenter(),h=(d.startAngle-90)*a.deg2rad;l.translate.call(this);this.nodeColumns[0].forEach(function(a){if(a.sum){var b=a.shapeArgs,g=n[0],p=n[1],f=n[2]/2,k=f-d.nodeWidth,m=h+c*b.y;b=h+c*(b.y+b.height);a.angle=m+(b-m)/2;a.shapeType="arc";a.shapeArgs={x:g,y:p,r:f,innerR:k,start:m,end:b};a.dlBox={x:g+Math.cos((m+b)/2)*(f+k)/2,y:p+Math.sin((m+b)/2)*(f+k)/2,width:1,height:1};a.linksFrom.forEach(function(a){if(a.linkBase){var b,e=a.linkBase.map(function(e,
n){e*=c;var f=Math.cos(h+e)*(k+1),m=Math.sin(h+e)*(k+1),l=d.curveFactor;b=Math.abs(a.linkBase[3-n]*c-e);b>Math.PI&&(b=2*Math.PI-b);b*=k;b<k&&(l*=b/k);return{x:g+f,y:p+m,cpX:g+(1-l)*f,cpY:p+(1-l)*m}});a.shapeArgs={d:[["M",e[0].x,e[0].y],["A",k,k,0,0,1,e[1].x,e[1].y],["C",e[1].cpX,e[1].cpY,e[2].cpX,e[2].cpY,e[2].x,e[2].y],["A",k,k,0,0,1,e[3].x,e[3].y],["C",e[3].cpX,e[3].cpY,e[0].cpX,e[0].cpY,e[0].x,e[0].y]]}}})}})},animate:function(a){if(!a){var c=f(this.options.animation).duration/2/this.nodes.length;
this.nodes.forEach(function(a,h){var d=a.graphic;d&&(d.attr({opacity:0}),setTimeout(function(){d.animate({opacity:1},{duration:c})},c*h))},this);this.points.forEach(function(a){var c=a.graphic;!a.isNode&&c&&c.attr({opacity:0}).animate({opacity:1},this.options.animation)},this)}}},{setState:a.NodesMixin.setNodeState,getDataLabelPath:function(a){var c=this.series.chart.renderer,d=this.shapeArgs,h=0>this.angle||this.angle>Math.PI,f=d.start,b=d.end;this.dataLabelPath||(this.dataLabelPath=c.arc({open:!0}).add(a));
this.dataLabelPath.attr({x:d.x,y:d.y,r:d.r+(this.dataLabel.options.distance||0),start:h?f:b,end:h?b:f,clockwise:+h});return this.dataLabelPath},isValid:function(){return!0}});""});d(a,"masters/modules/dependency-wheel.src.js",[],function(){})});
//# sourceMappingURL=dependency-wheel.js.map