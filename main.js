"use strict";

var players = [];

function a() {
  var b;
  var c;
  function error(d) {
    window.removeEventListener("error", error);
    c = d.lineno + " " + d.colno + " " + d.message;
    if (e && e.f === 1) {
      try {
        g.h();
        i.j(4, 5, new k("🤖 Beep Boop! An error occurred.",c + "<br>Please report this error message to davidtschacher@gmail.com. Please also describe the actions you took before this error occurred.",true,[new l("🔄 Reload",function() {
          m.n.o();
        }
        ,p.q)]));
      } catch (d) {
        console.log("error 3421: " + d);
      }
    }
    b = new WebSocket("wss://territorial.io/s52/");
    b.onopen = r;
    b.onclose = function() {
      s();
    }
    ;
  }
  function r() {
    if (!b || b.readyState !== b.OPEN) {
      return;
    }
    var t = new u();
    t.v(1 + 6 + 2 + 1 + 1 + 1 + 16 * 100);
    t.w(1, 0);
    t.w(6, 7);
    t.w(2, m ? m.id : 3);
    t.w(1, x ? 1 : 0);
    t.w(1, y ? 1 : 0);
    t.w(1, e ? e.f : 0);
    for (var z = 0; z < c.length && z < 100; z++) {
      t.w(16, c.charCodeAt(z));
    }
    b.send(t.a0);
    s();
  }
  function s() {
    if (!b) {
      return;
    }
    b.onclose = null;
    b.onopen = null;
    b = null;
  }
  window.addEventListener("error", error);
}
a();
var e;
var a1;
var a2;
var a3;
var a4;
var a5;
var a6;
var a7;
var a8;
var a9;
var aA;
var aB;
var aC;
var aD;
var aE;
var aF;
var aG;
var aH;
var aI;
var aJ;
var aK;
var aL;
var aM;
var aN;
var aO;
var aP;
var aQ;
var aR;
var aS;
var aT;
var aU;
var aV;
var aW;
var aX;
var aY;
var aZ;
var aa;
var ab;
var ac;
var ad;
var ae;
var af;
var ag;
var ah;
var ai;
var aj;
var ak;
var al;
var am;
var an;
var ao;
var ap;
var aq;
var ar;
var at;
var au;
var av;
var aw;
var ax;
var ay;
var az;
var b0;
var b1;
var b2;
var p;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var bA;
var bB;
var bC;
var bD;
var bE;
var bF;
var bG;
var bH;
var bI;
var bJ;
var i;
var bK;
var bL;
var bM;
var bN;
var bO;
var bP;
var bQ;
var bR;
var bS;
var bT;
var bU;
var bV;
var bW;
var m;
var bX;
var bY;
var bZ;
var g;
var ba;
function bb(bc) {
  if (e && !bc) {
    return;
  }
  function bd() {
    be();
    bB = new bf();
    bA = new bg();
    b2 = new bh();
    p = new bi();
    a1 = new bj();
    az = new bk();
    b5 = new bl();
    b6 = new bm();
    a2 = new bn();
    a3 = new bo();
    a4 = new bp();
    a5 = new bq();
    a6 = new br();
    a7 = new bs();
    a8 = new bt();
    a9 = new bu();
    aA = new bv();
    aB = new bw();
    aC = new bx();
    aD = new by();
    aE = new bz();
    aF = new c0();
    aG = new c1();
    aH = new c2();
    aI = new c3();
    aJ = new c4();
    aK = new c5();
    aL = new c6();
    aM = new c7();
    aN = new c8();
    aO = new c9();
    aP = new cA();
    aQ = new cB();
    aR = new cC();
    aZ = new cD();
    aa = new cE();
    ab = new cF();
    aS = new cG();
    aT = new cH();
    aW = new cI();
    aU = new cJ();
    aV = new cK();
    aX = new cL();
    ap = new cM();
    aY = new cN();
    ad = new cO();
    ae = new cP();
    af = new cQ();
    aq = new cR();
    ao = new cS();
    ac = new cT();
    ag = new cU();
    ah = new cV();
    ai = new cW();
    an = new cX();
    aj = new cY();
    ak = new cZ();
    al = new ca();
    am = new cb();
    ar = new cc();
    at = new cd();
    au = new ce();
    av = new cf();
    aw = new cg();
    ax = new ch();
    ay = new ci();
    b0 = new cj();
    b1 = new ck();
    b3 = new cl();
    b4 = new u();
    b7 = new cm();
    b8 = new cn();
    b9 = new co();
    bC = new cp();
    bD = new cq();
    bE = new cr();
    bF = new cs();
    bG = new ct();
    bH = new cu();
    bI = new cv();
    bJ = new cw();
    i = new cx();
    bK = new cy();
    m = new cz();
    e = new d0();
    bX = new d1();
    bY = new d2();
    bV = new d3();
    bW = new d4();
    bP = new d5();
    bQ = new d6();
    bL = new d7();
    bM = new d8();
    bS = new d9();
    bT = new dA();
    bU = new dB();
    bZ = new dC();
    bR = new dD();
    g = new dE();
    ba = new dF();
  }
  function dG() {
    e.dH();
    m.dH();
    an.dI();
    bY.dH();
    az.dH();
    az.dJ();
    ba.dH();
    b2.dH();
    aR.dH();
    bL.dH();
    aq.dH();
    b5.dH();
    b6.dH();
    bI.dH();
    i.dH();
    bN = new dK();
    an.dH();
    m.n.dL();
    bU.dH();
    bR.dH();
    bM.dH();
    bO = new dM();
    ao.dH();
    aT.dN();
    bK.dH();
    ad.dH();
    aN.dH();
    ax.dH();
    aG.dH();
    aX.dH();
    b9.dH();
    aP.dH();
    bU.dO = true;
    setTimeout(function() {
      bI.loadMap(2, 14071);
    }, 0);
    i.j(5, 5);
    if (!b8.dP()) {
      m.n.dQ();
    }
    an.dR();
  }
  bd();
  dG();
  e.f = 1;
}
var dS;
var dT;
var dU;
var x;
var dV;
var y;
function d0() {
  this.dW = 1068;
  this.dH = function() {
    dS = 2;
    dU = 34 % 512; // 33 % 512
    dT = "15 Sep 2024 [1.99.7.8]";
    x = window.location.hostname.toLowerCase().indexOf("territorial.io") >= 0;
    y = dX();
    dV = (new Date()).getTime() % 1024;
  }
  ;
  this.f = 0;
  function dX() {
    try {
      return window.self !== window.top;
    } catch (d) {
      return true;
    }
  }
}
function dF() {
  this.id = new dY();
  this.dH = function() {
    this.id.dH();
  }
  ;
}
function dY() {
  this.dH = function() {
    if (bY.dZ.data[181].value !== 0) {
      return;
    }
    bY.dZ.da(180, Math.floor(Math.random() * bB.pow(30)));
    bY.dZ.da(181, Math.floor((new Date()).getTime() / (1000 * 60 * 60)));
  }
  ;
}
function cy() {
  this.db = new dc();
  this.dd = new de();
  this.dH = function() {
    m.n.df();
  }
  ;
}
function dc() {
  var dg = false;
  var dh = 0;
  this.dH = function() {
    if (!di()) {
      return;
    }
    dg = true;
    window.aiptag = window.aiptag || {
      cmd: []
    };
    aiptag.cmd.display = aiptag.cmd.display || [];
    aiptag.cmd.player = aiptag.cmd.player || [];
    aiptag.cmp = {
      show: true,
      position: "centered",
      button: true,
      buttonText: "Privacy Settings",
      buttonPosition: "bottom-center"
    };
    aiptag.cmd.player.push(function() {
      aiptag.adplayer = new aipPlayer({
        AD_WIDTH: 960,
        AD_HEIGHT: 540,
        AD_DISPLAY: "fullscreen",
        LOADING_TEXT: "loading advertisement",
        PREROLL_ELEM: function() {
          return document.getElementById("videoad");
        },
        AIP_COMPLETE: dj
      });
    });
    dk();
    dl();
  }
  ;
  function dk() {
    var dm = document.createElement("div");
    dm.id = "videoad";
    document.body.appendChild(dm);
  }
  function dl() {
    var dn = document.createElement("script");
    dn.async = true;
    dn.src = "//api.adinplay.com/libs/aiptag/pub/TRT/territorial.io/tag.min.js";
    document.head.appendChild(dn);
  }
  this.dp = function() {
    if (!dq()) {
      return false;
    }
    aiptag.cmd.player.push(function() {
      aiptag.adplayer.startVideoAd();
    });
    return true;
  }
  ;
  function dj(dr) {}
  this.hideCMPButton = function() {
    if (typeof aipAPItag !== "undefined" && aipAPItag.hideCMPButton) {
      aipAPItag.hideCMPButton();
    }
  }
  ;
  this.showCMPButton = function() {
    if (typeof aipAPItag !== "undefined" && aipAPItag.showCMPButton) {
      aipAPItag.showCMPButton();
    }
  }
  ;
  this.showCMPScreen = function() {
    if (!dq()) {
      return;
    }
    aipAPItag.showCMPScreen();
  }
  ;
  function di() {
    return false && m.id === 0 && x;
  }
  function dq() {
    if (!(di() && typeof aipAPItag !== "undefined" && typeof aiptag.adplayer !== "undefined" && aiptag.adplayer.startVideoAd && aipAPItag.showCMPButton && aipAPItag.hideCMPButton)) {
      return false;
    }
    if (dh === 0) {
      dh = bU.ds;
    }
    return bU.ds > dh + 500;
  }
}
function de() {
  var ds = 1000 * 20;
  this.show = function() {
    if (bU.ds < ds) {
      return false;
    }
    var dt = 22.5 * 60 * 1000;
    ds = bU.ds + dt;
    if (dS !== 2) {
      return;
    }
    m.n.du(Math.floor(dt));
  }
  ;
}
function cF() {
  this.dv = new dw();
}
function dw() {
  this.dx = function(dy) {
    var dz = aQ.e0(dy);
    if (!this.e1(a1.e2, dz) && !this.e3(a1.e2, dz)) {
      return 0;
    }
    var e4 = e5(bC.e6(dy));
    if (e4 === 0) {
      return 0;
    }
    var e7 = bC.e8(e4);
    if (aQ.e9(e7)) {
      return e4;
    }
    var player = aQ.eA(e7);
    if (player === a1.e2) {
      return 0;
    }
    if (eB(player, a1.e2)) {
      return e4;
    }
    return 0;
  }
  ;
  this.eC = function(player, e4) {
    var dy = bC.e8(e4);
    if (!aQ.eD(dy)) {
      return false;
    }
    if (aQ.e9(dy)) {
      bE.eE[0] = a1.eF;
    } else if (aQ.eA(dy) !== bE.eE[0]) {
      return false;
    }
    var eG = eH(dy);
    var eI = eG.length;
    for (var z = 0; z < eI; z++) {
      if (!this.e1(player, eG[z]) && !this.e3(player, eG[z])) {
        continue;
      }
      bE.eJ[0] = bE.eJ[z];
      return true;
    }
    return false;
  }
  ;
  function eH(dy) {
    var eK = aQ.eK;
    var eG = [];
    loop: for (var eL = 3; eL >= 0; eL--) {
      var eM = dy + eK[eL];
      if (aQ.eN(eM)) {
        var id = aQ.e0(eM);
        for (var z = 0; z < eG.length; z++) {
          if (id === eG[z]) {
            continue loop;
          }
        }
        bE.eJ[eG.length] = eM;
        eG.push(id);
      }
    }
    return eG;
  }
  function e5(eO) {
    var eP = bC.eQ(eO);
    var eR = bC.eS(eO);
    var max = Math.max(bI.eT, bI.eU) - 2;
    var eV = max * max;
    var eW = false;
    var eX = 0;
    for (var eY = 0; eY < max; eY++) {
      var e4 = dP(eP, eR, eY);
      if (!e4) {
        continue;
      }
      var eZ = bC.ea(eP, eR, e4);
      if (eZ < eV) {
        eX = e4;
        eV = eZ;
        if (!eW) {
          eW = true;
          max = Math.floor(Math.sqrt(eZ)) + 1;
        }
      }
    }
    return eX;
  }
  function dP(eP, eR, eY) {
    for (var z = 0; z <= eY; z++) {
      for (var eb = -1; eb < 2; eb += 2) {
        for (var ec = -1; ec < 2; ec += 2) {
          for (var ed = 0; ed < 2; ed++) {
            var dy = ee(eP + ed * eb * z + (1 - ed) * ec * eY, eR + ed * ec * eY + (1 - ed) * eb * z);
            if (dy) {
              return dy;
            }
          }
        }
      }
    }
    return 0;
  }
  function ee(eP, eR) {
    if (!bC.ef(eP, eR)) {
      return 0;
    }
    var e4 = bC.eg(eP, eR);
    var dy = bC.e8(e4);
    if (aQ.eD(dy) && aQ.eh(dy)) {
      return e4;
    }
    return 0;
  }
  this.e1 = function(player, dz) {
    var ei = aV.ei[player];
    var eI = ei.length;
    var ej = Math.max(bB.ek(eI, 12), 1);
    var eK = aQ.eK;
    for (var z = 0; z < eI; z += ej) {
      var e7 = ei[z];
      for (var eL = 3; eL >= 0; eL--) {
        var eM = e7 + eK[eL];
        if (aQ.eN(eM) && dz === aQ.e0(eM)) {
          return true;
        }
      }
    }
    return false;
  }
  ;
  this.e3 = function(player, dz) {
    var ei = aV.ei[player];
    var eI = ei.length;
    var eK = aQ.eK;
    for (var z = 0; z < eI; z++) {
      var e7 = ei[z];
      for (var eL = 3; eL >= 0; eL--) {
        var eM = e7 + eK[eL];
        if (aQ.eN(eM) && dz === aQ.e0(eM)) {
          return true;
        }
      }
    }
    return false;
  }
  ;
}
self.aiCommand746 = function(el) {
  if (el === 0) {
    bb();
    return;
  }
  if (el === 1) {
    if (!m) {
      return;
    }
    if (m.id !== 1 || m.em < 14) {
      return;
    }
    b9.en();
  }
}
;
function cr() {
  this.eo = new Uint16Array(2);
  this.ep = new Uint16Array(2);
  this.eq = new Uint32Array(2);
  this.er = new Uint32Array(2);
  this.es = new Uint8Array(4);
  this.et = new Uint8Array(4);
  this.eJ = new Uint32Array(4);
  this.eu = new Uint32Array(5);
  this.eE = new Uint32Array(8);
  this.ev = new Uint16Array(16);
  this.ew = new Uint16Array(512);
  this.ex = function(ey, ez) {
    ey[0] = ez;
    return ey;
  }
  ;
  this.f0 = function(ey, ez, f1) {
    ey[0] = ez;
    ey[1] = f1;
    return ey;
  }
  ;
  this.f2 = function(ey, ez, f1, f3) {
    ey[0] = ez;
    ey[1] = f1;
    ey[2] = f3;
    return ey;
  }
  ;
  this.f4 = function(ey, ez, f1, f3, f5) {
    ey[0] = ez;
    ey[1] = f1;
    ey[2] = f3;
    ey[3] = f5;
    return ey;
  }
  ;
}
var f6;
var f7;
var f8;
var f9;
var fA;
var fB;
var fC;
var fD;
var fE;
var fF;
var fG;
var fH;
var fI;
function fJ() {
  fC = 0;
  fD = 2048;
  fE = new Uint32Array(4 * fD);
  fF = 0;
  fG = new Uint32Array(fD);
  fH = new Uint8Array(bI.eT * bI.eU);
}
function fK(player) {
  f7 = player;
  fI = false;
  fL();
  fM();
  for (var z = aS.fN(f7) - 1; z >= 0; z--) {
    if (aS.fO(f7, z) === 0) {
      f6 = z;
      fP();
    }
  }
  if (fI) {
    fQ();
  }
}
function fQ() {
  fR();
  fS();
}
function fP() {
  fB = aS.fT(f7, f6);
  f8 = aS.fU(f7, f6);
  f9 = aS.fV(f7, f6);
  fW();
  if (fC === 0) {
    fX();
    return;
  }
  fY();
  if (!fZ()) {
    fX();
    return;
  }
  fa();
}
function fZ() {
  fA = bB.ek(f8, fC);
  if (fA > a1.fb) {
    return true;
  }
  if (!f9) {
    return false;
  }
  var fc = fC * (1 + a1.fb);
  f8 += b2.fd.fe(f7, fc - f8);
  return true;
}
function fY() {
  var z;
  for (z = fC - 1; z >= 0; z--) {
    fH[bB.ek(fE[z], 4)] = 0;
  }
}
function fX() {
  if (aS.fN(f7) === 1) {
    a3.ff(f7);
  }
  b2.fd.fg(f7, f8);
  aS.fh(f7, f6);
}
function fL() {
  var player = f7;
  var fi = aV.fi;
  var eI = Math.min(fi[player].length, fD);
  var fj = 0;
  var fk = fG;
  for (var z = eI - 1; z >= 0; z--) {
    fk[fj++] = fi[player][z];
  }
  fF = fj;
}
function fM() {
  var z;
  for (z = aV.fi[f7].length - 1; z >= 0; z--) {
    if (aQ.eD(aV.fi[f7][z])) {
      aQ.fl(aV.fi[f7][z], f7);
    }
  }
  aV.fi[f7] = [];
}
function fW() {
  fC = 0;
  if (fB === a1.eF) {
    fm();
  } else {
    fn();
  }
}
function fn() {
  var fo, fp, eL, z;
  var eK = aQ.eK;
  for (eL = 3; eL >= 0; eL--) {
    for (z = fF - 1; z >= 0; z--) {
      fo = fG[z] + eK[eL];
      fp = bB.ek(fo, 4);
      if (fH[fp] === 0 && aQ.fq(fo) && aQ.eA(fo) === fB) {
        fH[fp] = 1;
        fE[fC++] = fo;
      }
    }
  }
}
function fm() {
  var fo, fp, eL, z;
  var eK = aQ.eK;
  for (eL = 3; eL >= 0; eL--) {
    for (z = fF - 1; z >= 0; z--) {
      fo = fG[z] + eK[eL];
      fp = bB.ek(fo, 4);
      if (fH[fp] === 0 && aQ.e9(fo)) {
        fH[fp] = 1;
        fE[fC++] = fo;
      }
    }
  }
}
function fa() {
  if (fr()) {
    fs();
    if (fB !== a1.eF) {
      ft();
    }
  } else {
    fX();
  }
}
function ft() {
  fu();
  fv(aV.fw[fB]);
  fv(aV.fx[fB]);
  if (bI.fy(bI.fz)) {
    fv(aV.ei[fB]);
  }
  g0(aV.fi[fB]);
  g1(aV.fx[fB]);
  g1(aV.ei[fB]);
  g2();
  g3();
}
function fs() {
  fI = true;
  aS.g4(f7, f6, f8);
  aS.g5(f7, f6);
  aV.g6[f7] += fC;
  g7();
  g8();
}
function fr() {
  if (fB === a1.eF) {
    return g9();
  } else {
    return gA();
  }
}
function gA() {
  var gB = fC * a1.fb;
  var gC = gD();
  var gE = gF();
  var gG = gB + 2 * gC + gE;
  var gH = fA * fC;
  if (gH > gG) {
    f8 -= gG;
    gI(gG - gB, gE);
    return true;
  } else {
    f8 -= gH;
    if (f9 && gE === 0) {
      gI(Math.max(gH - gB + b2.fd.fe(f7, gG - gH + 1), 0), 0);
      return true;
    }
    gI(gH - gB, gE);
    return false;
  }
}
function gI(gH, gE) {
  if (gE > 0) {
    if (gH >= gE) {
      aS.gJ(fB, f7, 0);
      gH -= gE;
    } else {
      aS.gJ(fB, f7, gE - gH);
      gH = 0;
      return;
    }
  }
  gH = bB.ek(gH, 2);
  if (aV.gK[fB] >= gH) {
    aV.gK[fB] -= gH;
  } else {
    aV.gK[fB] = 0;
  }
}
function gF() {
  return aS.gL(fB, f7);
}
function gD() {
  return bB.ek(fC * aV.gK[fB], 1 + bB.ek(10 * aV.g6[fB], 16));
}
function g9() {
  f8 -= fC * a1.fb;
  return true;
}
function g8() {
  for (var z = fC - 1; z >= 0; z--) {
    aV.fi[f7].push(fE[z]);
    aV.fw[f7].push(fE[z]);
    aQ.fl(fE[z], f7);
  }
}
function cw() {
  var gM = 0;
  var gN = 0;
  this.gO = function(eP, eR) {
    gM = eP;
    gN = eR;
  }
  ;
  this.gP = function(gQ) {
    if (a1.gR || a9.gS) {
      return;
    }
    if (!b2.fd.gT(0) && !b2.fd.gT(1)) {
      return;
    }
    if (!b2.fd.gU(a1.e2)) {
      return;
    }
    if (aE.gV(gM, gN)) {
      aE.gW = false;
      return;
    }
    gX(gQ);
  }
  ;
  function gX(gQ) {
    var player;
    var gY = bC.gZ(gM);
    var ga = bC.gb(gN);
    var e4 = bC.eg(gY, ga);
    var dy = bC.e8(e4);
    if (!bC.gc(gY, ga)) {
      return;
    }
    if (a1.gd) {
      if (!aQ.eD(dy)) {
        return;
      }
      b0.ge.gf(e4);
      return;
    }
    if (aQ.eN(dy)) {
      if (gQ) {
        return;
      }
      var gg = ab.dv.dx(dy);
      if (gg) {
        var e7 = bC.e8(gg);
        var gh = aQ.e9(e7) ? a1.eF : aQ.eA(e7);
        b0.ge.gi(aE.gj(), gg, gh);
      }
      return;
    }
    if (aQ.gk(dy)) {
      if (bD.gl.gm(a1.e2, e4)) {
        b0.ge.gn(aE.gj(), e4);
      }
      return;
    }
    if (gQ) {
      if (bD.gl.gm(a1.e2, e4)) {
        b0.ge.gn(aE.gj(), e4);
      }
      return;
    }
    if (aQ.e9(dy)) {
      if (go(a1.e2)) {
        b0.ge.gp(aE.gj(), a1.eF);
      } else if (gq(a1.e2, a1.eF)) {
        ar.gr(a1.eF, aE.gj());
      } else if (bD.gl.gm(a1.e2, e4)) {
        b0.ge.gn(aE.gj(), e4);
      }
      return;
    }
    player = aQ.eA(dy);
    if (player === a1.e2) {
      return;
    }
    if (!eB(player, a1.e2)) {
      if (bD.gl.gm(a1.e2, e4)) {
        b0.ge.gn(aE.gj(), e4);
      }
      return;
    }
    if (gs(a1.e2, player)) {
      b0.ge.gp(aE.gj(), player);
    } else if (gq(a1.e2, player)) {
      ar.gr(player, aE.gj());
    } else if (bD.gl.gm(a1.e2, e4)) {
      b0.ge.gn(aE.gj(), e4);
    }
  }
}
function gt(gu, size, gv, gw, font) {
  function dH() {
    var z, gx, gy;
    var gz = 0.2;
    var h0 = document.createElement("canvas");
    var h1 = h0.getContext("2d", {
      alpha: false
    });
    h0.width = gu;
    h0.height = gu;
    h1.font = size + font;
    h1.textAlign = "center";
    h1.textBaseline = "middle";
    h1.fillStyle = "red";
    for (z = 0; z < gv.length; z++) {
      h1.fillText(gv[z], 0.5 * gu, 0.5 * gu);
    }
    gx = h1.getImageData(0, 0, gu, gu);
    gy = h2(gx);
    if (gy > -1) {
      gz = (gy - (0.5 * gu) + 0.1 * size) / size;
    }
    return Math.max(gz, 0);
  }
  function h2(gx) {
    var z, h3;
    var eL = gx.data;
    for (z = eL.length - 4; z >= 0; z -= 4) {
      h3 = eL[z];
      if (h3 >= gw) {
        return Math.floor(z / (4 * gu));
      }
    }
    return -1;
  }
  return dH();
}
function cp() {
  this.h4 = new Int16Array(4);
  this.h5 = new Int16Array(4);
  this.dH = function() {
    var z;
    this.h4[0] = -bI.eT;
    this.h4[1] = 1;
    this.h4[2] = bI.eT;
    this.h4[3] = -1;
    for (z = 0; z < 4; z++) {
      this.h5[z] = 4 * this.h4[z];
    }
  }
  ;
  this.h6 = function(gg, h7) {
    var h8 = this.eQ(h7) - this.eQ(gg);
    var h9 = this.eS(h7) - this.eS(gg);
    var hA = (h8 >>> 31) << 1;
    var hB = h9 >>> 31;
    var hC = (Math.abs(h8) - Math.abs(h9)) >>> 31;
    return (5 + hA + (1 - hA) * (1 - (hB << 1)) * hC) & 3;
  }
  ;
  this.hD = function(gg, h7, hE) {
    var hF;
    if (hE % 2 === 0) {
      hF = ((this.eQ(h7) - this.eQ(gg)) >>> 31) << 1;
      return (hE + (1 - hE) * (1 - hF) + 4) & 3;
    }
    hF = ((this.eS(h7) - this.eS(gg)) >>> 31) << 1;
    return (hE + (2 - hE) * (1 - hF) + 4) & 3;
  }
  ;
  this.hG = function(fo, e4) {
    var z, el, h7, hH, hI;
    var hJ = aV.fx[fo];
    var eI = hJ.length;
    var t = bI.eT;
    var hK = this.eQ(e4);
    var hL = this.eS(e4);
    var eO = hJ[0] >> 2;
    var min = this.ea(hK, hL, eO);
    for (z = 1; z < eI; z++) {
      h7 = hJ[z] >> 2;
      hH = hK - (h7 % t);
      hI = hL - ~~((h7 + 0.5) / t);
      el = hH * hH + hI * hI;
      if (el < min) {
        min = el;
        eO = h7;
      }
    }
    return eO;
  }
  ;
  this.hM = function(player, dy) {
    if (aQ.e9(dy)) {
      return false;
    }
    if (player === aQ.eA(dy)) {
      return true;
    }
    return false;
  }
  ;
  this.ea = function(gY, ga, e4) {
    gY -= this.eQ(e4);
    ga -= this.eS(e4);
    return gY * gY + ga * ga;
  }
  ;
  this.hN = function(hO, hP, hQ) {
    var hR = this.hS(hO) - this.hT(hQ);
    var hU = this.hV(hP) - this.hW(hQ);
    return Math.sqrt(hR * hR + hU * hU);
  }
  ;
  this.hX = function(gg, h7) {
    var hR = this.eQ(gg) - this.eQ(h7);
    var hU = this.eS(gg) - this.eS(h7);
    return Math.sqrt(hR * hR + hU * hU);
  }
  ;
  this.hY = function(gg, h7) {
    var hR = this.eQ(gg) - this.eQ(h7);
    var hU = this.eS(gg) - this.eS(h7);
    return hR * hR + hU * hU;
  }
  ;
  this.hZ = function(ha, hb, hc, hd) {
    ha -= hc;
    hb -= hd;
    return ha * ha + hb * hb;
  }
  ;
  this.he = function(fo, hf) {
    return bB.ek(hf * aV.gK[fo], 1000);
  }
  ;
  this.hS = function(hO) {
    return 16 * (hO + hg) / hh;
  }
  ;
  this.hV = function(hP) {
    return 16 * (hP + hi) / hh;
  }
  ;
  this.gZ = function(hO) {
    return Math.floor((hO + hg) / hh);
  }
  ;
  this.gb = function(hP) {
    return Math.floor((hP + hi) / hh);
  }
  ;
  this.gc = function(gY, ga) {
    return gY >= 1 && ga >= 1 && gY < bI.eT - 1 && ga < bI.eU - 1;
  }
  ;
  this.eQ = function(e4) {
    return e4 % bI.eT;
  }
  ;
  this.eS = function(e4) {
    return bB.ek(e4, bI.eT);
  }
  ;
  this.eg = function(gY, ga) {
    return ga * bI.eT + gY;
  }
  ;
  this.hj = function(e4) {
    return this.ef(this.eQ(e4), this.eS(e4));
  }
  ;
  this.ef = function(gY, ga) {
    return gY > 0 && gY < bI.eT - 1 && ga > 0 && ga < bI.eU - 1;
  }
  ;
  this.e8 = function(e4) {
    return e4 << 2;
  }
  ;
  this.e6 = function(dy) {
    return dy >> 2;
  }
  ;
  this.hk = function(e4) {
    return ((bI.eT * this.eS(e4)) * 256) + (this.eQ(e4) << 4);
  }
  ;
  this.hl = function(e4) {
    return this.hk(e4) + 8 + (bI.eT << 7);
  }
  ;
  this.hm = function(hQ) {
    return bI.eT * (this.hW(hQ) >> 4) + (this.hT(hQ) >> 4);
  }
  ;
  this.hn = function(hQ) {
    var e4 = this.hm(hQ);
    return (this.eQ(e4) >> 5) + bD.ho.hp * (this.eS(e4) >> 5);
  }
  ;
  this.hT = function(hQ) {
    return hQ % (bI.eT << 4);
  }
  ;
  this.hW = function(hQ) {
    return bB.ek(hQ, bI.eT << 4);
  }
  ;
  this.hq = function(e4, hE) {
    return e4 + this.h4[hE];
  }
  ;
  this.hr = function(dy, hE) {
    return dy + this.h5[hE];
  }
  ;
  this.hs = function(player) {
    return this.eg((aV.ht[player] + aV.hu[player]) >> 1, (aV.hv[player] + aV.hw[player]) >> 1);
  }
  ;
  this.hx = function(player) {
    return this.eg(ao.hy(aV.ht[player], aV.hu[player]), ao.hy(aV.hv[player], aV.hw[player]));
  }
  ;
}
function cT() {
  this.hz = new i0();
  this.i1 = new i2();
  this.i3 = new i4();
  this.performance = new i5();
  this.i6 = new i7();
  this.i8 = new i9();
  this.iA = new iB();
  this.dH = function() {
    this.hz.dH();
    this.i3.dH();
    this.performance.dH();
    this.i6.dH();
    this.i8.dH();
  }
  ;
  this.iC = function() {
    this.performance.iC();
    this.hz.iC();
  }
  ;
}
function i7() {
  var iD;
  var iE = 8;
  var iF = new Uint16Array(iE);
  this.dH = function() {
    iD = 0;
  }
  ;
  this.iG = function(player, iH) {
    bE.eE[1] = aV.fi[player].length;
    if (bE.eE[0] === a1.eF) {
      ac.i6.iI(player);
    } else {
      this.iJ(player, bE.eE[0]);
    }
    if (bE.eE[1] === 0 && aV.fi[player].length === 0) {
      return false;
    }
    if (!iH && bE.eE[1] === aV.fi[player].length) {
      return false;
    }
    if (bE.eE[0] === a1.eF) {
      aV.iK[player]++;
    } else {
      aV.iL[player]++;
    }
    return true;
  }
  ;
  this.iM = function(player) {
    if (a1.iN) {
      ac.i8.iO[player] = 1;
    }
    iP(bE.eE[1], player);
    aS.iQ(player, bE.eq[0], bE.eE[0]);
    a3.iR(player, false);
  }
  ;
  this.iS = function(player, iT, eI, iU) {
    var iV = bB.ek(12 * aV.gK[player], 1024);
    iU -= iU >= bB.ek(aV.gK[player], 2) ? iV : 0;
    iP(eI, player);
    aS.iQ(player, iU, iT);
    aV.gK[player] -= iU + iV;
    a3.iR(player, false);
  }
  ;
  this.iJ = function(player, iT) {
    var z, hE;
    var eK = aQ.eK;
    for (z = aV.fw[player].length - 1; z >= 0; z--) {
      if (aQ.iW(aV.fw[player][z])) {
        for (hE = 3; hE >= 0; hE--) {
          if (aQ.fq(aV.fw[player][z] + eK[hE]) && aQ.eA(aV.fw[player][z] + eK[hE]) === iT) {
            aV.fi[player].push(aV.fw[player][z]);
            break;
          }
        }
      }
    }
  }
  ;
  function iP(size, player) {
    for (var z = aV.fi[player].length - 1; z >= size; z--) {
      aQ.iX(aV.fi[player][z], player);
    }
  }
  this.iI = function(player) {
    var eK = aQ.eK;
    for (var z = aV.fw[player].length - 1; z >= 0; z--) {
      if (aQ.iW(aV.fw[player][z])) {
        for (var hE = 3; hE >= 0; hE--) {
          if (aQ.e9(aV.fw[player][z] + eK[hE])) {
            aV.fi[player].push(aV.fw[player][z]);
            break;
          }
        }
      }
    }
  }
  ;
  this.iY = function(player, iZ) {
    var z, eb, hE, ia;
    var eI = aV.fw[player].length;
    var hF = eI >= 256 ? 12 : eI >= 32 ? 6 : 1;
    var ib = eI - 1 - ao.ic(hF);
    var eK = aQ.eK;
    iD = 0;
    loop: for (z = ib; z >= 0; z -= hF) {
      for (hE = 3; hE >= 0; hE--) {
        ia = aQ.e9(aV.fw[player][z] + eK[hE]) ? a1.eF : aQ.eA(aV.fw[player][z] + eK[hE]);
        if (ia === a1.eF || (aQ.fq(aV.fw[player][z] + eK[hE]) && ia !== player && (iZ || eB(player, ia)))) {
          for (eb = iD - 1; eb >= 0; eb--) {
            if (iF[eb] === ia) {
              continue loop;
            }
          }
          iF[iD] = ia;
          if (++iD >= iE) {
            return true;
          }
        }
      }
    }
    return iD > 0;
  }
  ;
  this.ie = function(player, iZ) {
    var z, hE, ia;
    var eK = aQ.eK;
    iD = 0;
    for (z = aV.fw[player].length - 1; z >= 0; z--) {
      for (hE = 3; hE >= 0; hE--) {
        ia = aQ.e9(aV.fw[player][z] + eK[hE]) ? a1.eF : aQ.eA(aV.fw[player][z] + eK[hE]);
        if (ia === a1.eF || (aQ.fq(aV.fw[player][z] + eK[hE]) && ia !== player && (iZ || eB(player, ia)))) {
          iF[iD++] = ia;
          return true;
        }
      }
    }
    return false;
  }
  ;
  this.ig = function() {
    var z, ec;
    for (z = iD - 1; z >= 0; z--) {
      if (iF[z] === a1.eF) {
        iD--;
        for (ec = z; ec < iD; ec++) {
          iF[ec] = iF[ec + 1];
        }
        return true;
      }
    }
    return false;
  }
  ;
  this.ih = function(player) {
    var z, ec;
    for (z = iD - 1; z >= 0; z--) {
      if (aS.ii(player, iF[z])) {
        iD--;
        for (ec = z; ec < iD; ec++) {
          iF[ec] = iF[ec + 1];
        }
      }
    }
    return iD === 0;
  }
  ;
  this.ij = function() {
    var z;
    for (z = iD - 1; z >= 0; z--) {
      if (b2.fd.ik(iF[z])) {
        return true;
      }
    }
    return false;
  }
  ;
  this.il = function() {
    var z;
    for (z = iD - 1; z >= 0; z--) {
      if (!b2.fd.ik(iF[z])) {
        iF[z] = iF[--iD];
      }
    }
    return iD > 0;
  }
  ;
  this.im = function(player) {
    var z, ec;
    var io = iF[0];
    var ip = aV.gK[io] + aS.gL(io, player);
    for (z = iD - 1; z >= 1; z--) {
      ec = aV.gK[iF[z]] + aS.gL(iF[z], player);
      if (ec < ip) {
        io = iF[z];
        ip = ec;
      }
    }
    return io;
  }
  ;
  this.iq = function(player) {
    var z, ir;
    var is = iF[0];
    if (iD === 1) {
      return is;
    }
    var it = bB.ek((aV.hu[player] + aV.ht[player]), 2);
    var iu = bB.ek((aV.hw[player] + aV.hv[player]), 2);
    var eY = iv(it - bB.ek((aV.hu[is] + aV.ht[is]), 2)) + iv(iu - bB.ek((aV.hw[is] + aV.hv[is]), 2));
    for (z = iD - 1; z >= 1; z--) {
      ir = iv(it - bB.ek((aV.hu[iF[z]] + aV.ht[iF[z]]), 2)) + iv(iu - bB.ek((aV.hw[iF[z]] + aV.hv[iF[z]]), 2));
      if (ir < eY) {
        eY = ir;
        is = iF[z];
      }
    }
    return is;
  }
  ;
  this.iw = function() {
    var ix = iF;
    var iy = ix[0];
    var gK = aV.gK;
    var iz = gK[iy];
    for (var z = iD - 1; z >= 1; z--) {
      var fo = ix[z];
      var ec = gK[fo];
      if (ec > iz) {
        iy = fo;
        iz = ec;
      }
    }
    return iy;
  }
  ;
}
function i9() {
  this.iO = new Uint8Array(a1.eF);
  this.dH = function() {
    this.iO.fill(0);
  }
  ;
  this.j0 = function(player, iU) {
    if (a1.iN) {
      this.iO[player] = 0;
    }
    if (!aS.j1(player)) {
      return;
    }
    var j2 = aT.j3(player);
    var j4 = a2.iU[player];
    if (j4 >= 3 && j4 < 6) {
      iU = Math.max(aV.gK[player] - j2, iU);
    }
    var j5 = aV.fx[player].length;
    var j6 = aV.fw[player].length;
    if (30 * aV.g6[player] > a1.j7 && j8[player] < 10 && j5 >= 100 * j6) {
      a2.j9(player, 10);
    }
    if (a1.iN) {
      jA(player, iU, j4, j2);
      return;
    }
    if (!j6 || (j5 && (j5 < j6 && !ao.ic(10) || j5 >= 100 * j6 && ao.ic(3) || !ao.ic(8)))) {
      if (bD.jB.iC(player)) {
        return;
      }
    }
    jC(player, iU, j4);
  }
  ;
  function jA(player, iU, j4, j2) {
    var iT;
    if (ac.i6.iY(player, false) || ac.i6.ie(player, false)) {
      ac.i8.iO[player] = 1;
      if (ac.i6.ih(player)) {
        return;
      }
      if (ac.i6.ig()) {
        jD(player, iU);
        jE(player, a1.eF, j4);
        return;
      }
      if (ao.jF(a2.jG[j4])) {
        iT = ac.i6.im(player);
        jH(player, iU, iT, j4);
      } else {
        if (ac.i6.ij() && ao.jF(a2.jI[j4])) {
          ac.i6.il();
        }
        if (j4 === 6) {
          jH(player, iU, ac.i6.iw(), j4);
          return;
        }
        iT = ac.i6.iq(player);
        jH(player, iU, iT, j4);
      }
      jE(player, iT, j4);
      return;
    }
    if (bD.jB.iC(player)) {
      return;
    }
    if (ac.iA.iC(player)) {
      return;
    }
    jJ(player, iU, j4, j2);
  }
  function jE(player, iT, j4) {
    if (j4 >= 3 && bU.jK() > 2142 && (iT === a1.eF || aV.gK[iT] < bB.ek(aV.gK[player], 20))) {
      a2.j9(player, 20);
    }
  }
  function jJ(player, iU, j4, j2) {
    var z, ec, ed;
    var eG = bV.eG;
    var jL = eG[player];
    if (jL === 0) {
      return;
    }
    var gK = aV.gK;
    var jM = gK[player];
    var g6 = aV.g6;
    if (player < a1.jN) {
      iU = jM;
    }
    if (jM < g6[player]) {
      return;
    }
    if (j4 === 5 && jM < j2 || j4 === 4 && jM < bB.ek(j2, 2)) {
      return;
    }
    var eI = aa.jO;
    var jP = aa.jQ;
    z = ao.ic(eI);
    var jR = ac.i8.iO;
    for (ec = 0; ec < eI; ec++) {
      ed = jP[(ec + z) % eI];
      if (jR[ed] === 1 && eG[ed] === jL) {
        b0.jS.jT(player, ed, iU);
        return;
      }
    }
    var jU = a1.jU;
    var fx = aV.fx;
    for (ec = 0; ec < eI; ec++) {
      ed = jP[(ec + z) % eI];
      if (gK[ed] < jU * g6[ed] && fx[ed].length && eG[ed] === jL && ed !== player) {
        b0.jS.jT(player, ed, iU);
        return;
      }
    }
  }
  function jC(player, iU, j4) {
    if (!ac.i6.iY(player, true) && !ac.i6.ie(player, true)) {
      ac.iA.iC(player);
      return;
    }
    if (ac.i6.ih(player)) {
      return;
    }
    if (ac.i6.ig()) {
      jD(player, iU);
      return;
    }
    if (ao.jF(a2.jG[j4])) {
      jH(player, iU, ac.i6.im(player), j4);
      return;
    }
    if (j4 === 5) {
      jH(player, iU, ac.i6.iw(), j4);
      return;
    }
    if (ac.i6.ij() && ao.jF(a2.jI[j4])) {
      ac.i6.il();
    }
    if (j4 === 6) {
      jH(player, iU, ac.i6.iw(), j4);
      return;
    }
    jH(player, iU, ac.i6.iq(player), j4);
  }
  function jH(player, iU, iT, j4) {
    if (j4 >= 3 && j4 < 6 && bB.ek(aV.gK[player], 8) > aV.gK[iT]) {
      iU = Math.max(bB.ek(11 * aV.gK[iT], 5), bB.ek(aV.gK[player], 10));
    }
    var eI = aV.fi[player].length;
    ac.i6.iJ(player, iT);
    ac.i6.iS(player, iT, eI, iU);
  }
  function jD(player, iU) {
    var iT = a1.eF;
    var eI = aV.fi[player].length;
    ac.i6.iI(player);
    if (aV.fi[player].length !== eI) {
      ac.i6.iS(player, iT, eI, iU);
      return true;
    }
    return false;
  }
}
function bn() {
  var jV = new Uint8Array(a1.eF);
  var jW = new Uint16Array(a1.eF);
  var jX = new Uint16Array(a1.eF);
  var jY = new Uint8Array(a1.eF);
  this.iU = new Uint8Array(a1.eF);
  var jZ = new Uint16Array(a1.eF);
  var ja = new Uint16Array(a1.eF);
  this.jb = null;
  this.jI = [97, 94, 70, 40, 20, 0, 100];
  this.jc = [500, 450, 400, 300, 80, 50, 100];
  this.jG = [0, 0, 5, 25, 50, 100, 0];
  this.jd = [60, 74, 112, 200, 256, 512, 512];
  this.je = [1, 2, 3, 4, 6, 8, 1];
  this.jf = [500, 450, 400, 300, 80, 50, 100];
  this.dI = function() {
    this.jb = [L(0), L(1), L(2), L(3), L(4), L(5), ""];
  }
  ;
  this.dH = function() {
    var z;
    jV.fill(0);
    jW.fill(0);
    jX.fill(0);
    jY.fill(0);
    this.iU.fill(0);
    jZ.fill(0);
    ja.fill(0);
    var jg = a1.jN;
    if (ay.jh) {
      if (ay.ji.jj) {
        for (z = a1.jk - 1; z >= 0; z--) {
          this.iU[z + jg] = ay.ji.jj[z + 1];
        }
      }
    } else if (a1.jl === 9) {
      this.jm();
    } else if (!a1.jn) {
      let dif = lobby ? lobby.settings.difficulty : 0;

      var jo = a1.jl === 8 ? 1 : dif;
      for (z = a1.jk - 1; z >= 0; z--) {
        this.iU[z + jg] = jo;
      }
    } else {
      if (a1.iN) {
        for (z = a1.jk - 1; z >= 0; z--) {
          this.iU[z + jg] = aO.jp[bV.eG[z + jg] - 1].eL;
        }
      } else {
        for (z = a1.jk - 1; z >= 0; z--) {
          this.iU[z + jg] = aO.jp[0].eL;
        }
      }
    }
    for (z = 0; z < jg; z++) {
      this.iU[z] = 6;
    }
    var eI = a1.eF;
    for (z = 0; z < eI; z++) {
      if (this.iU[z] <= 2) {
        jY[z] = 5;
        jZ[z] = ja[z] = 1040;
        if (this.iU[z] === 0) {
          jW[z] = 980;
          jX[z] = 980;
        } else if (this.iU[z] === 1) {
          jW[z] = 980;
          jX[z] = 920;
          jZ[z] = ja[z] = 1100;
        } else {
          jW[z] = 825;
          jX[z] = 750;
        }
        jq(z);
        continue;
      }
      if (this.iU[z] <= 4) {
        jY[z] = 1 + ao.ic(20);
        if (this.iU[z] === 3) {
          jW[z] = jX[z] = 500;
          jZ[z] = ja[z] = 1000;
        } else {
          ja[z] = 250 + ao.ic(1501);
          jZ[z] = 500 + ao.ic(501);
          jW[z] = 300 + ao.ic(201);
          jX[z] = 100 + ao.ic(201);
        }
        jq(z);
        continue;
      }
      if (this.iU[z] <= 5) {
        jZ[z] = 1000;
        ja[z] = 1000;
        jY[z] = 35 + ao.ic(16);
        jW[z] = 300 + ao.ic(201);
        jX[z] = 50 + ao.ic(101);
        jq(z);
        continue;
      }
      jZ[z] = ja[z] = 800;
      jY[z] = 5;
      jW[z] = 10;
      jX[z] = 250;
      jq(z);
    }
  }
  ;
  this.jm = function() {
    var z, ec;
    var dy = 0;
    var jg = a1.jN;
    for (ec = 0; ec < 6; ec++) {
      for (z = dy + ap.jr[ec] - 1; z >= dy; z--) {
        this.iU[z + jg] = ec;
      }
      dy += ap.jr[ec];
    }
  }
  ;
  function jq(z) {
    jV[z] = 1 + bB.ek(jZ[z] * ao.random(), 10 * ao.value(100));
  }
  this.j9 = function(fo, value) {
    jV[fo] = Math.min(value, jV[fo]);
  }
  ;
  this.iC = function(fo) {
    if (--jV[fo] === 0) {
      js(fo);
    }
  }
  ;
  function js(fo) {
    jt(fo);
    ac.i8.j0(fo, bB.ek(jW[fo] * aV.gK[fo], 1000));
  }
  function jt(fo) {
    if (jZ[fo] !== ja[fo]) {
      jZ[fo] += jZ[fo] < ja[fo] ? 3 : -3;
    }
    if (jW[fo] !== jX[fo]) {
      jW[fo] += jW[fo] < jX[fo] ? jY[fo] : -jY[fo];
      jW[fo] = Math.abs(jW[fo] - jX[fo]) <= jY[fo] ? jX[fo] : jW[fo];
    }
    jV[fo] = bB.ek(jZ[fo], 10);
  }
  this.ju = function(fo, fj) {
    jZ[fo] = ja[fo] = fj;
  }
  ;
}
function i4() {
  var jv = new Uint16Array(a1.eF);
  this.dH = function() {
    jv.fill(a1.eF);
  }
  ;
  this.iC = function(player) {
    var iT = jw(player);
    jx(player);
    if (bE.ep[0] === 0) {
      return false;
    }
    var jy = bC.hx(player);
    var jz = k0(player, jy);
    var k1 = k2(jz, jy);
    if (k1 > 0) {
      if (bD.k3.k4(player, k1)) {
        k5(player, jy, jz, iT);
        return true;
      }
    }
    var k6 = k7(player, jy);
    if (k6 > 0 && bD.k3.k4(player, k6)) {
      k5(player, jy, aQ.eA(k6 << 2), iT);
      return true;
    }
    k1 = k2(iT, jy);
    if (k1 > 0 && bD.k3.k4(player, k1)) {
      return true;
    }
    return false;
  }
  ;
  function jx(player) {
    var jP = aa.jQ;
    var k8 = aa.jO;
    var eI = Math.min(k8, (k8 < 17 && ao.ic(20) === 5) ? 1 : 16);
    var fp = ao.ic(k8);
    var ev = bE.ev;
    var fx = aV.fx;
    var fj = 0;
    for (var z = 0; z < eI; z++) {
      var fo = jP[(z + fp) % k8];
      if (fo !== player && fx[fo].length) {
        ev[fj++] = fo;
      }
    }
    bE.ep[0] = fj;
  }
  function k0(player, jy) {
    var eI = bE.ep[0];
    var ev = bE.ev;
    var k9 = -1;
    var kA = a1.eF;
    for (var z = 0; z < eI; z++) {
      var fo = ev[z];
      if (!eB(player, fo)) {
        continue;
      }
      var eY = bC.hY(jy, bC.hs(fo));
      if (k9 === -1 || eY < k9) {
        k9 = eY;
        kA = fo;
      }
    }
    return kA;
  }
  function k2(jz, jy) {
    if (jz === a1.eF) {
      return 0;
    }
    var fx = aV.fx[jz];
    var k8 = fx.length;
    var eI = Math.min(k8, 10);
    var kA = 0;
    var k9 = bC.hY(fx[kA] >> 2, jy);
    for (var z = 0; z < eI; z++) {
      var kB = ao.ic(k8);
      var eY = bC.hY(fx[kB] >> 2, jy);
      if (eY < k9) {
        k9 = eY;
        kA = kB;
      }
    }
    return fx[kA] >> 2;
  }
  function k7(player, jy) {
    var eI = bE.ep[0];
    var ev = bE.ev;
    var kC = jv;
    var fp = 0;
    for (var z = 0; z < eI; z++) {
      var fo = ev[z];
      var iT = kC[fo];
      if (iT === a1.eF) {
        continue;
      }
      if (!b2.fd.kD(iT)) {
        continue;
      }
      if (player === iT) {
        continue;
      }
      if (!eB(player, iT)) {
        continue;
      }
      ev[fp++] = iT;
    }
    bE.ep[0] = fp;
    if (fp === 0) {
      return 0;
    }
    var jz = k0(player, jy);
    return k2(jz, jy);
  }
  function jw(player) {
    var iT = jv[player];
    if (iT === a1.eF) {
      return a1.eF;
    }
    if (!b2.fd.kD(iT)) {
      jv[player] = a1.eF;
      return a1.eF;
    }
    return iT;
  }
  function k5(player, jy, iT, kE) {
    if (kE === a1.eF) {
      jv[player] = iT;
      return;
    }
    var kF = bC.hs(iT);
    var kG = bC.hs(kE);
    if (bC.hY(jy, kF) < bC.hY(jy, kG)) {
      jv[player] = iT;
    }
  }
}
function iB() {
  this.iC = function(player) {
    if (!bI.fy(bI.fz)) {
      return false;
    }
    if (aV.ei[player].length === 0) {
      return false;
    }
    return kH(player);
  }
  ;
  function kH(player) {
    var kI = kJ(player);
    if (kI === null) {
      return false;
    }
    kK(player);
    var kL = kM(kI.id);
    if (kL === null) {
      return kN(player, kI.id);
    }
    kO(player, kL);
    return true;
  }
  function kN(player, dz) {
    var eI = ac.hz.kP;
    if (eI === 0) {
      return false;
    }
    var dy = ac.hz.dZ[ao.ic(eI)] << 2;
    var eK = aQ.eK;
    var eL = ao.ic(4);
    while (true) {
      dy += eK[eL];
      if (aQ.eN(dy)) {
        if (aQ.e0(dy) === dz) {
          kO(player, {
            dy: dy,
            fo: a1.eF
          });
          return true;
        }
        break;
      }
      if (!aQ.e9(dy)) {
        break;
      }
    }
    return false;
  }
  function kJ(player) {
    var ei = aV.ei[player];
    var eI = ei.length;
    var ej = Math.max(bB.ek(eI, 12), 1);
    var eK = aQ.eK;
    var h3 = ao.ic(eI);
    for (var z = 0; z < eI; z += ej) {
      var e7 = ei[(z + h3) % eI];
      for (var eL = 3; eL >= 0; eL--) {
        var eM = e7 + eK[eL];
        if (aQ.eN(eM)) {
          return {
            dy: eM,
            id: aQ.e0(eM),
            fo: player
          };
        }
      }
    }
    return null;
  }
  function kK(player) {
    var jQ = aa.jQ;
    var jO = aa.jO;
    var eI = Math.min(jO, 12);
    var fp = ao.ic(jO);
    var ev = bE.ev;
    var ei = aV.ei;
    var fj = 0;
    for (var z = 0; z < eI; z++) {
      var fo = jQ[(z + fp) % jO];
      if (fo !== player && ei[fo].length && eB(player, fo)) {
        ev[fj++] = fo;
      }
    }
    bE.ep[0] = fj;
  }
  function kM(dz) {
    var eI = bE.ep[0];
    var ev = bE.ev;
    for (var z = 0; z < eI; z++) {
      var kQ = kJ(ev[z]);
      if (kQ === null) {
        continue;
      }
      if (kQ.id === dz) {
        return kQ;
      }
    }
    return null;
  }
  function kO(player, kQ) {
    var iU = b2.fd.kR(player, a2.jf[a2.iU[player]]);
    aV.fi[player].push(kQ.dy);
    aS.iQ(player, iU, kQ.fo);
    a3.iR(player, true);
  }
}
function i2() {
  this.iC = function(player) {
    var e4 = kS(player);
    if (e4 === -1) {
      return false;
    }
    return bD.k3.k4(player, e4);
  }
  ;
  function kS(player) {
    var eI = ac.hz.kP;
    if (eI === 0) {
      return -1;
    }
    var k8 = Math.min(eI, ac.performance.kT ? eI : 10);
    var dZ = ac.hz.dZ;
    var ib = bB.ek(ao.random() * eI, ao.value(100));
    var d = ib + k8;
    var kU = ao.hy(aV.ht[player], aV.hu[player]);
    var kV = ao.hy(aV.hv[player], aV.hw[player]);
    var kA = -1;
    var eY = bC.hZ(0, 0, bI.eT, bI.eU);
    for (var z = ib; z < d; z++) {
      var fp = z % eI;
      var kW = bC.ea(kU, kV, dZ[fp]);
      if (kW < eY) {
        eY = kW;
        kA = fp;
      }
    }
    if (kA === -1) {
      return -1;
    }
    return dZ[kA];
  }
}
function i5() {
  this.kT = 0;
  this.dH = function() {
    this.kT = 0;
  }
  ;
  this.iC = function() {
    if (this.kT) {
      return;
    }
    if (!kX()) {
      return;
    }
    kY();
  }
  ;
  function kX() {
    if (bU.jK() % 30 !== 7) {
      return false;
    }
    if (b2.fd.kZ(75)) {
      ac.performance.kT = 1;
      return true;
    }
    return false;
  }
  function kY() {
    if (a1.iN) {
      ka();
    } else {
      kb();
    }
  }
  function ka() {
    bW.kc(bW.kd());
    var ey = bE.ew;
    var eI = bE.ep[0];
    if (eI === 0) {
      return;
    }
    var ke = Math.min(100 + (eI - 1) * 10, 400);
    for (var z = 0; z < eI; z++) {
      a2.ju(ey[z], ke);
    }
  }
  function kb() {
    a2.ju(kf[0], 100);
  }
}
function i0() {
  var kg;
  var kh;
  var ki = 300;
  var kj = 300;
  this.kP = 0;
  this.dZ = new Uint32Array(512);
  var kk = false;
  this.dH = function() {
    kk = false;
    kg = 0;
    kh = 0;
    this.kP = 0;
  }
  ;
  this.iC = function() {
    if (!kl()) {
      return;
    }
    if (kg >= ki) {
      return;
    }
    km();
  }
  ;
  this.kn = function() {
    if (kk) {
      return;
    }
    this.dH();
    kk = true;
  }
  ;
  function kl() {
    var eI = ac.hz.kP;
    if (eI === 0) {
      return true;
    }
    var dZ = ac.hz.dZ;
    if (bU.jK() % 35 !== 6) {
      return eI < dZ.length;
    }
    for (var z = eI - 1; z >= 0; z--) {
      if (!aQ.e9(dZ[z] << 2)) {
        eI--;
        dZ[z] = dZ[eI];
      }
    }
    ac.hz.kP = eI;
    return eI < dZ.length;
  }
  function km() {
    var t = bI.eT;
    var ko = t - 2;
    var eI = ko * (bI.eU - 2);
    var kp = ki;
    var dZ = ac.hz.dZ;
    var k8 = ac.hz.kP;
    var kq = dZ.length;
    var fp = Math.min(kh + kp * ((1 + 19 * ac.performance.kT) * kj), eI);
    var z;
    for (z = kh; z < fp; z += kp) {
      var dy = 4 * (z % ko + (bB.ek(z, ko) + 1) * t + 1);
      if (aQ.e9(dy)) {
        dZ[k8] = dy >> 2;
        k8++;
        if (k8 === kq) {
          z += kp;
          break;
        }
      }
    }
    kh = z;
    if (kh >= eI) {
      kg++;
      kh = kg;
    }
    ac.hz.kP = k8;
  }
}
function kr() {
  aA.iC();
  aU.iC();
  aJ.ks();
  aq.kt.iC();
}
function ku() {
  ar.iC();
  a4.iC();
  aT.iC();
  av.iC();
  a3.iC();
  ac.iC();
  bD.kt.iC();
  aa.kv();
  aI.iC();
  ap.iC();
  bH.iC();
  bL.iC();
  aU.iC();
  aU.kw();
  aJ.iC();
  bF.iC();
  aH.iC();
  aC.iC();
  aA.iC();
  aw.iC();
  aE.iC();
  al.iC();
  bS.iC();
  bW.iC();
  aq.kt.iC();
  aq.kx.iC();
  i.iC();
  b1.iC();
  bU.iC();
}
function ky() {
  a5.iC();
  aK.iC();
  aD.iC();
  ai.iC();
  b3.iC();
  am.kz();
}
function l0() {
  aI.l1(false);
  aC.l1();
  aJ.l1(false);
  aH.l1();
  aE.l1();
  al.l1();
  aU.l1(false);
  bW.l2();
}
function l3() {
  if (aU.l1(false)) {
    bU.dO = true;
  }
  aq.kt.iC();
}
function bo() {
  var l4;
  var l5;
  var l6;
  var l7, l8;
  this.dH = function() {
    l7 = l8 = 0;
    l4 = 0;
    l5 = new Uint16Array(a1.eF);
    l6 = new Uint8Array(a1.eF);
  }
  ;
  this.iC = function() {
    var z;
    l9();
    for (z = l4 - 1; z >= 0; z--) {
      if (l6[l5[z]] === 64) {
        lA(l5[z]);
      } else if (l6[l5[z]]-- === 0) {
        lA(l5[z]);
        fK(l5[z]);
      }
    }
    if (aV.g6[kf[0]] >= 160000) {
      lB(160000);
      if (aV.g6[kf[0]] >= 300000) {
        lB(300000);
      }
    }
    lC();
  }
  ;
  function lB(lD) {
    var z;
    for (z = l4 - 1; z >= 0; z--) {
      if (l6[l5[z]] === 0 && aV.g6[l5[z]] >= lD) {
        fK(l5[z]);
      }
    }
  }
  function l9() {
    l7 = bS.lE[13];
    l8 = aV.gK[a1.e2];
  }
  function lC() {
    if (aV.g6[a1.e2] > bS.lE[7]) {
      bS.lE[7] = aV.g6[a1.e2];
    }
    bS.lE[14] += l8 - aV.gK[a1.e2] + l7 - bS.lE[13];
  }
  function lA(player) {
    if (l6[player] === 64) {
      l6[player] = 6;
    } else {
      var dt = aV.g6[player];
      if (dt < 1000) {
        l6[player] = 3;
      } else if (dt < 10000) {
        l6[player] = 2;
      } else if (dt < 60000) {
        l6[player] = 1;
      } else {
        l6[player] = 0;
      }
    }
  }
  this.ff = function(player) {
    var eb, z;
    for (z = l4 - 1; z >= 0; z--) {
      if (player === l5[z]) {
        l4--;
        for (eb = z; eb < l4; eb++) {
          l5[eb] = l5[eb + 1];
        }
        return;
      }
    }
  }
  ;
  this.iR = function(player, lF) {
    var z;
    for (z = l4 - 1; z >= 0; z--) {
      if (player === l5[z]) {
        return;
      }
    }
    l5[l4++] = player;
    l6[player] = lF ? 2 : 64;
  }
  ;
}
function bp() {
  var size;
  var jB;
  this.dH = function() {
    size = a1.jk;
    jB = new Uint16Array(a1.eF);
    var jN = a1.jN;
    for (var z = a1.jk - 1; z >= 0; z--) {
      jB[z] = jN + z;
    }
  }
  ;
  this.iC = function() {
    lG();
  }
  ;
  this.lH = function(fo) {
    jB[size++] = fo;
  }
  ;
  function lG() {
    for (var z = size - 1; z >= 0; z--) {
      if (aV.lI[jB[z]] === 0) {
        lJ(z);
        continue;
      }
      a2.iC(jB[z]);
    }
  }
  function lJ(eb) {
    size--;
    jB[eb] = jB[size];
  }
}
function bq() {
  var lK;
  var lL;
  var lM;
  var lN;
  var lO;
  var lP;
  var lQ;
  var lR;
  var lS;
  var lT;
  var lU;
  var lV;
  var lW;
  var lX = false;
  var lY = false;
  function lZ(la) {
    lV = bU.ds;
    lW = 33;
    lL = 0;
    lN = 0;
    lM = 0;
    lO = lW / la;
    lK = 1 / (la / lW / 4);
    lP = (an.t / 2 + hg) / hh;
    lQ = (an.ir / 2 + hi) / hh;
    lR = hh;
  }
  this.lb = function() {
    return lX;
  }
  ;
  this.lc = function() {
    lZ(1);
    this.ld(0, 0, bI.eT - 1, bI.eU - 1);
    if (!a1.gd && !a1.gR) {
      this.le(a1.e2, 3000, true, 0.3);
    }
  }
  ;
  this.lf = function(player, lg) {
    lh(bD.gl.li(player, lg));
  }
  ;
  function lh(z) {
    if (z === -1) {
      return;
    }
    var e4 = bC.hm(bD.kt.lj[z]);
    var lk = bC.eQ(e4) - 10;
    var ll = bC.eS(e4) - 10;
    a5.ld(lk, ll, lk + 19, ll + 19);
  }
  this.le = function(player, la, lm, zoom) {
    if (a1.ln || (lX && !lm && lY)) {
      return;
    }
    if (aV.g6[player] === 0) {
      lh(bD.gl.lo(player));
      return;
    }
    aF.lp = false;
    lY = lm;
    lZ(la);
    lq(player);
    lr(zoom, player);
    lX = true;
    af.ls();
  }
  ;
  this.lt = function(la) {
    if (a1.gR || a1.ln) {
      return;
    }
    aF.lp = false;
    lY = false;
    lZ(la);
    lu(0, 0, bI.eT - 1, bI.eU - 1);
    lv(7 / 8);
    lX = true;
    af.ls();
  }
  ;
  function lq(player) {
    lS = (aV.ht[player] + aV.hu[player] + 1) / 2;
    lT = (aV.hv[player] + aV.hw[player] + 1) / 2;
  }
  function lr(zoom, player) {
    var hR = aV.hu[player] - aV.ht[player] + 1;
    var hU = aV.hw[player] - aV.hv[player] + 1;
    var eb = an.t / hR;
    var ec = an.ir / hU;
    lU = eb < ec ? eb : ec;
    var lw = zoom !== 0 ? zoom : (hR < 20 && hU < 20) ? 0.5 : 0.9;
    lU *= lw;
    lv(7 / 8);
  }
  function lv(lx) {
    if (Math.abs(Math.log(lU / lR)) < 0.125) {
      lU = lx * lR;
    }
  }
  function lu(lk, ll, ly, lz) {
    lS = (lk + ly + 1) / 2;
    lT = (ll + lz + 1) / 2;
    var hR = ly - lk + 1;
    var hU = lz - ll + 1;
    var eb = an.t / hR;
    var ec = an.ir / hU;
    lU = 0.9 * (eb < ec ? eb : ec);
  }
  this.ld = function(lk, ll, ly, lz) {
    lu(lk, ll, ly, lz);
    hh = lU;
    aF.m0(lS, an.t / 2);
    aF.m1(lT, an.ir / 2);
    bP.m2();
    bU.dO = true;
  }
  ;
  this.m3 = function() {
    if (lX && lY) {
      return false;
    }
    lX = false;
    return true;
  }
  ;
  this.iC = function() {
    if (lX) {
      m4();
    }
  }
  ;
  function m4() {
    if (lL < 0.5) {
      if (lN < lO) {
        lN += lO * lK;
        lM = lL;
      }
    } else {
      if (lL > 1 - lM) {
        lN -= lO * lK;
        lN = lN < lO * lK ? lO * lK : lN;
      }
    }
    lV = lV >= bU.ds ? bU.ds - 1 : lV;
    var eL = bU.ds - lV;
    if (eL > 1000) {
      lL = 1;
    } else {
      lL += lN * eL / lW;
      lL = lL > 1 ? 1 : lL;
    }
    lV = bU.ds;
    var m5 = hh;
    var m6 = hg;
    var m7 = hi;
    hh = lR * (Math.pow((lU / lR), lL));
    var m8 = hh / m5;
    var m9 = lR * (Math.pow((lU / lR), (1 - lL)));
    var mA = 1 - ((m9 - lR) / (lU - lR));
    aF.m0(lP + mA * (lS - lP), an.t / 2);
    aF.m1(lQ + mA * (lT - lQ), an.ir / 2);
    aU.zoom(m8, (m6 * m8 - hg) / (1 - m8), (m7 * m8 - hi) / (1 - m8));
    bP.m2();
    if (lL >= 1) {
      lX = false;
      bQ.mB = true;
    }
    bU.dO = true;
  }
}
function bi() {
  var ed = b2.color;
  this.mC = ed.mD(0, 0, 0);
  this.mE = ed.mF(0, 0, 0, 0.7);
  this.mG = ed.mF(0, 0, 0, 0.5);
  this.mH = ed.mF(0, 0, 0, 0.85);
  this.mI = ed.mF(0, 0, 0, 0.75);
  this.mJ = ed.mF(0, 0, 0, 0.6);
  this.mK = ed.mF(0, 0, 0, 0.35);
  this.mL = ed.mD(255, 255, 255);
  this.mM = ed.mF(255, 255, 255, 0.3);
  this.mN = ed.mF(255, 255, 255, 0.6);
  this.mO = ed.mF(255, 255, 255, 0.4);
  this.mP = ed.mF(255, 255, 255, 0.25);
  this.mQ = ed.mF(255, 255, 255, 0.85);
  this.mR = ed.mF(255, 255, 255, 0.75);
  this.mS = ed.mF(255, 255, 255, 0.15);
  this.mT = ed.mD(128, 128, 128);
  this.mU = ed.mF(64, 64, 64, 0.75);
  this.mV = ed.mF(88, 88, 88, 0.83);
  this.mW = ed.mF(60, 60, 60, 0.85);
  this.mX = ed.mF(80, 60, 60, 0.85);
  this.mY = ed.mD(30, 255, 30);
  this.mZ = ed.mD(0, 200, 0);
  this.ma = ed.mD(128, 255, 128);
  this.mb = ed.mF(10, 65, 10, 0.75);
  this.mc = ed.mF(0, 255, 0, 0.6);
  this.md = ed.mF(0, 255, 0, 0.5);
  this.me = ed.mF(0, 200, 0, 0.5);
  this.q = ed.mF(0, 100, 0, 0.75);
  this.mf = ed.mF(0, 60, 0, 0.8);
  this.mg = ed.mF(0, 255, 0, 0.3);
  this.mh = ed.mF(0, 180, 0, 0.6);
  this.mi = ed.mF(0, 120, 0, 0.85);
  this.mj = ed.mD(0, 120, 0);
  this.mk = ed.mF(0, 70, 0, 0.85);
  this.ml = ed.mD(255, 120, 120);
  this.mm = ed.mD(255, 160, 160);
  this.mn = ed.mD(255, 70, 70);
  this.mo = ed.mD(230, 0, 0);
  this.mp = ed.mF(220, 0, 0, 0.6);
  this.mq = ed.mF(255, 100, 100, 0.8);
  this.mr = ed.mF(100, 0, 0, 0.85);
  this.ms = ed.mF(60, 0, 0, 0.85);
  this.mt = ed.mF(200, 0, 0, 0.6);
  this.mu = ed.mF(120, 0, 0, 0.85);
  this.mv = ed.mD(255, 70, 10);
  this.mw = ed.mF(0, 60, 60, 0.85);
  this.mx = ed.mF(10, 60, 60, 0.9);
  this.my = ed.mF(0, 96, 96, 0.75);
  this.mz = ed.mD(160, 160, 255);
  this.n0 = ed.mF(0, 40, 90, 0.75);
  this.n1 = ed.mF(0, 0, 255, 0.6);
  this.n2 = ed.mD(200, 200, 255);
  this.n3 = ed.mD(255, 120, 100);
  this.n4 = ed.mF(255, 255, 0, 0.5);
  this.n5 = ed.mF(255, 255, 150, 0.2);
  this.n6 = ed.mD(255, 255, 0);
  this.n7 = ed.mD(255, 255, 200);
  this.n8 = ed.mF(200, 200, 0, 0.6);
  this.n9 = ed.mF(140, 120, 0, 0.75);
  this.nA = ed.mF(180, 160, 40, 0.75);
  this.nB = ed.mF(70, 50, 20, 0.85);
  this.nC = ed.mF(30, 30, 0, 0.85);
  this.nD = ed.mF(255, 140, 0, 0.75);
  this.nE = ed.mF(0, 0, 0, 0);
  ed = null;
}
function cj() {
  this.ge = new nF();
  this.fd = new nG();
  this.nH = new nI();
  this.nJ = new nK();
  this.jS = new nL();
}
function nF() {
  this.gf = function(e4) {
    if (a1.jn) {
      b0.nH.gf(a1.e2, e4);
    } else {
      aq.nM.nN(e4);
    }
  }
  ;
  this.gp = function(hf, iT) {
    if (a1.jn) {
      b0.nH.gp(a1.e2, hf, iT);
    } else {
      aq.nM.nO(hf, iT);
    }
  }
  ;
  this.nP = function(hf, nQ) {
    if (a1.jn) {
      b0.nH.nR(a1.e2, hf, nQ);
    } else {
      aq.nM.nS(hf, nQ);
    }
  }
  ;
  this.gn = function(hf, e4) {
    if (a1.jn) {
      b0.nH.gn(a1.e2, hf, e4);
    } else {
      if (!bD.gl.gm(a1.e2, e4)) {
        return;
      }
      aq.nM.nT(hf, e4);
    }
  }
  ;
  this.nU = function(lg, e4) {
    if (a1.jn) {
      b0.nH.nU(a1.e2, lg, e4);
    } else {
      if (!bD.gl.nV(a1.e2, lg, e4)) {
        return;
      }
      aq.nM.nW(lg, e4);
    }
  }
  ;
  this.nX = function(iT) {
    if (a1.jn) {
      b0.nH.nX(a1.e2, iT);
    } else {
      aq.nM.nY(iT);
    }
  }
  ;
  this.nZ = function(na) {
    if (a1.jn) {
      b0.nH.nb(a1.e2, na);
    } else {
      aq.nM.nc(na);
    }
  }
  ;
  this.nd = function(ne) {
    if (a1.jn) {
      b0.nH.nd(a1.e2, ne);
    } else {
      aq.nM.nf(ne);
    }
  }
  ;
  this.ng = function() {
    if (a1.jn) {
      b0.nH.ng(a1.e2);
    } else {
      aq.nM.nh();
    }
  }
  ;
  this.ni = function() {
    if (a1.jn) {
      b0.nH.ni(a1.e2);
    } else {
      aq.nM.nT(1, 0);
    }
  }
  ;
  this.gi = function(hf, e4, iT) {
    if (a1.jn) {
      b0.nH.gi(a1.e2, hf, e4, iT);
    } else {
      aq.nM.nj(hf, e4, iT);
    }
  }
  ;
}
function nL() {
  this.jT = function(player, nQ, iU) {
    if (!b2.fd.nk(player, iU, nQ)) {
      return;
    }
    aT.nP(player, nQ);
    if (nQ < a1.jN && ao.random() < ao.value(10)) {
      ac.i8.iO[nQ] = 0;
    }
  }
  ;
  this.nl = function(player, nQ, iU) {
    if (!b2.fd.nm(iU, nQ)) {
      return;
    }
    b2.fd.fg(nQ, bE.eq[0]);
    bS.nn(player, nQ);
    aU.no(nQ, bE.eq[0]);
  }
  ;
}
function nG() {
  this.np = function(na, player) {
    aA.nZ(a1.e2, player, na);
    aq.nM.nq(na, player);
  }
  ;
  this.nr = function(player) {
    aA.ns(player, 0);
    aq.nM.nt(player);
  }
  ;
  this.nu = function(nv, player) {
    aA.nw(nv, player);
    aq.nM.nx(nv, player);
  }
  ;
  this.ny = function() {
    if (a1.jn || a1.gR) {
      return;
    }
    aq.nz.ny();
  }
  ;
}
function nK() {
  this.iC = function(a0) { // Action Decoder
    var id, ez, m3;
    b7.dH(a0);
    b7.o0 += 2;
    m3 = 8 * b7.size;
    while (b7.o0 + 8 <= m3) {
      id = b7.o1(4);
      ez = b7.o1(9); // id of player that did the action
      var continue_loop = true;
      var a, b;
      for (var i = 0; i < players.length; i++) {
        if (ez == players[i].original_id) {
          ez = players[i].modified_id;
          continue_loop = false;
          break;
        }
      }
      if (id === 0) {
        a = b7.o1(22);
        if (continue_loop) continue;
        this.o2(id, ez, a);
      } else if (id === 1) {
        a = b7.o1(10);
        b = b7.o1(10);
        if (continue_loop) continue;
        this.o2(id, ez, a, b);
      } else if (id === 2) {
        a = b7.o1(10);
        b = b7.o1(9);
        if (continue_loop) continue;
        this.o2(id, ez, a, b);
      } else if (id === 3) {
        a = b7.o1(10);
        b = b7.o1(22);
        if (continue_loop) continue;
        this.o2(id, ez, a, b);
      } else if (id === 4) {
        a = b7.o1(10);
        b = b7.o1(22);
        if (continue_loop) continue;
        this.o2(id, ez, a, b);
      } else if (id === 5) {
        a = b7.o1(10);
        if (continue_loop) continue;
        this.o2(id, ez, a);
      } else if (id === 6) {
        a = b7.o1(10);
        if (continue_loop) continue;
        this.o2(id, ez, a);
      } else if (id === 7) {
        a = b7.o1(10);
        if (continue_loop) continue;
        this.o2(id, ez, a);
      } else if (id === 10) {
        a = b7.o1(10);
        b = b7.o1(22);
        if (continue_loop) continue;
        this.o2(id, ez, a, b);
      } else {
        if (continue_loop) continue;
        this.o2(id, ez);
      }
    }
  }
  ;
  this.o3 = [];
  this.o4 = function() {
    var o5 = 0;
    var o6 = 0;
    var o7 = 0;
    var o8 = 0;
    var o9 = 0;
    var oA = 0;
    var oB = 0;
    var z;
    var eI = 512;
    for (z = 0; z < eI; z++) {
      o6 += aV.lI[z];
      o7 += aV.g6[z];
      o8 += aV.gK[z];
      o9 += bD.kt.oC[z];
    }
    oA += bD.kt.oD;
    oB += aa.jO;
    o5 = o6 + o7 + o9 + oA + oB;
    o5 = (o8 % 1073741824) * 4 + o5 % 4;
    this.o3.push(o5);
  }
  ;
  this.o2 = function(id, ez, f1, f3) {
    if (id === 0) {
      b0.nH.gf(ez, f1);
    } else if (id === 1) {
      b0.nH.gp(ez, f1, f3);
    } else if (id === 2) {
      b0.nH.nR(ez, f1, f3);
    } else if (id === 3) {
      b0.nH.gn(ez, f1, f3);
    } else if (id === 4) {
      b0.nH.nU(ez, f1, f3);
    } else if (id === 5) {
      b0.nH.nX(ez, f1);
    } else if (id === 6) {
      b0.nH.nb(ez, f1);
    } else if (id === 7) {
      b0.nH.nd(ez, f1);
    } else if (id === 8) {
      b0.nH.ng(ez);
    } else if (id === 9) {
      b0.nH.oE(ez);
    } else if (id === 10) {
      b0.nH.gi(ez, f1 >> 10, f3, f1 % 1024);
    }
  }
  ;
}
function nI() {
  this.gf = function(player, e4) {
    if (!b2.fd.gT(0)) {
      return;
    }
    if (!b2.fd.gU(player)) {
      return;
    }
    if (!bC.hj(e4)) {
      return;
    }
    b1.oF.oG(0, player, e4);
    a1.oH.iQ(player, e4);
  }
  ;
  this.gp = function(player, hf, iT) {
    if (!b2.fd.gT(1)) {
      return;
    }
    if (!b2.fd.gU(player)) {
      return;
    }
    if (!b2.fd.oI(player, iT)) {
      return;
    }
    if (!b2.fd.oJ(player, hf, 12, 0)) {
      return;
    }
    if (!b2.fd.oK(player, iT)) {
      return;
    }
    var iH = aS.ii(player, bE.eE[0]);
    if (!iH && !aS.j1(player)) {
      return;
    }
    aV.oL[player]++;
    b1.oF.oG(1, player, hf, bE.eE[0]);
    if (!ac.i6.iG(player, iH)) {
      return;
    }
    b2.fd.oM(player);
    bS.oN(player, hf);
    ac.i6.iM(player);
  }
  ;
  this.nR = function(player, hf, nQ) {
    if (!b2.fd.gT(1)) {
      return;
    }
    if (!b2.fd.gU(player)) {
      return;
    }
    if (!a1.iN) {
      return;
    }
    if (!b2.fd.oI(player, nQ)) {
      return;
    }
    if (!b2.fd.oO(player, nQ)) {
      return;
    }
    if (!b2.fd.nk(player, b2.fd.he(player, hf), nQ)) {
      return;
    }
    b1.oF.oG(2, player, hf, nQ);
    aT.nP(player, nQ);
  }
  ;
  this.gn = function(player, hf, e4) {
    if (!b2.fd.gT(1)) {
      return;
    }
    if (!b2.fd.gU(player)) {
      return;
    }
    if (e4 === 0 && hf === 1) {
      this.ni(player);
      return;
    }
    if (!bC.hj(e4)) {
      return;
    }
    if (bD.kt.oD === bD.kt.je) {
      return;
    }
    if (bD.kt.oC[player] === bD.kt.oP) {
      return;
    }
    if (aV.fx[player].length === 0) {
      return;
    }
    if (!b2.fd.oJ(player, hf, 32, 0)) {
      return;
    }
    if (!bD.k3.k4(player, e4)) {
      return;
    }
    b1.oF.oG(3, player, hf, e4);
    b2.fd.oM(player);
    bD.kt.oQ(player);
  }
  ;
  this.nU = function(player, lg, e4) {
    if (!b2.fd.gT(1)) {
      return;
    }
    if (!b2.fd.gU(player)) {
      return;
    }
    if (!bC.hj(e4)) {
      return;
    }
    if (!bD.gl.oR(player, lg)) {
      return;
    }
    if (!bD.k3.oS(e4)) {
      return;
    }
    b1.oF.oG(4, player, lg, e4);
    b2.fd.oT(player, 8);
    bD.kt.nU();
  }
  ;
  this.nX = function(player, iT) {
    if (!b2.fd.gT(1)) {
      return;
    }
    if (!b2.fd.gU(player)) {
      return;
    }
    iT = Math.min(iT, a1.eF);
    if (!aS.ii(player, iT)) {
      return;
    }
    b1.oF.oG(5, player, iT);
    aS.oU(player, iT);
  }
  ;
  this.nb = function(player, na) {
    if (!b2.fd.gT(1) && !b2.fd.gT(2)) {
      return;
    }
    if (!b2.fd.gU(player)) {
      return;
    }
    na = bB.oV(na, 0, 1023);
    b1.oF.oG(6, player, na);
    aU.oW(player, 0, na);
  }
  ;
  this.nd = function(player, ne) {
    if (!b2.fd.gT(1)) {
      return;
    }
    if (!b2.fd.gU(player)) {
      return;
    }
    b1.oF.oG(7, player, ne);
    al.oX(player, ne);
  }
  ;
  this.ng = function(player) {
    if (!b2.fd.gT(0) && !b2.fd.gT(1)) {
      return;
    }
    if (!b2.fd.gU(player)) {
      return;
    }
    if (!bG.ng(player)) {
      return;
    }
    b1.oF.oG(8, player);
  }
  ;
  this.oE = function(player) {
    bG.oE(player);
    b1.oF.oG(9, player);
  }
  ;
  this.ni = function(player) {
    if (!al.oY(player)) {
      return;
    }
    b1.oF.oG(3, player, 1, 0);
    al.ni(player);
  }
  ;
  this.gi = function(player, hf, e4, iT) {
    if (!b2.fd.gT(1)) {
      return;
    }
    if (!b2.fd.gU(player)) {
      return;
    }
    if (!b2.fd.oI(player, iT)) {
      return;
    }
    if (!b2.fd.oK(player, iT)) {
      return;
    }
    if (!bC.hj(e4)) {
      return;
    }
    if (!ab.dv.eC(player, e4)) {
      return;
    }
    if (!aS.ii(player, bE.eE[0]) && !aS.j1(player)) {
      return;
    }
    b1.oF.oG(10, player, (hf << 10) + bE.eE[0], e4);
    var iU = b2.fd.kR(player, hf);
    aV.fi[player].push(bE.eJ[0]);
    aS.iQ(player, iU, bE.eE[0]);
    a3.iR(player, true);
  }
  ;
}
function oZ() {
  this.oa = [];
  this.ob = document.createElement("div");
  function dH(ob) {
    ob.style.position = "absolute";
    ob.style.height = "auto";
    ob.style.padding = "0.5em";
  }
  this.oc = function(od, marginTop) {
    var title = document.createElement("h2");
    title.textContent = od;
    title.style.margin = "0";
    title.style.marginBottom = "0.6em";
    if (marginTop) {
      title.style.marginTop = marginTop;
    }
    title.style.fontSize = "1.4em";
    title.style.overflowWrap = "break-word";
    this.ob.appendChild(title);
  }
  ;
  this.oe = function(od) {
    var og = document.createElement("p");
    og.textContent = od;
    og.style.fontSize = "0.75em";
    og.style.lineHeight = "1.2em";
    og.style.marginBottom = "0";
    this.ob.appendChild(og);
    return og;
  }
  ;
  this.oh = function(od) {
    var oi = document.createElement("p");
    oi.textContent = od;
    oi.style.fontSize = "1em";
    oi.style.marginBottom = "0";
    oi.style.whiteSpace = "pre-wrap";
    oi.style.overflowWrap = "break-word";
    this.ob.appendChild(oi);
    return oi;
  }
  ;
  this.oj = function(ok, fontSize) {
    var ob = document.createElement("div");
    ob.innerHTML = ok;
    ob.style.fontSize = fontSize || "1em";
    ob.style.lineHeight = "1.2em";
    this.ob.appendChild(ob);
  }
  ;
  this.ol = function(om) {
    var z;
    var on = om.on;
    var eI = on.length;
    for (z = 0; z < eI; z++) {
      this.ob.appendChild(on[z]);
    }
  }
  ;
  this.oo = function(op) {
    this.oa.push(op);
    this.ob.appendChild(op.d);
  }
  ;
  this.resize = function() {
    var z;
    var eI = this.oa.length;
    for (z = 0; z < eI; z++) {
      if (this.oa[z].resize) {
        this.oa[z].resize();
      }
    }
  }
  ;
  dH(this.ob);
}
function oq(or, os) {
  var ob = document.createElement("div");
  this.ot = os;
  function dH() {
    var z;
    ob.style.width = "100%";
    ob.style.maxWidth = "100%";
    or.style.lineHeight = "1.5em";
    or.style.overflowX = "hidden";
    or.style.overflowY = "auto";
    for (z = 0; z < os.length; z++) {
      ob.appendChild(os[z].ob);
    }
    or.appendChild(ob);
  }
  function ou(ov) {
    var t = 0.25 * b2.ow.ox(0.6) * an.oy;
    return Math.max(Math.floor(ov / t), 1);
  }
  this.resize = function() {
    oz();
    p0();
    p0();
  }
  ;
  function oz() {
    var z;
    for (z = 0; z < os.length; z++) {
      os[z].resize();
    }
  }
  function p0() {
    var z, p1, ir, fp, eL;
    var ov = an.p2 * ob.offsetWidth;
    var p3 = new Float64Array(ou(ov));
    var p4 = bR.p4;
    var p5 = (ov - (p3.length + 1) * bR.gap) / (p3.length * an.p2);
    p3.fill(p4);
    for (z = 0; z < os.length; z++) {
      eL = os[z].ob;
      p1 = eL.style;
      ir = b2.p6.min(p3);
      fp = p3.indexOf(ir);
      p1.top = b2.ow.p7(ir);
      p1.left = b2.ow.p7(p4 + fp * (p5 + p4));
      p1.width = b2.ow.p7(p5);
      b2.ow.p8(eL, 5);
      p3[fp] += eL.offsetHeight + 3 * p4;
    }
    ob.style.height = b2.ow.p7(b2.p6.max(p3) - 2 * p4);
  }
  dH();
}
function l(title, p9, backgroundColor, pA, pB) {
  var pC = document.createElement("button");
  this.button = pC;
  this.pD = p9;
  this.pE = backgroundColor;
  function dH(self) {
    pC.innerHTML = title;
    pC.style.color = pB ? p.n6 : p.mL;
    pC.style.userSelect = "none";
    pC.style.outline = "none";
    pC.style.overflowWrap = "break-word";
    self.pF(backgroundColor);
    pC.style.border = "none";
    pC.style.font = "inherit";
    pC.style.fontSize = "1em";
    pC.style.padding = "0em 0.3em";
    pC.onclick = pG;
    pC.addEventListener("mouseover", pH);
    pC.addEventListener("mouseout", pI);
    pC.addEventListener("focus", pH);
    pC.addEventListener("blur", pJ);
  }
  this.pF = function(ed) {
    if (!ed) {
      ed = p.mH;
    } else if (ed === 1) {
      ed = p.mW;
    }
    this.pE = backgroundColor = ed;
    pC.style.backgroundColor = ed;
  }
  ;
  function pH() {
    if (b9.pK()) {
      return;
    }
    if (pA !== false) {
      var pL = b2.color.pM(backgroundColor);
      if (pL[0] > 0 && pL[0] < 255 && pL[0] === pL[1] && pL[0] === pL[2]) {
        return;
      }
    }
    this.style.backgroundColor = b2.color.pH(backgroundColor, 50);
  }
  function pG() {
    if (!p9(this)) {
      pN(this);
    }
  }
  function pJ() {
    this.style.backgroundColor = backgroundColor;
  }
  function pI() {
    pN(this);
  }
  function pN(eL) {
    eL.style.backgroundColor = backgroundColor;
    eL.blur();
  }
  dH(this);
}
function pO(pP, or) {
  var ob;
  function dH() {
    ob = document.createElement("div");
    ob.style.display = "grid";
    ob.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))";
    ob.style.overflowY = "auto";
    ob.style.gridAutoRows = "5.3em";
    ob.style.maxHeight = "100%";
    pQ();
  }
  function pQ() {
    var z;
    for (z = 0; z < pP.length; z++) {
      pP[z].button.style.fontSize = "1.2em";
      ob.appendChild(pP[z].button);
    }
    or.appendChild(ob);
  }
  this.resize = function() {
    var z;
    for (z = 0; z < pP.length; z++) {
      b2.ow.p8(pP[z].button);
    }
    ob.style.gap = ob.style.padding = b2.ow.p7(bR.p4);
  }
  ;
  dH();
}
function pR(pS, pT, pU) {
  this.eP = 0;
  this.eR = 0;
  this.t = 0;
  this.ir = 0;
  this.resize = function() {
    this.ir = Math.min(b2.ow.ox(pU || 0.5) * pS[1] * an.oy, an.ir - 2 * bR.gap);
    this.t = Math.min(this.ir * (pS[0] / pS[1]), an.t - 2 * bR.gap);
    this.ir = pS[1] * this.t / pS[0];
    this.eP = bR.gap + pT[0] * (an.t - this.t - 2 * bR.gap);
    this.eR = bR.gap + pT[1] * (an.ir - this.ir - 2 * bR.gap);
  }
  ;
  this.pV = function() {
    return this.eP + 0.5 * this.t;
  }
  ;
}
function pW(pX, title, pD) {
  title = title || L(6);
  pD = pD || function() {}
  ;
  this.d = document.createElement("p");
  function dH(d) {
    d.textContent = (pX.value ? "🟢 " : "⚪ ") + title;
    d.style.margin = "0";
    d.style.marginBottom = "0.5em";
    d.style.cursor = "pointer";
    d.addEventListener("click", click);
  }
  function click() {
    var value = 1 - pX.value;
    this.textContent = (value ? "🟢 " : "⚪ ") + title;
    bY.pY.pZ(pX.o0, value);
    pD(value);
  }
  dH(this.d);
}
function pa(or, ok) {
  var ob = document.createElement("div");
  this.pb = ob;
  function dH() {
    or.style.overflowX = "hidden";
    or.style.overflowY = "auto";
    ob.innerHTML = ok;
    or.appendChild(ob);
  }
  this.resize = function() {
    ob.style.padding = b2.ow.p7(bR.p4);
    ob.style.lineHeight = b2.ow.p7(b2.ow.pc(0.035));
  }
  ;
  dH();
}
function pd(pe) {
  var ob = document.createElement("div");
  this.d = ob;
  this.pf = pe;
  function dH() {
    var z;
    var eI = pe.length;
    ob.style.width = "100%";
    ob.style.height = "2.7em";
    ob.style.marginTop = "0.6em";
    ob.style.border = "inherit";
    for (z = 0; z < eI; z++) {
      pe[z].style.verticalAlign = "top";
      pe[z].style.width = (100 / eI).toFixed(2) + "%";
      pe[z].style.height = "100%";
      pe[z].style.fontSize = "0.75em";
      ob.appendChild(pe[z]);
    }
  }
  this.resize = function() {
    var z;
    var eI = pe.length;
    for (z = 1; z < eI; z++) {
      b2.ow.p8(pe[z], 4);
    }
  }
  ;
  dH();
}
function pg(pX, type, ph, pi) {
  this.d = document.createElement("input");
  function dH(d) {
    d.type = type ? "number" : "text";
    d.id = "input" + (pX.title ? pX.title : pX.o0);
    d.value = pX.value;
    d.style.width = "100%";
    d.style.userSelect = "none";
    d.style.outline = "none";
    d.style.resize = "none";
    d.style.border = "inherit";
    d.style.font = "inherit";
    d.style.color = p.mL;
    d.style.backgroundColor = p.mE;
    d.style.fontSize = "1em";
    d.style.padding = "0.1em 0.2em";
    if (pX.o0 === -1) {
      return;
    }
    d.addEventListener("focus", function() {
      an.pj++;
    });
    d.addEventListener("blur", function() {
      an.pj--;
      bY.pY.pZ(pX.o0, d.value);
    });
    d.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        bY.pY.pZ(pX.o0, d.value);
        if (ph) {
          ph();
        } else {
          d.blur();
        }
      }
    });
    if (pi) {
      d.addEventListener("input", function(d) {
        pi(d);
      });
    }
  }
  dH(this.d);
}
function pk(or, data) {
  var eI = data.pl.length;
  var pm = document.createElement("div");
  var pn = document.createElement("div");
  var po = document.createElement("div");
  var pp = new Array(eI);
  var os = new Array(eI);
  var pq = new Array(data.pr.length);
  var ps = b2.color.mF(70, 70, 0, 0.35);
  function dH() {
    or.style.display = "flex";
    or.style.flexDirection = "column";
    pn.style.overflowX = "hidden";
    pn.style.overflowY = "auto";
    pt();
    pQ();
  }
  function pt() {
    var eL, z;
    var pl = data.pl;
    var k8 = eI ? pl[0].length : 0;
    for (z = 0; z < eI; z++) {
      pp[z] = document.createElement("div");
      pp[z].style.backgroundColor = pu(z);
      pp[z].style.width = "100%";
      pp[z].style.display = "flex";
      os[z] = new Array(k8);
      for (var eb = 0; eb < k8; eb++) {
        os[z][eb] = eL = document.createElement("div");
        eL.style.display = "flex";
        eL.style.justifyContent = "center";
        eL.style.wordBreak = "break-all";
        eL.style.padding = "0.4em 0em";
        eL.style.width = data.pv[eb] + "%";
        eL.innerHTML = pl[z][eb].el;
        if (pl[z][eb].dt === 1) {
          eL.name = "" + z;
          eL.style.color = p.n6;
          eL.style.backgroundColor = ps;
          eL.addEventListener("mouseover", pH);
          eL.addEventListener("mouseout", pI);
          pw(eL, pl[z][eb].px, pl[z][eb].py);
        }
        pp[z].appendChild(eL);
      }
    }
    pm.style.display = "flex";
    pm.style.backgroundColor = b2.color.mF(0, 120, 0, 0.35);
    for (z = 0; z < pq.length; z++) {
      pq[z] = eL = document.createElement("div");
      eL.style.display = "flex";
      eL.style.justifyContent = "center";
      eL.style.wordBreak = "break-all";
      eL.style.padding = "0.4em 0em";
      eL.style.width = data.pv[z] + "%";
      eL.innerHTML = data.pr[z];
      pm.appendChild(eL);
    }
  }
  function pw(eL, px, py) {
    if (py === 2147483647) {
      return;
    }
    eL.addEventListener("click", function() {
      b4.v(30);
      b4.w(30, px);
      b7.dH(b4.a0);
      this.style.backgroundColor = ps;
      i.j(8, i.pz, new q0(25,{
        q1: 0,
        px: b5.q2.q3(b5.q2.q4(5)),
        py: py
      }));
    });
  }
  function pH() {
    this.style.backgroundColor = b2.color.pH(ps, 160);
  }
  function pI() {
    this.style.backgroundColor = ps;
  }
  function pQ() {
    for (var z = 0; z < eI; z++) {
      po.appendChild(pp[z]);
    }
    pn.appendChild(po);
    or.appendChild(pm);
    or.appendChild(pn);
  }
  function pu(z) {
    return z % 2 === 1 ? b2.color.mF(130, 130, 130, 0.35) : p.mK;
  }
  this.resize = function() {
    p0();
    p0();
  }
  ;
  function p0() {
    var z, eb;
    or.style.font = b2.ow.q5(0, b2.ow.q6(0.026, 0.5, 0.03));
    for (z = 1; z < pq.length; z++) {
      b2.ow.p8(pq[z], 4);
    }
    b2.ow.p8(pm, 2);
    if (!eI) {
      return;
    }
    var q7 = pm.offsetWidth;
    var q8 = po.offsetWidth;
    var gh;
    for (z = 0; z < pq.length; z++) {
      gh = 0.01 * data.pv[z] * q8;
      pq[z].style.width = (100 * gh / q7).toFixed(2) + "%";
    }
    var k8 = data.pl[0].length;
    for (z = 0; z < eI; z++) {
      b2.ow.p8(pp[z], 2);
      for (eb = 1; eb < k8; eb++) {
        b2.ow.p8(os[z][eb], 4);
      }
    }
  }
  dH();
}
function q9() {
  var qA = document.createElement("div");
  var qB = document.createElement("div");
  var qC = document.createElement("div");
  var po = document.createElement("div");
  var pP = [];
  var qD;
  var pr = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"];
  var qE = [1, 0, 2];
  function dH() {
    var z;
    qA.style.position = "absolute";
    qB.style.width = "25%";
    qB.style.height = "100%";
    qB.style.backgroundColor = p.mH;
    qC.style.position = "absolute";
    qC.style.width = "75%";
    qC.style.height = "100%";
    qC.style.backgroundColor = p.mH;
    qC.style.top = qC.style.right = b2.ow.p7(0);
    qC.style.overflowX = "auto";
    qC.style.overflowY = "hidden";
    qC.style.whiteSpace = "nowrap";
    po.style.height = po.style.maxHeight = "100%";
    pP.push(new l("",function() {
      qF(0);
    }
    ,p.ms));
    pP.push(new l("",function() {
      qF(1);
    }
    ,p.mf));
    pP.push(new l("",function() {
      qF(2);
    }
    ,p.mw));
    for (z = 0; z < pP.length; z++) {
      pP[z].button.style.height = "100%";
      po.appendChild(pP[z].button);
    }
    qC.appendChild(po);
    qA.appendChild(qB);
    qA.appendChild(qC);
  }
  function qF(z) {
    i.j(8, 0, new q0(21,{
      qG: qE[z],
      qH: 0,
      qI: 10
    }));
  }
  this.show = function() {
    this.pZ(i.kt.qJ);
    document.body.appendChild(qA);
  }
  ;
  this.qK = function() {
    document.body.removeChild(qA);
  }
  ;
  this.pZ = function(qJ) {
    for (var z = 0; z < pP.length; z++) {
      pP[qE[z]].button.innerHTML = pr[z] + "<br>" + qJ[z];
    }
  }
  ;
  this.resize = function() {
    var z;
    var qL = bR.gap;
    var ir = b2.ow.qM(0.085);
    var t = Math.min(4 * ir, an.t - 2 * qL);
    var eI = pP.length;
    b2.ow.qN(qA, qL, an.ir - qL - ir, t, ir);
    b2.ow.p8(qA);
    b2.ow.p8(qB, 6);
    for (z = 0; z < eI - 1; z++) {
      b2.ow.p8(pP[z].button, 6);
    }
    for (z = 0; z < eI; z++) {
      pP[z].button.style.fontSize = b2.ow.qO(0.22 * ir);
    }
    if (!qD) {
      if (!aP.qP()) {
        return;
      }
      qD = aP.get(14);
      qD.style.width = "24%";
      qD.style.position = "absolute";
      qB.appendChild(qD);
    }
    qD.style.left = b2.ow.p7(0);
    qD.style.top = "7%";
  }
  ;
  dH();
}
function qQ(pX, pG) {
  this.on = [];
  var qR = this.on;
  function dH() {
    var qS;
    var eI = pX.qT.length;
    for (var z = 0; z < eI; z++) {
      qS = document.createElement("p");
      qS.textContent = "⚪ " + pX.qT[z];
      qS.style.margin = "0";
      qS.name = "" + z;
      qS.style.cursor = "pointer";
      qS.style.fontSize = "1em";
      qS.addEventListener("click", click);
      qR.push(qS);
    }
    qR[pX.value].textContent = qR[pX.value].textContent.replace("⚪", "🟢");
  }
  function click() {
    for (var z = 0; z < qR.length; z++) {
      qR[z].textContent = qR[z].textContent.replace("🟢", "⚪");
    }
    this.textContent = this.textContent.replace("⚪", "🟢");
    var o0 = parseInt(this.name);
    if (pX.o0 !== undefined) {
      bY.pY.pZ(pX.o0, o0);
    }
    if (pG) {
      pG(o0);
    }
  }
  dH();
}
function qU(title, qV, qW) {
  var qA = document.createElement("div");
  var qX = document.createElement("div");
  var po = document.createElement("div");
  var qY = document.createElement("div");
  var qZ = document.createElement("div");
  this.qa = po;
  this.qb = qV;
  function dH() {
    qA.style.position = "absolute";
    qA.style.top = "0";
    qA.style.left = "0";
    qA.style.width = "100%";
    qA.style.height = "100%";
    qX.style.position = "absolute";
    qX.style.top = "0";
    qX.style.left = "0";
    qX.style.width = "100%";
    qX.style.display = "flex";
    qX.style.backgroundColor = p.mH;
    qY.style.position = "absolute";
    qY.style.left = "0";
    qY.style.width = "100%";
    qY.style.overflowX = "auto";
    qY.style.overflowY = "hidden";
    qY.style.whiteSpace = "nowrap";
    qZ.style.height = qZ.style.maxHeight = "100%";
    po.style.position = "absolute";
    po.style.width = "100%";
    po.style.backgroundColor = p.mH;
    qc();
    pQ();
  }
  function qc() {
    for (var z = 0; z < qV.length; z++) {
      qV[z].button.style.height = "100%";
      qV[z].button.style.padding = "0.0em 0.9em";
    }
  }
  function pQ() {
    for (var z = 0; z < qV.length; z++) {
      qZ.appendChild(qV[z].button);
    }
    qX.appendChild(qd());
    qY.appendChild(qZ);
    if (qW !== false) {
      qA.appendChild(po);
      qA.appendChild(qX);
      qA.appendChild(qY);
    }
  }
  function qd() {
    var qe = document.createElement("h1");
    qe.textContent = title;
    qe.style.margin = "auto";
    qe.style.fontSize = (title.length > 20 && an.ir > an.t) ? "1.8em" : "2.3em";
    return qe;
  }
  this.show = function() {
    if (qW !== false) {
      document.body.appendChild(qA);
    } else {
      document.body.appendChild(qX);
      document.body.appendChild(qY);
    }
  }
  ;
  this.qK = function() {
    if (qW !== false) {
      document.body.removeChild(qA);
    } else {
      document.body.removeChild(qX);
      document.body.removeChild(qY);
    }
  }
  ;
  this.qf = function() {
    var qg = b2.ow.pc(0.1);
    var qh = b2.ow.pc(0.08 + 0.04 * (an.qi < 1));
    var qj = an.ir / an.p2 - qg - qh;
    return {
      qg: qg,
      qh: qh,
      qj: qj
    };
  }
  ;
  this.resize = function(qk) {
    var z, d;
    var eI = qV.length;
    var ql = this.qf();
    var qg = ql.qg;
    var qh = ql.qh;
    qX.style.height = b2.ow.p7(qg);
    b2.ow.p8(qX, 2);
    qY.style.top = b2.ow.p7(an.ir / an.p2 - qh);
    qY.style.height = b2.ow.p7(qh);
    b2.ow.p8(qY, 8);
    po.style.top = b2.ow.p7(qg);
    po.style.height = po.style.maxHeight = b2.ow.p7(ql.qj);
    qX.style.font = b2.ow.q5(0, b2.ow.pc(0.02, 0.3));
    qY.style.font = b2.ow.q5(0, b2.ow.pc(0.02, 0.7));
    po.style.font = b2.ow.q5(0, b2.ow.pc(0.02, 0.7));
    for (z = 1; z < eI; z++) {
      b2.ow.p8(qV[z].button, 4);
    }
    var qm = 0;
    for (z = 0; z < eI; z++) {
      qm += qV[z].button.offsetWidth;
    }
    if (qk && qm < qY.offsetWidth) {
      for (z = 0; z < eI; z++) {
        d = qV[z].button;
        d.style.width = (100 * qV[z].button.offsetWidth / qm).toFixed(2) + "%";
      }
    } else {
      for (z = 0; z < eI; z++) {
        d = qV[z].button;
        d.style.width = "auto";
      }
    }
    if (!qk) {
      this.resize(true);
    }
  }
  ;
  this.qn = function() {
    var ql = this.qf();
    var ed = an.p2;
    qo.fillStyle = p.mH;
    qo.fillRect(0, ed * ql.qg, an.t, ed * ql.qj);
  }
  ;
  dH();
}
function qp(name, placeholder, qq, pi) {
  var qr = document.createElement("textarea");
  this.d = qr;
  var qs = true;
  function dH() {
    qr.setAttribute("name", name);
    qr.setAttribute("id", name + "Field");
    qr.setAttribute("autocomplete", "off");
    if (placeholder) {
      qr.setAttribute("placeholder", placeholder);
    }
    qr.style.top = "0";
    qr.style.left = "0";
    qr.style.width = "100%";
    qr.style.height = "100%";
    qr.style.userSelect = "none";
    qr.style.outline = "none";
    qr.style.resize = "none";
    qr.style.border = "none";
    qr.style.color = p.mL;
    qr.style.backgroundColor = p.mE;
    qr.style.fontSize = "1.2em";
    if (pi) {
      qr.addEventListener("input", function(d) {
        pi(d);
      });
    }
    qr.addEventListener("focus", function() {
      an.pj++;
    });
    qr.addEventListener("blur", function() {
      an.pj--;
    });
  }
  this.resize = function() {
    qr.style.padding = b2.ow.p7(bR.p4);
    if (qq) {
      b2.ow.p8(qr, 5);
    }
  }
  ;
  this.qt = function(qu) {
    qr.value = qu;
  }
  ;
  this.qv = function() {
    return qr.value;
  }
  ;
  this.qw = function() {
    qr.select();
  }
  ;
  this.clear = function() {
    qr.value = "";
  }
  ;
  this.qx = function() {
    if (qs && navigator.clipboard) {
      qr.select();
      navigator.clipboard.writeText(qr.value).catch(function() {
        qs = false;
        qy();
      });
      return;
    }
    qy();
  }
  ;
  function qy() {
    qr.select();
    document.execCommand("copy");
  }
  dH();
}
function d2() {
  this.pD = new qz();
  this.dZ = new r0();
  this.pY = new r1();
  this.kt = new r2();
  this.dH = function() {
    this.dZ.dH();
    (new r3()).dH();
  }
  ;
}
function r0() {
  this.data = [];
  this.dH = function() {
    r4(0, 1, 0, 5); 
    r4(1, 1, 3); //Resolution
    r4(2, 0);
    r5(3, 2);
    r4(4, 1);
    r5(5, 2, "sans-serif", 1);
    r4(6, 0);
    r4(7, 0, 1); // Place balance above
    r4(8, 0, 1); // Hide zoom buttons
    r4(9, 1, 2); // Minimum font
    r4(10, 1); // Lobby
    r4(11, 1, 2); // Text rendering speed
    r5(12, 2, navigator.language);
    r6(100);
    r5(100, 2);
    r5(101, 2);
    r5(102, 2);
    r5(103, 2);
    r5(104, 2);
    r5(105, 2);
    r5(106, 2);
    r4(107);
    r4(108);
    r4(109);
    r5(110, 2);
    r4(111);
    r4(112);
    r4(113);
    r5(114, 2);
    r4(115);
    r5(116, 2);
    r4(117, 1);
    r5(118, 2, "", 2);
    r4(119, 1, 0, 1);
    r5(120, 2);
    r4(121, 1, ~~(Math.random() * 262144));
    r5(122, 2, "Player " + Math.floor(Math.random() * 1000));
    r4(123);
    r5(124);
    r4(125, 1);
    r5(126, 2);
    r4(127, 0, 1);
    r4(128);
    r4(129);
    r4(130);
    r4(131);
    r4(132);
    r5(133, 2);
    r4(134, 0, 5);
    r5(135, 2);
    r5(136, 2);
    r4(137);
    r4(138);
    r4(139);
    r4(140);
    r4(141);
    r4(142);
    r4(143);
    r4(144);
    r5(145, 2);
    r4(146);
    r4(147);
    r5(148, 2);
    r4(149);
    r4(150, 0, 1);
    r5(151, 2);
    r4(152, 0, 5);
    r6(180);
    r4(180, 0);
    r4(181, 0);
  }
  ;
  this.pZ = function(o0, value) {
    this.data[o0].value = value;
  }
  ;
  this.da = function(o0, value) {
    this.pZ(o0, value);
    bY.pD.save(o0, String(value));
    bY.pD.save(o0, String(this.data[o0].em), true);
  }
  ;
  this.r7 = function() {
    var z;
    for (z = 0; z < this.data.length; z++) {
      if (this.data[z]) {
        bY.pD.save(z, String(this.data[z].value));
        bY.pD.save(z, String(this.data[z].em), true);
      }
    }
  }
  ;
  this.r8 = function(o0) {
    return Number(this.data[o0].value);
  }
  ;
  this.r9 = function(o0) {
    return String(this.data[o0].value);
  }
  ;
  function r4(z, type, rA, em) {
    bY.dZ.data.push({
      o0: z,
      type: type || 0,
      value: rA || 0,
      rA: rA || 0,
      em: em || 0
    });
  }
  function r5(z, type, rA, em) {
    bY.dZ.data.push({
      o0: z,
      type: type,
      value: rA || "",
      rA: rA || "",
      em: em || 0
    });
  }
  function r6(m3) {
    var z;
    for (z = bY.dZ.data.length; z < m3; z++) {
      bY.dZ.data.push(null);
    }
  }
}
function qz() {
  this.rB = function(o0, em) {
    return Number(this.rC(o0, em));
  }
  ;
  this.rC = function(o0, em) {
    var el = null;
    if (m.id === 0) {
      if (m.rD) {
        el = m.rD.getItem((em ? "v" : "d") + o0);
      }
    } else if (m.id === 1) {
      el = m.rE.loadString((em ? 1000 : 2000) + o0);
    } else if (m.id === 2) {
      el = m.rF[(em ? "v" : "d") + o0];
    }
    if (!el || el.length === 0) {
      return null;
    }
    return el;
  }
  ;
  this.rG = function(eI, rH) {
    var z;
    var ey = [];
    var rI = rH ? "e" : "l";
    if (m.id === 0) {
      if (m.rD) {
        for (z = 0; z < eI; z++) {
          ey.push(m.rD.getItem(rI + z));
        }
      }
    } else if (m.id === 1) {
      var rJ = rH ? 5000 : 3000;
      for (z = 0; z < eI; z++) {
        ey.push(m.rE.loadString(rJ + z));
      }
    } else if (m.id === 2) {
      for (z = 0; z < eI; z++) {
        ey.push(m.rF[rI + z]);
      }
    }
    return ey;
  }
  ;
  this.save = function(o0, value, em) {
    var rK = (em ? "v" : "d") + o0;
    if (m.id === 0) {
      if (m.rD && bY.dZ.data[140].value) {
        m.rD.setItem(rK, value);
      }
      return;
    }
    if (m.id === 1) {
      m.rE.saveString((em ? 1000 : 2000) + o0, value);
      return;
    }
    if (m.id === 2) {
      m.rF[rK] = value;
      m.rL.postMessage(rK + " " + value);
    }
  }
  ;
  this.rM = function(ey, rH) {
    var z;
    var eI = ey.length;
    var rI = rH ? "e" : "l";
    if (m.id === 0) {
      if (m.rD && bY.dZ.data[140].value) {
        for (z = 0; z < eI; z++) {
          m.rD.setItem(rI + z, ey[z]);
        }
      }
    } else if (m.id === 1) {
      var rJ = rH ? 5000 : 3000;
      for (z = 0; z < eI; z++) {
        m.rE.saveString(rJ + z, ey[z]);
      }
    } else if (m.id === 2) {
      for (z = 0; z < eI; z++) {
        m.rF[rI + z] = ey[z];
        m.rL.postMessage(rI + z + " " + ey[z]);
      }
    }
  }
  ;
}
function r3() {
  this.dH = function() {
    rN();
    rO();
    // bY.dZ.data[10].value = bY.dZ.data[10].rA;
    // Set default lobby to 2
    bY.dZ.data[10].value = 2;
  }
  ;
  function rN() {
    var data = bY.dZ.data;
    if (data[2].em === 0 && (an.ir > an.t || m.id !== 0)) {
      data[2].value = data[2].rA = 1;
    }
    if (data[100].em === 0) {
      data[100].value = data[100].rA = (m.id === 0 ? "Player " : m.id === 1 ? "Android User " : "iOS User ") + Math.floor(1000 * Math.random());
    }
  }
  function rO() {
    var z, el;
    var data = bY.dZ.data;
    var eI = data.length;
    for (z = 0; z < eI; z++) {
      if (data[z] && data[z].em === bY.pD.rB(z, true)) {
        el = bY.pD.rC(z);
        data[z].value = el === null ? data[z].rA : (data[z].type === 2 ? el : Number(el));
      }
    }
  }
}
function r2() {
  this.rP = function() {
    if (!bY.dZ.data[110].value.length) {
      return;
    }
    bY.dZ.data[106].value = bY.dZ.data[110];
    bY.pY.pZ(110, "");
    this.rQ();
  }
  ;
  this.rQ = function() {
    var z;
    var ey = bY.dZ.data[116].value.split(";");
    if (ey.length % 2 === 1) {
      ey.pop();
    }
    ey.unshift(bY.dZ.data[106].value);
    ey.unshift(bY.dZ.data[105].value);
    for (z = 2; z < ey.length; z += 2) {
      if (ey[z] === ey[0]) {
        ey.splice(z, 2);
        break;
      }
    }
    var rR = [];
    for (z = 0; z < ey.length; z += 2) {
      rR.push(ey[z]);
    }
    rS(ey);
    bY.dZ.data[117].value = 0;
    bY.dZ.data[117].qT = rR;
  }
  ;
  this.rT = function(o0) {
    bY.dZ.data[117].qT.splice(o0, 1);
    bY.dZ.data[117].value = Math.min(o0, bY.dZ.data[117].qT.length - 1);
    var ey = bY.dZ.data[116].value.split(";");
    ey.splice(2 * o0, 2);
    rS(ey);
  }
  ;
  this.rU = function(o0) {
    var ey = bY.dZ.data[116].value.split(";");
    return {
      px: ey[2 * o0],
      password: ey[2 * o0 + 1]
    };
  }
  ;
  function rS(ey) {
    if (ey.length === 0) {
      bY.pY.pZ(116, "");
      return;
    }
    var rV = ey[0];
    for (var z = 1; z < ey.length; z++) {
      rV += ";" + ey[z];
    }
    bY.pY.pZ(116, rV);
  }
  this.rW = function() {
    var el = bB.oV(bY.dZ.data[121].value, -1, 262143);
    if (el === -1) {
      el = ~~(Math.random() * 262144);
    }
    return el;
  }
  ;
}
function r1() {
  this.pZ = function(o0, value) {
    if (bY.dZ.data[o0].value === value) {
      return;
    }
    bY.dZ.da(o0, value);
    if (o0 === 0) {
      i.rX();
      az.dH();
      i.j(2);
      return;
    }
    if (o0 === 1) {
      an.dR(1);
      return;
    }
    if (o0 === 2) {
      an.dR(0);
      return;
    }
    if (o0 === 5) {
      b2.ow.rY();
      an.dR(0);
      return;
    }
  }
  ;
  this.rZ = function() {
    var z;
    var data = bY.dZ.data;
    for (z = 0; z < 100; z++) {
      if (data[z]) {
        bY.dZ.da(z, data[z].rA);
      }
    }
    b2.ow.rY();
    an.dR(1);
    az.dH();
  }
  ;
  this.ra = function() {
    var data = bY.dZ.data;
    for (var z = 0; z < data.length; z++) {
      if (data[z]) {
        bY.dZ.pZ(z, data[z].rA);
      }
    }
  }
  ;
  this.rb = function() {
    var z;
    var ec = bY.dZ;
    for (z = 128; z < 135; z++) {
      ec.da(z, ec.data[z].rA);
    }
  }
  ;
  this.rc = function(data) {
    bY.pY.pZ(109, data.py);
    bY.pY.pZ(107, data.rd);
    bY.pY.pZ(108, data.re);
    bY.pY.pZ(112, data.rf);
    bY.pY.pZ(111, data.rg);
    bY.pY.pZ(113, data.rh);
    bY.pY.pZ(122, data.username);
    bY.pY.pZ(135, data.ri);
    bY.pY.pZ(136, data.rj);
    bY.pY.pZ(137, data.rk);
    bY.pY.pZ(138, data.rl);
    bY.pY.pZ(139, data.rm);
    bY.pY.pZ(141, data.rn);
    bY.pY.pZ(142, data.ro);
    bY.pY.pZ(143, data.rp);
    bY.pY.pZ(144, data.rq);
  }
  ;
}
function bm() {
  this.q2 = new rr();
  this.rs = new rt();
  this.dH = function() {
    this.q2.dH();
  }
  ;
}
function rt() {
  this.ru = function(size) {
    var rv = b7;
    var ey = [];
    for (var z = 0; z < size; z++) {
      ey.push(String.fromCharCode(rv.o1(16)));
    }
    return ey.join("");
  }
  ;
  this.rw = function(od) {
    od = od.trim();
    if (od.length > 20) {
      return od.substring(0, 20);
    }
    return od;
  }
  ;
}
function rr() {
  var rx = new Uint8Array(78);
  this.dH = function() {
    var z;
    rx[50] = 37;
    for (z = 0; z < 10; z++) {
      rx[z + 3] = z + 1;
    }
    for (z = 0; z < 26; z++) {
      rx[z + 20] = z + 11;
      rx[z + 52] = z + 38;
    }
  }
  ;
  this.ry = function(od) {
    return od.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]","g"), "-");
  }
  ;
  this.rz = function(od, size) {
    od = this.ry(od);
    if (od.length > size) {
      return od.substring(0, size);
    }
    while (od.length < size) {
      od = "-" + od;
    }
    return od;
  }
  ;
  this.s0 = function(od) {
    var z;
    var s1 = rx;
    var eI = od.length;
    var ey = new Uint8Array(eI);
    for (z = 0; z < eI; z++) {
      ey[z] = s1[od.charCodeAt(z) - 45];
    }
    return ey;
  }
  ;
  this.s2 = function(s3) {
    b4.v(6 * s3.length);
    this.s4(s3);
    b7.dH(b4.a0);
  }
  ;
  this.s4 = function(s3) {
    var eI = s3.length;
    var t = b4;
    for (var z = 0; z < eI; z++) {
      t.w(6, s3[z]);
    }
  }
  ;
  this.s5 = function(od) {
    this.s4(this.s0(od));
  }
  ;
  this.s6 = function(od, size) {
    this.s4(this.s0(this.rz(od, size)));
  }
  ;
  this.s7 = function(od, size) {
    var ey = this.s0(this.rz(od, size));
    var el = 0;
    var lw = 1;
    for (var z = ey.length - 1; z >= 0; z--) {
      el += lw * ey[z];
      lw *= 64;
    }
    return el;
  }
  ;
}
function s8() {
  var t, ir;
  var s9;
  this.sA = function(od) {
    var z, sB, eI, k8, fo, sC, sD, sE;
    var rv = b7;
    b6.q2.s2(b6.q2.s0(od));
    bI.eT = t = rv.o1(12);
    bI.eU = ir = rv.o1(12);
    s9 = [-t, -1, t, 1];
    sF();
    eI = rv.o1(12);
    sB = rv.o1(5);
    sC = sG(t * ir - 1);
    for (z = 0; z < eI; z++) {
      k8 = rv.o1(sB);
      fo = rv.o1(sC);
      sD = rv.o1(1) === 1;
      sE = rv.o1(1) === 1;
      sH(k8, fo, sD, sE);
    }
    sI();
    bI.sJ.putImageData(bI.sK, 0, 0);
    bI.sL = true;
    bI.sM.dH();
    bU.dO = true;
  }
  ;
  function sF() {
    bI.sN = document.createElement("canvas");
    bI.sN.width = bI.eT;
    bI.sN.height = bI.eU;
    bI.sJ = bI.sN.getContext("2d", {
      alpha: false
    });
    bI.sK = bI.sJ.getImageData(0, 0, bI.eT, bI.eU);
    bI.sO = bI.sK.data;
    b2.p6.sP(bI.sO);
  }
  function sH(k8, fo, sD, sE) {
    var z, eL;
    var rv = b7;
    var sQ = bI.sO;
    var sR = fo;
    var sS = fo;
    var sT = 0;
    var sU = 1 + sD;
    var sV = 2 - sD;
    sQ[fo << 2] = sU;
    for (z = 0; z < k8; z++) {
      eL = rv.o1(2);
      fo = sW(fo, eL);
      if (sQ[fo << 2] === sU) {
        if (sT % 2 === 1) {
          sX(sS, sT + 2 * sE + 3, sV, sE, sQ);
        }
      } else {
        sQ[fo << 2] = sU;
      }
      sX(fo, eL, sV, sE, sQ);
      sX(sS, eL, sV, sE, sQ);
      sS = fo;
      sT = eL;
    }
    if (sW(fo, 0) === sR) {
      sX(fo, 0, sV, sE, sQ);
      sX(sR, 0, sV, sE, sQ);
    } else if (sW(fo, 1) === sR) {
      sX(fo, 0, sV, sE, sQ);
      sX(sR, 2, sV, sE, sQ);
    }
    if (k8 === 0) {
      sX(sR, 0, sV, sE, sQ);
      sX(sR, 2, sV, sE, sQ);
    }
  }
  function sX(gh, eL, sV, sE, sQ) {
    var sY = sW(gh, (eL + 1 + 2 * sE) & 3);
    if (!sZ(gh, sY) && sQ[sY << 2] === 0) {
      sQ[sY << 2] = sV;
    }
  }
  function sZ(gh, sY) {
    return Math.abs(sa(gh) - sa(sY)) > 1 || Math.abs(sb(gh) - sb(sY)) > 1;
  }
  function sa(fo) {
    return fo % t;
  }
  function sb(fo) {
    return Math.floor((fo + 0.5) / t) % ir;
  }
  function sW(fo, eL) {
    return fo + s9[eL];
  }
  function sI() {
    var eP, eR, kB, sc, sd, se;
    var sQ = bI.sO;
    var sf = true;
    var sg = bI.ji.sh[bI.fz].sg;
    var si = bI.ji.sh[bI.fz].si;
    for (eR = 0; eR < ir; eR++) {
      sc = true;
      sd = sf;
      se = 0;
      for (eP = 0; eP < t; eP++) {
        kB = 4 * eR * t + 4 * eP;
        if (eP >= se && sQ[kB] > 0) {
          sd = sQ[kB] === 2;
          if (sc) {
            sc = false;
            if (sd !== sf) {
              sf = sd;
              se = eP + 1;
              eP = -1;
              continue;
            }
          }
        }
        if (sd) {
          sQ[kB] = si[0];
          sQ[kB + 1] = si[1];
          sQ[kB + 2] = si[2];
          sQ[kB + 3] = 255;
        } else {
          sQ[kB] = sg[0];
          sQ[kB + 1] = sg[1];
          sQ[kB + 2] = sg[2];
          sQ[kB + 3] = 255;
        }
      }
    }
  }
}
function br() {
  var eP, eR, t, ir, sj, sk, sl, sm, player, ey;
  this.dH = function() {
    var z;
    ey = new Array(12);
    sm = 6;
    sj = 10;
    t = bB.ek(bI.eT, sj);
    ir = bB.ek(bI.eU, sj);
    sk = bB.ek((bI.eT - sj * t), 2);
    sl = bB.ek((bI.eU - sj * ir), 2);
    if (a1.gd) {
      for (z = 0; z < a1.jN; z++) {
        player = z;
        sn();
        aV.lI[player] = 1;
      }
    }
    if (ay.jh && ay.ji.so) {
      sp();
    } else {
      sq();
    }
    bS.lE[7] = aV.g6[a1.e2];
    bS.lE[8] = aV.gK[a1.e2];
  }
  ;
  function sq() {
    var sr, ss;
    for (player = 0; player < a1.eF; player++) {
      if (aV.lI[player] === 1) {
        continue;
      }
      if (player < a1.st && su()) {
        sr = sk + eP * sj + bB.ek(sj, 2);
        ss = sl + eR * sj + bB.ek(sj, 2);
        sv(sr, ss);
      } else {
        sn();
      }
    }
  }
  function sp() {
    var sr, ss;
    for (player = 0; player < a1.eF; player++) {
      if (aV.lI[player] === 1) {
        continue;
      }
      if (player < a1.st) {
        if (sw()) {
          continue;
        }
        if (su()) {
          sr = sk + eP * sj + bB.ek(sj, 2);
          ss = sl + eR * sj + bB.ek(sj, 2);
          sv(sr, ss);
          continue;
        }
      }
      sn();
    }
  }
  function su() {
    return sx() || sy();
  }
  function sw() {
    var sr = ay.ji.so[player] + 1;
    var ss = ay.ji.sz[player] + 1;
    if (sr > 3 && sr < bI.eT - 5 && ss > 3 && ss < bI.eU - 5) {
      if (aQ.eD(aQ.t0(sr, ss)) && t1(sr + 3, ss + 3)) {
        sv(sr + 1, ss + 1);
        return true;
      }
    }
    return false;
  }
  function sx() {
    var z;
    for (z = 0; z < 8; z++) {
      eP = bB.ek(t * ao.random(), ao.value(100));
      eR = bB.ek(ir * ao.random(), ao.value(100));
      if (t2()) {
        return true;
      }
    }
    return false;
  }
  function sy() {
    var hR, hU, eb, ss, ec, sr;
    hR = bB.ek(t * ao.random(), ao.value(100));
    hU = bB.ek(ir * ao.random(), ao.value(100));
    for (eb = 40; eb >= 1; eb--) {
      for (ss = ir - eb; ss >= 0; ss -= 40) {
        eR = (ss + hU) % ir;
        for (ec = 40; ec >= 1; ec--) {
          for (sr = t - ec; sr >= 0; sr -= 40) {
            eP = (sr + hR) % t;
            if (t2()) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  function t2() {
    var fo, t3, t4;
    var gap = bB.ek((sj - sm), 2);
    var t5 = sl + eR * sj + gap;
    var t6 = sk + eP * sj + gap;
    for (t3 = t5 + sm - 1; t3 >= t5; t3--) {
      for (t4 = t6 + sm - 1; t4 >= t6; t4--) {
        fo = aQ.t0(t4, t3);
        if (!aQ.eD(fo) || aQ.iW(fo)) {
          return false;
        }
      }
    }
    return true;
  }
  function sv(sr, ss) {
    sn();
    t7(sr - 2, ss - 2);
  }
  function sn() {
    aV.lI[player] = 0;
    aV.gK[player] = 0;
    aV.g6[player] = aV.t8[player] = 0;
    aV.fi[player] = [];
    aV.fw[player] = [];
    aV.fx[player] = [];
    aV.ei[player] = [];
    aV.ht[player] = aV.hv[player] = aV.hu[player] = aV.hw[player] = 0;
  }
  function t7(sr, ss) {
    aV.lI[player] = 1;
    if (player < a1.jN) {
      aV.gK[player] = a1.t9;
    } else {
      aV.gK[player] = a2.jd[a2.iU[player]];
    }
    aV.ht[player] = sr + 10;
    aV.hv[player] = ss + 10;
    aV.hw[player] = aV.hu[player] = 0;
    var fo, z, tA, tB;
    for (tA = sr; tA < sr + 4; tA++) {
      for (tB = ss; tB < ss + 4; tB++) {
        if ((tA > sr && tA < sr + 3) || (tB > ss && tB < ss + 3)) {
          fo = aQ.t0(tA, tB);
          if (aQ.eD(fo)) {
            aV.ht[player] = tA < aV.ht[player] ? tA : aV.ht[player];
            aV.hu[player] = tA > aV.hu[player] ? tA : aV.hu[player];
            aV.hv[player] = tB < aV.hv[player] ? tB : aV.hv[player];
            aV.hw[player] = tB > aV.hw[player] ? tB : aV.hw[player];
            ey[aV.g6[player]] = fo;
            aV.g6[player]++;
            aQ.tC(fo, player);
          }
        }
      }
    }
    aV.t8[player] = aV.g6[player];
    for (z = aV.g6[player] - 1; z >= 0; z--) {
      if (aQ.tD(ey[z], player)) {
        aQ.fl(ey[z], player);
        aV.fw[player].push(ey[z]);
      } else if (aQ.tE(ey[z])) {
        aQ.fl(ey[z], player);
        aV.fx[player].push(ey[z]);
      } else if (aQ.tF(ey[z])) {
        aQ.fl(ey[z], player);
        aV.ei[player].push(ey[z]);
      }
    }
  }
  this.tG = function(iT, tH, tI) {
    var z, sr, ss;
    player = iT;
    for (z = 0; z < 20; z++) {
      for (sr = tH + z; sr >= tH - z; sr--) {
        for (ss = tI + z; ss >= tI - z; ss--) {
          if (sr === tH + z || sr === tH - z || ss === tI + z || ss === tI - z) {
            if (sr > 3 && sr < bI.eT - 5 && ss > 3 && ss < bI.eU - 5) {
              if (aQ.eD(aQ.t0(sr, ss)) && t1(sr + 3, ss + 3)) {
                if (aV.g6[player] > 0) {
                  tJ();
                  sn();
                }
                t7(sr - 1, ss - 1);
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }
  ;
  function tJ() {
    var fo, eP, eR;
    for (eP = aV.hu[player]; eP >= aV.ht[player]; eP--) {
      for (eR = aV.hw[player]; eR >= aV.hv[player]; eR--) {
        fo = (eR * bI.eT + eP) * 4;
        if (aQ.tK(player, fo)) {
          aQ.tL(fo);
          aV.g6[player]--;
        }
      }
    }
  }
  this.tM = function(iT) {
    player = iT;
    if (su()) {
      var sr = sk + eP * sj + bB.ek(sj, 2);
      var ss = sl + eR * sj + bB.ek(sj, 2);
      sv(sr, ss);
    } else {
      sn();
    }
  }
  ;
  function t1(sr, ss) {
    var fo, t4, t3;
    for (t3 = ss; t3 > ss - 6; t3--) {
      for (t4 = sr; t4 > sr - 6; t4--) {
        fo = aQ.t0(t4, t3);
        if (aQ.iW(fo)) {
          return false;
        }
      }
    }
    return true;
  }
}
function tN() {
  ag.tO();
  qo.setTransform(hh, 0, 0, hh, 0, 0);
  qo.imageSmoothingEnabled = hh < 3;
  qo.drawImage(bI.sN, aF.tP(), aF.tQ());
  bF.tR.qn();
  qo.drawImage(tS, aF.tP(), aF.tQ());
  ag.qn();
  bD.qn();
  aU.qn();
  if (a1.ln) {
    bW.qn();
    b3.qn();
    i.qn();
    return;
  }
  aA.qn();
  aI.qn();
  aE.qn();
  b3.qn();
  al.qn();
  aJ.qn();
  aF.qn();
  aD.qn();
  bW.qn();
  aH.qn();
  aC.qn();
  a9.qn();
  a8.qn();
  aK.qn();
  bT.qn();
  ai.qn();
  i.qn();
}
function tT(tU, t, ir) {
  tU.clearRect(0, 0, t, ir);
  tU.fillStyle = p.mI;
  tU.fillRect(0, 0, t, ir);
}
function tV(tU, t, ir, tW) {
  tU.fillStyle = p.mL;
  tU.fillRect(0, 0, t, tW);
  tU.fillRect(0, 0, tW, ir);
  tU.fillRect(t - tW, 0, tW, ir);
  tU.fillRect(0, ir - tW, t, tW);
}
function tX(tU, eP, eR, gu, tW, fo, tY) {
  tU.fillStyle = p.mL;
  var q7 = Math.floor(gu * fo);
  q7 += (q7 - tW) % 2;
  var q8 = Math.floor((q7 - tW) / 2);
  var tZ = Math.floor((gu - q7) / 2);
  tU.fillRect(eP + tZ, eR + tZ + q8, q7, tW);
  if (tY) {
    tU.fillRect(eP + tZ + q8, eR + tZ, tW, q7);
  }
}
function ta() {
  this.tb = null;
  this.dH = function(tb) {
    this.tb = tb;
    aA.tc(this.tb);
  }
  ;
  this.td = function(te) {
    var hF = (this.tb[te].tf - this.tb[1 - te].tf) / 10;
    var tg = 8 / (1 + Math.pow(2, hF / 32));
    tg = Math.floor(10 * tg + 0.5);
    var th = this.ti(this.tb[te].tf + tg + 1);
    var tj = this.ti(this.tb[1 - te].tf - tg);
    if (te === 0) {
      aA.tk(this.tb, th, tj, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]);
    } else {
      aA.tk(this.tb, tj, th, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]);
    }
  }
  ;
  this.ti = function(tf) {
    tf = tf < 0 ? 0 : tf > 16000 ? 16000 : tf;
    if (tf >= 16000) {
      return "Unknown";
    }
    return (tf / 10).toFixed(1);
  }
  ;
}
function cN() {
  this.tl = new tm();
  this.sQ = new tn();
}
function tn() {
  this.to = false;
  var lk, ll, gap, gu, tp;
  var tq = 10;
  var tr = 1;
  this.ts = [];
  this.tt = 100;
  var tu = 0;
  var tv = new Array(9);
  var tw = [];
  var tx = [];
  var ty = 0;
  var tz = 0;
  var u0 = 0;
  var u1 = 0;
  this.dH = function() {
    var z;
    var qE = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6];
    for (z = 0; z < qE.length; z++) {
      var color = qE[z] === 6 ? p.mh : p.mJ;
      this.ts.push(b2.h0.u2(aP.get(3), qE[z], color));
    }
    for (z = 0; z < aY.tl.u3; z++) {
      tx.push(aY.tl.u4 - aY.tl.u3 + z);
    }
    for (z = 0; z < aY.tl.u5; z++) {
      tx.push(aY.tl.u6 + z);
    }
    var u7 = aY.tl.u8(bA.u7);
    for (z = 0; z < u7.length; z++) {
      tx.push(u7[z]);
    }
    u9();
  }
  ;
  function u9() {
    var z;
    var od = bY.dZ.data[120].value;
    var ey = od.split(",");
    if (ey.length !== 18) {
      for (z = 0; z < 9; z++) {
        tv[z] = {
          na: 1024 - 9 + z,
          jV: 0
        };
      }
      return;
    }
    for (z = 0; z < 9; z++) {
      var el = parseInt(ey[z]);
      el = (el >= 0 && el < aY.tl.u4) ? el : 0;
      var ed = parseInt(ey[z + 9]);
      ed = (ed >= 0 && ed < 1000) ? ed : 0;
      tv[z] = {
        na: el,
        jV: ed
      };
    }
  }
  function uA() {
    var z;
    tw = [];
    if (tu === 0) {
      for (z = 0; z < 9; z++) {
        tw.push(tv[z].na);
      }
    } else {
      var ec = 49 * tu;
      var eb = ec - 49;
      if (eb >= tx.length) {
        tu = 1;
        eb = 0;
        ec = 49;
      }
      ec = Math.min(ec, tx.length);
      eb = ec - 49;
      for (z = eb; z < ec; z++) {
        tw.push(tx[z]);
      }
    }
    tw.push(1024);
  }
  function uB(na) {
    var z;
    for (z = 0; z < 9; z++) {
      tv[z].jV = Math.floor(tv[z].jV * 0.99);
    }
    for (z = 0; z < 9; z++) {
      if (na === tv[z].na) {
        tv[z].jV = Math.min(tv[z].jV + 30, 999);
        uC();
        return;
      }
    }
    tv.splice(5, 0, {
      na: na,
      jV: Math.max(tv[4].jV, 30)
    });
    tv.pop();
    uC();
  }
  function uC() {
    var z;
    tv.sort(function(eb, ec) {
      return ec.jV - eb.jV;
    });
    var od = "" + tv[0].na;
    for (z = 1; z < 9; z++) {
      od += "," + tv[z].na;
    }
    for (z = 0; z < 9; z++) {
      od += "," + tv[z].jV;
    }
    bY.dZ.da(120, od);
  }
  this.show = function(kU, kV, uD) {
    ty = kU;
    tz = kV;
    tu = uD || 0;
    this.to = true;
    uA();
    var fj = tw.length;
    gu = Math.floor((m.n.uE() ? 0.075 : 0.0468) * an.oy);
    gap = Math.floor(gu / 3);
    tp = gu + gap;
    u0 = tq * tp;
    if (u0 > an.t) {
      u0 = an.t;
      tp = u0 / tq;
      gu = 3 * tp / 4;
      gap = tp - gu;
    }
    tr = bB.ek(fj, tq) + !!(fj % tq);
    u1 = tr * tp;
    if (u1 > an.ir) {
      u1 = an.ir;
      tp = u1 / tr;
      gu = 3 * tp / 4;
      gap = tp - gu;
    }
    var uF = 0.5 * gap;
    lk = Math.min(Math.max(kU - 0.5 * u0 + uF, uF), an.t - u0 + uF);
    ll = Math.min(Math.max(kV - 0.5 * u1 + uF, uF), an.ir - u1 + uF);
  }
  ;
  this.gV = function(kU, kV, player) {
    if (!this.to) {
      return false;
    }
    if (this.uG(kU, kV)) {
      var o0 = bB.oV(bB.ek(kU - lk + 0.5 * gap, tp), 0, tq - 1);
      o0 += tq * bB.oV(bB.ek(kV - ll + 0.5 * gap, tp), 0, tq - 1);
      if (o0 >= tw.length) {
        a8.qK();
        return true;
      }
      var na = tw[o0];
      if (na === 1024) {
        this.show(ty, tz, tu + 1);
        return true;
      }
      uB(na);
      if (player === a1.e2) {
        b0.ge.nZ(na);
      } else {
        b0.fd.np(na, player);
      }
    }
    a8.qK();
    return true;
  }
  ;
  this.uG = function(kU, kV) {
    return !(kU < lk - 0.5 * gap || kV < ll - 0.5 * gap || kU >= lk + u0 - 0.5 * gap || kV >= ll + u1 - 0.5 * gap);
  }
  ;
  this.qn = function() {
    qo.fillStyle = p.mI;
    qo.fillRect(lk - 0.5 * gap, ll - 0.5 * gap, u0, u1);
    var kB = 0.5 * bR.uH;
    qo.lineWidth = bR.uH;
    qo.strokeStyle = qo.fillStyle = p.mL;
    qo.strokeRect(lk - 0.5 * gap + kB, ll - 0.5 * gap + kB, u0 - 2 * kB, u1 - 2 * kB);
    qo.imageSmoothingEnabled = true;
    var eI = tw.length;
    for (var z = 0; z < eI; z++) {
      this.uI(tw[z], qo, lk + (z % tq) * tp, ll + bB.ek((z), tq) * tp, gu);
    }
    qo.imageSmoothingEnabled = false;
  }
  ;
  this.uI = function(na, h1, eP, eR, gu) {
    if (na >= 1024 - aY.tl.u3) {
      var dy = gu / this.tt;
      h1.setTransform(dy, 0, 0, dy, eP, eR);
      h1.drawImage(this.ts[na - 1024 + aY.tl.u3], 0, 0);
      h1.setTransform(1, 0, 0, 1, 0, 0);
      return;
    }
    b2.ow.textAlign(h1, 1);
    b2.ow.textBaseline(h1, 1);
    h1.font = b2.ow.q5(0, 0.89 * gu);
    h1.fillText(aY.tl.uJ(na), eP + 0.5 * gu, eR + (0.56 + (0.35 - b2.ow.uK)) * gu);
  }
  ;
}
function tm() {
  this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉", "🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"];
  this.u3 = 13;
  this.u5 = this.emojis.length;
  this.u6 = 676;
  this.u4 = 1024;
  this.uL = this.emojis.indexOf("💀");
  this.uM = this.uL + 1;
  this.uN = this.emojis.indexOf("🥇");
  this.uO = this.emojis.indexOf("😊");
  this.uJ = function(el) {
    if (el < this.u6) {
      return String.fromCharCode(55356, 56806 + bB.ek(el, 26), 55356, 56806 + el % 26);
    }
    return this.emojis[Math.min(el - this.u6, this.u5 - 1)];
  }
  ;
  this.u8 = function(od) {
    var eI = od.length - 2;
    var ey = [];
    for (var z = 0; z < eI; z++) {
      var hA = od.charCodeAt(z) - 56806;
      var hB = od.charCodeAt(z + 2) - 56806;
      if (hA >= 0 && hA < 26 && hB >= 0 && hB < 26) {
        ey.push(26 * hA + hB);
        z += 3;
      }
    }
    return ey;
  }
  ;
  this.uP = function(el) {
    return el < this.u6;
  }
  ;
  this.uQ = function(el) {
    return el >= 1024 - this.u3;
  }
  ;
  this.uR = function(el) {
    return el >= this.u6 && el < this.u6 + this.uM;
  }
  ;
}
function bl() {
  this.q2 = new uS();
  this.rs = new uT();
  this.dH = function() {
    this.q2.dH();
  }
  ;
}
function uT() {
  this.s5 = function(od) {
    var eI = od.length;
    var t = b4;
    for (var z = 0; z < eI; z++) {
      t.w(16, od.charCodeAt(z));
    }
  }
  ;
}
function uS() {
  var uU = new Uint8Array(64);
  this.dH = function() {
    var z;
    uU[0] = 45;
    uU[37] = 95;
    for (z = 0; z < 10; z++) {
      uU[z + 1] = 48 + z;
    }
    for (z = 0; z < 26; z++) {
      uU[z + 11] = 65 + z;
      uU[z + 38] = 97 + z;
    }
  }
  ;
  this.q4 = function(uV) {
    var z;
    var rv = b7;
    var s3 = new Uint8Array(uV);
    for (z = 0; z < uV; z++) {
      s3[z] = rv.o1(6);
    }
    return s3;
  }
  ;
  this.q3 = function(s3) {
    var z;
    var eI = s3.length;
    var uW = uU;
    var ey = [];
    for (z = 0; z < eI; z++) {
      ey.push(String.fromCharCode(uW[s3[z]]));
    }
    return ey.join("");
  }
  ;
}
function bs() {
  var uX;
  var uY;
  var uZ;
  function ua() {
    uX = [32, 65, 191, 913, 931];
    uY = [64, 127, 688, 930, 1155];
    uZ = new Array(uX.length + 1);
    for (var z = 0; z < uZ.length; z++) {
      uZ[z] = 0;
      for (var eb = z - 1; eb >= 0; eb--) {
        uZ[z] += uY[eb] - uX[eb];
      }
    }
  }
  ua();
  this.rw = function(od) {
    od = od.trim();
    if (od.indexOf("Bot ") === 0) {
      return false;
    }
    if (od.indexOf("[Bot] ") === 0) {
      return false;
    }
    return ub(od, 3, 20);
  }
  ;
  function ub(od, uc, ud) {
    od = od.trim();
    var eI = od.length;
    if (eI < uc || eI > ud) {
      return false;
    }
    var ue = 0;
    var ed;
    for (var z = 0; z < eI; z++) {
      ed = od.charCodeAt(z);
      ue += ((ed >= 65 && ed <= 90) || (ed >= 1040 && ed <= 1071)) ? 1 : 0;
      if (uf(ed) === -1) {
        return false;
      }
    }
    if (ue > 3 && ue > Math.floor(eI / 2)) {
      return false;
    }
    return true;
  }
  this.ug = function(od) {
    od = od.trim();
    var eI = od.length;
    var ey = [];
    var ed;
    for (var z = 0; z < eI; z++) {
      ed = od.charCodeAt(z);
      var fo = uf(ed);
      ey.push(uZ[fo] + ed - uX[fo]);
    }
    return ey;
  }
  ;
  this.sA = function(ey) {
    var od = "";
    var eI = ey.length;
    var ed, ec;
    for (var z = 0; z < eI; z++) {
      for (ec = 1; ec < uZ.length; ec++) {
        if (ey[z] < uZ[ec]) {
          ed = uX[ec - 1] + ey[z] - uZ[ec - 1];
          od += String.fromCharCode(ed);
          break;
        }
      }
    }
    return od;
  }
  ;
  function uf(ed) {
    for (var z = uX.length - 1; z >= 0; z--) {
      if (ed >= uX[z] && ed < uY[z]) {
        return z;
      }
    }
    return -1;
  }
  this.uh = function(od) {
    var ey = this.ug(od);
    var result = "";
    for (var z = 0; z < ey.length; z++) {
      result += ey[z] < 10 ? "00" : ey[z] < 100 ? "0" : "";
      result += ey[z].toString(10);
    }
    return result;
  }
  ;
  this.ui = function(od) {
    var ey = new Array(Math.floor(od.length / 3));
    for (var z = 0; z < od.length; z += 3) {
      ey[Math.floor(z / 3)] = parseInt(od.substring(z, z + 3));
    }
    return this.sA(ey);
  }
  ;
  this.uj = function(od) {
    var z, el;
    var ey = [od.length];
    for (z = 0; z < od.length; z++) {
      ey[z] = od.charCodeAt(z) - 48;
    }
    var result = "";
    for (z = 0; z < od.length; z++) {
      if (z === od.length - 1 || ey[z] * 10 + ey[z + 1] > 51) {
        result += ey[z].toString();
      } else {
        el = ey[z] * 10 + ey[z + 1];
        result += String.fromCharCode(el + (el < 26 ? 65 : 71));
        z++;
      }
    }
    return result;
  }
  ;
  this.uk = function(od) {
    var result = "";
    var ed;
    for (var z = 0; z < od.length; z++) {
      ed = od.charCodeAt(z);
      if (ed >= 48 && ed < 58) {
        result += String.fromCharCode(ed);
      } else if (ed >= 65 && ed < 75) {
        result += "0" + (ed - 65).toString();
      } else if (ed >= 75 && ed < 91) {
        result += (ed - 65).toString();
      } else if (ed >= 97 && ed < 123) {
        result += (ed - 71).toString();
      }
    }
    return result;
  }
  ;
  this.ul = function(od) {
    var eI = od.length;
    var ed, z;
    var ey = [];
    for (z = 0; z < eI; z++) {
      ed = od.charCodeAt(z);
      if (ed < 58) {
        ey.push(od[z]);
        continue;
      } else if (ed < 91) {
        ed -= 65;
      } else {
        ed -= 71;
      }
      ey.push(String(bB.ek(ed, 10)));
      ey.push(String(ed - 10 * bB.ek(ed, 10)));
    }
    eI = ey.length - 2;
    ed = 0;
    var s3 = [];
    for (z = 0; z < eI; z += 3) {
      s3[ed++] = parseInt(ey[z] + ey[z + 1] + ey[z + 2]);
    }
    return s3;
  }
  ;
  this.um = function() {
    var z, h3;
    var un = "";
    for (z = 0; z < 6; z++) {
      h3 = 48 + ao.random() % 36;
      h3 += h3 >= 58 ? 39 : 0;
      un += String.fromCharCode(h3);
    }
    return un;
  }
  ;
}
function cu() {
  this.uo = new up();
  this.uq = new ur();
  this.result = new us();
  this.gl = new ut();
  this.uu = new uv();
  this.uw = new ux();
  this.uy = new uz();
  this.dH = function() {
    this.uu.dH();
  }
  ;
  this.iC = function() {
    this.uu.iC();
  }
  ;
}
function ut() {
  this.v0 = function() {
    var eI = aa.jO;
    var tb = aa.jQ;
    var v1 = [];
    for (var z = 0; z < eI; z++) {
      var fo = tb[z];
      if (aQ.v2(fo)) {
        v1.push(fo);
      }
    }
    return v1;
  }
  ;
  this.v3 = function() {
    var eI = aa.jO;
    var tb = aa.jQ;
    var dt = 0;
    var g6 = aV.g6;
    for (var z = 0; z < eI; z++) {
      dt += g6[tb[z]];
    }
    return dt;
  }
  ;
}
function up() {
  this.v4 = function() {
    if (v5()) {
      return;
    }
    a1.v6 = 2;
    v7();
  }
  ;
  this.v8 = function() {
    if (v5()) {
      return;
    }
    a1.v6 = 1;
    v7();
  }
  ;
  function v5() {
    if (a1.v9 === 2) {
      return true;
    }
    al.vA();
    a1.v9 = 2;
    a1.vB = a1.vC;
    return false;
  }
  function v7() {
    bH.uy.vD();
    aK.show(a1.vE === 1, false, a1.vE === 2);
    bH.result.vD();
    bH.uw.iC();
    aA.vF(true);
    aA.vG(247, 0);
    aA.vG(956, 0);
    aA.vG(957, 0);
    aI.l1(true);
    aJ.l1(true);
    al.l1();
    b3.vH();
    a1.gR && bU.vI.vJ();
    bU.dO = true;
    bQ.vK();
    m.n.setState(0);
  }
}
function ux() {
  this.iC = function() {
    if (a1.v6 === 2) {
      aA.vL(0, 59);
      a5.lt(2700);
      return;
    }
    if (a1.jl < 7) {
      vM();
      return;
    }
    if (a1.jl === 8) {
      vN();
      return;
    }
    if (a1.jl === 9) {
      vO();
      return;
    }
    vP();
  }
  ;
  function vN() {
    if (a1.vE) {
      aA.vL(a1.vQ, 2);
    } else {
      aA.vL(1 - a1.e2, 3);
    }
    a1.vR.td(a1.vQ);
    aA.vS(a1.vQ);
    a5.le(a1.vQ, 2700, false, 0);
  }
  function vM() {
    var vT = bV.vU[bW.kd()];
    var vV = bV.vW[vT];
    aD.vX(L(7, [vV]), 2, 1, 12);
    aA.vY(0, L(8, [vV]), 40, 0, p.mL, p.mI, -1, false);
    a5.lt(2700);
  }
  function vO() {
    aA.vZ();
    a5.lt(2700);
  }
  function vP() {
    aA.vS(a1.vQ);
    a5.le(a1.vQ, 2700, false, 0);
  }
}
function us() {
  this.va = 0;
  this.v1 = null;
  this.vb = 0;
  var vc = 0;
  this.vd = 0;
  this.vD = function() {
    if (bH.uu.ve) {
      return;
    }
    bH.uu.ve = true;
    if (a1.jn) {
      return;
    }
    vf(this);
    this.vg();
  }
  ;
  function vf(vh) {
    vh.v1 = bH.gl.v0();
    vh.va = bX.vi.vj();
    if (a1.jl < 7 && a1.v6 !== 2) {
      vh.vb = bW.vk();
    } else {
      vh.vb = bH.gl.v3();
    }
    if (a1.jl === 8 && a1.v6 === 1) {
      var fp = 1 - a1.vQ;
      var dt = aV.g6[fp];
      aV.g6[fp] = 0;
      b0.fd.ny();
      aV.g6[fp] = dt;
    } else {
      b0.fd.ny();
    }
    vl();
    vh.vd = 0;
    if (a1.jl < 7) {
      bH.uq.vD(vh.v1);
      return;
    }
    if (a1.jl === 7 || a1.jl === 10) {
      vm();
      return;
    }
    if (a1.jl === 8) {
      vn();
    }
  }
  function vl() {
    vc = 0.01 * aV.vo[a1.e2] / 50;
  }
  function vn() {
    if (a1.vE !== 1) {
      return;
    }
    if (bY.dZ.data[107].value === 0) {
      return;
    }
    var vp = bY.dZ.data[108].value;
    if (vp >= 100) {
      return;
    }
    bH.result.vd += 0.01 * (100 - vp) * 10;
  }
  function vm() {
    if (!b2.fd.gU(a1.e2)) {
      return;
    }
    var vq = bH.result.va * (1 + a1.vr);
    if (a1.v6 === 2) {
      bH.result.vd += vq * aV.g6[a1.e2] / bH.result.vb;
      return;
    }
    if (kf[0] === a1.e2) {
      bH.result.vd += vq;
    }
  }
  this.vg = function() {
    if (!b2.fd.gU(a1.e2)) {
      return;
    }
    if (vc >= 0.01) {
      aA.vY(0, L(9, [vc.toFixed(2)]), 40, 0, p.ma, p.mI, -1, false);
    }
    if (bH.result.vd >= 0.01) {
      aA.vY(0, L(10, [bH.result.vd.toFixed(2)]), 40, 0, p.ma, p.mI, -1, false);
    }
  }
  ;
  this.vs = function() {
    if (a1.jn) {
      return;
    }
    if (bH.uu.ve) {
      return;
    }
    var vt = aV;
    var sR = a1.e2;
    if (vt.vu[sR] === 0 || vt.iL[sR] < 1 || 2 * vt.oL[sR] > 3 * (vt.iK[sR] + vt.iL[sR])) {
      return;
    }
    var qL = 0.01 * vt.vo[sR] / 50;
    if (qL < 0.01) {
      return;
    }
    aA.vY(0, L(9, [qL.toFixed(2)]), 40, 0, p.ma, p.mI, -1, false);
  }
  ;
}
function uv() {
  this.ve = false;
  this.dH = function() {
    this.ve = false;
  }
  ;
  this.iC = function() {
    if (a1.jl >= 7) {
      return;
    }
    if (this.ve) {
      return;
    }
    if (bU.jK() % 20 !== 11) {
      return;
    }
    if (!b2.fd.kZ(90)) {
      return;
    }
    a1.v6 = 1;
    bH.uy.vD();
    bH.result.vD();
  }
  ;
}
function ur() {
  this.vD = function(v1) {
    var vT = bV.vU[bW.kd()];
    vv();
    var vw = vx(v1);
    if (!vw.length) {
      return;
    }
    if (a1.v6 === 2) {
      vy(vw);
      return;
    }
    vy(vz(vw, vT));
  }
  ;
  function vv() {
    if (!a1.vE) {
      return;
    }
    if (b2.fd.gU(a1.e2)) {
      bH.result.vd += (b2.w0.w1(aV.w2[a1.e2]) ? 2 : 1) * bH.result.va * (1 + a1.vr) * aV.g6[a1.e2] / bH.result.vb;
    }
  }
  function vy(vw) {
    var hF = (1 + a1.vr) * bH.result.va / (bH.result.vb * 100000);
    var w3 = "";
    for (var z = 0; z < vw.length; z++) {
      var w4 = vw[z].w5 * hF;
      w3 += "  " + vw[z].name + ": " + b2.w0.w6(100000 * w4);
    }
    if (w3.length) {
      aA.vY(0, L(11), 45, 0, b2.color.mD(225, 240, 255), p.mI, -1, false);
      aA.vY(0, w3.trim(), 45, 0, b2.color.mD(225, 240, 255), p.mI, -1, false);
      if (!a1.gR) {
        aA.vY(700, L(12) + bA.w7, 736, 0, p.mL, p.mf, -1, false);
      }
    }
  }
  function vx(tb) {
    var vw = [];
    var username = aV.w2;
    var eI = tb.length;
    loop: for (var z = 0; z < eI; z++) {
      var fo = tb[z];
      var w8 = b2.w0.w1(username[fo]);
      if (!w8) {
        continue;
      }
      for (var eb = vw.length - 1; eb >= 0; eb--) {
        if (vw[eb].name === w8) {
          vw[eb].w5 += aV.g6[fo];
          continue loop;
        }
      }
      vw.push({
        name: w8,
        w5: aV.g6[fo],
        w9: bV.eG[fo]
      });
    }
    vw.sort(function(eb, ec) {
      return ec.w5 - eb.w5;
    });
    return vw;
  }
  function vz(vw, vT) {
    for (var z = vw.length - 1; z >= 0; z--) {
      if (bV.vU[vw[z].w9] !== vT) {
        vw.splice(z, 1);
      }
    }
    return vw;
  }
}
function uz() {
  this.vD = function() {
    if (a1.v6 === 2) {
      a1.vE = 2;
      return;
    }
    wA();
  }
  ;
  function wA() {
    if (a1.jl === 8) {
      if (!aQ.v2(0)) {
        a1.vQ = 1;
      } else if (!aQ.v2(1)) {
        a1.vQ = 0;
      } else {
        a1.vQ = +(aV.g6[1] > aV.g6[0]);
      }
      a1.vE = +(a1.vQ === a1.e2);
      return;
    }
    if (a1.iN) {
      a1.vE = +(bV.eG[a1.e2] === bW.wB());
      return;
    }
    a1.vQ = kf[0];
    a1.vE = +(a1.vQ === a1.e2);
  }
}
function cz() {
  this.id = 0;
  this.em = 0;
  this.rD = null;
  this.rE = null;
  this.rF = null;
  this.rL = null;
  this.n = new wC();
  this.dH = function() {
    wD(this);
    wE(this);
    wF(this);
  }
  ;
  function wF(self) {
    var rD;
    if (self.id !== 0) {
      return;
    }
    try {
      rD = window.localStorage;
      if (!rD) {
        return;
      }
      rD.setItem("tls7", "1");
      rD.removeItem("tls7");
    } catch (error) {
      return;
    }
    self.rD = rD;
  }
  function wD(self) {
    var em;
    if (typeof Android === "undefined") {
      return;
    }
    if (typeof Android.getVersion !== "function") {
      return;
    }
    em = Android.getVersion();
    if (em < 12) {
      return;
    }
    self.em = em;
    self.id = 1;
    self.rE = Android;
  }
  function wE(self) {
    var em;
    if (typeof mwIOSdataX === "undefined") {
      return;
    }
    if (!window.webkit || !window.webkit.messageHandlers || !window.webkit.messageHandlers.iosCommandA) {
      return;
    }
    self.id = 2;
    self.rF = mwIOSdataX;
    self.rL = window.webkit.messageHandlers.iosCommandA;
    em = self.rF["version"];
    self.em = em ? Number(em) : 0;
  }
}
function wC() {
  this.wG = function() {
    bY.pY.rZ();
    bY.pY.ra();
    aq.kt.close(0, 3255);
    if (m.id === 0) {
      if (m.rD) {
        m.rD.clear();
      }
      return;
    }
    if (m.id === 1) {
      m.rE.saveString(199, "");
      return;
    }
    if (m.id === 2) {
      m.rL.postMessage("clear");
    }
  }
  ;
  this.wH = function() {
    if (m.id === 2) {
      m.rL.postMessage("showConsentForm");
      return;
    }
    if (m.id === 1) {
      m.rE.setState(7);
      return;
    }
    bK.db.showCMPScreen();
  }
  ;
  this.wI = function() {
    this.setState(14);
  }
  ;
  this.wJ = function() {
    var od = bY.dZ.r9(101);
    if (od === "") {
      od = wK();
    }
    if (typeof od !== "string") {
      od = "";
    }
    var max = Math.floor(Math.pow(2, 48));
    var wL = Math.floor(parseInt(a7.uk(od)));
    if (wL > 0 && wL < max) {
      bY.dZ.da(101, od);
      return wL;
    }
    wL = Math.floor(1 + (max - 1) * Math.random());
    bY.dZ.da(101, od);
    return wL;
  }
  ;
  function wK() {
    if (m.id === 2) {
      return m.rF["password"];
    } else if (m.id === 1) {
      if (m.em >= 12) {
        return m.rE.loadString(22);
      }
      return "";
    }
    return aR.wM(9);
  }
  this.uE = function() {
    return bY.dZ.r8(2) === 1;
  }
  ;
  this.wN = function() {
    var od = "";
    bY.dZ.da(102, od);
  }
  ;
  this.setState = function(dr) {
    if (m.id !== 1) {
      return;
    }
    if (m.em >= 5) {
      m.rE.setState(dr);
    }
  }
  ;
  this.o = function() {
    var wO;
    if (m.id === 1 && m.em >= 7) {
      m.rE.setState(5);
      return;
    }
    wO = new URL(window.location);
    wO.searchParams.set("v", "" + Math.floor(Math.random() * 1000));
    window.location.href = wO.toString();
  }
  ;
  this.dL = function() {
    if (m.id !== 1 || m.em < 17) {
      return;
    }
    m.rE.saveString(23, document.documentElement.outerHTML);
  }
  ;
  this.df = function() {
    if (m.id === 0) {
      bK.db.dH();
      return;
    }
    if (m.id === 1) {
      m.rE.prepareAd("1688441405");
      return;
    }
    if (m.id === 2) {
      if (m.em === 0) {
        m.rL.postMessage("prepare ad 4500876070");
      } else {
        m.rL.postMessage("loadAds 4500876070");
      }
    }
  }
  ;
  this.du = function(dt) {
    if (m.id === 0) {
      if (bK.db.dp()) {
        return true;
      }
      return false;
    }
    if (m.id === 1) {
      if (m.em >= 12) {
        m.rE.presentAd(dt);
        return true;
      }
      return false;
    }
    if (m.id === 2) {
      if (m.em === 0) {
        m.rL.postMessage("show ad " + dt);
      } else {
        m.rL.postMessage("showAd");
      }
      return true;
    }
    return false;
  }
  ;
  this.dQ = function() {
    if (m.id === 2 && m.em < 23) {
      i.j(4, 1, new k("App Update Required","A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bA.wP + "' target='_blank'>" + bA.wP + "</a>",true,[new l(L(13),function() {
        i.j(0);
      }
      ,p.mu)]));
    }
  }
  ;
}
function dE() {
  this.wQ = function(wR, d) {
    if (i.pz === 8 && wR === 0) {
      if (d === 4211) {
        wS(d);
      } else {
        if (d === 4480) {
          wT();
          return;
        }
        i.j(4, 0, new k(L(14),L(15, [d]),true));
      }
      return;
    }
    var dr = aN.wU();
    if (dr === 6) {
      if (d === 4211) {
        wS(d);
        return;
      } else if (d !== 4214) {
        aM.wV(wR);
        return;
      }
    } else if (dr === 7) {
      if (wR !== aq.kt.wW) {
        return;
      }
    } else if (dr === 8) {
      if (wR === aq.kt.wX && !a1.jn && a1.v9 === 1 && !a1.gR) {
        aA.wY(L(15, [d]));
      }
      return;
    } else {
      return;
    }
    wZ("Error", d, d);
  }
  ;
  function wT() {
    bY.pY.rb();
    i.j(4, 0, new k(L(16),L(17),true));
  }
  function wS(d) {
    wa(d);
    i.j(4, 5, new k("🚀 New Game Update","The game has been updated! Please reload the game.",true,[new l(L(13),function() {
      i.wb();
    }
    ), new l("🔄 Reload",function() {
      m.n.o();
    }
    ,p.q)]));
  }
  this.wc = function(d) {
    if (aN.wU() === 8) {
      if (!a1.jn && a1.v9 === 1) {
        aA.wY(L(15, [d]));
      }
      return;
    }
    wZ("Error", d, d);
  }
  ;
  function wZ(title, w3, d) {
    wa(d);
    i.j(4, 5, new k("⚠️ " + title,w3,true));
  }
  this.h = function() {
    wa(3268);
  }
  ;
  function wa(d) {
    wd(d);
    i.kt.we();
  }
  function wd(d) {
    var dr = aN.wU();
    if (dr === 0) {} else if (dr === 6) {
      aq.kt.wf(d);
    } else if (dr === 7) {
      aj.wg();
      aq.kt.close(aq.kt.wW, 3256);
    } else if (dr === 8) {
      a1.wh(true);
    }
  }
}
function co() {
  var wi, wj;
  var wk = -15000;
  var wl = false;
  this.wm = 0;
  this.wn = "";
  this.wo = false;
  this.dH = function() {
    wp.addEventListener("mousedown", gV, {
      passive: false
    });
    wp.addEventListener("mousemove", wq, {
      passive: false
    });
    wp.addEventListener("mouseup", wr, {
      passive: false
    });
    wp.addEventListener("click", click, {
      passive: false
    });
    wp.addEventListener("mouseleave", ws, {
      passive: false
    });
    wp.addEventListener("wheel", wt, {
      passive: false
    });
    wp.addEventListener("touchstart", wu, {
      passive: false
    });
    wp.addEventListener("touchmove", wv, {
      passive: false
    });
    wp.addEventListener("touchend", ww, {
      passive: false
    });
    wp.addEventListener("touchcancel", wx, {
      passive: false
    });
    wp.addEventListener("dragover", wy);
    wp.addEventListener("drop", wz);
    wp.addEventListener("dblclick", x0);
    document.addEventListener("contextmenu", x1);
    document.addEventListener("keyup", x2);
    document.addEventListener("keydown", x3);
    document.addEventListener("visibilitychange", x4);
    window.addEventListener("resize", resize);
  }
  ;
  function gV(d) {
    if (x5()) {
      return;
    }
    wl = true;
    x6(d, 1);
    aq.kt.x7(aq.kt.wX);
    x8(Math.floor(an.p2 * d.clientX), Math.floor(an.p2 * d.clientY));
  }
  function wu(d) {
    wk = bU.ds;
    x6(d, 1);
    aq.kt.x7(aq.kt.wX);
    if (d.touches.length > 0) {
      wi = Math.floor(an.p2 * d.touches[0].clientX);
      wj = Math.floor(an.p2 * d.touches[0].clientY);
      if (!ah.wu(d)) {
        x8(wi, wj);
      }
    }
  }
  function x8(eP, eR) {
    i.gV(eP, eR);
    if (a1.v9 === 0) {
      aN.gV(eP, eR);
      return;
    }
    if (b3.x9(eP, eR)) {
      return;
    }
    if (bT.gV(eP, eR)) {
      return;
    }
    if (aK.gV(eP, eR)) {
      return;
    }
    if (a8.xA(eP, eR)) {
      return;
    }
    if (aC.gV(eP, eR)) {
      return;
    }
    if (a9.gV(eP, eR)) {
      return;
    }
    if (b9.xB(eP, eR)) {
      return;
    }
    if (al.gV(eP, eR)) {
      return;
    }
    a8.xC(eP, eR);
  }
  this.xB = function(eP, eR) {
    if (b3.gV(eP, eR)) {
      return true;
    }
    if (aI.gV(eP, eR)) {
      return true;
    }
    if (aF.gV(eP, eR)) {
      return true;
    }
    if (aE.gV(eP, eR)) {
      return true;
    }
    if (aA.gV(eP, eR)) {
      return true;
    }
    return false;
  }
  ;
  function wq(d) {
    if (x5()) {
      return;
    }
    wl = true;
    x6(d, 1);
    xD(Math.floor(an.p2 * d.clientX), Math.floor(an.p2 * d.clientY));
  }
  function wv(d) {
    wk = bU.ds;
    x6(d, 1);
    if (d.touches.length > 0) {
      wi = Math.floor(an.p2 * d.touches[0].clientX);
      wj = Math.floor(an.p2 * d.touches[0].clientY);
      if (!ah.wv(d)) {
        xD(wi, wj);
      }
    }
  }
  function xD(eP, eR) {
    i.wq(eP, eR);
    if (a1.v9 === 0) {
      aN.wq(eP, eR);
      return;
    }
    bJ.gO(eP, eR);
    if (bT.wq(eP, eR)) {
      return;
    }
    a9.wq(eP, eR);
    if (a8.to()) {
      a8.wq(eP, eR);
      return;
    }
    if (aE.gW) {
      if (aE.wq(eP)) {
        bU.dO = true;
      }
      return;
    }
    aI.wq(eP, eR);
    if (aF.lp) {
      if (aF.wq(eP, eR)) {
        bU.dO = true;
      }
      return;
    }
  }
  function ws(d) {
    if (x5()) {
      return;
    }
    x6(d, 1);
    xE();
    if (a1.v9 === 0) {
      aN.click(-1024, -1024);
      aG.xF();
      return;
    }
    aI.xG(-1024, -1024);
    a9.wq(-1024, -1024);
    aE.xH();
    aF.lp = false;
  }
  function wr(d) {
    if (x5()) {
      return;
    }
    x6(d, 1);
    xI(Math.floor(an.p2 * d.clientX), Math.floor(an.p2 * d.clientY), d.button === 2);
    if (b9.wo) {
      b9.wo = false;
      d.preventDefault();
    }
  }
  function click(d) {
    if (x5()) {
      return;
    }
    x6(d, 1);
  }
  function ww(d) {
    wk = bU.ds;
    x6(d, 1);
    if (d && d.touches && d.touches.length > 0 && a1.v9 !== 0) {
      aF.lp = false;
      return;
    }
    if (ah.xJ()) {
      return;
    }
    xI(wi, wj, false);
    if (b9.wo) {
      b9.wo = false;
      d.preventDefault();
    }
  }
  function wx(d) {
    wk = bU.ds;
    x6(d, 1);
    xI(wi, wj, false);
    if (b9.wo) {
      b9.wo = false;
      d.preventDefault();
    }
  }
  function wy(d) {
    ax.wy(d);
  }
  function wz(d) {
    ax.wz(d);
  }
  function x0(d) {
    if (x5()) {
      return;
    }
    x6(d, 0);
  }
  function xI(eP, eR, xK) {
    xE();
    if (a1.v9 === 0) {
      aN.click(eP, eR);
      return;
    }
    aI.xG(eP, eR);
    bT.xG();
    aE.xH();
    aF.lp = false;
    if (a8.click(eP, eR, xK)) {
      bU.dO = true;
      return;
    }
    if (a9.wr(eP, eR)) {
      return;
    }
  }
  function xE() {
    i.xE();
  }
  function wt(d) {
    if (x5()) {
      return;
    }
    x6(d, 1);
    aq.kt.x7(aq.kt.wX);
    var eP = Math.floor(an.p2 * d.clientX);
    var eR = Math.floor(an.p2 * d.clientY);
    var deltaY = d.deltaY;
    if (d.deltaMode === 1) {
      deltaY *= 16;
    }
    i.wt(eP, eR, deltaY);
    if (a1.v9 === 0) {
      aN.wt(eP, eR, deltaY);
      return;
    }
    if (aI.wt(eP, eR, deltaY)) {
      return;
    }
    if (aE.xL(eP, eR)) {
      if (aE.wt(deltaY)) {
        bU.dO = true;
      }
      return;
    }
    aF.wt(eP, eR, deltaY);
  }
  function x1(d) {
    x6(d, 0);
  }
  function x6(d, id) {
    if (id === 0 && (i.to())) {
      return;
    }
    if (xM()) {
      return;
    }
    if (aN.wU() === 0) {
      return;
    }
    d.preventDefault();
  }
  function xM() {
    var h3 = window.innerWidth / document.documentElement.clientWidth;
    return h3 < 0.999 || h3 > 1.001;
  }
  function x3(d) {
    if (x5()) {
      return;
    }
    if (d.key === "ArrowLeft") {
      af.xN(3);
    } else if (d.key === "ArrowUp") {
      af.xN(0);
    } else if (d.key === "ArrowRight") {
      af.xN(1);
    } else if (d.key === "ArrowDown") {
      af.xN(2);
    } else if (d.key === "a") {
      aE.xO(15 / 16);
    } else if (d.key === "d") {
      aE.xO(16 / 15);
    } else if (d.key === "s") {
      aE.xO(7 / 8);
    } else if (d.key === "w") {
      aE.xO(8 / 7);
    } else if (d.key === "1") {
      aE.xO(3 / 4);
    } else if (d.key === "2") {
      aE.xO(7 / 8);
    } else if (d.key === "3") {
      aE.xO(15 / 16);
    } else if (d.key === "4") {
      aE.xO(31 / 32);
    } else if (d.key === "5") {
      aE.xO(32 / 31);
    } else if (d.key === "6") {
      aE.xO(16 / 15);
    } else if (d.key === "7") {
      aE.xO(8 / 7);
    } else if (d.key === "8") {
      aE.xO(4 / 3);
    } else if (d.key === "+") {
      if (a1.v9 !== 0) {
        aF.wt(Math.floor(an.t / 2), Math.floor(an.ir / 2), -200);
      }
    } else if (d.key === "-") {
      if (a1.v9 !== 0) {
        aF.wt(Math.floor(an.t / 2), Math.floor(an.ir / 2), 200);
      }
    } else if (d.key === "c") {
      if (a1.v9 !== 0) {
        bT.xP();
      }
    } else if (d.key === " ") {
      if (!a1.v9) {
        return;
      }
      bJ.gP(false);
    } else if (d.key === "b") {
      if (!a1.v9) {
        return;
      }
      bJ.gP(true);
    }
  }
  function x2(d) {
    if (x5()) {
      return;
    }
    if (bU.ds < 400) {
      return;
    }
    if (d.key === "Enter") {
      if (i.xQ(1)) {
        return;
      }
    }
    if (aN.wU() !== 8) {
      if (aN.xQ(d)) {
        bU.dO = true;
        return;
      }
    }
    if (d.key === "Escape") {
      b9.en();
    } else if (d.key === "ArrowLeft" || d.key === "a") {
      af.xR(3);
    } else if (d.key === "ArrowUp" || d.key === "w") {
      af.xR(0);
    } else if (d.key === "ArrowRight" || d.key === "d") {
      af.xR(1);
    } else if (d.key === "ArrowDown" || d.key === "s") {
      af.xR(2);
    } else if (d.key === "h") {
      b3.xS(!a1.ln);
    } else if (d.key === " ") {
      if (!a1.v9) {
        return;
      }
      a9.gS && a9.xT();
      a1.gR && b3.xU(false);
    }
  }
  function x4() {
    if (document.visibilityState === "hidden") {
      if (a1.v9 !== 1) {
        return;
      }
      if (a1.gR) {
        b3.xV();
      } else if (a1.jn && !a9.gS && !a1.gd) {
        a9.xT();
      }
    } else {
      bU.dO = true;
    }
  }
  function x5() {
    return wk + 15000 > bU.ds;
  }
  this.xW = function() {
    return x5();
  }
  ;
  this.pK = function() {
    return !wl || wk > 0;
  }
  ;
  function resize() {
    an.xX();
  }
  this.en = function() {
    if (i.to()) {
      i.xQ(2);
      return;
    }
    if (aN.wU() === 8) {
      if (a1.ln) {
        b3.xS(false);
        return;
      }
      if (bT.to) {
        bT.xT();
        return;
      }
      a9.xT();
      return;
    }
    if (aN.wU() === 7) {
      aj.xY();
      return;
    }
    if (aN.wU() === 6) {
      aM.xZ();
      return;
    }
    if (aN.wU() === 2) {
      aO.xa();
      return;
    }
  }
  ;
}
function bh() {
  this.ow = new xb();
  this.p6 = new xc();
  this.fd = new xd();
  this.w0 = new xe();
  this.tU = new xf();
  this.xg = new xh();
  this.h0 = new xi();
  this.color = new xj();
  this.xk = new xl();
  this.dH = function() {
    this.ow.rY();
  }
  ;
}
function xc() {
  this.sP = function(ey) {
    ey.fill(0);
  }
  ;
  this.xm = function(ey) {
    var z;
    var eI = ey.length;
    for (z = 0; z < eI; z++) {
      ey[z] = [];
    }
  }
  ;
  this.xn = function(hA, xo) {
    var z;
    var hB = bE.et;
    for (z = 0; z < 3; z++) {
      hB[z] = xo * hA[z];
    }
    return hB;
  }
  ;
  this.xp = function(hA, hB, xq) {
    var z;
    var hF = 0;
    for (z = 0; z < 3; z++) {
      hF += Math.abs(hA[z] - hB[z]);
    }
    return hF >= xq;
  }
  ;
  this.xr = function(hA, xs) {
    var z;
    for (z = 0; z < 3; z++) {
      hA[z] = bB.oV(hA[z] + xs, 0, 255);
    }
    return hA;
  }
  ;
  this.xt = function(ey, qH, qI) {
    var z;
    var xu = 0;
    qH = qH || 0;
    qI = qI || (ey.length - 1);
    for (z = qH; z <= qI; z++) {
      xu += ey[z];
    }
    return xu;
  }
  ;
  this.xv = function(ey, xw) {
    var eb, z, xx;
    var eI = ey.length;
    var xy = [];
    for (eb = eI - 1; eb >= 0; eb--) {
      xx = 0;
      for (z = 0; z < eI; z++) {
        if (xw(ey[z]) < xw(ey[xx])) {
          xx = z;
        }
      }
      eI--;
      xy.push(ey[xx]);
      ey[xx] = ey[eI];
      ey.pop();
    }
    return xy;
  }
  ;
  this.min = function(ey) {
    var z, el;
    var eI = ey.length;
    if (eI === 0) {
      return 0;
    }
    el = ey[0];
    for (z = 1; z < eI; z++) {
      el = Math.min(el, ey[z]);
    }
    return el;
  }
  ;
  this.max = function(ey) {
    var z, el;
    var eI = ey.length;
    if (eI === 0) {
      return 0;
    }
    el = ey[0];
    for (z = 1; z < eI; z++) {
      el = Math.max(el, ey[z]);
    }
    return el;
  }
  ;
  this.xz = function(y0, y1, min) {
    var eI = y1[0];
    for (var z = eI - 1; z >= 0; z--) {
      if (y0[z] < min) {
        eI--;
        y0[z] = y0[eI];
      }
    }
    y1[0] = eI;
  }
  ;
  this.y2 = function(ey, eI, value) {
    for (var z = 0; z < eI; z++) {
      ey[z] -= value;
    }
  }
  ;
  this.y3 = function(ey) {
    var eI = ey.length;
    for (var z = 0; z < eI; z++) {
      if (typeof ey[z] !== "string") {
        return false;
      }
    }
    return true;
  }
  ;
}
function xi() {
  this.u2 = function(y4, o0, y5) {
    var gu = y4.height;
    var y6 = b2.ow.sF(gu, gu);
    var h1 = b2.ow.getContext(y6);
    y7(gu, h1, y5);
    h1.drawImage(y4, -o0 * gu, 0);
    return y6;
  }
  ;
  function y7(t, h1, y5) {
    h1.fillStyle = y5;
    h1.beginPath();
    h1.arc(t / 2, t / 2, t * 0.47, 0, 2 * Math.PI);
    h1.fill();
  }
  this.y8 = function(y9) {
    var gu = y9.height;
    if (y9.width !== gu) {
      return y9;
    }
    var h1 = b2.ow.getContext(y9, true);
    var gx = h1.getImageData(0, 0, gu, gu);
    b2.xg.yA(gx.data, gu, gu, 0.9);
    h1.putImageData(gx, 0, 0);
    return y9;
  }
  ;
}
function xj() {
  this.yB = function(el) {
    return [(el >> 12) & 63, (el >> 6) & 63, el & 63];
  }
  ;
  this.yC = function(el) {
    var ey = this.yB(el);
    for (var z = 0; z < 3; z++) {
      ey[z] = ~~(4.05 * ey[z]);
    }
    return ey;
  }
  ;
  this.yD = function(el) {
    var ey = this.yC(el);
    return b2.color.mD(ey[0], ey[1], ey[2]);
  }
  ;
  this.yE = function(ey) {
    for (var z = 0; z < 3; z++) {
      ey[z] = ~~(ey[z] / 4.04);
    }
    return (ey[0] << 12) + (ey[1] << 6) + ey[2];
  }
  ;
  this.mD = function(h3, qL, ec) {
    return "rgb(" + h3 + "," + qL + "," + ec + ")";
  }
  ;
  this.mF = function(h3, qL, ec, eb) {
    return "rgba(" + h3 + "," + qL + "," + ec + "," + eb.toFixed(3) + ")";
  }
  ;
  this.pM = function(ed) {
    var ey = ed.split("(")[1].split(",");
    var eI = ey.length;
    var es = bE.es;
    for (var z = 0; z < 3; z++) {
      es[z] = parseInt(ey[z]);
    }
    return es;
  }
  ;
  this.pH = function(yF, eL) {
    var od = yF.slice(yF.indexOf("(") + 1, yF.indexOf(")"));
    var ey = od.split(",");
    var es = bE.es;
    for (var z = 0; z < 3; z++) {
      es[z] = bB.oV(parseInt(ey[z].trim(), 10) + eL, 0, 255);
    }
    if (ey.length === 3) {
      return this.mD(es[0], es[1], es[2]);
    }
    return this.mF(es[0], es[1], es[2], parseFloat(ey[3].trim()));
  }
  ;
  this.yG = function(ey) {
    var od = "#";
    for (var z = 0; z < 3; z++) {
      var h3 = ey[z].toString(16);
      od += h3.length === 1 ? ("0" + h3) : h3;
    }
    return od;
  }
  ;
  this.yH = function(od) {
    if (od.length < 7) {
      return p.mC;
    }
    var h3 = parseInt(od.slice(1, 3), 16);
    var qL = parseInt(od.slice(3, 5), 16);
    var ec = parseInt(od.slice(5, 7), 16);
    return this.mD(h3, qL, ec);
  }
  ;
}
function xf() {
  this.yI = function(od, font, maxWidth) {
    qo.font = font;
    var t = qo.measureText(od).width;
    if (t <= maxWidth) {
      return od;
    }
    for (var z = od.length - 1; z >= 1; z--) {
      od = od.substring(0, z);
      t = qo.measureText(od + "...").width;
      if (t <= maxWidth) {
        return od + "...";
      }
    }
    return "...";
  }
  ;
}
function xl() {
  var yJ = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  this.yK = function(ds) {
    var yL, yM, fp;
    var od = (new Date(ds.getTime() - 1000 * 60 * ds.getTimezoneOffset())).toUTCString();
    if (od.length < 12) {
      return od;
    }
    od = od.substring(5, od.length);
    yL = ds.getTimezoneOffset();
    if (yL === 0) {
      return od;
    }
    yM = bB.ek(Math.abs(yL), 60);
    yM = (yL < 0 ? "+" : "-") + yM;
    fp = Math.abs(yL) % 60;
    if (fp === 0) {
      return od + yM;
    }
    return od + yM + ":" + (fp < 10 ? "0" : "") + fp;
  }
  ;
  this.yN = function(ds) {
    var od = ds.toUTCString();
    if (od.length < 12) {
      return od;
    }
    return yO(ds) + ", " + od.substring(5, od.length - 4);
  }
  ;
  function yO(ds) {
    return yJ[ds.getUTCDay()];
  }
}
function xb() {
  var yP = null;
  this.uK = 0;
  this.rY = function() {
    var el = bY.dZ.data[5].value;
    yP = "px " + el;
    if (el !== "sans-serif") {
      yP += ", sans-serif";
    }
    this.uK = gt(32, 32, ["a", "b", "m"], 200, yP);
  }
  ;
  this.sF = function(t, ir) {
    var ed = document.createElement("canvas");
    ed.width = t;
    ed.height = ir;
    return ed;
  }
  ;
  this.getContext = function(h0, alpha) {
    return h0.getContext("2d", {
      alpha: alpha
    });
  }
  ;
  this.getImageData = function(tU, t, ir) {
    return tU.getImageData(0, 0, t, ir);
  }
  ;
  this.q5 = function(type, size) {
    size = size.toFixed(2);
    if (type === 0) {
      return size + yP;
    } else if (type === 1) {
      return "bold " + size + yP;
    } else if (type === 2) {
      return "lighter " + size + yP;
    } else if (type === 3) {
      return "italic " + size + yP;
    } else if (type === 4) {
      return "oblique " + size + yP;
    } else if (type === 5) {
      return "small-caps " + size + yP;
    } else {
      return "small-caps bold " + size + yP;
    }
  }
  ;
  this.textAlign = function(h1, id) {
    if (id === 0) {
      h1.textAlign = "left";
    } else if (id === 1) {
      h1.textAlign = "center";
    } else {
      h1.textAlign = "right";
    }
  }
  ;
  this.textBaseline = function(h1, id) {
    if (id === 1) {
      h1.textBaseline = "middle";
    } else if (id === 2) {
      h1.textBaseline = "bottom";
    } else {
      h1.textBaseline = "top";
    }
  }
  ;
  this.p8 = function(d, code, color) {
    var el = this.p7(bR.yQ) + " solid " + (color || p.mL);
    code = code || 5;
    if (code === 5) {
      d.style.border = el;
    } else if (code === 4) {
      d.style.borderLeft = el;
    } else if (code === 2) {
      d.style.borderBottom = el;
    } else if (code === 6) {
      d.style.borderRight = el;
    } else {
      d.style.borderTop = el;
    }
  }
  ;
  this.qN = function(d, eP, eR, t, ir) {
    var p1 = d.style;
    p1.left = this.qO(eP);
    p1.top = this.qO(eR);
    p1.width = this.qO(t);
    p1.height = this.qO(ir);
  }
  ;
  this.ox = function(el) {
    return 1 + el * m.n.uE();
  }
  ;
  this.pc = function(lw, fp) {
    return lw * this.ox(fp === undefined ? 0.5 : fp) * an.oy / an.p2;
  }
  ;
  this.qM = function(lw, fp) {
    return lw * this.ox(fp === undefined ? 0.5 : fp) * an.oy;
  }
  ;
  this.q6 = function(lw, fp, yR) {
    var yS = this.ox(fp);
    return yS * Math.min(lw * an.oy, yR * an.t) / an.p2;
  }
  ;
  this.p7 = function(el) {
    return el.toFixed(1) + "px";
  }
  ;
  this.qO = function(el) {
    return this.yT(el).toFixed(1) + "px";
  }
  ;
  this.yT = function(el) {
    return el / an.p2;
  }
  ;
  this.yU = function(pr, yV) {
    var z;
    var od = "<ul>";
    var eI = pr.length;
    for (z = 0; z < eI; z++) {
      od += "<li>" + pr[z] + ": <a href='" + yV[z] + "' target='_blank'>" + yV[z] + "</a></li>";
    }
    od += "</ul>";
    return od;
  }
  ;
  this.yW = function(yX) {
    return "<a href='" + yX + "' target='_blank'>" + yX + "</a>";
  }
  ;
  this.yY = function(d) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(d.value);
    }
  }
  ;
  this.yZ = function(d) {
    var dt = d.textContent;
    if (b2.w0.ya(dt, "✔")) {
      return;
    }
    if (dt.length === 1) {
      d.textContent = "✔";
    } else {
      d.textContent = dt + " ✔";
    }
    setTimeout(function() {
      d.textContent = dt;
    }, 500);
  }
  ;
  this.measureText = function(od) {
    return qo.measureText(od).width;
  }
  ;
}
function xd() {
  this.gT = function(dr) {
    if (dr === 0) {
      return a1.v9 === 1 && a1.gd;
    }
    if (dr === 1) {
      return a1.v9 === 1 && !a1.gd;
    }
    return a1.v9 === 2;
  }
  ;
  this.gU = function(player) {
    return aV.lI[player] !== 0 && aV.yb[player] !== 2;
  }
  ;
  this.yc = function(player) {
    return player === a1.e2 && aV.yb[player] !== 2;
  }
  ;
  this.ik = function(player) {
    return player >= a1.jN || aV.yb[player] === 2;
  }
  ;
  this.kD = function(player) {
    return aV.lI[player] !== 0;
  }
  ;
  this.oI = function(yd, ye) {
    return yd !== ye;
  }
  ;
  this.fg = function(player, el) {
    el = this.yf(player, el);
    aV.gK[player] += el;
    if (aV.yg[player]) {
      var min = Math.min(aV.yg[player], aV.gK[player]);
      aV.yg[player] -= min;
      aV.gK[player] -= min;
    }
    return el;
  }
  ;
  this.yf = function(player, el) {
    var yh = aV.gK[player];
    el = Math.min(el, aV.g6[player] * a1.jU - yh);
    el = Math.min(el, a1.yi - yh);
    return Math.max(el, 0);
  }
  ;
  this.oJ = function(player, hf, yj, yk) {
    var yh = aV.gK[player];
    var iU = bB.ek(yh * (hf + 1), 1024);
    var yl = bB.ek(yj * yh, 1024);
    iU = Math.min(iU, yh - yl);
    if (a1.jl === 10) {
      iU = av.ym(player, iU);
    }
    bE.eq[0] = iU;
    bE.eq[1] = yl;
    return iU >= yk;
  }
  ;
  this.nk = function(player, nR, nQ) {
    var yn;
    var yh = aV.gK[player];
    var yl = bB.ek(64 * yh, 1024);
    nR = Math.min(nR, yh - yl);
    yn = this.yo(nR);
    nR -= yn;
    yl += yn;
    nR = this.yf(nQ, nR);
    bE.eq[0] = nR;
    bE.eq[1] = yl;
    return nR >= 1;
  }
  ;
  this.nm = function(nR, nQ) {
    var yn = this.yo(nR);
    nR -= yn;
    nR = this.yf(nQ, nR);
    bE.eq[0] = nR;
    bE.eq[1] = yn;
    return nR >= 1;
  }
  ;
  this.he = function(player, yp) {
    return bB.ek(aV.gK[player] * (yp + 1), 1024);
  }
  ;
  this.yo = function(yq) {
    return bB.ek(Math.max(2142 - bU.jK(), 0) * yq, 2142);
  }
  ;
  this.oT = function(player, yj) {
    aV.gK[player] -= bB.ek(yj * aV.gK[player], 1024);
  }
  ;
  this.fe = function(player, yr) {
    var ec = aV.gK[player];
    aV.gK[player] = Math.max(ec - yr, 0);
    aV.yg[player] = Math.min(aV.yg[player] + 5 * (Math.max(yr - ec, 0) >> 2), 50000);
    return yr;
  }
  ;
  this.kR = function(player, hf) {
    var gK = aV.gK;
    var yh = gK[player];
    var iU = bB.ek(yh * (hf + 1), 1024);
    var yl = Math.max(bB.ek(yh, 10), 1000);
    iU = Math.min(iU, yh - yl);
    if (iU < 0) {
      gK[player] = 0;
      aV.yg[player] = Math.min(aV.yg[player] + 5 * (Math.max(-iU, 0) >> 2), 50000);
      return 0;
    }
    if (a1.jl === 10) {
      iU = av.ym(player, iU);
    }
    gK[player] -= yl + iU;
    return iU;
  }
  ;
  this.oM = function(player) {
    aV.gK[player] -= bE.eq[0] + bE.eq[1];
  }
  ;
  this.oK = function(player, iT) {
    iT = Math.min(iT, a1.eF);
    if (iT < a1.eF && aV.lI[iT] === 0) {
      iT = a1.eF;
    }
    bE.eE[0] = iT;
    return iT === a1.eF || eB(player, iT);
  }
  ;
  this.oO = function(player, nQ) {
    if (aV.lI[nQ] === 0) {
      return false;
    }
    return !eB(player, nQ);
  }
  ;
  this.ys = function(player, yt) {
    var z, fo;
    var eI = aa.jO;
    var vp = 0;
    var yu = kf;
    for (z = 0; z < eI; z++) {
      fo = yu[z];
      if (aQ.v2(fo)) {
        if (player === fo) {
          return true;
        }
        if (++vp > yt) {
          return false;
        }
      }
    }
    return false;
  }
  ;
  this.kZ = function(fo) {
    var yv;
    if (a1.iN) {
      yv = bW.vk();
    } else {
      yv = aV.g6[kf[0]];
    }
    return yv >= bB.ek(fo * a1.j7, 100);
  }
  ;
}
function xh() {
  this.yw = function(h0, yx, yy) {
    var t = h0.width;
    var ir = h0.height;
    var ed = b2.ow.sF(t, ir);
    var h1 = b2.ow.getContext(ed, true);
    h1.drawImage(h0, 0, 0);
    var gx = h1.getImageData(0, 0, t, ir);
    yx(gx.data, t, ir, yy);
    h1.putImageData(gx, 0, 0);
    return ed;
  }
  ;
  this.yz = function(sQ, t, ir) {
    for (var eP = t - 1; eP >= 0; eP--) {
      for (var eR = ir - 1; eR >= 0; eR--) {
        var z = 4 * (eP + eR * t);
        sQ[z + 3] = sQ[z];
        sQ[z] = sQ[z + 1] = sQ[z + 2] = 255;
      }
    }
  }
  ;
  this.z0 = function(sQ, t, ir) {
    for (var eP = t - 1; eP >= 0; eP--) {
      for (var eR = ir - 1; eR >= 0; eR--) {
        var z = 4 * (eP + eR * t);
        if (sQ[z + 1] > sQ[z + 2] + 10) {
          sQ[z + 3] = sQ[z];
          sQ[z + 1] = sQ[z + 2];
        }
      }
    }
  }
  ;
  this.z1 = function(sQ, t, ir, yy) {
    var gap = Math.floor(Math.min(t, ir) * yy);
    for (var eP = 0; eP < t; eP++) {
      for (var eR = 0; eR < ir; eR++) {
        if (eP < gap || eR < gap || eP >= t - gap || eR >= ir - gap) {
          var z = 4 * (eP + eR * t);
          sQ[z + 3] = 255 - 255 * (sQ[z + 1] - sQ[z]) / (255 - sQ[z]);
        }
      }
    }
  }
  ;
  this.z2 = function(sQ, t, ir, yy) {
    for (var eP = t - 1; eP >= 0; eP--) {
      for (var eR = ir - 1; eR >= 0; eR--) {
        var z = 4 * (eP + eR * t);
        sQ[z] = yy[0];
        sQ[z + 1] = yy[1];
        sQ[z + 2] = yy[2];
      }
    }
  }
  ;
  this.z3 = function(sQ, t, ir, yy) {
    var gap = Math.floor(t * yy);
    for (var eP = 0; eP < t; eP++) {
      for (var eR = 0; eR < ir; eR++) {
        if (eP < gap || eR < gap || eP >= t - gap || eR >= ir - gap) {
          var z = 4 * (eP + eR * t);
          sQ[z] = sQ[z + 1] = sQ[z + 2] = 0;
        }
      }
    }
  }
  ;
  this.z4 = function(sQ, t, ir) {
    var eP, eR, z;
    for (eP = t - 1; eP >= 0; eP--) {
      for (eR = ir - 1; eR >= 0; eR--) {
        z = 4 * (eP + eR * t);
        if (sQ[z + 1] > 200 && sQ[z + 1] - 20 > sQ[z] && sQ[z + 1] - 20 > sQ[z + 2]) {
          if (sQ[z] + sQ[z + 2] < 40) {
            sQ[z + 3] = 0;
          } else {
            sQ[z + 3] = sQ[z];
            sQ[z] = 255;
            sQ[z + 1] = 255;
            sQ[z + 2] = 255;
          }
        } else if (sQ[z] < 50 && sQ[z + 1] < 50 && sQ[z + 2] < 50) {
          if (sQ[z] + sQ[z + 1] + sQ[z + 2] < 50) {
            sQ[z + 3] = 180;
          } else {
            sQ[z + 3] = 180 + Math.floor(75 * (sQ[z] + sQ[z + 1] + sQ[z + 2] - 50) / 100);
          }
        }
      }
    }
  }
  ;
  this.z5 = function(sQ, t, ir) {
    var eP, eR, z;
    for (eP = t - 1; eP >= 0; eP--) {
      for (eR = ir - 1; eR >= 0; eR--) {
        z = 4 * (eP + eR * t);
        if (sQ[z + 1] > sQ[z] + 20 && sQ[z + 1] > sQ[z + 2] + 20 && sQ[z] + sQ[2] < 40) {
          sQ[z + 3] = 255 - sQ[z + 1];
          sQ[z] = sQ[z + 1] = sQ[z + 2] = sQ[z];
        }
      }
    }
  }
  ;
  this.yA = function(sQ, t, ir, yy) {
    var h3 = t >> 1;
    for (var eP = 0; eP < t; eP++) {
      for (var eR = 0; eR < ir; eR++) {
        if (Math.sqrt((eP - h3) * (eP - h3) + (eR - h3) * (eR - h3)) > yy * h3) {
          sQ[4 * (eP + eR * t) + 3] = 0;
        }
      }
    }
  }
  ;
}
function xe() {
  this.z6 = function(el) {
    var z, z7, z8, z9, zA;
    if (el < 0) {
      return "-" + this.z6(Math.abs(el));
    }
    if (el < 1000) {
      return el.toString();
    }
    z7 = Math.floor(Math.log(el + 0.5) / Math.log(10)) + 1;
    z8 = Math.floor((z7 - 1) / 3);
    z9 = el.toString();
    zA = z9.substring(z7 - 3, z7);
    for (z = 1; z < z8; z++) {
      zA = z9.substring(z7 - 3 * (z + 1), z7 - 3 * z) + " " + zA;
    }
    return z9.substring(0, z7 - 3 * (z8)) + " " + zA;
  }
  ;
  this.zB = function(fo, z7) {
    return (fo).toFixed(z7) + "%";
  }
  ;
  this.w6 = function(el, zC) {
    return el.toFixed(bB.oV(Math.floor((zC === undefined ? 3 : zC) - Math.log10(Math.max(el, 1))), 0, 8));
  }
  ;
  this.zD = function(el, lw, z7) {
    return (el * lw).toFixed(z7);
  }
  ;
  this.w1 = function(username) {
    var e7, eM;
    e7 = username.indexOf("[");
    if (e7 < 0) {
      return null;
    }
    eM = username.indexOf("]");
    if (eM - e7 > 1 && eM - e7 <= 7 + 1) {
      return username.substring(e7 + 1, eM).toUpperCase().trim();
    }
    return null;
  }
  ;
  this.zE = function(od) {
    var eb = Math.floor(0.5 * od.length + 0.5);
    var m3 = Math.floor(0.5 * (eb - 1));
    for (var z = 0; z < m3; z++) {
      for (var ec = -1; ec < 2; ec += 2) {
        var ed = eb + ec * z;
        if (od[ed] === " ") {
          return [this.zF(od.substring(0, ed)), this.zG(od.substring(ed))];
        }
      }
    }
    return [od.substring(0, eb), od.substring(eb)];
  }
  ;
  this.zG = function(od) {
    var eI = od.length;
    for (var z = 0; z < eI; z++) {
      if (od[z] !== " ") {
        return od.substring(z);
      }
    }
    return od;
  }
  ;
  this.zF = function(od) {
    var eI = od.length;
    for (var z = eI - 1; z >= 0; z--) {
      if (od[z] !== " ") {
        return od.substring(0, z + 1);
      }
    }
    return od;
  }
  ;
  this.zH = function(od, zI) {
    return od.split("(")[0] + "(🧈 " + zI.toFixed(2) + ")";
  }
  ;
  this.startsWith = function(od, zJ) {
    return od.substring(0, zJ.length) === zJ;
  }
  ;
  this.ya = function(od, zJ) {
    var eI = od.length;
    return od.substring(eI - zJ.length, eI) === zJ;
  }
  ;
}
function zK() {
  this.iQ = function(player, e4) {
    if (a6.tG(player, bC.eQ(e4), bC.eS(e4))) {
      bU.dO = true;
    }
    a1.jn && this.iC();
  }
  ;
  this.iC = function() {
    a1.gd = false;
    for (var z = 0; z < a1.jN; z++) {
      if (aV.lI[z] !== 0 && aV.g6[z] === 0) {
        a6.tM(z);
      }
    }
    if (aV.lI[a1.e2] !== 0) {
      bS.lE[7] = aV.g6[a1.e2];
      bS.lE[8] = aV.gK[a1.e2];
      aE.zL();
      aJ.zM();
      if (!a1.gR) {
        a5.ld(aV.ht[a1.e2] - 5, aV.hv[a1.e2] - 5, aV.hu[a1.e2] + 5, aV.hw[a1.e2] + 5);
      }
      ai.dH();
    } else {
      aK.show(false, false, false, true);
    }
    aA.zN(18);
    aU.zO();
    aU.l1(true);
    bF.kt.zP();
    a1.oH = null;
    bQ.zQ = true;
    bQ.zR();
    if (a1.jn) {
      m.n.setState(1);
    }
  }
  ;
}
function bj() {
  this.eF = 512;
  this.yi = 1500000000;
  this.zS = 1000000000;
  this.t9 = 512;
  this.fb = 2;
  this.e2 = 0;
  this.jN = 0;
  this.vC = 0;
  this.jk = 0;
  this.vB = 0;
  this.st = 512;
  this.jU = 150;
  this.jn = true;
  this.gR = false;
  this.v9 = 0;
  this.j7 = 0;
  this.ln = false;
  this.gd = false;
  this.zT = false;
  this.iN = false;
  this.zU = 0;
  this.jl = 0;
  this.vr = false;
  this.oH = null;
  this.vR = null;
  this.zV = 30;
  this.v6 = 0;
  this.vE = 0;
  this.vQ = 0;
  this.gameInit = function(para_gameSeed, para_myID, para_playerInfo, zZ, za, zb, modified = false) {
    this.ln = false;
    this.gR = zb;
    this.jl = zZ;
    this.vr = za;
    this.iN = this.jl < 7 || this.jl === 9;
    this.vC = this.jN = para_playerInfo.length;
    if (modified) {
      this.jn = false;
    }
    else {
      this.jn = this.vC === 1;
    }
    this.jl = (this.jl === 10 && this.jn) ? 7 : this.jl;
    this.jl = (this.jl === 8 && this.jN !== 2) ? 7 : this.jl;
    this.zU = this.jl === 9 ? 2 : (this.jl + 2);
    // this.zV = this.jN <= 2 ? 30 : this.jN <= 50 ? 40 : 50;
    this.zV = this.jN <= 2 ? 30 : 40;
    switch (lobby.settings.spawnTime) {
      case 0:
        this.zV *= 0.1;
        break;
      case 1:
        this.zV *= 0.25;
        break;
      case 2:
        this.zV *= 0.5;
        break;
      case 3:
        this.zV *= 0.75;
        break;
      case 4:
        this.zV *= 1;
        break;
      case 5:
        this.zV *= 1.25;
        break;
      case 6:
        this.zV *= 1.5;
        break;
      case 7:
        this.zV *= 1.75;
        break;
      case 8:
        this.zV *= 2;
        break;
      case 9:
        this.zV *= 2.5;
        break;
      case 10:
        this.zV *= 3;
        break;
      case 11:
        this.zV *= 4;
        break;
      case 12:
        this.zV *= 5;
        break;
    }
    this.zV = Math.ceil(this.zV);
    
    if (ay.jh && !ay.ji.zc) {
      this.zT = this.gd = false;
    } else {
      // this.zT = this.gd = (this.iN || this.jN < 100);
      this.zT = this.gd = !lobby.settings.randomSpawn;
    }
    this.oH = this.gd ? new zK() : null;
    if (dS === 1 && false) {
      this.st = this.jN;
    } else {
      if (this.jn) {
        this.st = aO.zd();
      } else {
        this.st = this.eF;
      }
    }
    this.jk = this.st - this.jN;
    this.vB = 0;
    this.e2 = para_myID;
    this.v6 = 0;
    this.vE = 0;
    this.vQ = 0;
    ao.ze(para_gameSeed);
    ap.dH();
    aV.dH(para_playerInfo);
    b0.nJ.o3 = [];
    bV.dH(para_playerInfo);
    this.v9 = 1;
    bS.dH();
    zf();
    aQ.dI();
    ad.zg();
    bQ.dH();
    aT.dH();
    aQ.dH(para_playerInfo);
    ag.dH();
    bC.dH();
    bD.dH();
    ac.dH();
    bH.dH();
    bL.zh();
    a2.dH();
    aX.v();
    a6.dH();
    aa.zi();
    b1.dH(para_gameSeed, para_playerInfo, zZ, za);
    bW.dH();
    bF.dH();
    bT.dH();
    zj.putImageData(zk, 0, 0);
    aI.dH();
    aF.dH();
    aE.dH();
    b3.dH();
    al.dH();
    aH.dH();
    aJ.dH();
    a9.dH();
    aD.dH();
    aA.dH();
    aC.dH();
    a8.dH();
    aK.dH();
    a3.dH();
    a4.dH();
    fJ();
    aS.dH();
    aU.dH();
    av.dH();
    aw.dH();
    ar.dH();
    if (this.jl === 8) {
      this.vR = new ta();
      this.vR.dH(para_playerInfo);
    } else {
      this.vR = null;
    }
    bU.zh();
    zl();
    ai.dH();
    bU.dO = true;
    if (!this.gR && (!this.jn || !this.gd)) {
      m.n.setState(1);
    }
    if (lobby) {
      lobbyUIHide();
      if (spectator) {
        setTimeout(() => {
          aq.nM.nh();
        }, 1000);
      }
    }
  };
  function zl() {
    a5.lc();
    if (aV.lI[a1.e2] === 0) {
      aK.show(false, true);
    }
    aU.l1(true);
  }
  this.wh = function(zm) {
    aq.kt.zn();
    this.v9 = 0; //clientStatus
    bU.zo();
    m.n.setState(0);
    !zm && bK.dd.show();
    aN.setState(0);
    i.j(5, 5);
    checkRejoinCustomLobby();
  }
  ;
  this.zp = function() {
    return (this.gR ? (a9.gS || !b3.zq) : (this.jn && (a9.gS || this.gd)));
  }
  ;
  this.zr = function() {
    return this.v9 === 1 && !this.gd;
  }
  ;
}
function dD() {
  this.uH = 0;
  this.gap = 0;
  this.yQ = 0;
  this.p4 = 0;
  this.dH = function() {
    this.resize();
  }
  ;
  this.resize = function() {
    this.uH = 0.0022 * b2.ow.ox(0.5) * an.oy;
    this.yQ = this.uH / an.p2;
    this.gap = Math.max(Math.floor((m.n.uE() ? 0.0114 : 0.01296) * an.oy), 2);
    this.p4 = this.gap / an.p2;
  }
  ;
}
function dC() {
  this.zs = function() {
    return m.n.uE() ? 2 : 1;
  }
  ;
}
function bt() {
  var pP;
  var eP, eR, zt;
  var zu, zv;
  var ds;
  var player;
  var zw;
  var gap;
  var zoom;
  var nv;
  var zx;
  this.zy = function() {
    zz();
  }
  ;
  this.a00 = function() {
    return pP;
  }
  ;
  this.dH = function() {
    nv = [];
    eP = eR = ds = 0;
    zu = zv = -1000;
    this.resize();
  }
  ;
  this.resize = function() {
    zt = Math.floor((m.n.uE() ? 0.075 : 0.0468) * an.oy);
    zoom = zt / aP.get(3).height;
    gap = Math.floor(zt / 3);
  }
  ;
  function zz() {
    var z, ec;
    var eI = 9;
    var a01 = [p.mh, p.mt, p.mJ, p.n8, p.n1];
    pP = new Array(eI);
    for (z = 0; z < eI; z++) {
      pP[z] = {
        id: z,
        to: false,
        kA: 0,
        h0: [],
        eP: 0,
        eR: 0
      };
    }
    pP[0].colors = [0, 1, 2, 3];
    pP[0].eP = 0;
    pP[0].eR = 0;
    pP[1].colors = [0, 1, 4];
    pP[1].eP = 1;
    pP[1].eR = 0;
    pP[2].colors = [0, 2];
    pP[2].eP = -1;
    pP[2].eR = 0;
    pP[3].colors = [0];
    pP[3].eP = 0;
    pP[3].eR = 0;
    pP[4].colors = [0, 2];
    pP[4].eP = 1;
    pP[4].eR = 1;
    pP[5].colors = [3];
    pP[5].eP = 0;
    pP[5].eR = -1;
    pP[6].id = 20;
    pP[6].colors = [0];
    pP[6].eP = 1;
    pP[6].eR = -1;
    pP[7].id = 21;
    pP[7].colors = [0];
    pP[7].eP = 0;
    pP[7].eR = 1;
    pP[8].id = 16;
    pP[8].colors = [0];
    pP[8].eP = 0;
    pP[8].eR = 0;
    for (z = 0; z < eI; z++) {
      for (ec = 0; ec < pP[z].colors.length; ec++) {
        pP[z].h0.push(sF(pP[z].id, a01[pP[z].colors[ec]]));
      }
    }
  }
  function sF(id, y5) {
    if (id < 20) {
      return b2.h0.u2(aP.get(3), id, y5);
    }
    var gu = aP.get(3).height;
    var y6 = b2.ow.sF(gu, gu);
    var h1 = b2.ow.getContext(y6);
    if (id === 20) {
      h1.drawImage(aP.get(18), 0, 0);
    } else if (id === 21) {
      aY.sQ.uI(aY.tl.u6 + aY.tl.uO, h1, 0, 0, gu);
    }
    return y6;
  }
  this.xA = function(kU, kV) {
    if (!this.to()) {
      return false;
    }
    bU.dO = true;
    if (aY.sQ.gV(kU, kV, player)) {
      return true;
    }
    var ec = gV(kU, kV);
    this.qK();
    if (ec === 2) {
      aY.sQ.to = true;
    }
    return ec > 0;
  }
  ;
  this.xC = function(kU, kV) {
    if (this.to()) {
      return;
    }
    zu = kU;
    zv = kV;
    ds = performance.now();
  }
  ;
  function gV(kU, kV) {
    zu = -1000;
    zv = -1000;
    var a02 = a03(kU, kV);
    var a04 = a05(a02);
    if (a04 === -1) {
      return 0;
    }
    if (pP[a04].colors[pP[a04].kA] === 1) {
      return 1;
    }
    if (a04 === 5) {
      a06();
      if (a07(player)) {
        return 1;
      }
      nv.push(player);
      if (nv.length > 16) {
        nv.shift();
      }
      return 1;
    }
    if (a04 === 6) {
      for (var z = nv.length - 1; z >= 0; z--) {
        if (aV.lI[nv[z]] === 0) {
          nv.splice(z, 1);
        }
      }
      if (nv.length > 0) {
        if (aw.a08(1, nv, true)) {
          b0.fd.nu(nv, player);
        }
        nv = [];
      }
      return 1;
    }
    if (a04 === 2) {
      b0.ge.nP(aE.gj(), player);
      return 1;
    }
    if (a04 === 3) {
      if (a1.gd) {
        b0.ge.gf(zw);
      }
      return 1;
    }
    if (a04 === 0) {
      if (pP[0].kA === 0) {
        if (a1.zT && aJ.a09() < 350) {
          return 1;
        }
        b0.ge.gp(aE.gj(), player);
      } else {
        ar.gr(player, aE.gj());
      }
      return 1;
    }
    if (a04 === 1) {
      bL.a0A();
      b0.ge.gn(aE.gj(), zw);
      return 1;
    }
    if (a04 === 7) {
      bL.a0B();
      aY.sQ.show(kU, kV);
      return 2;
    }
    if (a04 === 4) {
      if (aw.a08(0, [player], true)) {
        b0.fd.nr(player);
      }
      return 1;
    }
    if (a04 === 8) {
      b0.ge.gi(aE.gj(), zw, player);
      return 1;
    }
    return 0;
  }
  this.click = function(kU, kV, xK) {
    var a0C;
    var gY = bC.gZ(kU);
    var ga = bC.gb(kV);
    var e4 = bC.eg(gY, ga);
    var dy = bC.e8(e4);
    if (!bC.gc(gY, ga)) {
      return false;
    }
    a0C = (m.n.uE() ? 0.025 : 0.0144) * an.oy;
    var dt = performance.now();
    if (Math.abs(kU - zu) > a0C || Math.abs(kV - zv) > a0C || dt > ds + 500) {
      return false;
    }
    ds = dt;
    if (xK) {
      a0D(kU, kV, dy);
    }
    if (a9.gS || this.to() || !b2.fd.gU(a1.e2) || a1.gR) {
      this.qK();
      return false;
    }
    if (a1.gd) {
      if (!xK) {
        if (!aQ.eD(dy)) {
          return false;
        }
        zw = e4;
        pP[3].to = true;
      }
      return this.a0E(kU, kV);
    }
    if (bD.gl.nU(e4)) {
      if (!xK) {
        bD.a0F.a0G = -1;
      }
      return this.a0E(kU, kV);
    }
    if (xK) {
      return false;
    }
    if (bD.gl.a0H(kU, kV)) {
      return this.a0E(kU, kV);
    }
    if (a1.v9 === 2) {
      if (!aQ.fq(dy)) {
        return this.a0E(kU, kV);
      }
      player = aQ.eA(dy);
      if (aQ.v2(player)) {
        pP[0].to = true;
        pP[0].kA = 1;
        pP[7].to = true;
        return this.a0E(kU, kV);
      }
      return this.a0E(kU, kV);
    }
    if (aQ.eN(dy)) {
      zw = ab.dv.dx(dy);
      if (zw) {
        var e7 = bC.e8(zw);
        pP[8].to = true;
        player = aQ.e9(e7) ? a1.eF : aQ.eA(e7);
      }
      return this.a0E(kU, kV);
    }
    zw = e4;
    if (bD.gl.gm(a1.e2, e4)) {
      pP[0].to = true;
      pP[0].kA = 1;
      pP[1].to = true;
      pP[1].kA = bE.eu[2] ? 0 : 2;
    }
    if (aQ.gk(dy)) {
      return this.a0E(kU, kV);
    }
    if (aQ.e9(dy)) {
      player = a1.eF;
      if (go(a1.e2)) {
        pP[0].to = true;
        pP[0].kA = 0;
      } else if (gq(a1.e2, player)) {
        pP[0].to = true;
        pP[0].kA = 3;
      }
      return this.a0E(kU, kV);
    }
    player = aQ.eA(dy);
    if (player === a1.e2) {
      pP[0].to = true;
      pP[0].kA = 1;
      pP[7].to = true;
      return this.a0E(kU, kV);
    }
    pP[0].kA = 1;
    pP[5].to = a0I(player);
    pP[7].to = aQ.v2(player);
    if (eB(player, a1.e2)) {
      pP[4].to = aQ.v2(player) && !aU.a0J(player) && aw.a08(0, [player], false);
      pP[6].to = a0K(player);
      if (gs(a1.e2, player)) {
        pP[0].kA = 0;
        pP[0].to = true;
      } else if (gq(a1.e2, player)) {
        pP[0].kA = 3;
        pP[0].to = true;
      }
      pP[0].to = this.a0L();
      return this.a0E(kU, kV);
    }
    pP[2].to = true;
    pP[0].to = true;
    return this.a0E(kU, kV);
  }
  ;
  function a0D(kU, kV, dy) {
    var a0M;
    if (aQ.eD(dy)) {
      aA.a0N(dy);
      return;
    }
    a0M = bD.gl.a0O(kU, kV);
    if (a0M === -1) {
      aA.a0N(dy);
    } else {
      aA.a0P(a0M);
    }
  }
  function a06() {
    var dt = performance.now();
    if (dt > zx + 4000) {
      nv = [];
    }
    zx = dt;
  }
  function a0I(player) {
    return aQ.v2(player) && !a07(player) && aw.a08(1, [player], false);
  }
  function a0K(player) {
    if (nv.length === 0) {
      return false;
    }
    if (performance.now() > zx + 4000) {
      nv = [];
      return false;
    }
    return !a07(player) && !a0Q(player);
  }
  function a07(player) {
    var z;
    for (z = nv.length - 1; z >= 0; z--) {
      if (nv[z] === player) {
        return true;
      }
    }
    return false;
  }
  function a0Q(player) {
    var z;
    if (!a1.iN) {
      return false;
    }
    for (z = nv.length - 1; z >= 0; z--) {
      if (!eB(player, nv[z])) {
        return true;
      }
    }
    return false;
  }
  this.a0E = function(kU, kV) {
    eP = kU - Math.floor(zt / 2);
    eR = kV - Math.floor(zt / 2);
    if (this.to()) {
      return true;
    }
    return false;
  }
  ;
  this.wq = function(kU, kV) {
    if (!this.to()) {
      return false;
    }
    if (aY.sQ.to) {
      if (aY.sQ.uG(kU, kV)) {
        return false;
      }
      aY.sQ.to = false;
      bU.dO = true;
      return true;
    }
    return a0R(this, kU, kV);
  }
  ;
  function a0R(vh, kU, kV) {
    var o0 = a03(kU, kV);
    if (a05(o0) >= 0) {
      return false;
    }
    if ((o0 === 1 || o0 === 6) && a05(2) >= 0) {
      return false;
    }
    if ((o0 === 6 || o0 === 9) && a05(10) >= 0) {
      return false;
    }
    vh.qK();
    bU.dO = true;
    return true;
  }
  function a05(a02) {
    var z, eI;
    if (a02 === -1) {
      return -1;
    }
    eI = pP.length;
    for (z = 0; z < eI; z++) {
      if (pP[z].to && pP[z].eP + 1 === a02 % 4 && pP[z].eR + 1 === (a02 >> 2)) {
        return z;
      }
    }
    return -1;
  }
  this.qK = function() {
    for (var z = pP.length - 1; z >= 0; z--) {
      pP[z].to = false;
      pP[z].kA = 0;
    }
    aY.sQ.to = false;
  }
  ;
  this.to = function() {
    return this.a0L() || aY.sQ.to;
  }
  ;
  this.a0L = function() {
    var z;
    var eI = pP.length;
    for (z = 0; z < eI; z++) {
      if (pP[z].to) {
        return true;
      }
    }
    return false;
  }
  ;
  function a03(kU, kV) {
    var sr, ss;
    var qL = gap / 2;
    if (kU < eP - zt - 3 * qL || kU > eP + 3 * zt + 5 * qL || kV < eR - zt - 3 * qL || kV > eR + 2 * zt + 3 * qL) {
      return -1;
    }
    sr = kU < eP - qL ? 0 : kU < eP + zt + qL ? 1 : kU < eP + 2 * zt + 3 * qL ? 2 : 3;
    ss = kV < eR - qL ? 0 : kV < eR + zt + qL ? 1 : 2;
    return ss * 4 + sr;
  }
  this.qn = function() {
    if (!this.to()) {
      return;
    }
    if (aY.sQ.to) {
      aY.sQ.qn();
      return;
    }
    a0S();
  }
  ;
  function a0S() {
    var z;
    var h1 = qo;
    var ec = pP;
    var eI = ec.length;
    var a0T = (zt + gap) / zoom;
    h1.imageSmoothingEnabled = true;
    h1.setTransform(zoom, 0, 0, zoom, eP, eR);
    for (z = 0; z < eI; z++) {
      if (ec[z].to) {
        qo.drawImage(ec[z].h0[ec[z].kA], ec[z].eP * a0T, ec[z].eR * a0T);
      }
    }
    h1.imageSmoothingEnabled = false;
    h1.setTransform(1, 0, 0, 1, 0, 0);
  }
}
function bu() {
  var ir;
  var h0;
  var a0U;
  var a0V;
  var a0W;
  var a0X = -1;
  this.gS = false;
  this.dH = function() {
    a0V = -1;
    this.gS = false;
    a0W = m.n.uE() ? 1.2 : 0.6;
    this.resize();
  }
  ;
  this.resize = function() {
    ir = aE.ir;
    h0 = document.createElement("canvas");
    h0.width = ir;
    h0.height = ir;
    a0U = b2.ow.q5(1, (m.n.uE() ? 0.5 : 0.45) * ir);
    a0Y();
  }
  ;
  function a0Y() {
    var a0Z;
    var tU = h0.getContext("2d", {
      alpha: true
    });
    tU.clearRect(0, 0, ir, ir);
    tU.fillStyle = p.mH;
    tU.fillRect(0, 0, ir, ir);
    if (a0V === 0) {
      tU.fillStyle = p.mM;
      tU.fillRect(0, 0, ir, ir);
    }
    tU.fillStyle = p.mL;
    tU.fillRect(0, 0, ir, 1);
    tU.fillRect(0, 0, 1, ir);
    tU.fillRect(0, ir - 1, ir, 1);
    tU.fillRect(ir - 1, 0, 1, ir);
    a0Z = 0.9 * ir / aP.get(0).width;
    tU.imageSmoothingEnabled = true;
    tU.setTransform(a0Z, 0, 0, a0Z, Math.floor((ir - a0Z * aP.get(0).width) / 2), Math.floor((ir - a0Z * aP.get(0).height) / 2));
    tU.drawImage(aP.get(0), 0, 0);
    tU.setTransform(1, 0, 0, 1, 0, 0);
  }
  this.xT = function() {
    this.gS = !this.gS;
    if (!this.gS) {
      a0V = -1;
      a0Y();
      if (a1.jn && a1.v9 === 1 && !a1.gd && !a1.gR) {
        m.n.setState(1);
      }
    } else {
      bK.db.hideCMPButton();
      b3.xS(false);
      a1.gR && b3.zq && b3.xU(true);
      this.a0a();
    }
    bU.dO = true;
  }
  ;
  this.a0a = function() {
    if ((a1.jn || a1.gR) && a1.v9 === 1) {
      aI.l1(true);
      if (!a1.gd) {
        setTimeout(function() {
          bQ.vK();
        }, 0);
      }
      m.n.setState(0);
    }
  }
  ;
  this.gV = function(kU, kV) {
    a0X = a0b(kU, kV);
    if (a0X >= 0) {
      return true;
    }
    a0c();
    return false;
  }
  ;
  function a0c() {
    if (a9.gS && !a1.jn && !a1.gR && !bT.to) {
      a9.xT();
    }
  }
  this.wq = function(kU, kV) {
    var kA = a0b(kU, kV);
    if (kA === a0V) {
      return;
    }
    a0V = kA;
    if (!this.gS) {
      a0Y();
    }
    bU.dO = true;
    return;
  }
  ;
  this.wr = function(kU, kV) {
    var kA = a0b(kU, kV);
    if (kA === -1) {
      return false;
    }
    if (a0X !== kA) {
      return false;
    }
    if (this.gS) {
      if (a1.ln) {
        if (kA >= 0) {
          b3.xS(false);
        }
        return !a1.gR;
      }
      if (kA === 0) {
        a1.wh();
        return true;
      }
      if (kA === 1) {
        this.xT();
        return true;
      }
      if (kA === 2) {
        i.j(1, 0);
        return true;
      }
      return true;
    }
    if (kA === 0) {
      this.xT();
      return true;
    }
    return false;
  }
  ;
  function a0b(kU, kV) {
    if (!a9.gS) {
      if (kU <= ir + bR.gap && kV >= aE.eR) {
        return 0;
      }
      return -1;
    }
    if (kU <= 4 * ir + bR.gap) {
      if (kV >= aE.eR) {
        return 0;
      }
      if (kV >= aE.eR - ir - a0W * bR.gap) {
        return 2;
      }
    } else if (kU <= 7 * ir + bR.gap && kV >= aE.eR - ir - a0W * bR.gap) {
      return 1;
    }
    return -1;
  }
  this.qn = function() {
    if (this.gS) {
      a0d();
      a0e();
      qo.setTransform(1, 0, 0, 1, 0, 0);
    } else {
      qo.drawImage(h0, bR.gap, aE.eR);
    }
  }
  ;
  this.a0f = function(player) {
    return aV.lI[player] !== 0 && a1.v9 !== 2 && aQ.v2(player);
  }
  ;
  function a0d() {
    var eI;
    var t = Math.floor(5.5 * ir);
    qo.setTransform(1, 0, 0, 1, bR.gap, aE.eR);
    qo.fillStyle = p.mH;
    qo.fillRect(0, 0, t, ir);
    if (a0V === 0) {
      qo.fillStyle = p.mM;
      qo.fillRect(0, 0, 4 * ir, ir);
    } else if (a0V === 1) {
      qo.fillStyle = p.mM;
      qo.fillRect(4 * ir, 0, Math.floor(1.5 * ir), ir);
    }
    qo.fillStyle = p.mL;
    qo.fillRect(0, 0, t, 1);
    qo.fillRect(0, 0, 1, ir);
    qo.fillRect(4 * ir, 0, 1, ir);
    qo.fillRect(0, ir - 1, t, 1);
    qo.fillRect(t - 1, 0, 1, ir);
    qo.font = a0U;
    b2.ow.textBaseline(qo, 1);
    b2.ow.textAlign(qo, 1);
    qo.fillText(L(18), 2 * ir, 0.54 * ir);
    eI = 0.4 * ir;
    a9.a0g(bR.gap + 4 * ir + (1.5 * ir - eI) / 2, aE.eR + 0.3 * ir, eI);
  }
  function a0e() {
    a0h(1);
  }
  function a0h(z) {
    qo.setTransform(1, 0, 0, 1, bR.gap, aE.eR - z * a0W * bR.gap - z * ir);
    qo.fillStyle = p.mH;
    qo.fillRect(0, 0, 4 * ir, ir);
    if (a0V === z + 1) {
      qo.fillStyle = p.mM;
      qo.fillRect(0, 0, 4 * ir, ir);
    }
    qo.fillStyle = p.mL;
    qo.fillRect(0, 0, 4 * ir, 1);
    qo.fillRect(0, 0, 1, ir);
    qo.fillRect(4 * ir, 0, 1, ir);
    qo.fillRect(0, ir - 1, 4 * ir, 1);
    qo.fillText(z === 0 ? L(18) : L(19), 2 * ir, 0.54 * ir);
  }
  this.a0g = function(eP, eR, eI) {
    qo.setTransform(1, 0, 0, 1, eP, eR);
    qo.lineWidth = bR.uH;
    qo.strokeStyle = p.mL;
    qo.beginPath();
    qo.moveTo(0, 0);
    qo.lineTo(eI, eI);
    qo.moveTo(0, eI);
    qo.lineTo(eI, 0);
    qo.stroke();
  }
  ;
}
function bv() {
  var a0i;
  var ir;
  var a0j;
  var a0k;
  var a0l;
  var a0m;
  var a0n;
  var a0o;
  var a0p;
  this.a0q = "";
  this.dH = function() {
    a0o = 0;
    a0n = !m.n.uE() ? 12 : 7;
    a0m = {
      tb: [0, 0, 0],
      a0r: [0, 0, 0],
      la: [220, 180, 180],
      ql: [0, 0, 0],
      ed: [0, 0, 0]
    };
    a0i = [];
    this.resize();
    if (a1.gd) {
      this.vL(0, 18);
    }
    a0s();
    a0t(this);
    this.a0u();
  }
  ;
  function a0t(self) {
    if (self.a0q.length === 0) {
      return;
    }
    a0v(200, self.a0q, 0, 0, p.mL, p.mI, -1, false);
    self.a0q = "";
  }
  this.a0u = function() {
    var z, eI;
    if (!ay.jh) {
      return;
    }
    eI = ay.ji.a0w.length;
    for (z = 0; z < eI; z++) {
      a0v(400, ay.ji.a0w[z], 6, 0, a0x(255, 255, 255), p.mI, -1, false);
    }
  }
  ;
  this.resize = function() {
    var a0y, z;
    ir = Math.floor((m.n.uE() ? 0.031 : 0.0249) * an.oy);
    ir = ir < 10 ? 10 : ir;
    this.fontSize = Math.floor(2 * ir / 3);
    this.a0U = b2.ow.q5(1, this.fontSize);
    a0j = bR.gap;
    a0k = Math.floor(ir / 5);
    if (a0i.length > 0) {
      a0y = a0i;
      a0i = [];
      for (z = a0y.length - 1; z >= 0; z--) {
        a0v(a0y[z].ds, a0y[z].od, a0y[z].id, a0y[z].player, a0y[z].a0z, a0y[z].a10, a0y[z].sY, a0y[z].a11, a0y[z].a12, a0y[z].a13);
      }
    }
    this.a14();
  }
  ;
  this.a14 = function() {
    a0p = document.createElement("canvas");
    var od = L(20);
    a0l = aD.measureText(od, this.a0U) + 5 * a0k;
    a0p.height = ir;
    a0p.width = a0l;
    var tU = a0p.getContext("2d", {
      alpha: true
    });
    tU.font = this.a0U;
    b2.ow.textBaseline(tU, 1);
    b2.ow.textAlign(tU, 1);
    tU.clearRect(0, 0, a0l, ir);
    tU.fillStyle = p.q;
    tU.fillRect(0, 0, a0l, ir);
    tU.fillStyle = p.mL;
    tU.fillText(od, Math.floor(a0l / 2), Math.floor(ir / 2));
  }
  ;
  this.a15 = function() {
    if (al.to) {
      return al.t;
    }
    var eI = a0i.length;
    if (eI === 0) {
      return 0;
    } else if (eI === 1) {
      return a0i[0].a16;
    }
    return a17(a0i[0].a16, a0i[1].a16);
  }
  ;
  this.a18 = function() {
    var eI = a0i.length;
    if (al.to) {
      if (eI) {
        return a17(al.t, a0i[0].a16);
      }
      return al.t;
    }
    if (eI === 0) {
      return 0;
    } else if (eI === 1) {
      return a0i[0].a16;
    } else if (eI === 2) {
      return a17(a0i[0].a16, a0i[1].a16);
    }
    return a17(a17(a0i[0].a16, a0i[1].a16), a0i[2].a16);
  }
  ;
  function tQ() {
    if (aE.a19(aA.a15())) {
      if (al.to) {
        return aE.eR - aE.ir - 2 * a0j;
      } else {
        return aE.eR - a0j;
      }
    } else if (b3.a19(aA.a18())) {
      if (al.to) {
        return b3.tQ() - aE.ir - 2 * a0j;
      } else {
        return b3.tQ() - a0j;
      }
    } else if (al.to) {
      return an.ir - aE.ir - (bZ.zs() + 1) * a0j;
    }
    return an.ir - bZ.zs() * bR.gap;
  }
  this.gV = function(eP, eR) {
    var z, a1A, dt;
    var a1B = tQ();
    for (z = a0i.length - 1; z >= 0; z--) {
      a1A = a1B - (z + 1) * ir;
      if (eR >= a1A && eR < a1A + ir) {
        if (a0i[z].id === 50) {
          if (eP >= an.t - a0l - a0j - a0i[z].t) {
            if (eP >= an.t - a0l - a0j) {
              b0.fd.nr(a0i[z].player);
            } else {
              a5.le(a0i[z].player, 800, false, 0);
            }
            return true;
          }
          return false;
        }
        if (eP >= an.t - a0i[z].t - a0j) {
          if (a0i[z].id === 736) {
            var a1C = a0i[z].od.split(" ");
            window.open(a1C[a1C.length - 1], "_blank");
          } else if (a0i[z].a11) {
            if (a0i[z].a13 && a0i[z].a13.eb) {
              var e4 = a0i[z].a13.e4;
              var lk = bC.eQ(e4) - 10;
              var ll = bC.eS(e4) - 10;
              a5.ld(lk, ll, lk + 19, ll + 19);
            } else if (a0i[z].a13 && a0i[z].a13.ec) {
              a5.lf(a0i[z].player, a0i[z].a13.lg);
            } else {
              a5.le(a0i[z].player, 800, false, 0);
              if (a0i[z].sY >= 0) {
                dt = a0i[z].sY;
                a0i[z].sY = a0i[z].player;
                a0i[z].player = dt;
              }
            }
          }
          return true;
        }
        return false;
      }
    }
    return false;
  }
  ;
  this.vY = function(dt, od, id, fo, a0z, a10, sY, a11, a12, a13) {
    a0v(dt, od, id, fo, a0z, a10, sY, a11, a12, a13);
  }
  ;
  this.a1D = function(w3) {
    a0v(300, w3, 252, 0, p.mL, p.mI, -1, false);
  }
  ;
  function a0v(dt, od, id, fo, a0z, a10, sY, a11, a12, a13) {
    var z, tU, a16, y6, op;
    var a1E = a12 !== undefined;
    var t = Math.floor(aD.measureText(od, aA.a0U) + 1.5 * a0k + (a1E ? ir : (1.5 * a0k)));
    bU.dO = true;
    if (t + a0j > an.t && !a1E && id !== 50 && od.length > 20) {
      var ey = b2.w0.zE(od);
      a0v(dt, ey[0], id, fo, a0z, a10, sY, a11, a12, a13);
      a0v(dt, ey[1], id, fo, a0z, a10, sY, a11, a12, a13);
      return;
    }
    a16 = t + (id === 50 ? a0l : 0);
    y6 = document.createElement("canvas");
    y6.width = t;
    y6.height = ir;
    tU = y6.getContext("2d", {
      alpha: true
    });
    tU.font = aA.a0U;
    b2.ow.textBaseline(tU, 1);
    b2.ow.textAlign(tU, 0);
    tU.clearRect(0, 0, t, ir);
    tU.fillStyle = a10;
    tU.fillRect(0, 0, t, ir);
    tU.fillStyle = a0z;
    tU.fillText(od, Math.floor(1.5 * a0k), Math.floor(ir / 2));
    if (a1E) {
      tU.imageSmoothingEnabled = true;
      aY.sQ.uI(a12, tU, t - ir, 0, ir);
    }
    op = {
      ds: dt,
      od: od,
      id: id,
      player: fo,
      h0: y6,
      a0z: a0z,
      a10: a10,
      t: t,
      a16: a16,
      sY: sY,
      a11: a11,
      a12: a12,
      a13: a13
    };
    if (op.ds === 0 || (a0i.length > 0 && a0i[0].ds > 0)) {
      a0i.unshift(op);
    } else {
      for (z = 1; z < a0i.length; z++) {
        if (a0i[z].ds > 0) {
          a0i.splice(z, 0, op);
          return;
        }
      }
      a0i.push(op);
    }
  }
  this.zN = function(id) {
    for (var z = a0i.length - 1; z >= 0; z--) {
      if (a0i[z].id === id) {
        a0i[z].ds = 1;
      }
    }
  }
  ;
  this.vL = function(player, id) { //Announcements
    if (id === 0) {
      bS.lE[player < a1.jN ? 4 : 3]++;
      aD.iQ(player, 0);
      a1F(423, 0);
      a0v(160, L(21, [aV.a1G[player]]), 423, player, "rgb(10,220,10)", p.mI, -1, false);
    } else if (id === 1) {
      a1H(50, a1.eF);
      aD.iQ(player, 1);
      a0v(360, L(22, [aV.a1G[player]]), 0, player, p.mv, p.mI, -1, true);
      a5.le(player, 2700, false, 0);
    } else if (id === 2) {
      aD.iQ(player, 2);
      a0v(0, L(23), 0, player, "rgb(10,255,255)", p.mI, -1, true);
      a5.le(player, 2700, false, 0);
    } else if (id === 3) {
      aD.iQ(player, 2);
      a0v(0, L(24, [aV.a1G[player]]), 0, player, p.mL, p.mI, -1, true);
      a5.le(player, 2700, false, 0);
    } else if (id === 4) {
      this.a1I(1, player, player);
    } else if (id === 5) {
      if (aV.yb[player] === 2 || !aQ.v2(a1.e2)) {
        return;
      }
      a1J(1, 5);
      if (aU.a1K(player)) {
        a0v(180, L(25, [aV.a1G[player]]), 1, player, a0x(255, 200, 180), p.mI, -1, true);
      } else {
        a1F(573, 0);
        a0v(180, L(26, [aV.a1G[player]]), 573, player, p.mv, p.mI, -1, true);
      }
    } else if (id === 18) {
      a0v(255, L(27), 18, 0, p.mL, p.mI, -1, false);
    } else if (id === 21) {
      a0v(220, L(28), id, 0, p.mL, p.mI, -1, false);
    } else if (id === 22) {
      this.a1I(2, player, player);
    } else if (id === 59) {
      a0v(0, L(29), id, 0, p.n7, p.mI, 0, false);
    }
  }
  ;
  this.wY = function(w3) {
    a0v(200, L(30, [w3]), 94, 0, p.mL, p.mr, -1, false);
  }
  ;
  this.vS = function(a1L) {
    aD.iQ(a1L, 2);
    if (a1.jN < 100) {
      a0v(0, L(24, [aV.a1G[a1L]]), 3, a1L, p.mL, p.mI, -1, true);
    } else {
      a0v(0, L(31, [aV.a1G[a1L]]), 3, a1L, p.mL, p.mI, -1, true);
    }
  }
  ;
  this.a0N = function(dy) {
    var od;
    var a1M = "(" + bC.eQ(dy >> 2) + ", " + bC.eS(dy >> 2) + ")";
    var a11 = false;
    var player = 0;
    if (aQ.eD(dy)) {
      if (aQ.e9(dy)) {
        a1M = L(32, [a1M]);
      } else {
        player = aQ.eA(dy);
        od = L(33, [b2.tU.yI(aV.w2[player], b2.ow.q5(0, 10), 150)]) + "   ";
        od += L(34, [b2.w0.z6(aV.gK[player])]) + "   ";
        od += L(35, [b2.w0.z6(aV.g6[player])]) + "   ";
        od += L(36, [a1M]) + "   ";
        od += L(37, [player]);
        a1M = od;
        a11 = true;
      }
    } else if (aQ.eN(dy)) {
      a1M = L(38, [a1M]) + "   #" + aQ.e0(dy);
    } else {
      a1M = L(39, [a1M]);
    }
    bU.dO = true;
    a1F(55, 0);
    a0v(220, a1M, 55, player, p.mL, p.mI, -1, a11);
  }
  ;
  this.a0P = function(a1N) {
    var k8 = bD.kt;
    var player = k8.a1O[a1N] >> 3;
    bU.dO = true;
    a1F(55, 0);
    var od = L(40, [aV.a1G[player]]) + "   ";
    od += L(34, [k8.a1P[a1N]]);
    a0v(220, od, 55, player, p.mL, p.mI, -1, true);
  }
  ;
  this.nZ = function(nM, a1Q, na) {
    if (nM === a1.e2) {
      a0v(175, " " + L(41, [aV.a1G[a1Q]]) + ": ", 1001, a1Q, a0x(200, 255, 210), p.mI, -1, true, na);
    } else {
      this.a1R(nM, na);
    }
  }
  ;
  this.a1R = function(nM, na) {
    a1F(1000, 0);
    a0v(175, aV.a1G[nM] + ": ", 1000, nM, p.mL, "rgba(5,60,25,0.9)", -1, true, na);
  }
  ;
  function a1J(id, lD) {
    var z;
    var a1S = 0;
    var eI = a0i.length;
    for (z = 0; z < eI; z++) {
      if (a0i[z].id === id) {
        a1S++;
        if (a1S >= lD) {
          a0i.splice(z, 1);
          return;
        }
      }
    }
  }
  this.vZ = function() {
    var w3;
    if (a1.vE) {
      w3 = L(42);
      aD.vX(L(43), 2, 1, 12);
      a0v(0, w3, 40, 0, "rgb(10,220,10)", p.mI, -1, false);
    } else {
      w3 = L(44);
      aD.vX(L(45), 2, 0, 16);
      a0v(0, w3, 41, 0, p.mL, p.mI, -1, false);
    }
  }
  ;
  this.tc = function(tb) {
    a0v(300, tb[0].name + " [" + a1.vR.ti(tb[0].tf) + "] vs " + tb[1].name + " [" + a1.vR.ti(tb[1].tf) + "]", 65, 0, p.mC, "rgba(100,255,255,0.75)", -1, false);
  }
  ;
  this.a1T = function(w3) {
    a0v(200, w3, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, false);
  }
  ;
  this.a1U = function(a1V) {
    a0v(0, a1V ? L(46) : L(47), 247, 0, p.n6, p.mI, -1, false);
  }
  ;
  this.tk = function(tb, th, tj, a1W) {
    a0v(0, tb[0].name + ": " + a1.vR.ti(tb[0].tf) + " -> " + th, 66, 0, p.mL, a1W[0], -1, false);
    a0v(0, tb[1].name + ": " + a1.vR.ti(tb[1].tf) + " -> " + tj, 66, 1, p.mL, a1W[1], -1, false);
  }
  ;
  this.ns = function(player, id) {
    if (id === 0) {
      if (a1H(50, player)) {
        a0v(128, L(48, [aV.a1G[player]]), 52, player, a0x(180, 255, 180), p.mI, -1, true);
        aU.oW(player, 2, 255);
      } else {
        a0v(384, L(49, [aV.a1G[player]]), 51, player, a0x(210, 210, 255), p.mI, -1, true);
      }
    } else {
      if (a1H(51, player)) {
        a0v(128, L(50, [aV.a1G[player]]), 52, player, p.mL, "rgba(60,120,10,0.9)", -1, true);
        aU.oW(player, 2, 255);
      } else {
        a0v(384, L(51, [aV.a1G[player]]), 50, player, p.mL, "rgba(90,90,90,0.9)", -1, true);
        aU.oW(player, 2, 96);
      }
    }
  }
  ;
  this.nw = function(tb, target) {
    var color = a0x(210, 255, 210);
    if (tb.length > 1) {
      a0v(230, L(52, [tb.length, aV.a1G[target]]), 66, target, color, p.mI, -1, true);
    } else {
      a0v(230, L(53, [aV.a1G[tb[0]], aV.a1G[target]]), 66, tb[0], color, p.mI, target, true);
    }
  }
  ;
  function a0x(h3, qL, ec) {
    return "rgb(" + h3 + "," + qL + "," + ec + ")";
  }
  this.a1X = function(player, target) {
    a0v(230, L(54, [aV.a1G[player], aV.a1G[target]]), 66, player, p.mL, "rgba(75,65,5,0.9)", target, true);
  }
  ;
  this.a1Y = function(id, fj) {
    a1F(id, fj);
  }
  ;
  function a1F(id, fj) {
    var z;
    var eI = a0i.length;
    for (z = 0; z < eI; z++) {
      if (a0i[z].id === id && (fj--) <= 0) {
        a0i.splice(z, 1);
        z--;
        eI--;
      }
    }
  }
  function a1H(id, player) {
    var z;
    var eW = false;
    for (z = a0i.length - 1; z >= 0; z--) {
      if (a0i[z].id === id && (player === a1.eF || a0i[z].player === player)) {
        a0i.splice(z, 1);
        eW = true;
      }
    }
    return eW;
  }
  this.a1Z = function(id) {
    for (var z = a0i.length - 1; z >= 0; z--) {
      if (a0i[z].id === id) {
        return a0i[z];
      }
    }
    return null;
  }
  ;
  this.vG = function(id, player) {
    a1H(id, player);
  }
  ;
  this.nn = function(a1a, a1b, player) {
    if (aV.yb[a1.e2] === 2) {
      return;
    }
    var a1c;
    if (a1a === 1) {
      a1c = L(55, [aV.a1G[player]]);
    } else {
      a1c = L(56, [a1a, aV.a1G[player]]);
    }
    a0v(200, a1c, 30, player, "rgb(190,255,190)", p.mI, -1, true);
    if (a1b) {
      if (a1b === 1) {
        a1c = L(57);
      } else {
        a1c = L(58, [a1b]);
      }
      a0v(30, a1c, 30, 0, p.mL, p.mI, -1, false);
    }
  }
  ;
  this.a1d = function(a1a, player) {
    if (aV.yb[a1.e2] === 2) {
      return;
    }
    a1F(31, 0);
    var a1c;
    if (aV.yb[player] === 2 || player >= a1.jN) {
      if (a1a === 1) {
        a1c = L(59, [aV.a1G[player]]);
      } else {
        a1c = L(60, [aV.a1G[player], a1a]);
      }
      a0v(150, a1c, 31, player, p.mC, "rgba(205,205,205,0.9)", -1, true);
    } else {
      if (a1a === 1) {
        a1c = L(61, [aV.a1G[player]]);
      } else {
        a1c = L(62, [aV.a1G[player], a1a]);
      }
      a0v(150, a1c, 31, player, p.mC, "rgba(205,255,205,0.9)", -1, true);
    }
  }
  ;
  function a0s() {
    a1e(L(63, [bI.ji.sh[bI.fz].name]));
    a1e(L(64, [(bI.eT - 2) + "x" + (bI.eU - 2)]));
    a1e(L(65, [ad.a1f]));
    if (ad.a1f !== ad.a1g) {
      a1e(L(66, [ad.a1g + " (" + b2.w0.zB(100 * ad.a1g / ad.a1f, 1) + ")"]));
    }
    if (ad.a1h > 0) {
      a1e(L(39, [ad.a1h + " (" + b2.w0.zB(100 * ad.a1h / ad.a1f, 1) + ")"]));
    }
    if (ad.a1i > 0) {
      a1e(L(67, [ad.a1i + " (" + b2.w0.zB(100 * ad.a1i / ad.a1f, 1) + ")"]));
    }
    if (a1.jl === 10) {
      a0v(120, L(68), 6, 0, a0x(235, 255, 120), p.mI, -1, false);
    }
  }
  function a1e(od) {
    a0v(340, od, 6, 0, a0x(215, 245, 255), p.mI, -1, false);
  }
  this.vF = function(bc) {
    var z;
    var ed = bU.jK();
    for (z = 2; z >= 0; z--) {
      if (a0m.ql[z] > 0 && (bc || a0m.ed[z] < ed - 220)) {
        this.a1j(z);
      }
    }
  }
  ;
  this.a1j = function(id) {
    var od;
    var eI = a0m.ql[id];
    var player = a0m.tb[id];
    a0m.ql[id] = 0;
    if (eI === 1) {
      if (id === 0) {
        od = L(69, [aV.a1G[player], aV.a1G[a0m.a0r[0]]]);
      } else if (id === 1) {
        od = L(70, [aV.a1G[player]]);
      } else if (id === 2) {
        od = L(71, [aV.a1G[player]]);
      } else if (id === 3) {
        od = L(72, [aV.a1G[player]]);
      }
      a1F(7, 0);
      a0v(a0m.la[id], od, 7, a0m.a0r[id], p.mL, p.mI, -1, true);
    } else {
      if (id === 0) {
        od = L(73, [eI]);
      } else if (id === 1) {
        od = L(74, [eI]);
      } else {
        od = L(75, [eI]);
      }
      a1F(7, 0);
      a0v(a0m.la[id], od, 7, player, p.mL, p.mI, -1, false);
    }
  }
  ;
  this.a1I = function(id, gh, sY) {
    var ed = bU.jK();
    var eI = a0m.ql[id] + 1;
    a0m.ql[id]++;
    a0m.tb[id] = gh;
    a0m.a0r[id] = sY;
    if (eI === 1) {
      a0m.ed[id] = ed;
    }
    if (eI === 1 && (a1.vC < 32 || a1.v9 === 2)) {
      this.a1j(id);
      return;
    }
    if (eI > 1 && (a0m.ed[id] < ed - 140 || a1.v9 === 2)) {
      this.a1j(id);
    }
  }
  ;
  this.iC = function() {
    var z;
    var hF = a0i.length - a0n;
    hF = hF <= 1 ? 1 : hF * hF;
    for (z = a0i.length - 1; z >= 0; z--) {
      if (a0i[z].ds > 0) {
        a0i[z].ds -= hF;
        if (a0i[z].ds <= 0) {
          bU.dO = true;
          a0i.splice(z, 1);
        }
      }
    }
    a1k();
    this.vF(false);
  }
  ;
  function a1k() {
    var fj, z;
    if (a0o === 128) {
      return;
    }
    a0o++;
    if (a0o < 128) {
      return;
    }
    fj = 5;
    for (z = aa.jO - 1; z >= 0; z--) {
      if (aV.yb[aa.jQ[z]] === 1 && fj-- > 0) {
        a0v(240, L(72, [aV.a1G[aa.jQ[z]]]), 1, aa.jQ[z], p.mC, "rgba(255,255,255,0.75)", -1, true);
      }
    }
  }
  this.qn = function() {
    var eR = tQ();
    var ss;
    for (var z = a0i.length - 1; z >= 0; z--) {
      ss = eR - (z + 1) * ir;
      if (a0i[z].id === 50) {
        qo.drawImage(a0i[z].h0, an.t - a0i[z].t - a0l - a0j, ss);
        qo.drawImage(a0p, an.t - a0l - a0j, ss);
      } else {
        qo.drawImage(a0i[z].h0, an.t - a0i[z].t - a0j, ss);
      }
    }
  }
  ;
}
function bw() {
  var a1l, a1m, a1n;
  var t;
  var ir;
  var font;
  var od;
  this.dH = function() {
    od = L(76);
  }
  ;
  this.resize = function() {
    t = Math.floor((m.n.uE() ? 0.53 : 0.36) * an.oy);
    ir = Math.floor(0.065 * t);
    font = b2.ow.q5(1, Math.floor(0.9 * ir));
    a1n--;
    this.setTime();
  }
  ;
  this.iC = function() {
    if (this.setTime()) {
      bU.dO = true;
    }
  }
  ;
  this.setTime = function() {
    var a1o;
    var dt = new Date();
    var a1p = dt.getUTCMinutes();
    var a1q = dt.getUTCSeconds();
    a1m = 60 * 60 - 60 * a1p - a1q;
    a1m %= 60 * 15;
    a1l = od + a1r(Math.floor(a1m / 60)) + ":" + a1r(a1m % 60);
    a1o = a1n;
    a1n = a1p * 60 + a1q;
    if (a1o === a1n) {
      return false;
    }
    t = aD.measureText(a1l, font);
    t += Math.floor(0.4 * ir);
    return true;
  }
  ;
  function a1r(a1s) {
    return a1s < 10 ? "0" + a1s : String(a1s);
  }
  this.qn = function() {
    qo.lineWidth = 1 + Math.floor(ir / 15);
    if (aN.wU() === 7 && aj.a1t() + 2 * bR.gap > 0.5 * (an.ir - t)) {
      qo.translate(an.t - ir, Math.floor(aj.a1t() + 2 * bR.gap + t));
    } else {
      qo.translate(an.t - ir, Math.floor(0.5 * (an.ir + t)));
    }
    qo.rotate(-Math.PI / 2);
    qo.fillStyle = p.mL;
    qo.fillRect(0, 0, t, ir);
    qo.strokeStyle = p.mC;
    qo.strokeRect(0, 0, t, ir + 10);
    qo.fillStyle = p.mC;
    qo.font = font;
    b2.ow.textBaseline(qo, 1);
    b2.ow.textAlign(qo, 1);
    qo.fillText(a1l, Math.floor(t / 2), Math.floor(0.59 * ir));
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
  ;
}
function bx() {
  var a0i;
  var a1u;
  var a0U;
  var ir, a1v;
  this.dH = function() {
    a0i = [];
    this.resize();
  }
  ;
  this.resize = function() {
    a0U = aA.a0U;
    ir = aA.fontSize + 5;
    ir = Math.floor(1.25 * ir);
    if (m.n.uE()) {
      ir = Math.floor(1.25 * ir);
    }
    a1v = Math.floor(0.15 * ir);
    bI.sJ.font = a0U;
    a1u = Math.floor(bI.sJ.measureText("02 000 000 0000").width);
    for (var z = a0i.length - 1; z >= 0; z--) {
      a1w(a0i[z]);
      a1x(z);
    }
  }
  ;
  this.l1 = function() {
    for (var z = a0i.length - 1; z >= 0; z--) {
      if (a0i[z].a1y) {
        a0i[z].a1y = false;
        a1x(z);
      }
    }
  }
  ;
  function a1x(z) {
    var a1z = true;
    var hA = p.mL;
    if (a0i[z].iT === a1.eF) {
      a0i[z].tU.fillStyle = p.mV;
    } else {
      aQ.a20(a0i[z].iT);
      a0i[z].tU.fillStyle = b2.color.mF(bE.es[0], bE.es[1], bE.es[2], 0.87);
      if (b2.p6.xt(bE.es, 0, 2) > 400) {
        a1z = false;
        hA = p.mC;
      }
    }
    var t = a0i[z].h0.width;
    a0i[z].tU.clearRect(0, 0, t, ir);
    a0i[z].tU.fillRect(0, 0, t, ir);
    a0i[z].tU.fillStyle = hA;
    a21(a0i[z].tU, t, ir);
    if (t > a1u + 2 * ir) {
      a0i[z].tU.fillRect(t - a1u - ir, 0, 1, ir);
      a0i[z].tU.fillText(aV.a1G[a0i[z].iT], Math.floor((t - a1u) / 2), Math.floor(0.57 * ir));
    }
    var q7 = a0i[z].id !== 0 ? 0 : ir;
    a0i[z].tU.fillText(b2.w0.z6(a0i[z].iU), Math.floor(t - a1u / 2 - q7), Math.floor(0.57 * ir));
    a22(z, t, q7, a1z);
    if (a0i[z].id === 0) {
      a23(z, t, a1z, hA);
      a24(z, t, a1z);
    } else {
      a23(z, 2 * ir, a1z, hA);
    }
  }
  function a21(tU, t, ir) {
    tU.fillRect(0, 0, t, 1);
    tU.fillRect(0, ir - 1, t, 1);
    tU.fillRect(0, 0, 1, ir);
    tU.fillRect(t - 1, 0, 1, ir);
  }
  function a22(z, t, q7, a1z) {
    a0i[z].tU.fillStyle = a1z ? p.mN : p.mJ;
    var a25 = Math.floor(a1u * a0i[z].iU / a0i[z].a26);
    a0i[z].tU.fillRect(Math.floor(t - a1u - q7), ir - a1v, a25, a1v);
  }
  function a23(z, t, a1z, hA) {
    a0i[z].tU.strokeStyle = a0i[z].a27 ? p.mT : a1z ? p.mn : p.mo;
    a0i[z].tU.fillStyle = hA;
    a0i[z].tU.fillRect(t - ir, 0, 1, ir);
    a0i[z].tU.lineWidth = Math.max(Math.floor(ir / 12), 3);
    a0i[z].tU.lineCap = "round";
    var eL = 0;
    var lw = 0.35;
    t = ir + 1;
    a0i[z].tU.beginPath();
    a0i[z].tU.moveTo(Math.floor(t - lw * ir + eL), Math.floor(lw * ir));
    a0i[z].tU.lineTo(Math.floor(t - ir + lw * ir), Math.floor(ir - lw * ir + eL));
    a0i[z].tU.stroke();
    a0i[z].tU.beginPath();
    a0i[z].tU.moveTo(Math.floor(t - ir + lw * ir), Math.floor(lw * ir));
    a0i[z].tU.lineTo(Math.floor(t - lw * ir + eL), Math.floor(ir - lw * ir + eL));
    a0i[z].tU.stroke();
  }
  function a24(z, t, a1z) {
    a0i[z].tU.strokeStyle = a1z ? p.ma : p.mj;
    a0i[z].tU.fillRect(ir, 0, 1, ir);
    var eL = 0;
    var lw = 0.3;
    var a28 = t - ir;
    a0i[z].tU.beginPath();
    a0i[z].tU.moveTo(Math.floor(lw * ir + a28), Math.floor(ir / 2));
    a0i[z].tU.lineTo(Math.floor(ir - lw * ir + eL + a28), Math.floor(ir / 2));
    a0i[z].tU.stroke();
    a0i[z].tU.beginPath();
    a0i[z].tU.moveTo(Math.floor(ir / 2 + a28), Math.floor(lw * ir));
    a0i[z].tU.lineTo(Math.floor(ir / 2 + a28), Math.floor(ir - lw * ir + eL));
    a0i[z].tU.stroke();
  }
  this.gV = function(kU, eR) {
    if (a1.v9 === 2 || aV.lI[a1.e2] === 0 || a1.gR || !aQ.v2(a1.e2)) {
      return false;
    }
    var z;
    var a29;
    var a2A;
    var a2B;
    var a2C = m.n.uE() ? ir : 0;
    var a2D = m.n.uE() ? Math.floor(0.15 * ir) : 0;
    for (z = a0i.length - 1; z >= 0; z--) {
      a29 = a2E(z);
      a2A = a2F(z);
      a2B = a0i[z].h0.width;
      if (eR >= a2A - a2D && eR <= a2A + ir + a2D) {
        if (kU >= a29 - a2C && kU <= a29 + ir + a2C) {
          if (!a0i[z].a27) {
            a0i[z].a1y = true;
            a0i[z].a27 = true;
            if (a0i[z].id === 0) {
              b0.ge.nX(a0i[z].iT);
            } else {}
          }
          return true;
        } else if (a0i[z].id === 0 && kU >= a29 + a2B - ir - a2C && kU <= a29 + a2B + a2C) {
          b0.ge.gp(aE.gj(), a0i[z].iT);
          return true;
        }
      }
    }
    return false;
  }
  ;
  this.iC = function() {
    if (a1.v9 === 2 || aV.lI[a1.e2] === 0 || a1.gR || !aQ.v2(a1.e2)) {
      return;
    }
    a2G();
  }
  ;
  function a2G() {
    var eI = aS.fN(a1.e2);
    if (!a2H(eI)) {
      a2I(eI);
      return;
    }
    a2J(eI);
    a2I(eI);
  }
  function a2H(eI) {
    if (a0i.length !== eI) {
      return true;
    }
    for (var z = eI - 1; z >= 0; z--) {
      if (a0i[z].id !== aS.fO(a1.e2, z) || a0i[z].iT !== aS.fT(a1.e2, z)) {
        return true;
      }
    }
    return false;
  }
  function a2I(eI) {
    var z, iU;
    for (z = eI - 1; z >= 0; z--) {
      iU = aS.fU(a1.e2, z);
      if (a0i[z].iU !== iU) {
        a0i[z].iU = iU;
        a0i[z].a26 = iU > a0i[z].a26 ? iU : a0i[z].a26;
        a0i[z].a1y = true;
      }
    }
  }
  function a2J(eI) {
    var z, id, iT, ec, iU, a2K;
    var a0y = [];
    loop: for (z = 0; z < eI; z++) {
      id = aS.fO(a1.e2, z);
      iT = aS.fT(a1.e2, z);
      for (ec = 0; ec < a0i.length; ec++) {
        if (a0i[ec].id === id && a0i[ec].iT === iT) {
          a0y.push(a0i.splice(ec, 1)[0]);
          continue loop;
        }
      }
      iU = aS.fU(a1.e2, z);
      a2K = {
        iT: iT,
        iU: iU,
        a26: iU,
        id: id,
        a1y: true,
        a27: false,
        h0: null,
        tU: null
      };
      a1w(a2K);
      a0y.push(a2K);
    }
    a0i = a0y;
  }
  this.a2L = function(fo) {
    var z;
    var eI = Math.min(a0i.length, aS.fN(a1.e2));
    for (z = 0; z < eI; z++) {
      if (a0i[z].iT === fo) {
        a0i = [];
        return;
      }
    }
  }
  ;
  function a1w(a2K) {
    a2K.h0 = document.createElement("canvas");
    bI.sJ.font = a0U;
    var t = a1u;
    if (a2K.iT < a1.eF && a2K.id === 0) {
      t += Math.floor(bI.sJ.measureText(aV.a1G[a2K.iT] + "000").width);
    }
    t += ir;
    if (a2K.id === 0) {
      t += ir;
    }
    a2K.h0.width = t;
    a2K.h0.height = ir;
    a2K.tU = a2K.h0.getContext("2d", {
      alpha: true
    });
    a2K.tU.font = a0U;
    b2.ow.textBaseline(a2K.tU, 1);
    b2.ow.textAlign(a2K.tU, 1);
  }
  function a2E(z) {
    return aH.a2M() ? an.t - a0i[z].h0.width - bR.gap : aH.eP;
  }
  function a2F(z) {
    return Math.floor(2 * bR.gap + (aH.a2M() ? aJ.ir + bR.gap : 0) + aH.ir + z * (1.3 * ir));
  }
  this.qn = function() {
    if (aV.lI[a1.e2] === 0 || !aQ.v2(a1.e2) || a1.gR) {
      return;
    }
    for (var z = a0i.length - 1; z >= 0; z--) {
      qo.drawImage(a0i[z].h0, a2E(z), a2F(z));
    }
  }
  ;
}
function by() {
  var a0i;
  var jV;
  var a2N;
  var a2O;
  var ir;
  var a0U;
  var fontSize;
  var a2P;
  var a2Q;
  var a2R;
  var a2S;
  var h0, tU;
  var lV;
  var a2T;
  this.dH = function() {
    lV = 0;
    jV = 4;
    a2N = a2O = 0;
    a0i = [];
    a0U = new Array(2);
    fontSize = new Array(2);
    a2P = new Array(2);
    a2P[0] = 0.3;
    a2P[1] = 0.7;
    a2Q = new Array(4);
    h0 = document.createElement("canvas");
    a2T = bU.ds + 2000;
    this.resize();
  }
  ;
  function qv(z) {
    return (z === 0 ? L(77) : z === 1 ? L(78) : z === 2 ? L(79) : L(80));
  }
  this.resize = function() {
    var z, t;
    ir = Math.floor((m.n.uE() ? 0.0725 : 0.058) * an.oy);
    fontSize[0] = Math.floor(a2P[0] * 0.85 * ir);
    fontSize[1] = Math.floor(a2P[1] * 0.85 * ir);
    a0U[0] = b2.ow.q5(1, fontSize[0]);
    a0U[1] = b2.ow.q5(1, fontSize[1]);
    for (z = a2Q.length - 1; z >= 0; z--) {
      a2Q[z] = this.measureText(qv(z) + "000", a0U[0]);
    }
    a2R = Math.floor(1 + 0.05 * ir);
    a2S = Math.floor(0.2 * ir);
    if (a0i.length > 0) {
      for (z = a0i.length - 1; z >= 0; z--) {
        t = this.measureText(a0i[z].od + "00", a0U[1]);
        a0i[z].width = t < a2Q[z] ? a2Q[z] : t;
      }
      a2U();
    }
  }
  ;
  this.iC = function() {
    if (jV === 0) {
      return;
    }
    a2V();
  }
  ;
  function a2V() {
    if (jV === 4) {
      if (bU.ds > a2T) {
        jV = 0;
        if (a1.v9 === 1) {
          aD.vX(bI.ji.sh[bI.fz].name, 3, 1, 9);
        }
      }
    } else {
      a2W();
    }
  }
  this.measureText = function(od, a0U) {
    qo.font = a0U;
    return Math.floor(qo.measureText(od).width);
  }
  ;
  this.iQ = function(a2X, z) {
    this.vX(aV.a1G[a2X], z, 1, z === 0 ? 3 : 7);
  }
  ;
  this.vX = function(od, a2Y, a2Z, la) {
    var t = this.measureText(od + "00", a0U[1]);
    t = t < a2Q[a2Y] ? a2Q[a2Y] : t;
    a0i.push({
      od: od,
      width: t,
      a2Y: a2Y,
      a2Z: a2Z,
      la: la
    });
    if (jV === 0) {
      a2N = 0;
      jV = 1;
      lV = bU.ds;
    }
  }
  ;
  function a2W() {
    if (jV === 1) {
      if (a2N === 0) {
        a2U();
        a2N = 0.0001;
      }
      a2N += (bU.ds - lV) * 0.002;
      if (a2N >= 1) {
        a2O = 0;
        jV = 2;
        a2N = 1;
      }
      bU.dO = true;
    } else if (jV === 2) {
      a2O += (bU.ds - lV) / 1000;
      if (a2O > a0i[0].la || (a2O > 1 && a0i.length > 1)) {
        jV = 3;
      }
    } else if (jV === 3) {
      a2N -= (bU.ds - lV) * 0.002;
      if (a2N <= 0) {
        a2N = 0;
        a0i.shift();
        jV = a0i.length > 0 ? 1 : 0;
      }
      bU.dO = true;
    }
    lV = bU.ds;
  }
  this.qn = function() {
    if (jV === 0 || a2N === 0) {
      return;
    }
    if (a2N < 1) {
      qo.globalAlpha = a2N;
      a2a();
      qo.globalAlpha = 1;
      return;
    }
    a2a();
  }
  ;
  function a2a() {
    qo.drawImage(h0, bR.gap + (a1.iN ? bR.gap + bW.a2b() : 0), a2c + 2 * bR.gap);
  }
  function a2U() {
    h0.width = a0i[0].width + a2R;
    h0.height = ir + a2R;
    tU = h0.getContext("2d", {
      alpha: true
    });
    tU.clearRect(0, 0, a0i[0].width + a2R, ir + a2R);
    tU.translate(Math.floor(a2R / 2), Math.floor(a2R / 2));
    tU.lineWidth = a2R;
    tU.fillStyle = a0i[0].a2Z === 1 ? p.mQ : p.mI;
    a2d();
    tU.fill();
    tU.strokeStyle = a0i[0].a2Z === 1 ? p.mC : p.mL;
    a2d();
    tU.stroke();
    b2.ow.textAlign(tU, 1);
    b2.ow.textBaseline(tU, 1);
    tU.fillStyle = a0i[0].a2Z === 1 ? p.mC : p.mL;
    tU.font = a0U[0];
    tU.fillText(qv(a0i[0].a2Y), Math.floor(a0i[0].width / 2), Math.floor(0.72 * a2P[0] * ir));
    tU.font = a0U[1];
    tU.fillText(a0i[0].od, Math.floor(a0i[0].width / 2), Math.floor((a2P[0] + 0.48 * a2P[1]) * ir));
  }
  function a2d() {
    tU.beginPath();
    tU.moveTo(a2S, 0);
    tU.lineTo(a0i[0].width - a2S, 0);
    tU.lineTo(a0i[0].width, a2S);
    tU.lineTo(a0i[0].width, ir - a2S);
    tU.lineTo(a0i[0].width - a2S, ir);
    tU.lineTo(a2S, ir);
    tU.lineTo(0, ir - a2S);
    tU.lineTo(0, a2S);
    tU.closePath();
  }
}
function ca() {
  var ir;
  var h0;
  var tU;
  var a2e;
  var a2f;
  var a2g;
  var a2h;
  var a1y;
  var a2i;
  var a2j;
  var a2k;
  var a1V = false;
  this.to = false;
  this.t = 0;
  var a2l;
  var y6 = new Array(2);
  this.dI = function() {
    for (var z = 0; z < 2; z++) {
      y6[z] = b2.h0.u2(aP.get(3), 8 - z, p.nE);
      y6[z] = b2.h0.y8(y6[z]);
    }
  }
  ;
  this.dH = function() {
    a2k = -140;
    a2j = 0;
    a2l = -1;
    this.to = false;
    a1V = false;
    a1y = false;
    a2i = 0;
    a2e = 0;
    a2f = [0, 0];
    a2g = [1, 1];
    a2h = [];
    this.resize();
  }
  ;
  this.resize = function() {
    ir = aE.ir;
    this.t = 4 * ir;
    h0 = document.createElement("canvas");
    h0.width = this.t;
    h0.height = ir;
    tU = h0.getContext("2d", {
      alpha: true
    });
    l2();
  }
  ;
  this.l1 = function() {
    if (!a1y) {
      return;
    }
    l2();
  }
  ;
  function l2() {
    var t = al.t;
    a1y = false;
    tT(tU, t, ir);
    var k8 = Math.floor(t / 2);
    if (a2e === 1) {
      tU.fillStyle = p.mc;
      tU.fillRect(k8, 0, k8, ir);
    } else if (a2e === -1) {
      tU.fillStyle = p.mp;
      tU.fillRect(0, 0, k8, ir);
    }
    tV(tU, t, ir, 2);
    var q7 = Math.floor(0.25 * ir);
    q7 = q7 < 2 ? 2 : q7;
    tU.fillStyle = p.mR;
    var a1f = Math.floor((ir - 4) * a2f[1] / a2g[1]);
    if (a1f > 0) {
      tU.fillRect(2, ir - 2 - a1f, q7, a1f);
    }
    a1f = Math.floor((ir - 4) * a2f[0] / a2g[0]);
    if (a1f > 0) {
      tU.fillRect(t - 2 - q7, ir - 2 - a1f, q7, a1f);
    }
    var tW = Math.floor(ir / 8);
    tW = tW < 2 ? 2 : tW;
    tX(tU, Math.floor(0.4 * ir), 0, ir, tW, 0.5, false);
    tX(tU, Math.floor(t - 1.4 * ir), 0, ir, tW, 0.5, true);
    var dy = (1.1 * ir) / y6[0].width;
    tU.imageSmoothingEnabled = true;
    tU.setTransform(dy, 0, 0, dy, (t - dy * y6[0].width) / 2, -0.05 * ir);
    tU.drawImage(y6[+a1V], 0, 0);
    tU.setTransform(1, 0, 0, 1, 0, 0);
  }
  this.gV = function(eP, eR) {
    if (!this.to) {
      return false;
    }
    if (eP < an.t - this.t - bR.gap) {
      return false;
    }
    var ll = tQ();
    if (eR < ll || eR > ll + ir) {
      return false;
    }
    if (a1.gR) {
      return true;
    }
    b0.ge.nd((eP > (an.t - bR.gap - this.t / 2)) ? 1 : 0);
    return true;
  }
  ;
  this.iC = function() {
    if (a2j > 0) {
      a2j--;
      if (a2j === 0) {
        a2m();
      }
      return;
    }
    if (this.to) {
      a2n();
    } else {
      if (a2o()) {
        a1V = aW.a2p();
        a2q();
        a2l = -1;
        aA.zN(257);
        aA.a1U(a1V);
        this.to = true;
        a1y = true;
        a2i = 360;
        a2r();
      }
    }
  }
  ;
  function a2q() {
    aA.vY(250, L(81, [aV.a1G[a2l]]), 673, a2l, p.mL, p.mI, -1, true);
  }
  function a2r() {
    var dt = 0;
    for (var z = aa.jO - 1; z >= 0; z--) {
      if (aQ.v2(aa.jQ[z])) {
        dt += aV.g6[aa.jQ[z]];
      }
    }
    if (a1V) {
      a2g[0] = Math.max(bB.ek(3 * dt, 4), 1);
    } else {
      if (a1.iN) {
        if (a1.jl === 9 && bV.vU[bW.kd()] === 8) {
          a2g[0] = Math.max(dt, 1);
        } else {
          var el = bB.ek(100 * bW.vk(), a1.j7);
          el = bB.oV(200 - 2 * el, 50, 100);
          el = bB.ek(el * dt, 100);
          a2g[0] = Math.max(el, 1);
        }
      } else {
        a2g[0] = Math.max(bB.ek(3 * dt, 5), 1);
      }
    }
    a2g[1] = Math.max(dt - a2g[0], 1);
  }
  function a2o() {
    if (a2l >= 0) {
      return true;
    }
    return false;
  }
  function a2n() {
    a2i--;
    if (a2i === 180 && 3 * a2f[0] < a2g[0]) {
      a2m();
      return;
    }
    if (a2f[0] >= a2g[0]) {
      if (a1V) {
        bH.uo.v4();
      } else {
        bH.uo.v8();
      }
      return;
    }
    if (a2f[1] >= a2g[1]) {
      a2j = 4;
      return;
    }
    if (a2i <= 0) {
      a2m();
    }
  }
  function a2m() {
    a2k = bU.jK();
    a1y = true;
    a2e = 0;
    a2i = 0;
    a2h = [];
    al.to = false;
    aA.vG(247, 0);
    a2f[0] = a2f[1] = 0;
    aA.zN(673);
  }
  this.vA = function() {
    if (this.to && a2f[0] < a2g[0]) {
      a2m();
    }
  }
  ;
  this.oX = function(player, a2s) {
    var z, dt;
    if (!this.to) {
      return;
    }
    for (z = a2h.length - 1; z >= 0; z--) {
      if (a2h[z] === player) {
        return;
      }
    }
    var a2t;
    if (a2s) {
      a2t = L(82, [aV.a1G[player]]);
    } else {
      a2t = L(83, [aV.a1G[player]]);
    }
    aA.vY(450, a2t, 257, player, a2s ? p.ma : p.mm, p.mI, -1, true);
    a2h.push(player);
    a1y = true;
    dt = a1.jn ? a2g[0] : aV.g6[player];
    if (a2s) {
      a2f[0] += dt;
    } else {
      a2f[1] += dt;
    }
    if (player === a1.e2) {
      a2e = a2s ? 1 : -1;
    }
  }
  ;
  function tQ() {
    if (aE.a19(aA.a15())) {
      return aE.eR - ir - bR.gap;
    }
    if (b3.a19(aA.a18())) {
      return b3.tQ() - ir - bR.gap;
    }
    return an.ir - ir - bZ.zs() * bR.gap;
  }
  this.qn = function() {
    if (!this.to) {
      return;
    }
    var eR = tQ();
    qo.drawImage(h0, an.t - this.t - bR.gap, eR);
  }
  ;
  this.oY = function(player) {
    if (!a1.jn) {
      if (bU.jK() < a2k + 140) {
        return false;
      }
      if (bU.jK() < 535) {
        return false;
      }
    }
    if (a2i !== 0) {
      return false;
    }
    if (!b2.fd.gT(1)) {
      return false;
    }
    if (!b2.fd.gU(player)) {
      return false;
    }
    if (j8[player] >= 10 && !b2.fd.ys(player, 9)) {
      return false;
    }
    return true;
  }
  ;
  this.ni = function(player) {
    a2l = player;
  }
  ;
}
function bz() {
  var t, eP;
  var a2u;
  var h0;
  var tU;
  var to;
  var hf;
  var zI;
  var a0U;
  var a1y;
  var a2v = 11 / 12;
  this.eR = 0;
  this.gW = false;
  this.dH = function() {
    to = !a1.gd && !a1.gR;
    a1y = false;
    hf = 0.5;
    zI = 0;
    this.gW = false;
    this.resize();
  }
  ;
  this.resize = function() {
    if (m.n.uE() && an.t < 0.8 * an.ir) {
      this.ir = Math.floor(0.066 * an.oy);
      t = an.t - 4 * bR.gap - this.ir;
    } else {
      t = Math.floor((m.n.uE() ? 0.65 : 0.389) * an.oy);
      t += (12 - t % 12);
      this.ir = Math.floor(t / 12);
    }
    a2u = Math.floor(3 * this.ir / 2);
    a0U = b2.ow.q5(1, Math.floor(0.5 * this.ir));
    h0 = document.createElement("canvas");
    h0.width = t;
    h0.height = this.ir;
    tU = h0.getContext("2d", {
      alpha: true
    });
    tU.font = a0U;
    b2.ow.textBaseline(tU, 1);
    b2.ow.textAlign(tU, 1);
    this.a2w();
    a2x();
  }
  ;
  this.a2w = function() {
    if (m.n.uE() && an.t < 0.8 * an.ir) {
      eP = this.ir + 3 * bR.gap;
    } else {
      eP = Math.floor((an.t - t) / 2);
    }
    this.eR = an.ir - this.ir - bZ.zs() * bR.gap;
  }
  ;
  this.l1 = function() {
    if (a1y) {
      a1y = false;
      a2x();
    }
  }
  ;
  function a2y() {
    var el;
    var a2z = 130;
    if (hf < 1 / 3) {
      el = Math.floor(3 * hf * a2z);
      return "rgba(" + el + "," + a2z + ",0,0.85)";
    } else if (hf < 2 / 3) {
      el = Math.floor(3 * (hf - 1 / 3) * a2z);
      return "rgba(" + a2z + "," + (a2z - el) + ",0,0.85)";
    } else {
      el = Math.floor(3 * (hf - 2 / 3) * a2z);
      return "rgba(" + a2z + ",0," + el + ",0.85)";
    }
  }
  function a2x() {
    var a25 = Math.floor(hf * (t - 2 * a2u));
    var a30 = 1 + Math.floor(0.0625 * aE.ir);
    var a31 = 1 + Math.floor(0.3 * aE.ir);
    var a32 = Math.floor(0.55 * aE.ir);
    tU.clearRect(0, 0, t, aE.ir);
    tU.fillStyle = p.mH;
    tU.fillRect(0, 0, a2u, aE.ir);
    tU.fillRect(a2u + a25, 0, t - a2u - a25, aE.ir);
    tU.fillStyle = a2y();
    tU.fillRect(a2u, 0, a25, aE.ir);
    tU.fillStyle = p.mL;
    tU.fillRect(0, 0, t, 1);
    tU.fillRect(0, aE.ir - 1, t, 1);
    tU.fillRect(0, 0, 1, aE.ir);
    tU.fillRect(a2u, 0, 1, aE.ir);
    tU.fillRect(a2u + a25, 0, 1, aE.ir);
    tU.fillRect(t - a2u, 0, 1, aE.ir);
    tU.fillRect(t - 1, 0, 1, aE.ir);
    tU.fillRect(Math.floor(0.25 * aE.ir) + a31, Math.floor((aE.ir - a30) / 2), aE.ir - 2 * a31, a30);
    tU.fillRect(Math.floor(t - 1.25 * aE.ir) + a31, Math.floor((aE.ir - a30) / 2), aE.ir - 2 * a31 - a31 % 2, a30);
    tU.fillRect(Math.floor(t - 1.25 * aE.ir) + Math.floor((aE.ir - a30) / 2), a31, a30, aE.ir - 2 * a31 - a31 % 2);
    zI = b2.fd.he(a1.e2, aE.gj());
    tU.fillText(b2.w0.z6(zI) + " (" + b2.w0.zB(100 * hf, +(hf < 0.1)) + ")", Math.floor(0.5 * t), a32);
  }
  this.to = function() {
    return !(!to || a9.gS && eP < Math.floor(bR.gap + 5.5 * this.ir));
  }
  ;
  this.a19 = function(a33) {
    if (this.to()) {
      return eP + t > an.t - a33 - bR.gap;
    }
    return false;
  }
  ;
  this.zL = function() {
    to = !a1.gR;
  }
  ;
  this.a2m = function() {
    to = false;
  }
  ;
  this.gj = function() {
    return bB.oV(Math.floor(hf * 1024 + 0.5) - 1, 0, 1023);
  }
  ;
  this.xL = function(kU, kV) {
    return this.to() && kU > eP && kU < eP + t && kV > this.eR;
  }
  ;
  function a34(kU, kV) {
    return kU > eP && kU < eP + a2u && kV > aE.eR;
  }
  function a35(kU, kV) {
    return kU > eP + t - a2u && kU < eP + t && kV > aE.eR;
  }
  this.gV = function(kU, kV) {
    if (!this.to()) {
      return false;
    }
    if (!aE.xL(kU, kV)) {
      return false;
    }
    aF.lp = false;
    if (a36(this, kU, kV)) {
      bU.dO = true;
    }
    return true;
  }
  ;
  function a36(vh, kU, kV) {
    if (a34(kU, kV)) {
      return a37(a2v);
    }
    if (a35(kU, kV)) {
      return a37(1 / a2v);
    }
    vh.gW = true;
    return a38(kU);
  }
  this.xO = function(lw) {
    if (a1.v9 === 0 || !this.to()) {
      return;
    }
    if (a37(lw)) {
      bU.dO = true;
    }
  }
  ;
  function a37(xo) {
    if (xo > 1 && hf === 1) {
      return false;
    }
    if (xo > 1 && xo * hf - hf < 1 / 1024) {
      xo = (hf + 1 / 1024) / hf;
    } else if (xo < 1 && hf - xo * hf < 1 / 1024) {
      xo = (hf - 1 / 1024) / hf;
    }
    hf = bB.oV(hf * xo, 1 / 1024, 1);
    a2x();
    return true;
  }
  function a38(kU) {
    var dt = hf;
    hf = bB.oV((kU - eP - a2u) / (t - 2 * a2u), 1 / 1024, 1);
    if (dt !== hf) {
      a2x();
      return true;
    }
    return false;
  }
  this.wt = function(deltaY) {
    var lw;
    if (deltaY === 0 || !this.to()) {
      return false;
    }
    if (deltaY > 0) {
      lw = 400 / (400 + deltaY);
      lw = lw < a2v ? a2v : lw;
    } else {
      lw = (400 - deltaY) / 400;
      lw = lw > 1 / a2v ? 1 / a2v : lw;
    }
    return a37(lw);
  }
  ;
  this.wq = function(kU) {
    if (this.gW) {
      return a38(kU);
    }
    return false;
  }
  ;
  this.xH = function() {
    this.gW = false;
  }
  ;
  this.iC = function() {
    if (!this.to()) {
      return;
    }
    if (zI !== b2.fd.he(a1.e2, this.gj())) {
      a1y = true;
    }
  }
  ;
  this.qn = function() {
    if (!this.to()) {
      return;
    }
    qo.drawImage(h0, eP, this.eR);
  }
  ;
}
function cl() {
  var h0;
  var tU;
  var a39;
  var font;
  var a3A = 0;
  var a3B = false;
  var a3C = [10, 5, 3, 2, 1.5, 1, 0.75, 0.5, 0.25];
  var a3D = 5;
  this.zq = false;
  this.dH = function() {
    if (!a1.gR) {
      return;
    }
    a3D = 5;
    this.zq = false;
    a3B = false;
    a39 = new pR([0.3, 0.3 / 6],[0.5, 1]);
    this.resize();
  }
  ;
  this.a3E = function() {
    return a3C[a3D];
  }
  ;
  this.tQ = function() {
    return a39.eR;
  }
  ;
  this.a19 = function(a33) {
    if (a1.gR) {
      return a39.eP + a39.t > an.t - a33 - bR.gap;
    }
    return false;
  }
  ;
  this.resize = function() {
    if (!a1.gR) {
      return;
    }
    a39.resize();
    a39.eR -= (bZ.zs() - 1) * bR.gap;
    font = b2.ow.q5(0, 0.3 * a39.ir);
    h0 = document.createElement("canvas");
    h0.width = Math.floor(a39.t);
    h0.height = Math.floor(a39.ir);
    tU = h0.getContext("2d", {
      alpha: true
    });
    tU.font = font;
    b2.ow.textAlign(tU, 1);
    b2.ow.textBaseline(tU, 1);
    l2(this);
  }
  ;
  this.xS = function(a3F) {
    if (a1.v9 === 0 || i.to()) {
      return;
    }
    if (a3F === a1.ln) {
      return;
    }
    a1.ln = a3F;
    bW.resize();
    bU.dO = true;
    if (a1.gR) {
      a3A = bU.ds + 2000;
      l2(this);
    }
  }
  ;
  this.gV = function(eP, eR) {
    if (!a1.gR) {
      return false;
    }
    if (eP < a39.eP || eR < a39.eR || eP > a39.eP + a39.t) {
      return a3B && a3G(this, eP, eR);
    }
    eP -= a39.eP;
    if (eP < 0.3 * a39.t) {
      a3B = false;
      this.xS(!a1.ln);
      return true;
    } else if (eP < 0.7 * a39.t) {
      a3B = !a3B;
      bU.dO = true;
      return true;
    }
    this.xU(false);
    return true;
  }
  ;
  this.xU = function(a3H) {
    if (a1.v9 === 2) {
      this.xS(false);
      i.j(3);
      return;
    }
    a3B = false;
    this.zq = !this.zq;
    if (this.zq) {
      if (a9.gS) {
        a9.xT();
      }
      m.n.setState(1);
    } else {
      !a3H && a9.a0a();
    }
    bU.dO = true;
    l2(this);
  }
  ;
  this.xV = function() {
    this.zq = false;
    a9.a0a();
    bU.dO = true;
    l2(this);
  }
  ;
  this.x9 = function(eP, eR) {
    if (!a1.ln) {
      return false;
    }
    if (a9.gV(eP, eR)) {
      return true;
    }
    if (!a1.gR) {
      aF.gV(eP, eR);
      return true;
    }
    if (bU.ds > a3A || !this.gV(eP, eR)) {
      aF.gV(eP, eR);
    }
    bU.dO = true;
    a3A = bU.ds + 2000;
    return true;
  }
  ;
  this.iC = function() {
    if (a1.gR && a1.ln && bU.ds > a3A - 1000 && bU.ds < a3A) {
      bU.dO = true;
    }
  }
  ;
  this.vH = function() {
    if (!a1.gR) {
      return;
    }
    this.zq = false;
    bU.dO = true;
    l2(this);
  }
  ;
  this.qn = function() {
    if (!a1.gR) {
      return;
    }
    if (a1.ln) {
      if (bU.ds > a3A) {
        return;
      }
      if (bU.ds > a3A - 1000) {
        qo.globalAlpha = a3I(0, (1000 - (bU.ds - (a3A - 1000))) / 1000, 1);
        a3J();
        qo.globalAlpha = 1;
        return;
      }
    }
    a3J();
  }
  ;
  function a3J() {
    if (a3B) {
      a3K();
    }
    qo.drawImage(h0, Math.floor(a39.eP), Math.floor(a39.eR));
  }
  function l2(vh) {
    a3L();
    a3M();
    a3N();
    !vh.zq ? a3O() : a3P();
    a3Q();
  }
  function a3L() {
    tU.clearRect(0, 0, Math.floor(a39.t), Math.floor(a39.ir));
    tU.fillStyle = p.mH;
    tU.fillRect(0, 0, Math.floor(a39.t), Math.floor(a39.ir));
    if (a1.ln) {
      tU.fillStyle = p.mg;
      tU.fillRect(0, 0, Math.floor(0.3 * a39.t), Math.floor(a39.ir));
    }
  }
  function a3M() {
    tU.fillStyle = p.mL;
    tU.fillText("Hide UI", 0.15 * a39.t, 0.5 * a39.ir);
    tU.fillRect(Math.floor(0.3 * a39.t - 0.5), 0, 2, Math.floor(a39.ir));
  }
  function a3N() {
    var eP = 0.5 * a39.t;
    tU.fillText("Replay Speed", eP, 0.31 * a39.ir);
    tU.fillText(a3R(a3D), eP, 0.69 * a39.ir);
    tU.fillRect(Math.floor(0.7 * a39.t - 0.5), 0, 2, Math.floor(a39.ir));
  }
  function a3O() {
    var t = Math.floor(0.46 * a39.ir);
    var ir = Math.floor(0.23 * a39.ir);
    var eP = Math.floor(0.85 * a39.t - 0.5 * t + t / 12);
    var eR = Math.floor(0.5 * a39.ir - ir);
    tU.beginPath();
    tU.moveTo(eP, eR);
    tU.lineTo(eP + t, eR + ir);
    tU.lineTo(eP, eR + (ir << 1));
    tU.fill();
  }
  function a3P() {
    var q7 = Math.floor(0.02 * a39.t);
    var q8 = Math.floor(0.025 * a39.t);
    var lk = Math.floor(0.85 * a39.t - q7 - 0.5 * q8);
    var ll = Math.floor(0.25 * a39.ir);
    var a32 = Math.floor(a39.ir) - 2 * ll;
    tU.fillRect(lk, ll, q7, a32);
    tU.fillRect(lk + q7 + q8, ll, q7, a32);
  }
  function a3Q() {
    tU.fillRect(0, 0, Math.floor(a39.t), 2);
    tU.fillRect(0, 0, 2, Math.floor(a39.ir));
    tU.fillRect(0, Math.floor(a39.ir) - 2, Math.floor(a39.t), 2);
    tU.fillRect(Math.floor(a39.t - 2), 0, 2, Math.floor(a39.ir));
  }
  function a3K() {
    var z;
    var eI = a3C.length;
    var a32 = Math.floor(0.5 * a39.ir);
    var ir = eI * a32;
    var eP = Math.floor(Math.floor(a39.eP) + 0.3 * a39.t - 0.5);
    var eR = Math.floor(Math.floor(a39.eR) - ir);
    var t = Math.floor(0.4 * a39.t + 2.5);
    qo.fillStyle = p.mH;
    qo.fillRect(eP, eR, t, ir);
    qo.fillStyle = p.mg;
    qo.fillRect(eP, eR + a3D * a32, t, a32);
    qo.fillStyle = p.mL;
    qo.fillRect(eP, eR, 2, ir);
    qo.fillRect(eP, eR, t, 2);
    qo.fillRect(eP + t - 2, eR, 2, ir);
    for (z = 1; z < eI; z++) {
      qo.fillRect(eP, eR + z * a32, t, 2);
    }
    qo.fillStyle = p.mL;
    b2.ow.textAlign(qo, 1);
    b2.ow.textBaseline(qo, 1);
    qo.font = b2.ow.q5(0, 0.6 * a32);
    eP = eP + 0.5 * t;
    for (z = 0; z < eI; z++) {
      qo.fillText(a3R(z), eP, eR + (z + 0.6) * a32);
    }
  }
  function a3G(vh, eP, eR) {
    var eI = a3C.length;
    var a32 = Math.floor(0.5 * a39.ir);
    var ir = eI * a32;
    var lk = Math.floor(Math.floor(a39.eP) + 0.3 * a39.t - 0.5);
    var ll = Math.floor(Math.floor(a39.eR) - ir);
    var t = Math.floor(0.4 * a39.t + 2.5);
    a3B = false;
    bU.dO = true;
    if (eP < lk || eP > lk + t || eR < ll) {
      return true;
    }
    a3D = a3I(0, Math.floor((eR - ll) / a32), eI - 1);
    l2(vh);
    return true;
  }
  function a3R(z) {
    return z === 5 ? "Normal" : ("" + a3C[z]);
  }
}
var hh;
var hg;
var hi;
function c0() {
  var a3S;
  var a3T;
  var t;
  var eP, eR;
  var a3U;
  var a3V;
  this.dH = function() {
    a3S = new Array(2);
    a3T = new Array(2);
    this.lp = false;
    hg = 0;
    hi = 0;
    a3U = 0;
    a3V = 0;
    hh = 1;
    this.resize();
  }
  ;
  this.resize = function() {
    t = Math.floor((m.n.uE() ? 0.072 : 0.0502) * an.oy);
    t = t < 8 ? 8 : t;
    for (var z = 1; z >= 0; z--) {
      a3S[z] = document.createElement("canvas");
      a3S[z].width = t;
      a3S[z].height = t;
      a3T[z] = a3S[z].getContext("2d", {
        alpha: true
      });
    }
    this.a2w();
    a3W();
  }
  ;
  function a3X(a3Y, a1A) {
    return (Math.pow((a3Y - (eP + t / 2)), 2) + Math.pow((a1A - (eR + t / 2)), 2) < t * t / 4 || Math.pow((a3Y - (eP + t / 2)), 2) + Math.pow((a1A - (eR + 2 * t)), 2) < t * t / 4);
  }
  this.tP = function() {
    return -hg / hh;
  }
  ;
  this.tQ = function() {
    return -hi / hh;
  }
  ;
  this.m0 = function(a3Z, hO) {
    hg = hh * a3Z - hO;
  }
  ;
  this.m1 = function(a3a, hP) {
    hi = hh * a3a - hP;
  }
  ;
  this.gV = function(a3Y, a1A) {
    if (!a1.ln && a3X(a3Y, a1A) && !bY.dZ.data[8].value) {
      if (a1A < eR + 1.25 * t) {
        return this.wt(Math.floor(an.t / 2), Math.floor(an.ir / 2), -200);
      } else {
        return this.wt(Math.floor(an.t / 2), Math.floor(an.ir / 2), 200);
      }
    } else {
      if (a5.m3()) {
        this.lp = true;
        a3U = a3Y;
        a3V = a1A;
      }
    }
    return false;
  }
  ;
  this.wq = function(a3Y, a1A) {
    if (!a5.m3()) {
      return true;
    }
    var a3b = hg;
    var a3c = hi;
    var hR = a3U - a3Y;
    var hU = a3V - a1A;
    hg += hR;
    hi += hU;
    aU.wq(hR, hU);
    this.a3d();
    a3U = a3Y;
    a3V = a1A;
    return (a3b !== hg || a3c !== hi);
  }
  ;
  this.wt = function(kU, kV, deltaY) {
    var lw;
    if (!a5.m3()) {
      return true;
    }
    if (deltaY > 0) {
      lw = 500 / (500 + deltaY);
      lw = lw < 0.5 ? 0.5 : lw;
    } else if (deltaY < 0) {
      lw = (500 - deltaY) / 500;
      lw = lw > 2 ? 2 : lw;
    } else {
      return false;
    }
    this.a3e(kU, kV, lw);
    bU.dO = true;
    return true;
  }
  ;
  this.a3e = function(eP, eR, dy) {
    dy = a3f(dy);
    aU.zoom(dy, eP, eR);
    a3g(dy, eP, eR);
  }
  ;
  this.a3d = function() {
    var a3h = an.t / 16;
    var h8 = 0;
    var a3i = an.ir / 16;
    var h9 = 0;
    if (hg < -an.t + a3h) {
      h8 = -an.t + a3h - hg;
    }
    if (hg > hh * bI.eT - a3h) {
      h8 = hh * bI.eT - a3h - hg;
    }
    if (hi < -an.ir + a3i) {
      h9 = -an.ir + a3i - hi;
    }
    if (hi > hh * bI.eU - a3i) {
      h9 = hh * bI.eU - a3i - hi;
    }
    hg += h8;
    hi += h9;
    bP.m2();
    aU.a3j(h8, h9);
  }
  ;
  function a3f(xo) {
    xo = xo * hh > 1024 ? 1024 / hh : xo;
    xo = xo * hh < 0.125 ? 0.125 / hh : xo;
    return xo;
  }
  function a3g(xo, kU, kV) {
    hh *= xo;
    hg = (hg + kU) * xo - kU;
    hi = (hi + kV) * xo - kV;
    aF.a3d();
  }
  function a3W() {
    var a3k = Math.floor(1 + t / 20);
    for (var z = 1; z >= 0; z--) {
      a3T[z].clearRect(0, 0, t, t);
      a3T[z].fillStyle = p.mE;
      a3T[z].beginPath();
      a3T[z].arc(t / 2, t / 2, t / 2 - a3k, 0, 2 * Math.PI);
      a3T[z].fill();
      a3T[z].lineWidth = a3k;
      a3T[z].fillStyle = p.mL;
      a3T[z].strokeStyle = p.mL;
      a3T[z].beginPath();
      a3T[z].arc(t / 2, t / 2, t / 2 - a3k, 0, 2 * Math.PI);
      a3T[z].stroke();
      tX(a3T[z], 0, 0, t, a3k, 0.3, z === 0);
    }
  }
  this.a2w = function() {
    eP = an.t - t - bR.gap;
    eR = Math.floor(an.ir / 2 - 1.25 * t);
  }
  ;
  this.qn = function() {
    if (bY.dZ.data[8].value) {
      return;
    }
    qo.drawImage(a3S[0], eP, eR);
    qo.drawImage(a3S[1], eP, Math.floor(eR + 3 * t / 2));
  }
  ;
}
function c1() {
  var ey;
  var sk;
  var a3l;
  var a3m;
  var gap;
  var a3n;
  var a3o;
  var a3p;
  var a3q;
  var a3r;
  var a0U;
  var a3s;
  var gM;
  var a3t;
  var a25;
  var a3u;
  var a3v;
  var a3w;
  this.a3x = false;
  this.dH = function() {
    a3u = -1;
    a3v = -1;
    a3t = 1;
    a3q = -1;
    this.a3y = false;
    gM = 0;
    a3s = new Date();
    sk = 0;
    gap = 0.3;
    a3z();
    ey = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674, 268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462, 216942832, 211862670, 209792418, 220626495, 221020535, 228198633, 226910806, 227687295, 210969547, 197393506, 205629061, 215820135, 213694935, 209455870, 215822584, 215130299, 214034219, 229190414, 230055290, 225313791, 223398523, 231870169, 226224938, 218242706, 235891029, 210498444, 195329116, 187676007, 183432634, 175752106, 170096205, 173369342, 171454357, 185810310, 189616577, 190788861, 179291487, 179513980, 189122353, 188375572, 202060722, 203256609, 197948652, 191950448, 194693217, 196335490, 195911919, 202264283, 199251620, 193699336, 188441210, 183419345, 195919988, 198126823, 199780788, 197440550, 190144884, 179139362, 166469099, 178827877, 183801980, 197952484, 188875861, 185919783, 186237411, 182504952, 183532013, 174109004, 178159701, 161031347, 194622838, 205645645, 200496457, 194773327, 194546481, 207893217, 210920126, 213376144, 173859897, 154326886, 158943729, 166772975, 175066046, 177406405, 179018562, 185986119, 186747583, 200787939, 208959937, 161987576, 185512400, 185788899, 185957487, 194591063, 215634157, 230579314, 237637383, 240518707, 221398239, 225230795, 224891285, 211292916, 216944626, 219436299, 226523918, 232405568, 232166426, 216921782, 244767964, 257278946, 243548100, 237386943, 242802627, 229717622, 168149709, 259971896, 267057767, 257606635, 209857364, 126035568, 129833237, 151312703, 197006695, 73120657, 37551024, 39229432, 29517736, 29382631, 31512045, 42652097, 47363019, 49624906, 46687310, 33767120, 31230439, 34211643, 43094531, 53747053, 55380682, 49779117, 47748833, 21038802, 20406484, 24523793, 26566139, 25284142, 26825553, 23497443, 20291865, 17765022, 21291320, 21106123, 19050128, 18324426, 19044067, 19594721, 19347845, 23365124, 24186529, 19824881, 17952812, 17093838, 17328579, 17607296, 21284737, 22551012, 20471281, 19350848, 19654931, 18725460, 18641926, 23301269, 25178902, 21617041, 21433781, 21078957, 19526047, 18665064, 21394401, 21575049, 19286677, 18018450, 17550775, 17282428, 17055509, 19348704, 20177845, 19766211, 19088037, 18118802, 18269428, 18500614, 19130220, 19351798, 19205188, 19489961, 20233286, 20726811, 23245145, 26158741, 26096642, 24424181, 23690661, 22967492, 21098008, 20325973, 19431907, 17008295, 15583096, 14209752, 14307184, 13541498, 12822679, 13154311, 12161194, 12956543, 11435697, 13428928, 12262514, 12858519, 12405344, 12884309, 14410011, 15556681, 15260178, 14863807, 13861458, 15176144, 14089849, 13063987, 12378716, 13061867, 13118900, 13112653, 13137263, 13062253, 13126875, 14136833, 14711852, 14341250, 11888270, 13137006, 12830841, 12516937, 12783789, 13139393, 12931000, 12857582, 13677329, 13892963, 13171528, 14135236, 14640750, 15677970, 16758399, 19125177, 17723446, 16469484, 17032884, 19792603, 21426397, 22032534, 20271251, 16190176, 16772813, 17675977, 18764026, 18346209, 19576834, 20989792, 21350839, 14696885, 14653075, 14677999, 14958759, 14210260, 15488352, 15623604, 14473144, 12823062, 14869909, 15142264, 15567014, 17896725, 20081347, 17765006, 12763925, 13523610, 13979983, 15080856, 17116394, 18483238, 18084320, 12100282, 12221529, 12441579, 12058220, 12441689, 12821546, 13401583, 13009895, 12271066, 12210094, 12355642, 13737115, 14257807, 14904897, 14072161, 15640387, 15721803, 16397970, 19254839, 21608906, 20527471, 16596206, 15550563, 14385591, 15547262, 13174302, 12462319, 13000669, 12832541, 12186376, 13150940, 14654379, 14299386, 14158528, 15185971, 12444117, 14253445, 15049053, 14123310, 16892853, 15963931, 11858727, 10012703, 9478191, 9193460, 8851082, 9298848, 9638204, 9442496, 8653593, 9093527, 8530977, 8809114, 9609612, 9906912, 9615756, 9477879, 9713075, 9126583, 8949378, 9577595, 10180186, 9858705, 9534213, 9184660, 8889455, 8311313, 9738346, 9772164, 9157791, 8445413, 8467279, 8756002, 9257951, 10213536, 10620530, 10352296, 9350531, 9118709, 9614237, 9692491, 10801215, 10984804, 9542309, 9609538, 9391430, 9515517, 10064494, 11061684, 10408005, 9794768, 9297643, 9275992, 9394076, 9716084, 10045958, 9715229, 9091248, 10010584, 9845528, 9532588, 8986320, 9037708, 9820996, 8953464, 9074064, 8644692, 8025308, 8832112, 10785788, 10539708, 8908744, 8331216, 8858100, 8626840, 7666284, 8503372, 8855308, 6762540, 6414076, 6786692, 6445532, 6262192, 5918176, 5864376, 5464928, 5384996, 5942760, 5261972, 5404612, 6184860, 6312948, 5815660, 5208552, 4734392, 4538784, 4661404, 5145524, 4819368, 4369224, 4458584, 4289956, 3538288, 3517544, 3871876, 3388048, 3344796, 3089228, 2863676, 2268964, 2160500, 2580004, 2244356, 2018408, 1688912, 1945368, 1796332, 1619260, 2060292, 1597656, 1472788, 1306208, 1171408, 1021096, 1109312, 1241276, 1305092, 1142748, 1157700, 991984, 786992, 786396, 1043956, 1029320, 860500, 834824, 841912, 736464, 690328, 878376, 907232, 794932, 646388, 752600, 672836, 636212, 794108, 746856, 642928, 671328, 493568, 458168, 428776, 464736, 371412, 314568, 225472, 252072, 227604, 251048, 269184, 174136, 825576, 536060, 165952, 153252, 180036, 149616, 138472, 157832, 188152, 180108, 134076, 70960, 89236, 111428, 60520, 74620, 73424, 74720, 71584, 94432, 62572, 66420, 32532, 34452, 41048, 51372, 61916, 43236, 55172, 26776, 47000, 57424, 93100, 64980, 37288, 44296, 34588, 40700, 29200, 24604, 18184, 42660, 31404, 38096, 18556, 17388, 19568, 17604, 22328, 40300, 39392, 33440, 17960, 7984, 11612, 67700, 14108, 22444, 19756, 9436, 16864, 14400, 17216, 14436, 8612, 15952, 29764, 18748, 16348, 23976, 22080, 20268, 20984, 9480, 30736, 15996, 9484, 9392, 9716, 21540, 57428, 24788, 18728, 8528, 5972, 20560, 18268, 28088, 15364, 15300, 29348, 30992, 20564, 34420, 16716, 14424, 12360, 15124, 51172, 13176];
    this.resize();
  }
  ;
  this.resize = function() {
    a3l = Math.floor(0.15 * an.ir);
    a3r = Math.floor((m.n.uE() ? 0.018 : 0.0137) * an.oy);
    a3r = a3r < 2 ? 2 : a3r;
    a0U = b2.ow.q5(1, a3r);
    a40();
  }
  ;
  function a3z() {
    a3w = [];
    a3w.push({
      fj: "Plateau A",
      eI: 0,
      d: 57
    });
    a3w.push({
      fj: "Max A",
      eI: 1,
      d: 1
    });
    a3w.push({
      fj: "Black Friday",
      eI: 15,
      d: 15
    });
    a3w.push({
      fj: "Max B",
      eI: 19,
      d: 19
    });
    a3w.push({
      fj: "Max C",
      eI: 44,
      d: 44
    });
    a3w.push({
      fj: "First Android Version",
      eI: 58,
      d: 58
    });
    a3w.push({
      fj: "Max D",
      eI: 67,
      d: 67
    });
    a3w.push({
      fj: "The iFrame Explosion",
      eI: 98,
      d: 99
    });
    a3w.push({
      fj: "The 155-Day Uptrend",
      eI: 58,
      d: 213
    });
    a3w.push({
      fj: "Max E",
      eI: 213,
      d: 213
    });
    a3w.push({
      fj: "Plateau B",
      eI: 214,
      d: 259
    });
    a3w.push({
      fj: "Turbulent Times",
      eI: 260,
      d: 344
    });
    a3w.push({
      fj: "Max F",
      eI: 262,
      d: 262
    });
    a3w.push({
      fj: "Max G",
      eI: 282,
      d: 282
    });
    a3w.push({
      fj: "Max H",
      eI: 333,
      d: 333
    });
    a3w.push({
      fj: "The 19-Day Downtrend",
      eI: 283,
      d: 301
    });
    a3w.push({
      fj: "Plateau C",
      eI: 345,
      d: 385
    });
    a3w.push({
      fj: "The Alliance Ascent",
      eI: 386,
      d: 395
    });
    a3w.push({
      fj: "Max I",
      eI: 395,
      d: 395
    });
    a3w.push({
      fj: "First iOS Version",
      eI: 411,
      d: 411
    });
    a3w.push({
      fj: "Plateau D",
      eI: 396,
      d: 453
    });
    a3w.push({
      fj: "The TikTok Revolution",
      eI: 454,
      d: 470
    });
    a3w.push({
      fj: "Max J",
      eI: 456,
      d: 456
    });
    a3w.push({
      fj: "Max K",
      eI: 472,
      d: 472
    });
    a3w.push({
      fj: "Max L",
      eI: 478,
      d: 478
    });
    a3w.push({
      fj: "YT Drew",
      eI: 471,
      d: 485
    });
    a3w.push({
      fj: "Plateau E",
      eI: 485,
      d: 600
    });
    a3w.push({
      fj: "Uptrend A",
      eI: 600,
      d: 613
    });
    a3w.push({
      fj: "Max M",
      eI: 613,
      d: 613
    });
    a3w.push({
      fj: "Downtrend A",
      eI: 614,
      d: 635
    });
    a3w.push({
      fj: "Plateau F",
      eI: 636,
      d: 737
    });
    a3w.push({
      fj: "End of Record",
      eI: 738,
      d: 738
    });
  }
  this.a41 = function(a42) {
    var z;
    this.a3x = true;
    for (z = 0; z < a42.length; z++) {
      ey.unshift(a42[z]);
    }
    a40();
    bU.dO = true;
  }
  ;
  function a40() {
    a3m = Math.floor((m.n.uE() ? 0.07 : 0.035) * 0.2 * an.oy);
    a3m = a17(m.n.uE() ? 3 : 1, a3m);
    var a43 = an.t / (ey.length + gap);
    a3m = a43 > a3m ? a43 : a3m;
    a25 = Math.floor((1 - gap) * a3m);
    sk = 0;
    a44();
  }
  this.a45 = function() {
    a44();
  }
  ;
  function a44() {
    sk = sk < -20 ? -20 : sk;
    sk = sk > (ey.length - 15) * a3m ? (ey.length - 15) * a3m : sk;
    a3o = Math.floor(sk / a3m);
    a3p = a3o + Math.floor(an.t / a3m);
    a3p = a3p > ey.length - 1 ? ey.length - 1 : a3p;
    a3o = a3p < a3o ? a3p : a3o;
    a3o = a3o < 0 ? 0 : a3o;
    a46();
  }
  function a46() {
    var k8 = a3p;
    a3n = a3l / ey[k8];
    for (var z = a3p - 1; z >= a3o; z--) {
      if (ey[z] > ey[k8]) {
        k8 = z;
        a3n = a3l / (Math.pow(ey[z], a3t));
      }
    }
  }
  function a47(eP) {
    var dt = Math.floor((sk + an.t - eP - gap * a3m) / a3m);
    dt = dt < -1 ? -1 : dt === -1 ? 0 : dt > ey.length - 1 ? -1 : dt;
    if (dt !== a3q) {
      a3q = dt;
      if (a3u === -1 && a3q === 0 && aG.a3x) {
        a3u = setInterval(a48, 100);
      }
      return true;
    }
    return false;
  }
  this.wq = function(eP, eR) {
    if (eR > an.ir - 0.6 * a3l) {
      if (this.a3y) {
        if (eP !== gM) {
          sk += eP - gM;
          gM = eP;
          a44();
          a47(eP);
          this.a3y = a3q !== -1;
          bU.dO = true;
        }
        return;
      }
      if (a47(eP)) {
        bU.dO = true;
        return;
      }
    } else {
      this.xF();
    }
  }
  ;
  this.xF = function() {
    if (a3q !== -1) {
      this.a3y = false;
      a3q = -1;
      bU.dO = true;
    }
  }
  ;
  this.wt = function(eP, deltaY) {
    if (a3q !== -1) {
      sk += Math.floor(deltaY);
      a44();
      a47(eP);
      bU.dO = true;
    }
  }
  ;
  this.gV = function(eP, eR) {
    this.wq(eP, eR);
    if (a3q !== -1) {
      gM = eP;
      this.a3y = true;
    }
  }
  ;
  this.xG = function() {
    if (a3q !== -1) {
      this.a3y = false;
    }
  }
  ;
  this.qn = function() {
    qo.fillStyle = p.mO;
    for (var z = a3p; z >= a3o; z--) {
      a49(z);
    }
    if (this.a3x && a3o === 0) {
      qo.fillStyle = p.mp;
      a49(0);
    }
    if (a3q !== -1) {
      qo.fillStyle = p.mN;
      a49(a3q);
    }
    a4A();
  }
  ;
  function a49(z) {
    var a1v = Math.floor(a3n * (Math.pow(ey[z], a3t)));
    qo.fillRect(sk + an.t - (z + 1) * a3m, an.ir - a1v, a25, a1v);
  }
  function a4A() {
    if (a3q === -1) {
      return;
    }
    qo.font = a0U;
    b2.ow.textBaseline(qo, 2);
    var dt = new Date();
    dt.setTime(a3s.getTime() - a3q * 1000 * 60 * 60 * 24);
    var month = "month";
    var a4B = "day";
    if (typeof Intl !== "undefined") {
      month = new Intl.DateTimeFormat("en-US",{
        month: "long"
      }).format(dt);
      a4B = new Intl.DateTimeFormat("en-US",{
        weekday: "long"
      }).format(dt);
    }
    var a4C = a4B + ", " + dt.getUTCDate() + " " + month + " " + dt.getFullYear();
    var a4D;
    a4D = ey[a3q] === 1 ? L(84) : L(85);
    a4D = b2.w0.z6(ey[a3q]) + " " + a4D;
    var q7 = Math.floor(qo.measureText(a4C).width);
    var q8 = Math.floor(qo.measureText(a4D).width);
    var a4E = Math.floor(0.5 * (q7 + a3r));
    var a4F = sk + an.t - (a3q + 1) * a3m;
    a4F = a4F < a4E ? a4E : a4F > an.t - a4E ? an.t - a4E : a4F;
    var ll = an.ir - Math.floor(a3n * (Math.pow(ey[a3q], a3t)));
    var a4G = Math.floor(1.1 * a3r);
    var a4H = ll > an.ir - a4G ? an.ir - a4G : ll;
    qo.fillStyle = p.mI;
    qo.fillRect(an.t - q8 - a3r, a4H - a4G, q8 + a3r, a4G);
    qo.fillRect(a4F - a4E, an.ir - a4G, q7 + a3r, a4G);
    qo.fillStyle = p.mL;
    b2.ow.textAlign(qo, 2);
    qo.fillText(a4D, Math.floor(an.t - 0.5 * a3r), a4H);
    a4I(a4H - 2 * a4G, a4G);
    b2.ow.textAlign(qo, 1);
    qo.fillText(a4C, a4F, an.ir);
    qo.strokeStyle = p.mP;
    qo.lineWidth = 1;
    qo.beginPath();
    qo.moveTo(0, ll);
    qo.lineTo(an.t, ll);
    qo.closePath();
    qo.stroke();
  }
  function a4I(ll, a4G) {
    var kA = -1;
    var o0 = ey.length - a3q - 1;
    for (var z = a3w.length - 1; z >= 0; z--) {
      if (o0 >= a3w[z].eI && o0 <= a3w[z].d && (kA === -1 || a3w[z].d - a3w[z].eI < a3w[kA].d - a3w[kA].eI)) {
        kA = z;
      }
    }
    if (kA === -1) {
      return;
    }
    var q7 = Math.floor(qo.measureText(a3w[kA].fj).width);
    qo.fillStyle = p.mI;
    qo.fillRect(an.t - q7 - a3r, ll, q7 + a3r, a4G);
    qo.fillStyle = p.mL;
    qo.fillText(a3w[kA].fj, Math.floor(an.t - 0.5 * a3r), ll + a4G);
  }
  function a48() {
    if (aN.wU() === 8) {
      a3q = -1;
    }
    if (a3q !== 0) {
      a3v = (new Date()).getTime();
      clearInterval(a3u);
      a3u = -1;
      return;
    }
    var fo = ey[1] / (24 * 60 * 60 * 10);
    if (a3v !== -1) {
      var dt = (new Date()).getTime();
      fo += (dt - a3v) * ey[1] / (24 * 60 * 60 * 1000);
      a3v = -1;
    }
    if (fo > 0) {
      ey[0] += Math.floor(fo);
      bU.dO = true;
    }
  }
}
function c2() {
  this.eP = 0;
  this.ir = 0;
  var a0U;
  var t, eR, a4J;
  var a4K;
  var h0;
  var tU;
  var a1y;
  var yh;
  var a4L;
  var a4M;
  var a4N;
  var a4O;
  this.dH = function() {
    a4K = a1.t9;
    a4M = "rgba(0,100,0,0.8)";
    a4N = "rgba(150,0,0,0.8)";
    a4L = true;
    a1y = false;
    yh = aV.gK[a1.e2];
    this.resize();
  }
  ;
  this.resize = function() {
    t = Math.floor((m.n.uE() ? 0.305 : 0.24) * an.oy);
    this.ir = Math.floor(0.5 + 0.13 * t);
    t = Math.floor(this.ir * 6);
    a0U = b2.ow.q5(1, Math.floor(0.8 * this.ir));
    a4O = Math.floor(0.5 * this.ir);
    bI.sJ.font = a0U;
    eR = bR.gap;
    a4J = Math.floor(1 + 0.13 * this.ir);
    h0 = document.createElement("canvas");
    h0.width = t;
    h0.height = this.ir;
    tU = h0.getContext("2d", {
      alpha: true
    });
    tU.font = a0U;
    b2.ow.textBaseline(tU, 1);
    b2.ow.textAlign(tU, 1);
    this.a4P();
  }
  ;
  this.a2M = function() {
    return m.n.uE() && an.t < 1.2 * an.ir;
  }
  ;
  this.a2w = function() {
    if (this.a2M()) {
      this.eP = an.t - t - bR.gap;
    } else {
      this.eP = Math.floor(aI.a4Q() + (an.t - aI.a4Q() - aJ.t - t) / 2 - 0.5 * bR.gap);
    }
  }
  ;
  this.l1 = function() {
    if (a1y) {
      a1y = false;
      this.a4P();
    }
  }
  ;
  this.a4P = function() {
    tU.clearRect(0, 0, t, this.ir);
    tU.fillStyle = a4L ? a4M : a4N;
    tU.fillRect(0, 0, t, this.ir);
    tU.fillStyle = p.mN;
    this.a4R();
    // this.a4S(); // Why was this ever added
    // Removed horizontal white bar
    tU.fillStyle = aV.gK[a1.e2] >= aT.j3(a1.e2) ? p.mm : p.mL;
    tU.fillText(b2.w0.z6(yh), Math.floor(t / 2), a4O);
    tU.fillStyle = p.mL;
    tU.fillRect(0, 0, t, 1);
    tU.fillRect(0, 0, 1, this.ir);
    tU.fillRect(0, this.ir - 1, t, 1);
    tU.fillRect(t - 1, 0, 1, this.ir);
  }
  ;
  this.a4R = function() {
    var ss = Math.floor((aT.a4T() - 1) * this.ir / 9);
    ss = a4U(ss, this.ir - a4J);
    tU.fillRect(0, ss, a4J, this.ir - ss);
    tU.fillRect(t - a4J, ss, a4J, this.ir - ss);
  }
  ;
  this.a4S = function() {
    tU.fillRect(a4J, this.ir - a4J, Math.floor((t - 2 * a4J) * aV.gK[a1.e2] / a4K), a4J);
  }
  ;
  this.iC = function() {
    if (aV.lI[a1.e2] === 0 || aV.yb[a1.e2] === 2) {
      return;
    }
    var ec = aV.gK[a1.e2] - aV.yg[a1.e2];
    if (yh !== ec) {
      a4K = a17(ec, a4K);
      a4L = ec > yh && ec >= 10;
      yh = ec;
      a1y = true;
    }
  }
  ;
  this.qn = function() {
    if (aV.lI[a1.e2] === 0 || a1.gd || aV.yb[a1.e2] === 2) {
      return;
    }
    qo.drawImage(h0, this.eP, eR);
  }
  ;
}
var a2c;
var kf;
var j8;
function c3() {
  var a4V;
  var a4W;
  var a4X;
  var a4Y;
  var a4Z;
  var a4a;
  var a4b;
  var a4c;
  var a4d;
  var a4e, a4f;
  var a4g;
  var a4h;
  var a4i, a4j, a4k;
  var a4l;
  var a4m;
  var a4n;
  var a4o;
  var a4p;
  var a4q;
  var position;
  var a4r;
  var a4s;
  var a4t;
  var a4u;
  var a4v = 1;
  var a4w = 1;
  this.dH = function() {
    var z;
    a4r = 0;
    a4s = false;
    a4t = 0;
    a4u = 0;
    a4q = -1;
    a4Z = m.n.uE() ? 6 : 10;
    position = 0;
    a4w = bY.dZ.data[11].value;
    a4w = a4w === 0 ? 10 : a4w === 1 ? 5 : 1;
    a4p = false;
    a4n = new Uint16Array(a4Z + 1);
    a4o = new Uint32Array(a4Z + 1);
    a4d = a1.eF;
    kf = new Uint16Array(a4d);
    j8 = new Uint16Array(a4d);
    for (z = a4d - 1; z >= 0; z--) {
      kf[z] = z;
      j8[z] = z;
    }
    this.resize(true);
    a4l = new Uint16Array(a1.eF);
    var a4x = Math.floor(a4V - a4j - a4i - a4c);
    a4m = new Array(a1.eF);
    a4b.font = a4Y;
    for (z = a1.eF - 1; z >= 0; z--) {
      a4m[z] = (z + 1) + ".";
      aV.a1G[z] = b2.tU.yI(aV.w2[z], a4Y, a4x);
      a4l[z] = Math.floor(a4b.measureText(aV.a1G[z]).width);
    }
    a4y();
  }
  ;
  this.resize = function(dH) {
    if (m.n.uE()) {
      a4V = Math.floor(0.335 * an.oy);
      a2c = Math.floor((a4Z * a4V) / 8);
    } else {
      a4V = Math.floor(0.27 * an.oy);
      a2c = Math.floor((a4Z * a4V) / 10);
    }
    a4V = Math.floor(0.97 * a4V);
    a4a = document.createElement("canvas");
    a4a.width = a4V;
    a4a.height = a2c;
    a4b = a4a.getContext("2d", {
      alpha: true
    });
    a4e = 0.025 * a4V;
    a4X = 0.160 * a4V;
    a4f = 0.000 * a4V;
    a4g = Math.floor(0.45 * a4e + a4X);
    a4h = (a2c - a4X - 2 * a4e - a4f) / a4Z;
    a4W = b2.ow.q5(1, Math.floor(0.55 * a4X));
    a4v = Math.floor((m.n.uE() ? 0.67 : 0.72) * a4h);
    a4Y = b2.ow.q5(0, a4v);
    a4b.font = a4Y;
    a4i = Math.floor(0.04 * a4V);
    a4j = Math.floor((m.n.uE() ? 0.195 : 0.18) * a4V);
    a4c = Math.floor(a4b.measureText("00920600").width);
    a4b.font = a4W;
    a4k = a4V - a4i;
    if (!dH) {
      a4b.font = a4Y;
      for (var z = a1.eF - 1; z >= 0; z--) {
        a4l[z] = Math.floor(a4b.measureText(aV.a1G[z]).width);
      }
      a4y();
    }
  }
  ;
  this.a4Q = function() {
    return a4V;
  }
  ;
  this.l1 = function(bc, a4z) {
    if (a4z || (a4p && (bc || bU.jK() % a4w === 0))) {
      a4p = false;
      a4y();
    }
  }
  ;
  function a4y() {
    var eb;
    a4b.clearRect(0, 0, a4V, a2c);
    a4b.fillStyle = p.n0;
    a4b.fillRect(0, 0, a4V, a4g);
    a4b.fillStyle = p.mH;
    a4b.fillRect(0, a4g, a4V, a2c - a4g);
    if (j8[a1.e2] >= position) {
      a50(j8[a1.e2] - position, p.mg);
    }
    if (j8[a1.e2] !== 0 && position === 0) {
      a50(0, p.n5);
    }
    if (a4q !== -1) {
      a50(a4q, p.mM);
    }
    a4b.fillStyle = p.mL;
    a4b.fillRect(0, a4g, a4V, 1);
    a4b.fillRect(0, 0, a4V, bR.uH);
    a4b.fillRect(0, 0, bR.uH, a2c);
    a4b.fillRect(a4V - bR.uH, 0, bR.uH, a2c);
    a4b.fillRect(0, a2c - bR.uH, a4V, bR.uH);
    a4b.font = a4W;
    b2.ow.textBaseline(a4b, 1);
    b2.ow.textAlign(a4b, 1);
    a4b.fillText(L(86), Math.floor(a4V / 2), Math.floor(a4e + a4X / 2));
    var fp = j8[a1.e2] < position + a4Z - 1 ? 1 : 2;
    a4b.font = a4Y;
    b2.ow.textAlign(a4b, 0);
    for (eb = a4Z - fp; eb >= 0; eb--) {
      a51(kf[eb + position]);
      a52(eb, eb + position, kf[eb + position]);
    }
    b2.ow.textAlign(a4b, 2);
    for (eb = a4Z - fp; eb >= 0; eb--) {
      a51(kf[eb + position]);
      a53(eb, kf[eb + position]);
    }
    if (fp === 2) {
      a51(a1.e2);
      b2.ow.textAlign(a4b, 0);
      a52(a4Z - 1, j8[a1.e2], a1.e2);
      b2.ow.textAlign(a4b, 2);
      a53(a4Z - 1, a1.e2);
    }
    if (position === 0) {
      a54();
    }
  }
  function a51(player) {
    if (a1.iN) {
      a4b.fillStyle = bV.a55[bV.vU[bV.eG[player]]];
    }
  }
  function a50(z, a56) {
    a4b.fillStyle = a56;
    z = z > a4Z - 1 ? a4Z - 1 : z;
    var a57 = Math.floor((z === a4Z - 1 ? 2 : z === 0 ? 1.15 : 1) * a4h);
    a57 = z === a4Z - 2 ? Math.floor(a4g + 9.15 * a4h) - Math.floor(a4g + 8.15 * a4h) : a57;
    a4b.fillRect(0, Math.floor(a4g + (z + (z === 0 ? 0 : 0.15)) * a4h), a4V, a57);
  }
  function a54() {
    var a0Z = 0.7 * a4h / aP.get(4).height;
    a4b.setTransform(a0Z, 0, 0, a0Z, Math.floor(a4i + 0.58 * a4h + 0.5 * a0Z * aP.get(4).width), Math.floor(a4e + a4X + 0.4 * a4h));
    a4b.imageSmoothingEnabled = true;
    a4b.drawImage(aP.get(4), -Math.floor(aP.get(4).width / 2), -Math.floor(aP.get(4).height / 2));
    a4b.setTransform(1, 0, 0, 1, 0, 0);
  }
  function a52(a58, vp, z) {
    a4b.fillText(a4m[vp], a4i, Math.floor(a4e + a4X + (a58 + 0.5) * a4h));
    if (aV.yb[z] === 1) {
      a4b.font = "italic " + a4Y;
    }
    var eR = Math.floor(a4e + a4X + (a58 + 0.5) * a4h);
    a4b.fillText(aV.a1G[z], a4j, eR);
    if (aV.yb[z] !== 0) {
      a4b.font = a4Y;
    }
    if (z < a1.jN && aV.yb[z] !== 2) {
      return;
    }
    a4b.fillRect(a4j, eR + 0.35 * a4v, a4l[z], Math.max(1, 0.1 * a4v));
  }
  function a53(a58, z) {
    a4b.fillText(aV.g6[z], a4k, Math.floor(a4e + a4X + (a58 + 0.5) * a4h));
  }
  this.iC = function() {
    a59();
    a5A();
    a5B();
    a5C();
  }
  ;
  function a5C() {
    for (var z = a4Z - 1; z >= 0; z--) {
      a4n[z] = kf[z];
      a4o[z] = aV.g6[kf[z]];
    }
    a4n[a4Z] = j8[a1.e2];
    a4o[a4Z] = aV.g6[a1.e2];
  }
  function a5B() {
    var dt = a4p;
    a4p = true;
    var fp = j8[a1.e2] >= a4Z - 1 ? a4Z - 2 : a4Z - 1;
    for (var z = fp; z >= 0; z--) {
      if (a4n[z] !== kf[z] || a4o[z] !== aV.g6[kf[z]]) {
        return true;
      }
    }
    if (fp === a4Z - 2 && (a4n[a4Z] !== j8[a1.e2] || a4o[a4Z] !== aV.g6[a1.e2])) {
      return true;
    }
    a4p = dt;
    return dt;
  }
  function a5A() {
    var a5D;
    var m3 = a4d - 1;
    for (var eb = 0; eb < m3; eb++) {
      if (aV.g6[kf[eb]] < aV.g6[kf[eb + 1]]) {
        a5D = kf[eb];
        kf[eb] = kf[eb + 1];
        kf[eb + 1] = a5D;
        j8[kf[eb]] = eb;
        j8[kf[eb + 1]] = eb + 1;
      }
    }
  }
  function a59() {
    for (var eb = a4d - 1; eb >= 0; eb--) {
      if (aV.lI[kf[eb]] === 0) {
        a5E(eb);
      }
    }
  }
  function a5E(eb) {
    var a5F = kf[eb];
    a4d--;
    for (var z = eb; z < a4d; z++) {
      kf[z] = kf[z + 1];
      j8[kf[z]] = z;
    }
    kf[a4d] = a5F;
    j8[kf[a4d]] = a4d;
  }
  this.gV = function(eP, eR) {
    var a5G;
    if (uG(eP, eR)) {
      a4r = bU.ds;
      a4s = true;
      a4t = a4u = a5H(eR);
      if (b9.xW()) {
        a5G = a3I(-1, a4u, a4Z);
        a5G = (a5G === a4Z) ? -1 : a5G;
        if (a4q !== a5G) {
          a4q = a5G;
          a4y();
          bU.dO = true;
        }
      }
      return true;
    }
    return false;
  }
  ;
  this.wq = function(eP, eR) {
    var dt;
    var a5G = a5H(eR);
    if (a4s) {
      dt = position;
      position += a4t - a5G;
      position = a3I(0, position, a1.eF - a4Z);
      if (position !== dt) {
        a4t = a5G;
        a5G = a3I(-1, a5G, a4Z);
        a5G = (a5G === a4Z || !uG(eP, eR)) ? -1 : a5G;
        a4q = a5G;
        a4y();
        bU.dO = true;
      }
      return true;
    }
    a5G = a3I(-1, a5G, a4Z);
    a5G = (a5G === a4Z || !uG(eP, eR) || b9.xW()) ? -1 : a5G;
    if (a4q !== a5G) {
      a4q = a5G;
      a4y();
      bU.dO = true;
      return true;
    }
    return false;
  }
  ;
  this.xG = function(eP, eR) {
    if (!a4s) {
      return false;
    }
    a4s = false;
    var a5G = a5H(eR);
    if (b9.xW() && a4q !== -1) {
      a4q = -1;
      a4y();
      bU.dO = true;
    }
    if (bU.ds - a4r < 350 && a4u === a5G) {
      a5G = a3I(-1, a5G, a4Z);
      a5G = (a5G === a4Z || !uG(eP, eR)) ? -1 : a5G;
      if (a5G !== -1) {
        var player = kf[a5G + position];
        if (a5G === a4Z - 1 && j8[a1.e2] >= position + a4Z - 1) {
          player = a1.e2;
        }
        if (aV.lI[player] !== 0) {
          a5.le(player, 800, false, 0);
        }
      }
    }
    return true;
  }
  ;
  this.wt = function(eP, eR, deltaY) {
    var a5G;
    if (a4s || a1.ln) {
      return false;
    }
    var a5I = Math.max(Math.floor(Math.abs(deltaY) / 40), 1);
    if (uG(eP, eR)) {
      a5G = a5H(eR);
      a5G = a3I(-1, a5G, a4Z);
      a5G = (a5G === a4Z || b9.xW()) ? -1 : a5G;
      if (deltaY > 0) {
        if (position < a1.eF - a4Z) {
          position += Math.min(a1.eF - a4Z - position, a5I);
          a4q = a5G;
          a4y();
          bU.dO = true;
        }
      } else if (position > 0) {
        position -= Math.min(position, a5I);
        a4q = a5G;
        a4y();
        bU.dO = true;
      }
      return true;
    }
    return false;
  }
  ;
  function a5H(eR) {
    eR -= bR.gap + a4g;
    if (eR < 0) {
      return Math.floor(eR / a4h) - 1;
    } else if (eR < (a4Z - 1) * a4h) {
      return Math.floor(eR / a4h);
    } else if (eR < a2c - a4g) {
      return a4Z - 1;
    }
    eR -= a2c - a4g;
    return a4Z + Math.floor(eR / a4h);
  }
  function uG(eP, eR) {
    return eP >= bR.gap && eP < bR.gap + a4V && eR >= bR.gap && eR < bR.gap + a2c;
  }
  this.qn = function() {
    qo.drawImage(a4a, bR.gap, bR.gap);
  }
  ;
}
function c4() {
  var h0;
  var tU;
  var eP;
  var eR;
  var a1v, a5J;
  var gap;
  var a5K;
  var a0U;
  var fontSize;
  var a5L;
  var a5M;
  var lE;
  var a5N;
  var a5O;
  var a5P;
  var a5Q;
  var a5R;
  this.dH = function() {
    a5P = a5Q = 0;
    a5M = new Array(8);
    a5M[0] = L(87);
    a5M[1] = a1.jn ? L(88) : L(89);
    a5M[2] = L(90);
    a5M[3] = L(91);
    a5M[4] = L(92);
    a5M[5] = L(93);
    a5M[6] = L(94);
    a5M[7] = L(95);
    lE = new Array(a5M.length);
    lE[0] = a1.jn ? 0 : a1.jN;
    lE[1] = a1.jn ? aa.jO : a1.jk;
    lE[2] = a1.vB;
    lE[3] = 0;
    lE[4] = bB.ek(10000 * aV.g6[0], a1.j7);
    lE[5] = 700;
    lE[6] = 0;
    a5S();
    lE[7] = 0;
    a5O = a5T(6);
    a5N = new Array(a5M.length);
    for (var z = a5M.length - 1; z >= 0; z--) {
      a5N[z] = true;
    }
    a5R = 0;
    if (a1.jn) {
      a5N[0] = false;
      a5N[2] = false;
      a5N[3] = false;
      a5R = 3;
    } else {
      a5N[3] = false;
      a5R = 1;
    }
    a5L = 0;
    this.resize();
  }
  ;
  this.resize = function() {
    this.t = Math.floor((m.n.uE() ? 0.1646 : 0.126) * an.oy);
    this.ir = Math.floor(1.18 * this.t);
    a1v = Math.floor(0.04 * this.t);
    gap = Math.floor(0.035 * this.t);
    a5K = 0.04 * this.t;
    a5J = this.ir;
    this.ir -= Math.floor(a5R * (this.ir - 2 * a1v) / a5M.length);
    fontSize = Math.floor(0.7 * (a5J - a1v) / a5M.length);
    a0U = b2.ow.q5(1, fontSize);
    h0 = document.createElement("canvas");
    h0.width = this.t;
    h0.height = this.ir;
    tU = h0.getContext("2d", {
      alpha: true
    });
    tU.font = a0U;
    b2.ow.textBaseline(tU, 1);
    tU.lineWidth = 1;
    this.zM();
    this.a2w();
    aH.a2w();
    a5U();
  }
  ;
  this.a2w = function() {
    eP = an.t - this.t - bR.gap;
  }
  ;
  this.a5V = function() {
    eR = bR.gap;
  }
  ;
  this.zM = function() {
    eR = bR.gap + ((aH.a2M() && aV.lI[a1.e2] !== 0 && !a1.gd) ? aH.ir + bR.gap : 0);
  }
  ;
  this.l1 = function(bc) {
    if (bc || a5L >= 100) {
      a5L = 0;
      a5U();
    }
  }
  ;
  function a5U() {
    var dy;
    tU.clearRect(0, 0, aJ.t, aJ.ir);
    tU.fillStyle = p.mI;
    tU.fillRect(0, 0, aJ.t, aJ.ir);
    tU.fillStyle = p.mc;
    dy = a5P > 0 ? a5P : Math.sqrt(lE[4] / 10000);
    tU.fillRect(0, aJ.ir - a1v - 1, Math.floor(dy * aJ.t), a1v);
    tU.fillStyle = p.mL;
    tU.fillRect(0, 0, aJ.t, 1);
    tU.fillRect(0, 0, 1, aJ.ir);
    tU.fillRect(aJ.t - 1, 0, 1, aJ.ir);
    tU.fillRect(0, aJ.ir - 1, aJ.t, 1);
    tU.fillRect(0, aJ.ir - a1v - 1, aJ.t, 1);
    var dt = 0;
    for (var z = 0; z < a5M.length; z++) {
      if (!a5N[z]) {
        dt++;
        continue;
      }
      b2.ow.textAlign(tU, 0);
      var a5W = Math.floor(((a5J - a1v) + 2 * a5K) * (z - dt + 1) / (a5M.length + 1) - 0.7 * a5K);
      tU.fillText(a5M[z], gap, a5W);
      b2.ow.textAlign(tU, 2);
      if (z === 5 && aV.lI[a1.e2] !== 0 && aV.gK[a1.e2] >= aT.j3(a1.e2)) {
        tU.fillStyle = p.n3;
        tU.fillText(a5T(z), aJ.t - gap, a5W);
        tU.fillStyle = p.mL;
      } else {
        tU.fillText(a5T(z), aJ.t - gap, a5W);
      }
    }
  }
  function a5T(z) {
    if (z < 3) {
      return lE[z].toString();
    } else if (z === 3) {
      return b2.w0.zB(lE[z] / 100, 2);
    } else if (z === 4) {
      return b2.w0.zB(lE[z] / 100, 2);
    } else if (z === 5) {
      return b2.w0.zB(lE[z] / 100, 2);
    } else if (z < 7) {
      return b2.w0.z6(lE[z]);
    } else {
      return aJ.a4T(lE[7]);
    }
  }
  this.a09 = function() {
    return lE[7];
  }
  ;
  this.a4T = function(value) {
    var k8 = Math.floor(value / 1000 / 60);
    var eI = Math.floor((value - 1000 * 60 * k8) / 1000);
    if (eI < 10) {
      return k8 + ":0" + eI;
    }
    return k8 + ":" + eI;
  }
  ;
  this.iC = function() {
    a5X();
    a5Y();
    this.ks();
    a5Z();
    a5S();
    a5a();
    a5b();
    a5c();
  }
  ;
  function a5X() {
    if (!a5N[0]) {
      return;
    }
    if (a1.vC - a1.vB === lE[0]) {
      return;
    }
    lE[0] = a1.vC - a1.vB;
    a5L++;
  }
  function a5Y() {
    if (aa.jO - lE[0] === lE[1]) {
      return;
    }
    lE[1] = aa.jO - lE[0];
    a5L++;
  }
  this.ks = function() {
    if (!a5N[2]) {
      return;
    }
    if (a1.vB === lE[2]) {
      return;
    }
    lE[2] = a1.vB;
    a5L++;
  }
  ;
  function a5b() {
    var yv, per;
    if (a1.iN) {
      yv = bW.vk();
    } else {
      yv = aV.g6[kf[0]];
    }
    per = bB.ek(10000 * yv, a1.j7);
    lE[3] = yv;
    if (lE[4] === per) {
      return;
    }
    a5L++;
    lE[4] = per;
  }
  function a5c() {
    if (a1.jl === 8 && a5d()) {
      return;
    }
    if (lE[3] < a1.j7) {
      return;
    }
    if (!a5e()) {
      return;
    }
    bH.uo.v8();
  }
  function a5e() {
    for (var z = aa.jO - 1; z >= 0; z--) {
      if (aV.fi[aa.jQ[z]].length > 0) {
        return false;
      }
    }
    return true;
  }
  function a5d() {
    for (var z = 0; z < 2; z++) {
      if (!b2.fd.gU(z)) {
        bH.uo.v8();
        return true;
      }
    }
    return false;
  }
  function a5Z() {
    var a5f = aT.a5g(a1.e2);
    if (a5f === lE[5]) {
      return;
    }
    lE[5] = a5f;
    a5L++;
  }
  function a5S() {
    if (aV.g6[a1.e2] === lE[6]) {
      return;
    }
    lE[6] = aV.g6[a1.e2];
    a5L++;
  }
  function a5a() {
    lE[7] += bU.a5h;
    var od = a5T(7);
    if (a5O !== od) {
      a5O = od;
      a5L += 100;
    }
  }
  this.a5i = function(z) {
    var qL, a5j, dt;
    if (a1.v9 === 2) {
      return false;
    }
    if (z % 2 === 1) {
      aI.l1(1, 1);
      bU.dO = true;
    }
    if (z === a1.zV) {
      a5P = 0;
      a5U();
      return false;
    }
    if (z === -1 && a5Q === 0) {
      return false;
    }
    a5j = a5P;
    if (a1.gR) {
      a5P = z / a1.zV;
      a5U();
      return a5P !== a5j;
    }
    dt = performance.now();
    if (z >= 0) {
      qL = dt - z * 392;
      a5Q = (z === 0 || qL < a5Q) ? qL : a5Q;
    }
    a5P = (dt - a5Q) / (a1.zV * 392);
    a5P = a5P > 1 ? 1 : a5P;
    a5U();
    return a5P !== a5j;
  }
  ;
  this.qn = function() {
    qo.drawImage(h0, eP, eR);
  }
  ;
}
function c5() {
  var to;
  var a5k;
  var t;
  var ir;
  var a32;
  var a5l;
  var a5m;
  var a2N;
  var h0;
  var lV;
  var a5n;
  this.a5o = -1;
  this.dH = function() {
    to = false;
    a5n = false;
    ir = 0;
    a32 = 0.61;
    a5l = 0.07;
    a5m = 0.09;
    a2N = 0;
    lV = 0;
    this.a5o = -1;
  }
  ;
  this.resize = function() {
    if (!to) {
      return;
    }
    if (m.n.uE()) {
      t = Math.floor(0.69 * an.oy);
    } else {
      t = Math.floor(0.5 * an.oy);
    }
    t = a4U(t, a17(an.t - 2 * bR.gap, 10));
    t = a4U(t, Math.floor(a17((an.ir - 2 * bR.gap), 3) * 3.57));
    ir = Math.floor(0.28 * t);
    a5p();
  }
  ;
  this.show = function(el, a5q, a2p, a5r) {
    if (to) {
      return;
    }
    if (a5r && a5n) {
      return;
    }
    a5n = true;
    a5k = a2p ? 21 : (el ? 1 : 2);
    to = true;
    this.resize();
    a8.qK();
    aE.a2m();
    lV = bU.ds;
    if (this.a5o === -1) {
      this.a5o = bU.jK();
    }
    a2N = a5q ? 1 : 0;
  }
  ;
  this.iC = function() {
    if (!to || a2N >= 1) {
      return;
    }
    a2N += 0.0005 * (bU.ds - lV);
    a2N = a2N > 1 ? 1 : a2N;
    lV = bU.ds;
    bU.dO = true;
  }
  ;
  this.gV = function(eP, eR) {
    if (!to || a2N <= 0) {
      return false;
    }
    eP -= Math.floor((an.t - t) / 2);
    eR -= tQ();
    if (eP < 0 || eR < 0 || eP > t || eR > ir) {
      return false;
    }
    if (eP > t - ir / 3 && eR < ir / 3) {
      to = false;
      bU.dO = true;
    }
    return true;
  }
  ;
  this.qn = function() {
    if (!to || a2N <= 0) {
      return;
    }
    qo.globalAlpha = a2N;
    qo.drawImage(h0, Math.floor((an.t - t) / 2), tQ());
    qo.globalAlpha = 1;
  }
  ;
  function tQ() {
    var eP = Math.floor((an.t - t) / 2);
    if (eP < aE.ir + 2 * bR.gap) {
      return an.ir - ir - 4 * bR.gap - aE.ir;
    }
    return an.ir - ir - 2 * bR.gap;
  }
  function a5p() {
    h0 = document.createElement("canvas");
    h0.width = t;
    h0.height = ir;
    var tU = h0.getContext("2d", {
      alpha: true
    });
    var lk = Math.floor(1 + ir / 40);
    tU.clearRect(0, 0, t, ir);
    tU.fillStyle = p.mI;
    tU.fillRect(lk, lk, t - 2 * lk, ir - 2 * lk);
    tU.lineJoin = "bevel";
    tU.lineWidth = 2 * lk;
    tU.strokeStyle = p.mL;
    tU.strokeRect(lk, lk, t - 2 * lk, ir - 2 * lk);
    tU.imageSmoothingEnabled = false;
    var ed = aP.get(a5k);
    var a5s = ed.width;
    var a5t = ed.height;
    var a0Z = (a5k === 1 ? 0.85 : a5k === 21 ? 0.666 : 0.9) * a32 * ir / a5t;
    tU.setTransform(a0Z, 0, 0, a0Z, Math.floor((t - a0Z * a5s) / 2), Math.floor((ir - a0Z * a5t) / 2));
    tU.drawImage(ed, 0, 0);
    tU.setTransform(1, 0, 0, 1, Math.floor(t - a5m * ir - a5l * ir - lk), Math.floor(lk + a5l * ir));
    a5u(tU, Math.floor(a5m * ir));
    tU.setTransform(1, 0, 0, 1, 0, 0);
  }
  function a5u(tU, eI) {
    tU.lineWidth = Math.floor(1 + ir / 80);
    tU.strokeStyle = p.mL;
    tU.beginPath();
    tU.moveTo(0, 0);
    tU.lineTo(eI, eI);
    tU.moveTo(0, eI);
    tU.lineTo(eI, 0);
    tU.stroke();
  }
}
function d7() {
  var a5v = [0, 0];
  var a5w = [0, 0];
  this.a5x = new a5y();
  this.dH = function() {
    var el = bY.dZ.data[119].value;
    a5v[0] = el >> 2;
    a5v[1] = el & 3;
  }
  ;
  this.zh = function() {
    this.a5x.dH();
  }
  ;
  this.iC = function() {
    this.a5x.iC();
  }
  ;
  this.a0A = function() {
    if (a5z(0)) {
      aA.a1D(L(96));
    }
  }
  ;
  this.a0B = function() {
    if (a5z(1)) {
      aA.a1D(L(97));
    }
  }
  ;
  function a5z(o0) {
    if (a5v[o0] === 3 || a5w[o0] === 1) {
      return false;
    }
    a5w[o0] = 1;
    a5v[o0]++;
    bY.pY.pZ(119, (a5v[0] << 2) + a5v[1]);
    return true;
  }
}
function a5y() {
  var a60;
  this.dH = function() {
    a60 = false;
  }
  ;
  this.iC = function() {
    if (!xN()) {
      return;
    }
    if (a61()) {
      return;
    }
    if (a62()) {
      return;
    }
    if (a63()) {
      return;
    }
    a64();
  }
  ;
  function xN() {
    if (a60) {
      return true;
    }
    if (bU.jK() % 30 !== 9) {
      return false;
    }
    if (!b2.fd.kZ(90)) {
      return false;
    }
    a60 = true;
    return true;
  }
  function a61() {
    var op = aA.a1Z(956);
    if (!op) {
      return false;
    }
    if (b2.fd.kD(op.player)) {
      return true;
    }
    aA.a1Y(956, 0);
    return false;
  }
  function a62() {
    var fo = a1.iN ? a65() : a66();
    if (fo === -1) {
      return false;
    }
    aA.vY(0, L(98, [aV.a1G[fo]]), 956, fo, p.mL, p.mI, -1, true);
    return true;
  }
  function a66() {
    var a67 = aa.jO;
    var jP = aa.jQ;
    var a68 = j8;
    for (var z = 0; z < a67; z++) {
      var fo = jP[z];
      if (a68[fo] !== 0) {
        return fo;
      }
    }
    return -1;
  }
  function a65() {
    var id = bW.kd();
    var eI = aa.jO;
    var tb = aa.jQ;
    var eG = bV.eG;
    for (var z = 0; z < eI; z++) {
      var fo = tb[z];
      if (eG[fo] !== id) {
        return fo;
      }
    }
    return -1;
  }
  function a63() {
    var op = aA.a1Z(957);
    if (!op || !op.a13) {
      return false;
    }
    if (aQ.e9(op.a13.e4 << 2)) {
      return true;
    }
    aA.a1Y(957, 0);
    return false;
  }
  function a64() {
    var eI = ac.hz.kP;
    if (eI === 0) {
      ac.hz.kn();
      return;
    }
    var dZ = ac.hz.dZ;
    for (var z = 0; z < eI; z++) {
      var e4 = dZ[z];
      if (aQ.e9(e4 << 2)) {
        aA.vY(0, L(99, [bC.eQ(e4), bC.eS(e4)]), 957, 0, p.mL, p.mI, -1, true, undefined, {
          eb: 1,
          e4: e4
        });
        return;
      }
    }
  }
}
function d8() {
  this.a69 = new a6A();
  this.dH = function() {
    this.a69.resize();
  }
  ;
}
function a6A() {
  this.resize = function() {
    var z;
    var a6B = document.head.querySelector("style#ss");
    if (!a6B) {
      a6B = document.createElement("style");
      a6B.id = "ss";
      document.head.appendChild(a6B);
    } else {
      for (z = a6B.sheet.cssRules.length - 1; z >= 0; z--) {
        a6B.sheet.deleteRule(0);
      }
    }
    var a3A = "::-webkit-scrollbar";
    var a6C = b2.ow.p7(bR.yQ);
    var gu = b2.ow.p7(Math.max(b2.ow.pc(0.012), 8));
    try {
      a6B.sheet.insertRule(a3A + "{width:" + gu + ";height:" + gu + ";}", a6B.sheet.cssRules.length);
      a6B.sheet.insertRule(a3A + "-thumb{background-color:white;}", a6B.sheet.cssRules.length);
      a6B.sheet.insertRule(a3A + "-track{background:" + p.mH + ";}", a6B.sheet.cssRules.length);
      a6B.sheet.insertRule(a3A + "-track:horizontal{border-top:" + a6C + " solid white;}", a6B.sheet.cssRules.length);
      a6B.sheet.insertRule(a3A + "-track:vertical{border-left:" + a6C + " solid white;}", a6B.sheet.cssRules.length);
      a6B.sheet.insertRule(a3A + "-button{display:none;}", a6B.sheet.cssRules.length);
    } catch (d) {
      console.log("error 3425: " + d);
      for (z = a6B.sheet.cssRules.length - 1; z >= 0; z--) {
        a6B.sheet.deleteRule(0);
      }
    }
  }
  ;
}
function d6() {
  this.a6D = false;
  this.mB = false;
  this.zQ = false;
  this.a6E = [0, 0, 0, 0];
  this.a6F = function() {
    this.zQ = this.zQ || this.mB;
    if (!this.mB && (!this.a6D || !this.zQ)) {
      return;
    }
    var lk = bP.a6G[0];
    var ll = bP.a6G[1];
    var ly = bP.a6G[2];
    var lz = bP.a6G[3];
    lk = lk < this.a6E[0] ? this.a6E[0] : lk;
    ll = ll < this.a6E[1] ? this.a6E[1] : ll;
    ly = ly > this.a6E[2] ? this.a6E[2] : ly;
    lz = lz > this.a6E[3] ? this.a6E[3] : lz;
    this.mB = false;
    this.a6D = false;
    if (lk === this.a6E[0] && ll === this.a6E[1] && ly === this.a6E[2] && lz === this.a6E[3]) {
      this.zR();
      return;
    }
    if (ly >= lk && lz >= ll) {
      zj.putImageData(zk, 0, 0, lk, ll, ly - lk + 1, lz - ll + 1);
    }
  }
  ;
  this.zR = function() {
    if (this.zQ && this.a6E[2] >= this.a6E[0] && this.a6E[3] >= this.a6E[1]) {
      zj.putImageData(zk, 0, 0, this.a6E[0], this.a6E[1], this.a6E[2] - this.a6E[0] + 1, this.a6E[3] - this.a6E[1] + 1);
    }
    this.zQ = false;
  }
  ;
  this.vK = function() {
    if (this.a6E[2] >= this.a6E[0] && this.a6E[3] >= this.a6E[1]) {
      zj.putImageData(zk, 0, 0, this.a6E[0], this.a6E[1], this.a6E[2] - this.a6E[0] + 1, this.a6E[3] - this.a6E[1] + 1);
    }
    this.zQ = false;
  }
  ;
  this.dH = function() {
    var eP, eR;
    this.a6D = false;
    this.mB = false;
    this.zQ = false;
    this.a6E[0] = bI.eT;
    this.a6E[1] = bI.eU;
    this.a6E[2] = this.a6E[3] = 0;
    loop: for (eP = 1; eP < bI.eT - 1; eP++) {
      for (eR = bI.eU - 2; eR > 1; eR--) {
        if (a6H[aQ.t0(eP, eR) + 2] === 1) {
          this.a6E[0] = eP;
          break loop;
        }
      }
    }
    loop: for (eR = 1; eR < bI.eU - 1; eR++) {
      for (eP = bI.eT - 2; eP > 1; eP--) {
        if (a6H[aQ.t0(eP, eR) + 2] === 1) {
          this.a6E[1] = eR;
          break loop;
        }
      }
    }
    loop: for (eP = bI.eT - 2; eP > 0; eP--) {
      for (eR = bI.eU - 2; eR > 1; eR--) {
        if (a6H[aQ.t0(eP, eR) + 2] === 1) {
          this.a6E[2] = eP;
          break loop;
        }
      }
    }
    loop: for (eR = bI.eU - 2; eR > 0; eR--) {
      for (eP = bI.eT - 2; eP > 1; eP--) {
        if (a6H[aQ.t0(eP, eR) + 2] === 1) {
          this.a6E[3] = eR;
          break loop;
        }
      }
    }
  }
  ;
}
function L(value, a6I) {
  var od;
  if (typeof value === "number") {
    od = az.a6J[value];
  } else {
    od = value;
  }
  if (!a6I) {
    return od;
  }
  var eI = a6I.length;
  for (var z = 0; z < eI; z++) {
    for (var eb = 0; eb < 3; eb++) {
      od = od.replace("{" + (10 * eb + z) + "}", a6I[z]);
    }
  }
  return od;
}
function bk() {
  this.data = new a6K();
  var a6L = (new a6M()).L84;
  this.a6J = a6L;
  var a6N = false;
  this.dH = function() {
    a6N = false;
    if (a6O()) {
      return;
    }
    if (a6P() && a6Q() && a6R()) {
      return;
    }
    a6N = true;
  }
  ;
  this.dJ = function() {
    bV.dI();
    a2.dI();
    bT.dI();
    bS.dI();
    aB.dH();
    aj.dI();
  }
  ;
  function a6O() {
    var el = bY.dZ.data[12].value.split("-")[0].toLowerCase();
    if (el === "en") {
      az.a6J = a6L;
      return true;
    }
    return false;
  }
  function a6P() {
    return bY.dZ.data[12].value === bY.dZ.data[145].value;
  }
  function a6Q() {
    return bY.dZ.data[146].value > 0;
  }
  function a6R() {
    var eI = bY.dZ.data[146].value;
    var ey = bY.pD.rG(eI, false);
    if (ey.length !== eI) {
      return false;
    }
    if (!b2.p6.y3(ey)) {
      return false;
    }
    return a6S(ey);
  }
  function a6S(ey) {
    var eI = ey.length;
    var a6T = bY.pD.rG(eI, true);
    if (eI !== a6T.length) {
      return false;
    }
    if (!b2.p6.y3(a6T)) {
      return false;
    }
    var k8 = a6L.length;
    var a42 = new Array(k8);
    var a6U = k8 === eI;
    var fj = Math.min(eI, k8);
    for (var z = 0; z < k8; z++) {
      a42[z] = a6L[z];
      if (z < eI && a6T[z] === a42[z]) {
        a42[z] = ey[z];
        continue;
      }
      a6U = false;
      for (var ec = 0; ec < fj; ec++) {
        if (a6T[ec] === a42[z]) {
          a42[z] = ey[ec];
          break;
        }
      }
    }
    az.a6J = a42;
    return a6U;
  }
  this.a6V = function() {
    if (!a6N) {
      return;
    }
    a6N = false;
    if (a6L.length === 0) {
      return;
    }
    var a6W = bY.dZ.data[12].value;
    aq.a6X.a6Y(0, a6W.slice(0, 20));
  }
  ;
  this.a6Z = function(ey) {
    if (ey.length !== a6L.length) {
      return;
    }
    this.a6J = ey;
    bY.pY.pZ(145, bY.dZ.data[12].value);
    bY.pY.pZ(146, ey.length);
    bY.pD.rM(ey, false);
    bY.pD.rM(a6L, true);
    if (aN.wU() === 0 && i.pz === 5) {
      i.kt.a6a();
    }
  }
  ;
}
function a6K() {
  var ey = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj", "fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"];
  this.a6b = function() {
    var z;
    var a6c = [];
    var eI = ey.length;
    for (z = 0; z < eI; z++) {
      a6c.push(ey[z]);
    }
    eI++;
    a6c.unshift(bY.dZ.data[12].rA);
    for (z = 1; z < eI; z++) {
      if (a6c[z] === a6c[0]) {
        a6c.splice(z, 1);
        eI--;
        break;
      }
    }
    try {
      if (typeof Intl === "undefined") {
        return a6c;
      }
      for (z = 0; z < eI; z++) {
        var a6d = new Intl.DisplayNames([a6c[z]],{
          type: "language"
        });
        var od = a6d.of(a6c[z]);
        if (od !== a6c[z]) {
          a6c[z] = a6c[z] + ": " + od;
        }
      }
    } catch (d) {
      console.log("error 3646: " + d);
    }
    return a6c;
  }
  ;
  this.a6e = function(a6f) {
    var od = bY.dZ.data[12].value;
    var eI = a6f.length;
    for (var z = 0; z < eI; z++) {
      if (od === a6f[z].split(":")[0]) {
        return z;
      }
    }
    return 0;
  }
  ;
}
function a6M() {
  this.L84 = ["Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Activated", "Team {0}", "Team {0} has won the game!", "You have earned a participation reward of {10} gold.", "You have earned prize money of {10} gold.", "The following clans have won these glorious points:", "Validate the clan results by clicking here: ", "❌ Back", "⚠️ Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More", "Accept", "You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Coordinates: {10}", "Index: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.", "A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.", "A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {10}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.", "{10} players have left the game.", "{10} players have surrendered.", "Next Contest: ", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} has voted for peace.", "{0} has rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: Click on a boat to send it to a new location.", "Hint: The top 9 emojis are ordered by usage.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Loading", "Back", "Joined", "Skipped", "Custom Lobbies", "Single Player", "other: ", "Custom Map", "Reset", "Maps", "Start", "You", "1 Player", "{10} Players", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "Snow", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Refresh", "Public Profile", "🧈 Gold", "Account Balance: ", "Play more multiplayer games to earn gold. Accounts without gold will be deleted after some days of grace. Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.", "Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Send", "Confirm", "Cancel", "You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.", "If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.", "If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options", "Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Rank: ", "Played Games: ", "Report Player", "You can report up to seven players per day for misconduct or other rule violations.", "No Admin", "Assistant Moderator", "Admin Coordinator", "Senior Admin", "Head Admin", "Admin Statistics", "Points: ", "Status: ", "You are allowed to elect up to one admin each week. Negative votes count only half as much as positive votes.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Primary Clan Stats", "Clan: ", "Monthly Points: ", "Total Points: ", "Won Games: ", "Avg. Points per Game: ", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "You are allowed to elect up to one clan leader each week. Your voting power is based on your monthly clan points.", "You can only elect members of the same clan you have won points for.", "Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "⏳ Connecting...", "Find Server...", "New Connection...", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "1v1 Players", "Admins", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Ranking", "Player", "Elo", "Clan", "Points", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Elector", "Elected", "Sender", "Receiver", "Amount", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Login", "📜 Logs", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay link here!", "⚙️ Settings", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.", "❌ Close", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Lobby", "Proxied Lobby", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Language", "🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms", "Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?", "Accounts without gold will be deleted after some days of grace.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Target Account", "Replay Error", "An enemy ship belonging to {0} is heading towards your shore.", "Avg. Attack Strength", "Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs", "Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses", "Territory", "Balance", "Numbers", "Statistics", "White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "Black"];
}
function dM() {
  var eP, eR;
  var ir;
  var a6g;
  var a6h;
  var a6i;
  var a6j;
  var a6k;
  var a6l;
  var t;
  var yX;
  var a6m;
  this.to = false;
  this.dH = function(od, a6n) {
    if (m.id === 1 && m.em >= 13 && m.em < 18) {
      if (a6n) {
        yX = od;
        return;
      }
      if (yX !== od) {
        return;
      }
      m.rE.saveString(200, od);
      return;
    }
    if (!a6n) {
      return;
    }
    yX = od;
    a6m = document.createElement("a");
    a6m.appendChild(document.createTextNode(yX));
    this.to = true;
    a6m.title = yX;
    a6m.target = "_blank";
    a6m.href = yX;
    a6m.style.textAlign = "center";
    a6m.style.color = p.mL;
    a6m.style.position = "absolute";
    a6m.style.padding = "0px";
    a6m.style.margin = "0px";
    this.resize();
    document.body.appendChild(a6m);
    bU.dO = true;
  }
  ;
  this.qK = function() {
    if (!this.to) {
      return false;
    }
    document.body.removeChild(a6m);
    this.to = false;
    return true;
  }
  ;
  this.gV = function(hO, hP) {
    if (!this.to) {
      return false;
    }
    if (hO < eP || hP < eR || hO > eP + t || hP > eR + ir || (hO > eP + t - a6g && hP < eR + a6g)) {
      bU.dO = true;
      this.to = false;
      document.body.removeChild(a6m);
      return true;
    }
    return true;
  }
  ;
  this.resize = function() {
    if (!this.to) {
      return;
    }
    a6k = Math.floor(0.8 * (m.n.uE() ? (an.t > an.ir ? 0.6 : 0.55) : 0.4) * an.oy);
    a6g = Math.floor(0.15 * a6k);
    a6h = Math.floor(0.35 * a6g);
    a6i = Math.floor(0.5 * a6g);
    a6j = Math.floor(2.5 * a6i);
    ir = a6g + a6h + 3 * a6i;
    var a0U = b2.ow.q5(1, a6h / an.p2);
    a6l = Math.floor(an.p2 * aD.measureText(yX, a0U));
    t = (a6l > a6k ? a6l : a6k) + 2 * a6j;
    var a6o = t;
    t = Math.min(t, an.t - 2 * (m.n.uE() ? 2 : 1) * bR.gap);
    a0U = b2.ow.q5(1, (t / a6o) * a6h / an.p2);
    a6l = Math.floor(an.p2 * aD.measureText(yX, a0U));
    eP = Math.floor((an.t - t) / 2);
    eR = Math.floor((an.ir - ir) / 2);
    a6m.style.font = a0U;
    a6m.style.top = Math.floor((eR + 1.4 * a6i + a6g) / an.p2) + "px";
    a6m.style.left = Math.floor((eP + (t - a6l) / 2) / an.p2) + "px";
  }
  ;
  this.qn = function() {
    if (!this.to) {
      return;
    }
    qo.fillStyle = p.mI;
    qo.fillRect(eP, eR + a6g, t, ir - a6g);
    qo.fillStyle = p.nD;
    qo.fillRect(eP, eR, t, a6g);
    qo.fillStyle = p.mL;
    qo.lineWidth = bR.uH;
    qo.strokeStyle = p.mL;
    qo.strokeRect(eP, eR, t, ir);
    qo.fillRect(eP, eR + a6g, t, bR.uH);
    qo.font = b2.ow.q5(1, 0.48 * a6g);
    b2.ow.textAlign(qo, 1);
    b2.ow.textBaseline(qo, 1);
    qo.fillText("You are leaving Territorial.io!", Math.floor(eP + (t - 0.5 * a6g) / 2), Math.floor(eR + 0.55 * a6g));
    a9.a0g(Math.floor(eP + t - 0.8 * a6g), Math.floor(eR + 0.25 * a6g), Math.floor(0.5 * a6g));
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
  ;
}
function dK() {
  var gap = 0;
  var eP = [0, 0, 0, 0, 0];
  var eR = [0, 0, 0, 0, 0];
  var lw = [1, 1, 1, 1, 1];
  var el = [true, true, true, false, false];
  this.f3 = [true, true, true, false, false];
  var ed = null;
  var a5M;
  this.a6p = function(y6, a6q) {
    ed = y6;
    el = a6q;
    a5M = [bA.a6r, bA.wP, bA.a6s, bA.a6s, bA.a6t];
    this.dH();
  }
  ;
  this.dH = function() {
    if (!aP.qP()) {
      return;
    }
    var z;
    var q7 = Math.floor((m.n.uE() ? 0.261 : 0.195) * an.oy);
    var q8 = Math.floor(0.9 * q7);
    var a32 = Math.floor(0.17 * q8);
    gap = m.n.uE() ? 2 * bR.gap : bR.gap;
    lw[0] = q7 / ed[0].width;
    lw[1] = q8 / ed[1].width;
    lw[2] = a32 / ed[2].height;
    lw[3] = a32 / ed[3].height;
    lw[4] = a32 / ed[4].height;
    lw[2] *= 1.7;
    lw[3] *= 1.07;
    eP[0] = gap;
    eP[1] = gap;
    eP[2] = gap;
    eP[3] = gap;
    eP[4] = Math.floor(2 * gap + lw[3] * ed[3].width);
    eR[0] = gap;
    eR[1] = eR[0] + gap + lw[0] * ed[0].height;
    eR[2] = eR[1] + gap + lw[1] * ed[1].height;
    eR[3] = eR[2] + gap + lw[2] * ed[2].height;
    eR[4] = eR[3];
    if (!el[0]) {
      for (z = 0; z < 5; z++) {
        eR[z] -= lw[0] * ed[0].height + gap;
      }
    }
    if (!el[1]) {
      for (z = 2; z < 5; z++) {
        eR[z] -= lw[1] * ed[1].height + gap;
      }
    }
  }
  ;
  this.to = function() {
    return !(aN.wU() === 7 && m.n.uE());
  }
  ;
  this.gV = function(hO, hP) {
    if (!ed || !this.to()) {
      return false;
    }
    var z;
    for (z = el.length - 1; z >= 0; z--) {
      if (el[z] && this.f3[z] && hO > eP[z] && hP > eR[z] && hO < eP[z] + lw[z] * ed[z].width && hP < eR[z] + lw[z] * ed[z].height) {
        i.j(9, i.pz, new a6u("You are leaving Territorial.io.",b2.ow.yW(a5M[z])));
        return true;
      }
    }
    return false;
  }
  ;
  this.qn = function() {
    if (!ed || !this.to()) {
      return;
    }
    qo.imageSmoothingEnabled = true;
    var z;
    for (z = 0; z < 5; z++) {
      if (el[z] && this.f3[z]) {
        qo.setTransform(lw[z], 0, 0, lw[z], eP[z], eR[z]);
        qo.drawImage(ed[z], 0, 0);
      }
    }
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
  ;
}
function c6() {
  var a6v;
  var a6w;
  var a6x;
  this.t = 0;
  this.ir = 0;
  this.eR = 0;
  this.gap = 0;
  this.dH = function() {
    a6v = -1;
    a6w = p.mL;
    a6x = "rgba(255,255,255,0.16)";
    this.pP = new Array(7);
    this.ir = Math.floor((m.n.uE() ? 0.123 : 0.093) * an.oy);
    this.t = Math.floor((m.n.uE() ? 3.96 : 4.2) * this.ir);
    this.gap = Math.floor(0.025 * this.t);
    var a6y = Math.floor(0.26 * this.ir);
    var a6z = b2.ow.q5(1, a6y);
    this.pP[0] = {
      eP: 0,
      eR: 0,
      t: Math.floor(0.6 * this.t - this.gap / 2),
      ir: this.ir,
      a1l: "Multiplayer",
      font: a6z,
      a70: "rgba(22,88,22,0.8)",
      fontSize: a6y
    };
    a6y = Math.floor(0.18 * this.ir);
    a6z = b2.ow.q5(1, a6y);
    this.pP[1] = {
      eP: 0,
      eR: 0,
      t: this.t - this.pP[0].t - this.gap,
      ir: this.ir,
      a1l: "Single Player",
      font: a6z,
      a70: "rgba(22,88,88,0.8)",
      fontSize: a6y
    };
    this.pP[2] = {
      eP: 0,
      eR: 0,
      t: this.t,
      ir: Math.floor(0.3 * this.ir),
      a1l: "",
      font: this.pP[1].font,
      a70: "rgba(100,0,0,0.8)",
      fontSize: this.pP[1].fontSize
    };
    this.pP[3] = {
      eP: 0,
      eR: 0,
      t: this.t,
      ir: this.ir,
      a1l: "Back",
      font: this.pP[0].font,
      a70: "rgba(0,0,0,0.8)",
      fontSize: this.pP[0].fontSize
    };
    this.pP[4] = {
      eP: 0,
      eR: 0,
      t: this.t,
      ir: Math.floor(0.3 * this.ir),
      a1l: "The game was updated!",
      font: this.pP[1].font,
      a70: "rgba(100,0,0,0.8)",
      fontSize: this.pP[1].fontSize
    };
    this.pP[5] = {
      eP: 0,
      eR: 0,
      t: this.pP[0].t,
      ir: Math.floor(0.8 * this.ir),
      a1l: "Reload",
      font: this.pP[0].font,
      a70: "rgba(0,100,0,0.8)",
      fontSize: this.pP[0].fontSize
    };
    this.pP[6] = {
      eP: 0,
      eR: 0,
      t: this.pP[1].t,
      ir: this.pP[5].ir,
      a1l: "Back",
      font: this.pP[0].font,
      a70: "rgba(0,0,0,0.8)",
      fontSize: this.pP[0].fontSize
    };
    this.a45();
  }
  ;
  this.a45 = function() {
    this.eR = Math.floor(0.54 * an.ir);
    this.pP[0].eP = Math.floor(0.5 * an.t - 0.5 * this.t);
    this.pP[1].eP = this.pP[0].eP + this.pP[0].t + this.gap;
    this.pP[2].eP = this.pP[3].eP = this.pP[0].eP;
    this.pP[4].eP = this.pP[5].eP = this.pP[0].eP;
    this.pP[6].eP = this.pP[1].eP;
    this.pP[0].eR = Math.floor(0.54 * an.ir);
    this.pP[1].eR = this.pP[0].eR;
    this.pP[2].eR = Math.floor((an.ir - this.pP[2].ir - this.pP[3].ir - this.gap) / 2);
    this.pP[3].eR = this.pP[2].eR + this.pP[2].ir + this.gap;
    this.pP[4].eR = Math.floor((an.ir - this.pP[4].ir - this.pP[5].ir - this.gap) / 2);
    this.pP[5].eR = this.pP[6].eR = this.pP[4].eR + this.pP[4].ir + this.gap;
  }
  ;
  this.a71 = function() {
    a72(0);
    a72(1);
  }
  ;
  this.a73 = function() {
    a72(2);
    a72(3);
  }
  ;
  this.a74 = function() {
    a72(4);
    a72(5);
    a72(6);
  }
  ;
  this.wq = function(eP, eR, l1) {
    var z = -1;
    if (aN.wU() === 0) {
      z = this.xL(eP, eR, 0, 2);
    } else if (aN.wU() === 3) {
      z = this.xL(eP, eR, 3, 1);
    } else if (aN.wU() === 5) {
      z = this.xL(eP, eR, 5, 2);
    }
    if (a6v !== z) {
      a6v = z;
      if (l1) {
        bU.dO = true;
      }
    }
    if (z !== -1) {
      aG.xF();
      return true;
    }
    return false;
  }
  ;
  this.xL = function(eP, eR, a75, size) {
    for (var z = a75; z < a75 + size; z++) {
      if (eP >= this.pP[z].eP && eR >= this.pP[z].eR && eP <= this.pP[z].eP + this.pP[z].t && eR <= this.pP[z].eR + this.pP[z].ir) {
        return z;
      }
    }
    return -1;
  }
  ;
  function a72(z) {
    var button = aL.pP[z];
    var eP = button.eP;
    var eR = button.eR;
    var t = button.t;
    var ir = button.ir;
    qo.fillStyle = button.a70;
    qo.fillRect(eP, eR, t, ir);
    if (z === a6v) {
      qo.fillStyle = a6x;
      qo.fillRect(eP, eR, t, ir);
    }
    qo.lineWidth = bR.uH;
    qo.strokeStyle = a6w;
    qo.strokeRect(eP, eR, t, ir);
    a76(button);
  }
  function a76(button) {
    var eP = button.eP;
    var eR = button.eR;
    var t = button.t;
    var ir = button.ir;
    b2.ow.textAlign(qo, 1);
    b2.ow.textBaseline(qo, 1);
    qo.font = button.font;
    qo.fillStyle = a6w;
    qo.fillText(button.a1l, Math.floor(eP + t / 2), Math.floor(eR + ir / 2 + 0.1 * button.fontSize));
  }
}
function a77() {
  this.t = 0;
  this.ir = 0;
  this.to = false;
  this.a78 = 0;
  this.gap = 0;
  this.a79 = 0;
  this.a6g = 0;
  this.a7A = 0;
  this.a7B = 0;
  this.a7C = 0;
  this.colors = null;
  this.dH = function() {
    this.to = true;
    this.a78 = 0;
    this.resize();
  }
  ;
  this.resize = function() {
    if (!this.to) {
      return;
    }
    var gz = 1.4;
    if (an.t < gz * an.ir) {
      this.t = Math.floor((m.n.uE() ? 0.94 : 0.43) * an.t);
    } else {
      this.ir = Math.floor((m.n.uE() ? 0.88 : 0.43) * an.ir);
      this.t = Math.floor(gz * this.ir);
    }
    this.ir = this.t / gz;
    this.gap = this.t / 32;
    this.a6g = Math.floor(0.25 * this.ir);
    this.a7A = (this.ir - this.a6g - 3 * this.gap) / 2;
    this.a7B = this.t - 3 * this.gap - this.a7A;
    this.a7C = (this.ir - this.a6g - 4 * this.gap) / 3;
  }
  ;
  this.a7D = function() {
    this.colors = [[0, 0, 0], [0, 0, 0]];
    var od = bY.dZ.data[103].value.split("");
    if (od.length < 6) {
      for (var ec = 2; ec >= 0; ec--) {
        this.colors[0][ec] = a7E(Math.random() * 256);
      }
    } else {
      for (var z = 2; z >= 0; z--) {
        this.colors[0][z] = a7E(4 * (10 * parseInt(od[2 * z]) + parseInt(od[2 * z + 1])));
      }
    }
    this.a7F();
  }
  ;
  this.a7G = function() {
    return [bB.ek(this.colors[0][0], 4), bB.ek(this.colors[0][1], 4), bB.ek(this.colors[0][2], 4)];
  }
  ;
  this.wt = function(kU, kV, deltaY) {
    var z;
    var lk = (an.t - this.t) / 2;
    var ll = (an.ir - this.ir) / 2 + this.a6g;
    kU -= lk;
    kV -= ll;
    if (kU < 0 || kV < 0 || kU >= this.t || kV >= this.ir - this.a6g) {
      return;
    }
    z = Math.floor(3 * kV / (this.ir - this.a6g));
    this.colors[this.a79][z] = a7E(this.colors[this.a79][z] + (deltaY < 0 ? 1 : -1) * Math.max(Math.abs(0.05 * deltaY), 1));
    bU.dO = true;
  }
  ;
  this.gV = function(kU, kV) {
    this.a78 = 0;
    var lk = (an.t - this.t) / 2;
    var ll = (an.ir - this.ir) / 2;
    kU -= lk;
    kV -= ll;
    if (kU < 0 || kV < 0 || kU >= this.t - 1 || kV >= this.ir - 1 || (kU > this.t - (0.4 * this.a6g + 3 * this.gap) && kV < this.a6g)) {
      this.to = false;
      bU.dO = true;
      return false;
    }
    if (kU < this.gap || kV < this.gap + this.a6g || kU >= this.t || kV >= this.ir - this.gap) {
      return true;
    }
    if (kU < this.gap + this.a7A) {
      if (kV < this.gap + this.a6g + this.a7A) {
        if (this.a79 !== 0) {
          this.a79 = 0;
          bU.dO = true;
        }
        return true;
      }
      return true;
    }
    if (kU < this.gap + this.a7A) {
      return true;
    }
    kU -= 2 * this.gap + this.a7A;
    if (kV < this.gap + this.a6g + this.a7C) {
      this.a78 = 1;
      this.colors[this.a79][0] = a7E(256 * kU / this.a7B);
      bU.dO = true;
      return true;
    }
    if (kV < 2 * this.gap + this.a6g + this.a7C) {
      return true;
    }
    if (kV < 2 * this.gap + this.a6g + 2 * this.a7C) {
      this.a78 = 2;
      this.colors[this.a79][1] = a7E(256 * kU / this.a7B);
      bU.dO = true;
      return true;
    }
    if (kV >= 3 * this.gap + this.a6g + 2 * this.a7C) {
      this.a78 = 3;
      this.colors[this.a79][2] = a7E(256 * kU / this.a7B);
      bU.dO = true;
      return true;
    }
    return true;
  }
  ;
  function a7E(a56) {
    return a56 < 0 ? 0 : a56 > 255 ? 255 : Math.floor(a56);
  }
  this.a7F = function() {
    for (var ec = 2; ec >= 0; ec--) {
      this.colors[0][ec] = a7E(this.colors[0][ec]);
    }
  }
  ;
  this.a7H = function() {
    var z, el;
    var od = "";
    for (z = 0; z < 3; z++) {
      el = bB.ek(this.colors[0][z], 4);
      if (el < 10) {
        od += "0";
      }
      od += el.toString();
    }
    return od;
  }
  ;
  this.wq = function(kU) {
    if (this.a78 === 0) {
      return;
    }
    kU -= 2 * this.gap + this.a7A + (an.t - this.t) / 2;
    this.colors[this.a79][this.a78 - 1] = a7E(256 * kU / this.a7B);
    bU.dO = true;
  }
  ;
  this.xE = function() {
    if (this.a78 > 0) {
      this.a78 = 0;
      this.a7F();
      bY.pY.pZ(103, this.a7H());
      bU.dO = true;
    }
  }
  ;
  this.qn = function() {
    var lk = (an.t - this.t) / 2;
    var ll = (an.ir - this.ir) / 2;
    qo.setTransform(1, 0, 0, 1, lk, ll);
    qo.fillStyle = p.mI;
    qo.fillRect(0, this.a6g, this.t, this.ir - this.a6g);
    qo.fillStyle = p.mU;
    qo.fillRect(0, 0, this.t, this.a6g);
    qo.fillStyle = p.mL;
    qo.lineWidth = bR.uH;
    qo.strokeStyle = p.mL;
    qo.strokeRect(-1, -1, this.t + 2, this.ir + 2);
    qo.fillRect(0, this.a6g, this.t, bR.uH);
    qo.font = b2.ow.q5(1, 0.31 * this.a6g);
    b2.ow.textBaseline(qo, 1);
    b2.ow.textAlign(qo, 1);
    qo.fillText("Choose Your Nation's Color!", Math.floor((this.t - this.gap - 0.4 * this.a6g) / 2), Math.floor(0.55 * this.a6g));
    this.a7I(0);
    qo.lineWidth = bR.uH;
    this.a7J(0);
    this.a7J(1);
    this.a7J(2);
    a9.a0g(Math.floor(lk + this.t - 0.4 * this.a6g - this.gap), Math.floor(ll + 0.3 * this.a6g), Math.floor(0.4 * this.a6g));
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
  ;
  this.a7I = function(z) {
    var h3 = this.colors[z][0];
    var qL = this.colors[z][1];
    var ec = this.colors[z][2];
    qo.fillStyle = "rgb(" + h3 + "," + qL + "," + ec + ")";
    qo.fillRect(this.gap, this.a6g + this.gap, this.a7A, 2 * this.a7A + this.gap);
    qo.lineWidth = bR.uH;
    qo.strokeStyle = p.mL;
    qo.strokeRect(this.gap, this.a6g + this.gap, this.a7A, 2 * this.a7A + this.gap);
    qo.fillStyle = (h3 + qL + ec < 0.4 * (3 * 255) && qL < 150) ? p.mL : p.mC;
    qo.font = b2.ow.q5(1, 0.32 * this.a7C);
    b2.ow.textAlign(qo, 1);
    b2.ow.textBaseline(qo, 1);
    qo.rotate(-Math.PI / 2);
    qo.fillText("National Color", Math.floor(-1.5 * this.gap - this.a6g - this.a7A), Math.floor(this.gap + 0.5 * this.a7A));
    qo.rotate(Math.PI / 2);
  }
  ;
  this.a7J = function(z) {
    var h3 = z === 0 ? 150 : z === 2 ? 30 : 0;
    var qL = z === 1 ? 130 : z === 2 ? 30 : 0;
    var ec = z === 2 ? 220 : 0;
    qo.fillStyle = "rgb(" + h3 + "," + qL + "," + ec + ")";
    qo.fillRect(2 * this.gap + this.a7A, this.a6g + this.gap + z * (this.gap + this.a7C), Math.floor(this.colors[this.a79][z] * this.a7B / 255), this.a7C);
    qo.strokeStyle = p.mL;
    qo.strokeRect(2 * this.gap + this.a7A, this.a6g + this.gap + z * (this.gap + this.a7C), this.a7B, this.a7C);
    qo.fillStyle = p.mL;
    qo.font = b2.ow.q5(1, 0.32 * this.a7C);
    b2.ow.textBaseline(qo, 1);
    b2.ow.textAlign(qo, 0);
    qo.fillText((z === 0 ? "Red: " : z === 1 ? "Green: " : "Blue: ") + this.colors[0][z].toString(), 3 * this.gap + this.a7A, Math.floor(this.a6g + this.gap + z * (this.gap + this.a7C) + 0.53 * this.a7C));
  }
  ;
}
function c7() {
  var a7K;
  var a7L;
  var a1v, a25, a2u, a7M, a7N, a7O, a7P;
  var a0U;
  var fontSize;
  var lV;
  var a7Q;
  var a7R = 0;
  var a7S;
  this.dH = function() {
    aN.setState(6);
    a7K = 0;
    a7L = 1;
    a7O = "rgba(0,220,120,0.4)";
    a7P = "rgba(0,0,0,0.8)";
    this.resize();
    bU.dO = true;
    a7Q = 0;
    a7S = false;
    a7T();
  }
  ;
  this.resize = function() {
    a25 = Math.floor((m.n.uE() ? 0.5 : 0.25) * an.oy);
    a2u = a25 + 12;
    a1v = Math.floor(0.125 * a25);
    a7N = a1v * 3;
    a7M = Math.floor(0.225 * a25);
    fontSize = Math.floor(0.3 * a1v);
    a0U = b2.ow.q5(0, fontSize);
  }
  ;
  this.a7U = function(eb) {
    a7R = eb;
  }
  ;
  function a7V() {
    return aq.kt.a7W[(a7Q + a7R) % aq.kt.a7X];
  }
  function a7T() {
    a7Q++;
    lV = bU.ds;
    if (aq.kt.a7Y(a7V(), 4)) {
      a7S = true;
      aq.a7Z.a7a(a7V());
    }
  }
  this.wV = function(wR) {
    if (wR === a7V()) {
      a7S = false;
      a7b();
    }
  }
  ;
  this.a7c = function(wR) {
    if (aN.wU() !== 6 || a7S) {
      return;
    }
    lV = bU.ds;
    a7S = true;
  }
  ;
  function a7d() {
    if (a7S) {
      if (bU.ds > lV + 12000) {
        g.wc(3250);
      }
      return;
    }
    if (bU.ds > lV + 12000) {
      a7b();
    }
  }
  function a7b() {
    if (a7Q === 0) {
      g.wc(3249);
      return;
    } else if (a7Q === aq.kt.a7X - 1) {
      a7Q = -1;
    }
    a7T();
  }
  this.gV = function(eP, eR) {
    var lk = Math.floor((an.t - a2u) / 2);
    var ll = Math.floor(0.5 * (an.ir - bR.gap - a1v - a7M)) + a1v + bR.gap;
    if (eP > lk && eP < lk + a2u && eR > ll && eR < ll + a7M) {
      this.xZ();
      aL.wq(eP, eR, false);
      return true;
    }
    return false;
  }
  ;
  this.xZ = function() {
    aq.kt.wf(3260);
    i.kt.we();
  }
  ;
  this.iC = function() {
    if (aN.wU() !== 6) {
      return;
    }
    a7d();
    a7e();
  }
  ;
  function a7e() {
    a7K += a7L * 0.07 * (a7K < 16 ? (5 + a7K) : a7K > 84 ? 105 - a7K : 17);
    if (a7K > 100) {
      a7K = 100;
      a7L = -1;
    } else if (a7K < 0) {
      a7K = 0;
      a7L = 1;
    }
    a7O = "rgba(0," + Math.floor(190 - 1.9 * a7K) + "," + Math.floor(120 - 1.2 * a7K) + "," + (0.4 + 0.004 * a7K) + ")";
    a7P = "rgba(0," + Math.floor(1.9 * a7K) + "," + Math.floor(1.2 * a7K) + "," + (0.8 - 0.004 * a7K) + ")";
    bU.dO = true;
  }
  this.qn = function() {
    var eP = Math.floor((an.t - a2u) / 2);
    var eR = Math.floor(0.5 * (an.ir - bR.gap - a1v - a7M));
    a7f(L(100), eR, 3, a7K / 100);
    a7g(eP, eR + a1v + bR.gap, a2u, a7M, L(101));
  }
  ;
  function a7g(eP, eR, t, ir, a1l) {
    qo.fillStyle = p.mG;
    qo.fillRect(eP, eR, t, ir);
    qo.lineWidth = 3;
    qo.strokeStyle = p.mL;
    qo.strokeRect(eP, eR, t, ir);
    var eI = Math.floor(0.3 * ir);
    b2.ow.textAlign(qo, 1);
    b2.ow.textBaseline(qo, 1);
    qo.font = b2.ow.q5(0, eI);
    qo.fillStyle = p.mL;
    qo.fillText(a1l, Math.floor(eP + t / 2), Math.floor(eR + ir / 2 + 0.1 * eI));
  }
  function a7f(title, eR, a3m, a7h) {
    qo.fillStyle = a7P;
    a7i(eR, a3m, 1);
    qo.fill();
    qo.fillStyle = a7O;
    a7i(eR, a3m, a7h);
    qo.fill();
    qo.strokeStyle = p.mL;
    a7i(eR, a3m, 1);
    qo.stroke();
    a7j(title, eR);
  }
  function a7j(a7k, eR) {
    b2.ow.textAlign(qo, 1);
    b2.ow.textBaseline(qo, 1);
    qo.font = a0U;
    qo.fillStyle = p.mL;
    qo.fillText(a7k, Math.floor(0.5 * an.t), Math.floor(eR + 0.58 * a1v));
  }
  function a7i(eR, a3m, a7h) {
    var lk = Math.floor((an.t - a25) / 2) + a7N;
    var ly = lk + Math.floor(a7h * (a25 - 2 * a7N));
    qo.lineWidth = a3m;
    qo.beginPath();
    qo.moveTo(lk, eR);
    qo.lineTo(ly, eR);
    qo.lineTo(Math.floor(lk - a7N + a7h * a25), eR + a1v);
    qo.lineTo(lk - a7N, eR + a1v);
    qo.closePath();
  }
}
function c8() {
  var dr = 0;
  this.dH = function() {
    aL.dH();
    dr = 0;
  }
  ;
  this.setState = function(a7l) {
    dr = a7l;
  }
  ;
  this.wU = function() {
    return dr;
  }
  ;
  this.a7m = function() {
    this.setState(8);
    aj.wg();
    i.rX();
  }
  ;
  this.xQ = function(d) {
    if (!bI.sL) {
      return false;
    }
    if (bU.ds < 400) {
      return;
    }
    if (d.key === "Enter" || d.key === "Escape") {
      if (this.a7n()) {
        return true;
      }
      if (d.key === "Enter") {
        if (dr === 0) {
          return true;
        } else if (dr === 7) {
          return true;
        }
      }
    }
    return false;
  }
  ;
  this.a7o = function() {
    bO.resize();
  }
  ;
  this.a7n = function() {
    if (bO.qK()) {
      return true;
    }
    return false;
  }
  ;
  this.gV = function(eP, eR) {
    if (!bI.sL) {
      return;
    }
    if (bO.gV(eP, eR)) {
      return;
    }
    if (dr === 6 && aM.gV(eP, eR)) {
      return;
    }
    if (dr === 2 && aO.gV(eP, eR)) {
      return;
    }
    if (bN.gV(eP, eR)) {
      return;
    }
    aG.gV(eP, eR);
    if (dr === 0) {} else if (dr === 7) {
      if (aj.gV(eP, eR)) {
        return;
      }
    }
  }
  ;
  this.wq = function(eP, eR) {
    if (!aG.a3y) {
      if (dr === 2 && aO.wq(eP, eR)) {
        aG.xF();
        return;
      }
      if (aL.wq(eP, eR, true)) {
        return;
      }
    }
    aG.wq(eP, eR);
  }
  ;
  this.click = function(eP, eR) {
    aG.xG();
  }
  ;
  this.wt = function(eP, eR, deltaY) {}
  ;
  this.a7p = function() {
    aL.a45();
    if (dr === 0) {} else if (dr === 7) {
      aj.resize();
    }
    bU.dO = true;
  }
  ;
  this.qn = function() {
    if (dr === 8 || dr === 10) {
      return;
    }
    qo.imageSmoothingEnabled = true;
    this.tO();
    if (dr !== 0) {
      aG.qn();
      aB.qn();
      this.a7q();
      bN.qn();
    }
    if (dr === 0) {} else if (dr === 2) {
      aO.qn();
    } else if (dr === 6) {
      aM.qn();
    } else if (dr === 7) {
      aj.qn();
    }
    bO.qn();
    i.qn();
  }
  ;
  this.tO = function() {
    if (!bI.sL) {
      qo.fillStyle = p.mC;
      qo.fillRect(0, 0, an.t, an.ir);
      return;
    }
    var a7r = an.t / bI.eT;
    var a7s = an.ir / bI.eU;
    var dy = a7r > a7s ? a7r : a7s;
    qo.setTransform(dy, 0, 0, dy, Math.floor((an.t - dy * bI.eT) / 2), Math.floor((an.ir - dy * bI.eU) / 2));
    qo.drawImage(bI.sN, 0, 0);
    qo.setTransform(1, 0, 0, 1, 0, 0);
    qo.fillStyle = p.mG;
    qo.fillRect(0, 0, an.t, an.ir);
  }
  ;
  this.a7q = function() {
    var eR = Math.floor(0.3 * an.ir);
    var h0 = aP.a7t("territorial.io");
    var gz = 1.75 * an.ir / h0.width;
    gz = (gz * h0.width) < (0.98 * an.t) ? (0.98 * an.t / h0.width) : gz;
    qo.globalAlpha = 0.15;
    qo.imageSmoothingEnabled = false;
    var eP = Math.floor(0.5 * (an.t - gz * h0.width));
    eP = Math.floor(eP / gz);
    var a1A = Math.floor(eR - 0.5 * h0.height * gz);
    a1A = Math.floor(a1A / gz);
    qo.setTransform(gz, 0, 0, gz, eP, a1A);
    qo.drawImage(h0, eP, a1A);
    qo.setTransform(1, 0, 0, 1, 0, 0);
    qo.globalAlpha = 1;
    qo.imageSmoothingEnabled = true;
  }
  ;
}
function cb() {
  this.a7u = 0;
  this.a7v = 0;
  var a0;
  var a7w;
  var a7x;
  var a7y;
  this.dH = function() {
    if (aN.wU() !== 7) {
      return;
    }
    a0 = b7.a0;
    a7w = 0;
    a7x = bU.ds + 4500;
    if (aq.dataDecoder.a7z()) {
      a7y = 2;
    } else {
      a7y = 0;
    }
    aN.setState(10);
    qn();
  }
  ;
  this.kz = function() {
    if (a7y > 0 && bU.ds > a7x) {
      dP();
    }
  }
  ;
  function dP() {
    a7y--;
    a7x += 4500;
    if (bU.a80 === 0 && bU.jK() === 0) {
      if (a7y === 0 && aq.kt.wX < aq.kt.a81) {
        aq.kt.wX += aq.kt.a82;
      }
      aq.kt.a7Y(aq.kt.wX, 5);
    }
  }
  this.a83 = function() {
    var fo, z;
    if (aN.wU() !== 10) {
      return false;
    }
    fo = b7.a0;
    z = b7.o0;
    aq.dataDecoder.a84(a0);
    a0 = null;
    b7.dH(fo);
    b7.o0 = z;
    return true;
  }
  ;
  this.a85 = function() {
    if (aN.wU() !== 10) {
      return;
    }
    a7w++;
    if (a7w >= 2) {
      aq.dataDecoder.a84(a0);
      a0 = null;
    }
  }
  ;
  function qn() {
    qo.imageSmoothingEnabled = true;
    aN.tO();
    a86();
  }
  function a86() {
    var h0 = aP.a7t("loading");
    var lw = (m.n.uE() ? 0.396 : 0.25) * an.oy / h0.width;
    qo.setTransform(lw, 0, 0, lw, Math.floor((an.t - lw * h0.width) / 2), Math.floor((an.ir - lw * h0.height) / 2));
    qo.imageSmoothingEnabled = false;
    qo.drawImage(h0, 0, 0);
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
}
function cY() {
  var a87;
  var a88;
  var a89;
  var a8A;
  var a8B;
  var a8C;
  var a8D;
  var a8E = 48;
  var os;
  var a8F;
  var a8G = 128;
  var a8H;
  var a8I;
  var a8J;
  var a8K;
  var a8L = [0, 0, 0, 0];
  var a8M;
  var a8N;
  var a8O;
  var a8P;
  var a8Q;
  this.dI = function() {
    a8K = [L(102), L(103), L(104), L(105)];
  }
  ;
  this.dH = function() {
    a8Q = 0;
    a8H = -1;
    aN.setState(7);
    os = [];
    this.resize();
    a8R();
    bU.dO = true;
  }
  ;
  this.xY = function() {
    this.wg();
    aq.kt.wf(3240);
    aN.setState(0);
    i.j(5, 5);
  }
  ;
  this.wg = function() {
    os = [];
    a8D = [];
  }
  ;
  function a8R() {
    var z;
    a8D = new Array(13);
    for (z = a8D.length; z >= 0; z--) {
      a8D[z] = document.createElement("canvas");
      a8D[z].width = a8E;
      a8D[z].height = a8E;
    }
    for (z = 0; z < 7; z++) {
      a8S(z + 2);
    }
    a8T(7, aP.get(4));
    a8U(8, aY.tl.u6 + aY.tl.uN);
    a8U(9, aY.tl.u6 + aY.tl.uL);
    a8U(10, 1024 - aY.tl.u3 + 0);
    a8T(11, aP.get(19));
    a8T(12, aP.get(20));
  }
  function a8U(z, na) {
    var h1 = a8D[z].getContext("2d", {
      alpha: true
    });
    h1.clearRect(0, 0, a8E, a8E);
    aY.sQ.uI(na, h1, 0, 0, a8E);
  }
  function a8T(z, y6) {
    var h1 = a8D[z].getContext("2d", {
      alpha: true
    });
    h1.clearRect(0, 0, a8E, a8E);
    var zoom = a8E / y6.width;
    var dt = a8E / y6.height;
    zoom = dt < zoom ? dt : zoom;
    h1.imageSmoothingEnabled = true;
    h1.setTransform(zoom, 0, 0, zoom, Math.floor((a8E - zoom * y6.width) / 2), Math.floor((a8E - zoom * y6.height) / 2));
    h1.drawImage(y6, 0, 0);
    h1.setTransform(1, 0, 0, 1, 0, 0);
  }
  function a8S(fj) {
    var h1 = a8D[fj - 2].getContext("2d", {
      alpha: true
    });
    var a8V = 1.5 * Math.PI;
    var a8W;
    var ed = Math.floor(0.5 * a8E);
    var h3 = Math.floor(0.48 * a8E);
    h1.lineWidth = 2;
    h1.strokeStyle = p.mL;
    h1.clearRect(0, 0, a8E, a8E);
    for (var z = 0; z < fj; z++) {
      a8W = a8V + 2 * Math.PI / fj;
      a8X(z + 1, ed, h3, a8V, a8W, h1);
      if (z !== 0) {
        a8Y(ed, h3, a8V, h1);
      }
      a8V = a8W;
    }
    a8Y(ed, h3, 1.5 * Math.PI, h1);
    a8Z(ed, h3, h1);
  }
  function a8X(z, ed, h3, a8V, a8W, h1) {
    h1.fillStyle = bV.a8a[z];
    h1.beginPath();
    h1.arc(ed, ed, h3, a8V, a8W);
    h1.lineTo(ed, ed);
    h1.fill();
  }
  function a8Y(ed, h3, a8b, h1) {
    h1.beginPath();
    h1.moveTo(ed, ed);
    h1.lineTo(ed + Math.cos(a8b) * h3, ed + Math.cos(a8b + 1.5 * Math.PI) * h3);
    h1.stroke();
  }
  function a8Z(ed, h3, h1) {
    h1.beginPath();
    h1.arc(ed, ed, h3, 0, 2 * Math.PI);
    h1.stroke();
  }
  this.a1t = function() {
    return a8J;
  }
  ;
  this.resize = function() {
    var a8c, sB, a3A, a8d;
    a89 = [0, 0];
    a8F = [0, 0, 0, 0];
    if (m.n.uE()) {
      a8I = Math.floor(0.8 * 0.4 * an.oy);
      a8J = Math.floor(0.56 * a8I);
      a8F[0] = bR.gap;
      if (an.t < an.ir) {
        a8F[1] = a8J + 2 * bR.gap;
        a8F[2] = an.t - 3 * a8F[0];
        a8F[3] = an.ir - 3 * bR.gap - a8J;
        a8N = Math.floor(0.95 * a8J);
        a8O = Math.floor((an.t - a8I - bR.gap) / 2);
        a8P = Math.floor(bR.gap + a8J / 2);
      } else {
        a8F[1] = bR.gap;
        a8F[2] = an.t - 3 * bR.gap - a8I;
        a8F[3] = an.ir - 2 * bR.gap;
        a8N = Math.floor(0.8 * a8I);
        if (a8F[3] - a8J < a8I) {
          a8N = Math.floor(0.8 * (a8F[3] - a8J));
          a8N = a17(a8J, a8N);
        }
        a8O = Math.floor(an.t - a8I / 2 - bR.gap);
        a8P = Math.floor(bR.gap + a8J + (a8F[3] - a8J) / 2);
        a8P = a17(a8P, Math.floor(a8J + 2 * bR.gap + a8N / 2));
      }
    } else {
      a8I = Math.floor(0.72 * 0.28 * an.oy);
      a8J = Math.floor(0.56 * a8I);
      a8F[2] = Math.floor(0.5 * an.t);
      a8F[3] = Math.floor(0.5 * an.ir);
      a8F[1] = Math.floor(0.9 * 0.5 * (an.ir - a8F[3]));
      a8F[0] = Math.floor((an.t - a8F[2]) / 2);
      a8N = Math.floor(0.75 * a8J);
      a8O = Math.floor(an.t / 2);
      a8P = Math.floor(a8F[1] + a8F[3] + (an.ir - a8F[3] - a8F[1]) / 2);
    }
    a8M = b2.ow.q5(1, 0.65 * a8J / 4);
    a8c = sB = 1;
    a3A = 1;
    while (a8c * sB < os.length) {
      if (a8F[2] / (a8c + 1) > a8F[3] / (sB + 1)) {
        a8c++;
      } else {
        sB++;
      }
    }
    a3A = (a8F[2] - (a8c - 1) * bR.gap) / a8c;
    a8d = (a8F[3] - (sB - 1) * bR.gap) / sB;
    if (a3A < a8d) {
      a87 = a3A;
    } else {
      a87 = a8d;
    }
    a88 = Math.floor(a87);
    a8C = b2.ow.q5(1, 0.5 * a87 / 5);
    a89[0] = a8c;
    a89[1] = sB;
    a8A = a8F[0] + Math.floor((a8F[2] - a89[0] * a87 - (a89[0] - 1) * bR.gap) / 2);
    a8B = a8F[1] + Math.floor((a8F[3] - a89[1] * a87 - (a89[1] - 1) * bR.gap) / 2);
  }
  ;
  this.pZ = function(a8e, fo) {
    var z, dt, h0;
    var eI = os.length;
    a8L = a8e;
    for (z = 0; z < fo.length; z++) {
      h0 = a8f(fo[z].mapID, fo[z].mapSeed);
      os.push({
        a8h: fo[z].id,
        zZ: fo[z].gameMode,
        za: fo[z].isContest,
        a8j: fo[z].mapID,
        a8k: fo[z].mapSeed,
        joined: fo[z].joinCount,
        a1q: fo[z].timeLeft,
        a8m: fo[z].maxPlayers,
        h0: h0,
        a8n: fo[z].a8n,
        a8o: fo[z].a8o,
        a8p: fo[z].a8p
      });
    }
    for (z = eI - 1; z >= 0; z--) {
      os.shift();
    }
    if (a8H !== -1) {
      dt = a8H;
      a8H = -1;
      for (z = os.length - 1; z >= 0; z--) {
        if (os[z].a8h === dt) {
          a8H = dt;
          break;
        }
      }
    }
    if (os.length > a8Q || os.length < a8Q) {
      a8Q = os.length;
      this.resize();
    }
    this.a8q();
    bU.dO = true;
  }
  ;
  this.a8q = function() {
    for (var z = os.length - 1; z >= 0; z--) {
      if (os[z].h0 === null) {
        setTimeout(a8r, 0);
      }
    }
  }
  ;
  function a8r() {
    if (aN.wU() !== 7) {
      return;
    }
    var eb = -1;
    for (var z = os.length - 1; z >= 0; z--) {
      if (os[z].h0 === null) {
        eb = z;
        break;
      }
    }
    if (eb === -1) {
      return;
    }
    var hA = a8f(os[eb].a8j, os[eb].a8k);
    if (hA !== null) {
      os[eb].h0 = hA;
      bU.dO = true;
      return;
    }
    var el = {
      eT: bI.eT,
      eU: bI.eU,
      sN: bI.sN,
      sJ: bI.sJ,
      sK: bI.sK,
      sO: bI.sO,
      fz: bI.fz,
      a8g: bI.a8g
    };
    bI.loadMap(os[eb].a8j, os[eb].a8k);
    bI.sM.a8s();
    var y6 = document.createElement("canvas");
    y6.width = a8G;
    y6.height = a8G;
    var h1 = y6.getContext("2d", {
      alpha: false
    });
    var zoom = a8G / bI.eT;
    var dt = a8G / bI.eU;
    if (dt > zoom) {
      zoom = dt;
    }
    h1.imageSmoothingEnabled = true;
    h1.setTransform(zoom, 0, 0, zoom, (a8G - zoom * bI.eT) / 2, (a8G - zoom * bI.eU) / 2);
    h1.drawImage(bI.sN, 0, 0);
    bI.eT = el.eT;
    bI.eU = el.eU;
    bI.sN = el.sN;
    bI.sJ = el.sJ;
    bI.sK = el.sK;
    bI.sO = el.sO;
    bI.fz = el.fz;
    bI.a8g = el.a8g;
    os[eb].h0 = y6;
    bU.dO = true;
  }
  function a8f(a8j, a8k) {
    for (var z = os.length - 1; z >= 0; z--) {
      if (os[z].h0 !== null && os[z].a8j === a8j && os[z].a8k === a8k) {
        return os[z].h0;
      }
    }
    return null;
  }
  this.gV = function(eP, eR) {
    var h3 = (eP - a8O) * (eP - a8O) + (eR - a8P) * (eR - a8P);
    if (4 * h3 <= a8N * a8N) {
      this.xY();
      aL.wq(eP, eR, false);
      return true;
    }
    return a8t(eP, eR);
  }
  ;
  function a8t(eP, eR) {
    var eb, ec, lk, ll;
    if (os.length === 0) {
      return false;
    }
    var z = 0;
    ll = a8B;
    for (ec = 0; ec < a89[1]; ec++) {
      lk = a8A;
      for (eb = 0; eb < a89[0]; eb++) {
        if (eP > lk && eP < lk + a87 && eR > ll && eR < ll + a87) {
          aq.a7Z.a8u(os[z].a8h);
          if (os[z].a8h !== a8H) {
            a8H = os[z].a8h;
          } else {
            a8H = -1;
          }
          bU.dO = true;
          return true;
        }
        z++;
        if (z >= os.length) {
          return false;
        }
        lk += a87 + bR.gap;
      }
      ll += a87 + bR.gap;
    }
    return false;
  }
  this.qn = function() {
    var eb, ec;
    var eP;
    var z = 0;
    var eR = a8B;
    qo.imageSmoothingEnabled = true;
    qo.lineWidth = 3;
    a8v();
    a8w();
    if (os.length === 0) {
      return;
    }
    for (ec = 0; ec < a89[1]; ec++) {
      eP = a8A;
      for (eb = 0; eb < a89[0]; eb++) {
        a8x(z, Math.floor(eP), Math.floor(eR));
        z++;
        if (z >= os.length) {
          return;
        }
        eP += a87 + bR.gap;
      }
      eR += a87 + bR.gap;
    }
  }
  ;
  function a8w() {
    qo.fillStyle = p.mG;
    qo.fillRect(an.t - a8I - bR.gap, bR.gap, a8I, a8J);
    if (a8H >= 0) {
      qo.fillStyle = p.md;
      qo.fillRect(an.t - a8I - bR.gap, bR.gap, a8I, Math.floor(0.25 * a8J));
    } else {
      qo.fillStyle = p.n4;
      qo.fillRect(an.t - a8I - bR.gap, bR.gap + Math.floor(0.25 * a8J), a8I, Math.floor(0.25 * a8J));
    }
    qo.strokeStyle = p.mL;
    qo.strokeRect(an.t - a8I - bR.gap, bR.gap, a8I, a8J);
    qo.fillStyle = p.mL;
    qo.font = a8M;
    b2.ow.textBaseline(qo, 1);
    var a8y = Math.floor(0.04 * a8I);
    var a0j = Math.floor(0.08 * a8J);
    var eR;
    for (var z = 3; z >= 0; z--) {
      eR = Math.floor(bR.gap + (z + 1) * (a8J + 2 * a0j) / 5 - a0j);
      b2.ow.textAlign(qo, 0);
      qo.fillText(a8K[z], an.t - a8I - bR.gap + a8y, eR);
      b2.ow.textAlign(qo, 2);
      qo.fillText(b2.w0.z6(a8L[z]), an.t - bR.gap - a8y, eR);
    }
  }
  function a8x(z, eP, eR) {
    var zoom, ec, a8z, a90, a91, ll, lz, a92;
    if (os[z].h0 === null) {
      qo.fillStyle = p.mG;
      qo.fillRect(eP, eR, a88, a88);
    } else {
      zoom = a88 / a8G;
      qo.setTransform(zoom, 0, 0, zoom, eP, eR);
      qo.drawImage(os[z].h0, 0, 0);
      qo.setTransform(1, 0, 0, 1, 0, 0);
    }
    if (a8H === os[z].a8h) {
      a0g(eP, eR);
      qo.lineWidth = 3;
      qo.fillStyle = p.mf;
    } else {
      qo.fillStyle = p.mE;
    }
    // a91 = Math.floor(a87 / 4);
    a91 = Math.floor(a87 / 4 * 1.2);
    qo.fillRect(eP, eR, a91, a91);
    a92 = Math.floor(eR + 0.8 * a87);
    qo.fillRect(eP, a92, a88, Math.floor(a87 / 5));
    a93(z, eP, eR);
    // var a94 = new Array(os[z].a8n);
    // if (os[z].a8n) {
    //   a8z = 0;
    //   for (ec = 0; ec < os[z].a8n; ec++) {
    //     os[z].a8o[ec] = b2.tU.yI(os[z].a8o[ec], a8C, 0.4 * a87);
    //     a94[ec] = (os[z].a8o[ec] === "" ? L(106) : ("[" + os[z].a8o[ec] + "]: ")) + os[z].a8p[ec];
    //   }
    //   for (ec = 0; ec < os[z].a8n; ec++) {
    //     a8z = Math.max(a8z, aD.measureText(a94[ec], a8C));
    //   }
    //   a8z += 0.05 * a87;
    //   ec = os[z].a8n === 5;
    //   ll = ec ? eR + a91 : Math.max(eR + 0.8 * a87 - 0.11 * os[z].a8n * a87, eR + a91);
    //   lz = ec ? a92 : Math.min(ll + 0.11 * os[z].a8n * a87 + 0.05 * a87, a92);
    //   qo.fillRect(eP, ll, a8z, lz - ll);
    // }
    if (os[z].zZ != 8) {
      let fontParts = a8C.split(' ');
      fontParts[1] = '60px';
      let newFont = fontParts.join(' ');
      qo.font = newFont;

      b2.ow.textBaseline(qo, 1);
      b2.ow.textAlign(qo, 1);
      // qo.fillStyle = p.mz;
      // qo.fillText(os[z].joined.toString(), Math.floor(eP + 0.22 * a87), Math.floor(eR + 0.9 * a87));
      qo.fillStyle = "rgb(120, 255, 120)"
      qo.fillText(os[z].a8h.toString(), Math.floor(eP + 0.5 * a87), Math.floor(eR + 0.5 * a87));
      // qo.fillText(os[z].a8h.toString(), Math.floor(eP + 0.465 * a87), Math.floor(eR + 0.9 * a87));
      // qo.fillStyle = p.mL;
      // for (ec = 0; ec < os[z].a8n; ec++) {
      //   qo.fillText(a94[os[z].a8n - ec - 1], Math.floor(eP + 0.03 * a87), Math.floor(eR + 0.77 * a87 - ec * 0.11 * a87));
      // }
    }
    else {
      let fontParts = a8C.split(' ');
      fontParts[1] = '20px';
      let newFont = fontParts.join(' ');
      qo.font = newFont;

      b2.ow.textBaseline(qo, 1);
      b2.ow.textAlign(qo, 1);
      qo.fillStyle = "rgb(255, 50, 50)"
      qo.fillText("Do Not Join", Math.floor(eP + 0.5 * a87), Math.floor(eR + 0.5 * a87));
    }
    
    qo.font = a8C;
    b2.ow.textAlign(qo, 2);
    qo.fillStyle = p.ml;
    qo.fillText(os[z].a1q.toString(), Math.floor(eP + 0.81 * a87), Math.floor(eR + 0.9 * a87));
    qo.strokeStyle = a8H === os[z].a8h ? p.me : p.mN;
    qo.strokeRect(eP, eR, a88, a88);
    a90 = Math.floor(0.16 * a87 * 1.2);
    zoom = a90 / a8E;
    qo.setTransform(zoom, 0, 0, zoom, Math.floor(eP + 0.33 * a90), Math.floor(eR + 0.33 * a90));
    if (a8D.length > os[z].zZ) {
      qo.drawImage(a8D[os[z].zZ], 0, 0);
    }
    qo.setTransform(zoom, 0, 0, zoom, Math.floor(eP + 0.15 * a90), Math.floor(eR + a87 - 1.08 * a90));
    // qo.drawImage(a8D[11], 0, 0);
    qo.setTransform(zoom, 0, 0, zoom, Math.floor(eP + a87 - 1.05 * a90), Math.floor(eR + a87 - 1.15 * a90));
    qo.drawImage(a8D[12], 0, 0);
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
  function a93(z, eP, eR) {
    if (!os[z].za) {
      return;
    }
    var ed = aP.get(4);
    var zoom = 0.5 * a87 / ed.width;
    qo.setTransform(zoom, 0, 0, zoom, Math.floor(eP + (a87 - zoom * ed.width) / 2), Math.floor(eR + (a87 - zoom * ed.height) / 2));
    qo.globalAlpha = 0.6;
    qo.drawImage(ed, 0, 0);
    qo.globalAlpha = 1;
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
  function a0g(eP, eR) {
    var q7 = Math.floor(0.2 * a88);
    var q8 = Math.floor(0.3 * q7);
    qo.fillStyle = p.mf;
    qo.fillRect(eP + a88 - q7, eR, q7, q7);
    qo.fillStyle = p.mC;
    qo.fillRect(eP + a88 - q7, eR, 2, q7);
    qo.fillRect(eP + a88 - q7, eR + q7 - 2, q7, 2);
    a9.a0g(eP + a88 - q7 + q8, eR + q8, q7 - 2 * q8);
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
  function a8v() {
    var h3 = Math.floor(0.5 * a8N);
    qo.fillStyle = p.mG;
    qo.beginPath();
    qo.arc(a8O, a8P, h3, 0, 2 * Math.PI);
    qo.fill();
    qo.strokeStyle = p.mL;
    qo.beginPath();
    qo.arc(a8O, a8P, h3, 0, 2 * Math.PI);
    qo.stroke();
    var a95 = aP.get(0).height;
    var zoom = 0.6 * a8N / a95;
    qo.setTransform(zoom, 0, 0, zoom, Math.floor(a8O - 0.56 * zoom * aP.get(0).width), Math.floor(a8P - 0.5 * zoom * a95));
    qo.drawImage(aP.get(0), 0, 0);
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
}
function c9() {
  var a96 = [0, 0, 0, 0];
  this.jp = [{
    eL: 0,
    fj: 512
  }];
  this.dH = function() {
    ak.to = false;
    aN.setState(2);
    this.resize();
    bU.dO = true;
  }
  ;
  this.wg = function() {}
  ;
  this.resize = function() {
    a96[2] = Math.floor((m.n.uE() ? 0.49 : 0.4) * an.oy);
    a96[1] = Math.floor((an.ir - a96[2] / 6 - this.jp.length * (bR.gap + a96[2] / 10)) / 2);
    a96[0] = Math.floor((an.t - a96[2]) / 2);
    if (ak.to) {
      ak.resize();
    }
  }
  ;
  this.a97 = function(zZ) {
    var z;
    if (zZ > 6) {
      this.jp = [{
        eL: 0,
        fj: 512
      }];
    } else {
      this.jp = [];
      for (z = 0; z < zZ + 2; z++) {
        this.jp.push({
          eL: 0,
          fj: 0
        });
      }
      this.a98();
    }
    aq.kt.wX = 0;
  }
  ;
  this.a99 = function(a9A, a9B) {
    var z;
    var eI = a9A.length;
    for (z = 0; z < eI; z++) {
      this.jp[z].eL = a9A[z];
      this.jp[z].fj = a9B[z];
    }
  }
  ;
  this.a9C = function(qL) {
    var z, eI;
    if (qL.tb.length !== 1) {
      return;
    }
    eI = this.jp.length;
    qL.a9A = new Array(eI);
    qL.a9B = new Array(eI);
    for (z = 0; z < eI; z++) {
      qL.a9A[z] = this.jp[z].eL;
      qL.a9B[z] = this.jp[z].fj;
    }
  }
  ;
  this.xa = function() {
    bU.dO = true;
    if (ak.to) {
      ak.to = false;
      return;
    }
    this.wg();
    aN.setState(0);
    i.j(5, 5);
  }
  ;
  this.zd = function() {
    var z, fj;
    if (ay.jh) {
      return ay.ji.a9D;
    }
    fj = 0;
    for (z = this.jp.length - 1; z >= 0; z--) {
      fj += this.jp[z].fj;
    }
    return fj;
  }
  ;
  this.wq = function(eP, eR) {
    if (ak.to && ak.wq(eP, eR)) {
      return true;
    }
    var o0 = this.xL(eP, eR);
    if (o0 === -1) {
      return false;
    }
    return true;
  }
  ;
  this.a9E = function() {
    aq.kt.wX = 0;
    aN.a7m();
    if (ay.jh) {
      ay.a9F();
    } else {
      var eb = this.jp.length - 2;
      eb = eb < 0 ? 7 : eb;
      a1.gameInit(Math.floor(Math.random() * 16384), 0, [{
        name: bY.dZ.data[122].value,
        a9G: b2.color.yB(bY.kt.rW()),
        a9H: 0
      }], eb, false, false);
    }
  }
  ;
  this.gV = function(eP, eR) {
    if (ak.to && !ay.jh) {
      return ak.gV(eP, eR);
    }
    var o0 = this.xL(eP, eR);
    var z, eb, max, iU, q7;
    if (o0 === -1) {
      return false;
    }
    if (o0 === 0) {
      this.xa();
      return true;
    }
    if (o0 === 1) {
      if (ay.jh) {
        ay.xF();
        bU.dO = true;
      } else {
        ak.show();
      }
      return true;
    }
    if (o0 === 100) {
      ax.a9I();
      return true;
    }
    if (o0 === 2) {
      this.wg();
      this.a9E();
      return true;
    }
    if (ay.jh) {
      return false;
    }
    if (o0 === 27) {
      if (this.jp.length < 8) {
        this.jp.push({
          eL: 0,
          fj: a1.eF
        });
        this.a98();
        this.resize();
        bU.dO = true;
      }
      return true;
    }
    z = Math.floor((o0 - 3) / 3);
    if (o0 % 3 === 0) {
      if (this.jp.length > 1) {
        this.jp.splice(z, 1);
        this.resize();
        bU.dO = true;
      }
      return true;
    }
    q7 = (a96[2] - a96[2] / 10 - 2 * bR.gap) / 2;
    if (o0 % 3 === 1) {
      if (z === 0 && this.jp[z].fj === 1) {
        return true;
      }
      if (eP < a96[0] + a96[2] - 1.5 * q7 - bR.gap) {
        this.jp[z].eL--;
      } else {
        this.jp[z].eL++;
      }
      if (this.jp[z].eL < 0) {
        this.jp[z].eL = 5;
      } else if (this.jp[z].eL > 5) {
        this.jp[z].eL = 0;
      }
      bU.dO = true;
      return true;
    }
    bU.dO = true;
    iU = ((eP - (a96[0] + a96[2] - q7)) / q7 - 0.5);
    if (iU < 0) {
      iU = -(iU * iU);
    } else {
      iU = iU * iU;
    }
    iU = Math.floor(iU * a1.eF);
    iU = iU === 0 ? 1 : iU;
    max = a1.eF;
    for (eb = this.jp.length - 1; eb >= 0; eb--) {
      if (z !== eb) {
        max -= this.jp[eb].fj;
      }
    }
    if (iU < 0) {
      if (this.jp[z].fj === 1) {
        this.jp[z].fj = max;
        return true;
      }
    } else {
      if (this.jp[z].fj === max) {
        this.jp[z].fj = 1;
        return true;
      }
    }
    this.jp[z].fj += iU;
    if (this.jp[z].fj < 1) {
      this.jp[z].fj = 1;
    } else if (this.jp[z].fj > max) {
      this.jp[z].fj = max;
    }
    return true;
  }
  ;
  this.a98 = function() {
    var fj = Math.floor(a1.eF / this.jp.length);
    var a9J = a1.eF % this.jp.length;
    for (var z = this.jp.length - 1; z >= 0; z--) {
      this.jp[z].fj = fj;
    }
    this.jp[0].fj += a9J;
  }
  ;
  this.xL = function(eP, eR) {
    var z;
    var q7 = (a96[2] - 3 * bR.gap) / 4;
    var a32 = a96[2] / 6;
    if (eP < a96[0] || eR < a96[1] || eP >= a96[0] + a96[2]) {
      return -1;
    }
    if (eR < a96[1] + a32) {
      if (eP < a96[0] + q7) {
        return 0;
      }
      if (eP < a96[0] + q7 + bR.gap) {
        return -1;
      }
      if (eP < a96[0] + 2 * q7 + bR.gap) {
        return 100;
      }
      if (eP < a96[0] + 2 * (q7 + bR.gap)) {
        return -1;
      }
      if (eP < a96[0] + 3 * q7 + 2 * bR.gap) {
        return 1;
      }
      if (eP < a96[0] + 3 * (q7 + bR.gap)) {
        return -1;
      }
      return 2;
    }
    var a9K = a96[2] / 10;
    q7 = (a96[2] - a9K - 2 * bR.gap) / 2;
    var ll;
    for (z = 0; z < this.jp.length; z++) {
      ll = a96[1] + a32 + bR.gap + z * (a9K + bR.gap);
      if (eR < ll) {
        return -1;
      }
      if (eR > ll + a9K) {
        continue;
      }
      if (eP < a96[0] + a9K) {
        return 3 + z * 3;
      }
      if (eP < a96[0] + a9K + bR.gap) {
        return -1;
      }
      if (eP < a96[0] + a96[2] - q7 - bR.gap) {
        return 4 + z * 3;
      }
      if (eP < a96[0] + a96[2] - q7) {
        return -1;
      }
      return 5 + z * 3;
    }
    if (this.jp.length < 8) {
      ll = a96[1] + a32 + bR.gap + this.jp.length * (a9K + bR.gap);
      if (eR < ll || eR > ll + a9K || eP > a96[0] + a9K) {
        return -1;
      }
      return 3 + 8 * 3;
    }
    return -1;
  }
  ;
  this.qn = function() {
    var z;
    qo.lineWidth = bR.uH;
    b2.ow.textAlign(qo, 1);
    b2.ow.textBaseline(qo, 1);
    var q7 = (a96[2] - 3 * bR.gap) / 4;
    var a32 = a96[2] / 6;
    a7g(a96[0], a96[1], q7, a32, "rgba(128,0,0,0.75)", 0.25, L(101), -1, -1);
    a7g(a96[0] + q7 + bR.gap, a96[1], q7, a32, "rgba(128,0,128,0.75)", 0.16, L(107), -1, -1);
    a7g(a96[0] + 2 * (q7 + bR.gap), a96[1], q7, a32, "rgba(" + (ay.jh ? 128 : 0) + ",128,128,0.75)", 0.25, ay.jh ? L(108) : L(109), -1, -1);
    a7g(a96[0] + a96[2] - q7, a96[1], q7, a32, "rgba(0,128,0,0.75)", 0.25, L(110), -1, -1);
    if (ay.jh) {
      return;
    }
    var a9K = a96[2] / 10;
    q7 = (a96[2] - a9K - 2 * bR.gap) / 2;
    var ll;
    for (z = 0; z < this.jp.length; z++) {
      ll = a96[1] + a32 + bR.gap + z * (a9K + bR.gap);
      a7g(a96[0], ll, a9K, a9K, this.jp.length > 1 ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0, null, -1);
      if (this.jp.length > 1) {
        a9L(a96[0], ll, a9K, false);
      }
      a7g(a96[0] + a9K + bR.gap, ll, q7, a9K, p.mI, 0.4, this.a9M(z), this.jp[z].eL, -1);
      a7g(a96[0] + a96[2] - q7, ll, q7, a9K, p.mI, 0.4, this.a9N(z), -1, this.jp[z].fj);
    }
    if (this.jp.length < 8) {
      ll = a96[1] + a32 + bR.gap + this.jp.length * (a9K + bR.gap);
      a7g(a96[0], ll, a9K, a9K, "rgba(0,128,20,0.75)", 0, null, -1, -1);
      a9L(a96[0], ll, a9K, true);
    }
    if (ak.to) {
      ak.qn();
    }
  }
  ;
  this.a9M = function(z) {
    if (z === 0 && this.jp[z].fj === 1) {
      return L(111);
    }
    return a2.jb[this.jp[z].eL];
  }
  ;
  this.a9N = function(z) {
    return this.jp[z].fj === 1 ? L(112) : L(113, [this.jp[z].fj]);
  }
  ;
  function a9L(eP, eR, gu, a9O) {
    qo.fillStyle = p.mL;
    var q7 = a17(2, Math.floor((a9O ? 0.5 : 0.35) * gu));
    q7 -= q7 % 2;
    var a32 = a17(2, Math.floor(0.1 * gu));
    a32 -= a32 % 2;
    var lk = Math.floor((gu - q7) / 2);
    var ly = Math.floor(lk + (q7 - a32) / 2);
    qo.fillRect(eP + lk, eR + ly, q7, a32);
    if (a9O) {
      qo.fillRect(eP + ly, eR + lk, a32, q7);
    }
  }
  function a7g(eP, eR, t, ir, a56, xo, a1l, iU, fj) {
    qo.fillStyle = a56;
    qo.fillRect(eP, eR, t, ir);
    if (iU >= 0) {
      a9P(eP, eR, t, ir, iU);
    }
    if (fj > 0) {
      a9Q(eP, eR, t, ir, fj);
    }
    qo.strokeStyle = p.mL;
    qo.strokeRect(eP, eR, t, ir);
    if (xo !== 0) {
      qo.fillStyle = p.mL;
      qo.font = b2.ow.q5(1, xo * ir);
      qo.fillText(a1l, Math.floor(eP + t / 2), Math.floor(eR + 0.52 * ir));
    }
  }
  function a9P(eP, eR, t, ir, iU) {
    qo.fillStyle = "rgba(" + (22 * iU) + "," + (110 - 22 * iU) + ",0,0.75)";
    qo.fillRect(eP, eR, (1 + iU) * t / 6, ir);
  }
  function a9Q(eP, eR, t, ir, fj) {
    qo.fillStyle = "rgba(255,255,255,0.3)";
    qo.fillRect(eP, eR, fj * t / a1.eF, ir);
  }
}
function cA() {
  var a9R;
  var h0;
  var vW;
  var a9S;
  this.dH = function() {
    if (h0 === undefined) {
      a9T();
    }
  }
  ;
  this.get = function(o0) {
    return h0[o0];
  }
  ;
  this.a7t = function(name) {
    for (var z = vW.length - 1; z >= 0; z--) {
      if (vW[z] === name) {
        return h0[z];
      }
    }
    return a9S;
  }
  ;
  this.qP = function() {
    return a9R <= 0;
  }
  ;
  this.a9U = function() {
    a9R = 0;
    a9V();
  }
  ;
  function a9T() {
    a9R = 23;
    h0 = new Array(a9R);
    vW = new Array(a9R);
    a9W();
    a9X();
    a9Y(0, "exit", 6, "iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC");
    a9Y(1, "victory", 6, "iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg==");
    a9Y(2, "defeat", 6, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    a9Y(3, "orders", 6, "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");
    a9Y(4, "crown", 4, "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");
    a9Y(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg==");
    a9Y(6, "territorial.io", 6, "iVBORw0KGgoAAAANSUhEUgAAAGMAAAAKAQMAAACaDnJEAAAABlBMVEUAAAD///+l2Z/dAAAAaklEQVQI12P4X1dvP/vvn3+JjxnOP2CA8ZLBPImERIOGxJZDzMoMPApg3gwgL1mZ4QyQV1NvD+T9g/EqbCQSWz6kfwbzEmrsgLwfMF6eOZB3J80YzKtLN56R+OdcmvE3kA11yYZA3jEwDwAD7zy1rz50OAAAAABJRU5ErkJggg==");
    a9Y(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    a9Y(8, "googleplay", 3, "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");
    a9Y(9, "discord", 7, "iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII=");
    a9Y(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    a9Y(11, "emojis", 4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    a9Y(12, "flags", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    a9Y(13, "bestTeam", 5, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==");
    a9Y(14, "bestPlayer", 5, "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");
    a9Y(15, "zoom", 6, "iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC");
    a9Y(16, "apple", 3, "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");
    a9Y(17, "loading", 6, "iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC");
    a9Y(18, "target", 7, "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg==");
    a9Y(19, "members", 7, "iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC");
    a9Y(20, "hourglass", 7, "iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC");
    a9Y(21, "stalemate", 6, "iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII=");
    a9Y(22, "logo", 8, "iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEW+AAHAIiMAiAfESkosjSx4cMRcnFzPgoGbmNGow6e7ut7ftLTX4dbf3+7u3d7////Ro4BnAAACgklEQVRIx+3VMYgaQRQA0D1SpEizcv0Vg1h7XHHFQQpZUqVdWIRrRBaEQCIWKSxSBWRBDoIIC0J6YZHjCgshdsLCwvYB2cLiCkHLQ5zMz3cl7ow6O1OkSJF/V8lj5s+fP38N43/8s/GqoMUK17fjcVkDttvT9epRAwIGW17rQWBjUwmTXz+Hc2BPSugNbdsZwbal2t3eRRdgORk3TSV0kjTRydOlAtrDID0UTEwFtKtJksqmCjodL5jPAbamAu6s08EEHtVwf6gXLWiPgJW1YCeR7i1CLL3sOEfQAaYHMcuyLvykBb2E6cERrLitL24KEogV55v9btmSQGxMbufXa8hekwjnQhnfAvdGBFfF9slWvJhi3y2kTZGt+GYNXN8dH/o52/kK6CBrkmO44FMMG7EEdvnmmUKvFB/qL8J7bus7oDXynTXPFzxL/nKdQpDBNKd2y7z9ARAS8vGQ9NFdP+y2arPnz1OgUZ2QRvxyHt7DwsSbA/wP/QohpXhbkHT4tnyVjgLatwghxRjGrRvTPIUJu5lCFAHdrYfxHthqtZw0Tzo8YF8QNaKonzpS2g8ldgI9/HVWL1r79TA+7KUAnY7zFTuSuoSLUoSJiHCIY2qOQw3rzEXRdRuDiIfV/eBL6yxGse76hvAMYvyj/jdyGtYBOl4CfiP0B+E7ci7+QC9IYNOzrKJbIXnQwWFLZxLDQ3xV1He1IA1rhKihA2GF6MAqzIgm3NSI3ta0rgcT6GtBfPlU69S7i+5pQax47sUcICaZX3EjG0+byt+FXUXJD/BBUR8jG9+a0FEU0uDmfGjpQDs4evhSiB//vOY1hK9RTwtiljnXzc+eIO9yDOGjTuXwN2h8zFYEBekAAAAAAElFTkSuQmCC");
  }
  function a9W() {
    a9S = document.createElement("canvas");
    a9S.width = 1;
    a9S.height = 1;
    for (var z = a9R - 1; z >= 0; z--) {
      h0[z] = a9S;
    }
  }
  function a9Y(o0, name, a9Z, od) {
    vW[o0] = name;
    h0[o0] = new Image();
    h0[o0].onload = function() {
      a9a(o0, a9Z);
      a9b();
    }
    ;
    h0[o0].onerror = function(d) {
      console.error("Error loading image at index", o0, "Error:", d);
      a9b();
    }
    ;
    h0[o0].src = "data:image/png;base64," + od;
  }
  function a9a(o0, a9Z) {
    var yy = null;
    var yx;
    if (a9Z === 7) {
      yx = b2.xg.z0;
    } else if (a9Z === 8) {
      yx = b2.xg.z3;
      yy = 0.1;
    } else if (a9Z === 3) {
      yx = b2.xg.z1;
      yy = 0.06;
    } else if (a9Z === 5) {
      yx = b2.xg.z4;
    } else if (a9Z === 6) {
      yx = b2.xg.yz;
    } else if (a9Z === 4) {
      yx = b2.xg.z5;
    }
    h0[o0] = b2.xg.yw(h0[o0], yx, yy);
  }
  function a9b() {
    a9R--;
    a9V();
  }
  function a9V() {
    if (a9R !== 0) {
      return;
    }
    a9R = -1;
    a9X();
    bU.dO = true;
    a9c();
    if (i.pz === 5) {
      i.a9d().a9e.resize();
    }
  }
  function a9X() {
    a8.zy();
    bN.a6p([h0[8], h0[16], h0[9], h0[9], h0[10]], [m.id !== 2, m.id !== 1, true, true, true]);
    aY.sQ = new tn();
    aY.sQ.dH();
    al.dI();
  }
  function a9c() {
    h0[7] = a9S;
    h0[8] = a9S;
    h0[9] = a9S;
    h0[10] = a9S;
  }
}
function cB() {
  var a9f = [[172, 172, 172], [144, 0, 0], [0, 128, 0], [0, 0, 144], [128, 128, 0], [128, 0, 128], [0, 128, 128], [196, 196, 196], [0, 0, 0]];
  var a9g = [[4, 4, 4, 20], [4, 0, 0, 27], [0, 4, 0, 31], [0, 0, 4, 27], [4, 4, 0, 31], [4, 0, 4, 31], [0, 4, 4, 31], [4, 4, 4, 14], [4, 4, 4, 13]];
  var a9h;
  var a9i;
  var a9j;
  var a9k;
  var a9l;
  var a9m;
  var a9n;
  var a9o;
  var a9p;
  var a9q;
  var a9r = 208;
  var a9s = 224;
  var a9t = 248;
  this.eK = new Int32Array(4);
  this.dI = function() {
    var eK = this.eK;
    eK[0] = -4 * bI.eT;
    eK[1] = 4;
    eK[2] = -eK[0];
    eK[3] = -eK[1];
  }
  ;
  this.dH = function(tb) {
    a9h = new Uint8Array(a1.eF);
    a9i = new Uint8Array(a1.eF);
    a9j = new Uint8Array(a1.eF);
    a9k = new Uint8Array(a1.eF);
    a9l = new Uint8Array(a1.eF);
    a9m = new Uint8Array(a1.eF);
    a9n = new Uint8Array(a1.eF);
    a9o = new Uint8Array(a1.eF);
    a9p = new Uint8Array(a1.eF);
    a9q = new Uint8Array(a1.eF);
    this.a2z = new Uint8Array(a1.eF);
    if (a1.iN) {
      a9u();
    } else {
      if (ay.jh && ay.ji.a9v) {
        a9w(ay.ji.a9v);
      } else {
        a9x();
        a9y(tb);
      }
    }
    a9z();
    aA0();
    this.aA1();
    aA2();
    aA3();
  }
  ;
  this.a20 = function(player) {
    var ey = bE.es;
    ey[0] = a9h[player];
    ey[1] = a9i[player];
    ey[2] = a9j[player];
    return ey;
  }
  ;
  function a9x() {
    for (var z = a1.eF - 1; z >= a1.jN; z--) {
      a9h[z] = 4 * bB.ek(64 * ao.random(), ao.value(100));
      a9i[z] = 4 * bB.ek(64 * ao.random(), ao.value(100));
      a9j[z] = 4 * bB.ek(64 * ao.random(), ao.value(100));
    }
  }
  function a9y(tb) {
    for (var z = a1.jN - 1; z >= 0; z--) {
      a9h[z] = 4 * tb[z].a9G[0];
      a9i[z] = 4 * tb[z].a9G[1];
      a9j[z] = 4 * tb[z].a9G[2];
    }
  }
  function a9w(ey) {
    var z;
    for (z = a1.st - 1; z >= 0; z--) {
      a9h[z] = 4 * ey[z][0];
      a9i[z] = 4 * ey[z][1];
      a9j[z] = 4 * ey[z][2];
    }
  }
  function a9z() {
    var z, eL;
    for (z = a1.eF - 1; z >= 0; z--) {
      eL = bB.ek(a9h[z] + a9i[z] + a9j[z], 3);
      a9h[z] += aA4(eL - a9h[z], 2);
      a9i[z] += aA4(eL - a9i[z], 2);
      a9j[z] += aA4(eL - a9j[z], 2);
      a9h[z] -= a9h[z] % 4;
      a9i[z] -= a9i[z] % 4;
      a9j[z] -= a9j[z] % 4;
    }
  }
  function a9u() {
    var k8, ed;
    for (var z = a1.eF - 1; z >= 0; z--) {
      ed = bV.vU[bV.eG[z]];
      k8 = bB.ek((a9g[ed][3] + 1) * ao.random(), ao.value(100));
      a9h[z] = a9f[ed][0] + k8 * a9g[ed][0];
      a9i[z] = a9f[ed][1] + k8 * a9g[ed][1];
      a9j[z] = a9f[ed][2] + k8 * a9g[ed][2];
    }
  }
  function aA0() {
    for (var z = a1.eF - 1; z >= 0; z--) {
      a9h[z] += bB.ek(z, 128);
      a9i[z] += bB.ek(z % 128, 32);
      a9j[z] += bB.ek(z % 32, 8);
      a9k[z] = z % 8;
    }
  }
  function aA2() {
    var ec = 32;
    for (var z = a1.eF - 1; z >= 0; z--) {
      a9l[z] = a9h[z] < ec ? (a9h[z] + ec) : (a9h[z] - ec);
      a9m[z] = a9i[z] < ec ? (a9i[z] + ec) : (a9i[z] - ec);
      a9n[z] = a9j[z] < ec ? (a9j[z] + ec) : (a9j[z] - ec);
    }
  }
  function aA3() {
    var ec = 20;
    var d = 256 - ec - 1;
    for (var z = a1.eF - 1; z >= 0; z--) {
      a9o[z] = a9h[z] > d ? (a9h[z] - ec) : (a9h[z] + ec);
      a9p[z] = a9i[z] > d ? (a9i[z] - ec) : (a9i[z] + ec);
      a9q[z] = a9j[z] > d ? (a9j[z] - ec) : (a9j[z] + ec);
    }
  }
  this.aA1 = function() {
    for (var z = a1.eF - 1; z >= 0; z--) {
      this.a2z[z] = a9h[z] + a9i[z] + a9j[z] < 280 ? 0 : 1;
    }
  }
  ;
  this.tP = function(dy) {
    return bB.ek(dy, 4) % bI.eT;
  }
  ;
  this.tQ = function(dy) {
    return bB.ek(dy, 4 * bI.eT);
  }
  ;
  this.t0 = function(eP, eR) {
    return Math.floor((eR * bI.eT + eP) * 4);
  }
  ;
  this.tF = function(dy) {
    var eK = this.eK;
    return (this.aA5(dy + eK[0]) || this.aA5(dy + eK[1]) || this.aA5(dy + eK[2]) || this.aA5(dy + eK[3]));
  }
  ;
  this.eh = function(dy) {
    var eK = this.eK;
    return (this.eN(dy + eK[0]) || this.eN(dy + eK[1]) || this.eN(dy + eK[2]) || this.eN(dy + eK[3]));
  }
  ;
  this.tD = function(dy, player) {
    var eK = this.eK;
    return (this.aA6(dy + eK[0], player) || this.aA6(dy + eK[1], player) || this.aA6(dy + eK[2], player) || this.aA6(dy + eK[3], player));
  }
  ;
  this.v2 = function(player) {
    return player < a1.jN && aV.yb[player] !== 2;
  }
  ;
  this.fq = function(dy) {
    return a6H[dy + 3] >= a9r;
  }
  ;
  this.tK = function(player, dy) {
    return this.fq(dy) && this.aA7(player, dy);
  }
  ;
  this.aA7 = function(player, dy) {
    return player === this.eA(dy);
  }
  ;
  this.aA8 = function(dy) {
    return a6H[dy + 3] >= a9r && a6H[dy + 3] < a9s;
  }
  ;
  this.iW = function(dy) {
    return a6H[dy + 3] >= a9s && a6H[dy + 3] < a9t;
  }
  ;
  this.tE = function(dy) {
    var eK = this.eK;
    for (var z = 3; z >= 0; z--) {
      if (this.gk(dy + eK[z])) {
        return true;
      }
    }
    return false;
  }
  ;
  this.eD = function(dy) {
    return this.fq(dy) || this.e9(dy);
  }
  ;
  this.gk = function(dy) {
    return a6H[dy + 3] === 0 && a6H[dy + 2] === 2;
  }
  ;
  this.e9 = function(dy) {
    return a6H[dy + 3] === 0 && a6H[dy + 2] === 1;
  }
  ;
  this.sZ = function(dy) {
    return a6H[dy + 3] === 0 && a6H[dy + 2] === 3;
  }
  ;
  this.eN = function(dy) {
    return a6H[dy + 3] === 0 && a6H[dy + 2] >= 5;
  }
  ;
  this.aA5 = function(dy) {
    return a6H[dy + 3] === 0 && a6H[dy + 2] >= 3;
  }
  ;
  this.e0 = function(dy) {
    return a6H[dy + 2] - 5;
  }
  ;
  this.aA6 = function(dy, player) {
    return this.e9(dy) || this.fq(dy) && player !== this.eA(dy);
  }
  ;
  this.eA = function(dy) {
    return 128 * (a6H[dy] % 4) + 32 * (a6H[dy + 1] % 4) + 8 * (a6H[dy + 2] % 4) + a6H[dy + 3] % 8;
  }
  ;
  this.tL = function(dy) {
    aA9(dy, 1);
  }
  ;
  this.aAA = function(dy) {
    aA9(dy, 2);
  }
  ;
  function aA9(dy, aAB) {
    a6H[dy] = 0;
    a6H[dy + 1] = 0;
    a6H[dy + 2] = aAB;
    a6H[dy + 3] = 0;
    aAC(dy);
  }
  this.tC = function(dy, player) {
    a6H[dy] = a9h[player];
    a6H[dy + 1] = a9i[player];
    a6H[dy + 2] = a9j[player];
    a6H[dy + 3] = a9r + a9k[player];
    aAC(dy);
  }
  ;
  this.fl = function(dy, player) {
    a6H[dy] = a9l[player];
    a6H[dy + 1] = a9m[player];
    a6H[dy + 2] = a9n[player];
    a6H[dy + 3] = a9s + a9k[player];
    aAC(dy);
  }
  ;
  this.iX = function(dy, player) {
    a6H[dy] = a9o[player];
    a6H[dy + 1] = a9p[player];
    a6H[dy + 2] = a9q[player];
    a6H[dy + 3] = a9t + a9k[player];
    aAC(dy);
  }
  ;
  function aAC(dy) {
    if (bQ.mB) {
      return;
    }
    var eP = aQ.tP(dy);
    var eR = aQ.tQ(dy);
    bQ.mB = eP >= bP.a6G[0] && eP <= bP.a6G[2] && eR >= bP.a6G[1] && eR <= bP.a6G[3];
  }
}
function cC() {
  var vW;
  var lE;
  var eI;
  var aAD;
  var aAE;
  this.dH = function() {
    if (m.id !== 0) {
      return;
    }
    aAE = 4;
    aAD = 0;
    vW = [];
    eI = 10;
    for (var z = 0; z < eI; z++) {
      vW.push("u" + z);
    }
    lE = new Array(eI);
    aAF(document.cookie);
    if (!lE[9]) {
      lE[9] = "0";
    }
    if (aAG()) {
      aAD = 2;
      aAH();
      aAI();
      if (aAJ() !== lE[5]) {
        aAK();
      }
    } else {
      aAK();
    }
  }
  ;
  this.aAL = function() {
    if (aAD !== 2) {
      return;
    }
    lE[1] = lE[1] === 0 ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : lE[1];
    lE[5] = aAJ();
    aAM();
    aAN();
    aAO();
    aAH();
    aAI();
  }
  ;
  this.aAD = function() {
    return aAD;
  }
  ;
  this.aAP = function(eb) {
    aAD = eb;
    this.aAL();
  }
  ;
  this.aAQ = function(z, value) {
    if (m.id !== 0) {
      return;
    }
    lE[z] = value;
  }
  ;
  this.wM = function(z) {
    if (m.id !== 0) {
      return 0;
    }
    return lE[z];
  }
  ;
  function aAJ() {
    var aAR = 0;
    for (var z = 1; z < 5; z++) {
      aAR += lE[z] % 1024;
    }
    return aAR;
  }
  function aAI() {
    for (var z = 1; z < eI - aAE; z++) {
      lE[z] = parseInt(lE[z]);
    }
  }
  function aAM() {
    for (var z = 1; z < eI - aAE; z++) {
      lE[z] = lE[z].toString();
    }
  }
  function aAG() {
    for (var z = eI - 1; z >= 0; z--) {
      if (lE[z] === undefined) {
        return false;
      }
    }
    return true;
  }
  function aAK() {
    lE[0] = "Player " + Math.floor(1000 * Math.random());
    lE[1] = an.t < an.ir ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0;
    lE[2] = 1;
    lE[3] = 1;
    lE[4] = an.t < an.ir ? 0 : 1;
    lE[5] = 0;
    lE[6] = "000";
    lE[7] = "0";
    lE[8] = "0";
    lE[9] = "0";
    aR.aAL();
  }
  function aAN() {
    lE[0] = a7.uh(lE[0]);
    for (var z = eI - aAE - 1; z >= 0; z--) {
      lE[z] = a7.uj(lE[z]);
    }
  }
  function aAH() {
    for (var z = eI - aAE - 1; z >= 0; z--) {
      lE[z] = a7.uk(lE[z]);
    }
    lE[0] = a7.ui(lE[0]);
  }
  function aAF(aAS) {
    var eb, fo;
    var aAT = aAS.split(";");
    for (var z = aAT.length - 1; z >= 0; z--) {
      aAT[z] = aAT[z].trim();
      for (eb = 2; eb >= 0; eb--) {
        aAT[z] = aAT[z].replace(" ", "");
      }
      if (aAT[z].length > 3) {
        eb = vW.indexOf(aAT[z].substring(0, 2));
        fo = aAT[z].indexOf("=");
        if (eb >= 0 && fo === 2) {
          lE[eb] = aAT[z].substring(fo + 1, aAT[z].length);
        } else if (fo > 0) {
          aAU(aAT[z].substring(0, fo), "0", 0);
        }
      }
    }
  }
  function aAO() {
    for (var z = eI - 1; z >= 0; z--) {
      aAU(vW[z], lE[z], 1);
    }
  }
  function aAU(name, value, aAV) {
    var xk = new Date();
    xk.setTime(xk.getTime() + Math.floor(1000 * 60 * 60 * 24 * 365 * aAV));
    var od = name + "=" + value + ";expires=" + xk.toUTCString() + ";SameSite=Strict;Secure;path=/";
    document.cookie = od;
  }
}
function cc() {
  var o0 = 0;
  var size = 2 * 16;
  var aAW = new Uint16Array(size);
  this.dH = function() {
    o0 = 0;
  }
  ;
  this.iC = function() {
    if (o0 === 0) {
      return;
    }
    if (aV.lI[a1.e2] === 0 || aS.aAX(a1.e2) === aS.fN(a1.e2)) {
      o0 = 0;
      return;
    }
    vD();
  }
  ;
  function vD() {
    var z, iT, hf;
    for (z = o0 - 2; z >= 0; z -= 2) {
      iT = aAW[z];
      if (iT < a1.eF && aV.lI[iT] === 0) {
        remove(z);
        continue;
      }
      hf = aAW[z + 1];
      if (iT >= a1.eF && aAY(a1.e2) || iT < a1.eF && aAZ(a1.e2, iT)) {
        b0.ge.gp(hf, iT);
        remove(z);
      }
    }
  }
  function remove(a02) {
    var z;
    o0 -= 2;
    for (z = a02; z < o0; z += 2) {
      aAW[z] = aAW[z + 2];
      aAW[z + 1] = aAW[z + 3];
    }
  }
  this.gr = function(iT, hf) {
    if (aAa(iT, hf) || o0 === size) {
      return;
    }
    aAW[o0] = iT;
    aAW[o0 + 1] = hf;
    o0 += 2;
  }
  ;
  function aAa(iT, hf) {
    var z;
    for (z = 0; z < o0; z += 2) {
      if (aAW[z] === iT) {
        aAW[z + 1] = Math.min(aAW[z + 1] + hf, 1023);
        return true;
      }
    }
    return false;
  }
}
function cD() {
  this.dP = function(fo) {
    var dt = aV.g6[fo];
    if (bD.kt.oC[fo]) {
      if (dt) {
        aAb(fo);
      }
      return;
    }
    if (dt) {
      this.aAc(fo);
      return;
    }
    if (aV.fi[fo].length) {
      return;
    }
    this.aAc(fo);
  }
  ;
  function aAb(player) {
    aAd(player, aS.aAe(player));
    aAf(player);
    a3.ff(player);
    aS.clear(player);
    aAg(player);
  }
  function aAg(player) {
    aV.gK[player] = 0;
    aV.t8[player] = 0;
    aV.fi[player] = [];
    aV.fw[player] = [];
    aV.fx[player] = [];
    aV.ei[player] = [];
  }
  this.aAc = function(player) {
    aAh(player);
    aAf(player);
    aAi(player);
    a3.ff(player);
    aS.clear(player);
    bD.aAj.aAk(player);
  }
  ;
  function aAh(player) {
    if (aQ.v2(player)) {
      aV.vo[player] = bX.vi.aAl();
      a1.vB++;
    }
    var aAm = aS.aAe(player);
    if (aAm.length === 0) {
      if (b2.fd.yc(player)) {
        aAn();
      }
      return;
    }
    aAd(player, aAm);
    aAo(player, aAm);
  }
  function aAn() {
    bS.lE[17] += aV.gK[a1.e2] + aS.aAp(a1.e2);
    aK.show(false, false, false, true);
    aJ.a5V();
    bH.result.vs();
  }
  function aAd(player, aAm) {
    var z;
    for (z = aAm.length - 1; z >= 0; z--) {
      aS.aAq(aAm[z], player);
    }
  }
  function aAr(aAm) {
    var z;
    var o0 = 0;
    for (z = aAm.length - 1; z >= 1; z--) {
      if (aV.g6[aAm[z]] > aV.g6[aAm[o0]]) {
        o0 = z;
      }
    }
    return o0;
  }
  function aAo(player, aAm) {
    var z, eW;
    var aAs = aAm[aAr(aAm)];
    if (a1.jl === 9 && bV.eG[player] === 1 && ao.jF(8)) {
      ap.aAt(aAs);
    }
    if (b2.fd.yc(player)) {
      aA.vL(aAs, 1);
      aAn();
    } else {
      eW = false;
      for (z = aAm.length - 1; z >= 0; z--) {
        if (b2.fd.yc(aAm[z])) {
          eW = true;
          aA.vL(player, 0);
          return;
        }
      }
      if (!eW && player < a1.jN && aV.yb[player] !== 2) {
        aA.a1I(0, player, aAs);
      }
    }
  }
  function aAi(player) {
    aV.lI[player] = aV.gK[player] = 0;
    aV.fi[player] = null;
    aV.fw[player] = null;
    aV.fx[player] = null;
    aV.ei[player] = null;
  }
  function aAf(player) {
    var ht = aV.ht;
    var hu = aV.hu;
    var hv = aV.hv;
    var hw = aV.hw;
    var lk = ht[player];
    var ll = hv[player];
    var eT = bI.eT;
    var g6 = aV.g6;
    for (var eP = hu[player]; eP >= lk; eP--) {
      for (var eR = hw[player]; eR >= ll; eR--) {
        var fo = (eR * eT + eP) * 4;
        if (aQ.tK(player, fo)) {
          aQ.tL(fo);
          g6[player]--;
        }
      }
    }
    ht[player] = hu[player] = 0;
    hv[player] = hw[player] = 0;
  }
}
function ch() {
  var input;
  this.dH = function() {
    input = document.createElement("input");
    input.type = "file";
    input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg");
    input.onchange = aAu;
  }
  ;
  this.a9I = function() {
    input.click();
  }
  ;
  this.aAv = function(d) {
    aAu(d);
  }
  ;
  function aAu(d) {
    aAw(d.target.files);
  }
  function aAw(files) {
    if (files && files.length > 0) {
      ax.aAx(files[0]);
    }
  }
  this.aAx = function(aAy) {
    var aAz, ey, aB0;
    ey = aAy.name.split(".");
    aAz = ey[ey.length - 1].toLowerCase();
    if (aAz === "json") {
      ay.rC(aAy);
      return;
    }
    if (aAz === "gif" || aAz === "jpg" || aAz === "jpeg" || aAz === "png") {
      bI.ji.sh[bI.aB1()].name = ey[0];
      aB0 = new FileReader();
      aB0.onload = aB2;
      aB0.readAsDataURL(aAy);
    }
  }
  ;
  function aB2(d) {
    var ed = new Image();
    ed.onload = aB3;
    ed.src = d.target.result;
  }
  function aB3(d) {
    var gx, t, ir, aB4;
    var ed = d.target;
    t = ed.width;
    ir = ed.height;
    if (t > 4096 || ir > 4096 || t < 10 || ir < 10) {
      aB4 = "Image w & h must be between 10 and 4096.";
      if (m.rE) {
        m.rE.showToast(aB4);
      } else {
        alert(aB4);
      }
      return;
    }
    ay.xF();
    bI.fz = bI.aB1();
    bI.a8g = 0;
    bI.eT = t;
    bI.eU = ir;
    bI.sN.width = bI.eT;
    bI.sN.height = bI.eU;
    bI.sJ.drawImage(ed, 0, 0);
    gx = bI.sJ.getImageData(0, 0, bI.eT, bI.eU);
    bI.sO = gx.data;
  }
  function aB5(d) {
    d.stopPropagation();
    d.preventDefault();
  }
  function aB6() {
    return aN.wU() === 0 || aN.wU() === 2;
  }
  this.wy = function(d) {
    if (aB6()) {
      aB5(d);
      d.dataTransfer.dropEffect = "copy";
    }
  }
  ;
  this.wz = function(d) {
    if (aB6()) {
      aB5(d);
      aAw(d.dataTransfer.files);
    }
  }
  ;
}
function cf() {
  this.aB7 = null;
  this.dH = function() {
    if (a1.jl !== 10) {
      this.aB7 = null;
      return;
    }
    this.aB7 = new Uint32Array(a1.eF);
  }
  ;
  this.iC = function() {
    if (a1.jl !== 10) {
      return;
    }
    this.wa();
  }
  ;
  this.wa = function() {
    var z, fo, target, a5f;
    var aB7 = this.aB7;
    var tb = aa.jQ;
    var yh = aV.gK;
    for (z = aa.jO - 1; z >= 0; z--) {
      fo = tb[z];
      if (fo >= a1.jN) {
        continue;
      }
      target = Math.max(bB.ek(yh[fo], 4), 2048);
      a5f = Math.max(aT.a5g(fo), 100);
      aB7[fo] += bB.ek(a5f * target, 10000);
      if (aB7[fo] > target) {
        aB7[fo] = target;
      }
    }
  }
  ;
  this.ym = function(player, iU) {
    if (iU > this.aB7[player]) {
      iU = this.aB7[player];
      this.aB7[player] = 0;
      return iU;
    }
    this.aB7[player] -= iU;
    return iU;
  }
  ;
}
function ci() {
  this.jh = false;
  this.ji = null;
  this.xF = function() {
    this.jh = false;
    this.ji = null;
  }
  ;
  this.a9F = function() {
    if (this.ji.a9v && this.ji.aB8) {
      this.ji.a9v[0] = b2.color.yB(bY.kt.rW());
    }
    a1.gameInit(this.ji.aB9, 0, this.aBA(), this.ji.zZ, false, false);
  }
  ;
  this.aBA = function() {
    var ey = [{
      name: this.ji.aBB ? bY.dZ.data[122].value : this.ji.aBC[0],
      a9G: [0, 0, 0],
      a9H: 0
    }];
    return ey;
  }
  ;
  this.rC = function(aAy) {
    var aB0 = new FileReader();
    aB0.onload = aB2;
    aB0.readAsText(aAy);
  }
  ;
  function aB2(d) {
    ay.jh = true;
    ay.aBD(JSON.parse(d.target.result));
    ay.vD();
  }
  this.aBD = function(op) {
    this.ji = {};
    this.ji.a9D = aBE(op["numberPlayers"], 1, 512);
    this.ji.aBF = aBE(op["modeID"], 0, 1);
    this.ji.fz = aBE(op["gMap.mapID"], 0, bI.aBG - 1);
    this.ji.a8k = aBE(op["seedMap"], 0, 16383);
    this.ji.aB9 = aBE(op["seedSpawn"], 0, 16383);
    this.ji.zc = aBH(op["selectableSpawn"], false);
    this.ji.aBB = aBH(op["selectableName"], false);
    this.ji.aB8 = aBH(op["selectableColor"], false);
    bI.ji.sh[bI.aB1()].name = this.ji.aBI = aBJ(op["mapName"], 1, 25, "Custom Map");
    this.ji.a0w = aBK(op["description"]);
    this.ji.so = aBL(op["playerX"], this.ji.a9D, 4096, 16);
    this.ji.sz = aBL(op["playerY"], this.ji.a9D, 4096, 16);
    this.ji.aBM = aBL(op["playerTeam"], this.ji.a9D, 8, 8);
    this.ji.jj = aBL(op["playerStrength"], this.ji.a9D, 5, 8);
    this.ji.a9v = aBN(op["playerColor"], this.ji.a9D);
    this.ji.aBC = aBO(op["playerName"], this.ji.a9D);
    this.ji.aBP = typeof op["mapBase64"] === "string" ? op["mapBase64"] : "";
    this.ji.aBB = this.ji.aBB || !this.ji.aBC;
    this.ji.zZ = this.ji.aBF === 0 ? 7 : this.ji.aBF === 2 ? 9 : 6;
    this.ji.so = this.ji.sz ? this.ji.so : null;
  }
  ;
  this.vD = function() {
    if (!aBQ(this.ji.aBP)) {
      bI.loadMap(this.ji.fz, this.ji.a8k);
    }
  }
  ;
  function aBQ(od) {
    var h0, gx;
    var aBR = "data:image/png;base64,";
    if (od.length <= aBR.length) {
      return false;
    }
    ay.ji.fz = 0;
    ay.ji.a8k = 0;
    bI.loadMap(0, 0);
    if (od.substring(0, aBR.length) !== aBR) {
      od = aBR + od;
    }
    h0 = new Image();
    h0.onload = function() {
      bI.eT = h0.width;
      bI.eU = h0.height;
      if (bI.eT > 4096 || bI.eU > 4096 || bI.eT < 10 || bI.eU < 10) {
        bI.loadMap(0, 0);
        alert("Image w & h must be between 10 and 4096.");
        return;
      }
      bI.fz = bI.aB1();
      bI.a8g = 0;
      bI.sN.width = bI.eT;
      bI.sN.height = bI.eU;
      bI.sJ.drawImage(h0, 0, 0);
      gx = bI.sJ.getImageData(0, 0, bI.eT, bI.eU);
      bI.sO = gx.data;
    }
    ;
    h0.src = od;
    ay.ji.aBP = "";
    return true;
  }
  function aBJ(od, min, max, aBS) {
    if (typeof od !== "string" || od.length < min) {
      return aBS;
    }
    if (od.length > max) {
      return od.substring(0, max);
    }
    return od;
  }
  function aBE(el, min, max) {
    el = aBT(el) ? Math.floor(el) : min;
    return Math.min(Math.max(el, min), max);
  }
  function aBH(el, rA) {
    return typeof el === "boolean" ? el : rA;
  }
  function aBT(op) {
    return typeof op === "number";
  }
  function aBL(el, eI, max, aBU) {
    var z, ey, k8;
    if (!Array.isArray(el) || el.length < 1) {
      return null;
    }
    ey = aBU === 8 ? new Uint8Array(eI) : new Uint16Array(eI);
    k8 = el.length;
    for (z = 0; z < eI; z++) {
      ey[z] = aBE(el[z % k8], 0, max);
    }
    return ey;
  }
  function aBN(el, eI) {
    var z, ey, k8;
    if (!Array.isArray(el) || el.length < 1) {
      return null;
    }
    ey = new Array(eI);
    k8 = el.length;
    for (z = 0; z < eI; z++) {
      ey[z] = aBL(el[z % k8], 3, 63, 8);
    }
    return ey;
  }
  function aBO(el, eI) {
    var z, ey, k8;
    if (!Array.isArray(el) || el.length < 1) {
      return null;
    }
    ey = new Array(eI);
    k8 = el.length;
    for (z = 0; z < eI; z++) {
      ey[z] = aBJ(el[z % k8], 3, 26, "Bot");
    }
    return ey;
  }
  function aBK(el) {
    var z, eI;
    if (!Array.isArray(el) || el.length < 1) {
      return [];
    }
    eI = el.length;
    for (z = 0; z < eI; z++) {
      el[z] = aBJ(el[z], 0, 100, "");
    }
    return el;
  }
  this.aBV = function() {
    var z;
    var max = 0;
    var eI = this.ji.a9D;
    for (z = 0; z < eI; z++) {
      if (this.ji.aBM[z] > max) {
        max = this.ji.aBM[z];
      }
    }
    return Math.max(0, max - 1);
  }
  ;
}
function cG() {
  var aBW;
  var aBX;
  var size;
  var iT;
  var iU;
  var id;
  var aBY;
  this.dH = function() {
    aBW = a1.jN < 16 ? 12 : 8;
    aBX = 4;
    var eI = aBZ(a1.eF);
    size = new Uint8Array(a1.eF);
    iT = new Uint16Array(eI);
    iU = new Uint32Array(eI);
    id = new Uint16Array(eI);
    aBY = new Uint8Array(eI);
  }
  ;
  this.oU = function(a2X, aBa) {
    var aBb = this.gL(a2X, aBa);
    this.gJ(a2X, aBa, 0);
    aBb = b2.fd.fg(a2X, aBb);
    if (a2X === a1.e2) {
      bS.lE[13] -= aBb;
    }
  }
  ;
  function aBZ(player) {
    return player < a1.jN ? aBW * player : aBW * a1.jN + aBX * (player - a1.jN);
  }
  this.clear = function(player) {
    size[player] = 0;
  }
  ;
  this.aAq = function(player, aBa) {
    var z = aBc(player, aBa);
    if (z === size[player]) {
      return;
    }
    var aBd = iU[aBZ(player) + z];
    this.fh(player, z);
    this.iQ(player, aBd, a1.eF);
  }
  ;
  function aBc(player, aBa) {
    var z;
    var k8 = aBZ(player);
    for (z = size[player] - 1; z >= 0; z--) {
      if (id[k8 + z] === 0 && iT[k8 + z] === aBa) {
        return z;
      }
    }
    return size[player];
  }
  this.ii = function(player, aBa) {
    var z;
    var k8 = aBZ(player);
    for (z = size[player] - 1; z >= 0; z--) {
      if (id[k8 + z] === 0 && iT[k8 + z] === aBa) {
        return true;
      }
    }
    return false;
  }
  ;
  this.j1 = function(player) {
    return player < a1.jN ? size[player] < aBW : size[player] < aBX;
  }
  ;
  this.fN = function(player) {
    return size[player];
  }
  ;
  this.fT = function(player, z) {
    return iT[aBZ(player) + z];
  }
  ;
  this.fO = function(player, z) {
    return id[aBZ(player) + z];
  }
  ;
  this.aBe = function(player, aBf) {
    var z;
    var k8 = aBZ(player);
    for (z = size[player] - 1; z >= 0; z--) {
      if (id[k8 + z] === aBf) {
        return z;
      }
    }
    return -1;
  }
  ;
  this.fU = function(player, z) {
    return iU[aBZ(player) + z];
  }
  ;
  this.gL = function(player, aBa) {
    var z;
    var k8 = aBZ(player);
    for (z = size[player] - 1; z >= 0; z--) {
      if (id[k8 + z] === 0 && iT[k8 + z] === aBa) {
        return iU[k8 + z];
      }
    }
    return 0;
  }
  ;
  this.aAp = function(player) {
    var z;
    var k8 = aBZ(player);
    var el = 0;
    for (z = size[player] - 1; z >= 0; z--) {
      el += iU[k8 + z];
    }
    return el;
  }
  ;
  this.aBg = function(player) {
    var z;
    var k8 = aBZ(player);
    var el = 0;
    for (z = size[player] - 1; z >= 0; z--) {
      if (id[k8 + z] === 0) {
        el += iU[k8 + z];
      }
    }
    return el;
  }
  ;
  this.aAX = function(player) {
    var z;
    var k8 = aBZ(player);
    var fj = 0;
    for (z = size[player] - 1; z >= 0; z--) {
      if (id[k8 + z] > 0) {
        fj++;
      }
    }
    return fj;
  }
  ;
  this.gJ = function(player, aBa, aBd) {
    var z;
    var k8 = aBZ(player);
    for (z = size[player] - 1; z >= 0; z--) {
      if (id[k8 + z] === 0 && iT[k8 + z] === aBa) {
        iU[k8 + z] = aBd;
      }
    }
  }
  ;
  this.g4 = function(player, z, aBd) {
    iU[aBZ(player) + z] = Math.max(aBd, 0);
  }
  ;
  this.g5 = function(player, z) {
    aBY[aBZ(player) + z] = 0;
  }
  ;
  this.fV = function(player, z) {
    return aBY[aBZ(player) + z];
  }
  ;
  this.iQ = function(player, aBd, aBa) {
    var z;
    var k8 = aBZ(player);
    for (z = size[player] - 1; z >= 0; z--) {
      if (id[k8 + z] === 0 && iT[k8 + z] === aBa) {
        iU[k8 + z] += aBd;
        iU[k8 + z] = iU[k8 + z] > a1.yi ? a1.yi : iU[k8 + z];
        return;
      }
    }
    iT[k8 + size[player]] = aBa;
    iU[k8 + size[player]] = aBd;
    id[k8 + size[player]] = 0;
    aBY[k8 + size[player]] = 1;
    size[player]++;
    if (player < a1.jN) {
      if (aBa === a1.e2) {
        aA.vL(player, 5);
      } else if (player === a1.e2) {
        aU.a1K(aBa);
      }
    }
  }
  ;
  this.aBh = function(player, aBd, aBf) {
    var k8 = aBZ(player);
    iT[k8 + size[player]] = 0;
    iU[k8 + size[player]] = aBd;
    id[k8 + size[player]] = aBf;
    aBY[k8 + size[player]] = 0;
    size[player]++;
  }
  ;
  this.fh = function(player, o0) {
    var eb, k8;
    if (size[player] === 0) {
      return;
    }
    k8 = aBZ(player);
    size[player]--;
    for (eb = o0; eb < size[player]; eb++) {
      iT[k8 + eb] = iT[k8 + eb + 1];
      iU[k8 + eb] = iU[k8 + eb + 1];
      id[k8 + eb] = id[k8 + eb + 1];
      aBY[k8 + eb] = aBY[k8 + eb + 1];
    }
  }
  ;
  this.aAe = function(player) {
    var z, eb, k8;
    var aAm = [];
    for (z = aa.jO - 1; z >= 0; z--) {
      k8 = aBZ(aa.jQ[z]);
      for (eb = size[aa.jQ[z]] - 1; eb >= 0; eb--) {
        if (id[k8 + eb] === 0 && iT[k8 + eb] === player) {
          aAm.push(aa.jQ[z]);
          break;
        }
      }
    }
    return aAm;
  }
  ;
}
function cH() {
  var aBi;
  var aBj;
  var aBk;
  var aBl;
  var aBm;
  var aBn;
  this.dH = function() {
    aBi = 10;
    aBj = 10;
    aBk = aBi;
    aBl = aBj;
  }
  ;
  this.dN = function() {
    aBn = 512;
    aBm = new Uint16Array(aBn);
    var ib = 100;
    for (var z = 0; z < aBn; z++) {
      aBm[z] = ib + aBo(bB.ek(z * 25600, aBn - 4), 9);
    }
  }
  ;
  this.a4T = function() {
    return aBl;
  }
  ;
  this.iC = function() {
    if (--aBk <= 0) {
      aBk = aBi;
      aBp();
    }
  }
  ;
  function aBp() {
    aBq();
    if (--aBl <= 0) {
      aBl = aBj;
      aBr();
    }
  }
  this.a5g = function(player) {
    var h3 = aBm[bB.ek((aBn - 1) * aV.g6[player], a1.j7)];
    if (bU.jK() < 1920) {
      var aBs = bB.ek(100 * (13440 - 6 * bU.jK()), 1920);
      h3 = aBs > h3 ? aBs : h3;
    }
    var j2 = this.j3(player);
    if (aV.gK[player] > j2) {
      h3 -= bB.ek(2 * h3 * (aV.gK[player] - j2), j2);
    }
    return h3 < 0 ? 0 : h3 > 700 ? 700 : h3;
  }
  ;
  this.j3 = function(player) {
    return Math.min(100 * aV.g6[player], a1.zS);
  }
  ;
  function aBq() {
    var jP = aa.jQ;
    var gK = aV.gK;
    var dt = gK[a1.e2];
    aBt();
    for (var z = aa.jO - 1; z >= 0; z--) {
      var fo = jP[z];
      var aBu = bB.ek(aT.a5g(fo) * gK[fo], 10000);
      b2.fd.fg(fo, Math.max(aBu, 1));
    }
    bS.lE[9] += gK[a1.e2] - dt;
  }
  function aBr() {
    var gK = aV.gK;
    var g6 = aV.g6;
    var jP = aa.jQ;
    var dt = gK[a1.e2];
    for (var z = aa.jO - 1; z >= 0; z--) {
      var fo = jP[z];
      b2.fd.fg(fo, g6[fo]);
    }
    bS.lE[8] += aV.gK[a1.e2] - dt;
  }
  function aBt() {
    if (!a1.jn || a1.iN || aV.lI[0] === 0) {
      return;
    }
    if (aO.jp[0].eL === 0) {
      aV.gK[0] += bB.ek(aV.g6[0], 6);
    }
  }
  this.nP = function(player, nQ) {
    b2.fd.fg(nQ, bE.eq[0]);
    bS.nn(player, nQ);
    aU.aBv(player, bE.eq[0] + bE.eq[1]);
    aU.no(nQ, bE.eq[0]);
    b2.fd.oM(player);
  }
  ;
  this.aBw = function() {
    var eI = aa.jO;
    var tb = aa.jQ;
    var k8 = 0;
    var yh = aV.gK;
    for (var z = 0; z < eI; z++) {
      k8 += yh[tb[z]];
    }
    return k8;
  }
  ;
  this.aBx = function(w9) {
    var eI = aa.jO;
    var tb = aa.jQ;
    var k8 = 0;
    var yh = aV.gK;
    var eG = bV.eG;
    var fo;
    for (var z = 0; z < eI; z++) {
      fo = tb[z];
      if (eG[fo] === w9) {
        k8 += yh[fo];
      }
    }
    return k8;
  }
  ;
}
function cJ() {
  var aBy, aBz;
  var aC0, aC1;
  var aC2, aC3;
  var aC4;
  var aC5;
  var aC6;
  var aC7;
  var aC8;
  var aC9;
  var aCA;
  var aCB;
  var aCC, aCD;
  var aCE;
  var aCF;
  var aCG = null;
  var aCH;
  var aCI;
  var a6f;
  var aCJ, aCK;
  var aCL = 0.1;
  var aCM = 0;
  var aCN = false;
  var aCO = new Float32Array(4);
  var aCP = 0;
  var aCQ = true;
  var aCR;
  var aCS;
  var a4w = 400;
  this.dH = function() {
    a4w = bY.dZ.data[11].value;
    a4w = a4w === 0 ? 280 : a4w === 1 ? 187 : 112;
    aCF = false;
    aCB = 0.88;
    aC8 = 0.5;
    aC9 = 1.8;
    aCA = 12 - 3 * bY.dZ.data[9].value;
    aBy = 0;
    aBz = 0;
    aC0 = new Uint16Array(a1.eF);
    aC1 = new Uint16Array(a1.eF);
    aC2 = new Uint16Array(a1.eF);
    aC3 = new Uint16Array(a1.eF);
    aC4 = new Float32Array(a1.eF);
    aC5 = new Float32Array(a1.eF);
    aCI = new Uint16Array(2 * a1.eF);
    a6f = new Uint8Array(5 * a1.eF);
    aCR = new Uint8Array(a1.eF);
    aCS = new Uint8Array(a1.eF);
    if (!aCQ) {
      aCG = aCG ? aCG : document.createElement("canvas");
    }
    p0();
    aCC = 0;
    aCD = 0;
    aCE = 1;
    if (bY.dZ.data[7].value) {
      aCT();
      aCU();
    } else {
      aCT();
    }
    aCV();
  }
  ;
  this.aBv = function(fo, a1a) {
    if (a1a > 18 * aV.g6[fo]) {
      aCS[fo] = 6;
      aQ.a2z[fo] = 2 + (aQ.a2z[fo] % 2);
    } else {
      aCR[fo] = 4;
      if (aQ.a2z[fo] < 2 || aQ.a2z[fo] > 3) {
        aQ.a2z[fo] = 6 + (aQ.a2z[fo] % 2);
      }
    }
  }
  ;
  this.no = function(fo, a1a) {
    if (a1a > 6 * aV.g6[fo]) {
      aCS[fo] = 6;
      aQ.a2z[fo] = 4 + (aQ.a2z[fo] % 2);
    } else {
      aCR[fo] = 4;
      if (aQ.a2z[fo] < 4 || aQ.a2z[fo] > 5) {
        aQ.a2z[fo] = 8 + (aQ.a2z[fo] % 2);
      }
    }
  }
  ;
  function aCW() {
    aCG.width = an.t;
    aCG.height = an.ir;
    aCH = aCG.getContext("2d", {
      alpha: true
    });
    b2.ow.textAlign(aCH, 1);
    b2.ow.textBaseline(aCH, 1);
    aCH.imageSmoothingEnabled = true;
  }
  this.resize = function() {
    p0();
    if (aCQ) {
      return;
    }
    aCX(aCH);
  }
  ;
  function p0() {
    aC6 = Math.floor(1 * an.oy);
    aC7 = Math.floor(0.5 * aC6);
  }
  function aCT() {
    var z, aCY;
    qo.font = b2.ow.q5(1, 100 * aC8);
    aCY = 80 / Math.floor(qo.measureText(b2.w0.z6(a1.yi)).width);
    qo.font = b2.ow.q5(1, 100);
    for (z = a1.eF - 1; z >= 0; z--) {
      aC5[z] = 100 / Math.floor(qo.measureText(aV.a1G[z]).width);
      aC4[z] = Math.min(aCY, aC5[z]);
    }
  }
  function aCU() {
    var z, aCY;
    qo.font = b2.ow.q5(1, 100);
    aCY = 100 / Math.floor(qo.measureText("900 000").width);
    for (z = a1.eF - 1; z >= 0; z--) {
      aC4[z] = Math.min(aCY, 2 * aC5[z]);
    }
    aCP = aCY;
    aCO[0] = 100 / (aCY * Math.floor(qo.measureText("5 000 000").width));
    aCO[1] = 100 / (aCY * Math.floor(qo.measureText("50 000 000").width));
    aCO[2] = 100 / (aCY * Math.floor(qo.measureText("500 000 000").width));
    aCO[3] = 100 / (aCY * Math.floor(qo.measureText("1 000 000 000").width));
  }
  function aCZ(z) {
    if (!bY.dZ.data[7].value) {
      return 1;
    }
    var sB = aV.gK[z];
    if (sB < 1000000) {
      return 1;
    }
    if (sB < 10000000) {
      return aCO[0];
    }
    return aCO[Math.min(Math.floor(Math.log10(sB)) - 6, 3)];
  }
  function aCV() {
    var z;
    for (z = a1.eF - 1; z >= 0; z--) {
      if (aV.g6[z] < 12) {
        aC0[z] = aV.ht[z] + 1;
        aC1[z] = aV.hv[z] + 1;
        aC2[z] = 1;
        aC3[z] = 1;
      } else {
        aC0[z] = aV.ht[z];
        aC1[z] = aV.hv[z] + 1;
        aC2[z] = 4;
        aC3[z] = 2;
      }
    }
    if (a1.gd) {
      for (z = 0; z < a1.jN; z++) {
        aC2[z] = 0;
      }
    }
    aCJ = aP.get(4).width;
    aCK = aP.get(4).height;
  }
  this.zO = function() {
    for (var z = 0; z < a1.jN; z++) {
      if (aV.hu[z] - aV.ht[z] !== 3 || aV.hw[z] - aV.hv[z] !== 3) {
        aC0[z] = aV.ht[z] + (aV.hu[z] !== aV.ht[z] ? 1 : 0);
        aC1[z] = aV.hv[z];
        aC2[z] = 1;
        aC3[z] = 1;
      } else {
        aC0[z] = aV.ht[z];
        aC1[z] = aV.hv[z] + 1;
        aC2[z] = 4;
        aC3[z] = 2;
      }
    }
  }
  ;
  this.oW = function(player, o0, aCa) {
    aCb(player, o0, aCa);
    if (a1.v9 === 2) {
      this.l1(true);
    }
  }
  ;
  function aCb(player, o0, aCa) {
    var kB = player + o0 * a1.eF;
    if (o0 === 0) {
      if (aCI[kB] === aCa && a6f[kB] > 0) {
        a6f[kB] = 0;
        return;
      }
      aCI[kB] = aCa;
      a6f[kB] = aY.tl.uP(aCa) ? 255 : 64;
      return;
    }
    if (o0 === 1) {
      a6f[kB] = 64;
      aCI[kB] = aCa;
    } else {
      a6f[kB] = aCa;
    }
  }
  this.qn = function() {
    if (aCQ) {
      aCX(qo);
      return;
    }
    if (!aCF) {
      return;
    }
    if (aCE !== 1) {
      qo.imageSmoothingEnabled = true;
      qo.setTransform(aCE, 0, 0, aCE, 0, 0);
      qo.drawImage(aCG, -aCC / aCE, -aCD / aCE);
      qo.setTransform(1, 0, 0, 1, 0, 0);
      qo.imageSmoothingEnabled = false;
    } else {
      qo.drawImage(aCG, -aCC, -aCD);
    }
  }
  ;
  this.a3j = function(hR, hU) {
    aCC += hR;
    aCD += hU;
  }
  ;
  this.wq = function(hR, hU) {
    aU.a3j(hR, hU);
  }
  ;
  this.zoom = function(xo, kU, kV) {
    aCE *= xo;
    aCC = (aCC + kU) * xo - kU;
    aCD = (aCD + kV) * xo - kV;
  }
  ;
  function aCc() {
    if (aCE !== 1 || aCC !== 0 || aCD !== 0) {
      return a4w;
    }
    if (a1.zp() || a1.gd || a1.v9 === 2) {
      return 1000;
    }
    return a4w;
  }
  this.l1 = function(bc) {
    if (aCQ) {
      return false;
    }
    if (!aCN && !bc && bU.ds < aCM + aCc()) {
      return false;
    }
    aCN = false;
    aCM = bU.ds;
    aCX(aCH);
    return true;
  }
  ;
  this.aCd = function(z) {
    return aCZ(z) * aC4[z];
  }
  ;
  this.aCe = function(player) {
    return aC4[player];
  }
  ;
  function aCX(h1) {
    aCF = false;
    aCE = 1;
    aCC = aCD = 0;
    if (!aCQ) {} else {
      b2.ow.textAlign(h1, 1);
      b2.ow.textBaseline(h1, 1);
    }
    var lk = hg / hh;
    var ll = hi / hh;
    var ly = (an.t + hg) / hh;
    var lz = (an.ir + hi) / hh;
    var aCf, aCg;
    var z, aCh;
    var fontSize;
    var aCi;
    var aCj = aV.lI[a1.e2] !== 0 && aQ.v2(a1.e2);
    for (var eb = aa.jO - 1; eb >= 0; eb--) {
      z = aa.jQ[eb];
      fontSize = Math.floor(aCB * hh * aCZ(z) * aC4[z] * aC2[z]);
      if (fontSize < aCA || fontSize >= aC6) {
        continue;
      }
      if (!(aC0[z] + aC2[z] > lk && aC0[z] < ly && aC1[z] + aC3[z] > ll && aC1[z] < lz)) {
        continue;
      }
      aCf = Math.floor(an.t * (aC0[z] + aC2[z] / 2 - lk) / (ly - lk));
      if (z >= a1.jN) {
        aCg = Math.floor(an.ir * (aC1[z] + aC3[z] / 2 - ll) / (lz - ll) + 0.1 * fontSize);
        // fontSize *= 1.25;
      } else {
        aCg = Math.floor(an.ir * (aC1[z] + aC3[z] / 2 - ll) / (lz - ll) - 0.1 * fontSize);
      }
      aCh = aQ.a2z[z];
      h1.font = b2.ow.q5(aV.yb[z] === 1 ? 4 : 1, fontSize);
      h1.fillStyle = aCk(fontSize, aCh % 2);
      if (bY.dZ.data[7].value) {
        aCl(h1, z, fontSize, aCf, aCg, aCh); // Here
      } else {
        aCm(z, fontSize, aCf, aCg, h1);
      }
      aCF = true;
      if (a6f[z] > 0) {
        aCn(aCf, aCg, fontSize, z, h1);
      } else if (j8[z] === 0) {
        aCo(aCf, aCg, fontSize, 0, 0, h1);
      }
      if (aCj && (a6f[z + a1.eF] > 0 || a6f[z + 2 * a1.eF] > 0 || a6f[z + 3 * a1.eF] > 0 || a6f[z + 4 * a1.eF] > 0)) {
        aCp(aCf, aCg, fontSize, z, h1);
      }
      aCi = aC8 * fontSize;
      if (aCi < aCA) {
        continue;
      }
      h1.font = b2.ow.q5(1, aCi);
      aCg += Math.floor(0.78 * fontSize);
      if (bY.dZ.data[7].value) {
        aCm(z, aCi, aCf, aCg, h1);
      } else {
        aCl(h1, z, aCi, aCf, aCg, aCh);
      }
    }
  }
  function aCm(z, fontSize, eP, eR, h1) {
    if (z >= a1.jN) {
      return;
    }
    h1.fillText(aV.a1G[z], eP, eR);
    if (z < a1.jN && aV.yb[z] !== 2) {
      return;
    }
    var aCq = fontSize / aC5[z];
    h1.fillRect(eP - 0.5 * aCq, eR + b2.ow.uK * fontSize, aCq, Math.max(1, 0.1 * fontSize));
  }
  function aCl(h1, z, fontSize, aCf, aCg, aCh) {
    var aCr = b2.w0.z6(aV.gK[z]);
    if ((aCh >> 1) & 1) {
      h1.lineWidth = 0.05 * fontSize;
      h1.strokeStyle = aCk(fontSize, aCh % 2);
      h1.strokeText(aCr, aCf, aCg);
      return;
    }
    if (aCh > 1) {
      h1.lineWidth = 0.12 * fontSize;
      h1.strokeStyle = aCk(fontSize, aCh);
      h1.strokeText(aCr, aCf, aCg);
    }
    h1.fillText(aCr, aCf, aCg);
  }
  function aCo(aCf, aCg, fontSize, aCs, aCt, h1) {
    var a0Z = 0.95 * fontSize / aCK;
    var sr = aCf - 0.5 * a0Z * aCJ + 0.8 * aCs * fontSize;
    var ss = aCg - 1.76 * a0Z * aCK - (0.7 + (0.35 - b2.ow.uK)) * aCt * fontSize;
    h1.setTransform(a0Z, 0, 0, a0Z, sr, ss);
    h1.globalAlpha = aCu(fontSize);
    h1.drawImage(aP.get(4), 0, 0);
    h1.globalAlpha = 1;
    h1.setTransform(1, 0, 0, 1, 0, 0);
  }
  function aCp(aCf, aCg, fontSize, z, h1) {
    var ed;
    var fj = -1;
    for (ed = 4; ed >= 1; ed--) {
      if (a6f[z + ed * a1.eF] > 0) {
        fj++;
      }
    }
    for (ed = 1; ed < 5; ed++) {
      if (a6f[z + ed * a1.eF] > 0) {
        aCv(aCf, aCg, fontSize, ed, z, fj, a6f[z + ed * a1.eF], h1);
        fj -= 2;
      }
    }
  }
  function aCn(aCf, aCg, fontSize, z, h1) {
    if (j8[z] === 0) {
      if (aY.tl.uP(aCI[z])) {
        aCw(aCf, aCg, fontSize, z, aCI[z], h1);
        aCo(aCf, aCg, fontSize, 0, 0, h1);
      } else if (aY.tl.uR(aCI[z])) {
        aCx(aCf, aCg, fontSize, aCI[z], 0, h1);
        aCo(aCf, aCg, fontSize, 0, 1, h1);
      } else {
        aCx(aCf, aCg, fontSize, aCI[z], 1, h1);
        aCo(aCf, aCg, fontSize, 1, 0, h1);
      }
    } else {
      aCx(aCf, aCg, fontSize, aCI[z], 0, h1);
    }
  }
  function aCx(aCf, aCg, fontSize, na, aCs, h1) {
    var gu;
    var a0Z;
    var sr;
    var ss;
    h1.globalAlpha = aCu(fontSize);
    if (aY.tl.uQ(na)) {
      gu = aY.sQ.tt;
      a0Z = 1.1 * fontSize / gu;
      sr = aCf - 0.5 * a0Z * gu - 0.8 * aCs * fontSize;
      ss = aCg - 1.55 * a0Z * gu;
      h1.setTransform(a0Z, 0, 0, a0Z, sr, ss);
      h1.drawImage(aY.sQ.ts[na - 1024 + aY.tl.u3], 0, 0);
      h1.setTransform(1, 0, 0, 1, 0, 0);
    } else {
      sr = aCf - 0.8 * aCs * fontSize;
      ss = aCg - (1 + (0.35 - b2.ow.uK)) * fontSize;
      h1.fillText(aY.tl.uJ(na), sr, ss);
    }
    h1.globalAlpha = 1;
  }
  function aCv(aCf, aCg, fontSize, ed, z, aCs, dt, h1) {
    var y6;
    if (ed === 1) {
      var na = aCI[z + a1.eF];
      if (aY.tl.uQ(na)) {
        y6 = aY.sQ.ts[na - 1024 + aY.tl.u3];
      } else {
        aCy(aCf, aCg, fontSize, na, aCs, h1);
        return;
      }
    } else if (ed === 2) {
      y6 = a8.a00()[4].h0[+(dt < 255)];
    } else if (ed === 3) {
      y6 = a8.a00()[5].h0[0];
    } else {
      y6 = a8.a00()[6].h0[0];
    }
    var gu = aY.sQ.tt;
    var a0Z = 0.8 * fontSize / gu;
    var sr = aCf - 0.5 * a0Z * gu - 0.534 * aCs * fontSize;
    var ss = aCg + 1.4 * a0Z * gu;
    h1.setTransform(a0Z, 0, 0, a0Z, sr, ss);
    h1.globalAlpha = aCu(fontSize);
    h1.drawImage(y6, 0, 0);
    h1.globalAlpha = 1;
    h1.setTransform(1, 0, 0, 1, 0, 0);
  }
  function aCy(aCf, aCg, fontSize, na, aCs, h1) {
    h1.globalAlpha = aCu(fontSize);
    var sr = aCf - 0.534 * aCs * fontSize;
    var ss = aCg + 1.59 * fontSize;
    h1.font = b2.ow.q5(0, 0.785 * fontSize);
    h1.fillText(aY.tl.uJ(na), sr, ss);
    h1.globalAlpha = 1;
  }
  function aCw(aCf, aCg, fontSize, player, na, h1) {
    var ss = aCg;
    h1.globalAlpha = aCu(fontSize);
    var gz = aCZ(player) * (bY.dZ.data[7].value ? aCP : aC5[player]);
    var sr = aCf - 0.5 * fontSize / gz - 0.9 * fontSize;
    for (var ec = 0; ec < 2; ec++) {
      h1.fillText(aY.tl.uJ(na), sr, ss);
      sr = aCf + 0.5 * fontSize / gz + 0.9 * fontSize;
    }
    h1.globalAlpha = 1;
  }
  function aCk(fontSize, aCh) {
    if (fontSize >= aC7 && fontSize < aC6) {
      return bV.aCz[aCh] + (aCu(fontSize)).toFixed(3) + ")";
    }
    return bV.aD0[aCh];
  }
  function aCu(fontSize) {
    if (fontSize >= aC7 && fontSize < aC6) {
      return 1 - (fontSize - aC7) / (aC6 - aC7);
    }
    return 1;
  }
  this.iC = function() {
    var z;
    if (bU.jK() % 10 === 9) {
      aCN = a1.zr() && !a1.zp();
    }
    if (!a1.zp() && ++aBz >= 4) {
      aD1();
    }
    var eI = Math.floor(aCL * aa.jO);
    eI = eI < 8 ? 8 : eI;
    eI = eI > aa.jO ? aa.jO : eI;
    var eb;
    for (z = aBy + eI - 1; z >= aBy; z--) {
      eb = z % aa.jO;
      aD2(aa.jQ[eb]);
    }
    aBy += eI;
    aBy %= aa.jO;
  }
  ;
  this.kw = function() {
    var z, fo, hA, hB;
    if (bU.jK() % 4 !== 1) {
      return;
    }
    for (z = aa.jO - 1; z >= 0; z--) {
      fo = aa.jQ[z];
      if (aQ.a2z[fo] < 2) {
        continue;
      }
      hA = Math.max(aCR[fo] - 1, 0);
      hB = Math.max(aCS[fo] - 1, 0);
      if (hA === hB) {
        if (hA === 0) {
          aQ.a2z[fo] %= 2;
        }
      } else if (hB === 0 && aQ.a2z[fo] < 6) {
        aQ.a2z[fo] += 4;
      }
      aCR[fo] = hA;
      aCS[fo] = hB;
    }
  }
  ;
  this.a1K = function(player) {
    var z = player + 2 * a1.eF;
    var dt = a6f[z];
    if (dt > 0) {
      aA.vG(50, player);
      a6f[z] = 0;
      return dt === 255;
    }
    return false;
  }
  ;
  this.a0J = function(player) {
    return a6f[player + 2 * a1.eF] === 255;
  }
  ;
  function aD1() {
    var z, eb, ec;
    aBz = 0;
    for (ec = 4; ec >= 1; ec--) {
      for (eb = aa.jO - 1; eb >= 0; eb--) {
        z = aa.jQ[eb] + ec * a1.eF;
        if (a6f[z] > 0 && a6f[z] < 255) {
          a6f[z]--;
        }
      }
    }
    if (a1.v9 === 2) {
      return;
    }
    for (eb = aa.jO - 1; eb >= 0; eb--) {
      z = aa.jQ[eb];
      if (a6f[z] > 0 && a6f[z] < 255) {
        a6f[z]--;
      }
    }
  }
  function aD2(z) {
    var gz = aCZ(z) * aC4[z];
    if (aC2[z] > 0 && aD3(z, aC0[z], aC1[z], aC2[z], aC3[z])) {
      if (!aD4(z) && aD5(z, gz)) {
        aD6(z);
      }
    } else if (aD7(z, gz)) {
      aD6(z);
    } else {
      aD8(z, gz);
    }
  }
  function aD9(gz, t) {
    return 1 + Math.floor(aC9 * gz * t);
  }
  function aD4(z) {
    var dy = false;
    var eP, eR, t, ir;
    for (var ec = 0; ec < 8; ec++) {
      t = aC2[z] + 2;
      ir = aC3[z] + 2;
      if (t > aV.hu[z] - aV.ht[z] + 1 || ir > aV.hw[z] - aV.hv[z] + 1) {
        return dy;
      }
      eP = aC0[z] - 1;
      eR = aC1[z] - 1;
      if (aD3(z, eP, eR, t, ir)) {
        aC0[z] = eP;
        aC1[z] = eR;
        aC2[z] = t;
        aC3[z] = ir;
        dy = true;
      } else {
        return dy;
      }
    }
    return dy;
  }
  function aD5(z, gz) {
    var dy = false;
    var eP, eR, t, ir;
    var a6o = aC2[z];
    var lw = 1 + Math.floor(0.02 * a6o);
    for (var ec = 1; ec < 5; ec++) {
      t = a6o + ec * lw;
      if (t > aV.hu[z] - aV.ht[z] + 1) {
        return dy;
      }
      ir = aD9(gz, t);
      if (ir > aV.hw[z] - aV.hv[z] + 1) {
        return dy;
      }
      eP = aV.ht[z] + Math.floor(Math.random() * (aV.hu[z] - aV.ht[z] + 2 - t));
      eR = aV.hv[z] + Math.floor(Math.random() * (aV.hw[z] - aV.hv[z] + 2 - ir));
      if (aD3(z, eP, eR, t, ir)) {
        aC0[z] = eP;
        aC1[z] = eR;
        aC2[z] = t;
        aC3[z] = ir;
        dy = true;
      }
    }
    return dy;
  }
  function aD7(z, gz) {
    var eP = aC0[z] + 1;
    var eR = aC1[z] + 1;
    var t = aC2[z] - 2;
    var ir;
    while (true) {
      if (t < 1) {
        aC2[z] = 0;
        break;
      }
      ir = aD9(gz, t);
      if (aD3(z, eP, eR, t, ir)) {
        aC0[z] = eP;
        aC1[z] = eR;
        aC2[z] = t;
        aC3[z] = ir;
        return true;
      }
      eP++;
      eR++;
      t -= 2;
    }
    return false;
  }
  function aD8(z, gz) {
    var eP, eR, t, ir, ec, m3;
    var ib = aV.hu[z] - aV.ht[z] + 1;
    var ki = Math.floor(0.02 * ib);
    ki = ki < 1 ? 1 : ki;
    m3 = -6 * ki;
    for (ec = ib; ec >= m3; ec -= ki) {
      t = ec > 0 ? ec : 1;
      ir = aD9(gz, t);
      eP = aV.ht[z] + Math.floor(Math.random() * (aV.hu[z] - aV.ht[z] + 2 - t));
      eR = aV.hv[z] + Math.floor(Math.random() * (aV.hw[z] - aV.hv[z] + 2 - ir));
      if (aD3(z, eP, eR, t, ir)) {
        aC0[z] = eP;
        aC1[z] = eR;
        aC2[z] = t;
        aC3[z] = ir;
        return;
      }
    }
  }
  function aD6(z) {
    var eb;
    var left = aC0[z];
    for (eb = aC0[z] - aV.ht[z] - 1; eb >= 0; eb--) {
      left--;
      if (!aDA(z, left, aC1[z], aC3[z])) {
        left++;
        break;
      }
    }
    var right = aC0[z];
    for (eb = aV.hu[z] - aC0[z] - aC2[z]; eb >= 0; eb--) {
      right++;
      if (!aDA(z, right + aC2[z] - 1, aC1[z], aC3[z])) {
        right--;
        break;
      }
    }
    var eP = Math.floor((left + right) / 2);
    var top = aC1[z];
    for (eb = aC1[z] - aV.hv[z] - 1; eb >= 0; eb--) {
      top--;
      if (!aDB(z, eP, top, aC2[z])) {
        top++;
        break;
      }
    }
    var bottom = aC1[z];
    for (eb = aV.hw[z] - aC1[z] - aC3[z]; eb >= 0; eb--) {
      bottom++;
      if (!aDB(z, eP, bottom + aC3[z] - 1, aC2[z])) {
        bottom--;
        break;
      }
    }
    var eR = Math.floor((top + bottom) / 2);
    if (aD3(z, eP, eR, aC2[z], aC3[z])) {
      aC0[z] = eP;
      aC1[z] = eR;
    }
  }
  function aD3(player, eP, eR, t, ir) {
    var ed;
    var eL = Math.floor(0.2 * t);
    eL = eL < 1 ? 1 : eL;
    for (ed = eP + t - 1; ed >= eP; ed--) {
      if (!aDA(player, ed, eR, ir)) {
        return false;
      }
    }
    eL = Math.floor(0.25 * ir);
    eL = eL < 1 ? 1 : eL;
    for (ed = eR + ir - 1 - eL; ed >= eR + eL; ed--) {
      if (!aDB(player, eP, ed, t)) {
        return false;
      }
    }
    return true;
  }
  function aDA(player, eP, eR, ir) {
    return (aQ.tK(player, (eR * bI.eT + eP) * 4) && aQ.tK(player, ((eR + ir - 1) * bI.eT + eP) * 4));
  }
  function aDB(player, eP, eR, t) {
    return (aQ.tK(player, (eR * bI.eT + eP) * 4) && aQ.tK(player, (eR * bI.eT + eP + t - 1) * 4));
  }
}
function cL() {
  var vW;
  var aDC;
  this.dH = function() {
    var z, eb;
    vW = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";");
    var a1c = ["K ", " Y", "E ", " Z", " z", " s", "S "];
    var aDD = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
    aDC = "Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation".split(";");
    for (z = vW.length - 1; z >= 0; z--) {
      for (eb = a1c.length - 1; eb >= 0; eb--) {
        vW[z] = vW[z].replace(a1c[eb], aDD[eb]);
      }
    }
  }
  ;
  this.v = function() {
    if (ay.jh && ay.ji.aBC) {
      aDE();
      return;
    }
    if (a1.jl === 9) {
      aDF();
    } else if (a1.jn) {
      aDG();
    } else {
      aDH();
    }
  }
  ;
  function aDG() {
    var z;
    var h3 = ao.random();
    for (z = a1.jN; z < a1.eF; z++) {
      aV.a1G[z] = aV.w2[z] = vW[(z + h3) % a1.eF];
    }
  }
  function aDF() {
    var z;
    var h3 = ao.random();
    var eI = vW.length;
    var k8 = a1.jN + ap.aDI;
    for (z = k8 - 1; z >= a1.jN; z--) {
      aV.a1G[z] = aV.w2[z] = vW[(z + h3) % eI];
    }
    eI = aDC.length;
    for (z = k8; z < a1.eF; z++) {
      aV.a1G[z] = aV.w2[z] = aDC[z % eI];
    }
  }
  function aDH() {
    var z;
    var eI = vW.length;
    var h3 = ao.random();
    for (z = a1.jN; z < a1.eF; z++) {
      aV.a1G[z] = aV.w2[z] = vW[(z + h3) % eI];
    }
  }
  function aDE() {
    var z;
    for (z = a1.jN; z < a1.eF; z++) {
      aV.a1G[z] = aV.w2[z] = ay.ji.aBC[z % a1.st];
    }
  }
}
function cg() {
  this.aDJ = [];
  this.aDK = [];
  this.dH = function() {
    this.aDJ = [];
    this.aDK = [];
  }
  ;
  this.iC = function() {
    if (this.aDJ.length >= 0) {
      this.aDL(this.aDJ);
    }
    if (this.aDK.length >= 0) {
      this.aDL(this.aDK);
    }
  }
  ;
  this.aDL = function(ey) {
    var z;
    var ec = -1;
    for (z = ey.length - 1; z >= 0; z--) {
      ey[z].ds--;
      if (ey[z].ds <= 0) {
        ec = z;
        break;
      }
    }
    for (z = ec; z >= 0; z--) {
      ey.shift();
    }
  }
  ;
  this.a08 = function(id, tb, aDM) {
    return this.ee(this.aDJ, id, tb, aDM);
  }
  ;
  this.aDN = function(id, tb, aDM) {
    return this.ee(this.aDK, id, tb, aDM);
  }
  ;
  this.ee = function(ey, id, tb, aDM) {
    if (aDO(ey, id, tb)) {
      return false;
    }
    if (aDM) {
      aDP(ey, id, tb);
    }
    return true;
  }
  ;
  function aDO(ey, id, tb) {
    var z, kB;
    for (z = tb.length - 1; z >= 0; z--) {
      for (kB = ey.length - 1; kB >= 0; kB--) {
        if (ey[kB].player === tb[z] && id === ey[kB].id) {
          return true;
        }
      }
    }
    return false;
  }
  function aDP(ey, id, tb) {
    var z;
    for (z = tb.length - 1; z >= 0; z--) {
      ey.push({
        player: tb[z],
        id: id,
        ds: 384
      });
    }
  }
}
function cK() {
  this.w2 = new Array(a1.eF);
  this.a1G = new Array(a1.eF);
  this.yb = new Uint8Array(a1.eF);
  this.lI = new Uint8Array(a1.eF);
  this.ht = new Uint16Array(a1.eF);
  this.hv = new Uint16Array(a1.eF);
  this.hu = new Uint16Array(a1.eF);
  this.hw = new Uint16Array(a1.eF);
  this.g6 = new Uint32Array(a1.eF);
  this.t8 = new Uint32Array(a1.eF);
  this.gK = new Uint32Array(a1.eF);
  this.fi = null;
  this.fw = null;
  this.fx = null;
  this.ei = null;
  this.oL = new Uint16Array(a1.eF);
  this.iK = new Uint16Array(a1.eF);
  this.iL = new Uint16Array(a1.eF);
  this.vo = new Uint16Array(a1.eF);
  this.vu = new Uint8Array(a1.eF);
  this.yg = new Uint16Array(a1.eF);
  this.dH = function(tb) {
    for (var z = tb.length - 1; z >= 0; z--) {
      this.a1G[z] = this.w2[z] = tb[z].name;
      this.yb[z] = tb[z].a9H;
    }
    this.lI.fill(0);
    this.ht.fill(0);
    this.hv.fill(0);
    this.hu.fill(0);
    this.hw.fill(0);
    this.g6.fill(0);
    this.t8.fill(0);
    this.gK.fill(0);
    this.fi = new Array(a1.eF);
    this.fw = new Array(a1.eF);
    this.fx = new Array(a1.eF);
    this.ei = new Array(a1.eF);
    this.oL.fill(0);
    this.iK.fill(0);
    this.iL.fill(0);
    this.vo.fill(0);
    this.vu.fill(0);
    this.yg.fill(0);
  }
  ;
}
function ce() {
  this.aDQ = function(player) {
    a4.lH(player);
    a1.vB++;
    aV.yb[player] = 2;
    aV.vo[player] = bX.vi.aAl();
    if (player === a1.e2) {
      aK.show(false, false);
      aJ.a5V();
      bH.result.vs();
    }
    aU.a1K(player);
  }
  ;
}
function cE() {
  this.jQ = null;
  this.jO = 0;
  this.zi = function() {
    var z;
    this.jO = 0;
    for (z = a1.eF - 1; z >= 0; z--) {
      if (aV.lI[z] !== 0) {
        this.jO++;
      }
    }
    this.jQ = new Uint16Array(this.jO);
    var eI = 0;
    for (z = 0; z < a1.eF; z++) {
      if (aV.lI[z] !== 0) {
        this.jQ[eI++] = z;
      }
    }
  }
  ;
  this.kv = function() {
    aDR();
    this.aDS();
  }
  ;
  this.aDS = function() {
    var lI = aV.lI;
    var jP = this.jQ;
    var a67 = this.jO;
    for (var z = a67 - 1; z >= 0; z--) {
      if (lI[jP[z]] === 0) {
        jP[z] = jP[--a67];
      }
    }
    this.jO = a67;
  }
  ;
  function aDR() {
    var g6 = aV.g6;
    var t8 = aV.t8;
    var vu = aV.vu;
    var jQ = aa.jQ;
    for (var z = aa.jO - 1; z >= 0; z--) {
      var fo = jQ[z];
      if (g6[fo] <= bB.ek(t8[fo], 4)) {
        aZ.dP(fo);
      } else if (g6[fo] >= t8[fo]) {
        var dt = g6[fo];
        t8[fo] = dt;
        if (dt >= 250) {
          vu[fo] = 1;
        }
      } else {
        t8[fo] -= Math.max(1, bB.ek(t8[fo] - g6[fo], 1000));
      }
    }
  }
}
var wp;
var qo;
function cM() {
  var aDT;
  this.jr = null;
  this.dH = function() {
    aDT = [];
    if (a1.jl !== 9) {
      return;
    }
    this.aDU();
  }
  ;
  this.aDU = function() {
    var z;
    var aDV = [57, 85, 105, 150, 190, 333];
    this.aDI = 0;
    this.jr = [0, 0, 0, 0, 0, 0];
    if (a1.jN <= aDV[0]) {
      this.jr[0] = Math.max(bB.ek(a1.jN * (512 - a1.jN), aDV[0]), 13);
      a1.jk = this.jr[0];
    } else {
      a1.jk = a1.eF - a1.jN;
      for (z = 1; z < 6; z++) {
        if (a1.jN <= aDV[z]) {
          this.jr[z - 1] = (512 - aDV[z - 1]) - bB.ek((512 - aDV[z - 1]) * (a1.jN - aDV[z - 1]), aDV[z] - aDV[z - 1]);
          this.jr[z] = 512 - a1.jN - this.jr[z - 1];
          break;
        }
      }
    }
    a1.st = a1.jN + a1.jk;
  }
  ;
  this.aAt = function(player) {
    aDT.push({
      player: player,
      fj: (14 + ao.ic(20))
    });
  }
  ;
  this.iC = function() {
    if (a1.jl !== 9) {
      return;
    }
    aDW();
  }
  ;
  function aDW() {
    var z;
    for (z = aDT.length - 1; z >= 0; z--) {
      if (--aDT[z].fj <= 0) {
        aU.oW(aDT[z].player, 0, aY.tl.u6 + aY.tl.uL);
        aDT.splice(z);
      }
    }
  }
}
function cv() {
  this.aBG = 22;
  this.eT = 0;
  this.eU = 0;
  this.sN = null;
  this.sJ = null;
  this.sK = null;
  this.sO = null;
  this.fz = 0;
  this.a8g = 0;
  this.sL = false;
  this.sM = new aDX();
  this.ji = new aDY();
  this.a1i = new aDZ();
  this.dH = function() {
    this.ji.dH();
  }
  ;
  this.loadMap = function(map, a8k) {
    var sh;
    map = map % this.aBG;
    if (map === this.fz && (!aDa(this.fz) || a8k === this.a8g)) {
      return;
    }
    this.sL = false;
    this.sM.a8s();
    ao.ze(map);
    this.fz = map;
    this.a8g = a8k;
    if (aDa(map)) {
      bI.ji.sh[map].aDb = a8k;
    }
    if (aDc(this.fz)) {
      aDd();
      return;
    }
    sh = bI.ji.sh[this.fz];
    this.eT = sh.t;
    this.eU = sh.ir;
    ao.ze(sh.aDb);
    ae.v([this.eT, this.eU, sh.lN, sh.lK]);
    aDe();
    ad.aDf();
    ae.aDg();
  }
  ;
  this.fy = function(z) {
    return z === 3 || z === 7 || z === 9 || z === 21 || z === this.aB1();
  }
  ;
  this.aDh = function(z) {
    return z === 2 || z === 7 || z === 9 || z === 20;
  }
  ;
  this.aDi = function(z) {
    return z === 1;
  }
  ;
  this.aB1 = function() {
    return this.aBG;
  }
  ;
  function aDc(z) {
    return bI.ji.sh[z].aDj !== undefined;
  }
  function aDa(z) {
    return !(z === 1 || aDc(z) || z === bI.aB1());
  }
}
function aDX() {
  this.a3u = -1;
  this.dr = 0;
  this.aDk = 0;
  this.aDl = 8;
  this.aDm = 32;
  this.aDn = 8;
  this.aDo = 32;
  this.aDp = [0, 0];
  this.a2z = [0, 0, 0, 0];
  this.ho = null;
  this.aDq = true;
  this.aDr = false;
  this.a8s = function() {
    if (this.a3u !== -1) {
      clearTimeout(this.a3u);
    }
    this.a3u = -1;
    this.ho = null;
    ae.aDg();
  }
  ;
  this.dH = function() {
    if (aN.wU() === 7 || this.aDr) {
      return;
    }
    this.aDq = true;
    this.dr = 0;
    this.aDk = 1;
    this.aDp = [bI.ji.sh[bI.fz].sg[0], bI.ji.sh[bI.fz].si[0]];
    this.a2z = [bI.ji.sh[bI.fz].aDj[3], bI.ji.sh[bI.fz].aDj[4], bI.ji.sh[bI.fz].aDj[5], bI.ji.sh[bI.fz].aDj[6]];
    this.aDl = bI.ji.sh[bI.fz].aDj[7];
    this.aDm = bI.ji.sh[bI.fz].aDj[8];
    this.aDn = bI.ji.sh[bI.fz].aDj[9];
    this.aDo = bI.ji.sh[bI.fz].aDj[10];
    if (this.aDq) {
      this.a3u = setTimeout(aDs, 16);
    } else {
      this.iC();
    }
  }
  ;
  function aDs() {
    bI.sM.iC();
  }
  this.iC = function() {
    if (aN.wU() === 8 && a5.lb()) {
      this.a3u = setTimeout(aDs, 16);
      return;
    }
    if (this.dr === 0) {
      var aDb = ao.aDt();
      ao.ze(bI.ji.sh[bI.fz].aDj[2]);
      ae.v([bI.eT, bI.eU, bI.ji.sh[bI.fz].aDj[0], bI.ji.sh[bI.fz].aDj[1]]);
      ao.ze(aDb);
      this.ho = ae.aDu();
      this.dr++;
      if (this.aDq) {
        this.a3u = setTimeout(aDs, 16);
        return;
      }
    }
    var ir = !this.aDq ? 1000000 : 10;
    ir = (bI.eU - this.aDk - 1) < ir ? (bI.eU - this.aDk - 1) : ir;
    var t5 = this.aDk + ir;
    var fo, e4;
    for (var eR = this.aDk; eR < t5; eR++) {
      for (var eP = 1; eP < bI.eT - 1; eP++) {
        e4 = eP + eR * bI.eT;
        fo = 4 * e4;
        if (gk(fo)) {
          this.aDv(fo, e4, 1);
        } else {
          this.aDv(fo, e4, 0);
          if (tE(eP, eR, fo)) {
            this.aDw(eP, eR);
          }
        }
      }
    }
    this.aDk = t5;
    if (this.aDk >= bI.eU - 1) {
      bI.sJ.putImageData(bI.sK, 0, 0, 1, 1, bI.eT - 2, bI.eU - 2);
      bU.dO = true;
      this.a8s();
      return;
    } else {
      if (this.aDq) {
        this.a3u = setTimeout(aDs, 16);
      }
    }
    return;
  }
  ;
  this.aDv = function(fo, e4, o0) {
    var aDx = Math.floor(this.aDp[o0] + this.a2z[o0] * this.ho[e4] / 10000) - bI.sO[fo];
    aDy(fo, aDx);
  }
  ;
  this.aDz = function(fo, h3, aE0, o0, a2z) {
    var aDx = Math.floor(this.aDp[o0] + (1 - h3 / aE0) * a2z) - bI.sO[fo];
    aDy(fo, aDx);
  }
  ;
  function aDy(fo, aDx) {
    if (aDx > 0) {
      bI.sO[fo] += aDx;
      bI.sO[fo + 1] += aDx;
      bI.sO[fo + 2] += aDx;
    }
  }
  this.aDw = function(kU, kV) {
    var fo, h3, aE0;
    var sk = kU - this.aDm;
    var sl = kV - this.aDm;
    var t6 = kU + this.aDm;
    var t5 = kV + this.aDm;
    sk = sk < 1 ? 1 : sk;
    sl = sl < 1 ? 1 : sl;
    t6 = t6 > bI.eT - 2 ? bI.eT - 2 : t6;
    t5 = t5 > bI.eU - 2 ? bI.eU - 2 : t5;
    for (var eR = sl; eR <= t5; eR++) {
      for (var eP = sk; eP <= t6; eP++) {
        fo = 4 * (eP + eR * bI.eT);
        if (gk(fo)) {
          aE0 = this.aDl + (this.aDm - this.aDl) * this.ho[eP + bI.eT * eR] / 10000;
          if (Math.abs(kU - eP) > aE0 || Math.abs(kV - eR) > aE0) {
            continue;
          }
          h3 = Math.sqrt((kU - eP) * (kU - eP) + (kV - eR) * (kV - eR));
          if (h3 >= aE0) {
            continue;
          }
          this.aDz(fo, h3, aE0, 1, this.a2z[3]);
        } else {
          aE0 = this.aDn + (this.aDo - this.aDn) * this.ho[eP + bI.eT * eR] / 10000;
          if (Math.abs(kU - eP) > aE0 || Math.abs(kV - eR) > aE0) {
            continue;
          }
          h3 = Math.sqrt((kU - eP) * (kU - eP) + (kV - eR) * (kV - eR));
          if (h3 >= aE0) {
            continue;
          }
          this.aDz(fo, h3, aE0, 0, this.a2z[2]);
        }
      }
    }
  }
  ;
  function gk(fo) {
    return bI.sO[fo + 2] > bI.sO[fo] && bI.sO[fo + 2] > bI.sO[fo + 1];
  }
  function tE(eP, eR, fo) {
    return (eP > 1 && gk(fo - 4)) || (eP < bI.eT - 2 && gk(fo + 4)) || (eR > 1 && gk(fo - 4 * bI.eT)) || (eR < bI.eU - 2 && gk(fo + 4 * bI.eT));
  }
}
function aDe() {
  if (bI.fz === 2) {
    aE1([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]);
  } else if (bI.fz === 7) {
    aE1([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]);
  } else if (bI.fz === 8) {
    aE1([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]);
  } else if (bI.fz === 9) {
    aE1([512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]);
  } else if (bI.fz === 20) {
    aE1([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]);
  }
}
function aE1(aE2, aE3, aE4, aE5, aE6) {
  var z, eP, eR;
  var hQ = aE2.length - 1;
  var aE7 = bI.eT + bI.eU;
  aE7 *= aE7;
  var aE8;
  var aE9;
  var eI = aE4.length;
  for (z = eI - 1; z >= 0; z--) {
    aE4[z] *= aE4[z];
  }
  var xo;
  var aEA;
  var aEB = new Array(eI);
  var aEC = new Array(eI);
  var aED = new Array(eI);
  var el = ae.aDu();
  if (aE6 === undefined) {
    aE6 = new Array(eI);
    for (z = eI - 1; z >= 0; z--) {
      aE6[z] = 0;
    }
  }
  for (z = 1; z < eI; z++) {
    aEB[z] = aE4[z] - aE4[z - 1];
    aEC[z] = aE5[z] - aE5[z - 1];
    aED[z] = aE6[z] - aE6[z - 1];
  }
  for (eP = bI.eT - 1; eP >= 0; eP--) {
    for (eR = bI.eU - 1; eR >= 0; eR--) {
      aE8 = aE7;
      for (z = hQ; z >= 0; z--) {
        aE9 = (eP - aE2[z]) * (eP - aE2[z]) + (eR - aE3[z]) * (eR - aE3[z]);
        aE8 = aE9 < aE8 ? aE9 : aE8;
      }
      xo = aE5[eI - 1];
      aEA = aE6[eI - 1];
      for (z = 1; z < eI; z++) {
        if (aE8 < aE4[z]) {
          xo = aE5[z - 1] + aA4((aE8 - aE4[z - 1]) * aEC[z], aEB[z]);
          aEA = aE6[z - 1] + aA4((aE8 - aE4[z - 1]) * aED[z], aEB[z]);
          break;
        }
      }
      aEE(bI.eT * eR + eP, xo, aEA, el);
    }
  }
}
function aEE(o0, xo, aEA, el) {
  if (xo < 500) {
    el[o0] = bB.ek(el[o0] * xo * 2, 1000);
  } else if (xo > 500) {
    el[o0] += bB.ek((10000 - el[o0]) * 2 * (xo - 500), 1000);
  }
  el[o0] += bB.ek(aEA * (10 * xo - el[o0]), 1000);
}
function cO() {
  var aEF;
  this.a1f = 0;
  this.a1g = 0;
  this.a1h = 0;
  this.a1i = 0;
  this.dH = function() {
    aEF = new Array(bI.aBG);
    aEF[0] = {
      t: [0, 5000, 8000, 10000],
      h3: [220, 250, 255, 220],
      qL: [190, 220, 0, 0],
      ec: [170, 200, 0, 0]
    };
    aEF[1] = {
      t: [0, 4000, 5000, 6000, 10000],
      h3: [25, 0, 100, 0, 25],
      qL: [25, 0, 0, 0, 25],
      ec: [25, 0, 0, 0, 25]
    };
    aEF[2] = {
      t: [0, 500, 2500, 2999, 3000, 3200, 4200, 5200, 5700, 8800, 10000],
      h3: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
      qL: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
      ec: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
    };
    aEF[3] = {
      t: [0, 400, 1899, 1900, 3200, 4500, 6000, 7700, 8499, 8500, 9500, 10000],
      h3: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
      qL: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
      ec: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
    };
    aEF[4] = {
      t: [0, 300, 1400, 1700, 3000, 4000, 10000],
      h3: [10, 10, 20, 10, 10, 170, 212],
      qL: [20, 20, 60, 100, 100, 110, 170],
      ec: [70, 70, 160, 30, 30, 60, 120]
    };
    aEF[5] = {
      t: [0, 1000, 3000, 3500, 4000, 4500, 7000, 7500, 8000, 10000],
      h3: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
      qL: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
      ec: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
    };
    aEF[6] = {
      t: [0, 700, 2650, 3200, 5000, 8000, 10000],
      h3: [10, 10, 60, 255, 255, 200, 200],
      qL: [10, 10, 60, 255, 255, 200, 200],
      ec: [80, 80, 255, 255, 255, 200, 200]
    };
    aEF[7] = {
      t: [0, 400, 1999, 2000, 3200, 4000, 4700, 5500, 6500, 9500, 10000],
      h3: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
      qL: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
      ec: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
    };
    aEF[8] = {
      t: [0, 700, 1300, 1900, 1901, 2500, 3400, 6000, 10000],
      h3: [25, 30, 30, 30, 255, 255, 30, 40, 20],
      qL: [25, 30, 150, 150, 245, 245, 80, 150, 70],
      ec: [60, 170, 170, 170, 235, 235, 30, 40, 40]
    };
    aEF[9] = {
      t: [0, 400, 2009, 2010, 3300, 4000, 5200, 6500, 8000, 9500, 10000],
      h3: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
      qL: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
      ec: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
    };
    aEF[20] = {
      t: [0, 5500, 6700, 6999, 7000, 7300, 7600, 8200, 10000],
      h3: [5, 5, 70, 70, 255, 255, 252, 10, 8],
      qL: [20, 28, 190, 190, 255, 255, 248, 90, 60],
      ec: [60, 80, 220, 220, 220, 220, 217, 10, 8]
    };
    aEF[21] = {
      t: [0, 1500, 3000, 4000, 5000, 5999, 6000, 9500, 10000],
      h3: [12, 30, 10, 16, 40, 50, 55, 170, 170],
      qL: [45, 100, 40, 80, 120, 80, 55, 170, 170],
      ec: [12, 60, 10, 16, 40, 50, 55, 170, 170]
    };
  }
  ;
  this.aDf = function() {
    var gx = aEG();
    aEH(aEF[bI.fz].t, aEF[bI.fz].h3, aEF[bI.fz].qL, aEF[bI.fz].ec);
    bI.sJ.putImageData(gx, 0, 0);
    if (bI.aDi(bI.fz)) {
      aEI();
    }
    bI.sL = true;
    bU.dO = true;
  }
  ;
  function aEG() {
    var gx;
    bI.sN = document.createElement("canvas");
    bI.sN.width = bI.eT;
    bI.sN.height = bI.eU;
    bI.sJ = bI.sN.getContext("2d", {
      alpha: false
    });
    gx = bI.sJ.getImageData(0, 0, bI.eT, bI.eU);
    bI.sO = gx.data;
    return gx;
  }
  function aEH(t, h3, qL, ec) {
    var z, eb;
    var el = ae.aDu();
    var eI = t.length - 2;
    var ez;
    var aEJ = new Array(eI + 1);
    var aEK = new Array(eI + 1);
    var aEL = new Array(eI + 1);
    var aEM = new Array(eI + 1);
    for (eb = eI; eb >= 0; eb--) {
      aEJ[eb] = t[eb + 1] - t[eb];
      aEK[eb] = h3[eb + 1] - h3[eb];
      aEL[eb] = qL[eb + 1] - qL[eb];
      aEM[eb] = ec[eb + 1] - ec[eb];
    }
    for (z = bI.eT * bI.eU - 1; z >= 0; z--) {
      for (eb = eI; eb >= 0; eb--) {
        if (el[z] >= t[eb]) {
          ez = el[z] - t[eb];
          bI.sO[z * 4] = h3[eb] + aA4(aEK[eb] * ez, aEJ[eb]);
          bI.sO[z * 4 + 1] = qL[eb] + aA4(aEL[eb] * ez, aEJ[eb]);
          bI.sO[z * 4 + 2] = ec[eb] + aA4(aEM[eb] * ez, aEJ[eb]);
          bI.sO[z * 4 + 3] = 255;
          break;
        }
      }
    }
  }
  function aEI() {
    if (!aP.qP() || !bI.aDi(bI.fz)) {
      return;
    }
    var aEN = aP.a7t("arena");
    var aEO = aP.a7t("territorial.io");
    aEP(aEN, 5, 0.5, 0.5, 0.1);
    aEP(aEO, 2, 0.5, 0.45, 0.1);
  }
  function aEP(y6, gz, eP, eR, globalAlpha) {
    bI.sJ.save();
    bI.sJ.globalAlpha = globalAlpha;
    bI.sJ.imageSmoothingEnabled = false;
    bI.sJ.scale(gz, gz);
    bI.sJ.drawImage(y6, Math.floor(eP * (bI.eT / gz - y6.width)), Math.floor(eR * (bI.eU / gz - y6.height)));
    bI.sJ.restore();
  }
  this.zg = function() {
    var z, fo, eP, eR, aEQ, aER, f1;
    var a1g = 0;
    var t = bI.eT;
    var ir = bI.eU;
    var ez = t * ir * 4;
    var aES = a6H;
    var aET = bI.sO;
    for (z = t - 1; z >= 0; z--) {
      fo = z << 2;
      aES[fo + 2] = aES[ez - fo - 2] = 3;
    }
    ez = t * 4;
    for (z = ir - 1; z >= 0; z--) {
      fo = z * ez;
      aES[fo + 2] = aES[fo + ez - 2] = 3;
    }
    aEQ = t - 1;
    aER = ir - 1;
    for (eR = 1; eR < aER; eR++) {
      ez = eR * t;
      for (eP = 1; eP < aEQ; eP++) {
        fo = (ez + eP) << 2;
        f1 = 1 - (aET[fo + 2] > aET[fo + 1] && aET[fo + 2] > aET[fo]);
        aES[fo + 2] = 2 - f1;
        a1g += f1;
      }
    }
    this.a1f = (t - 2) * (ir - 2);
    this.a1i = 0;
    if (bI.fy(bI.fz)) {
      bI.a1i.aEU();
      bI.a1i.aEV();
    }
    this.a1g = a1.j7 = a1g - this.a1i;
    this.a1h = this.a1f - this.a1g - this.a1i;
  }
  ;
}
function aDd() {
  var od;
  if (bI.fz === 10) {
    od = "DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX";
  } else if (bI.fz === 11) {
    od = "QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk";
  } else if (bI.fz === 12) {
    od = "JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV";
  } else if (bI.fz === 13) {
    od = "C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V";
  } else if (bI.fz === 14) {
    od = "EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs";
  } else if (bI.fz === 15) {
    od = "CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV";
  } else if (bI.fz === 16) {
    od = "DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc";
  } else if (bI.fz === 17) {
    od = "9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc";
  } else if (bI.fz === 18) {
    od = "DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-";
  } else if (bI.fz === 19) {
    od = "EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV";
  }
  (new s8()).sA(od);
}
function aDY() {
  this.sh = null;
  this.dH = function() {
    var aEW = [120, 105, 92];
    var cos = [12, 12, 60];
    var aEX = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9];
    var aEY = [140, 130, 120];
    var aEZ = [12, 12, 76];
    var aEa = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9];
    var aEb = [130, 117, 106];
    var aEc = [12, 12, 68];
    var aEd = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
    this.sh = new Array(bI.aBG + 1);
    this.sh[0] = {
      name: L(114),
      t: 230,
      ir: 230,
      lN: 1000,
      lK: 2000,
      aDb: 173
    };
    this.sh[1] = {
      name: L(115),
      t: 800,
      ir: 800,
      lN: 100,
      lK: 50,
      aDb: 43
    };
    this.sh[2] = {
      name: L(116),
      t: 512,
      ir: 512,
      lN: 128,
      lK: 32,
      aDb: 0
    };
    this.sh[3] = {
      name: L(117) + " 1",
      t: 960,
      ir: 960,
      lN: 60,
      lK: 8,
      aDb: 0
    };
    this.sh[4] = {
      name: L(118),
      t: 900,
      ir: 900,
      lN: 100,
      lK: 5,
      aDb: 0
    };
    this.sh[5] = {
      name: L(119),
      t: 1000,
      ir: 1000,
      lN: 100,
      lK: 40,
      aDb: 0
    };
    this.sh[6] = {
      name: L(120),
      t: 1000,
      ir: 1000,
      lN: 100,
      lK: 20,
      aDb: 0
    };
    this.sh[7] = {
      name: L(121),
      t: 1024,
      ir: 1024,
      lN: 128,
      lK: 32,
      aDb: 0
    };
    this.sh[8] = {
      name: L(122),
      t: 820,
      ir: 820,
      lN: 200,
      lK: 100,
      aDb: 0
    };
    this.sh[9] = {
      name: L(123),
      t: 1024,
      ir: 1024,
      lN: 128,
      lK: 32,
      aDb: 0
    };
    this.sh[10] = {
      name: L(124),
      sg: aEY,
      si: aEZ,
      aDj: aEa
    };
    this.sh[11] = {
      name: L(125),
      sg: aEb,
      si: aEc,
      aDj: aEd
    };
    this.sh[12] = {
      name: L(126),
      sg: aEb,
      si: aEc,
      aDj: aEd
    };
    this.sh[13] = {
      name: L(127),
      sg: aEW,
      si: cos,
      aDj: aEX
    };
    this.sh[14] = {
      name: L(128),
      sg: aEW,
      si: cos,
      aDj: aEX
    };
    this.sh[15] = {
      name: L(129),
      sg: aEY,
      si: aEZ,
      aDj: aEa
    };
    this.sh[16] = {
      name: L(130),
      sg: aEY,
      si: aEZ,
      aDj: aEa
    };
    this.sh[17] = {
      name: L(131),
      sg: aEW,
      si: cos,
      aDj: aEX
    };
    this.sh[18] = {
      name: L(132),
      sg: aEb,
      si: aEc,
      aDj: aEd
    };
    this.sh[19] = {
      name: L(133),
      sg: aEW,
      si: cos,
      aDj: aEX
    };
    this.sh[20] = {
      name: L(134),
      t: 1024,
      ir: 1024,
      lN: 128,
      lK: 32,
      aDb: 0
    };
    this.sh[21] = {
      name: L(117) + " 2",
      t: 940,
      ir: 940,
      lN: 80,
      lK: 8,
      aDb: 0
    };
    this.sh[bI.aBG] = {};
  }
  ;
}
function aDZ() {
  this.aEU = function() {
    var fo, eP, eR, ez;
    var aES = a6H;
    var aET = bI.sO;
    var t = bI.eT;
    var aEQ = t - 1;
    var aER = bI.eU - 1;
    var fj = 0;
    for (eR = 1; eR < aER; eR++) {
      ez = eR * t;
      for (eP = 1; eP < aEQ; eP++) {
        fo = (ez + eP) << 2;
        if (aET[fo] === aET[fo + 1] && aET[fo] === aET[fo + 2]) {
          fj++;
          aES[fo + 2] = 4;
        }
      }
    }
    ad.a1i = fj;
  }
  ;
  this.aEV = function() {
    var aES = a6H;
    var t = bI.eT;
    var aEQ = t - 1;
    var aER = bI.eU - 1;
    var id = 5;
    for (var eR = 1; eR < aER; eR++) {
      var ez = eR * t;
      for (var eP = 1; eP < aEQ; eP++) {
        var dy = ((ez + eP) << 2) + 2;
        if (aES[dy] === 4) {
          aEe(dy, id);
          id = Math.max((id + 1) % 256, 5);
        }
      }
    }
  }
  ;
  function aEe(dy, id) {
    var eI = 1;
    var aES = a6H;
    var eK = aQ.eK;
    var y0 = [dy];
    aES[dy] = id;
    while (eI) {
      var y1 = [];
      for (var z = 0; z < eI; z++) {
        var e7 = y0[z];
        for (var eL = 3; eL >= 0; eL--) {
          var eM = e7 + eK[eL];
          if (aES[eM] === 4) {
            aES[eM] = id;
            y1.push(eM);
          }
        }
      }
      y0 = y1;
      eI = y0.length;
    }
  }
}
var tS;
var a6H;
var zj;
var zk;
function zf() {
  if (tS === undefined) {
    tS = document.createElement("canvas");
  }
  tS.width = bI.eT;
  tS.height = bI.eU;
  zj = tS.getContext("2d", {
    alpha: true
  });
  zk = zj.getImageData(0, 0, bI.eT, bI.eU);
  a6H = zk.data;
  b2.p6.sP(a6H);
}
function cP() {
  var el;
  var t;
  var ir;
  var max;
  var aEf;
  var lK;
  var aEg = 10000;
  var aEh;
  var aEi;
  var aEj;
  var aEk;
  var aEl;
  var aEm;
  var aEn;
  var aEo;
  this.v = function(yy) {
    aEp(yy);
    aEq();
    aEr();
    aEs();
  }
  ;
  this.aDu = function() {
    return el;
  }
  ;
  this.aDg = function() {
    el = null;
  }
  ;
  function aEp(yy) {
    var z;
    t = yy[0];
    ir = yy[1];
    aEf = yy[2];
    lK = yy[3];
    el = new Int16Array(t * ir);
    max = t > ir ? t : ir;
    aEh = new Int16Array(max);
    aEi = [];
    aEj = [];
    aEk = [];
    aEl = new Array(t);
    aEm = new Array(ir);
    for (z = t - 1; z >= 0; z--) {
      aEl[z] = false;
    }
    for (z = ir - 1; z >= 0; z--) {
      aEm[z] = false;
    }
    aEn = new Int16Array(t);
    aEo = new Int16Array(ir);
  }
  function aEt(eI) {
    var aEu = ao.random() % aEg;
    var lN = ao.random() % (2 * aEf + 1) - aEf;
    aEv(aEu, lN, eI);
  }
  function aEw(aEu, eI) {
    var lN = ao.random() % (2 * aEf + 1) - aEf;
    aEv(aEu, lN, eI);
  }
  function aEv(aEu, lN, eI) {
    var z;
    aEh[0] = aEu;
    for (z = 1; z < eI; z++) {
      aEh[z] = aEh[z - 1] + lN;
      if (aEh[z] >= aEg) {
        aEh[z] = aEg - 1;
        lN = -lN;
      } else if (aEh[z] < 0) {
        aEh[z] = 0;
        lN = -lN;
      } else {
        lN += ao.random() >= 16384 ? lK : -lK;
        lN = lN < -aEf ? -aEf : lN > aEf ? aEf : lN;
      }
    }
  }
  function aEx(eP, eR, aEy, eI) {
    if (aEy) {
      aEz(eP, eR, eI);
    } else {
      aF0(eP, eR, eI);
    }
  }
  function aEz(eP, eR, eI) {
    var z;
    for (z = 0; z < eI; z++) {
      el[eR * t + eP + z] = aEh[z];
    }
  }
  function aF0(eP, eR, eI) {
    var z;
    for (z = 0; z < eI; z++) {
      el[eR * t + eP + z * t] = aEh[z];
    }
  }
  function aF1(value, eI) {
    var z, ki, dy;
    var hF = value - aEh[eI - 1];
    if (hF === 0) {
      return;
    }
    ki = 1 + bB.ek(Math.abs(hF), eI - 1);
    ki = hF < 0 ? -ki : ki;
    aEh[eI - 1] = value;
    dy = eI - 1 - bB.ek(Math.abs(hF), Math.abs(ki));
    dy = dy < 1 ? 1 : dy > eI - 2 ? eI - 2 : dy;
    for (z = eI - 2; z >= dy; z--) {
      aEh[z] += hF - (eI - 1 - z) * ki;
    }
    if (hF < 0) {
      aF2(eI);
    } else {
      aF3(eI);
    }
  }
  function aF3(eI) {
    var z;
    for (z = eI - 2; z >= 1; z--) {
      if (aEh[z] >= aEg) {
        aEh[z] = 2 * aEg - aEh[z] - 1;
      }
    }
  }
  function aF2(eI) {
    var z;
    for (z = eI - 2; z >= 1; z--) {
      if (aEh[z] < 0) {
        aEh[z] = -aEh[z] - 1;
      }
    }
  }
  function aF4(y0, y1, eI) {
    var z;
    for (z = 0; z < eI; z++) {
      y0[z] = y1[z];
    }
  }
  function aF5(ey) {
    var z;
    for (z = 0; z < ey.length - 1; z++) {
      ey[z] = ey[z + 1] - ey[z];
    }
    ey[ey.length - 1] = ey[ey.length - 3];
  }
  function aF6(a02, gap, hE) {
    aEi.push(a02);
    aEj.push(gap);
    aEk.push(hE);
  }
  function aF7() {
    var z;
    var aF8 = aEi.length - 1;
    for (z = aF8 - 1; z >= 0; z--) {
      if (aEj[z] > aEj[aF8]) {
        aF8 = z;
      }
    }
    return aF8;
  }
  function aEq() {
    aEt(max);
    aF4(aEo, aEh, ir);
    aEx(0, 0, true, t);
    aEw(el[0], max);
    aF4(aEn, aEh, t);
    aEx(0, 0, false, ir);
    aF5(aEn);
    aF5(aEo);
    aEv(el[t - 1], aEn[t - 1], ir);
    aEx(t - 1, 0, false, ir);
    aEv(el[t * (ir - 1)], aEo[ir - 1], t);
    aF1(el[t * ir - 1], t);
    aEx(0, ir - 1, true, t);
    aEl[t - 1] = aEl[0] = true;
    aEm[ir - 1] = aEm[0] = true;
    aF6(0, t, true);
    aF6(0, ir, false);
  }
  function aEr() {
    var aF8, a02;
    while (true) {
      aF8 = aF7();
      if (aEj[aF8] < 5) {
        return;
      }
      a02 = aEi[aF8] + bB.ek(aEj[aF8], 2);
      if (aEk[aF8]) {
        aF9(a02);
      } else {
        aFA(a02);
      }
      aF6(a02, aEi[aF8] + aEj[aF8] - a02, aEk[aF8]);
      aEj[aF8] = a02 - aEi[aF8] + 1;
    }
  }
  function aFA(eR) {
    var eI, aFB, z;
    var a75 = 0;
    var aFC = 0;
    while (aFC < t - 1) {
      for (z = a75 + 1; z < t; z++) {
        if (aEl[z]) {
          aFC = z;
          break;
        }
      }
      eI = aFC - a75 + 1;
      aEv(el[eR * t + a75], a75 === 0 ? aEo[eR] : (aEh[aFB - 1] - aEh[aFB - 2]), eI);
      aF1(el[eR * t + aFC], eI);
      aEx(a75, eR, true, eI);
      aFB = eI;
      a75 = aFC;
    }
    aEm[eR] = true;
  }
  function aF9(eP) {
    var eI, aFB, z;
    var a75 = 0;
    var aFC = 0;
    while (aFC < ir - 1) {
      for (z = a75 + 1; z < ir; z++) {
        if (aEm[z]) {
          aFC = z;
          break;
        }
      }
      eI = aFC - a75 + 1;
      aEv(el[eP + t * a75], a75 === 0 ? aEn[eP] : (aEh[aFB - 1] - aEh[aFB - 2]), eI);
      aF1(el[aFC * t + eP], eI);
      aEx(eP, a75, false, eI);
      aFB = eI;
      a75 = aFC;
    }
    aEl[eP] = true;
  }
  function aEs() {
    var eP, eR;
    for (eP = 0; eP < t; eP++) {
      if (!aEl[eP]) {
        for (eR = 0; eR < ir; eR++) {
          if (!aEm[eR]) {
            aFD(eP, eR);
          }
        }
      }
    }
  }
  function aFD(eP, eR) {
    var value = el[eR * t + eP - 1] + el[(eR - 1) * t + eP];
    var a1s = 2;
    if (aEl[eP + 1]) {
      a1s++;
      value += el[eR * t + eP + 1];
    }
    if (aEm[eR + 1]) {
      a1s++;
      value += el[(eR + 1) * t + eP];
    }
    el[eR * t + eP] = bB.ek(value, a1s);
  }
}
function aA4(eb, ec) {
  return eb >= 0 ? bB.ek(eb, ec) : -bB.ek(-eb, ec);
}
function iv(el) {
  return el * el;
}
function a17(eb, ec) {
  return eb > ec ? eb : ec;
}
function a4U(eb, ec) {
  return eb < ec ? eb : ec;
}
function a3I(eb, el, ec) {
  return el < eb ? eb : el > ec ? ec : el;
}
function aFE(el, eI) {
  var ed = bB.ek(el + 1, 2);
  for (var z = 0; z < eI; z++) {
    ed = bB.ek(ed + bB.ek(el, ed), 2);
  }
  return ed;
}
function aBo(el, eI) {
  if (el < 1) {
    return 0;
  }
  return aFE(el, eI);
}
function aFF(lk, ll, q7, a32, ly, lz, q8, a9K) {
  return !(lk + q7 <= ly || ll + a32 <= lz || lk >= ly + q8 || ll >= lz + a9K);
}
function aFG(lk, ll, q7, a32, ly, lz, q8, a9K) {
  return lk <= ly && ll <= lz && lk + q7 >= ly + q8 && ll + a32 >= lz + a9K;
}
function sG(el) {
  return Math.floor(!!el * (1 + Math.log2(el + 0.5)));
}
function bf() {
  this.ek = function(eb, ec) {
    return Math.floor((eb + 0.5) / ec);
  }
  ;
  this.aFH = function(eb, ec) {
    return Math.floor(eb * (ec + 0.5));
  }
  ;
  this.sqrt = function(el) {
    return ~~Math.sqrt(el + 0.5);
  }
  ;
  this.pow = function(d) {
    return Math.floor(Math.pow(2, d) + 0.5);
  }
  ;
  this.oV = function(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  ;
  this.aFI = function(ez, f1, f3) {
    return Math.max(Math.min(ez, f1), f3);
  }
  ;
  this.aFJ = function(aFK, aFL, eP, eR) {
    var hR = eP - aFK;
    var hU = eR - aFL;
    var aFM = 0;
    if (hR === 0) {
      aFM = hU >= 0 ? Math.PI : 0;
    } else {
      aFM = Math.atan(hU / hR);
      aFM += hR > 0 ? (0.5 * Math.PI) : (1.5 * Math.PI);
    }
    return aFM;
  }
  ;
  this.log2 = function(el) {
    return Math.floor(!!el * (1 + Math.log2(el + 0.5)));
  }
  ;
  this.log10 = function(el) {
    return Math.floor(Math.log10(el + 0.5));
  }
  ;
  this.aFN = function(aFO, aFP, aFQ, aFR, aFS) {
    return aFO > aFQ - aFS && aFO < aFQ + aFS && aFP > aFR - aFS && aFP < aFR + aFS;
  }
  ;
}
function cx() {
  this.kt = new aFT();
  this.pz = 0;
  var aFU = new Array(19);
  this.dH = function() {
    var aFV;
    var aFW = document.body.firstChild;
    while (aFW) {
      aFV = aFW.nextSibling;
      if (document.body.contains(aFW) && (aFW.tagName === "DIV" || aFW.tagName === "INPUT" || aFW.tagName === "BUTTON")) {
        document.body.removeChild(aFW);
      }
      aFW = aFV;
    }
  }
  ;
  this.j = function(o0, aFX, yy) {
    if (aFX === undefined) {
      aFX = this.pz;
    }
    bU.dO = true;
    if (o0 === 0) {
      if (aN.wU() === 0) {
        o0 = 5;
      } else {
        m.n.setState(13);
      }
    }
    this.qK();
    this.pz = o0;
    var k8 = aFU[o0];
    if (!k8 || o0 === 4 || o0 === 7 || o0 === 8 || o0 === 9 || o0 === 10 || o0 === 11 || o0 === 13 || o0 === 15 || o0 === 18) {
      if (o0 === 0) {
        aFY();
        return;
      } else if (o0 === 1) {
        k8 = new aFZ();
      } else if (o0 === 2) {
        k8 = new aFa();
      } else if (o0 === 3) {
        k8 = new aFb();
      } else if (o0 === 4 || o0 === 9 || o0 === 10 || o0 === 11 || o0 === 13) {
        k8 = yy;
      } else if (o0 === 5) {
        k8 = new aFc();
      } else if (o0 === 6) {
        k8 = new aFd();
      } else if (o0 === 7) {
        k8 = new aFe(i.kt.aFf);
      } else if (o0 === 8) {
        k8 = yy;
      } else if (o0 === 12) {
        k8 = new aFg();
      } else if (o0 === 14) {
        k8 = new aFh();
      } else if (o0 === 15) {
        k8 = new aFe(i.kt.aFi);
      } else if (o0 === 16) {
        k8 = new aFj();
      } else if (o0 === 17) {
        k8 = new aFk();
      } else if (o0 === 18) {
        k8 = new aFl();
      }
      k8.aFX = aFX;
      aFU[o0] = k8;
    }
    k8.show(yy);
  }
  ;
  function aFY() {
    var z;
    var eI = aFU.length;
    for (z = 0; z < eI; z++) {
      aFU[z] = null;
    }
  }
  this.wb = function() {
    if (!this.to()) {
      return;
    }
    this.aFm(this.a9d().aFX);
  }
  ;
  this.aFm = function(o0) {
    if (!this.to()) {
      return;
    }
    if (!aFU[o0]) {
      this.j(o0);
      return;
    }
    this.qK();
    bU.dO = true;
    this.pz = o0;
    aFU[o0].show();
  }
  ;
  this.qK = function() {
    if (!this.to()) {
      return;
    }
    aFU[this.pz].qK();
  }
  ;
  this.rX = function() {
    if (!this.to()) {
      return;
    }
    aFU[this.pz].qK();
    aFY();
    this.pz = 0;
    m.n.setState(13);
  }
  ;
  this.qn = function() {
    if (!this.to()) {
      return;
    }
    var k8 = aFU[this.pz];
    if (k8.qn) {
      k8.qn();
    }
  }
  ;
  this.resize = function() {
    if (!this.to()) {
      return false;
    }
    aFU[this.pz].resize();
  }
  ;
  this.gV = function(eP, eR) {
    if (!this.to()) {
      return;
    }
    var k8 = aFU[this.pz];
    if (k8.gV) {
      k8.gV(eP, eR);
    }
  }
  ;
  this.wq = function(eP, eR) {
    if (!this.to()) {
      return;
    }
    var k8 = aFU[this.pz];
    if (k8.wq) {
      k8.wq(eP, eR);
    }
  }
  ;
  this.xE = function() {
    if (!this.to()) {
      return;
    }
    var k8 = aFU[this.pz];
    if (k8.xE) {
      k8.xE();
    }
  }
  ;
  this.wt = function(kU, kV, deltaY) {
    if (!this.to()) {
      return;
    }
    var k8 = aFU[this.pz];
    if (k8.wt) {
      k8.wt(kU, kV, deltaY);
    }
  }
  ;
  this.xQ = function(code) {
    if (!this.to()) {
      return false;
    }
    var k8 = aFU[this.pz];
    if (k8.xQ) {
      k8.xQ(code);
    }
    return true;
  }
  ;
  this.iC = function() {
    if (!this.to()) {
      return;
    }
    var k8 = aFU[this.pz];
    if (k8 && k8.iC) {
      k8.iC();
    }
  }
  ;
  this.to = function() {
    return this.pz > 0;
  }
  ;
  this.a9d = function() {
    return aFU[this.pz];
  }
  ;
  this.aFn = function(o0) {
    return aFU[o0];
  }
  ;
}
function aFe(data) {
  var aFo;
  var aFp;
  function dH() {
    aFo = new qU(data.username,[new l(L(13),function() {
      b8.clear();
      i.wb();
    }
    ), new l(data.aFq ? ("🔄 " + L(135)) : L(136),function() {
      i.j(8, i.a9d().aFX, new q0(25,{
        q1: 0,
        px: data.px,
        py: data.py
      }));
    }
    ,0,0,1)]);
    aFp = new oq(aFo.qa,aFr());
  }
  function aFr() {
    var os = [];
    os.push(aFs());
    aFt(os);
    aFu(os);
    os.push(aFv());
    if (data.aFq) {
      os.push(aFw());
    }
    os.push(aFx());
    if (!data.aFq) {
      os.push(aFy());
      os.push(aFz());
      os.push(aG0());
    }
    os.push(aG1());
    aG2(os);
    aG3(os);
    os.push(aG4());
    return os;
  }
  function aFv() {
    var aG5 = new oZ();
    aG5.oc(L(137));
    aG5.oj(L(138) + b2.w0.zD(data.rh, 0.01, 2));
    if (!data.aFq) {
      aG5.oe(L(139));
      aG5.oe(L(140));
      aG5.oe(L(141));
    }
    return aG5;
  }
  function aFw() {
    var aG5 = new oZ();
    aG5.oc(L(142));
    var aG6 = new pg(bY.dZ.data[147],1,undefined,function(d) {
      aG7(d.target.value);
    }
    );
    aG5.oo(aG6);
    var aG8 = new l(L(143),function(d) {
      if (aG6.d.readOnly && aq.kt.a7S(0)) {
        b2.ow.yZ(d);
        aG9();
        aq.aGA.aGB({
          q1: 0,
          px: data.px,
          py: data.py,
          value: bB.oV(Math.floor(100 * bY.dZ.data[147].value), 0, 4294967295)
        });
      }
      return true;
    }
    ,1);
    var aGC = new l(L(144),function(d) {
      if (d.textContent === L(144)) {
        d.textContent = L(145);
        aG6.d.readOnly = true;
        aG8.pF(0);
        aG8.button.style.color = p.n6;
        bY.pY.pZ(147, aG6.d.value);
        aG7(bY.dZ.data[147].value);
      } else {
        aG9();
      }
      return true;
    }
    );
    aG5.oo((new pd([aGC.button])));
    var og = aG5.oe();
    var aG7 = function(el) {
      el = isNaN(el) ? 0 : Number(el);
      var eb = Math.max(el, (data.aGD + 1) / 100);
      var aGE = Math.floor(100 * Math.max(0.0001 * eb, data.aGD / 100)) / 100;
      og.textContent = L(146, [eb.toFixed(2), bY.dZ.data[105].value, aGE.toFixed(2), data.px, (eb - aGE).toFixed(2)]);
    };
    var aG9 = function() {
      aGC.button.textContent = L(144);
      aG6.d.readOnly = false;
      aG8.pF(1);
      aG8.button.style.color = p.mL;
    };
    aG7(bY.dZ.data[147].value);
    aG5.oo((new pd([aG8.button])));
    return aG5;
  }
  function aFx() {
    var aG5 = new oZ();
    aG5.oc(L(147));
    var aG6 = new pg({
      title: data.px,
      value: data.px,
      o0: -1
    });
    aG6.d.readOnly = true;
    aG5.oo(aG6);
    aG5.oo((new pd([(new l(L(148),function(d) {
      b2.ow.yY(aG6.d);
      b2.ow.yZ(d);
      return true;
    }
    )).button])));
    return aG5;
  }
  function aFy() {
    var aG5 = new oZ();
    aG5.oc(L(149));
    var aGF = new pg(bY.dZ.data[106]);
    aGF.d.readOnly = true;
    aGF.d.type = "password";
    aG5.oo(aGF);
    aG5.oo((new pd([(new l(L(150),function(d) {
      if (d.textContent === L(150)) {
        d.textContent = L(151);
        aGF.d.type = "text";
      } else {
        d.textContent = L(150);
        aGF.d.type = "password";
      }
      return true;
    }
    )).button, (new l(L(148),function(d) {
      b2.ow.yY(aGF.d);
      b2.ow.yZ(d);
      return true;
    }
    )).button])));
    aG5.oo((new pd([(new l(L(152),function() {
      i.j(8, i.a9d().aFX, new q0(15));
    }
    )).button])));
    aG5.oc(L(153), "0.8em");
    aG5.oe(L(154));
    aG5.oe(L(155));
    aG5.oe(L(156));
    return aG5;
  }
  function aFz() {
    var aG5 = new oZ();
    aG5.oc(L(157));
    aG5.oo((new pd([(new l(L(158),function() {
      i.j(6, i.a9d().aFX);
    }
    )).button])));
    aG5.oo((new pd([(new l(L(159),function() {
      bY.pY.pZ(105, "");
      i.j(8, i.a9d().aFX, new q0(18));
    }
    )).button])));
    aG5.oo((new pd([(new l(L(160) + bY.dZ.data[105].value,function() {
      i.j(4, 0, new k(L(161),L(162),true,[new l(L(13),function() {
        i.j(7, i.aFn(7).aFX);
      }
      )]));
    }
    ,p.mu)).button])));
    return aG5;
  }
  function aG0() {
    var aG5 = new oZ();
    aG5.oc(L(163));
    aG5.oe(L(164));
    bY.kt.rQ();
    var om;
    var aGG;
    var aGH = function(o0) {
      for (var z = 0; z < 2; z++) {
        aGG[z].pF(o0 === 0 ? p.mW : (z === 0 ? p.mu : p.q));
      }
    };
    aGG = [new l(L(165),function() {
      var o0 = Math.min(bY.dZ.data[117].value, om.on.length - 1);
      if (o0 < 1) {
        return;
      }
      om.on[o0].remove();
      om.on.splice(o0, 1);
      for (var z = o0; z < om.on.length; z++) {
        om.on[z].name = "" + z;
      }
      bY.kt.rT(o0);
      o0 = bY.dZ.data[117].value;
      om.on[o0].textContent = om.on[o0].textContent.replace("⚪", "🟢");
      aGH(o0);
    }
    ,p.mW), new l(L(166),function() {
      var o0 = Math.min(bY.dZ.data[117].value, om.on.length - 1);
      if (o0 < 1) {
        return;
      }
      var data = bY.kt.rU(o0);
      bY.pY.pZ(105, data.px);
      bY.pY.pZ(106, data.password);
      i.j(8, i.a9d().aFX, new q0(18));
    }
    ,p.mW)];
    om = new qQ(bY.dZ.data[117],aGH);
    om.on[0].style.marginTop = "0.5em";
    aG5.ol(om);
    aG5.oo((new pd([aGG[1].button])));
    aG5.oo((new pd([aGG[0].button])));
    return aG5;
  }
  function aG1() {
    var aG5 = new oZ();
    aG5.oc(L(167));
    aG5.oj(L(168) + b2.w0.zD(data.rd, 0.1, 1) + "<br>" + L(169) + (data.re + 1) + " / " + data.rg + "<br>" + L(170) + data.rf);
    if (data.aFq) {
      aG5.oo((new pd([(new l(L(171),function(d) {
        if (aq.kt.a7S(0)) {
          b2.ow.yZ(d);
          aq.aGA.aGI({
            q1: 1,
            px: data.px,
            py: data.py
          });
        }
        return true;
      }
      ,0,0,1)).button])));
      aG5.oe(L(172));
    }
    return aG5;
  }
  function aGJ(h3) {
    if (h3 >= 40) {
      return L(173);
    }
    if (h3 >= 16) {
      return L(174);
    }
    if (h3 >= 4) {
      return L(175);
    }
    if (h3 >= 1) {
      return L(176);
    }
    return L(177);
  }
  function aG4() {
    var aG5 = new oZ();
    aG5.oc(L(178));
    aG5.oj(L(179) + data.aGK + "<br>" + L(169) + (data.aGL + 1) + " / " + data.rg + "<br>" + L(180) + aGJ(data.aGL));
    if (data.aFq) {
      aG5.oo((new pd([(new l("−",function(d) {
        if (aq.kt.a7S(0)) {
          b2.ow.yZ(d);
          aq.aGA.aGI({
            q1: 3,
            px: data.px,
            py: data.py
          });
        }
        return true;
      }
      ,0,0,1)).button, (new l("+",function(d) {
        if (aq.kt.a7S(0)) {
          b2.ow.yZ(d);
          aq.aGA.aGI({
            q1: 2,
            px: data.px,
            py: data.py
          });
        }
        return true;
      }
      ,0,0,1)).button])));
      for (var z = 0; z < 2; z++) {
        aG5.oa[0].pf[z].style.fontSize = "1.6em";
      }
      aG5.oe(L(181));
    }
    return aG5;
  }
  function aFs() {
    var aG5 = new oZ();
    aG5.oc(L(182));
    var aG6 = new pg({
      title: data.username,
      value: data.username,
      o0: -1
    });
    aG6.d.readOnly = true;
    aG5.oo(aG6);
    aG5.oo((new pd([(new l(L(148),function(d) {
      b2.ow.yY(aG6.d);
      b2.ow.yZ(d);
      return true;
    }
    )).button])));
    if (!data.aFq) {
      aG5.oe(L(183));
    }
    return aG5;
  }
  function aFt(os) {
    if (data.aFq) {
      return;
    }
    var aG5 = new oZ();
    aG5.oc(L(184));
    var og = aG5.oe(data.aGM.length + " / 160");
    og.style.textAlign = "center";
    var a6U = true;
    var aGN = new qp("bio",0,1,function(d) {
      var fj = d.target.value.length;
      og.textContent = fj + " / 160";
      if (fj > 160) {
        if (a6U) {
          a6U = false;
          aGC.pF(1);
          aGC.button.style.color = p.mL;
        }
      } else if (!a6U) {
        a6U = true;
        aGC.pF(0);
        aGC.button.style.color = p.n6;
      }
    }
    );
    aGN.d.rows = 6;
    aGN.d.style.fontSize = "1em";
    aGN.qt(data.aGM);
    aG5.oo(aGN);
    var aGC = new l(L(185),function() {
      if (!a6U) {
        return true;
      }
      i.j(8, i.a9d().aFX, new q0(29,{
        q1: 1,
        od: aGN.qv().substring(0, 160)
      }));
    }
    ,0,0,1);
    aG5.oo((new pd([aGC.button])));
    if (data.aGO === 0) {
      aG5.oe(L(186, [data.aGP]));
      os.push(aG5);
      return;
    }
    aG5.oo((new pd([(new l(data.aGO === 1 ? L(187) : L(188),function() {
      i.j(8, i.a9d().aFX, new q0(29,{
        q1: 0,
        od: ""
      }));
    }
    ,0,0,1)).button])));
    aG5.oe(data.aGO === 1 ? L(189, [data.aGQ - 1]) : L(190, [data.aGQ - 1]));
    aG5.oe(L(186, [data.aGP]));
    os.push(aG5);
  }
  function aFu(os) {
    if (!data.aFq) {
      return;
    }
    if (data.aGO === 0) {
      return;
    }
    var aG5 = new oZ();
    aG5.oc(L(184));
    aG5.oh(data.aGM);
    aG5.oo((new pd([(new l(L(171),function(d) {
      if (aq.kt.a7S(0)) {
        b2.ow.yZ(d);
        aq.aGA.aGI({
          q1: 5,
          px: data.px,
          py: data.py
        });
      }
      return true;
    }
    ,0,0,1)).button])));
    os.push(aG5);
  }
  function aG2(os) {
    var aG5 = new oZ();
    var w4 = data.rk;
    aG5.oc(L(191));
    aG5.oj(L(192) + (w4 ? ("[" + data.ri + "]") : "-"));
    aG5.oj(L(193) + b2.w0.zD(w4, 0.001, 2));
    aG5.oj(L(169) + (data.rm + 1) + " / " + data.rg);
    var aGR = data.rn;
    aG5.oj(L(194) + b2.w0.zD(aGR, 0.01, 2));
    var aGS = data.rp;
    aG5.oj(L(195) + aGS);
    aG5.oj(L(196) + b2.w0.zD(aGR / Math.max(aGS, 1), 0.01, 2));
    w4 = data.rl;
    aG5.oc(L(197), "0.8em");
    aG5.oj("Clan: " + (w4 ? ("[" + data.rj + "]") : "-"));
    aG5.oj(L(193) + b2.w0.zD(w4, 0.001, 2));
    aGR = data.ro;
    aG5.oj(L(194) + b2.w0.zD(aGR, 0.01, 2));
    aGS = data.rq;
    aG5.oj(L(195) + aGS);
    aG5.oj(L(196) + b2.w0.zD(aGR / Math.max(aGS, 1), 0.01, 2));
    os.push(aG5);
  }
  function aG3(os) {
    var aG5 = new oZ();
    aG5.oc(L(198));
    aG5.oj(L(179) + data.aGT + "<br>" + L(180) + (data.aGU.length ? L(199, [data.aGU]) : L(200)));
    if (data.aFq) {
      aG5.oo((new pd([(new l(L(201),function(d) {
        if (aq.kt.a7S(0)) {
          b2.ow.yZ(d);
          aq.aGA.aGI({
            q1: 4,
            px: data.px,
            py: data.py
          });
        }
        return true;
      }
      ,0,0,1)).button])));
      aG5.oe(L(202));
      aG5.oe(L(203));
    }
    os.push(aG5);
  }
  this.show = function() {
    if (data.aFq) {
      b8.aGV("account", data.px);
    }
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aFp.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aGW(data) {
  var aFo;
  var aGX, aGY, a7A, aGZ;
  var aGa, aGb;
  var colors;
  var aGc, aGd;
  var aGe = 0;
  var aGf = 0;
  var aGg = false;
  var aGh = false;
  var aGi = [1, 5, 60, 4 * 60, 24 * 60, 7 * 24 * 60, 30 * 24 * 60];
  function dH() {
    aGj();
    aGk();
    aGl();
    var aGm = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"];
    aFo = new qU(L(204) + ", " + aGm[data.aGn] + ", " + b2.xk.yK(aGc),[new l(L(13),function() {
      i.kt.a6a();
    }
    ), new l(L(205),function() {
      i.j(14);
    }
    )],false);
  }
  function aGj() {
    var z;
    var eL = data.data;
    var eI = eL.length;
    var max = 1;
    for (z = 0; z < eI; z++) {
      max = Math.max(max, eL[z].aGo.length);
    }
    for (z = 0; z < eI; z++) {
      while (eL[z].aGo.length < max) {
        eL[z].aGo.unshift(0);
      }
    }
  }
  function aGk() {
    var fp;
    var dt = new Date();
    var yL = 1000 * 60 * dt.getTimezoneOffset();
    var kB = dt.getTime() - yL;
    aGc = new Date(kB);
    if (data.aGn === 6) {
      aGp(dt, yL);
      return;
    }
    fp = 1000 * 60 * aGi[data.aGn];
    if (data.aGn <= 4) {
      aGd = new Date(kB + fp - dt.getTime() % fp);
      return;
    }
    aGd = new Date(kB + fp - (dt.getTime() + 3 * 24 * 60 * 60 * 1000) % fp);
  }
  function aGp(dt, yL) {
    var aGq = dt.getUTCFullYear();
    var month = dt.getUTCMonth() + 1;
    if (month < 12) {
      aGd = new Date(Date.UTC(aGq, month) - yL);
    } else {
      aGd = new Date(Date.UTC(aGq + 1, 0) - yL);
    }
  }
  function aGl() {
    var ed = b2.color;
    colors = [p.mL, ed.mD(255, 0, 0), ed.mD(0, 200, 0), ed.mD(80, 80, 255), ed.mD(255, 255, 0), ed.mD(255, 0, 255), ed.mD(0, 255, 255), ed.mD(255, 140, 0), ed.mD(128, 128, 128), ed.mD(0, 255, 140)];
  }
  this.show = function() {
    aGh = bY.dZ.data[127].value;
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    var ed = an.p2;
    var ql = aFo.qf();
    var aGr = ed * ql.qj;
    var qg = ed * ql.qg;
    aGa = b2.ow.qM(0.06);
    aGb = b2.ow.qM(0.04);
    aGX = b2.ow.qM(0.06);
    aGY = qg + aGa;
    a7A = an.t - aGX - aGb;
    aGZ = aGr + qg - aGY - aGb;
  }
  ;
  this.qn = function() {
    aFo.qn();
    aGs();
    a7I();
    aGt();
  }
  ;
  function a7I() {
    qo.lineWidth = bR.uH;
    qo.strokeStyle = p.mL;
    qo.beginPath();
    qo.moveTo(aGX, aGY);
    qo.lineTo(aGX, aGY + aGZ);
    qo.lineTo(aGX + a7A, aGY + aGZ);
    qo.stroke();
  }
  function aGs() {
    var z, aGo, fj, eP, eb;
    var ey = data.data;
    var aGu = 1;
    var aGv = 0.125;
    var aGw = aGh ? (1 << 16) : 0;
    for (z = 0; z < ey.length; z++) {
      aGo = ey[z].aGo;
      fj = aGo.length;
      aGu = Math.max(fj, aGu);
      for (eb = 0; eb < fj; eb++) {
        aGv = Math.max(aGo[eb], aGv);
        aGw = Math.min(aGo[eb], aGw);
      }
    }
    var ll = aGY + aGZ;
    var tI = aGZ / (aGv - aGw);
    var tH = 1 / (aGu - 1);
    qo.lineWidth = bR.uH;
    for (z = 0; z < ey.length; z++) {
      aGo = ey[z].aGo;
      fj = aGo.length;
      eP = aGX;
      qo.beginPath();
      qo.moveTo(eP + a7A, ll - tI * (aGo[fj - 1] - aGw));
      for (eb = fj - 2; eb >= 0; eb--) {
        qo.lineTo(eP + tH * eb * a7A, ll - tI * (aGo[eb] - aGw));
      }
      qo.strokeStyle = colors[z];
      qo.stroke();
    }
    aGx(aGw, aGv, ll, tI);
    aGy(aGu);
    a0g(aGu, aGw, aGv);
  }
  function aGx(aGw, aGv, ll, tI) {
    qo.font = b2.ow.q5(0, 0.25 * aGX);
    b2.ow.textBaseline(qo, 1);
    b2.ow.textAlign(qo, 2);
    qo.fillStyle = colors[0];
    var eP = 0.92 * aGX;
    for (var z = 0; z < 3; z++) {
      var el = aGw + z * (aGv - aGw) / 2;
      qo.fillText((el / 1000).toFixed(3), eP, ll - tI * (el - aGw));
    }
  }
  function aGy(aGu) {
    var eR = aGY + aGZ + 0.15 * aGb;
    qo.font = b2.ow.q5(0, Math.min(0.4 * aGb, 0.028 * an.t));
    b2.ow.textBaseline(qo, 0);
    b2.ow.textAlign(qo, 2);
    qo.fillStyle = colors[0];
    qo.fillText(b2.xk.yN(aGc), aGX + a7A, eR);
    b2.ow.textAlign(qo, 0);
    qo.fillText(b2.xk.yN(new Date(aGd.getTime() - 1000 * 60 * (aGu - 1) * aGi[data.aGn])), aGX, eR);
  }
  function a0g(aGu, aGw, aGv) {
    if (!aGg) {
      return;
    }
    if (aGu < 2) {
      return;
    }
    var fo = (aGe - aGX) / a7A;
    var o0 = fo * (aGu - 1);
    var kg = Math.floor(o0);
    var kh = Math.floor(o0 + 1);
    var aGz = o0 - kg;
    var aH0 = 100000;
    var aH1 = -1;
    var aH2 = -1;
    var aH3 = aGv - (aGv - aGw) * (aGf - aGY) / aGZ;
    var ey = data.data;
    for (var z = 0; z < ey.length; z++) {
      var aGo = ey[z].aGo;
      var fj = aGo.length;
      if (kh >= fj) {
        continue;
      }
      var el = aGo[kg] + aGz * (aGo[kh] - aGo[kg]);
      var aEC = Math.abs(aH3 - el);
      if (aEC < aH0) {
        aH0 = aEC;
        aH1 = z;
        aH2 = el;
      }
    }
    if (aH1 === -1) {
      return;
    }
    var aH4 = aGY + aGZ - (aH2 - aGw) / (aGv - aGw) * aGZ;
    qo.lineWidth = 0.5 * bR.uH;
    qo.strokeStyle = colors[aH1];
    qo.beginPath();
    qo.moveTo(aGX, aH4);
    qo.lineTo(aGe, aH4);
    qo.lineTo(aGe, aGY + aGZ);
    qo.stroke();
    qo.beginPath();
    qo.arc(aGe, aH4, 0.10 * aGX, 0, 2 * Math.PI);
    qo.fillStyle = colors[aH1];
    qo.fill();
    var aH5 = aGY + aGZ + 0.15 * aGb;
    b2.ow.textAlign(qo, 1);
    var dt, a3A;
    if (o0 > aGu - 2) {
      a3A = aGd.getTime() - 1000 * 60 * aGi[data.aGn];
      dt = new Date(a3A + (o0 - (aGu - 2)) * (aGc.getTime() - a3A));
    } else {
      dt = new Date(aGd.getTime() - 1000 * 60 * (aGu - o0 - 1) * aGi[data.aGn]);
    }
    var od = b2.xk.yN(dt);
    var aH6 = b2.ow.measureText(od);
    var aH7 = bB.oV(aGe, aGX + 0.5 * aH6, aGX + a7A - 0.5 * aH6);
    qo.fillStyle = b2.color.mD(70, 50, 20);
    qo.fillRect(aH7 - 0.52 * aH6, aGY + aGZ, 1.04 * aH6, 0.55 * aGb);
    qo.fillStyle = colors[0];
    qo.fillText(od, aH7, aH5);
    qo.font = b2.ow.q5(0, 0.25 * aGX);
    b2.ow.textBaseline(qo, 1);
    b2.ow.textAlign(qo, 2);
    aH7 = 0.92 * aGX;
    od = (aH2 / 1000).toFixed(3);
    aH6 = b2.ow.measureText(od);
    var aH8 = aH7 - 1.04 * aH6;
    qo.fillStyle = b2.color.mD(70, 50, 20);
    qo.fillRect(aH8, aH4 - 0.65 * 0.25 * aGX, aGX - aH8, 1.1 * 0.25 * aGX);
    qo.fillStyle = colors[aH1];
    qo.fillText(od, aH7, aH4);
  }
  function aGt() {
    var z;
    var fontSize = 0.5 * aGa;
    qo.font = b2.ow.q5(0, fontSize);
    b2.ow.textBaseline(qo, 1);
    b2.ow.textAlign(qo, 0);
    var ey = data.data;
    var eI = ey.length;
    var eR = aGY - 0.5 * aGa;
    var od = "";
    for (z = 0; z < eI; z++) {
      od += ey[z].name + "  ";
    }
    od = od.trim();
    var aH6 = b2.ow.measureText(od);
    var eP = 0.5 * (an.t - aH6);
    if (aH6 > an.t) {
      eP = 0;
      qo.font = b2.ow.q5(0, an.t / aH6 * fontSize);
    }
    for (z = 0; z < eI; z++) {
      qo.fillStyle = colors[z];
      qo.fillText(ey[z].name, eP, eR);
      eP += b2.ow.measureText(ey[z].name + "  ");
    }
  }
  this.gV = function(kU, kV) {
    aH9(kU, kV);
  }
  ;
  this.wq = function(kU, kV) {
    aH9(kU, kV);
  }
  ;
  function aH9(kU, kV) {
    aGe = kU;
    aGf = kV;
    if (!xL(kU, kV)) {
      if (aGg) {
        bU.dO = true;
      }
      aGg = false;
      return;
    }
    aGg = true;
    bU.dO = true;
  }
  function xL(kU, kV) {
    return kU > aGX && kU < aGX + a7A && kV > aGY && kV < aGY + aGZ;
  }
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aFh() {
  var aFo;
  var aFp;
  function dH() {
    aFo = new qU(L(206),[new l(L(13),function() {
      i.aFm(13);
    }
    )]);
    aFp = new oq(aFo.qa,aFr());
  }
  function aFr() {
    var os = [];
    os.push(aHA());
    os.push(aHB());
    os.push(aHC());
    os.push(aHD());
    return os;
  }
  function aHA() {
    var aG5 = new oZ();
    aG5.oc(L(207));
    aG5.oe(L(208));
    var aGC = new l(L(209),function() {
      bY.pY.pZ(130, 0);
      i.kt.aHE();
    }
    ,0,0,1);
    var aG6 = new pg(bY.dZ.data[126],0,function() {
      aGC.button.click();
    }
    );
    aG5.oo(aG6);
    aG6.d.placeholder = "a,b,c";
    aG6.d.style.marginTop = "0.5em";
    aG5.oo((new pd([aGC.button])));
    return aG5;
  }
  function aHB() {
    var aG5 = new oZ();
    var aGC = new l(L(209),function() {
      bY.pY.pZ(130, 1);
      i.kt.aHE();
    }
    ,0,0,1);
    var aHF = new pg(bY.dZ.data[129],1,function() {
      aHF.d.focus();
    }
    );
    var aHG = new pg(bY.dZ.data[128],1,function() {
      aGC.button.click();
    }
    );
    aG5.oc(L(210));
    aG5.oo(aHG);
    aHG.d.style.marginBottom = "0.5em";
    aG5.oc(L(211));
    aG5.oo(aHF);
    aG5.oo((new pd([aGC.button])));
    return aG5;
  }
  function aHC() {
    var aG5 = new oZ();
    aG5.oc(L(212));
    bY.dZ.data[125].qT = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"];
    aG5.ol(new qQ(bY.dZ.data[125]));
    return aG5;
  }
  function aHD() {
    var aG5 = new oZ();
    aG5.oc(L(213));
    aG5.oo(new pW(bY.dZ.data[127],L(214)));
    return aG5;
  }
  this.show = function() {
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aFp.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aFg() {
  var aFo;
  var aHH;
  var a7A;
  var aHI;
  var a7B;
  var a7C;
  var colors = [0, 0, 0];
  var aHJ = -1;
  function dH() {
    aFo = new qU(L(215),[new l(L(13),function() {
      i.kt.a6a();
    }
    )],false);
    aHH = new pR([0.5, 0.25],[0.5, 0.5],1);
  }
  this.show = function() {
    var el = bY.dZ.data[121].value;
    colors[0] = (el >> 12) / 63;
    colors[1] = ((el >> 6) & 63) / 63;
    colors[2] = (el & 63) / 63;
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    bY.pY.pZ(121, (aHK(0, 64) << 12) + (aHK(1, 64) << 6) + aHK(2, 64));
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aHH.resize();
    var ed = an.p2;
    var ql = aFo.qf();
    aHH.eR = Math.max(aHH.eR, ed * ql.qg + bR.gap);
    var aHL = ed * ql.qj - 2 * bR.gap;
    aHH.ir = Math.min(aHH.ir, aHL);
    aHH.t = 2 * aHH.ir;
    aHH.eR = ed * ql.qg + 0.5 * (ed * ql.qj - aHH.ir);
    aHH.eP = 0.5 * (an.t - aHH.t);
    a7A = 0.25 * aHH.t;
    aHI = aHH.eP + a7A + bR.gap;
    a7B = aHH.t - a7A - bR.gap;
    a7C = (aHH.ir - 2 * bR.gap) / 3;
  }
  ;
  this.qn = function() {
    aFo.qn();
    qo.lineWidth = bR.uH;
    a7I();
    a7J(0);
    a7J(1);
    a7J(2);
  }
  ;
  function a7I() {
    var h3 = aHK(0);
    var qL = aHK(1);
    var ec = aHK(2);
    qo.fillStyle = "rgb(" + h3 + "," + qL + "," + ec + ")";
    qo.fillRect(aHH.eP, aHH.eR, a7A, aHH.ir);
    qo.strokeStyle = p.mL;
    qo.strokeRect(aHH.eP, aHH.eR, a7A, aHH.ir);
    qo.fillStyle = (h3 + qL + ec < 0.4 * (3 * 255) && qL < 150) ? p.mL : p.mC;
    b2.ow.textBaseline(qo, 1);
    b2.ow.textAlign(qo, 1);
    qo.font = b2.ow.q5(0, 0.1 * aHH.ir);
    qo.rotate(-Math.PI / 2);
    qo.fillText(L(216), -aHH.eR - 0.5 * aHH.ir, aHH.eP + 0.5 * a7A);
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
  function a7J(z) {
    var h3 = z === 0 ? 150 : z === 2 ? 30 : 0;
    var qL = z === 1 ? 130 : z === 2 ? 30 : 0;
    var ec = z === 2 ? 220 : 0;
    var aHM = aHH.eR + z * (bR.gap + a7C);
    qo.fillStyle = "rgb(" + h3 + "," + qL + "," + ec + ")";
    qo.fillRect(aHI, aHM, colors[z] * a7B, a7C);
    qo.strokeStyle = p.mL;
    qo.strokeRect(aHI, aHM, a7B, a7C);
    qo.fillStyle = p.mL;
    qo.font = b2.ow.q5(0, 0.32 * a7C);
    b2.ow.textBaseline(qo, 1);
    b2.ow.textAlign(qo, 0);
    qo.fillText((z === 0 ? L(217) : z === 1 ? L(218) : L(219)) + aHK(z), aHI + bR.gap, aHM + 0.53 * a7C);
  }
  function aHK(z, aHN) {
    aHN = aHN || 256;
    return bB.oV(Math.floor(aHN * colors[z]), 0, aHN - 1);
  }
  this.gV = function(kU, kV) {
    if (!xL(kU, kV)) {
      return;
    }
    aHJ = bB.oV(Math.floor((kV - aHH.eR) / (a7C + 0.75 * bR.gap)), 0, 2);
    colors[aHJ] = bB.oV((kU - aHI) / a7B, 0, 1);
    bU.dO = true;
  }
  ;
  function xL(kU, kV) {
    if (kU < aHI || kV < aHH.eR || kU > aHH.eP + aHH.t || kV > aHH.eR + aHH.ir) {
      return false;
    }
    return true;
  }
  this.wq = function(kU) {
    if (aHJ === -1) {
      return;
    }
    colors[aHJ] = bB.oV((kU - aHI) / a7B, 0, 1);
    bU.dO = true;
  }
  ;
  this.wt = function(kU, kV, deltaY) {
    if (!xL(kU, kV)) {
      return;
    }
    var o0 = bB.oV(Math.floor((kV - aHH.eR) / (a7C + 0.75 * bR.gap)), 0, 2);
    colors[o0] = bB.oV(colors[o0] + (1 - 2 * (deltaY > 0)) / 256, 0, 1);
    bU.dO = true;
  }
  ;
  this.xE = function() {
    if (aHJ >= 0) {
      aHJ = -1;
      bU.dO = true;
    }
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function q0(id, yy) {
  var aFo;
  var aHO;
  this.aHP = true;
  this.aHQ = id;
  function dH() {
    aFo = new qU(L(220),[new l(L(13),function() {
      i.kt.a6a();
    }
    )]);
    aHO = new pa(aFo.qa,L(221));
  }
  this.show = function() {
    aFo.show();
    this.resize();
    if (id === 15) {
      if (aq.kt.a7Y(0, id)) {
        aHR();
      } else {
        aHS();
      }
    } else if (id === 16) {
      if (aq.kt.a7Y(0, id)) {
        aq.a6X.aHT(2);
      } else {
        aHS();
      }
    } else if (id === 17) {
      if (aq.kt.a7Y(0, id)) {
        aq.a6X.aHT(3);
      } else {
        aHS();
      }
    } else if (id === 18) {
      aq.kt.close(0, 3253);
      aq.kt.a7Y(0, id);
      aHS();
    } else if (id === 20) {
      if (aq.kt.a7Y(0, id)) {
        aq.aGA.aHU(yy);
      } else {
        aHS();
      }
    } else if (id === 21) {
      if (aq.kt.a7Y(0, id)) {
        aq.aHV.aHW(yy.qG, yy.qH, yy.qI);
      } else {
        aHS();
      }
    } else if (id === 22) {
      if (aq.kt.a7Y(0, id)) {
        aq.aHV.aHX(yy.qG, yy.aHY, yy.aHZ);
      } else {
        aHS();
      }
    } else if (id === 23) {
      if (aq.kt.a7Y(0, id)) {
        aq.aHV.aHa(yy.aGn, yy.vw);
      } else {
        aHS();
      }
    } else if (id === 24) {
      if (aq.kt.a7Y(0, id)) {
        aq.aHV.aHb(yy.aGn, yy.qH, yy.qI);
      } else {
        aHS();
      }
    } else if (id === 25) {
      if (aq.kt.a7Y(0, id)) {
        aq.aGA.aGI(yy);
      } else {
        aHS();
      }
    } else if (id === 28) {
      if (aq.kt.a7Y(0, id)) {
        aq.aHV.aHc(yy.qG, yy.aHY, yy.aHZ);
      } else {
        aHS();
      }
    } else if (id === 29) {
      if (aq.kt.a7Y(0, id)) {
        aq.aGA.aHd(yy);
      } else {
        aHS();
      }
    } else if (id === 1000) {
      return;
    }
  }
  ;
  function aHS() {
    aHO.pb.innerHTML += "<br>" + L(222);
  }
  this.aHe = function() {
    if (id === 15) {
      aHR();
      return;
    }
    if (id === 16) {
      aq.a6X.aHT(2);
      return;
    }
    if (id === 17) {
      aq.a6X.aHT(3);
      return;
    }
    if (id === 18) {
      i.j(8, this.aFX, new q0(16));
      return;
    }
    if (id === 20) {
      aq.aGA.aHU(yy);
      return;
    }
    if (id === 21) {
      aq.aHV.aHW(yy.qG, yy.qH, yy.qI);
      return;
    }
    if (id === 22) {
      aq.aHV.aHX(yy.qG, yy.aHY, yy.aHZ);
      return;
    }
    if (id === 23) {
      aq.aHV.aHa(yy.aGn, yy.vw);
      return;
    }
    if (id === 24) {
      aq.aHV.aHb(yy.aGn, yy.qH, yy.qI);
      return;
    }
    if (id === 25) {
      aq.aGA.aGI(yy);
      return;
    }
    if (id === 28) {
      aq.aHV.aHc(yy.qG, yy.aHY, yy.aHZ);
      return;
    }
    if (id === 29) {
      aq.aGA.aHd(yy);
      return;
    }
    if (id === 1000) {
      this.aHQ = id = 25;
      aq.aGA.aGI(yy);
      return;
    }
  }
  ;
  this.aHf = function(code, bc, data) {
    var eL;
    if (!bc && code !== id) {
      return;
    }
    if (code === 16) {
      i.j(7, this.aFX);
      return;
    }
    if (code === 17) {
      aq.kt.close(0, 3252);
      bY.kt.rT(0);
      if (bY.dZ.data[117].qT && bY.dZ.data[117].qT.length > 0) {
        eL = bY.kt.rU(0);
        bY.pY.pZ(105, eL.px);
        bY.pY.pZ(106, eL.password);
        i.j(8, this.aFX, new q0(16));
      } else {
        bY.pY.pZ(105, "");
        i.kt.a6a();
      }
      return;
    }
    if (code === 21) {
      i.j(10, this.aFX, new aHg(data));
      return;
    }
    if (code === 23) {
      i.j(13, 0, new aGW({
        data: data,
        aGn: yy.aGn
      }));
      return;
    }
    if (code === 25) {
      i.kt.aFi.px = yy.px;
      i.j(15, this.aFX);
      return;
    }
  }
  ;
  function aHR() {
    b4.v(48);
    b4.w(24, Math.floor(bB.pow(24) * Math.random()));
    b4.w(24, Math.floor(bB.pow(24) * Math.random()));
    b7.dH(b4.a0);
    bY.pY.pZ(110, b5.q2.q3(b5.q2.q4(8)));
    aq.aGA.aHh();
  }
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aHO.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aFc() {
  var aHi;
  var aHj;
  var aHH;
  var aG6;
  var aHk;
  this.a9e = new q9();
  function dH() {
    aHH = new pR([0.9 * 0.5, 0.9 * 0.3],[0.5, 0.5],2 / 3);
    aHj = [new l("⚔️<br>" + L(104),function() {
      aHl(0);
    }
    ,/* p.mk */"rgba(0,30,120,0.850)"), new l("🗡️<br>" + L(105),function() {
      aHl(1);
    }
    ,p.mw), new l("🔑<br>" + L(223),function() {
      aHl(2);
    }
    ,p.nB), new l("☰<br>" + L(224),function() {
      aHl(3);
    }
    ,p.mX), new l("",function() {
      i.j(12);
    }
    ,p.mH,false)];
    aG6 = new pg(bY.dZ.data[122]);
    for (var z = 0; z < aHj.length; z++) {
      aHj[z].button.style.position = "absolute";
    }
    // for (var z = 0; z < aHj.length; z++) {
    //   if (z == 0 || z == 4) {
    //     aHj[z].button.style.position = "absolute";
    //   }
    // }
    aG6.d.style.position = "absolute";
    aG6.d.style.textAlign = "center";
    aG6.d.placeholder = L(225);
  }
  dH();
  function aHl(o0) {
    m.n.setState(10);
    ay.xF();
    if (!aP.qP()) {
      aP.a9U();
    }
    if (o0 === 0) {
      i.kt.aHm();
    } else if (o0 === 1) {
      i.kt.aHn();
    } else if (o0 === 2) {
      if (m.id !== 0 || bY.dZ.data[140].value) {
        i.j(8, i.pz, new q0(16));
      } else {
        i.kt.aHo(i.pz, 16);
      }
    } else if (o0 === 3) {
      i.j(1, i.pz);
    }
  }
  this.show = function() {
    aN.setState(0);
    m.n.setState(12);
    this.a9e.show();
    aHj[4].pF(b2.color.yD(bY.dZ.data[121].value));
    this.resize();
    document.body.appendChild(aG6.d);
    for (var z = 0; z < aHj.length; z++) {
      document.body.appendChild(aHj[z].button);
    }
    aHp();
  }
  ;
  function aHp() {
    if (m.id !== 1) {
      return;
    }
    if (m.em < 5) {
      return;
    }
    if (!aHk) {
      aHk = bU.ds;
      return;
    }
    if (bU.ds > aHk + 1000 * 60 * 60 * 4) {
      m.rE.setState(14);
      return;
    }
    aHk = bU.ds;
  }
  this.qK = function() {
    this.a9e.qK();
    document.body.removeChild(aG6.d);
    for (var z = 0; z < aHj.length; z++) {
      document.body.removeChild(aHj[z].button);
    }
  }
  ;
  this.resize = function() {
    this.a9e.resize();
    aHH.resize();
    var gap = 0.5 * bR.gap;
    var a6g = 0.84 * (10 / 99) * aHH.t;
    var aHq = 3 * gap;
    var aHr = 0.16 * aHH.ir;
    var a3h = 0.19 * aHH.t;
    var eP = aHH.eP + a3h;
    var eR = aHH.eR + a6g + aHq;
    var t = 0.5 * (aHH.t - gap) - a3h;
    var aHs = aHH.t - 2 * a3h - aHr - gap;
    b2.ow.qN(aG6.d, eP, eR, aHs, aHr);
    b2.ow.qN(aHj[4].button, eP + aHs + gap, eR, aHr, aHr);
    eR += aHr + gap;
    var ir = 0.5 * (aHH.eR + aHH.ir - eR - gap);
    b2.ow.qN(aHj[0].button, eP, eR, t, ir);
    // b2.ow.qN(aHj[0].button, eP + a3h / 2, eR + 2 * gap, (aHH.t) - 3 * a3h, ir * 1.25);
    b2.ow.qN(aHj[1].button, eP + t + gap, eR, t, ir);
    b2.ow.qN(aHj[2].button, eP, eR + ir + gap, t, ir);
    b2.ow.qN(aHj[3].button, eP + t + gap, eR + ir + gap, t, ir);
    for (var z = 0; z < aHj.length; z++) {
      aHj[z].button.style.font = b2.ow.q5(0, b2.ow.yT(0.065 * aHH.ir));
      // aHj[z].button.style.font = b2.ow.q5(0, b2.ow.yT(0.08 * aHH.ir));
      b2.ow.p8(aHj[z].button, 5);
    }
    aG6.d.style.font = b2.ow.q5(0, b2.ow.yT(0.08 * aHH.ir));
    b2.ow.p8(aG6.d, 5);
  }
  ;
  this.qn = function() {
    aN.a7q();
    aG.qn();
    aB.qn();
    bN.qn();
    aHt();
  }
  ;
  function aHt() {
    if (!aP.qP()) {
      return;
    }
    qo.imageSmoothingEnabled = false;
    var ed = aP.a7t("territorial.io");
    var lw = 0.84 * aHH.t / ed.width;
    qo.setTransform(lw, 0, 0, lw, aHH.eP + 0.08 * aHH.t, aHH.eR);
    if (!aHi) {
      aHi = b2.xg.yw(ed, b2.xg.z2, [0, 0, 0]);
    }
    for (var eP = -1; eP <= 1; eP += 2) {
      for (var eR = -1; eR <= 1; eR += 2) {
        qo.drawImage(aHi, eP, eR);
      }
    }
    qo.drawImage(ed, 0, 0);
    qo.imageSmoothingEnabled = true;
    var hB = aP.a7t("logo");
    var aHu = 0.6666 * lw * ed.height / hB.height;
    var ly = 0.5 * an.t;
    var lz = aHH.eR + 0.5 * lw * ed.height - 0.5 * aHu * hB.height;
    qo.setTransform(aHu, 0, 0, aHu, ly - 0.6 * lw * ed.width, lz);
    qo.drawImage(hB, 0, 0);
    qo.setTransform(aHu, 0, 0, aHu, ly + 0.6 * lw * ed.width - aHu * hB.width, lz);
    qo.drawImage(hB, 0, 0);
    qo.setTransform(1, 0, 0, 1, 0, 0);
    qo.imageSmoothingEnabled = true;
  }
}
function aFj() {
  var aFo;
  var aHv;
  var aHw;
  function dH() {
    aHw = [new l(L(226),function() {
      qF(1);
    }
    ,0,0,1), new l(L(227),function() {
      qF(2);
    }
    ,0,0,1), new l(L(228),function() {
      qF(0);
    }
    ,0,0,1), new l(L(229),function() {
      qF(3);
    }
    ,0,0,1)];
    var qV = [new l(L(13),function() {
      i.wb();
    }
    )];
    aFo = new qU(L(230),qV);
    aHv = new pO(aHw,aFo.qa);
  }
  function qF(z) {
    i.j(8, i.pz, new q0(21,{
      qG: z,
      qH: 0,
      qI: 10
    }));
  }
  this.show = function() {
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aHv.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function a6u(title, ok, aHx) {
  var aFo;
  var aHO;
  function dH() {
    if (!aHx) {
      aHx = [new l(L(13),function() {
        i.wb();
      }
      ,p.mu)];
    }
    aFo = new qU(title,aHx);
    aHO = new pa(aFo.qa,ok);
    b2.ow.textAlign(aFo.qa.style, 1);
  }
  this.show = function() {
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aHO.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aHg(data) {
  var aFo;
  var aHy;
  function dH() {
    var ed = data.data.length ? 0 : 1;
    var aHx = [new l(L(13),function() {
      i.wb();
    }
    ), new l(L(231),function() {
      aHz(-10);
    }
    ,ed,0,1), new l(L(232),function() {
      aHz(10);
    }
    ,ed,0,1), new l(L(205),function() {
      i.j(11, 10, new aI0({
        qG: data.qG
      }));
    }
    )];
    var pr = [L(233), L(234), L(235), L(236), L(237), L(238), L(239), L(240), L(241)];
    aFo = new qU(pr[data.qG],aHx);
    aI1();
  }
  function aI1() {
    var z;
    var eL = {
      pl: []
    };
    var pl = eL.pl;
    var aI2 = data.data;
    var eI = aI2.length;
    var aI3 = [0.1, 0.001, 0.001, 1, 100, 1, 0.01, 1, 100];
    var lw = aI3[data.qG];
    var aI4 = [1, 3, 3, 0, 0, 0, 2, 0, 0];
    var z7 = aI4[data.qG];
    var pr = [[L(242), L(243) + " ↗", L(244)], [L(242), L(245), L(246), L(247) + " ↗"], [L(242), L(243) + " ↗", L(246)], [L(242), L(243) + " ↗", L(246)], [L(248), L(249), L(250) + " ↗", L(251) + " ↗", L(92)], [L(248), L(249), L(252) + " ↗", L(253) + " ↗", L(246)], [L(248), L(249), L(254) + " ↗", L(255) + " ↗", L(256)], [L(248), L(249), L(252) + " ↗", L(253) + " ↗", L(246)], [L(248), L(249), L(250) + " ↗", L(251) + " ↗", L(92)]];
    var pv = [[25, 40, 35], [15, 25, 25, 35], [25, 40, 35], [25, 40, 35], [12, 16, 30, 30, 12], [12, 16, 30, 30, 12], [12, 16, 30, 30, 12], [12, 16, 30, 30, 12], [12, 16, 30, 30, 12]];
    eL.pr = pr[data.qG];
    eL.pv = pv[data.qG];
    if (data.qG === 0) {
      for (z = 0; z < eI; z++) {
        pl.push([{
          el: ((aI2[z][0] + 1) + "."),
          dt: 0
        }, {
          el: aI2[z][1],
          dt: 1,
          px: aI2[z][4],
          py: aI2[z][3]
        }, {
          el: (lw * aI2[z][2]).toFixed(z7),
          dt: 0
        }]);
      }
    } else if (data.qG === 1) {
      for (z = 0; z < eI; z++) {
        pl.push([{
          el: ((aI2[z][0] + 1) + "."),
          dt: 0
        }, {
          el: aI2[z][1],
          dt: 0
        }, {
          el: (lw * aI2[z][2]).toFixed(z7),
          dt: 0
        }, {
          el: aI2[z][3],
          dt: 1,
          px: aI2[z][5],
          py: aI2[z][4]
        }]);
      }
    } else if (data.qG === 2 || data.qG === 3) {
      for (z = 0; z < eI; z++) {
        pl.push([{
          el: ((aI2[z][0] + 1) + "."),
          dt: 0
        }, {
          el: aI2[z][1],
          dt: 1,
          px: aI2[z][4],
          py: aI2[z][3]
        }, {
          el: (lw * aI2[z][2]).toFixed(z7),
          dt: 0
        }]);
      }
    } else if (data.qG === 4 || data.qG === 5 || data.qG === 6 || data.qG === 7 || data.qG === 8) {
      for (z = 0; z < eI; z++) {
        var aI5 = aI2[z][5];
        if (data.qG === 4 || data.qG === 8) {
          aI5 = (100 * (aI5 % 64) / (aI5 >> 6)).toFixed(0) + "%";
          if (aI5 === "100%") {
            if (data.qG === 4) {
              aI5 += " (" + L(257) + ")";
            } else {
              aI5 += " (" + L(258) + ")";
            }
          }
        } else if (data.qG === 5) {
          if (aI5 >= 32768) {
            aI5 = -(aI5 - 32768);
          }
        } else {
          aI5 = (lw * aI5).toFixed(z7);
        }
        pl.push([{
          el: "" + aI2[z][0],
          dt: 0
        }, {
          el: "" + aI2[z][6],
          dt: 0
        }, {
          el: aI2[z][7],
          dt: 1,
          px: aI2[z][1],
          py: aI2[z][2]
        }, {
          el: aI2[z][8],
          dt: 1,
          px: aI2[z][3],
          py: aI2[z][4]
        }, {
          el: "" + aI5,
          dt: 0
        }]);
      }
    }
    aHy = new pk(aFo.qa,eL);
  }
  function aHz(hF) {
    var eI = data.data.length;
    if (!eI) {
      return;
    }
    var min = parseInt(data.data[0][0]);
    var max = min;
    for (var z = 1; z < eI; z++) {
      var aI6 = parseInt(data.data[z][0]);
      min = Math.min(aI6, min);
      max = Math.max(aI6, max);
    }
    var qH;
    if (hF < 0) {
      qH = min + hF;
    } else {
      qH = max + 1;
    }
    i.j(8, 0, new q0(21,{
      qG: data.qG,
      qH: qH,
      qI: qH + Math.abs(hF)
    }));
  }
  this.show = function() {
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aHy.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aI0(yy) {
  var aFo;
  var aFp;
  function dH() {
    aFo = new qU(L(259),[new l(L(13),function() {
      i.aFm(10);
    }
    )]);
    aFp = new oq(aFo.qa,aFr());
  }
  function aFr() {
    var os = [];
    os.push(aHB());
    os.push(aI7());
    os.push(aI8());
    return os;
  }
  function aHB() {
    var aG5 = new oZ();
    var aGC;
    var aHF = new pg(bY.dZ.data[132],1,function() {
      aGC.button.click();
    }
    );
    var aHG = new pg(bY.dZ.data[131],1,function() {
      aHF.d.focus();
    }
    );
    aG5.oc(L(210));
    aG5.oo(aHG);
    aHG.d.style.marginBottom = "0.8em";
    aG5.oc(L(211));
    aG5.oo(aHF);
    var aI9 = function() {
      var qH = Math.floor(aHG.d.value);
      var qI = Math.floor(aHF.d.value);
      var xx = Math.min(qH, qI);
      var aF8 = Math.max(qH, qI);
      return {
        xx: xx,
        aF8: aF8
      };
    };
    aGC = new l(L(209),function() {
      var op = aI9();
      i.j(8, i.aFn(10).aFX, new q0(21,{
        qG: yy.qG,
        qH: op.xx,
        qI: op.aF8
      }));
    }
    ,0,0,1);
    aG5.oo((new pd([aGC.button])));
    return aG5;
  }
  function aI7() {
    var aG5 = new oZ();
    var aGC;
    var aHF = new pg(bY.dZ.data[134],1,function() {
      aGC.button.click();
    }
    );
    var aHG = new pg(bY.dZ.data[133],0,function() {
      aHF.d.focus();
    }
    );
    aG5.oc(yy.qG === 1 ? L(260) : L(261));
    aG5.oo(aHG);
    aHG.d.style.marginBottom = "0.8em";
    aG5.oc(L(262));
    aG5.oo(aHF);
    aGC = new l(L(209),function() {
      var aHY = aHG.d.value.slice(0, 20);
      var aHZ = Math.abs(Math.floor(aHF.d.value));
      i.j(8, i.aFn(10).aFX, new q0(22,{
        qG: yy.qG,
        aHY: aHY,
        aHZ: aHZ
      }));
    }
    ,0,0,1);
    aG5.oo((new pd([aGC.button])));
    return aG5;
  }
  function aI8() {
    var aG5 = new oZ();
    var aGC;
    var aHF = new pg(bY.dZ.data[152],1,function() {
      aGC.button.click();
    }
    );
    var aHG = new pg(bY.dZ.data[151],0,function() {
      aHF.d.focus();
    }
    );
    aG5.oc(L(263));
    aG5.oo(aHG);
    aHG.d.style.marginBottom = "0.8em";
    aG5.oc(L(262));
    aG5.oo(aHF);
    aGC = new l(L(209),function() {
      var aHY = aHG.d.value.slice(0, 5);
      var aHZ = Math.abs(Math.floor(aHF.d.value));
      i.j(8, i.aFn(10).aFX, new q0(28,{
        qG: yy.qG,
        aHY: aHY,
        aHZ: aHZ
      }));
    }
    ,0,0,1);
    aG5.oo((new pd([aGC.button])));
    return aG5;
  }
  this.show = function() {
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aFp.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aFd() {
  var aFo;
  var aFp;
  function dH() {
    aFo = new qU(L(264),[new l(L(13),function() {
      i.j(7, i.aFn(7).aFX);
    }
    ), new l(L(166),function() {
      aIA();
    }
    )]);
    aFp = new oq(aFo.qa,aFr());
  }
  function aIA() {
    bY.pY.pZ(105, b6.q2.rz(aFp.ot[0].oa[0].d.value, 5));
    bY.pY.pZ(106, b6.q2.rz(aFp.ot[1].oa[0].d.value, 8));
    i.j(8, i.aFn(7).aFX, new q0(18));
  }
  function aFr() {
    var os = [];
    os.push(aFx());
    os.push(aFy());
    return os;
  }
  function aFx() {
    var aG5 = new oZ();
    aG5.oc(L(147));
    aG5.oo(new pg({
      title: "AccountName",
      value: "",
      o0: -1
    }));
    return aG5;
  }
  function aFy() {
    var aG5 = new oZ();
    aG5.oc(L(149));
    var aGF = new pg({
      title: "Password",
      value: "",
      o0: -1
    });
    aGF.d.type = "password";
    aG5.oo(aGF);
    aG5.oo((new pd([(new l(L(150),function(d) {
      if (d.textContent === L(150)) {
        d.textContent = L(151);
        aGF.d.type = "text";
      } else {
        d.textContent = L(150);
        aGF.d.type = "password";
      }
      return true;
    }
    )).button])));
    return aG5;
  }
  this.show = function() {
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aFp.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aFk() {
  var aFo;
  var aHv;
  var aHw;
  function dH() {
    aHw = [new l(L(237),function() {
      qF(4);
    }
    ,0,0,1), new l(L(238),function() {
      qF(5);
    }
    ,0,0,1), new l(L(239),function() {
      qF(6);
    }
    ,0,0,1), new l(L(240),function() {
      qF(7);
    }
    ,0,0,1), new l(L(241),function() {
      qF(8);
    }
    ,0,0,1)];
    var qV = [new l(L(13),function() {
      i.wb();
    }
    )];
    aFo = new qU(L(265),qV);
    aHv = new pO(aHw,aFo.qa);
  }
  function qF(z) {
    i.j(8, i.pz, new q0(21,{
      qG: z,
      qH: 0,
      qI: 10
    }));
  }
  this.show = function() {
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aHv.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aFT() {
  this.dZ = {};
  this.qJ = ["", "", ""];
  this.aFi = null;
  this.aFf = null;
  this.we = function() {
    i.j(5, 5);
  }
  ;
  this.aHn = function() {
    i.rX();
    aO.dH();
  }
  ;
  this.aHm = function() {
    // i.rX(); // To remove the UI
    // aM.a7U(bY.dZ.data[10].value); // lobby id
    createPreCustomLobbyUI();
    // aM.dH(); // Enter the lobby
  }
  ;
  this.a6a = function() {
    i.j(aN.wU() === 0 ? 5 : 0);
  }
  ;
  this.aHE = function() {
    if (bY.dZ.data[130].value === 1) {
      i.j(8, i.a9d().aFX, new q0(24,{
        aGn: bY.dZ.data[125].value,
        qH: bY.dZ.data[128].value,
        qI: bY.dZ.data[129].value
      }));
      return;
    }
    var ey = bY.dZ.data[126].value.split(",");
    ey = ey.slice(0, 10);
    for (var z = 0; z < ey.length; z++) {
      ey[z] = ey[z].trim().slice(0, 7).toUpperCase();
    }
    if (ey.length === 1 && ey[0].length === 0) {
      ey = [];
    }
    i.j(8, i.a9d().aFX, new q0(23,{
      aGn: bY.dZ.data[125].value,
      vw: ey
    }));
  }
  ;
  this.aHo = function(aFX, target) {
    i.j(4, aFX, new k("Data Usage Information","Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bA.aIB + "' target='_blank'>" + bA.aIB + "</a>",false,[new l(L(13),function() {
      i.j(aFX);
    }
    ), new l("✅ Accept",function() {
      bY.pY.pZ(140, 1);
      if (target === 0) {
        i.j(2, aFX);
      } else {
        i.j(8, aFX, new q0(target));
      }
    }
    )]));
  }
  ;
  this.aIC = function() {
    var z;
    for (z = 0; z < 3; z++) {
      this.qJ[z] = b6.rs.ru(b7.o1(5));
    }
    this.qJ[1] = "[" + this.qJ[1] + "]";
    if (i.pz === 5) {
      i.a9d().a9e.pZ(this.qJ);
    }
  }
  ;
}
function k(title, ok, aID, aHx) {
  var aFo;
  var aHO;
  function dH() {
    if (!aHx) {
      aHx = [new l(L(13),function() {
        i.wb();
      }
      ,p.mu)];
    }
    aFo = new qU(title,aHx);
    aHO = new pa(aFo.qa,ok);
    if (aID) {
      b2.ow.textAlign(aFo.qa.style, 1);
    }
  }
  this.show = function() {
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aHO.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aFb() {
  var aFo;
  var qr;
  function dH() {
    aFo = new qU(L(266),[new l(L(13),function() {
      i.aFm(1);
    }
    ), new l(L(267),function() {
      qr.qw();
    }
    ), new l(L(268),function() {
      qr.qx();
    }
    ), new l(L(269),function() {
      qr.clear();
    }
    ), new l(L(270),function() {
      aIE();
    }
    )]);
    qr = new qp("replayData",L(271));
    aFo.qa.appendChild(qr.d);
  }
  this.show = function(aIF) {
    this.aIG(aIF);
    aFo.show();
    this.resize();
  }
  ;
  this.aIG = function(aIF) {
    if (a1.v9 === 0) {
      if (!aIF) {
        aIF = qr.qv();
      }
      qr.qt(aIF);
      return;
    }
    if (!a1.gR) {
      b1.oF.aIH = b1.aII.ug();
    }
    qr.qt(b1.aIJ(b1.oF.aIH));
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    qr.resize();
  }
  ;
  function aIE() {
    bK.db.hideCMPButton();
    i.j(0);
    var od = b1.aIK(qr.qv());
    if (od.length > 0 && od === b1.oF.aIH) {
      b1.aIL();
      return;
    }
    if (!b1.aIM.sA(od)) {
      return;
    }
    b1.aIL();
  }
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    } else {
      aIE();
    }
  }
  ;
  dH();
}
function aFa() {
  var aFo;
  var aFp;
  var os;
  var a6W;
  function dH() {
    aFo = new qU(L(272),[new l(L(13),aIN), new l(L(273),function() {
      i.rX();
      bY.pY.rZ();
      i.j(2);
    }
    )]);
    aFr();
    aFp = new oq(aFo.qa,os);
  }
  function aIN() {
    if (a6W !== bY.dZ.data[12].value) {
      az.dH();
      az.a6V();
      var ds = bU.ds;
      i.j(4, 1, new k(L(274),L(275),false,[new l(L(276),function() {
        i.j(1);
      }
      ), new l("🔄 Reload",function() {
        if (bU.ds < ds + 1500) {
          return;
        }
        m.n.o();
      }
      ,p.q)]));
      return;
    }
    i.j(1);
  }
  function aFr() {
    var aG5;
    os = [];
    aG5 = new oZ();
    aG5.oc(L(277));
    aG5.oe(L(278));
    os.push(aG5);
    aIO(os);
    aG5 = new oZ();
    aG5.oc(L(279));
    bY.dZ.data[10].qT = [L(279) + " 1", L(280) + " 1", L(279) + " 2", L(280) + " 2"];
    aG5.ol(new qQ(bY.dZ.data[10]));
    os.push(aG5);
    aG5 = new oZ();
    aG5.oc(L(281));
    bY.dZ.data[1].qT = [L(282), L(283), L(284), L(285)];
    aG5.ol(new qQ(bY.dZ.data[1]));
    os.push(aG5);
    aG5 = new oZ();
    aG5.oc(L(286));
    bY.dZ.data[9].qT = [L(283), L(287), L(288)];
    aG5.ol(new qQ(bY.dZ.data[9]));
    os.push(aG5);
    aG5 = new oZ();
    aG5.oc(L(289));
    bY.dZ.data[11].qT = [L(290), L(2), L(291)];
    aG5.ol(new qQ(bY.dZ.data[11]));
    os.push(aG5);
    aG5 = new oZ();
    aG5.oc(L(292));
    aG5.oo(new pW(bY.dZ.data[2]));
    os.push(aG5);
    aG5 = new oZ();
    aG5.oc(L(293));
    aG5.oo(new pW(bY.dZ.data[7]));
    os.push(aG5);
    aG5 = new oZ();
    aG5.oc(L(294));
    aG5.oo(new pW(bY.dZ.data[8]));
    os.push(aG5);
    aG5 = new oZ();
    aG5.oc(L(295));
    aG5.oo(new pg(bY.dZ.data[5]));
    os.push(aG5);
  }
  function aIO(os) {
    var aG5 = new oZ();
    aG5.oc(L(296));
    var ey = az.data.a6b();
    aG5.ol(new qQ({
      qT: ey,
      value: az.data.a6e(ey)
    },function(o0) {
      bY.pY.pZ(12, ey[o0].split(":")[0]);
      return true;
    }
    ));
    os.push(aG5);
  }
  this.show = function() {
    a6W = bY.dZ.data[12].value;
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aFp.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aFZ() {
  var aFo;
  var aHv;
  var aHw;
  function dH() {
    aHw = [new l(L(297),function() {
      aIP(0);
    }
    ), new l(L(230),function() {
      i.j(16);
    }
    ), new l(L(265),function() {
      i.j(17);
    }
    ), new l(L(298),function() {
      i.kt.aHE();
    }
    ,0,0,1), new l(L(266),function() {
      i.j(3, 1, "");
    }
    ), new l(L(299),function() {
      i.j(18);
    }
    ), new l(L(272),function() {
      aIP(1);
    }
    ), new l(L(300),function() {
      aIQ();
    }
    ), new l(L(301),function() {
      aIR();
    }
    ), new l(L(302),function() {
      aIS();
    }
    ), new l(L(303),function() {
      wH();
    }
    )];
    var qV = [new l(L(276),function() {
      i.kt.a6a();
    }
    )];
    aIT();
    if (m.id === 1 && m.em >= 5) {
      aHw.push(new l(L(304),function() {
        m.n.wI();
      }
      ));
    }
    aFo = new qU(L(305),qV);
    aHv = new pO(aHw,aFo.qa);
  }
  function aIT() {
    if (aN.wU() !== 8) {
      return;
    }
    aHw.unshift(new l(L(306),function() {
      if (bS.aIU >= 2) {
        i.rX();
        bT.xT();
        bU.dO = true;
      }
    }
    ,0,1));
    aHw.unshift(new l(L(307),function() {
      if (!a1.gR && a9.a0f(a1.e2)) {
        b0.ge.ng();
        i.rX();
        if (a9.gS) {
          a9.xT();
        }
      }
    }
    ,0,1));
    aHw.unshift(new l(L(308),function() {
      if (!a1.gR && al.oY(a1.e2)) {
        b0.ge.ni();
        i.rX();
        if (a9.gS) {
          a9.xT();
        }
      }
    }
    ,0,1));
  }
  function aIP(id) {
    if (m.id === 0 && !bY.dZ.data[140].value) {
      i.kt.aHo(i.pz, id === 0 ? 16 : 0);
      return;
    }
    if (id === 0) {
      i.j(8, 1, new q0(16));
    } else {
      i.j(2);
    }
  }
  function aIQ() {
    i.j(4, 1, new k(L(300),b2.ow.yU([L(309), L(310), "Discord", L(311), L(226), L(312), L(88), L(313), L(314), L(315)], [bA.a6r, bA.wP, bA.a6s, bA.aIV, bA.aIW, bA.w7, bA.aIX, bA.aIY, bA.aIZ, bA.aIB]),false,[new l(L(13),function() {
      i.j(1);
    }
    ,p.mu)]));
  }
  function aIR() {
    i.j(4, 1, new k(L(301),dT + "<br><a href='" + bA.aIV + "' target='_blank'>" + bA.aIV + "</a>",true,[new l(L(13),function() {
      i.j(1);
    }
    ,p.mu)]));
  }
  function aIS() {
    i.j(4, 1, new k(L(302),L(316) + "<br>" + L(317),false,[new l(L(13),function() {
      i.j(1);
    }
    ), new l(L(318),function() {
      m.n.wG();
      i.j(1);
    }
    )]));
  }
  function wH() {
    m.n.wH();
    i.j(4, 1, new k(L(319),L(320) + "<a href='" + bA.aIB + "' target='_blank'>" + bA.aIB + "</a>",false,[new l(L(13),function() {
      i.j(1);
    }
    ,p.mu)]));
  }
  this.show = function() {
    m.n.setState(12);
    aFo.show();
    this.resize();
    this.iC();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aHv.resize();
  }
  ;
  this.iC = function() {
    if (aN.wU() !== 8) {
      return;
    }
    if (bS.aIU >= 2) {
      if (aHw[2].pE === p.mW) {
        aHw[2].pF(0);
      }
    } else {
      if (aHw[2].pE !== p.mW) {
        aHw[2].pF(p.mW);
      }
    }
    if (!a1.gR && a9.a0f(a1.e2)) {
      if (aHw[1].pE === p.mW) {
        aHw[1].pF(0);
      }
    } else {
      if (aHw[1].pE !== p.mW) {
        aHw[1].pF(p.mW);
      }
    }
    if (!a1.gR && al.oY(a1.e2)) {
      if (aHw[0].pE === p.mW) {
        aHw[0].pF(0);
      }
    } else {
      if (aHw[0].pE !== p.mW) {
        aHw[0].pF(p.mW);
      }
    }
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function aFl() {
  var aFo;
  var aFp;
  function dH() {
    aFo = new qU(L(299),[new l(L(13),function() {
      i.wb();
    }
    )]);
    aFp = new oq(aFo.qa,aFr());
  }
  function aFr() {
    var os = [];
    os.push(aIa());
    return os;
  }
  function aIa() {
    var aG5 = new oZ();
    aG5.oc(L(321));
    var aIb = new pg({
      title: bY.dZ.data[105].value,
      value: bY.dZ.data[105].value,
      o0: -1
    });
    aIb.d.readOnly = true;
    aG5.oo(aIb);
    aG5.oc(L(322), "0.8em");
    var aIc = new pg(bY.dZ.data[148]);
    var aIc = new pg(bY.dZ.data[148],0,undefined,function(d) {
      aG7(bY.dZ.data[149].value, d.target.value);
    }
    );
    aG5.oo(aIc);
    aG5.oc(L(256), "0.8em");
    var aId = new pg(bY.dZ.data[149],1,undefined,function(d) {
      aG7(d.target.value, bY.dZ.data[148].value);
    }
    );
    aG5.oo(aId);
    var aG9 = function() {
      aIe.button.textContent = L(144);
      aIc.d.readOnly = false;
      aId.d.readOnly = false;
      aG8.pF(1);
      aG8.button.style.color = p.mL;
    };
    var aIe = new l(L(144),function(d) {
      if (d.textContent === L(144)) {
        d.textContent = L(145);
        aIc.d.readOnly = true;
        aId.d.readOnly = true;
        aG8.pF(0);
        aG8.button.style.color = p.n6;
        bY.pY.pZ(149, aId.d.value);
        aG7(bY.dZ.data[149].value, bY.dZ.data[148].value);
      } else {
        aG9();
      }
      return true;
    }
    );
    aG5.oo((new pd([aIe.button])));
    var aG8 = new l(L(143),function(d) {
      if (aIc.d.readOnly && aq.kt.a7S(0)) {
        b2.ow.yZ(d);
        aG9();
        aq.aGA.aGB({
          q1: 0,
          px: bY.dZ.data[148].value,
          py: 0,
          value: bB.oV(Math.floor(100 * bY.dZ.data[149].value), 0, 4294967295)
        });
      }
      return true;
    }
    ,1);
    aG5.oo((new pd([aG8.button])));
    var og = aG5.oe();
    var aG7 = function(el, od) {
      el = isNaN(el) ? 0 : Number(el);
      var eb = Math.max(el, (bY.dZ.data[150].value + 1) / 100);
      var aGE = Math.floor(100 * Math.max(0.0001 * eb, bY.dZ.data[150].value / 100)) / 100;
      og.textContent = L(146, [eb.toFixed(2), bY.dZ.data[105].value, aGE.toFixed(2), od, (eb - aGE).toFixed(2)]);
    };
    aG7(bY.dZ.data[149].value, bY.dZ.data[148].value);
    return aG5;
  }
  this.show = function() {
    aFo.show();
    this.resize();
  }
  ;
  this.qK = function() {
    aFo.qK();
  }
  ;
  this.resize = function() {
    aFo.resize();
    aFp.resize();
  }
  ;
  this.xQ = function(ed) {
    if (ed === 2) {
      aFo.qb[0].pD();
    }
  }
  ;
  dH();
}
function be() {
  if (typeof Math.log2 !== "function") {
    Math.log2 = function(eP) {
      return Math.log(eP) / Math.log(2);
    }
    ;
  }
  if (typeof Math.log10 !== "function") {
    Math.log10 = function(eP) {
      return Math.log(eP) / Math.log(10);
    }
    ;
  }
  if (typeof Math.sign !== "function") {
    Math.sign = function(eP) {
      return eP > 0 ? 1 : eP < 0 ? -1 : 0;
    }
    ;
  }
}
function cQ() {
  var aIf = false;
  var a3u;
  var aIg;
  var aIh;
  var aIi;
  function aIj() {
    aIf = true;
    a3u = -1;
    aIg = new Array(4);
    for (var z = 3; z >= 0; z--) {
      aIg[z] = false;
    }
    var aIk = Math.floor(1 + 0.020 * an.min);
    aIh = new Array(4);
    aIi = new Array(4);
    aIi[1] = aIi[3] = aIh[0] = aIh[2] = 0;
    aIi[0] = aIh[3] = -aIk;
    aIh[1] = aIi[2] = aIk;
  }
  this.xN = function(o0) {
    if (a1.v9 === 0) {
      return;
    }
    if (!a5.m3()) {
      return;
    }
    if (!aIf) {
      aIj();
    }
    aIg[o0] = true;
    if (a3u === -1) {
      a3u = setInterval(aIl, 20);
      aIl();
    }
  }
  ;
  this.xR = function(o0) {
    if (a1.v9 === 0) {
      return;
    }
    if (!aIf) {
      aIj();
    }
    aIg[o0] = false;
    if (a3u === -1) {
      return;
    }
    var aIm = false;
    for (var z = 3; z >= 0; z--) {
      aIm = aIm || aIg[z];
    }
    if (!aIm) {
      this.ls();
    }
  }
  ;
  this.ls = function() {
    if (!aIf) {
      return;
    }
    if (a3u === -1) {
      return;
    }
    for (var z = 3; z >= 0; z--) {
      aIg[z] = false;
    }
    clearInterval(a3u);
    a3u = -1;
  }
  ;
  function aIl() {
    if (a3u === -1) {
      return;
    }
    if (a1.v9 === 0 || !a5.m3()) {
      af.ls();
      return;
    }
    var aIm = false;
    for (var z = 3; z >= 0; z--) {
      if (aIg[z]) {
        aIm = true;
        hg += aIh[z];
        hi += aIi[z];
        aU.wq(aIh[z], aIi[z]);
        aF.a3d();
      }
    }
    if (!aIm) {
      af.ls();
      return;
    }
    bU.dO = true;
  }
}
function cR() {
  this.kt = new aIn();
  this.kx = new aIo();
  this.nM = new aIp();
  this.a7Z = new aIq();
  this.a6X = new aIr();
  this.aGA = new aIs();
  this.nz = new aIt();
  this.aHV = new aIu();
  this.dataDecoder = new DataDecoder();
  this.aIw = new aIx();
  this.aIy = new aIz();
  this.aJ0 = new aJ1();
  this.aJ2 = new aJ3();
  this.dH = function() {
    this.kt.dH();
  }
  ;
}
function aIn() {
  this.a81 = 5;
  this.a82 = this.a81 - 1;
  this.a7X = this.a81 + this.a82;
  this.a7W = [0, 1, 5, 2, 6, 3, 7, 4, 8];
  var aJ4;
  this.aJ5 = null;
  var aJ6;
  var aJ7 = 15000;
  this.wX = 0;
  this.wW = 0;
  this.dH = function() {
    var z;
    this.aJ5 = new Array(this.a81);
    var a1c = ".territorial.io";
    this.aJ5[0] = "territorial.io";
    var aDb = ao.aDt(0);
    ao.ze(0);
    for (z = 1; z < this.a81; z++) {
      this.aJ5[z] = a7.um() + a1c;
    }
    ao.ze(aDb);
    aJ4 = new Array(this.a7X);
    aJ6 = new Array(this.a7X);
    for (z = this.a7X - 1; z >= 0; z--) {
      aJ6[z] = {
        aIf: false,
        ds: 0,
        aJ8: false
      };
    }
    this.a7Y(0, 0);
  }
  ;
  this.aJ9 = function(z) {
    return aJ4[z];
  }
  ;
  this.aJA = function() {
    return this.wW < this.a81 ? this.wW : (this.wW - this.a82);
  }
  ;
  this.iC = function() {
    for (var z = this.a7X - 1; z >= 0; z--) {
      if (this.a7S(z) && bU.ds > aJ6[z].ds + aJ7) {
        aq.nM.aJB(z, aJ6[z].aJ8);
      }
    }
    if (!this.a7S(0) && bU.ds > aJ6[0].ds + 8000) {
      aJ6[0].ds = bU.ds;
      this.a7Y(0, 0);
    }
  }
  ;
  this.a7Y = function(wR, aFX) {
    if (!aJ6[wR].aIf) {
      this.aJC(wR, aFX);
      return false;
    }
    if (aJ4[wR].di()) {
      aJ4[wR].aJD(aFX);
      return aJ4[wR].a7S();
    }
    aJ4[wR].qK();
    this.aJC(wR, aFX);
    return false;
  }
  ;
  this.aJC = function(wR, aFX) {
    aJ6[wR].aIf = true;
    aJE(wR);
    aJ4[wR] = new aJF();
    aJ4[wR].dH(wR, aFX);
  }
  ;
  this.aJD = function(wR, aFX) {
    if (di(wR)) {
      aJ4[wR].aJD(aFX);
    }
  }
  ;
  this.aJG = function(wR, aFX) {
    aq.a6X.aJH(wR);
  }
  ;
  this.a7S = function(z) {
    return aJ6[z].aIf && aJ4[z].a7S();
  }
  ;
  function di(z) {
    return aJ6[z].aIf && aJ4[z].di();
  }
  this.send = function(wR, a0) {
    aJE(wR);
    aJ4[wR].send(a0);
  }
  ;
  this.x7 = function(wR) {
    if (aN.wU() === 8) {
      aJ6[wR].aJ8 = true;
      aq.kx.jh = true;
    }
  }
  ;
  function aJE(wR) {
    aJ6[wR].ds = bU.ds;
    aJ6[wR].aJ8 = false;
  }
  this.close = function(wR, aJI) {
    if (di(wR)) {
      aJ4[wR].close(aJI);
    }
  }
  ;
  this.closeByError = function(wR, aJI) {
    g.wc(aJI);
    if (di(wR)) {
      aJ4[wR].close(aJI);
    }
  }
  ;
  this.wf = function(aJI) {
    for (var z = this.a7X - 1; z >= 0; z--) {
      this.close(z, aJI);
    }
  }
  ;
  this.aJK = function(wR, aJI) {
    for (var z = this.a7X - 1; z >= 0; z--) {
      if (z !== wR) {
        this.close(z, aJI);
      }
    }
  }
  ;
  this.zn = function() {
    this.close(this.wX, 3246);
  }
  ;
  this.aJL = function(wR, d) {
    aJ4[wR].qK();
    g.wQ(wR, d.code);
  }
  ;
}
function aIo() {
  this.jh = false;
  this.iC = function() {
    if (bU.jK() % 250 !== 249) {
      return;
    }
    if (a1.gR) {
      return;
    }
    aq.a6X.aJM(+(this.jh && aV.lI[a1.e2]), aJN());
    this.jh = false;
  }
  ;
  function aJN() {
    return aa.jO + bD.kt.oD;
  }
}
function DataDecoder() {
  this.mainDecoder = function(lobbyID, array) {
    b7.dH(array);
    if (b7.size === 0) {
      aq.kt.closeByError(lobbyID, 3205);
      return;
    }
    if (b7.o1(1) === 0) {
      // lobby
      aJP(lobbyID);
    } else {
      // Game
      aJQ(lobbyID);
    }
    bU.aJR();
  }
  ;
  function aJP(lobbyID) {
    var aJS = b7.o1(6);
    if (aJS === 0) {
      aJT(lobbyID);
    } else if (aJS === 2) {
      aq.aIw.aJU(lobbyID);
    } else if (aJS === 3 || aJS === 4) {
      am.dH();
    } else if (aJS === 9) {
      aq.aIy.aJV(lobbyID);
    } else if (aJS === 10) {
      aq.aJ0.aJW();
    } else if (aJS === 11) {
      aq.aIy.aJX();
    } else if (aJS === 12) {
      aq.aJ0.aJY();
    } else if (aJS === 13) {
      aq.aJ2.aJZ();
    } else if (aJS === 14) {
      aq.aJ2.aJa();
    } else if (aJS === 15) {
      aq.aIy.aJb();
    }
  }
  function aJT(wR) {
    if (wR !== 0) {
      return;
    }
    if (aN.wU() === 8) {
      return;
    }
    i.kt.aIC();
    var aJc = b7.o1(12);
    var aJd = b7.o1(6);
    var ey = new Array(aJc);
    for (var z = 0; z < aJc; z++) {
      ey[z] = b7.o1(aJd);
    }
    aG.a41(ey);
  }
  this.a84 = function(a0) {
    b7.dH(a0);
    b7.o0 = 1;
    var aJS = b7.o1(6);
    // important for 1v1 aJS
    // make it non 1v1s, and we play 1v1s on FFA
    if (aJS === 3) {
      aJe();
    } else {
      aJf();
    }
  }
  ;
  this.a7z = function() {
    b7.o0 = 1;
    var aJS = b7.o1(6);
    var aJg = b7.o1(10);
    if (aq.kt.wW > aq.kt.a82) {
      aJg += aq.kt.a82;
    }
    if (aq.kt.wW === aJg) {
      aq.kt.wX = aJg;
      return false;
    }
    aq.kt.close(aq.kt.wW, 3247);
    aq.kt.wX = aJg;
    am.a7u = b7.o1(10);
    am.a7v = b7.o1(aJS === 3 ? 9 : 1);
    if (aq.kt.a7Y(aJg, 5)) {
      aq.nM.aJh();
    }
    return true;
  }
  ;
  function aJe() {
    // all other modes
    b7.o0 += 20;
    var var_myID = b7.o1(9);
    var var_gameSeed = b7.o1(14); // for the bots spawns
    var var_gamemode = b7.o1(4);
    var var_isContest = b7.o1(1) === 1;
    var var_mapID = b7.o1(6);
    var var_mapSeed = b7.o1(14); // for the background map
    var var_playerCount = b7.o1(9) + 1;
    var var_playerInfo = [];
    var real_playerInfo = [];
    players = [] // reset players
    var var_player_status, var_player_color, name;
    for (var z = 0; z < var_playerCount; z++) {
      var_player_status = b7.o1(1);
      var_player_color = [b7.o1(6), b7.o1(6), b7.o1(6)];
      name = b6.rs.ru(b7.o1(5))
      if (lobby && lobby.players.some(player => player.name === name)) {
        if (z == var_myID) {
          var_myID = players.length;
        }
        players.push({
            original_id: z,
            modified_id: players.length,
          });
        real_playerInfo.push({
          name: name,
          a9G: var_player_color,
          a9H: var_player_status
        });
      }
      var_playerInfo.push({
        name: name,
        a9G: var_player_color,
        a9H: var_player_status
      });
    }
    if (lobby != null) {
      let mapID;
      if (lobby.settings.randomMapID === null) {
        mapID = lobby.settings.mapID;
      } else {
        mapID = lobby.settings.randomMapID;
      }
      let gameMode = lobby.settings.gameMode;
      var_mapID = mapID;
      var_gamemode = gameMode;
      var_isContest = false;
    }
    aN.a7m();
    bI.loadMap(var_mapID, var_mapSeed);
    // if (var_playerInfo.length === 1) {
    //   aO.a97(var_gamemode);
    // }
    a1.gameInit(var_gameSeed, var_myID, real_playerInfo, var_gamemode, var_isContest, false, true);
  }
  function aJf() {
    // 1v1
    b7.o0 += 20;
    var var_myID = b7.o1(1);
    var var_gameSeed = b7.o1(14);
    var var_gamemode = b7.o1(4);
    var var_isContest = b7.o1(1) === 1;
    var var_mapID = b7.o1(6);
    var var_mapSeed = b7.o1(14);
    var var_playerInfo = [];
    var var_playerStatus, var_playerColor, var_playerElo, name;
    for (var z = 0; z < 2; z++) {
      var_playerStatus = b7.o1(1);
      var_playerColor = [b7.o1(6), b7.o1(6), b7.o1(6)];
      var_playerElo = b7.o1(14);
      name = b6.rs.ru(b7.o1(5));
      var_playerInfo.push({
        name: name,
        a9G: var_playerColor,
        tf: var_playerElo,
        a9H: var_playerStatus
      });
    }
    aN.a7m();
    bI.loadMap(var_mapID, var_mapSeed);
    a1.gameInit(var_gameSeed, var_myID, var_playerInfo, var_gamemode, var_isContest, false);
  }
  function aJQ(wR) {
    var aJS;
    var p1 = aN.wU();
    if (p1 !== 8) {
      if (!am.a83()) {
        return;
      }
    }
    if (wR !== aq.kt.wX) {
      aq.kt.closeByError(wR, 3244);
      return;
    }
    aJS = b7.o1(1);
    if (aJS === 0) {
      bU.vI.aJj(b7.a0);
    } else {
      aJk();
    }
  }
  function aJk() {
    var aJl = b7.o1(2);
    if (aJl === 0) {
      aJm();
    } else if (aJl === 1) {
      aJn();
    } else if (aJl === 2) {
      aJo();
    } else {
      if (!x || y) {
        return;
      }
      var eI = 3 * 60 * 3;
      b4.v(1 + 6 + eI * 32);
      b4.w(1, 0);
      b4.w(6, 10);
      var z;
      eI = Math.min(b0.nJ.o3.length, eI);
      for (z = 0; z < eI; z++) {
        b4.aJp(32, b0.nJ.o3[z]);
      }
      aq.kt.send(aq.kt.wX, b4.a0);
    }
  }
  function aJm() {
    var nM = b7.o1(9);
    if (aV.lI[nM] === 0 || aV.lI[a1.e2] === 0) {
      return;
    }
    var na = b7.o1(10);
    aA.nZ(nM, a1.e2, na);
    aU.oW(nM, 1, na);
  }
  function aJn() {
    var nM = b7.o1(9);
    if (aV.lI[nM] === 0 || aV.lI[a1.e2] === 0) {
      return;
    }
    if (!aw.aDN(0, [nM], true)) {
      return;
    }
    aA.ns(nM, 1);
  }
  function aJo() {
    var nM = b7.o1(9);
    var target = b7.o1(9);
    if (aV.lI[nM] === 0 || aV.lI[target] === 0 || aV.lI[a1.e2] === 0) {
      return;
    }
    if (!aw.aDN(1, [nM], true)) {
      return;
    }
    aU.oW(nM, 3, 96);
    aU.oW(target, 4, 96);
    aA.a1X(nM, target);
  }
}
function aJ1() {
  this.aJW = function() {
    bY.kt.rP();
    bY.pY.pZ(105, b5.q2.q3(b5.q2.q4(5)));
    bY.pY.pZ(106, b5.q2.q3(b5.q2.q4(8)));
    bY.pY.pZ(109, b7.o1(30));
    bY.pY.pZ(108, bY.dZ.data[109].value);
    bY.pY.pZ(111, bY.dZ.data[109].value + 1);
    bY.pY.pZ(107, 0);
    bY.pY.pZ(110, "");
  }
  ;
  this.aJY = function() {
    if (b7.size < b4.aJq(1 + 6 + 5 + 3 + 3 + 3 + 8)) {
      aq.kt.closeByError(0, 3254);
      return;
    }
    var aJr = b7.o1(5);
    var aJs = b7.o1(3);
    var aJt = b7.o1(3);
    var aJu = b7.o1(3);
    var aJv = b7.o1(8);
    if (!b7.aJw(1 + 6 + 5 + 3 + 3 + 3 + 8 + 30 + 16 + 30 + 30 + 30 + 32 + 16 * (aJr + aJs + aJt + aJu + aJv) + 32 + 32 + 30 + 4 * 32 + 32 + 30 + 10 + 32 + 2 + 10 + 5)) {
      aq.kt.closeByError(0, 3267);
      return;
    }
    var data = {
      py: b7.o1(30),
      rd: b7.o1(16),
      re: b7.o1(30),
      rf: b7.o1(30),
      rg: b7.o1(30),
      rh: b7.aJx(32),
      username: b6.rs.ru(aJr),
      ri: b6.rs.ru(aJs),
      rj: b6.rs.ru(aJt),
      rk: b7.aJx(32),
      rl: b7.aJx(32),
      rm: b7.o1(30),
      rn: b7.aJx(32),
      ro: b7.aJx(32),
      rp: b7.aJx(32),
      rq: b7.aJx(32),
      aGK: b7.aJx(32),
      aGL: b7.aJx(30),
      aGD: b7.aJx(10),
      aGT: b7.aJx(32),
      aGU: b6.rs.ru(aJu),
      aGO: b7.aJx(2),
      aGP: b7.aJx(10),
      aGM: b6.rs.ru(aJv),
      aGQ: b7.aJx(5)
    };
    bY.pY.pZ(150, data.aGD);
    if (i.pz === 8) {
      if (i.a9d().aHQ === 25) {
        data.aFq = true;
        i.kt.aFi = data;
        i.a9d().aHf(25, false);
      } else {
        data.aFq = false;
        data.px = bY.dZ.data[105].value;
        i.kt.aFf = data;
        bY.pY.rc(data);
        i.a9d().aHf(16, true);
      }
    }
  }
  ;
}
function aJ3() {
  this.aJZ = function() {
    var z;
    if (b7.size < b4.aJq(1 + 6 + 6 + 10 + 16)) {
      aq.kt.closeByError(0, 3259);
      return;
    }
    var qG = b7.o1(6);
    var eI = b7.o1(10);
    var gv = b7.o1(16);
    if (!b7.aJw(1 + 6 + 6 + 10 + 16 + gv * 16 + eI * (qG === 0 ? (30 + 5 + 16 + 30 + 30) : qG === 1 ? (16 + 3 + 16 + 5 + 31 + 30) : (qG === 2 || qG === 3) ? (30 + 5 + 32 + 30 + 30) : (4 * 30 + 32 + 30 + 20 + 5 + 5)))) {
      aq.kt.closeByError(0, 3260);
      return;
    }
    var data = [];
    if (qG === 0) {
      for (z = 0; z < eI; z++) {
        data.push([b7.o1(30), b6.rs.ru(b7.o1(5)), b7.o1(16), b7.o1(30), b7.o1(30)]);
      }
    } else if (qG === 1) {
      for (z = 0; z < eI; z++) {
        data.push([b7.o1(16), b6.rs.ru(b7.o1(3)), b7.o1(16), b6.rs.ru(b7.o1(5)), b7.o1(31), b7.o1(30)]);
      }
    } else if (qG === 2 || qG === 3) {
      for (z = 0; z < eI; z++) {
        data.push([b7.o1(30), b6.rs.ru(b7.o1(5)), b7.aJx(32), b7.o1(30), b7.o1(30)]);
      }
    } else {
      for (z = 0; z < eI; z++) {
        data.push([b7.o1(20), b7.o1(30), b7.o1(30), b7.o1(30), b7.o1(30), b7.aJx(32), b7.o1(30), b6.rs.ru(b7.o1(5)), b6.rs.ru(b7.o1(5))]);
      }
    }
    if (i.pz === 8) {
      i.a9d().aHf(21, true, {
        qG: qG,
        data: data
      });
    }
  }
  ;
  this.aJa = function() {
    if (b7.size < b4.aJq(1 + 6 + 4 + 7 + 11)) {
      aq.kt.closeByError(0, 3265);
      return;
    }
    var aJy = b7.o1(4);
    var aJz = b7.o1(7);
    var aK0 = b7.o1(11);
    if (!b7.aJw(1 + 6 + 4 + 7 + 11 + aJz * 16 + aK0 * 16 + aJy * (3 + 8))) {
      aq.kt.closeByError(0, 3266);
      return;
    }
    var data = [];
    for (var z = 0; z < aJy; z++) {
      var aK1 = b6.rs.ru(b7.o1(3));
      var aK2 = b7.o1(8);
      var aGo = [];
      for (var eb = 0; eb < aK2; eb++) {
        aGo.push(b7.o1(16));
      }
      data.push({
        name: "[" + aK1 + "]",
        aGo: aGo
      });
    }
    if (i.pz === 8) {
      i.a9d().aHf(23, true, data);
    }
  }
  ;
}
function aIx() {
  this.aJU = function(wR) {
    var z, eb, clanCount;
    var lobbyStats, bitsNeeded, gamesCount, lobbyGames;
    if (wR !== aq.kt.wW) {
      aq.kt.close(wR, 3239);
      return;
    }
    if (aN.wU() === 6) {
      aj.dH();
    }
    if (aN.wU() !== 7) {
      aq.kt.close(wR, 3251);
      return;
    }
    lobbyStats = [0, 0, 0, 0];
    bitsNeeded = b7.o1(6);
    for (z = 0; z < 4; z++) {
      lobbyStats[z] = b7.o1(bitsNeeded);
    }
    gamesCount = b7.o1(4);
    lobbyGames = [];
    for (z = 0; z < gamesCount; z++) {
      lobbyGames.push({
        id: b7.o1(5),
        gameMode: b7.o1(4),
        isContest: (b7.o1(1) === 1),
        mapID: b7.o1(6),
        mapSeed: b7.o1(14),
        joinCount: b7.o1(bitsNeeded),
        maxPlayers: (b7.o1(9) + 1),
        timeLeft: b7.o1(10)
      });
      // let mapID = parseInt(inputValues.mapID, 10);
      // let gameMode = parseInt(inputValues.gameMode, 10);

      // if (isNaN(mapID) || mapID < 0 || mapID > 21) {
      //   mapID = defaultInputValues.mapID; 
      // }
      // if (isNaN(gameMode) || gameMode < 0 || gameMode > 10 || gameMode == 8) {
      //   gameMode = defaultInputValues.gameMode;
      // }
      // lobbyGames.push({
      //   id: b7.o1(5),
      //   gameMode: (b7.o1(4) == 8 ? 8 : gameMode),
      //   isContest: (b7.o1(1) === 1, false),
      //   mapID: (b7.o1(6), mapID),
      //   mapSeed: b7.o1(14),
      //   joinCount: b7.o1(bitsNeeded),
      //   maxPlayers: (b7.o1(9) + 1),
      //   timeLeft: b7.o1(10)
      // });
      clanCount = b7.o1(3);
      var clanName = new Array(clanCount);
      var clanPlayers = new Array(clanCount);
      for (eb = 0; eb < clanCount; eb++) {
        clanPlayers[eb] = b7.o1(9) + 1;
        clanName[eb] = b6.rs.ru(b7.o1(3));
      }
      lobbyGames[z].a8n = clanCount;
      lobbyGames[z].a8o = clanName;
      lobbyGames[z].a8p = clanPlayers;
      if (game.id != null && lobbyGames[z].id === game.id) {
        game.timeLeft = lobbyGames[z].timeLeft;
        updateBottomButtons();
      }
    }
    if (game.id != null && game.joined === false) {
      joinGame();
    } else if (host && game.id === null) {
      chooseGame(lobbyGames);
    }
    aj.pZ(lobbyStats, lobbyGames);
  };
}
function aIz() {
  this.aJV = function(wR) {
    if (!b7.aJw(1 + 6 + 3 + 30 + 30)) {
      aq.kt.closeByError(wR, 3269);
      return;
    }
    var aJl = b7.o1(3);
    var aK6 = bX.aK7.iC(b7.o1(30), b7.o1(30));
    aq.a6X.aK8(wR, aK6, aJl);
    if (aJl > 0) {
      return;
    }
    if (wR === 0) {
      if (bY.dZ.data[105].value.length === 0) {
        aq.a6X.aHT(0);
      } else {
        aq.aGA.aK9(wR);
      }
    } else {
      aq.aGA.aK9(wR);
    }
    if (aq.kt.aJ9(wR).aKA() === 4) {
      if (aN.wU() === 6) {
        aq.a7Z.a7a(wR);
      }
    } else if (aq.kt.aJ9(wR).aKA() === 5) {
      if (aN.wU() === 8 || aN.wU() === 10) {
        aq.nM.aJh();
      }
    }
  }
  ;
  this.aJX = function() {
    var id = b7.o1(6);
    if (id === 0) {
      if (!aG.a3x) {
        aq.a6X.aHT(1);
      }
      az.a6V();
      if (i.pz === 8) {
        i.a9d().aHe();
      }
      return;
    }
    if (id === 21) {
      if (i.pz === 8) {
        i.a9d().aHf(17);
      }
      return;
    }
    if (id === 22) {
      bY.pY.pZ(106, bY.dZ.data[110].value);
      bY.pY.pZ(110, "");
      if (i.pz === 8) {
        i.a9d().aHf(16);
      }
      return;
    }
  }
  ;
  this.aJb = function() {
    var eI = b7.o1(16);
    var aKB = b7.o1(16);
    if (!b7.aJw(1 + 6 + 16 + 16 + 16 + eI * 10 + aKB * 16)) {
      aq.kt.closeByError(wR, 3270);
      return;
    }
    var ey = [];
    for (var z = 0; z < eI; z++) {
      ey.push(b6.rs.ru(b7.o1(10)));
    }
    az.a6Z(ey);
  }
  ;
}
function aIp() {
  this.aJB = function(wR, aJ8) {
    b4.v(1 + 6 + 1);
    b4.w(1, 0);
    b4.w(6, 4);
    b4.w(1, aJ8 ? 1 : 0);
    aq.kt.send(wR, b4.a0);
  }
  ;
  this.aJh = function() {
    b4.v(1 + 6 + 8 + 10 + 9 + 10 + 14);
    b4.w(1, 0);
    b4.w(6, 5);
    b4.w(8, aq.kt.aJA());
    b4.w(10, am.a7u);
    b4.w(9, am.a7v);
    b4.w(10, dV);
    b4.w(14, e.dW);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nN = function(e4) {
    b4.v(1 + 4 + 22);
    b4.w(1, 1);
    b4.w(4, 0);
    b4.w(22, e4);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nO = function(hf, iT) {
    b4.v(1 + 4 + 10 + 10);
    b4.w(1, 1);
    b4.w(4, 1);
    b4.w(10, hf);
    b4.w(10, iT);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nS = function(hf, nQ) {
    b4.v(1 + 4 + 10 + 9);
    b4.w(1, 1);
    b4.w(4, 2);
    b4.w(10, hf);
    b4.w(9, nQ);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nT = function(hf, e4) {
    b4.v(1 + 4 + 10 + 22);
    b4.w(1, 1);
    b4.w(4, 3);
    b4.w(10, hf);
    b4.w(22, e4);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nW = function(lg, e4) {
    b4.v(1 + 4 + 10 + 22);
    b4.w(1, 1);
    b4.w(4, 4);
    b4.w(10, lg);
    b4.w(22, e4);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nY = function(iT) {
    b4.v(1 + 4 + 10);
    b4.w(1, 1);
    b4.w(4, 5);
    b4.w(10, iT);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nc = function(o0) {
    b4.v(1 + 4 + 10);
    b4.w(1, 1);
    b4.w(4, 6);
    b4.w(10, o0);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nf = function(ne) {
    b4.v(1 + 4 + 1);
    b4.w(1, 1);
    b4.w(4, 7);
    b4.w(1, ne);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nh = function() {
    b4.v(1 + 4);
    b4.w(1, 1);
    b4.w(4, 8);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nj = function(hf, e4, iT) {
    b4.v(1 + 4 + 10 + 10 + 22);
    b4.w(1, 1);
    b4.w(4, 10);
    b4.w(10, hf);
    b4.w(10, iT);
    b4.w(22, e4);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nq = function(aKC, aKD) {
    b4.v(1 + 4 + 9 + 10);
    b4.w(1, 1);
    b4.w(4, 15);
    b4.w(9, aKD);
    b4.w(10, aKC);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nt = function(a1Q) {
    b4.v(1 + 4 + 9);
    b4.w(1, 1);
    b4.w(4, 14);
    b4.w(9, a1Q);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  this.nx = function(aKE, target) {
    var z;
    var eI = aKE.length;
    b4.v(1 + 4 + 9 + eI * 9);
    b4.w(1, 1);
    b4.w(4, 13);
    b4.w(9, target);
    for (z = 0; z < eI; z++) {
      b4.w(9, aKE[z]);
    }
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
}
function aIs() {
  this.aKF = function() {
    b4.v(1 + 6 + (14 + 4 + 7 + 1 + 1 + 5));
    b4.w(1, 0);
    b4.w(6, 16);
    aq.a6X.aKG();
    aq.kt.send(0, b4.a0);
  }
  ;
  this.aK9 = function(wR) {
    b4.v(1 + 6 + (30 + 48 + 30));
    b4.w(1, 0);
    b4.w(6, 17);
    aKH();
    aq.kt.send(wR, b4.a0);
  }
  ;
  this.aHh = function() {
    b4.v(1 + 6 + 48);
    b4.w(1, 0);
    b4.w(6, 18);
    b6.q2.s5(bY.dZ.data[110].value);
    aq.kt.send(0, b4.a0);
  }
  ;
  this.aHU = function(username) {
    b4.v(1 + 6 + 5 + username.length * 16);
    b4.w(1, 0);
    b4.w(6, 20);
    aq.a6X.aKI(username);
    aq.kt.send(0, b4.a0);
  }
  ;
  this.aHd = function(yy) {
    var eI = yy.od.length;
    b4.v(1 + 6 + 6 + 8 + eI * 16);
    b4.w(1, 0);
    b4.w(6, 29);
    b4.w(6, yy.q1);
    b4.w(8, eI);
    b5.rs.s5(yy.od);
    aq.kt.send(0, b4.a0);
  }
  ;
  this.aGI = function(data) {
    b4.v(1 + 6 + 6 + 30 + 30);
    b4.w(1, 0);
    b4.w(6, 25);
    b4.w(6, data.q1);
    b6.q2.s6(data.px, 5);
    b4.w(30, data.py);
    aq.kt.send(0, b4.a0);
  }
  ;
  this.aGB = function(data) {
    b4.v(1 + 6 + 6 + 30 + 30 + 32);
    b4.w(1, 0);
    b4.w(6, 27);
    b4.w(6, data.q1);
    b6.q2.s6(data.px, 5);
    b4.w(30, data.py);
    b4.aJp(32, data.value);
    aq.kt.send(0, b4.a0);
  }
  ;
  function aKH() {
    b6.q2.s6(bY.dZ.data[105].value, 5);
    b6.q2.s6(bY.dZ.data[106].value, 8);
    b4.w(30, bY.dZ.data[109].value);
  }
}
function aIt() {
  this.ny = function() {
    var z, fo;
    var eI = a1.jN;
    var v1 = bH.result.v1;
    var aKJ = v1.length;
    b4.v(1 + 4 + 10 + 1 + 24 + eI * 16 + aKJ * (9 + 24 + (a1.jl < 7) * 3));
    b4.w(1, 1);
    b4.w(4, 12);
    b4.w(10, aKJ);
    b4.w(1, +(a1.v6 === 2));
    b4.w(24, bH.result.vb);
    var vo = aV.vo;
    for (z = 0; z < eI; z++) {
      b4.w(16, vo[z]);
    }
    var g6 = aV.g6;
    for (z = 0; z < aKJ; z++) {
      fo = v1[z];
      b4.w(9, fo);
      b4.w(24, g6[fo]);
    }
    if (a1.jl < 7) {
      var eG = bV.eG;
      var vU = bV.vU;
      for (z = 0; z < aKJ; z++) {
        b4.w(3, vU[eG[v1[z]]] & 7);
      }
    }
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
}
function aIu() {
  this.aHW = function(qG, qH, qI) {
    b4.v(1 + 6 + 6 + 2 * (1 + 30));
    b4.w(1, 0);
    b4.w(6, 21);
    b4.w(6, qG);
    b4.w(1, +(qH < 0));
    b4.w(1, +(qI < 0));
    b4.w(30, Math.abs(qH));
    b4.w(30, Math.abs(qI));
    aq.kt.send(0, b4.a0);
  }
  ;
  this.aHX = function(qG, aHY, aHZ) {
    b4.v(1 + 6 + 6 + 5 + aHY.length * 16 + 30);
    b4.w(1, 0);
    b4.w(6, 22);
    b4.w(6, qG);
    aq.a6X.aKI(aHY);
    b4.w(30, aHZ);
    aq.kt.send(0, b4.a0);
  }
  ;
  this.aHc = function(qG, aHY, aHZ) {
    b4.v(1 + 6 + 6 + 30 + 30);
    b4.w(1, 0);
    b4.w(6, 28);
    b4.w(6, qG);
    b6.q2.s6(aHY, 5);
    b4.w(30, aHZ);
    aq.kt.send(0, b4.a0);
  }
  ;
  this.aHa = function(aGn, vw) {
    var z;
    var eI = vw.length;
    var gv = 0;
    for (z = 0; z < eI; z++) {
      gv += vw[z].length;
    }
    b4.v(1 + 6 + 3 + 4 + 7 + eI * 3 + gv * 16);
    b4.w(1, 0);
    b4.w(6, 23);
    b4.w(3, aGn);
    b4.w(4, eI);
    b4.w(7, gv);
    for (z = 0; z < eI; z++) {
      b4.w(3, vw[z].length);
      b5.rs.s5(vw[z]);
    }
    aq.kt.send(0, b4.a0);
  }
  ;
  this.aHb = function(aGn, qH, qI) {
    b4.v(1 + 6 + 3 + 2 * (1 + 20));
    b4.w(1, 0);
    b4.w(6, 24);
    b4.w(3, aGn);
    b4.w(1, +(qH < 0));
    b4.w(1, +(qI < 0));
    b4.w(20, Math.abs(qH));
    b4.w(20, Math.abs(qI));
    aq.kt.send(0, b4.a0);
  }
  ;
}
function aIq() {
  this.a7a = function(wR) {
    var username = bY.dZ.data[122].value.slice(0, 20);
    b4.v(1 + 6 + 10 + 5 + username.length * 16 + 18);
    b4.w(1, 0);
    b4.w(6, 1);
    b4.w(10, dV);
    aq.a6X.aKI(username);
    var a9G = b2.color.yB(bY.kt.rW());
    b4.w(6, a9G[0]);
    b4.w(6, a9G[1]);
    b4.w(6, a9G[2]);
    aq.kt.wW = wR;
    aq.kt.send(wR, b4.a0);
  }
  ;
  this.a8u = function(a8h) {
    b4.v(1 + 6 + 4);
    b4.w(1, 0);
    b4.w(6, 2);
    b4.w(4, a8h);
    aq.kt.send(aq.kt.wW, b4.a0);
    return true;
  }
  ;
}
function aIr() {
  this.aJH = function(wR) {
    b4.v(1 + 6 + (14 + 4 + 7 + 1 + 1 + 5));
    b4.w(1, 0);
    b4.w(6, 13);
    aKG();
    aq.kt.send(wR, b4.a0);
  }
  ;
  this.aK8 = function(wR, aK6, aJl) {
    b4.v(1 + 6 + 3 + 30 + 30);
    b4.w(1, 0);
    b4.w(6, 14);
    b4.w(3, aJl);
    b4.w(30, aK6[0]);
    b4.w(30, aK6[1]);
    aq.kt.send(wR, b4.a0);
  }
  ;
  this.aHT = function(id) {
    b4.v(1 + 6 + 6);
    b4.w(1, 0);
    b4.w(6, 15);
    b4.w(6, id);
    aq.kt.send(0, b4.a0);
  }
  ;
  this.a6Y = function(id, od) {
    var eI = Math.min(od.length, 63);
    b4.v(1 + 6 + 6 + 6 + eI * 16);
    b4.w(1, 0);
    b4.w(6, 26);
    b4.w(6, id);
    b4.w(6, eI);
    b5.rs.s5(od);
    aq.kt.send(0, b4.a0);
  }
  ;
  this.aKK = function(aJg, op) {
    b4.v(1 + 6 + op.length * (16 + 10));
    b4.w(1, 0);
    b4.w(6, 9);
    for (var z = 0; z < op.length; z++) {
      b4.w(16, op[z][0]);
      b4.w(10, op[z][1]);
    }
    aq.kt.send(aJg, b4.a0);
  }
  ;
  this.aJM = function(aKL, aAR) {
    b4.v(1 + 6 + 1 + 12);
    b4.w(1, 0);
    b4.w(6, 19);
    b4.w(1, aKL);
    b4.w(12, aAR);
    aq.kt.send(aq.kt.wX, b4.a0);
  }
  ;
  function aKG() {
    b4.w(14, e.dW);
    b4.w(4, m.id);
    b4.w(7, m.em);
    b4.w(1, +x);
    b4.w(1, +y);
    b4.w(5, (new Date()).getHours() % 24);
  }
  this.aKI = function(username) {
    b4.w(5, username.length);
    b5.rs.s5(username);
  }
  ;
}
function aJF() {
  var lobbyID;
  var firstAction;
  var b;
  var aKM = ["wss://", "/s50/", "/s51/", "/s52/"];
  this.dH = function(o0, aKN) {
    lobbyID = o0;
    firstAction = aKN;
    aKO();
  }
  ;
  this.aKP = function() {
    return b.readyState === b.CONNECTING;
  }
  ;
  this.a7S = function() {
    return b.readyState === b.OPEN;
  }
  ;
  this.di = function() {
    return this.aKP() || this.a7S();
  }
  ;
  this.aJD = function(aKN) {
    firstAction = aKN;
  }
  ;
  this.aKA = function() {
    return firstAction;
  }
  ;
  this.send = function(a0) {
    if (this.a7S()) {
      b.send(a0);
    }
  }
  ;
  this.close = function(aJI) {
    if (this.di()) {
      b.close(aJI);
      this.qK();
    }
  }
  ;
  this.qK = function() {
    b.onopen = null;
    b.onmessage = null;
    b.onclose = null;
    b.onerror = null;
  }
  ;
  function aKO() {
    var aKQ = aKM[0];
    if (lobbyID < aq.kt.a81) {
      aKQ += aq.kt.aJ5[lobbyID] + aKM[1 + dS];
    } else {
      aKQ += aq.kt.aJ5[0] + "/i" + (1 + dS) + "" + (lobbyID - aq.kt.a82) + "/";
    }
    b = new WebSocket(aKQ);
    b.binaryType = "arraybuffer";
    b.onopen = onOpen;
    b.onmessage = onMessage;
    b.onclose = onClose;
    b.onerror = onError;
  }
  function onOpen() {
    aq.kt.aJG(lobbyID, firstAction);
  }
  function onMessage(message) {
    aq.dataDecoder.mainDecoder(lobbyID, new Uint8Array(message.data));
  }
  function onError() {}
  function onClose(d) {
    aq.kt.aJL(lobbyID, d);
  }
}
function d4() {
  var aKT = false;
  var a1m = 0;
  var t = 0;
  var q7 = 0;
  var gap = 0;
  var h0 = null;
  var tU = null;
  var xu = null;
  this.dH = function() {
    if (!a1.iN) {
      h0 = null;
      tU = null;
      xu = null;
      return;
    }
    a1m = 0;
    xu = new Uint32Array(a1.zU + 1);
    aKU();
    this.resize();
  }
  ;
  this.a2b = function() {
    return t;
  }
  ;
  this.resize = function() {
    if (!a1.iN) {
      return;
    }
    t = Math.floor((m.n.uE() && !a1.ln) ? (0.18 * an.min) : (0.13 * an.oy));
    t *= 1 + (0.5 + 0.2 * m.n.uE()) * a1.ln;
    t += t % 2;
    q7 = Math.floor(7 * t / 8);
    h0 = h0 ? h0 : document.createElement("canvas");
    h0.width = t;
    h0.height = t;
    tU = h0.getContext("2d", {
      alpha: true
    });
    gap = Math.max(1, 0.015 * t);
    tU.lineWidth = gap;
    tU.strokeStyle = p.mL;
    b2.ow.textAlign(tU, 1);
    b2.ow.textBaseline(tU, 1);
    aKV();
  }
  ;
  this.vk = function() {
    return xu[this.kd()];
  }
  ;
  this.wB = function() {
    a1m = 31;
    this.iC();
    return this.kd();
  }
  ;
  this.kd = function() {
    var aKW = 0;
    for (var z = a1.zU; z > 0; z--) {
      if (xu[z] > xu[aKW]) {
        aKW = z;
      }
    }
    return aKW;
  }
  ;
  this.kc = function(aKX) {
    var fj = 0;
    var jP = aa.jQ;
    var eG = bV.eG;
    var eI = aa.jO;
    var ew = bE.ew;
    for (var z = 0; z < eI; z++) {
      var fo = jP[z];
      if (eG[fo] === aKX) {
        ew[fj++] = fo;
      }
    }
    bE.ep[0] = fj;
  }
  ;
  this.aKY = function() {
    var fj = 0;
    for (var z = a1.zU; z > 0; z--) {
      if (xu[z] > 0) {
        fj++;
      }
    }
    return fj;
  }
  ;
  this.iC = function() {
    if (!a1.iN) {
      return;
    }
    if (++a1m >= 32) {
      a1m = 0;
      aKZ();
    }
  }
  ;
  function aKU() {
    var z;
    for (z = a1.zU; z >= 0; z--) {
      xu[z] = 0;
    }
    for (z = aa.jO - 1; z >= 0; z--) {
      xu[bV.eG[aa.jQ[z]]] += 1;
    }
  }
  function aKZ() {
    var z;
    for (z = a1.zU; z >= 0; z--) {
      xu[z] = 0;
    }
    for (z = aa.jO - 1; z >= 0; z--) {
      xu[bV.eG[aa.jQ[z]]] += aV.g6[aa.jQ[z]];
    }
    aKT = true;
  }
  this.l2 = function() {
    if (!a1.iN) {
      return;
    }
    if (aKT) {
      aKV();
    }
  }
  ;
  function aKV() {
    var z;
    var aKa = 0;
    var eI = 0;
    var ed = Math.floor(t / 2);
    var h3 = Math.floor(q7 / 2);
    var a8V = 1.5 * Math.PI;
    var a8W;
    for (z = a1.zU; z >= 0; z--) {
      eI += xu[z];
      if (xu[z] === 0) {
        aKa++;
      }
    }
    tO();
    if (eI > 0) {
      if (aKa === a1.zU) {
        for (z = a1.zU; z >= 0; z--) {
          if (xu[z] > 0) {
            aKb(z, ed, h3);
            break;
          }
        }
        aKc(ed);
      } else {
        for (z = 0; z <= a1.zU; z++) {
          if (xu[z] > 0) {
            a8W = a8V + 2 * Math.PI * xu[z] / eI;
            a8X(z, ed, h3, a8V, a8W);
            aKd(ed, h3, a8V, a8W);
            if (z !== 0) {
              a8Y(ed, h3, a8V);
            }
            a8V = a8W;
          }
        }
        a8Y(ed, h3, 1.5 * Math.PI);
      }
    }
    a8Z(ed, h3);
  }
  function tO() {
    aKT = false;
    tU.clearRect(0, 0, t, t);
    tU.fillStyle = p.mI;
    tU.fillRect(0, 0, t, t);
    tU.fillStyle = p.mL;
    tU.fillRect(0, 0, t, gap);
    tU.fillRect(0, 0, gap, t);
    tU.fillRect(t - gap, 0, gap, t);
    tU.fillRect(0, t - gap, t, gap);
  }
  function aKb(z, ed, h3) {
    tU.fillStyle = bV.a8a[bV.vU[z]];
    tU.beginPath();
    tU.arc(ed, ed, h3, 0, 2 * Math.PI);
    tU.fill();
  }
  function a8X(z, ed, h3, a8V, a8W) {
    tU.fillStyle = bV.a8a[bV.vU[z]];
    tU.beginPath();
    tU.arc(ed, ed, h3, a8V, a8W);
    tU.lineTo(ed, ed);
    tU.fill();
  }
  function aKc(ed) {
    var fontSize = ed / 3;
    tU.font = b2.ow.q5(1, fontSize);
    tU.fillStyle = p.mL;
    tU.fillText("100%", ed, ed + 0.1 * fontSize);
  }
  function aKd(ed, h3, a8V, a8W) {
    var a8b, qu;
    var el = (a8W - a8V) / (2 * Math.PI);
    var fontSize = 1 * h3 * Math.min(el, 0.37);
    if (fontSize < 8) {
      return;
    }
    a8b = (a8V + a8W) / 2;
    qu = Math.floor(100 * el + 0.5) + "%";
    h3 *= 0.525 - Math.max(0.6 * (el - 0.7), 0);
    tU.font = b2.ow.q5(1, fontSize);
    tU.fillStyle = p.mL;
    tU.fillText(qu, ed + Math.cos(a8b) * h3, ed + Math.cos(a8b + 1.5 * Math.PI) * h3);
  }
  function a8Y(ed, h3, a8b) {
    tU.beginPath();
    tU.moveTo(ed, ed);
    tU.lineTo(ed + Math.cos(a8b) * h3, ed + Math.cos(a8b + 1.5 * Math.PI) * h3);
    tU.stroke();
  }
  function a8Z(ed, h3) {
    tU.beginPath();
    tU.arc(ed, ed, h3, 0, 2 * Math.PI);
    tU.stroke();
  }
  this.qn = function() {
    if (a1.iN) {
      if (a1.ln) {
        qo.drawImage(h0, bR.gap, bR.gap);
      } else {
        qo.drawImage(h0, bR.gap, a2c + 2 * bR.gap);
      }
    }
  }
  ;
}
function cn() {
  this.dP = function() {
    if (m.id !== 0) {
      return false;
    }
    if (aKe()) {
      return true;
    }
    var value = aKf("replay");
    if (!this.clear()) {
      return false;
    }
    if (!value) {
      return false;
    }
    i.j(3, 0, value);
    return true;
  }
  ;
  function aKe() {
    var value = aKf("account");
    if (!value) {
      value = aKf("a");
      if (!value) {
        b8.clear();
        return false;
      }
    }
    b8.clear();
    i.j(8, i.pz, new q0(1000,{
      q1: 0,
      px: value,
      py: 0
    }));
    return true;
  }
  this.clear = function() {
    var wO = new URL(window.location.href);
    wO.search = "";
    try {
      history.replaceState(null, "", wO.toString());
      return true;
    } catch (d) {
      console.log("error 352: " + d);
    }
    return false;
  }
  ;
  function aKf(key) {
    if (typeof URLSearchParams === "undefined") {
      return null;
    }
    var aIF = window.location.search;
    var aKg = new URLSearchParams(aIF);
    var value = aKg.get(key);
    if (typeof value !== "string" || value.length < 1) {
      return null;
    }
    return value;
  }
  this.aGV = function(key, value) {
    if (m.id !== 0) {
      return;
    }
    try {
      var wO = new URL(window.location.href);
      var fo = wO.searchParams;
      fo.set(key, value);
      wO.search = fo.toString();
      history.replaceState(null, "", wO.toString());
    } catch (d) {
      console.log("error 358: " + d);
    }
  }
  ;
}
function cS() {
  var aKh;
  var ey;
  this.dH = function() {
    ey = new Uint16Array(101);
    for (var z = ey.length - 1; z >= 0; z--) {
      ey[z] = bB.ek(z * 32768, 100);
    }
    this.ze(0);
  }
  ;
  this.value = function(fo) {
    return ey[fo];
  }
  ;
  this.aDt = function() {
    return bB.ek(aKh - 1, 2);
  }
  ;
  this.ze = function(aDb) {
    aKh = (aDb * 2) % 32768 + 1;
  }
  ;
  this.random = function() {
    aKh = aKh * 167 % 32768;
    return aKh;
  }
  ;
  this.ic = function(lD) {
    return bB.ek(lD * this.random(), 32768);
  }
  ;
  this.jF = function(fo) {
    return fo !== 0 && this.random() < this.value(fo);
  }
  ;
  this.hy = function(eb, ec) {
    return eb + this.ic(ec - eb);
  }
  ;
}
function ck() {
  this.oF = new aKi();
  this.aII = new aKj();
  this.aIM = new aKk();
  this.dH = function(zX, tb, zZ, za) {
    var aKl;
    if (a1.gR) {
      return;
    }
    aKl = {};
    aKl.zY = a1.e2;
    aKl.zX = zX;
    aKl.tb = tb;
    aKl.zZ = zZ;
    aKl.za = za;
    aKl.a8j = bI.fz;
    aKl.a8k = bI.a8g;
    aO.a9C(aKl);
    this.oF.dH(aKl);
  }
  ;
  this.iC = function() {
    if (a1.gR) {
      return;
    }
    this.oF.iC();
    aKm();
  }
  ;
  function aKm() {
    if (i.pz !== 3) {
      return;
    }
    if (bU.jK() % 15 !== 5 && a1.v9 !== 2) {
      return;
    }
    i.a9d().aIG();
  }
  this.aIL = function() {
    var qL = this.oF.aKl;
    if (a1.v9 === 0) {
      aN.a7m();
    }
    bI.loadMap(qL.a8j, qL.a8k);
    if (qL.tb.length === 1) {
      aO.a97(qL.zZ);
      aO.a99(qL.a9A, qL.a9B);
    }
    aq.kt.close(aq.kt.wX, 3257);
    aq.kt.wX = 0;
    a1.gameInit(qL.zX, qL.zY, qL.tb, qL.zZ, qL.za, true, true);
  }
  ;
  this.aIK = function(od) {
    var z = od.indexOf("=");
    if (z >= 0) {
      return od.substring(z + 1);
    }
    return od;
  }
  ;
  this.aIJ = function(od) {
    return "https://territorial.io/?replay=" + od;
  }
  ;
}
function aKi() {
  this.aKn = null;
  this.aKo = null;
  this.aKp = null;
  this.aKq = null;
  this.aKr = null;
  this.aKs = null;
  var aKt = 0;
  this.aKl = null;
  this.aIH = "";
  this.dH = function(aKl) {
    this.aKn = [];
    this.aKo = [];
    this.aKp = [];
    this.aKq = [];
    this.aKr = [0];
    this.aKs = [0];
    aKt = 0;
    this.aKl = aKl;
    this.aIH = "";
  }
  ;
  this.oG = function(id, ez, f1, f3) {
    if (a1.gR || a1.v9 === 2) {
      return;
    }
    if (this.aKr[aKt] === 0) {
      if (this.aKs[aKt]) {
        this.aKr.push(1);
        this.aKs.push(0);
        aKt++;
      } else {
        this.aKr[aKt] = 1;
      }
    }
    this.aKn.push(id);
    this.aKo.push(ez);
    this.aKp.push(f1 === undefined ? 0 : f1);
    this.aKq.push(f3 === undefined ? 0 : f3);
    this.aKs[aKt]++;
  }
  ;
  this.iC = function() {
    if (this.aKr[aKt] === 0) {
      this.aKs[aKt]++;
      return;
    }
    this.aKr.push(0);
    this.aKs.push(0);
    aKt++;
  }
  ;
}
function aKk() {
  this.sA = function(od) {
    b6.q2.s2(b6.q2.s0(b6.q2.ry(od)));
    aA.a0q = "";
    if (!aKu()) {
      return false;
    }
    aKv();
    aKw();
    aKx();
    if (!aKy()) {
      return false;
    }
    if (b7.o0 < 8 * b7.size - 13 || b7.o0 > 8 * b7.size) {
      aKz("Out Of Bounds Error: " + b7.o0 + " " + (8 * b7.size));
      return false;
    }
    b1.oF.aIH = od;
    return true;
  }
  ;
  function aKu() {
    if (b7.size < 10) {
      aKz("File Too Small");
      return false;
    }
    if (b7.o1(9) !== dU) {
      aKz("Incompatible Version Error", true);
    }
    var size = b7.o1(31);
    if (size !== b7.size) {
      aKz("Size Error");
      return false;
    }
    if (aL0(b7.o1(16))) {
      return true;
    }
    aKz("Hash Error");
    return false;
  }
  function aKz(od, aL1) {
    if (aL1) {
      aA.a0q = L(323) + ": " + od;
      return;
    }
    i.j(4, 3, new k("⚠️ " + L(323),od,true));
  }
  function aL0(ir) {
    var z;
    var fo = b7.a0;
    var eI = b7.size;
    var aAR = 0;
    for (z = 7; z < eI; z++) {
      aAR = (aAR + fo[z]) & 65535;
    }
    return aAR === ir;
  }
  function aKv() {
    var aKl = {};
    aKl.zY = b7.o1(9);
    aKl.zX = b7.o1(14);
    aKl.zZ = b7.o1(4);
    aKl.za = b7.o1(1) === 1;
    aKl.a8j = b7.o1(6);
    aKl.a8k = b7.o1(14);
    aKl.aL2 = b7.o1(10);
    b1.oF.aKl = aKl;
  }
  function aKw() {
    var z, a9H, a9G, name;
    var eI = b1.oF.aKl.aL2;
    var tb = [];
    for (z = 0; z < eI; z++) {
      a9H = b7.o1(1);
      a9G = [b7.o1(6), b7.o1(6), b7.o1(6)];
      name = b6.rs.ru(b7.o1(5));
      tb.push({
        name: name,
        a9G: a9G,
        a9H: a9H
      });
    }
    b1.oF.aKl.tb = tb;
    if (b1.oF.aKl.zZ !== 8) {
      return;
    }
    for (z = 0; z < eI; z++) {
      tb[z].tf = b7.o1(14);
    }
  }
  function aKx() {
    var z, eI;
    var aL3 = b1.oF.aKl;
    if (aL3.tb.length !== 1) {
      return;
    }
    eI = aL3.zZ > 6 ? 1 : (aL3.zZ + 2);
    aL3.a9A = new Array(eI);
    aL3.a9B = new Array(eI);
    for (z = 0; z < eI; z++) {
      aL3.a9A[z] = b7.o1(3);
      aL3.a9B[z] = b7.o1(9) + 1;
    }
  }
  function aKy() {
    var sB = b7.o1(5);
    var aL4 = b7.o1(30);
    var aL5 = b7.o1(30);
    if (aL4 + aL5 > 8 * b7.size) {
      aKz("Corrupted File");
      return false;
    }
    aL6(aL4);
    aL7(aL5, sB);
    return true;
  }
  function aL6(eI) {
    var z, id;
    var aL8 = new Uint8Array(eI);
    var aL9 = new Uint16Array(eI);
    var aLA = new Uint32Array(eI);
    var aLB = new Uint32Array(eI);
    b1.oF.aKn = aL8;
    b1.oF.aKo = aL9;
    b1.oF.aKp = aLA;
    b1.oF.aKq = aLB;
    for (z = 0; z < eI; z++) {
      aL8[z] = id = b7.o1(4);
      aL9[z] = b7.o1(9);
      if (id === 0) {
        aLA[z] = b7.o1(22);
      } else if (id === 1) {
        aLA[z] = b7.o1(10);
        aLB[z] = b7.o1(10);
      } else if (id === 2) {
        aLA[z] = b7.o1(10);
        aLB[z] = b7.o1(9);
      } else if (id === 3) {
        aLA[z] = b7.o1(10);
        aLB[z] = b7.o1(22);
      } else if (id === 4) {
        aLA[z] = b7.o1(10);
        aLB[z] = b7.o1(22);
      } else if (id === 5) {
        aLA[z] = b7.o1(10);
      } else if (id === 6) {
        aLA[z] = b7.o1(10);
      } else if (id === 7) {
        aLA[z] = b7.o1(1);
      } else if (id === 10) {
        aLA[z] = b7.o1(20);
        aLB[z] = b7.o1(22);
      }
    }
  }
  function aL7(eI, sB) {
    var z;
    var aKr = new Uint8Array(eI);
    var aKs = new Array(eI);
    aKs.fill(0);
    b1.oF.aKr = aKr;
    b1.oF.aKs = aKs;
    for (z = 0; z < eI; z++) {
      aKr[z] = b7.o1(1);
      aKs[z] = b7.o1(sB);
    }
  }
}
function aKj() {
  this.ug = function() {
    var sB = aLC();
    var aLD = aLE(sB);
    b4.v(aLD + (6 - aLD % 6) % 6);
    aLF();
    aLG();
    aLH();
    aLI(sB);
    aLJ(sB);
    if (b4.o0 !== aLD) {
      aA.wY("Encoder Index Error: " + b4.o0 + " " + aLD);
    }
    b4.o0 = 9 + 31;
    b4.w(16, aJN());
    b7.dH(b4.a0);
    let a = bB.ek(aLD - 1, 6) + 1;
    let b = b5.q2.q4(a);
    return b5.q2.q3(b);
  }
  ;
  function aLF() {
    var aL3 = b1.oF.aKl;
    b4.w(9, dU);
    b4.w(31, b4.size);
    b4.o0 += 16;
    b4.w(9, aL3.zY);
    b4.w(14, aL3.zX);
    b4.w(4, aL3.zZ);
    b4.w(1, aL3.za);
    b4.w(6, aL3.a8j);
    b4.w(14, aL3.a8k);
    b4.w(10, aL3.tb.length);
  }
  function aLG() {
    var z;
    var tb = b1.oF.aKl.tb;
    var eI = tb.length;
    for (z = 0; z < eI; z++) {
      b4.w(1, tb[z].a9H);
      b4.w(18, (tb[z].a9G[0] << 12) + (tb[z].a9G[1] << 6) + tb[z].a9G[2]);
      b4.w(5, tb[z].name.length);
      b5.rs.s5(tb[z].name);
    }
    if (b1.oF.aKl.zZ !== 8) {
      return;
    }
    for (z = 0; z < eI; z++) {
      b4.w(14, tb[z].tf);
    }
  }
  function aLH() {
    var z;
    var aL3 = b1.oF.aKl;
    if (aL3.tb.length === 1) {
      for (z = 0; z < aL3.a9A.length; z++) {
        b4.w(3, aL3.a9A[z]);
        b4.w(9, aL3.a9B[z] - 1);
      }
    }
  }
  function aLI(sB) {
    var z;
    var aKn = b1.oF.aKn;
    var ez = b1.oF.aKo;
    var f1 = b1.oF.aKp;
    var f3 = b1.oF.aKq;
    var eI = aKn.length;
    b4.w(5, sB);
    b4.w(30, eI);
    b4.w(30, b1.oF.aKs.length);
    for (z = 0; z < eI; z++) {
      b4.w(4, aKn[z]);
      b4.w(9, ez[z]);
      if (aKn[z] === 0) {
        b4.w(22, f1[z]);
      } else if (aKn[z] === 1) {
        b4.w(10, f1[z]);
        b4.w(10, f3[z]);
      } else if (aKn[z] === 2) {
        b4.w(10, f1[z]);
        b4.w(9, f3[z]);
      } else if (aKn[z] === 3) {
        b4.w(10, f1[z]);
        b4.w(22, f3[z]);
      } else if (aKn[z] === 4) {
        b4.w(10, f1[z]);
        b4.w(22, f3[z]);
      } else if (aKn[z] === 5) {
        b4.w(10, f1[z]);
      } else if (aKn[z] === 6) {
        b4.w(10, f1[z]);
      } else if (aKn[z] === 7) {
        b4.w(1, f1[z]);
      } else if (aKn[z] === 10) {
        b4.w(20, f1[z]);
        b4.w(22, f3[z]);
      }
    }
  }
  function aLJ(sB) {
    var z;
    var aKr = b1.oF.aKr;
    var aKs = b1.oF.aKs;
    var eI = aKr.length;
    for (z = 0; z < eI; z++) {
      b4.w(1, aKr[z]);
      b4.w(sB, aKs[z]);
    }
  }
  function aJN() {
    var z;
    var fo = b4.a0;
    var eI = b4.size;
    var aAR = 0;
    for (z = 7; z < eI; z++) {
      aAR = (aAR + fo[z]) & 65535;
    }
    return aAR;
  }
  function aLE(sB) {
    var aLD = 9 + 31 + 16;
    aLD += 9 + 14 + 4 + 1 + 6 + 14 + 10;
    aLD += 5 + 30 + 30;
    aLD += aLK();
    aLD += aLL();
    aLD += aLM();
    aLD += aLN(sB);
    return aLD;
  }
  function aLK() {
    var z;
    var tb = b1.oF.aKl.tb;
    var eI = tb.length;
    var aLD = eI * (1 + 18 + 5);
    for (z = 0; z < eI; z++) {
      aLD += 16 * tb[z].name.length;
    }
    if (b1.oF.aKl.zZ === 8) {
      aLD += eI * 14;
    }
    return aLD;
  }
  function aLL() {
    if (b1.oF.aKl.tb.length !== 1) {
      return 0;
    }
    return b1.oF.aKl.a9A.length * (3 + 9);
  }
  function aLM() {
    var z;
    var aKn = b1.oF.aKn;
    var eI = aKn.length;
    var aLD = (4 + 9) * eI;
    var aLO = [22, (10 + 10), (10 + 9), (10 + 22), (10 + 22), 10, 10, 1, 0, 0, (20 + 22)];
    for (z = 0; z < eI; z++) {
      aLD += aLO[aKn[z]];
    }
    return aLD;
  }
  function aLN(sB) {
    return b1.oF.aKs.length * (1 + sB);
  }
  function aLC() {
    var z;
    var aKs = b1.oF.aKs;
    var eI = aKs.length;
    var max = 0;
    for (z = 0; z < eI; z++) {
      max = Math.max(max, aKs[z]);
    }
    return sG(Math.max(max, 1));
  }
}
function cX() {
  var ed;
  var bc = false;
  var aLP = false;
  var aLQ = -10000;
  var aLR = -1;
  var aLS = 0;
  this.t = 0;
  this.ir = 0;
  this.min = 0;
  this.max = 0;
  this.oy = 0;
  this.qi = 1;
  this.p2 = 1;
  this.pj = 0;
  this.dI = function() {
    this.t = aLT(document.documentElement.clientWidth) + 2;
    this.ir = aLT(document.documentElement.clientHeight) + 2;
  }
  ;
  this.dH = function() {
    ed = 1;
    sF();
    aLU(0);
  }
  ;
  function sF() {
    wp = document.getElementById("canvasA");
    qo = wp.getContext("2d", {
      alpha: false
    });
    qo.imageSmoothingEnabled = false;
  }
  this.iC = function() {
    at.iC();
    if (++ed >= 50) {
      resize(0);
    }
    aLV();
  }
  ;
  function aLV() {
    if (aLR === -1) {
      return;
    }
    if (bU.ds < aLR) {
      return;
    }
    aLS++;
    aLR = -1;
    if (2000 * aLS >= bU.ds + 4 * 2000) {
      console.log("error 3748");
      return;
    }
    m.n.setState(15);
  }
  this.dR = function(hF) {
    bc = true;
    resize(hF);
  }
  ;
  this.xX = function() {
    if (aLQ + 1000 > bU.ds) {
      return;
    }
    aLQ = bU.ds;
    resize(0);
  }
  ;
  function resize(aLW) {
    ed = 0;
    if (!aP.qP()) {
      return;
    }
    if (aLU(aLW) || bc) {
      bc = false;
      bR.resize();
      bM.a69.resize();
      aL.dH();
      bN.dH();
      aM.resize();
      aG.resize();
      aB.resize();
      i.resize();
      if (a1.v9 >= 1) {
        aI.resize(false);
        aH.resize();
        aJ.resize();
        aF.resize();
        aE.resize();
        aA.resize();
        a9.resize();
        b3.resize();
        al.resize();
        aC.resize();
        aD.resize();
        a8.resize();
        bT.resize();
        aU.resize();
        aK.resize();
        bW.resize();
        aF.a3d();
      } else {
        if (aN.wU() === 2) {
          aO.resize();
        }
        aN.a7o();
        aN.a7p();
      }
      bU.dO = true;
    }
  }
  function aLT(el) {
    if (el && el > 128) {
      return Math.floor(el);
    }
    return 128;
  }
  function aLX(t, ir) {
    var oy = (t + ir) / 2;
    var aLY = (m.id !== 0 || t < ir) ? 700 : 1200;
    var aLZ = Math.min(aLY / oy, 1);
    if (bY.dZ.data[1].value === 0) {
      aLZ = 2 * aLZ / 3;
    } else {
      aLZ = Math.min(aLZ + (bY.dZ.data[1].value - 1) * (1 - aLZ) / 2, 1);
    }
    an.p2 = (window.devicePixelRatio || 1) * aLZ;
  }
  function aLU(aLW) {
    var q7, a32, q8, a9K;
    if (an.pj > 0) {
      return false;
    }
    q7 = aLT(document.documentElement.clientWidth);
    a32 = aLT((window.visualViewport && m.id !== 2) ? window.visualViewport.height : document.documentElement.clientHeight);
    aLX(q7, a32);
    if (aLW && !aLP) {
      aLP = true;
      document.body.removeChild(wp);
    } else if (aLP) {
      aLP = false;
      document.body.appendChild(wp);
    }
    q8 = Math.floor(0.5 + q7 * an.p2);
    a9K = Math.floor(0.5 + a32 * an.p2);
    if (q8 === an.t && a9K === an.ir) {
      return false;
    }
    an.t = q8;
    an.ir = a9K;
    an.min = a4U(q8, a9K);
    an.max = a17(q8, a9K);
    an.oy = bB.ek(q8 + a9K, 2);
    an.qi = q8 / a9K;
    wp.width = q8;
    wp.height = a9K;
    wp.style.width = q7 + "px";
    wp.style.height = a32 + "px";
    aLR = bU.ds + 1000;
    return true;
  }
}
function d1() {
  this.aK7 = new aLa();
  this.vi = new aLb();
}
function aLb() {
  this.vj = function() {
    var z, fo;
    var eI = aa.jO;
    var tb = aa.jQ;
    var vo = aV.vo;
    var a7w = this.aAl();
    for (z = 0; z < eI; z++) {
      fo = tb[z];
      if (aQ.v2(fo)) {
        vo[fo] = a7w;
      }
    }
    var oL = aV.oL;
    var iK = aV.iK;
    var iL = aV.iL;
    var vu = aV.vu;
    eI = a1.jN;
    for (z = 0; z < eI; z++) {
      if (vu[z] === 0 || iL[z] < 1 || 2 * oL[z] > 3 * (iK[z] + iL[z])) {
        vo[z] = 0;
      }
    }
    var va = 0;
    for (z = 0; z < eI; z++) {
      va += vo[z] > 0;
    }
    return va;
  }
  ;
  this.aAl = function() {
    return Math.min(65535, bU.jK());
  }
  ;
}
function aLa() {
  var size = 256;
  this.iC = function(aLc, aLd) {
    var ey = new Uint8Array(size);
    aLe(ey, aLc, aLd);
    aLf(ey, aLc, 2);
    aLf(ey, aLd, 7);
    aLg(ey);
    return aJN(ey);
  }
  ;
  function aLe(ey, aLc, aLd) {
    var z;
    var eI = size;
    var aLh = 3 + (4 + aLc) % 32768;
    var aLi = 12 + aLd % 32768;
    var aLj = 17 + ((aLc & aLd) + (aLc | aLd) + aLc) % 32768;
    for (z = 0; z < eI; z++) {
      aLh = 1 + (aLh * aLi) % aLj;
      ey[z] = aLh % 256;
    }
  }
  function aLf(ey, el, kB) {
    var z;
    var eI = size;
    for (z = 0; z < eI; z++) {
      ey[z] = (ey[z] + ((el >> ((z + kB) % 30)) & 1)) % 256;
    }
  }
  function aLg(ey) {
    var z, el;
    var eI = size;
    var o0 = 0;
    for (z = 0; z < 30000; z++) {
      el = ey[o0];
      ey[o0] = (el + z + ey[(o0 + z) % eI]) % 256;
      o0 = (el + z + o0 + (el & o0)) % eI;
    }
  }
  function aJN(ey) {
    var z;
    var eI = size;
    var a32 = 1;
    var a9K = 1;
    for (z = 0; z < eI; z += 2) {
      a32 = ((1 + a32) * (ey[z] + 1)) % 1073741824;
      a9K = ((1 + a9K) * (ey[z + 1] + 1)) % 1073741824;
    }
    return [a32, a9K];
  }
}
function cU() {
  var aLk;
  var aLl;
  var gk;
  var aLm;
  this.dH = function() {
    var z, eP, eR, a9G, aLn;
    var t, ir, tU, gx, sQ, el, fo, eY, eb;
    if (aLo()) {
      aLl = null;
      return;
    }
    aLk = bB.ek(64 + 32, 4);
    if (bI.fz === 1) {
      a9G = 0;
      aLn = 160;
    } else {
      a9G = 128;
      aLn = 32;
    }
    aLm = "rgb(" + a9G + "," + a9G + "," + a9G + ")";
    aLl = new Array(4);
    for (z = 3; z >= 0; z--) {
      aLl[z] = document.createElement("canvas");
      t = z % 2 === 0 ? bI.eT : aLk;
      ir = z % 2 === 0 ? aLk : bI.eU + 2 * aLk;
      aLl[z].width = t;
      aLl[z].height = ir;
      tU = aLl[z].getContext("2d", {
        alpha: false
      });
      gx = tU.getImageData(0, 0, t, ir);
      sQ = gx.data;
      if (z % 2 === 0) {
        for (eR = aLk - 1; eR >= 0; eR--) {
          el = aLn + Math.floor((eR + 1) * (a9G - aLn) / (aLk + 1));
          for (eP = t - 1; eP >= 0; eP--) {
            fo = ((z === 0 ? aLk - eR - 1 : eR) * t + eP) * 4;
            sQ[fo] = el;
            sQ[fo + 1] = el;
            sQ[fo + 2] = el;
            sQ[fo + 3] = 255;
          }
        }
      } else {
        for (eP = aLk - 1; eP >= 0; eP--) {
          el = aLn + Math.floor((eP + 1) * (a9G - aLn) / (aLk + 1));
          for (eR = ir - 1 - aLk; eR >= aLk; eR--) {
            fo = (eR * t + (z === 3 ? aLk - eP - 1 : eP)) * 4;
            sQ[fo] = el;
            sQ[fo + 1] = el;
            sQ[fo + 2] = el;
            sQ[fo + 3] = 255;
          }
        }
        for (eb = 1; eb >= 0; eb--) {
          for (eP = aLk - 1; eP >= 0; eP--) {
            for (eR = aLk - 1; eR >= 0; eR--) {
              eY = (Math.pow((eP * eP + eR * eR), 0.5) + 1) / (aLk + 1);
              eY = eY > 1 ? 1 : eY;
              el = aLn + Math.floor(eY * (a9G - aLn));
              fo = ((eb === 0 ? aLk - eR - 1 : eR + eb * (ir - aLk)) * t + (z === 1 ? eP : aLk - eP - 1)) * 4;
              sQ[fo] = el;
              sQ[fo + 1] = el;
              sQ[fo + 2] = el;
              sQ[fo + 3] = 255;
            }
          }
        }
      }
      tU.putImageData(gx, 0, 0);
    }
    aLp(aLn);
  }
  ;
  function aLo() {
    gk = true;
    aLm = "rgb(" + bI.sO[0] + "," + bI.sO[1] + "," + bI.sO[2] + ")";
    if (bI.aDh(bI.fz)) {
      return true;
    }
    gk = false;
    return false;
  }
  function aLp(a0F) {
    bI.sJ.fillStyle = "rgb(" + a0F + "," + a0F + "," + a0F + ")";
    bI.sJ.fillRect(0, 0, bI.eT, 1);
    bI.sJ.fillRect(0, bI.eU - 1, bI.eT, 1);
    bI.sJ.fillRect(0, 0, 1, bI.eU);
    bI.sJ.fillRect(bI.eT - 1, 0, 1, bI.eU);
  }
  this.tO = function() {
    var eb = gk ? 0 : -aLk;
    if (!aFG(eb, eb, bI.eT - 2 * eb, bI.eU - 2 * eb, bP.aLq, bP.aLr, bP.aLs, bP.aLt)) {
      qo.fillStyle = aLm;
      qo.fillRect(0, 0, an.t, an.ir);
    }
  }
  ;
  this.qn = function() {
    if (gk) {
      return;
    }
    if (aFF(0, -aLk, bI.eT, aLk, bP.aLq, bP.aLr, bP.aLs, bP.aLt)) {
      qo.drawImage(aLl[0], bP.aLu, bP.aLv - aLk);
    }
    if (aFF(bI.eT, -aLk, aLk, bI.eU + 2 * aLk, bP.aLq, bP.aLr, bP.aLs, bP.aLt)) {
      qo.drawImage(aLl[1], bP.aLu + bI.eT, bP.aLv - aLk);
    }
    if (aFF(0, bI.eU, bI.eT, aLk, bP.aLq, bP.aLr, bP.aLs, bP.aLt)) {
      qo.drawImage(aLl[2], bP.aLu, bP.aLv + bI.eU);
    }
    if (aFF(-aLk, -aLk, aLk, bI.eU + 2 * aLk, bP.aLq, bP.aLr, bP.aLs, bP.aLt)) {
      qo.drawImage(aLl[3], bP.aLu - aLk, bP.aLv - aLk);
    }
  }
  ;
}
function cq() {
  this.gl = new aLw();
  this.aAj = new aLx();
  this.tR = new aLy();
  this.kt = new aLz();
  this.ho = new aM0();
  this.a0F = new aM1();
  this.aM2 = new aM3();
  this.jB = new aM4();
  this.k3 = new aM5();
  this.aM6 = new aM7();
  this.dH = function() {
    this.tR.dH();
    this.kt.dH();
    this.ho.dH();
    this.a0F.dH();
    this.aM6.dH();
  }
  ;
  this.qn = function() {
    this.aM6.qn();
    this.tR.qn();
  }
  ;
}
function aM4() {
  this.iC = function(player) {
    if (aV.fx[player].length === 0) {
      return false;
    }
    if (bD.kt.oD === bD.kt.je) {
      return false;
    }
    var oC = bD.kt.oC[player];
    if (oC >= a2.je[a2.iU[player]]) {
      return false;
    }
    if (oC === bD.kt.oP) {
      return false;
    }
    if (!b2.fd.oJ(player, a2.jc[a2.iU[player]], 32, 0)) {
      return false;
    }
    if (!ac.i1.iC(player) && !ac.i3.iC(player)) {
      return false;
    }
    if (!aM8(player)) {
      return false;
    }
    return aM9(player);
  }
  ;
  function aM9(player) {
    b2.fd.oM(player);
    bD.kt.oQ(player);
    return true;
  }
  function aM8(yd) {
    var ye;
    var aMA = (bE.eu[1] + bC.h4[bE.eu[2] - 1]) << 2;
    if (aQ.e9(aMA)) {
      return true;
    }
    ye = aQ.eA(aMA);
    if (yd === ye) {
      return false;
    }
    if (!eB(yd, ye)) {
      return false;
    }
    return true;
  }
  function aMB(player) {
    var fp = aMC(player);
    if (fp >= 0) {
      return bD.k3.k4(player, fp >> 2);
    }
    fp = aMD(player, 1, 4, 40);
    if (fp >= 0) {
      return bD.k3.k4(player, fp >> 2);
    }
    fp = aMD(player, 40, 8, 200);
    if (fp >= 0) {
      return bD.k3.k4(player, fp >> 2);
    }
    return false;
  }
  function aMC(player) {
    var z, fp, t4, t3;
    var lk = aV.ht[player];
    var ll = aV.hv[player];
    var hR = aV.hu[player] - lk + 1;
    var hU = aV.hw[player] - ll + 1;
    var el = ao.value(100);
    for (z = 0; z < 32; z++) {
      t4 = lk + bB.ek(ao.random() * hR, el);
      t3 = ll + bB.ek(ao.random() * hU, el);
      fp = aQ.t0(t4, t3);
      if (aME(player, fp)) {
        return fp;
      }
    }
    return -1;
  }
  function aMD(player, ib, ej, aMF) {
    var z, lk, ll, ly, lz, t, ir, h3, aMG, aMH, fp;
    var eI = ib + aMF;
    for (z = ib; z < eI; z += ej) {
      lk = aV.ht[player] - z;
      lk = lk < 1 ? 1 : lk;
      ll = aV.hv[player] - z;
      ll = ll < 1 ? 1 : ll;
      ly = aV.hu[player] + z;
      ly = ly >= bI.eT - 1 ? bI.eT - 2 : ly;
      lz = aV.hw[player] + z;
      lz = lz >= bI.eU - 1 ? bI.eU - 2 : lz;
      h3 = bB.ek(ao.random() * (2 * (ly - lk + lz - ll)), ao.value(100));
      t = (ly - lk);
      ir = (lz - ll);
      if (h3 <= t) {
        aMG = lk + h3;
        aMH = ll;
      } else if (h3 <= t + ir) {
        aMG = ly;
        aMH = ll + h3 - t;
      } else if (h3 <= 2 * t + ir) {
        aMG = lk + h3 - t - ir;
        aMH = lz;
      } else {
        aMG = lk;
        aMH = ll + h3 - 2 * t - ir;
      }
      fp = aQ.t0(aMG, aMH);
      if (aME(player, fp)) {
        return fp;
      }
    }
    return -1;
  }
  function aME(yd, fp) {
    var ye;
    if (!aQ.eD(fp)) {
      return false;
    }
    if (aQ.e9(fp)) {
      return true;
    }
    ye = aQ.eA(fp);
    if (yd === ye) {
      return false;
    }
    if (!eB(yd, ye)) {
      return false;
    }
    return aV.fx[ye].length > 0;
  }
}
function aLw() {
  this.gm = function(player, aMI) {
    if (!bC.hj(aMI)) {
      return false;
    }
    if (bD.kt.oD === bD.kt.je) {
      return false;
    }
    if (bD.kt.oC[player] === bD.kt.oP) {
      return false;
    }
    if (aV.fx[player].length === 0) {
      return false;
    }
    if (!bD.k3.k4(player, aMI)) {
      return false;
    }
    if (!aMJ(aMI)) {
      return false;
    }
    return true;
  }
  ;
  this.nV = function(player, lg, aMI) {
    if (!bC.hj(aMI)) {
      return false;
    }
    if (!this.oR(player, lg)) {
      return false;
    }
    if (!bD.k3.oS(aMI)) {
      return false;
    }
    if (!aMJ(aMI)) {
      return false;
    }
    return true;
  }
  ;
  this.oR = function(player, id) {
    var z, aMK;
    var qH = player << 3;
    var qI = qH + bD.kt.oC[player];
    var aML = bD.kt.aML;
    var aMM = bD.kt.aMM;
    for (z = qH; z < qI; z++) {
      aMK = aML[z];
      if (id === aMM[aMK]) {
        bE.eu[3] = aMK;
        return true;
      }
    }
    return false;
  }
  ;
  this.nU = function(e4) {
    var a0G = bD.a0F.a0G;
    if (!this.oR(a1.e2, a0G)) {
      return false;
    }
    b0.ge.nU(a0G, e4);
    return true;
  }
  ;
  this.a0H = function(kU, kV) {
    var player = a1.e2;
    var eI = bD.kt.oC[player];
    if (eI === 0) {
      return false;
    }
    var aML = bD.kt.aML;
    var lj = bD.kt.lj;
    var qH = player << 3;
    var qI = qH + eI;
    var aMN = 16 * 5;
    var aH1 = -1;
    for (var z = qI - 1; z >= qH; z--) {
      var aMO = aML[z];
      var eY = bC.hN(kU, kV, lj[aMO]);
      if (eY < aMN) {
        aMN = eY;
        aH1 = aMO;
      }
    }
    if (!aMP(aH1, kU, kV)) {
      return false;
    }
    bD.a0F.a0G = bD.kt.aMM[aH1];
    return true;
  }
  ;
  this.a0O = function(kU, kV) {
    var eI = bD.kt.oD;
    if (eI < 1) {
      return -1;
    }
    var lj = bD.kt.lj;
    var aMN = 16 * 5;
    var aH1 = -1;
    for (var z = 0; z < eI; z++) {
      var eY = bC.hN(kU, kV, lj[z]);
      if (eY < aMN) {
        aMN = eY;
        aH1 = z;
      }
    }
    if (!aMP(aH1, kU, kV)) {
      return -1;
    }
    return aH1;
  }
  ;
  this.li = function(player, id) {
    var eI = bD.kt.oC[player];
    var qH = player << 3;
    var qI = qH + eI;
    var aMM = bD.kt.aMM;
    var aML = bD.kt.aML;
    for (var z = qH; z < qI; z++) {
      var aMO = aML[z];
      if (aMM[aMO] === id) {
        return aMO;
      }
    }
    return -1;
  }
  ;
  this.lo = function(player) {
    var eI = bD.kt.oC[player];
    if (eI === 0) {
      return -1;
    }
    return bD.kt.aML[player << 3];
  }
  ;
  function aMP(z, kU, kV) {
    if (z < 0) {
      return false;
    }
    var aMQ = bD.kt.lj[z];
    var aMR = bC.hT(aMQ);
    var aMS = bC.hW(aMQ);
    var aMT = 1.25 * 16 * (0.9 + 0.1 * Math.log10(bD.kt.a1P[z]));
    return bB.aFN(bC.hS(kU), bC.hV(kV), aMR, aMS, aMT);
  }
  function aMJ(aMI) {
    var aMU = 4 + 0.03 * (1 + 1.5 * m.n.uE()) * an.oy / hh;
    return bC.hX(aMI, bE.eu[1]) < aMU;
  }
}
function aLx() {
  this.aAk = function(player) {
    var z;
    var aML = bD.kt.aML;
    var qH = player << 3;
    var qI = qH + bD.kt.oC[player] - 1;
    for (z = qI; z >= qH; z--) {
      this.aMV(aML[z]);
    }
  }
  ;
  this.aMV = function(aMW) {
    var kt = bD.kt;
    var aMX = kt.oD - 1;
    var aMY = kt.a1O[aMW];
    var aMZ = kt.aMa[aMW];
    var aMb = kt.lj[aMW];
    kt.oD = aMX;
    kt.a1O[aMW] = kt.a1O[aMX];
    kt.aMc[aMW] = kt.aMc[aMX];
    kt.aMd[aMW] = kt.aMd[aMX];
    kt.lj[aMW] = kt.lj[aMX];
    kt.aMe[aMW] = kt.aMe[aMX];
    kt.a1P[aMW] = kt.a1P[aMX];
    kt.aMa[aMW] = kt.aMa[aMX];
    kt.aMM[aMW] = kt.aMM[aMX];
    kt.aMf[aMW] = kt.aMf[aMX];
    kt.aMg[aMW] = kt.aMg[aMX];
    kt.aMh[aMW] = kt.aMh[aMX];
    kt.aML[kt.a1O[aMW]] = aMW;
    aMi(aMY);
    bD.ho.ho[bC.hn(kt.lj[aMW])][kt.aMa[aMW]] = aMW;
    aMj(bC.hn(aMb), aMZ);
  }
  ;
  function aMi(a8b) {
    var player = a8b >> 3;
    var kt = bD.kt;
    var eI = kt.oC[player] - 1;
    var aMk = (player << 3) + eI;
    kt.oC[player] = eI;
    if (aMk === a8b) {
      return;
    }
    kt.aML[a8b] = kt.aML[aMk];
    kt.a1O[kt.aML[a8b]] = a8b;
  }
  function aMj(z, aMl) {
    var aG5 = bD.ho.ho[z];
    var d = aG5.pop();
    if (aMl === aG5.length) {
      return;
    }
    aG5[aMl] = d;
    bD.kt.aMa[d] = aMl;
  }
}
function aLy() {
  var aMm;
  var tt = 8;
  var aMn = new Array(2);
  this.dH = function() {
    aMm = new Array(a1.eF);
    aMn[0] = aMo(255);
    aMn[1] = aMo(0);
  }
  ;
  function aMo(o0) {
    var gu = tt + 4;
    var y6 = b2.ow.sF(gu, gu);
    var h1 = b2.ow.getContext(y6, true);
    var gx = b2.ow.getImageData(h1, gu, gu);
    var sQ = gx.data;
    aMp(sQ, gu + 1, o0);
    aMp(sQ, gu + 2, o0);
    aMp(sQ, 2 * gu + 1, o0);
    aMp(sQ, 2 * gu - 3, o0);
    aMp(sQ, 2 * gu - 2, o0);
    aMp(sQ, 3 * gu - 2, o0);
    aMp(sQ, gu * (gu - 3) + 1, o0);
    aMp(sQ, gu * (gu - 2) + 1, o0);
    aMp(sQ, gu * (gu - 2) + 2, o0);
    aMp(sQ, gu * (gu - 2) - 2, o0);
    aMp(sQ, gu * (gu - 1) - 3, o0);
    aMp(sQ, gu * (gu - 1) - 2, o0);
    h1.putImageData(gx, 0, 0);
    return y6;
  }
  function aMp(sQ, e4, o0) {
    var dy = 4 * e4;
    sQ[dy] = 255;
    sQ[dy + 1] = 255;
    sQ[dy + 2] = o0;
    sQ[dy + 3] = 255;
  }
  function sF(player) {
    var y6 = b2.ow.sF(tt, tt);
    var h1 = b2.ow.getContext(y6, true);
    aMq(h1, player);
    return y6;
  }
  function aMq(h1, player) {
    var eP, eR, hR, hU, eY, e4, aMr, a8c, aMs;
    var gu = tt;
    var gx = b2.ow.getImageData(h1, gu, gu);
    var sQ = gx.data;
    var k8 = (gu >> 1) - 0.5;
    var aLm = aQ.a20(player);
    var aMt = b2.p6.xn(aLm, 0.5);
    if (!b2.p6.xp(aLm, aMt, 300)) {
      b2.p6.xr(aLm, 100);
    }
    for (eR = 0; eR < gu; eR++) {
      for (eP = 0; eP < gu; eP++) {
        hR = eP - k8;
        hU = eR - k8;
        e4 = (eR * gu + eP) * 4;
        eY = hR * hR + hU * hU;
        a8c = ((gu - 1.5) * (gu - 1.5) / 4);
        aMs = ((gu - 4.5) * (gu - 4.5) / 4);
        aMr = eY <= aMs ? aMt : aLm;
        sQ[e4] = aMr[0];
        sQ[e4 + 1] = aMr[1];
        sQ[e4 + 2] = aMr[2];
        sQ[e4 + 3] = eY > a8c ? 0 : 255;
      }
    }
    h1.putImageData(gx, 0, 0);
  }
  this.qn = function() {
    var z, aMu, aFO, aFP, eP, eR, player, fontSize, y6, eM, iU, aMv, hQ;
    var aMw, aMx, aMy, aMz;
    var lj = bD.kt.lj;
    var a1O = bD.kt.a1O;
    var a1P = bD.kt.a1P;
    var aMg = bD.kt.aMg;
    var aN0 = aMm;
    var aN1 = a1.e2;
    var aN2 = -1;
    var eI = bD.kt.oD;
    var aN3 = an.t;
    var aN4 = an.ir;
    var aN5 = bI.eT << 4;
    var aN6 = tt;
    var e7 = hh;
    var dy = e7 / aN6;
    var lk = hg / e7;
    var ll = hi / e7;
    var ly = (aN3 + hg) / e7;
    var lz = (aN4 + hi) / e7;
    var hR = ly - lk;
    var hU = lz - ll;
    var h1 = qo;
    if (bD.gl.oR(a1.e2, bD.a0F.a0G)) {
      aN2 = bE.eu[3];
    }
    h1.imageSmoothingEnabled = e7 < 9;
    b2.ow.textAlign(h1, 1);
    b2.ow.textBaseline(h1, 1);
    for (z = 0; z < eI; z++) {
      player = a1O[z] >> 3;
      iU = a1P[z];
      aMu = 0.9 + 0.1 * Math.log10(iU);
      hQ = lj[z];
      aFO = (hQ % aN5) / 16 - aMu;
      aFP = Math.floor(hQ / aN5) / 16 - aMu;
      eP = aN3 * (aFO - lk) / hR;
      eR = aN4 * (aFP - ll) / hU;
      aMy = +(player === aN1);
      aMx = 1 + aMy / 8;
      aMz = e7 * aMu;
      aMw = -2 * aMz * aMx;
      aMx = aMy * aMz / 4;
      if (eP < aMw || eR < aMw || eP > aN3 + aMx || eR > aN4 + aMx) {
        continue;
      }
      eM = 2 * aMu * dy;
      aMv = aMu * e7;
      y6 = aN0[player];
      if (y6 === undefined) {
        aN0[player] = y6 = sF(player);
      }
      if (player === aN1) {
        h1.setTransform(eM, 0, 0, eM, eP - eM * 2, eR - eM * 2);
        h1.drawImage(aMn[+(z === aN2)], 0, 0);
      }
      h1.setTransform(eM, 0, 0, eM, eP, eR);
      h1.drawImage(y6, 0, 0);
      fontSize = Math.floor(aN7(iU) * aMv);
      if (fontSize < 6) {
        continue;
      }
      h1.setTransform(1, 0, 0, 1, 0, 0);
      h1.fillStyle = aMg[z] ? p.mn : p.mL;
      h1.font = b2.ow.q5(1, fontSize);
      h1.fillText(b2.w0.z6(iU), eP + aMv, eR + aMv + 0.1 * fontSize);
    }
    h1.imageSmoothingEnabled = false;
    h1.setTransform(1, 0, 0, 1, 0, 0);
  }
  ;
  function aN7(iU) {
    if (iU < 1000) {
      return 0.42;
    }
    if (iU < 10000) {
      return 0.34;
    }
    if (iU < 1000000) {
      return 0.26;
    }
    if (iU < 100000000) {
      return 0.19;
    }
    return 0.15;
  }
}
function aM7() {
  var y6;
  var gu = 20;
  this.dH = function() {
    if (y6) {
      return;
    }
    y6 = bF.kt.aN8(gu, bV.aN9[0]);
  }
  ;
  this.qn = function() {
    var m5 = hh;
    if (m5 >= 5) {
      return;
    }
    var aN3 = an.t;
    var aN4 = an.ir;
    var lk = hg / m5;
    var ll = hi / m5;
    var ly = (aN3 + hg) / m5;
    var lz = (aN4 + hi) / m5;
    var fp = -gu * m5;
    var aNA = 0.5 * fp;
    var aN5 = bI.eT << 4;
    var eI = bD.kt.oD;
    var lj = bD.kt.lj;
    var aNB = y6;
    var h1 = qo;
    if (m5 > 3) {
      h1.globalAlpha = 0.5 * (5 - m5);
    }
    for (var z = 0; z < eI; z++) {
      var hQ = lj[z];
      var aNC = (hQ % aN5) / 16;
      var a92 = Math.floor(hQ / aN5) / 16;
      var eP = aN3 * (aNC - lk) / (ly - lk) + aNA;
      var eR = aN4 * (a92 - ll) / (lz - ll) + aNA;
      if (eP > aN3 || eR > aN4 || eP < fp || eR < fp) {
        continue;
      }
      h1.setTransform(m5, 0, 0, m5, eP, eR);
      h1.drawImage(aNB, 0, 0);
    }
    h1.globalAlpha = 1;
    h1.setTransform(m5, 0, 0, m5, 0, 0);
  }
  ;
}
function aM3() {
  this.iC = function() {
    var z, aMQ, aM2;
    var aMf = bD.kt.aMf;
    var lj = bD.kt.lj;
    var aMd = bD.kt.aMd;
    for (z = bD.kt.oD - 1; z >= 0; z--) {
      aMQ = lj[z];
      aM2 = aMf[z];
      if (aM2 === 0 || aMQ !== aMd[z]) {
        continue;
      }
      aND(z, bC.hm(aMQ), aM2 - 1);
      bD.aAj.aMV(z);
    }
  }
  ;
  function aND(z, aNE, hE) {
    var iT;
    var player = bD.kt.a1O[z] >> 3;
    var aMA = (aNE + bC.h4[hE]) << 2;
    var iU = bD.kt.a1P[z];
    if (aQ.e9(aMA)) {
      iT = a1.eF;
    } else {
      iT = aQ.eA(aMA);
      if (iT === player) {
        b2.fd.fg(player, iU);
        return;
      }
      if (!eB(player, iT)) {
        b0.jS.nl(player, iT, iU);
        return;
      }
    }
    if (!aS.ii(player, iT) && !aS.j1(player)) {
      return;
    }
    aV.fi[player].push(aNE << 2);
    aS.iQ(player, iU, iT);
    a3.iR(player, true);
  }
  this.aNF = function(player, e4, hE, lg) {
    if (hE === 0) {
      return;
    }
    var aN1 = a1.e2;
    if (!b2.fd.gU(aN1)) {
      return;
    }
    if (!eB(player, aN1)) {
      return;
    }
    if (player === aN1) {
      return;
    }
    if (aV.fx[aN1].length === 0) {
      return;
    }
    hE--;
    var aMA = (e4 + bC.h4[hE]) << 2;
    if (!aQ.e9(aMA) && !eB(player, aQ.eA(aMA))) {
      return;
    }
    var eW = false;
    for (var z = 0; z < 4; z++) {
      aMA = (e4 + bC.h4[z]) << 2;
      if (!aQ.eD(aMA)) {
        continue;
      }
      if (aQ.e9(aMA)) {
        continue;
      }
      if (aQ.eA(aMA) === aN1) {
        eW = true;
        break;
      }
    }
    if (!eW) {
      return;
    }
    aA.a1Y(719, 0);
    aA.vY(180, L(324, [aV.a1G[player]]), 719, player, p.mm, p.mI, -1, true, undefined, {
      ec: 1,
      lg: lg
    });
  }
  ;
}
function aLz() {
  this.aNG = null;
  this.je = 512;
  this.oP = 8;
  this.oD = 0;
  this.aNH = 0;
  this.a1O = new Uint16Array(this.je);
  this.aMc = new Uint32Array(this.je);
  this.aMd = new Uint32Array(this.je);
  this.lj = new Uint32Array(this.je);
  this.aMe = new Uint16Array(this.je);
  this.a1P = new Uint32Array(this.je);
  this.aMa = new Uint16Array(this.je);
  this.aMM = new Uint16Array(this.je);
  this.aMf = new Uint8Array(this.je);
  this.aMg = new Uint8Array(this.je);
  this.aMh = new Uint32Array(this.je);
  this.oC = new Uint8Array(a1.eF);
  this.aML = new Uint16Array(this.oP * a1.eF);
  this.dH = function() {
    this.aNH = 0;
    this.oD = 0;
    this.aNG = new Uint8Array(bI.eT + bI.eU);
    this.oC.fill(0);
  }
  ;
  this.oQ = function(player) {
    var eI = this.oD;
    var aNI = bC.hl(bE.eu[0]);
    var aNJ = this.oC[player];
    var aNK = (player << 3) + aNJ;
    this.a1O[eI] = aNK;
    this.aMc[eI] = aNI;
    this.lj[eI] = aNI;
    this.aMd[eI] = bC.hl(bE.eu[1]);
    this.aMe[eI] = 0;
    var iU = bE.eq[0];
    if (iU < 60) {
      b2.fd.fe(player, 60 - iU);
      this.a1P[eI] = 60;
    } else {
      this.a1P[eI] = iU;
    }
    this.aMa[eI] = bD.ho.oQ(eI, bC.hn(aNI));
    this.aMM[eI] = this.aNH;
    this.aMf[eI] = bE.eu[2];
    this.aMg[eI] = 0;
    this.aMh[eI] = 0;
    this.aNH = (this.aNH + 1) & 1023;
    this.aML[aNK] = eI;
    this.oC[player] = aNJ + 1;
    this.oD++;
    bD.aM2.aNF(player, bE.eu[1], bE.eu[2], this.aMM[eI]);
  }
  ;
  this.nU = function() {
    var aMK = bE.eu[3];
    this.aMc[aMK] = this.lj[aMK];
    this.aMd[aMK] = bC.hl(bE.eu[1]);
    this.aMe[aMK] = 0;
    this.aMf[aMK] = bE.eu[2];
    bD.aM2.aNF(this.a1O[aMK] >> 3, bE.eu[1], bE.eu[2], this.aMM[aMK]);
  }
  ;
  this.iC = function() {
    bD.aM2.iC();
    aNL(this);
    aNM(this);
    aNN(this);
    aNO(this);
  }
  ;
  function aNN(vh) {
    if (bU.jK() % 5 !== 3) {
      return;
    }
    var z, iU;
    var a1P = vh.a1P;
    var g6 = aV.g6;
    var a1O = vh.a1O;
    var aMh = vh.aMh;
    var aMg = vh.aMg;
    var eI = vh.oD;
    for (z = 0; z < eI; z++) {
      iU = a1P[z];
      if (g6[a1O[z] >> 3]) {
        a1P[z] = Math.max(iU - Math.max(1, iU >> 7), 0);
        continue;
      }
      a1P[z] = Math.max(iU - Math.max(1, iU >> 11), 0);
      if (aMg[z]) {
        continue;
      }
      var gH = aMh[z];
      if (!gH) {
        continue;
      }
      gH = Math.max(gH >> 3, 1);
      a1P[z] = Math.min(a1P[z] + (gH << 1), 4294967295);
      aMh[z] -= gH;
    }
  }
  function aNO(vh) {
    var z;
    var a1P = vh.a1P;
    var aMg = vh.aMg;
    var eI = vh.oD;
    for (z = eI - 1; z >= 0; z--) {
      aMg[z] = aMg[z] >> 1;
      if (a1P[z] === 0) {
        bD.aAj.aMV(z);
      }
    }
  }
  function aNL(vh) {
    var z, aNI, aNP, aNQ, aNR, aNS, aNT, aNU, aNV, aNW, aNX, eL, aNY, fp;
    var aMc = vh.aMc;
    var aMd = vh.aMd;
    var lj = vh.lj;
    var a1P = vh.a1P;
    var aMg = vh.aMg;
    var aMe = vh.aMe;
    var aMa = vh.aMa;
    var g6 = aV.g6;
    var a1O = vh.a1O;
    var eI = vh.oD;
    var aN5 = bI.eT << 4;
    for (z = eI - 1; z >= 0; z--) {
      aNQ = lj[z];
      aNP = aMd[z];
      if (aNQ === aNP) {
        continue;
      }
      aNI = aMc[z];
      aNS = aNI % aN5;
      aNT = ~~((aNI + 0.5) / aN5);
      aNU = aNP % aN5;
      aNV = ~~((aNP + 0.5) / aN5);
      aNW = aNU - aNS;
      aNX = aNV - aNT;
      eL = ~~Math.sqrt(aNW * aNW + aNX * aNX + 0.5);
      fp = 150000 + 25000 * bB.log10(a1P[z]);
      fp += (+(!g6[a1O[z] >> 3])) * 50000;
      if (aMg[z]) {
        fp = bB.ek(fp, 5);
      }
      aNY = aMe[z] + Math.max(~~((fp + 0.5) / eL), 1);
      if (aNY >= 65535) {
        lj[z] = aNR = aNP;
      } else {
        aMe[z] = aNY;
        lj[z] = aNR = aNS + bB.ek(aNY * aNW, 65536) + aN5 * (aNT + bB.ek(aNY * aNX, 65536));
      }
      aMa[z] = bD.ho.aNZ(aMa[z], aNQ, aNR);
    }
  }
  function aNM(vh) {
    if (bU.jK() % 2 !== 1) {
      return;
    }
    var z, kB, k8, ec, ed, aNa, uD, aNb, gh, sY, h8, h9, lk, ll, aNI, aNP, aNc;
    var aMN, eY, aNd, aNe, aNf;
    var eI = vh.oD;
    var lj = vh.lj;
    var a1O = vh.a1O;
    var a1P = vh.a1P;
    var aMh = vh.aMh;
    var aMg = vh.aMg;
    var ho = bD.ho.ho;
    var aNg = ho.length;
    var aNh = bD.ho.aNh;
    var aN5 = bI.eT << 4;
    var aNi = a1.iN;
    var aKX = bV.eG;
    var aMN = 120 * 120;
    var fp = (eI - 1) * (bB.ek(bU.jK(), 2) % 2);
    for (z = 0; z < eI; z++) {
      kB = Math.abs(z - fp);
      aNI = lj[kB];
      k8 = bC.hn(aNI);
      gh = a1O[kB] >> 3;
      lk = aNI % aN5;
      ll = ~~((aNI + 0.5) / aN5);
      aNe = a1P[kB];
      for (ec = 0; ec < 9; ec++) {
        aNa = k8 + aNh[ec];
        if (aNa < 0 || aNa >= aNg) {
          continue;
        }
        aNb = ho[aNa];
        uD = aNb.length;
        for (ed = 0; ed < uD; ed++) {
          aNc = aNb[ed];
          sY = a1O[aNc] >> 3;
          if (gh === sY || (aNi && aKX[gh] === aKX[sY])) {
            continue;
          }
          aNP = lj[aNc];
          h8 = lk - (aNP % aN5);
          h9 = ll - ~~((aNP + 0.5) / aN5);
          eY = h8 * h8 + h9 * h9;
          if (eY < aMN) {
            aNf = a1P[aNc];
            if (aNf < aNe) {
              aNd = bB.ek(aNf + bB.ek(aNe - aNf, 10), 10);
            } else {
              aNd = bB.ek(aNe, 10);
            }
            aNd = Math.max(1, aNd);
            a1P[aNc] = Math.max(aNf - aNd, 0);
            aMg[aNc] = 4;
            aMh[aNc] = Math.min(aMh[aNc] + aNd, 4294967295);
          }
        }
      }
    }
  }
}
function aM0() {
  this.aNj = 32;
  this.eP = 0;
  this.eR = 0;
  this.hp = 0;
  this.aNk = 0;
  this.aNl = 4;
  this.ho = null;
  this.aNh = new Int16Array(9);
  this.dH = function() {
    this.hp = 1 + bB.ek(bI.eT - 1, this.aNj);
    this.aNk = 1 + bB.ek(bI.eU - 1, this.aNj);
    this.ho = new Array(this.hp * this.aNk);
    b2.p6.xm(this.ho);
    aNm(this.aNh, this.hp);
  }
  ;
  function aNm(aNh, t) {
    var eP, eR;
    for (eP = -1; eP <= 1; eP++) {
      for (eR = -1; eR <= 1; eR++) {
        aNh[3 * (1 + eR) + 1 + eP] = eR * t + eP;
      }
    }
  }
  this.oQ = function(aNn, z) {
    this.ho[z].push(aNn);
    return this.ho[z].length - 1;
  }
  ;
  this.aNZ = function(aNo, aNI, aNP) {
    var aNp, aNq;
    var qH = bC.hn(aNI);
    var qI = bC.hn(aNP);
    if (qH === qI) {
      return aNo;
    }
    aNp = this.ho[qH].pop();
    if (this.ho[qH].length === aNo) {
      return this.oQ(aNp, qI);
    }
    aNq = this.ho[qH][aNo];
    this.ho[qH][aNo] = aNp;
    bD.kt.aMa[aNp] = aNo;
    return this.oQ(aNq, qI);
  }
  ;
}
function aM5() {
  this.k4 = function(player, aNr) {
    var hE, h7;
    var gg = bC.hG(player, aNr);
    if (gg === aNr) {
      return false;
    }
    hE = bC.h6(gg, aNr);
    h7 = bC.hq(gg, hE);
    if (!aQ.gk(h7 << 2)) {
      hE = bC.hD(gg, aNr, hE);
      h7 = bC.hq(gg, hE);
      if (!aQ.gk(h7 << 2)) {
        return false;
      }
    }
    bE.eu[0] = h7;
    bE.eu[1] = aNr;
    bE.eu[2] = 0;
    if (wa(bC.hl(h7), aNr)) {
      if (bE.eu[2] !== 0 && bC.hM(player, (bE.eu[1] + bC.h4[bE.eu[2] - 1]) << 2)) {
        return false;
      }
      return true;
    }
    return false;
  }
  ;
  this.oS = function(aNr) {
    var aNI = bD.kt.lj[bE.eu[3]];
    bE.eu[1] = aNr;
    bE.eu[2] = 0;
    return wa(aNI, aNr);
  }
  ;
  function wa(aNP, aNr) {
    if (!aNs(aNP, aNr)) {
      return false;
    }
    if (bE.eo[0] === 0) {
      if (aQ.gk(aNr << 2)) {
        return true;
      }
      return false;
    }
    if (!aNt(aNr)) {
      return false;
    }
    if (!sD(bC.hm(aNP))) {
      return false;
    }
    return true;
  }
  function aNs(aNP, aMI) {
    var h7 = bC.hm(aNP);
    var aNu = Math.abs(bC.eQ(aMI) - bC.eQ(h7));
    var aNv = Math.abs(bC.eS(aMI) - bC.eS(h7));
    if (Math.max(aNu, aNv) === 0) {
      return false;
    }
    aNw(aNP, bC.hl(aMI), aNu, aNv);
    return true;
  }
  function aNw(aNI, aNP, aNu, aNv) {
    var aNx = bC.hT(aNI);
    var aNy = bC.hW(aNI);
    var aNz = bC.hT(aNP);
    var aO0 = bC.hW(aNP);
    var aO1 = aNz - aNx;
    var aO2 = aO0 - aNy;
    var aO3 = Math.abs(aO1);
    var aO4 = Math.abs(aO2);
    var aO5 = aO1 > 0 ? 1 : 3;
    var aO6 = aO2 > 0 ? 2 : 0;
    if (aO3 > aO4) {
      aO7(aNx, aNy, aNx + aO3, aNy + aO4, aO5, aO6, aNu);
    } else {
      aO7(aNy, aNx, aNy + aO4, aNx + aO3, aO6, aO5, aNv);
    }
  }
  function aO7(aNx, aNy, aNz, aO0, aO5, aO6, aNu) {
    var z, eR;
    var aNG = bD.kt.aNG;
    var fp = 0;
    var aO8 = 0;
    var ir = aO0 - aNy;
    var t = aNz - aNx;
    var aO9 = aNx % 16;
    for (z = 1; z <= aNu; z++) {
      aNG[fp++] = aO5;
      aNG[fp] = aO6;
      eR = ((ir * (aO9 + (z << 4)) + 0.5) / t) >> 4;
      fp += eR - aO8;
      aO8 = eR;
    }
    bE.ex(bE.eo, fp);
  }
  function aNt(aMI) {
    if (aQ.gk(aMI << 2)) {
      return true;
    }
    return aOA(aMI);
  }
  function aOA(aMI) {
    var z, hE;
    var aNG = bD.kt.aNG;
    var aOB = bC;
    var eI = bE.eo[0];
    var aOC = 4 * aMI;
    for (z = eI - 1; z >= 0; z--) {
      hE = aNG[z];
      aOC = aOB.hr(aOC, (hE + 2) & 3);
      if (aQ.gk(aOC)) {
        bE.eo[0] = z;
        bE.eu[1] = aOC >> 2;
        bE.eu[2] = 1 + hE;
        return true;
      }
    }
    return false;
  }
  function sD(aOD) {
    var z;
    var sQ = a6H;
    var aNG = bD.kt.aNG;
    var eI = bE.eo[0] - 1;
    var aOC = 4 * aOD;
    var h5 = bC.h5;
    for (z = 0; z < eI; z++) {
      aOC += h5[aNG[z]];
      if (!(sQ[aOC + 3] === 0 && sQ[aOC + 2] === 2)) {
        return false;
      }
    }
    return true;
  }
}
function aM1() {
  var tt = 32;
  var ts = new Array(2);
  this.a0G = -1;
  this.dH = function() {
    this.a0G = -1;
    if (ts[0]) {
      return;
    }
    ts[0] = sF(255);
    ts[1] = sF(0);
  }
  ;
  function sF(ed) {
    var eP, eR, e4, hR, hU, eY;
    var gu = tt;
    var y6 = b2.ow.sF(gu, gu);
    var h1 = b2.ow.getContext(y6, true);
    var gx = b2.ow.getImageData(h1, gu, gu);
    var sQ = gx.data;
    var k8 = (gu >> 1) - 0.5;
    var k9 = Math.sqrt(k8 * k8);
    sQ.fill(255);
    for (eR = 0; eR < gu; eR++) {
      for (eP = 0; eP < gu; eP++) {
        hR = eP - k8;
        hU = eR - k8;
        e4 = (eR * gu + eP) * 4;
        eY = 255 * 2.8 * (k9 - Math.sqrt(hR * hR + hU * hU)) / k9;
        sQ[e4 + 2] = ed;
        sQ[e4 + 3] = eY > 255 ? 0 : eY;
      }
    }
    h1.putImageData(gx, 0, 0);
    return y6;
  }
  this.aOE = function(h1, dy, eP, eR, h3, z) {
    if (!b2.fd.gU(a1.e2)) {
      return;
    }
    dy *= (4 / 3) * (20 / 32);
    h3 *= (4 / 3);
    h1.setTransform(dy, 0, 0, dy, eP - h3, eR - h3);
    h1.drawImage(ts[+(bD.kt.aMM[z] === this.a0G)], 0, 0);
  }
  ;
}
function cI() {
  this.a2p = function() {
    if (aa.jO < 3) {
      return false;
    }
    if (aV.g6[kf[0]] >= (a1.j7 >> 1)) {
      return false;
    }
    if (a1.iN) {
      return aOF();
    } else {
      return aOG();
    }
  }
  ;
  function aOG() {
    var aOH = aT.aBw();
    if (2 * aV.gK[kf[0]] >= aOH) {
      return false;
    }
    return true;
  }
  function aOF() {
    var aOH = aT.aBw();
    var aOI = aT.aBx(bW.kd());
    if (2 * aOI >= aOH) {
      return false;
    }
    return true;
  }
}
function d9() {
  this.size = 501;
  this.w5 = new Uint32Array(this.size);
  this.yh = new Uint32Array(this.size);
  this.a5f = new Uint16Array(this.size);
  this.aIU = 0;
  this.aOJ = 1;
  this.ed = 0;
  this.max = [0, 0, 0];
  this.lE = 0;
  this.aOK = null;
  this.dI = function() {
    this.aOK = [L(325), L(326), L(327), L(328), L(329), L(330), L(331), L(332), L(333), L(334), L(335), L(336), L(337), L(338), L(339), L(340), L(341), L(342)];
  }
  ;
  this.dH = function() {
    this.aIU = 0;
    this.aOJ = 1;
    this.ed = 0;
    this.aOL();
    this.aOM();
  }
  ;
  this.oN = function(player, hf) {
    if (player !== a1.e2) {
      return;
    }
    this.lE[0] += hf;
    this.lE[1]++;
    this.lE[12] += bE.eq[1];
    this.lE[13] += bE.eq[0];
  }
  ;
  this.nn = function(player, nQ) {
    if (player === a1.e2) {
      aA.nn(bE.eq[0], bE.eq[1], nQ);
      this.lE[12] += bE.eq[1];
      this.lE[16] += bE.eq[0];
    }
    if (nQ === a1.e2) {
      aA.a1d(bE.eq[0], player);
      this.lE[10] += bE.eq[0];
    }
  }
  ;
  this.iC = function() {
    if (this.ed-- > 0) {
      return;
    }
    this.aON();
  }
  ;
  this.aON = function() {
    if (aV.lI[a1.e2] === 0) {
      return;
    }
    this.w5[this.aIU] = aV.g6[a1.e2];
    this.yh[this.aIU] = aV.gK[a1.e2];
    this.a5f[this.aIU] = aT.a5g(a1.e2);
    this.aOO(this.aIU);
    this.aIU++;
    if (this.aIU === this.size) {
      this.aOP();
    }
    this.ed = this.aOJ - 1;
    bT.l2();
  }
  ;
  this.aOP = function() {
    this.aOL();
    this.aOO(0);
    this.aIU = 1 + bB.ek(this.size, 2);
    for (var z = 1; z < this.aIU; z++) {
      this.w5[z] = this.w5[z * 2];
      this.yh[z] = this.yh[z * 2];
      this.a5f[z] = this.a5f[z * 2];
      this.aOO(z);
    }
    this.aOJ *= 2;
  }
  ;
  this.aOL = function() {
    this.max[0] = this.max[1] = this.max[2] = 0;
  }
  ;
  this.aOM = function() {
    this.lE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  ;
  this.aOO = function(z) {
    this.max[0] = this.w5[z] > this.max[0] ? this.w5[z] : this.max[0];
    this.max[1] = this.yh[z] > this.max[1] ? this.yh[z] : this.max[1];
    this.max[2] = this.a5f[z] > this.max[2] ? this.a5f[z] : this.max[2];
  }
  ;
}
function dA() {
  this.t = 0;
  this.ir = 0;
  this.q7 = 0;
  this.q8 = 0;
  this.aOQ = 0;
  this.aOR = 0;
  this.a32 = 0;
  this.a9K = 0;
  this.a95 = 0;
  this.aOS = 0;
  this.aOT = 0;
  this.aOU = 0;
  this.a2R = 0;
  this.o0 = 0;
  this.a5M = null;
  this.to = false;
  this.aOV = -1;
  this.aOW = false;
  this.aOX = [0, 0];
  this.dI = function() {
    this.a5M = [L(343), L(344), L(93), L(345)];
  }
  ;
  this.dH = function() {
    this.to = false;
    this.aOV = -1;
    this.aOW = false;
    this.resize();
  }
  ;
  this.resize = function() {
    var gz = 1.369;
    this.t = an.t < gz * an.ir ? an.t : (an.ir * gz);
    var eL = m.n.uE() && an.t < an.ir ? 1 : m.n.uE() ? 0.8 : an.t < an.ir ? 0.65 : 0.59;
    this.t = Math.floor(eL * this.t);
    this.t -= m.n.uE() && an.t < an.ir ? (2 * bR.gap + 2) : 0;
    this.ir = Math.floor(this.t / gz);
    this.a2R = Math.floor(this.ir / 150);
    this.a2R = Math.max(this.a2R, 1.5);
    this.q7 = Math.floor(1 + this.t * 0.02);
    this.q8 = Math.floor(1 + this.t * 0.04);
    this.a32 = this.q8;
    this.a9K = Math.floor(1 + this.t * 0.075);
    this.aOS = Math.floor(1 + this.t * 0.1125);
    this.aOT = Math.floor(this.t * (m.n.uE() ? 0.03 : 0.029));
    this.aOT = Math.max(this.aOT, 4);
    this.aOU = Math.floor(this.t * 0.035);
    this.aOU = Math.max(this.aOU, 4);
    this.a95 = this.ir - 2 * this.a32 - this.a9K - this.aOS;
    if (this.to) {
      this.aOY();
    }
  }
  ;
  this.gV = function(kU, kV) {
    if (!this.to) {
      return false;
    }
    var sr = kU;
    var ss = kV;
    kU -= bB.ek(an.t - this.t, 2);
    kV -= bB.ek(an.ir - this.ir, 2);
    if (kU < 0 || kV < 0 || kU >= this.t || kV >= this.ir || (kU >= this.t - this.aOS && kV < this.aOS)) {
      if (a9.gV(sr, ss) > 1) {
        return true;
      }
      this.qK();
      return true;
    }
    if (kV < this.aOS) {
      return true;
    }
    if (kV < this.ir - this.a9K) {
      this.aOW = true;
      this.aOV = (kU - 2 * this.q7 - this.aOQ) / this.aOR;
      if (this.o0 !== 3) {
        bU.dO = true;
      }
      return true;
    }
    var z = Math.floor(kU / (this.t / this.a5M.length));
    z = z < 0 ? 0 : z >= this.a5M.length ? this.a5M.length - 1 : z;
    if (z !== this.o0) {
      this.o0 = z;
      this.aOY();
      bU.dO = true;
    }
    return true;
  }
  ;
  this.xP = function() {
    var aOZ = Math.floor((this.aOX[0] + hg) / hh);
    var aOa = Math.floor((this.aOX[1] + hi) / hh);
    if (aOZ < 1 || aOa < 1 || aOZ >= bI.eT - 1 || aOa >= bI.eU - 1) {
      return;
    }
    console.log(aOZ + " " + aOa);
  }
  ;
  this.wq = function(kU, kV) {
    this.aOX[0] = kU;
    this.aOX[1] = kV;
    if (this.to && this.aOW) {
      kU -= bB.ek(an.t - this.t, 2);
      var dt = this.aOV;
      this.aOV = (kU - 2 * this.q7 - this.aOQ) / this.aOR;
      if ((this.aOV >= 0 && this.aOV <= 1) || (dt >= 0 && dt <= 1)) {
        bU.dO = true;
      }
      return true;
    }
    return false;
  }
  ;
  this.xG = function() {
    if (this.aOW) {
      this.aOW = false;
    }
  }
  ;
  this.xT = function() {
    if (this.to) {
      this.qK();
    } else {
      this.show();
    }
  }
  ;
  this.show = function() {
    if (bS.aIU < 2) {
      return;
    }
    this.to = true;
    this.aOY();
  }
  ;
  this.qK = function() {
    this.to = false;
    this.aOV = -1;
    bU.dO = true;
  }
  ;
  this.aOY = function() {
    if (this.o0 < 2) {
      this.aOQ = aD.measureText(b2.w0.z6(bS.max[this.o0]), b2.ow.q5(0, this.aOT));
    } else if (this.o0 === 2) {
      this.aOQ = aD.measureText(b2.w0.zB(6, 2), b2.ow.q5(0, this.aOT));
    }
    this.aOR = this.t - 2 * this.q7 - this.aOQ - this.q8;
  }
  ;
  this.l2 = function() {
    if (!this.to) {
      return;
    }
    this.aOY();
  }
  ;
  this.qn = function() {
    if (!this.to) {
      return;
    }
    this.a3J();
  }
  ;
  this.a3J = function() {
    var eP = bB.ek(an.t - this.t, 2);
    var eR = bB.ek(an.ir - this.ir, 2);
    qo.setTransform(1, 0, 0, 1, eP, eR);
    qo.fillStyle = p.mI;
    qo.fillRect(0, this.aOS, this.t, this.ir - this.aOS);
    this.aOb();
    this.aHt();
    qo.strokeRect(0, 0, this.t, this.ir);
    b2.ow.textAlign(qo, 2);
    qo.font = b2.ow.q5(0, this.aOT);
    if (this.o0 === 0) {
      this.aOc(bS.w5, eP, eR);
    } else if (this.o0 === 1) {
      this.aOc(bS.yh, eP, eR);
    } else if (this.o0 === 2) {
      this.aOd(eP, eR);
    } else if (this.o0 === 3) {
      this.aOe(eP, eR);
      this.aOf(eP, eR);
    }
    a9.a0g(Math.floor(eP + this.t - 0.725 * this.aOS), Math.floor(eR + 0.275 * this.aOS), Math.floor(0.45 * this.aOS));
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
  ;
  this.aOb = function() {
    var z, dt;
    qo.lineWidth = this.a2R;
    b2.ow.textBaseline(qo, 1);
    b2.ow.textAlign(qo, 1);
    qo.strokeStyle = p.mL;
    qo.font = b2.ow.q5(1, this.aOU);
    dt = this.t / this.a5M.length;
    qo.fillStyle = p.me;
    qo.fillRect(this.o0 * dt, this.ir - this.a9K, dt, this.a9K);
    qo.fillStyle = p.mL;
    qo.fillRect(0, this.ir - this.a9K - 0.5 * this.a2R, this.t, this.a2R);
    for (z = 1; z <= 3; z++) {
      qo.fillRect(z * dt, this.ir - this.a9K, this.a2R, this.a9K);
    }
    for (z = this.a5M.length - 1; z >= 0; z--) {
      qo.fillText(this.a5M[z], (z + 0.5) * dt, this.ir - 0.46 * this.a9K);
    }
  }
  ;
  this.aHt = function() {
    qo.fillStyle = p.mx;
    qo.fillRect(0, 0, this.t, this.aOS);
    qo.fillStyle = p.mL;
    qo.fillRect(0, this.aOS - 0.5 * this.a2R, this.t, this.a2R);
    qo.font = b2.ow.q5(1, 0.39 * this.aOS);
    qo.fillText(L(346), Math.floor(this.t / 2), Math.floor(0.55 * this.aOS));
  }
  ;
  this.aOc = function(ey, eP, eR) {
    var k8 = bS.max[this.o0];
    qo.setTransform(1, 0, 0, 1, eP + 2 * this.q7 + this.aOQ, eR + this.a32 + this.aOS);
    qo.lineWidth = 2;
    var xo = this.a95 / Math.sqrt(k8);
    qo.beginPath();
    qo.moveTo(this.aOR, this.a95 - xo * Math.sqrt(ey[bS.aIU - 1]));
    for (var z = bS.aIU - 2; z >= 0; z--) {
      qo.lineTo(z * this.aOR / (bS.aIU - 1), this.a95 - xo * Math.sqrt(ey[z]));
    }
    qo.stroke();
    var dy = this.a0g(ey, xo, 0.5);
    if (dy < 0.95) {
      qo.fillText(b2.w0.z6(k8), -this.q7, 0);
    }
    if (Math.abs(dy - 0.5) > 0.05) {
      qo.fillText(b2.w0.z6(Math.floor(k8 / 4)), -this.q7, Math.floor(this.a95 / 2));
    }
    if (dy > 0.05) {
      qo.fillText("0", -this.q7, this.a95);
    }
  }
  ;
  this.aOd = function(eP, eR) {
    qo.setTransform(1, 0, 0, 1, eP + 2 * this.q7 + this.aOQ, eR + this.a32 + this.aOS);
    qo.lineWidth = 2;
    var xo = this.a95 / Math.max(bS.max[this.o0], 1);
    qo.beginPath();
    qo.moveTo(this.aOR, this.a95 - xo * bS.a5f[bS.aIU - 1]);
    for (var z = bS.aIU - 2; z >= 0; z--) {
      qo.lineTo(z * this.aOR / (bS.aIU - 1), this.a95 - xo * bS.a5f[z]);
    }
    qo.stroke();
    var dy = this.a0g(bS.a5f, xo, 1);
    var k8 = bS.max[this.o0] / 100;
    if (dy < 0.95) {
      qo.fillText(b2.w0.zB(k8, 2), -this.q7, 0);
    }
    if (Math.abs(dy - 0.5) > 0.05) {
      qo.fillText(b2.w0.zB(k8 / 2, 2), -this.q7, Math.floor(this.a95 / 2));
    }
    if (dy > 0.05) {
      qo.fillText(b2.w0.zB(0, 2), -this.q7, this.a95);
    }
  }
  ;
  this.aOe = function(eP, eR) {
    var z;
    qo.setTransform(1, 0, 0, 1, eP + 0.34 * this.t, eR + 2 * this.a32 + this.aOS);
    b2.ow.textAlign(qo, 2);
    var a57 = this.ir - 4 * this.a32 - this.a9K - this.aOS;
    var eI = 8;
    for (z = eI - 1; z >= 0; z--) {
      qo.fillText(bS.aOK[z], 0, z * a57 / (eI - 1));
    }
    qo.setTransform(1, 0, 0, 1, eP + 0.39 * this.t, eR + 2 * this.a32 + this.aOS);
    b2.ow.textAlign(qo, 0);
    var dy = bS.lE[1];
    dy = dy < 1 ? 1 : dy;
    qo.fillText(b2.w0.zB(bS.lE[0] / (10 * dy), 1), 0, 0);
    for (z = eI - 2; z >= 1; z--) {
      qo.fillText(bS.lE[z].toString(), 0, z * a57 / (eI - 1));
    }
    qo.fillText(b2.w0.zB(100 * (1 - aV.g6[a1.e2] / bS.lE[7]), 0), 0, a57);
  }
  ;
  this.aOf = function(eP, eR) {
    var z;
    qo.setTransform(1, 0, 0, 1, eP + 0.79 * this.t, eR + 2 * this.a32 + this.aOS);
    b2.ow.textAlign(qo, 2);
    var a57 = this.ir - 4 * this.a32 - this.a9K - this.aOS;
    var eI = 10;
    qo.fillStyle = p.mZ;
    for (z = 2; z >= 0; z--) {
      qo.fillText(bS.aOK[z + 8], 0, z * a57 / (eI - 1));
    }
    qo.fillStyle = p.mY;
    qo.fillText(bS.aOK[3 + 8], 0, 3 * a57 / (eI - 1));
    qo.fillStyle = p.mo;
    for (z = 8; z >= 4; z--) {
      qo.fillText(bS.aOK[z + 8], 0, z * a57 / (eI - 1));
    }
    qo.fillStyle = p.mn;
    qo.fillText(bS.aOK[17], 0, 9 * a57 / (eI - 1));
    qo.fillStyle = p.mZ;
    var a1M = b2.w0.z6(bS.lE[8] + bS.lE[9] + bS.lE[10] + bS.lE[11]);
    var aH6 = qo.measureText(a1M).width;
    qo.setTransform(1, 0, 0, 1, eP + 0.83 * this.t + aH6, eR + 2 * this.a32 + this.aOS);
    qo.fillText(b2.w0.z6(bS.lE[8]), 0, 0);
    qo.fillText(b2.w0.z6(bS.lE[9]), 0, 1 * a57 / (eI - 1));
    qo.fillText(b2.w0.z6(bS.lE[10]), 0, 2 * a57 / (eI - 1));
    qo.fillStyle = p.mY;
    qo.fillText(a1M, 0, 3 * a57 / (eI - 1));
    qo.fillStyle = p.mo;
    var aOg = bS.lE[13] - aS.aBg(a1.e2);
    qo.fillText(b2.w0.z6(bS.lE[12]), 0, 4 * a57 / (eI - 1));
    qo.fillText(b2.w0.z6(aOg), 0, 5 * a57 / (eI - 1));
    qo.fillText(b2.w0.z6(bS.lE[14]), 0, 6 * a57 / (eI - 1));
    qo.fillText(b2.w0.z6(bS.lE[15]), 0, 7 * a57 / (eI - 1));
    qo.fillText(b2.w0.z6(bS.lE[16]), 0, 8 * a57 / (eI - 1));
    var aOh = bS.lE[12] + aOg + bS.lE[14] + bS.lE[15] + bS.lE[16] + bS.lE[17];
    qo.fillStyle = p.mn;
    qo.fillText(b2.w0.z6(aOh), 0, a57);
    qo.fillStyle = p.mL;
  }
  ;
  this.a0g = function(ey, xo, a3t) {
    if (this.aOV < 0 || this.aOV > 1) {
      return 0.25;
    }
    var z = this.aOV * (bS.aIU - 1);
    var d = Math.floor(z);
    var ez = ey[d];
    var f1 = ey[d < bS.aIU - 1 ? d + 1 : d];
    ez = ez + (z - d) * (f1 - ez);
    qo.strokeStyle = p.mO;
    if (this.aOV > 0.04) {
      this.aOi(0, this.a95 - xo * Math.pow(ez, a3t), z * this.aOR / (bS.aIU - 1), this.a95 - xo * Math.pow(ez, a3t));
    }
    if (ez / bS.max[this.o0] > 0.04) {
      this.aOi(z * this.aOR / (bS.aIU - 1), this.a95, z * this.aOR / (bS.aIU - 1), this.a95 - xo * Math.pow(ez, a3t));
    }
    qo.fillStyle = p.mq;
    qo.beginPath();
    qo.arc(z * this.aOR / (bS.aIU - 1), this.a95 - xo * Math.pow(ez, a3t), Math.max(2, 0.014 * this.ir), 0, 2 * Math.PI);
    qo.fill();
    var ds = this.aOV * bU.a5h;
    if (aV.lI[a1.e2] === 0) {
      ds = Math.floor(ds * aK.a5o);
    } else {
      ds = Math.floor(ds * bU.jK());
    }
    qo.fillStyle = p.mL;
    qo.fillText(a3t === 1 ? b2.w0.zB(ez / 100, 2) : b2.w0.z6(Math.floor(ez)), -this.q7, this.a95 - xo * Math.pow(ez, a3t));
    b2.ow.textAlign(qo, 1);
    qo.fillText(aJ.a4T(ds), z * this.aOR / (bS.aIU - 1), this.a95 + this.aOT - (m.n.uE() ? 2 : 0) - this.a2R);
    b2.ow.textAlign(qo, 2);
    return xo * Math.pow(ez, a3t) / this.a95;
  }
  ;
  this.aOi = function(lk, ll, ly, lz) {
    qo.beginPath();
    qo.moveTo(lk, ll);
    qo.lineTo(ly, lz);
    qo.stroke();
  }
  ;
}
function bg() {
  this.aOj = "https://";
  this.aOk = this.aOj + "territorial.io/";
  this.aIV = this.aOk + "changelog";
  this.aIZ = this.aOk + "terms";
  this.aOl = this.aOk + "cookie_policy";
  this.aIB = this.aOk + "privacy";
  this.aIY = this.aOk + "tutorial";
  this.aIX = this.aOk + "players";
  this.aIW = this.aOk + "clans";
  this.w7 = this.aOk + "clan-results";
  this.a6r = this.aOj + "play.google.com/store/apps/details?id=territorial.io";
  this.wP = this.aOj + "apps.apple.com/app/id1581110913";
  this.aOm = this.aOj + "www.youtube.com/watch?v=toZTQ8aRdFc";
  this.a6s = this.aOj + "discord.gg/pthqvpTXmh";
  this.a6t = this.aOj + "www.instagram.com/davidtschacher/";
  this.u7 = "🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼";
}
function cs() {
  this.kt = new aOn();
  this.tR = new aOo();
  this.dH = function() {
    this.kt.dH();
  }
  ;
  this.iC = function() {
    if (this.kt.a1m === 0) {
      return;
    }
    this.kt.a1m--;
  }
  ;
}
function aOo() {
  this.qn = function() {
    if (bF.kt.a1m === 0) {
      return;
    }
    aOp();
    if (a1.gd) {
      aOq();
    }
  }
  ;
  function aOp() {
    qo.globalAlpha = Math.min(bF.kt.a1m / 580, 1);
    qo.drawImage(bF.kt.aOr, 1 + aF.tP(), 1 + aF.tQ());
    qo.globalAlpha = 1;
  }
  function aOq() {
    var lk = hg / hh;
    var ll = hi / hh;
    var ly = (an.t + hg) / hh;
    var lz = (an.ir + hi) / hh;
    var fp = bF.kt.aOs * hh;
    var aOt = bF.kt.aOt;
    for (var z = a1.jN - 1; z >= 0; z--) {
      aOu(z, fp, lk, ll, ly, lz, aOt);
    }
    qo.setTransform(hh, 0, 0, hh, 0, 0);
  }
  function aOu(z, fp, lk, ll, ly, lz, aOt) {
    if (aV.lI[z] === 0 || aV.g6[z] === 0) {
      return;
    }
    var eP = an.t * ((aV.ht[z] + aV.hu[z] + 1) / 2 - lk) / (ly - lk) - 0.5 * fp;
    var eR = an.ir * ((aV.hv[z] + aV.hw[z] + 1) / 2 - ll) / (lz - ll) - 0.5 * fp;
    if (eP > an.t || eR > an.ir || eP < -fp || eR < -fp) {
      return;
    }
    qo.setTransform(hh, 0, 0, hh, eP, eR);
    qo.drawImage(aOt[a1.iN ? bV.eG[z] : 1], 0, 0);
  }
}
function aOn() {
  this.aOs = 28;
  this.a1m = 0;
  this.aOr = null;
  this.aOt = null;
  var aOv = null;
  this.dH = function() {
    this.a1m = 700;
    aOw(this);
    a6p(this, aOx(this));
    if (!a1.gd) {
      this.zP();
    }
  }
  ;
  function aOx(vh) {
    if (vh.aOr !== null && vh.aOr.width === bI.eT - 2 && vh.aOr.height === bI.eU - 2) {
      return true;
    }
    vh.aOr = b2.ow.sF(bI.eT - 2, bI.eU - 2);
    return false;
  }
  function aOw(vh) {
    var gu = vh.aOs;
    vh.aOt = [];
    aOv = [];
    if (a1.iN) {
      for (var z = 0; z <= a1.zU; z++) {
        vh.aOt.push(aOy(gu, bV.aN9[bV.vU[z]]));
        aOv.push(aOy(gu >> 1, bV.aN9[bV.vU[z]]));
      }
    } else {
      vh.aOt.push(aOy(gu, bV.aN9[0]));
      vh.aOt.push(aOy(gu, bV.aN9[4]));
      aOv.push(aOy(gu >> 1, bV.aN9[0]));
    }
  }
  this.aN8 = function(gu, aOz) {
    return aOy(gu, aOz);
  }
  ;
  function aOy(gu, aOz) {
    var eP, eR, e4, hR, hU, eY;
    var y6 = b2.ow.sF(gu, gu);
    var h1 = b2.ow.getContext(y6, true);
    var gx = b2.ow.getImageData(h1, gu, gu);
    var sQ = gx.data;
    var k8 = (gu >> 1) - 0.5;
    var aP0 = (k8 + 0.5);
    aP0 *= aP0;
    for (eR = 0; eR < gu; eR++) {
      for (eP = 0; eP < gu; eP++) {
        hR = eP - k8;
        hU = eR - k8;
        e4 = (eR * gu + eP) * 4;
        eY = hR * hR + hU * hU;
        sQ[e4] = aOz[0];
        sQ[e4 + 1] = aOz[1];
        sQ[e4 + 2] = aOz[2];
        sQ[e4 + 3] = (aP0 - eY) * aOz[3] / aP0;
      }
    }
    h1.putImageData(gx, 0, 0);
    return y6;
  }
  function a6p(vh, aP1) {
    var z;
    var aOr = vh.aOr;
    var h1 = b2.ow.getContext(aOr, true);
    var eI = a1.eF;
    var gu = vh.aOs >> 1;
    h1.imageSmoothingEnabled = false;
    h1.setTransform(1, 0, 0, 1, 0, 0);
    if (aP1) {
      h1.clearRect(0, 0, aOr.width, aOr.height);
    }
    for (z = a1.jN; z < eI; z++) {
      aOE(z, h1, aOv, gu);
    }
  }
  this.zP = function() {
    var eI = a1.jN;
    var gu = this.aOs;
    var aOt = this.aOt;
    var h1 = b2.ow.getContext(this.aOr, true);
    for (var z = 0; z < eI; z++) {
      aOE(z, h1, aOt, gu);
    }
  }
  ;
  function aOE(z, h1, y6, gu) {
    if (aV.lI[z] === 0 || aV.g6[z] === 0) {
      return;
    }
    var eP = (aV.ht[z] + aV.hu[z] + 1 - gu - 2) >> 1;
    var eR = (aV.hv[z] + aV.hw[z] + 1 - gu - 2) >> 1;
    h1.drawImage(y6[a1.iN ? bV.eG[z] : (z < a1.jN ? 1 : 0)], eP, eR);
  }
}
function ct() {
  this.ng = function(player) {
    if (!a9.a0f(player)) {
      return false;
    }
    aA.vL(player, (player === a1.e2 ? 21 : 22));
    aP2(player);
    return true;
  }
  ;
  this.oE = function(player) {
    // a1.v9 is client status, aV.lI is isAlive, aV.yb is playerStatus
    if (a1.v9 === 1 && aV.lI[player] !== 0 && aV.yb[player] !== 2) {
      aP2(player);
    }
    a1.vC--;
    a1.vB--;
    aA.vL(player, 4);
    if (b2.fd.gT(2)) {
      aJ.l1(true);
    }
  }
  ;
  function aP2(player) {
    if (a1.gd) {
      aZ.aAc(player);
      aa.aDS();
      if (a1.jn) {
        a1.oH.iC();
      }
    } else {
      au.aDQ(player);
    }
  }
}
function d3() {
  this.a8a = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"];
  this.a55 = [p.mL, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", p.mL, "rgb(170,170,170)"];
  this.aP3 = [p.mL, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", p.mL, p.mC];
  this.aP4 = [p.mC, p.mL, p.mL, p.mL, p.mC, p.mC, p.mC, p.mC, p.mL];
  var aP5 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
  this.aCz = ["rgba(" + aP5[0] + ",", "rgba(" + aP5[1] + ",", "rgba(" + aP5[2] + ",", "rgba(" + aP5[3] + ",", "rgba(" + aP5[4] + ",", "rgba(" + aP5[5] + ",", "rgba(" + aP5[6] + ",", "rgba(" + aP5[7] + ",", "rgba(" + aP5[8] + ",", "rgba(" + aP5[9] + ","];
  this.aD0 = ["rgb(" + aP5[0] + ")", "rgb(" + aP5[1] + ")", "rgb(" + aP5[2] + ")", "rgb(" + aP5[3] + ")", "rgb(" + aP5[4] + ")", "rgb(" + aP5[5] + ")", "rgb(" + aP5[6] + ")", "rgb(" + aP5[7] + ")", "rgb(" + aP5[8] + ")", "rgb(" + aP5[9] + ")"];
  this.vW = null;
  this.aN9 = [[255, 255, 255, 180], [255, 0, 0, 180], [0, 255, 0, 180], [50, 50, 255, 180], [255, 255, 0, 180], [255, 0, 255, 180], [0, 255, 255, 180], [255, 255, 255, 180], [0, 0, 0, 180]];
  var aP6 = [[255, 255, 255], [255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [255, 0, 255], [0, 255, 255], [255, 255, 255], [0, 0, 0]];
  this.vU = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.eG = new Uint8Array(a1.eF);
  this.vw = null;
  this.aP7 = null;
  this.dI = function() {
    this.vW = [L(347), L(348), L(349), L(350), L(351), L(352), L(353), L(347), L(354)];
  }
  ;
  this.dH = function(tb) {
    this.eG.fill(0);
    this.aP8();
    if (a1.iN) {
      if (ay.jh && ay.ji.aBM) {
        this.a9w();
        return;
      }
      if (a1.jl === 9) {
        this.aP9();
      } else {
        this.iC(tb);
      }
    }
  }
  ;
  this.a9w = function() {
    var z;
    var eI = a1.st;
    this.vU = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (z = 0; z < eI; z++) {
      this.eG[z] = ay.ji.aBM[z];
    }
  }
  ;
  this.aP8 = function() {
    for (var z = this.vU.length - 1; z >= 0; z--) {
      this.vU[z] = z;
    }
    this.vw = [];
    this.aP7 = [];
  }
  ;
  this.aP9 = function() {
    var z;
    for (z = a1.jN + ap.aDI - 1; z >= 0; z--) {
      this.eG[z] = 1;
    }
    for (z = a1.jN + ap.aDI; z < a1.eF; z++) {
      this.eG[z] = 2;
    }
    this.vU[1] = 7;
    this.vU[2] = 8;
  }
  ;
  this.iC = function(tb) {
    var hA = new Uint8Array(a1.jN);
    var hB = new Uint8Array(a1.jN);
    var aPA = new Uint16Array(8);
    var aPB = new Uint16Array(this.vU.length);
    this.aPC(tb, hA, hB, aPA);
    this.a9u(aPA);
    if (!a1.jn) {
      this.aPD(aPB, hA, hB);
    }
    this.aPE(hA, hB, aPB);
    if (a1.jn) {
      this.aPF();
    } else {
      this.aPG();
    }
  }
  ;
  this.aPC = function(tb, hA, hB, aPH) {
    var z, ec, d, aPI;
    var eI = this.vU.length - 1;
    var ey = new Uint16Array(eI);
    for (z = a1.jN - 1; z >= 0; z--) {
      for (ec = eI; ec >= 1; ec--) {
        ey[ec - 1] = Math.abs(4 * tb[z].a9G[0] - aP6[ec][0]) + Math.abs(4 * tb[z].a9G[1] - aP6[ec][1]) + Math.abs(4 * tb[z].a9G[2] - aP6[ec][2]);
      }
      aPI = 768;
      for (ec = eI - 1; ec >= 0; ec--) {
        d = (ec + z) % eI;
        if (ey[d] < aPI) {
          aPI = ey[d];
          hA[z] = d;
        }
      }
      aPH[hA[z]] += 4;
      aPI = 768;
      for (ec = eI - 1; ec >= 0; ec--) {
        d = (ec + z) % eI;
        if (ey[d] < aPI && d !== hA[z]) {
          aPI = ey[d];
          hB[z] = d;
        }
      }
      aPH[hB[z]]++;
    }
  }
  ;
  this.a9u = function(aPH) {
    var z, ec, kA;
    var eI = this.vU.length - 1;
    for (z = eI; z >= 0; z--) {
      this.vU[z] = z;
    }
    for (z = eI - 1; z >= 0; z--) {
      aPH[z]++;
    }
    for (z = 1; z <= eI; z++) {
      kA = 0;
      for (ec = 1; ec < eI; ec++) {
        if (aPH[ec] > aPH[kA]) {
          kA = ec;
        }
      }
      aPH[kA] = 0;
      this.vU[z] = kA + 1;
    }
  }
  ;
  this.aPD = function(aPB, hA, hB) {
    var z, ec, aK1, ed, eL, d, lw, qL;
    var aPJ = this.vU.length - 1;
    var pL = new Uint16Array(aPJ);
    var aPK = [];
    var a32 = Math.max((a1.jN + 1) >> 1, 6);
    loop: for (z = 0; z < a1.jN; z++) {
      aK1 = b2.w0.w1(aV.w2[z]);
      if (aK1 !== null) {
        for (ec = this.vw.length - 1; ec >= 0; ec--) {
          if (aK1 === this.vw[ec] && this.aP7[ec].length < a32) {
            this.aP7[ec].push(z);
            continue loop;
          }
        }
        this.vw.push(aK1);
        aPK.push(false);
        this.aP7.push([z]);
      }
    }
    for (ec = this.vw.length - 1; ec >= 0; ec--) {
      eL = -1;
      for (ed = this.vw.length - 1; ed >= 0; ed--) {
        if (!aPK[ed] && (eL === -1 || this.aP7[ed].length > this.aP7[eL].length)) {
          eL = ed;
        }
      }
      for (ed = aPJ - 1; ed >= 0; ed--) {
        pL[ed] = 1;
      }
      for (ed = this.aP7[eL].length - 1; ed >= 0; ed--) {
        pL[hA[this.aP7[eL][ed]]] += 3;
        pL[hB[this.aP7[eL][ed]]]++;
      }
      for (z = aPJ - 1; z >= 0; z--) {
        d = eL % aPJ;
        for (ed = aPJ - 1; ed >= 0; ed--) {
          if (pL[ed] > pL[d]) {
            d = ed;
          }
        }
        lw = -1;
        for (ed = a1.zU; ed > 0; ed--) {
          if (this.vU[ed] === d + 1) {
            lw = ed;
            break;
          }
        }
        pL[d] = 0;
        if (lw === -1) {
          continue;
        }
        qL = 0;
        for (ed = a1.zU; ed > 0; ed--) {
          if (aPB[lw] > aPB[ed]) {
            qL++;
          }
        }
        if (qL === a1.zU - 1) {
          continue;
        }
        for (ed = this.aP7[eL].length - 1; ed >= 0; ed--) {
          aPB[lw]++;
          this.eG[this.aP7[eL][ed]] = lw;
        }
        break;
      }
      aPK[eL] = true;
    }
  }
  ;
  this.aPE = function(hA, hB, aPB) {
    var z, ec, hQ;
    var eI = this.vU.length - 1;
    var border = bB.ek(a1.jN, a1.zU);
    if (a1.jN % a1.zU > 0) {
      border++;
    }
    var aPL = new Uint8Array(eI + 1);
    for (ec = eI; ec >= 1; ec--) {
      aPL[this.vU[ec]] = ec;
    }
    for (z = 0; z < a1.jN; z++) {
      hQ = aPL[hA[z] + 1];
      if (this.eG[z] === 0 && hQ <= a1.zU && aPB[hQ] < border) {
        aPB[hQ]++;
        this.eG[z] = hQ;
      }
    }
    for (z = 0; z < a1.jN; z++) {
      hQ = aPL[hB[z] + 1];
      if (this.eG[z] === 0 && hQ <= a1.zU && aPB[hQ] < border) {
        aPB[hQ]++;
        this.eG[z] = hQ;
      }
    }
    for (ec = a1.zU; ec >= 1; ec--) {
      for (z = a1.jN - 1; z >= 0; z--) {
        if (aPB[ec] >= border) {
          break;
        }
        if (this.eG[z] === 0) {
          aPB[ec]++;
          this.eG[z] = ec;
        }
      }
    }
  }
  ;
  this.aPF = function() {
    var z, eb;
    var aPH = new Uint16Array(a1.zU);
    aPH[a1.zU - 1] = a1.eF;
    for (z = a1.zU - 2; z >= 0; z--) {
      aPH[z] = aO.jp[z].fj;
    }
    aPH[0]--;
    eb = aPH[0] === 0 ? 1 : 0;
    for (z = a1.jN; z < a1.eF; z++) {
      this.eG[z] = eb + 1;
      aPH[eb]--;
      if (aPH[eb] <= 0) {
        eb++;
      }
    }
  }
  ;
  this.aPG = function() {
    for (var z = a1.jN; z < a1.eF; z++) {
      this.eG[z] = 1 + z % a1.zU;
    }
  }
  ;
}
function g7() {
  var z, eP, eR;
  for (z = fC - 1; z >= 0; z--) {
    eP = bB.ek(fE[z], 4) % bI.eT;
    eR = bB.ek(fE[z], 4 * bI.eT);
    aV.ht[f7] = aV.ht[f7] > eP ? eP : aV.ht[f7];
    aV.hv[f7] = aV.hv[f7] > eR ? eR : aV.hv[f7];
    aV.hu[f7] = aV.hu[f7] < eP ? eP : aV.hu[f7];
    aV.hw[f7] = aV.hw[f7] < eR ? eR : aV.hw[f7];
  }
}
function fR() {
  var eI = aV.fi[f7].length;
  var eL, fo, z;
  var eK = aQ.eK;
  loop: for (z = eI - 1; z >= 0; z--) {
    for (eL = 3; eL >= 0; eL--) {
      fo = aV.fi[f7][z] + eK[eL];
      if (aQ.e9(fo) || (aQ.fq(fo) && aQ.eA(fo) !== f7)) {
        aQ.iX(aV.fi[f7][z], f7);
        continue loop;
      }
    }
    aV.fi[f7][z] = aV.fi[f7][eI - 1];
    aV.fi[f7].pop();
    eI--;
  }
}
function fS() {
  var player = f7;
  var fw = aV.fw;
  var fx = aV.fx;
  var ei = aV.ei;
  var eI = fw[player].length;
  var eK = aQ.eK;
  loop: for (var z = eI - 1; z >= 0; z--) {
    var aPM = false;
    var aPN = false;
    for (var eL = 3; eL >= 0; eL--) {
      var fo = fw[player][z] + eK[eL];
      if (aQ.aA6(fo, player)) {
        continue loop;
      }
      aPM = aPM || aQ.gk(fo);
      aPN = aPN || aQ.aA5(fo);
    }
    if (aPM) {
      fx[player].push(fw[player][z]);
    } else if (aPN) {
      ei[player].push(fw[player][z]);
    } else {
      aQ.tC(fw[player][z], player);
    }
    fw[player][z] = fw[player][eI - 1];
    fw[player].pop();
    eI--;
  }
}
function fu() {
  aV.g6[fB] -= fC;
}
function fv(border) {
  var eI = border.length;
  for (var z = eI - 1; z >= 0; z--) {
    if (!aQ.tK(fB, border[z])) {
      border[z] = border[eI - 1];
      border.pop();
      eI--;
    }
  }
}
function g0(border) {
  var eI = border.length;
  for (var z = eI - 1; z >= 0; z--) {
    if (!aQ.tK(fB, border[z]) && aQ.eD(border[z])) {
      border[z] = border[eI - 1];
      border.pop();
      eI--;
    }
  }
}
function g1(border) {
  var eI = border.length;
  var eK = aQ.eK;
  var eL, fo;
  for (var z = eI - 1; z >= 0; z--) {
    for (eL = 3; eL >= 0; eL--) {
      fo = border[z] + eK[eL];
      if (aQ.aA6(fo, fB)) {
        aV.fw[fB].push(border[z]);
        border[z] = border[eI - 1];
        border.pop();
        eI--;
        break;
      }
    }
  }
}
function g2() {
  var eL, fo;
  var eK = aQ.eK;
  for (var z = fC - 1; z >= 0; z--) {
    for (eL = 3; eL >= 0; eL--) {
      fo = fE[z] + eK[eL];
      if (aQ.aA7(fB, fo) && aQ.aA8(fo)) {
        aV.fw[fB].push(fo);
        aQ.fl(fo, fB);
      }
    }
  }
}
function g3() {
  var eP, eR;
  loop: while (aV.hv[fB] < aV.hw[fB]) {
    for (eP = aV.hu[fB]; eP >= aV.ht[fB]; eP--) {
      if (aQ.tK(fB, (aV.hv[fB] * bI.eT + eP) * 4)) {
        break loop;
      }
    }
    aV.hv[fB]++;
  }
  loop: while (aV.hv[fB] < aV.hw[fB]) {
    for (eP = aV.hu[fB]; eP >= aV.ht[fB]; eP--) {
      if (aQ.tK(fB, (aV.hw[fB] * bI.eT + eP) * 4)) {
        break loop;
      }
    }
    aV.hw[fB]--;
  }
  loop: while (aV.ht[fB] < aV.hu[fB]) {
    for (eR = aV.hw[fB]; eR >= aV.hv[fB]; eR--) {
      if (aQ.tK(fB, (eR * bI.eT + aV.ht[fB]) * 4)) {
        break loop;
      }
    }
    aV.ht[fB]++;
  }
  loop: while (aV.ht[fB] < aV.hu[fB]) {
    for (eR = aV.hw[fB]; eR >= aV.hv[fB]; eR--) {
      if (aQ.tK(fB, (eR * bI.eT + aV.hu[fB]) * 4)) {
        break loop;
      }
    }
    aV.hu[fB]--;
  }
}
function eB(player, iT) {
  return (bV.eG[player] === 0 || bV.eG[player] !== bV.eG[iT]);
}
function gq(player, iT) {
  var z, d;
  var aPO = aS.fN(player);
  for (z = 0; z < aPO; z++) {
    if (aS.fO(player, z) !== 0) {
      continue;
    }
    d = aS.fT(player, z);
    if (d === a1.eF) {
      if (iT === a1.eF) {
        return false;
      }
      if (go(iT)) {
        return true;
      }
    } else {
      if (!b2.fd.kD(d)) {
        continue;
      }
      if (iT === a1.eF) {
        if (go(d)) {
          return true;
        }
      } else if (gs(iT, d)) {
        return true;
      }
    }
  }
  return false;
}
function go(player) {
  var eL, z, fp;
  var eI = aV.fw[player].length;
  var eK = aQ.eK;
  for (eL = 3; eL >= 0; eL--) {
    fp = eK[eL];
    for (z = 0; z < eI; z++) {
      if (aQ.e9(aV.fw[player][z] + fp)) {
        return true;
      }
    }
  }
  return false;
}
function aAY(player) {
  var eL, z, fp;
  var eI = aV.fw[player].length;
  var eK = aQ.eK;
  for (eL = 3; eL >= 0; eL--) {
    fp = eK[eL];
    for (z = 0; z < eI; z++) {
      if (aQ.iW(aV.fw[player][z]) && aQ.e9(aV.fw[player][z] + fp)) {
        return true;
      }
    }
  }
  return false;
}
function gs(yd, ye) {
  var z, dt, eL, fp, fo;
  var aNJ = aV.fw[yd].length;
  var aNK = aV.fw[ye].length;
  if (aNK < aNJ) {
    dt = yd;
    yd = ye;
    ye = dt;
    dt = aNJ;
    aNJ = aNK;
    aNK = dt;
  }
  var eK = aQ.eK;
  for (eL = 3; eL >= 0; eL--) {
    fp = eK[eL];
    for (z = 0; z < aNJ; z++) {
      fo = aV.fw[yd][z] + fp;
      if (aQ.fq(fo) && aQ.eA(fo) === ye) {
        return true;
      }
    }
  }
  return false;
}
function aAZ(yd, ye) {
  var z, eL, fp, fo;
  var aNJ = aV.fw[yd].length;
  var eK = aQ.eK;
  for (eL = 3; eL >= 0; eL--) {
    fp = eK[eL];
    for (z = 0; z < aNJ; z++) {
      if (aQ.iW(aV.fw[yd][z])) {
        fo = aV.fw[yd][z] + fp;
        if (aQ.fq(fo) && aQ.eA(fo) === ye) {
          return true;
        }
      }
    }
  }
  return false;
}
function aPP() {
  this.iC = function() {
    aB.iC();
    aM.iC();
    an.iC();
    aq.kt.iC();
    am.a85();
    if (bU.dO) {
      bU.dO = false;
      aN.qn();
    }
  }
  ;
}
function aPQ() {
  this.ds = bU.ds;
  this.o0 = 0;
  this.aPR = 0;
  this.a80 = 0;
  this.aPS = null;
  this.aPT = 7;
  this.a1n = 0;
  this.dH = function() {
    this.a80 = 0;
    this.aPS = [];
    this.o0 = 0;
    this.aPR = 0;
  }
  ;
  this.aJj = function(a0) { // Decoder
    // a0 is the message
    var z;
    if (a1.gd) {
      this.a5i(a0);
      return;
    }
    this.aPS.push(a0);
    if (a1.v9 === 2) {
      for (z = 0; z < this.aPS.length; z++) {
        b0.nJ.iC(this.aPS[z]);
      }
      this.aPS = [];
      return;
    }
  }
  ;
  this.a5i = function(a0) {
    b0.nJ.iC(a0);
    b1.iC();
    aJ.a5i(this.a80);
    if (this.a80 === a1.zV) { // From spawn to game
      a1.oH.iC();
      this.a80 = 0;
      this.o0 = 0;
      this.aPR = 0;
      this.ds = bU.ds;
      return;
    }
    this.a80++;
    aU.zO();
    aU.l1(true);
    bQ.a6F();
  }
  ;
  this.iC = function() {
    an.iC();
    if (a1.gd) {
      bU.dO = aJ.a5i(-1) || bU.dO;
      l3();
    } else {
      if (this.o0 === 0) {
        if (bU.ds >= this.ds) {
          this.ds += bU.a5h * Math.floor(1 + (bU.ds - this.ds) / bU.a5h);
          if (a1.v9 === 2) {
            kr();
          } else {
            this.aPU();
          }
          this.o0++;
          if (bU.ds - this.a1n > 27) {
            this.aPV();
          }
        }
      } else {
        this.aPV();
      }
    }
    ky();
    if (bU.dO) {
      bU.dO = false;
      tN();
    }
    this.a1n = bU.ds;
  }
  ;
  this.aPV = function() {
    bU.dO = true;
    l0();
    this.o0 = 0;
  }
  ;
  this.aPU = function() {
    var rK, z;
    if (this.aPR !== this.a80 * 7) {
      ku();
      bQ.a6F();
      return;
    }
    rK = false;
    loop: while (this.aPW()) {
      rK = true;
      ku();
      if (a1.v9 === 2) {
        break;
      }
      if (this.aPS.length > 0) {
        for (z = this.aPT - 2; z >= 0; z--) {
          ku();
          if (a1.v9 === 2) {
            break loop;
          }
        }
      } else {
        break;
      }
    }
    if (rK) {
      bQ.a6F();
    } else {
      kr();
      bQ.zR();
    }
  }
  ;
  this.aPW = function() {
    if (this.aPS.length > 0) {
      this.a80++;
      b0.nJ.iC(this.aPS[0]);
      this.aPS.shift();
      return true;
    }
    return false;
  }
  ;
}
function aPX() {
  var aPY;
  var aPZ;
  var aPa;
  var a80;
  var aPb;
  var o0 = 0;
  var ds = bU.ds;
  this.aPR = 0;
  this.dH = function() {
    aPY = 0;
    aPZ = 0;
    aPa = 0;
    a80 = 0;
    aPb = 0;
  }
  ;
  this.iC = function() {
    an.iC();
    if (b3.a3E() < 1.7) {
      aPc();
    } else {
      aPd();
    }
    ky();
    if (bU.dO) {
      bU.dO = false;
      tN();
    }
  }
  ;
  function aPc() {
    var aNg;
    if (o0 === 0) {
      if (bU.ds >= ds) {
        aNg = bU.a5h / b3.a3E();
        ds += aNg * Math.floor(1 + (bU.ds - ds) / aNg);
        if (a1.v9 === 2 || a9.gS || !b3.zq) {
          kr();
        } else {
          aPe();
          bQ.a6F();
        }
        o0++;
      }
    } else {
      aPf();
    }
  }
  function aPd() {
    var aNg;
    if (bU.ds >= ds) {
      if (a1.v9 === 2 || a9.gS || !b3.zq) {
        kr();
        ds = bU.ds;
      } else {
        aNg = bU.a5h / b3.a3E();
        if ((bU.ds - ds) / aNg > 16) {
          ds = bU.ds - 16 * aNg;
        }
        while (bU.ds >= ds && a1.v9 !== 2) {
          ds += aNg;
          aPe();
        }
        bQ.a6F();
      }
    }
    aPf();
  }
  function aPe() {
    if (aPg()) {
      return;
    }
    if (!aPh()) {
      return;
    }
    ku();
  }
  function aPg() {
    if (!a1.gd) {
      return 0;
    }
    if (a1.jn) {
      return 0;
    }
    if (aPb % 7 !== 0) {
      aPb++;
      return 1;
    }
    if (a80 === a1.zV) {
      if (!aPh()) {
        return 0;
      }
      aJ.a5i(a80);
      a1.oH.iC();
      return 1;
    }
    if (!aPh()) {
      return 0;
    }
    aPb++;
    a80++;
    aU.zO();
    aU.l1(true);
    return 1;
  }
  function aPf() {
    o0 = 0;
    if (a1.gd) {
      bU.dO = aJ.a5i((a80 - (aPb % 7 === 0 ? 0 : 1)) + (aPb % 7) / 7) || bU.dO;
      l3();
      return;
    }
    if (a9.gS || !b3.zq) {
      l3();
    } else {
      bU.dO = true;
      l0();
    }
  }
  function aPh() {
    var z, eI, k8;
    var aPi = b1.oF.aKn;
    var ez = b1.oF.aKo;
    var f1 = b1.oF.aKp;
    var f3 = b1.oF.aKq;
    var aPj = b1.oF.aKr;
    var aPk = b1.oF.aKs;
    if (aPY >= aPk.length) {
      aA.wY("Replay file smaller than expected.");
      b3.xU(false);
      a1.v9 = 2;
      return false;
    }
    k8 = aPk[aPY];
    if (!aPj[aPY]) {
      if (++aPa >= k8) {
        aPY++;
        aPa = 0;
      }
      return true;
    }
    eI = aPZ + k8;
    for (z = aPZ; z < eI; z++) {
      b0.nJ.o2(aPi[z], ez[z], f1[z], f3[z]);
    }
    aPZ += k8;
    aPY++;
    return true;
  }
  this.vJ = function() {
    if (aPY === b1.oF.aKs.length || aPY + 1 === b1.oF.aKs.length) {
      return;
    }
    aA.wY("Replay file larger than expected.");
  }
  ;
}
function aPl() {
  var o0 = 0;
  var ds = bU.ds;
  this.aPR = 0;
  this.iC = function() {
    an.iC();
    if (a1.gd) {
      l3();
    } else {
      if (o0 === 0) {
        if (bU.ds >= ds) {
          ds += bU.a5h * Math.floor(1 + (bU.ds - ds) / bU.a5h);
          if (a1.v9 === 2 || a9.gS) {
            kr();
          } else {
            ku();
            bQ.a6F();
          }
          o0++;
        }
      } else {
        if (a9.gS) {
          l3();
        } else {
          bU.dO = true;
          l0();
        }
        o0 = 0;
      }
    }
    ky();
    if (bU.dO) {
      bU.dO = false;
      tN();
    }
  }
  ;
}
function dB() {
  this.vI = null;
  this.dO = false;
  this.ds = 0;
  this.a5h = 56;
  var aPm = 0;
  this.dH = function() {
    this.zo();
    window.requestAnimationFrame(aPn);
    this.ds = performance.now();
  }
  ;
  this.zh = function() {
    if (a1.gR) {
      this.vI = new aPX();
      this.vI.dH();
      return;
    }
    if (a1.jn) {
      this.vI = new aPl();
    } else {
      // MP
      this.vI = new aPQ();
      this.vI.dH();
    }
  }
  ;
  this.zo = function() {
    this.vI = new aPP();
    this.dO = true;
  }
  ;
  this.iC = function() {
    this.vI.aPR++;
  }
  ;
  this.jK = function() {
    return this.vI.aPR;
  }
  ;
  function aPn() {
    bU.ds = aPm = performance.now();
    bU.vI.iC();
    window.requestAnimationFrame(aPn);
  }
  this.aJR = function() {
    var dt = performance.now();
    if (aPm + 1000 > dt) {
      return;
    }
    this.ds = dt;
    this.vI.iC();
  }
  ;
}
function cd() {
  var lV = 0;
  var aPo = true;
  this.iC = function() {
    if (bU.ds > lV) {
      lV = bU.ds + 2500;
      aPp();
    }
  }
  ;
  function aPp() {
    var a1p;
    var dt = new Date();
    var a1q = dt.getUTCSeconds();
    if (aPo) {
      if (a1q < 45) {
        aPo = false;
      }
      return;
    }
    if (a1q < 45) {
      return;
    }
    aPo = true;
    a1p = dt.getUTCMinutes() + 1;
    if (a1p % 15 !== 0) {
      return;
    }
    if (a1p === 30) {
      aPq("Upcoming Battle Royale Contest!");
    } else {
      aPq("Upcoming Alliance Contest!");
    }
  }
  function aPq(od) {
    if (aN.wU() !== 8) {
      return;
    }
    if (aV.yb[a1.e2] === 2 || aV.lI[a1.e2] === 0 && !a1.gd) {
      aA.a1T(od);
    }
  }
}
function cV() {
  var lk;
  var ll;
  var ly;
  var lz;
  var aPr = 0;
  var aPs = 0;
  this.wu = function(d) {
    if (d.touches.length > 1) {
      aPs = bU.ds;
      aPr = 3;
      aPt(d);
      a8.qK();
      return true;
    }
    aPr = 0;
    return false;
  }
  ;
  this.wv = function(d) {
    if (a1.v9 === 0) {
      return false;
    }
    if (d.touches.length > 1) {
      aPr = Math.max(aPr - 1, 0);
      if (!a5.m3()) {
        return true;
      }
      var aE8 = aPu();
      aPt(d);
      var aE9 = aPu();
      var hO = Math.floor((lk + ly) / 2);
      var hP = Math.floor((ll + lz) / 2);
      aF.a3e(hO, hP, Math.max(0.125, aE9) / Math.max(0.125, aE8));
      bU.dO = true;
      return true;
    }
    return false;
  }
  ;
  this.xJ = function() {
    var eP, eR;
    if (aPr) {
      aPr = 0;
      if (bU.ds < aPs + 500) {
        eP = (lk + ly) / 2;
        eR = (ll + lz) / 2;
        a8.xC(eP, eR);
        if (a8.click(eP, eR, true)) {
          bU.dO = true;
        }
        return true;
      }
    }
    return false;
  }
  ;
  function aPu() {
    return Math.pow((Math.pow((ly - lk), 2) + Math.pow((lz - ll), 2)), 0.5);
  }
  function aPt(d) {
    lk = an.p2 * d.touches[0].clientX;
    ll = an.p2 * d.touches[0].clientY;
    ly = an.p2 * d.touches[1].clientX;
    lz = an.p2 * d.touches[1].clientY;
  }
}
function cm() { // Unwrapper
  this.size = 0;
  this.o0 = 0;
  this.a0 = null;
  this.dH = function(a0) {
    this.o0 = 0;
    this.a0 = a0;
    this.size = a0.length;
  }
  ;
  this.wg = function() {
    this.a0 = null;
  }
  ;
  this.o1 = function(size) {
    var z;
    var el = 0;
    var a0 = this.a0;
    var m3 = this.o0 + size - 1;
    for (z = this.o0; z <= m3; z++) {
      el |= ((a0[z >> 3] >> (7 - (z & 7))) & 1) << (m3 - z);
    }
    this.o0 += size;
    if (this.o0 > 8 * this.size) {
      console.log("error unwrapper");
    }
    return el;
  }
  ;
  this.aJx = function(size) {
    var ec = size >> 1;
    var eL = 1 << ec;
    return eL * this.o1(size - ec) + this.o1(ec);
  }
  ;
  this.aPv = function(size) {
    var z;
    var ey = new Array(size);
    for (z = 0; z < size; z++) {
      ey[z] = this.o1(10);
    }
    return a7.sA(ey);
  }
  ;
  this.aJw = function(aLD) {
    return this.size === b4.aJq(aLD);
  }
  ;
}
function d5() {
  this.aLu = 0;
  this.aLv = 0;
  this.aLq = 0;
  this.aLr = 0;
  this.aLs = 0;
  this.aLt = 0;
  this.a6G = [0, 0, 0, 0];
  this.m2 = function() {
    this.aLu = aF.tP();
    this.aLv = aF.tQ();
    this.aLq = -this.aLu;
    this.aLr = -this.aLv;
    this.aLs = an.t / hh;
    this.aLt = an.ir / hh;
    this.a6G[0] = Math.floor(this.aLq);
    this.a6G[1] = Math.floor(this.aLr);
    this.a6G[2] = Math.floor(this.a6G[0] + this.aLs + 1);
    this.a6G[3] = Math.floor(this.a6G[1] + this.aLt + 1);
    bQ.a6D = true;
  }
  ;
}
function cW() {
  var a2N;
  var lV;
  this.dH = function() {
    a2N = 1;
    lV = 0;
  }
  ;
  this.iC = function() {
    if (a2N > 0) {
      aPw();
    }
  }
  ;
  function aPw() {
    lV = lV === 0 ? bU.ds + 16 : lV;
    a2N -= (bU.ds - lV) * 0.001;
    a2N = a2N < 0 ? 0 : a2N;
    lV = bU.ds;
    bU.dO = true;
  }
  this.qn = function() {
    if (a2N > 0) {
      aPx();
    }
  }
  ;
  function aPx() {
    qo.fillStyle = "rgba(0,0,0," + a2N + ")";
    qo.fillRect(0, 0, an.t, an.ir);
  }
}
function cZ() {
  this.to = false;
  this.a96 = [0, 0, 0, 0];
  this.show = function() {
    this.to = true;
    this.resize();
    bU.dO = true;
  }
  ;
  this.resize = function() {
    var aNJ = bB.ek(bI.aBG + bI.aBG % 2, 2);
    var aHL = an.ir - aNJ * bR.gap;
    if (m.n.uE()) {
      this.a96[2] = Math.floor(0.75 * an.min);
    } else {
      this.a96[2] = Math.floor(0.5 * an.min);
    }
    this.a96[3] = Math.floor(1.25 * this.a96[2]);
    if (this.a96[3] > aHL) {
      this.a96[3] = aHL;
      this.a96[2] = Math.floor(aHL / 1.2);
    }
    this.a96[0] = Math.floor((an.t - this.a96[2]) / 2);
    this.a96[1] = Math.floor((an.ir - this.a96[3]) / 2);
  }
  ;
  this.wq = function(eP, eR) {
    if (eP < this.a96[0] || eR < this.a96[1] || eP > this.a96[0] + this.a96[2] || eR > this.a96[1] + this.a96[3]) {
      return false;
    }
    return true;
  }
  ;
  this.gV = function(eP, eR) {
    var aNJ = bB.ek(bI.aBG + bI.aBG % 2, 2);
    bU.dO = true;
    if (eP < this.a96[0] || eR < this.a96[1] || eP > this.a96[0] + this.a96[2] || eR > this.a96[1] + this.a96[3]) {
      this.to = false;
      return true;
    }
    var a32 = Math.floor(0.17 * this.a96[3]);
    if (eR < this.a96[1] + a32) {
      if (eP > this.a96[0] + this.a96[2] - a32) {
        this.to = false;
      }
      return true;
    }
    var z = Math.floor(aNJ * (eR - this.a96[1] - a32 - 0.00576 * an.oy) / (this.a96[3] - a32 - 0.01152 * an.oy));
    z = z < 0 ? 0 : z > (aNJ - 1) ? (aNJ - 1) : z;
    if (eP > this.a96[0] + this.a96[2] / 2) {
      z += aNJ;
    }
    if (z >= bI.aBG) {
      return true;
    }
    bI.loadMap(z, Math.floor(Math.random() * 16384));
    return true;
  }
  ;
  this.qn = function() {
    var z, ll;
    var a32 = Math.floor(0.17 * this.a96[3]);
    var aNJ = bB.ek(bI.aBG + bI.aBG % 2, 2);
    var gap = 0.6 * 0.01152 * an.oy;
    var a9K = (this.a96[3] - a32 - (aNJ + 1) * gap) / aNJ;
    var q7 = Math.floor((this.a96[2] - 3 * gap) / 2);
    qo.lineWidth = bR.uH;
    b2.ow.textAlign(qo, 1);
    b2.ow.textBaseline(qo, 1);
    qo.fillStyle = p.mI;
    qo.fillRect(this.a96[0], this.a96[1] + a32, this.a96[2], this.a96[3] - a32);
    qo.fillStyle = p.my;
    qo.fillRect(this.a96[0], this.a96[1], this.a96[2], a32);
    qo.strokeStyle = p.mL;
    qo.strokeRect(this.a96[0], this.a96[1], this.a96[2], this.a96[3]);
    qo.fillStyle = p.mL;
    qo.fillRect(this.a96[0], this.a96[1] + a32, this.a96[2], 2);
    qo.font = b2.ow.q5(1, 0.48 * a32);
    qo.fillText("Maps", Math.floor(this.a96[0] + this.a96[2] / 2), Math.floor(this.a96[1] + 0.55 * a32));
    qo.font = b2.ow.q5(1, 0.48 * a9K);
    for (z = aNJ - 1; z >= 0; z--) {
      ll = Math.floor(this.a96[1] + a32 + gap + z * (a9K + gap));
      aPy(z, this.a96[0] + gap, ll, q7, a9K);
      aPy(z + aNJ, this.a96[0] + q7 + 2 * gap, ll, q7, a9K);
    }
    a9.a0g(Math.floor(this.a96[0] + this.a96[2] - 0.7 * a32), Math.floor(this.a96[1] + 0.3 * a32), Math.floor(0.4 * a32));
    qo.setTransform(1, 0, 0, 1, 0, 0);
  }
  ;
  function aPy(map, eP, eR, t, ir) {
    if (map >= bI.aBG) {
      return;
    }
    if (bI.fz === map) {
      qo.fillStyle = p.my;
      qo.fillRect(eP, eR, t, ir);
      qo.fillStyle = p.mL;
    }
    qo.strokeRect(eP, eR, t, ir);
    qo.fillText(bI.ji.sh[map].name, Math.floor(eP + 0.5 * t), Math.floor(eR + 0.55 * ir));
  }
}
function u() {
  this.size = 0;
  this.o0 = 0;
  this.a0 = null;
  this.dH = function(a0) {
    this.o0 = 0;
    this.a0 = a0;
    this.size = a0.length;
  }
  ;
  this.v = function(aLD) {
    this.dH(new Uint8Array(this.aJq(aLD)));
    return this.a0;
  }
  ;
  this.wg = function() {
    this.a0 = null;
  }
  ;
  this.w = function(size, a1s) {
    var z;
    var a0 = this.a0;
    var m3 = this.o0 + size - 1;
    for (z = this.o0; z <= m3; z++) {
      a0[z >> 3] |= ((a1s >> (m3 - z)) & 1) << (7 - (z & 7));
    }
    this.o0 += size;
    if (this.o0 > 8 * this.size) {
      console.log("error wrapper");
    }
  }
  ;
  this.aJp = function(size, a1s) {
    var ec = size >> 1;
    var eL = 1 << ec;
    this.w(size - ec, bB.ek(a1s, eL));
    this.w(ec, a1s % eL);
  }
  ;
  this.aPz = function(size) {
    var z;
    var a0 = this.a0;
    var m3 = this.o0 + size;
    for (z = this.o0; z < m3; z++) {
      a0[z >> 3] &= 255 ^ (128 >>> (z & 7));
    }
  }
  ;
  this.aJq = function(aLD) {
    return (aLD + 7) >> 3;
  }
  ;
  this.aQ0 = function(ey, ib, m3, aQ1) {
    var z;
    for (z = ib; z < m3; z++) {
      this.w(aQ1, ey[z]);
    }
  }
  ;
}
setTimeout(bb, 10000);
window.onload = function() {
  const lobbyCodeFromUrl = getUrlParameter('code');
  bb();
  if (lobbyCodeFromUrl) {
  const playerName = bY.dZ.data[122].value.slice(0, 20);
    connectToServer(lobbyCodeFromUrl, playerName);
  }
};