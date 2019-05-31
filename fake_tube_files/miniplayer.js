(function(g){var window=this;var P4=function(a){g.KC.call(this,{B:"div",G:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.F=this.A=this.l=void 0;this.K(a,"minimized",this.vJ);this.K(a,"onStateChange",this.uM)},Q4=function(a){g.rK.call(this,a);
this.g=new P4(this.player);this.g.hide();g.dK(this.player,this.g.element,4);a.app.F.g&&(this.load(),g.K(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(P4,g.KC);g.h=P4.prototype;
g.h.show=function(){this.l=new g.Yn(this.GF,null,this);this.l.start();if(!this.H){this.D=new g.NV(this.player,this);g.G(this,this.D);g.dK(this.player,this.D.element,4);this.D.A=.6;this.O=new g.RU(this.player);g.G(this,this.O);this.C=new g.W({B:"div",G:"ytp-miniplayer-scrim"});g.G(this,this.C);this.C.g(this.element);this.K(this.C.element,"click",this.Xy);var a=new g.W({B:"button",V:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},J:[g.kP()]});
g.G(this,a);a.g(this.C.element);this.K(a.element,"click",this.xx);this.u=new g.W({B:"div",G:"ytp-miniplayer-controls"});g.G(this,this.u);this.u.g(this.C.element);this.K(this.u.element,"click",this.Xy);var b=new g.W({B:"div",G:"ytp-miniplayer-button-container"});g.G(this,b);b.g(this.u.element);a=new g.W({B:"div",G:"ytp-miniplayer-play-button-container"});g.G(this,a);a.g(this.u.element);var c=new g.W({B:"div",G:"ytp-miniplayer-button-container"});g.G(this,c);c.g(this.u.element);this.N=new g.VS(this.player,
this,!1);g.G(this,this.N);this.N.g(b.element);b=new g.SS(this.player,this);g.G(this,b);b.g(a.element);this.I=new g.VS(this.player,this,!0);g.G(this,this.I);this.I.g(c.element);this.F=new g.lU(this.player,this);g.G(this,this.F);this.F.g(this.C.element);this.A=new g.aT(this.player,this);g.G(this,this.A);g.dK(this.player,this.A.element,4);this.o=new g.W({B:"div",G:"ytp-miniplayer-buttons"});g.G(this,this.o);g.dK(this.player,this.o.element,4);this.o.hide();a=new g.W({B:"button",V:["ytp-miniplayer-close-button",
"ytp-button"],L:{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},J:[g.kP()]});g.G(this,a);a.g(this.o.element);this.K(a.element,"click",this.xx);a=new g.W({B:"button",V:["ytp-miniplayer-replay-button","ytp-button"],L:{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},J:[g.wP()]});g.G(this,a);a.g(this.o.element);this.K(a.element,"click",this.rK);this.K(this.player,"presentingplayerstatechange",this.HF);this.K(this.player,"appresize",this.ib);this.K(this.player,"fullscreentoggled",
this.ib);this.ib();this.H=!0}0!=this.player.getPlayerState()&&g.KC.prototype.show.call(this);this.A.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.l&&(this.l.dispose(),this.l=void 0);g.KC.prototype.hide.call(this);this.player.app.F.g||(this.H&&this.A.hide(),this.player.loadModule("annotations_module"))};
g.h.T=function(){this.l&&(this.l.dispose(),this.l=void 0);g.KC.prototype.T.call(this)};
g.h.xx=function(){this.player.stopVideo();this.player.la("onCloseMiniplayer")};
g.h.rK=function(){this.player.playVideo()};
g.h.Xy=function(a){if(a.target==this.C.element||a.target==this.u.element)g.Q(g.X(this.player).experiments,"kevlar_miniplayer_scrim_pause")?2==this.player.getPlayerState()?this.player.playVideo():this.player.pauseVideo():this.player.la("onExpandMiniplayer")};
g.h.vJ=function(){g.K(this.player.getRootNode(),"ytp-player-minimized",this.player.app.F.g);this.player.app.F.g&&0==this.player.getPlayerState()?this.o.show():this.o.hide()};
g.h.GF=function(){this.A.qd();this.F.qd();this.l&&this.l.start()};
g.h.HF=function(a){g.U(a.state,32)&&this.D.hide()};
g.h.ib=function(){var a=this.A,b=g.QJ(this.player).getPlayerSize().width;a.Ka=0;a.A=b;a.D=!1;g.cT(a)};
g.h.uM=function(a){this.player.app.F.g&&(0==a?(this.hide(),this.o.show()):(this.show(),this.o.hide()))};
g.h.bb=function(){return this.D};
g.h.zc=function(){return!1};
g.h.ug=function(){return!1};
g.h.hi=function(){return!1};
g.h.Fs=function(){};
g.h.Oh=function(){};
g.h.uj=function(){};
g.h.qk=function(){return null};
g.h.kr=function(){return new g.nh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Bn=function(a,b,c,d,e){var f=0,k=d=0,l=g.Sh(a);if(b){c=g.Qn(b,"ytp-prev-button")||g.Qn(b,"ytp-next-button");var m=g.Qn(b,"ytp-play-button");c?f=k=12:m&&(b=g.Ph(b,this.element),k=b.x,f=b.y-12)}else k=c-l.width/2,d=25+(e||0);b=g.QJ(this.player).getPlayerSize().width;e=f+(e||0);k=g.qd(k,0,b-l.width);e?(a.style.top=e+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=k+"px"};
g.h.showControls=function(){};
g.h.lr=function(){};
g.h.Ph=function(){};g.t(Q4,g.rK);Q4.prototype.init=function(){};
Q4.prototype.load=function(){this.player.hideControls();this.g.show()};
Q4.prototype.unload=function(){this.player.showControls();this.g.hide()};g.NU.miniplayer=Q4;})(_yt_player);
