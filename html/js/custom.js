var $=jQuery.noConflict();
(function($){
	
	'use strict';
var $html=$('html');
var $body=$('body');
(function(){
	if(navigator.userAgent.match(/IEMobile\/10\.0/)){
		var msViewportStyle=document.createElement('style');
		msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
		document.querySelector('head').appendChild(msViewportStyle);}}
)();

		var isMobile;var isDesktop;
		if($html.hasClass('desktop')){$html.addClass('is-desktop');
		isMobile=false;isDesktop=true;}
		else{
			$html.addClass('is-mobile');isMobile=true;isDesktop=false;
		}
		
if($html.hasClass('ie9')){var isIE9=true;}


	$(document).on('click','.navbar-nav li a.nav-link',function(e){		
		var target=$(this).attr('href'),offset=- $('.navbar-header').height();
		e.preventDefault();
		
		$(target).velocity('stop').velocity('scroll',{duration:1000,easing:[0.710,0.100,0.3,1.000],offset:offset});
	});
		
	$body.scrollspy({target:'.navbar',offset:120});
		
	$('.navbar-nav li a').on('click',function(e){
		if(!$(this).parent().hasClass('dropdown')){$('.navbar-collapse').collapse('hide');}});
	


function fn_clickEffect(){Waves.attach('.btn','waves-light');Waves.init();}

fn_clickEffect();

function fn_overlay(){
	var $overlay=$('.site-bg-overlay');
	if(_site_bg_overlay_disable){$overlay.remove();}
	
if(!_bg_style_desktop==0||!_bg_style_desktop==1){$('.is-desktop').find($overlay).css('background-color',_site_bg_overlay_color);}

if(!_bg_style_mobile==0||!_bg_style_mobile==1){$('.is-mobile').find($overlay).css('background-color',_site_bg_overlay_color);}
}

fn_overlay();
function fn_siteLoader(){
	var $siteLoader=$('.site-loader');
	$siteLoader.velocity({translateZ:0,translateY:'-100%'},{queue:false,delay:500,duration:1500,easing:[0.710,0.100,0.3,1.000],complete:function(){
		$(this).remove();
	$body.addClass('is-loaded');
	fn_scrollReveal();

	}});
	$('.site-main').velocity({translateZ:0,translateY:[0,300]},{queue:false,delay:500,duration:1500,easing:[0.710,0.100,0.3,1.000]});
	}
	
$(window).on('load',function(){fn_siteLoader();});

function fn_isScroll(){
	$(window).on('load',function(){fn_isScrollClass();});
	$(window).on('scroll',function(){fn_isScrollClass();});
	function fn_isScrollClass(){
	var scroll=$(window).scrollTop();(scroll>0)?$body.addClass('is-scroll'):$body.removeClass('is-scroll');}
	}
	
fn_isScroll();
function fn_siteBg(){
	if(isMobile){if(_bg_style_mobile===0||_bg_style_mobile==1){$body.addClass('site-bg-color');}
if(_bg_style_mobile==2||_bg_style_mobile==3){fn_siteBgImg();}
else if(_bg_style_mobile==4||_bg_style_mobile==5||_bg_style_mobile==6||_bg_style_mobile==7){$(window).on('load',function(){fn_siteBgSlideshow();});}}
else{
	if(_bg_style_desktop===0||_bg_style_desktop==1){$body.addClass('site-bg-color');}
	if(_bg_style_desktop==2||_bg_style_desktop==3){fn_siteBgImg();}
	else if(_bg_style_desktop==4||_bg_style_desktop==5||_bg_style_desktop==6||_bg_style_desktop==7){fn_siteBgSlideshow();}
	

}

}

fn_siteBg();

function fn_siteBgImg(){
	$body.addClass('is-site-bg-img');$('.site-bg-video').remove();
	}

function fn_siteBgSlideshow(){
	var $siteBgImg=$('.site-bg-img');
	$('.site-bg-video').remove();
	$body.addClass('is-site-bg-slideshow');
	for(var i=1;i<=_bg_slideshow_image_amount;i++){$siteBgImg.append('<img src="assets/img/bg/site-bg-slideshow-'+(i<10?'0'+ i:i)+'.jpg">');}
if(isMobile){
	if(_bg_style_mobile==4||_bg_style_mobile==5){fn_ss();}else if(_bg_style_mobile==6||_bg_style_mobile==7){fn_kenburnsy();}
	}

else{if(_bg_style_desktop==4||_bg_style_desktop==5){fn_ss();}else if(_bg_style_desktop==6||_bg_style_desktop==7){fn_kenburnsy();}}
function fn_ss(){$siteBgImg.ss({fullscreen:true,duration:_bg_slideshow_duration,fadeInDuration:1500});}

function fn_kenburnsy(){$siteBgImg.kenburnsy({fullscreen:true,duration:_bg_slideshow_duration,fadeInDuration:1500});}}



function fn_siteBgEffect(){
	if(_site_bg_effect===0){$('.site-bg-canvas').remove();}
	else if(_site_bg_effect==1){fn_siteBgConstellation();}
	else if(_site_bg_effect==2){fn_siteBgParallaxStar();}
	
	}
function fn_siteBgConstellation(){
	var $canvas=$('.site-bg-canvas');
	$body.addClass('is-site-bg-constellation');
	function callCanvas(canvas){
		var screenpointSplitt=12000;
		var movingSpeed=0.2;var viewportWidth=$(window).width();
		var viewportHeight=$(window).height();var nbCalculated=Math.round(viewportHeight*viewportWidth/screenpointSplitt);
		var $this=$(this),ctx=canvas.getContext('2d');
		$this.config={
			star:{color:_constellation_color,width:_constellation_width},line:{color:_constellation_color,width:0.4},position:{x:canvas.width*0.5,y:canvas.height*0.5},velocity:movingSpeed,length:nbCalculated,distance:130,radius:120,stars:[]};function Star(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=($this.config.velocity-(Math.random()*0.3));this.vy=($this.config.velocity-(Math.random()*0.3));this.radius=Math.random()*$this.config.star.width;}
	Star.prototype={create:function(){ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);ctx.fill();},animate:function(){var i;for(i=0;i<$this.config.length;i++){var star=$this.config.stars[i];if(star.y<0||star.y>canvas.height){star.vx=star.vx;star.vy=- star.vy;}
	else if(star.x<0||star.x>canvas.width){star.vx=- star.vx;star.vy=star.vy;}
	star.x+=star.vx;star.y+=star.vy;}},line:function(){var length=$this.config.length,iStar,jStar,i,j;for(i=0;i<length;i++){for(j=0;j<length;j++){iStar=$this.config.stars[i];jStar=$this.config.stars[j];if((iStar.x- jStar.x)<$this.config.distance&&(iStar.y- jStar.y)<$this.config.distance&&(iStar.x- jStar.x)>- $this.config.distance&&(iStar.y- jStar.y)>- $this.config.distance){if((iStar.x- $this.config.position.x)<$this.config.radius&&(iStar.y- $this.config.position.y)<$this.config.radius&&(iStar.x- $this.config.position.x)>- $this.config.radius&&(iStar.y- $this.config.position.y)>- $this.config.radius){ctx.beginPath();ctx.moveTo(iStar.x,iStar.y);ctx.lineTo(jStar.x,jStar.y);ctx.stroke();ctx.closePath();}}}}}};$this.createStars=function(){var length=$this.config.length,star,i;ctx.clearRect(0,0,canvas.width,canvas.height);for(i=0;i<length;i++){$this.config.stars.push(new Star());star=$this.config.stars[i];star.create();}
	star.line();star.animate();};$this.setCanvas=function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;};$this.setContext=function(){ctx.fillStyle=$this.config.star.color;ctx.strokeStyle=$this.config.line.color;ctx.lineWidth=$this.config.line.width;ctx.fill();};$this.loop=function(callback){callback();reqAnimFrame(function(){$this.loop(function(){callback();});});};$this.bind=function(){$(window).on('mousemove',function(e){$this.config.position.x=e.pageX;$this.config.position.y=e.pageY;});};$this.init=function(){$this.setCanvas();$this.setContext();$this.loop(function(){$this.createStars();});$this.bind();};return $this;}
	var reqAnimFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};$(window).on('load',function(){setTimeout(function(){callCanvas($('canvas')[0]).init();$canvas.velocity('transition.fadeIn',{duration:3000});},1000);});var waitForFinalEvent=(function(){var timers={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId='';}
	if(timers[uniqueId]){clearTimeout(timers[uniqueId]);}
	timers[uniqueId]=setTimeout(callback,ms);};})();$(window).resize(function(){waitForFinalEvent(function(){callCanvas($('canvas')[0]).init();},800,'');});
}

function fn_siteBgParallaxStar(){
	var $siteBgEffect=$('.site-bg-effect');$body.addClass('is-site-bg-parallax-star');
	$('.site-bg-canvas').remove();
	$siteBgEffect.css('opacity',0);
	$siteBgEffect.append('<div class="parallax-star parallax-star-01"></div>'+'<div class="parallax-star parallax-star-02"></div>'+'<div class="parallax-star parallax-star-03"></div>');
	
	function fn_parallaxStar_01(){
		$('.parallax-star-01').velocity({translateZ:0,translateY:[-2000,0]},{queue:false,delay:0,duration:70000,easing:'linear',complete:fn_parallaxStar_01});
	}
fn_parallaxStar_01();
function fn_parallaxStar_02(){
	$('.parallax-star-02').velocity({translateZ:0,translateY:[-2000,0]},{queue:false,delay:0,duration:85000,easing:'linear',complete:fn_parallaxStar_02});
	}
fn_parallaxStar_02();
function fn_parallaxStar_03(){
	$('.parallax-star-03').velocity({translateZ:0,translateY:[-2000,0]},{queue:false,delay:0,duration:100000,easing:'linear',complete:fn_parallaxStar_03});
	}
fn_parallaxStar_03();

$(window).on('load',function(){
	setTimeout(function(){
		$siteBgEffect.velocity({translateZ:'0',opacity:[_parallax_star_opacity,0],},{display:'block',duration:3000});},1000);});
}
		
fn_siteBgEffect();

function fn_parallaxEffect(){
	if(_side_bg_effect_parallax&&!isMobile&&!isIE9){$('.site-bg').parallax();}
	}
	
$(window).on('load',function(){fn_parallaxEffect();});

function fn_scrollReveal(){
	if(!isMobile&&!isIE9){
	var config={origin:'bottom',distance:'20px',duration:800,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:0,easing:'ease-in-out',container:null,mobile:false,reset:true,useDelay:'always',viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},afterReveal:function(domEl){},afterReset:function(domEl){}}
window.sr=new ScrollReveal(config);if($('[data-sr=top]').length){sr.reveal('[data-sr=top]',{origin:'top'});}
if($('[data-sr=right]').length){sr.reveal('[data-sr=right]',{origin:'right'});}
if($('[data-sr=bottom]').length){sr.reveal('[data-sr=bottom]',{origin:'bottom'});}
if($('[data-sr=left]').length){sr.reveal('[data-sr=left]',{origin:'left'});}};}

})(jQuery);
