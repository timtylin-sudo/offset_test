(function () {
  "use strict";

  var palette = [
    ["#3b4a5a", "#1f2933"], ["#8a6f4d", "#4d3b26"], ["#5a6794", "#2b3358"],
    ["#6f7a68", "#3a4234"], ["#a2432f", "#4a2c2a"], ["#4d6b6b", "#26403f"],
    ["#7a5c7a", "#3d2a3d"], ["#8f8f8f", "#505050"]
  ];

  function grad(i) {
    var p = palette[i % palette.length];
    return "linear-gradient(160deg," + p[0] + "," + p[1] + ")";
  }

  // Product cards: 2 rows of 5, fictional items
  var products = [
    { n: "示範商品 A 短袖上衣", p: "NT$1,280", c: 1 },
    { n: "示範商品 B 短袖上衣", p: "NT$1,680", c: 1 },
    { n: "示範商品 C 短袖上衣", p: "NT$1,680", c: 1 },
    { n: "示範商品 D 短袖上衣", p: "NT$1,680", c: 1 },
    { n: "示範商品 E 短袖上衣", p: "NT$1,280", c: 2 },
    { n: "示範商品 F 圓領上衣", p: "NT$1,280", c: 2 },
    { n: "示範商品 G 高筒襪", p: "NT$320", c: 3 },
    { n: "示範商品 H 牛仔寬褲", p: "NT$1,980", c: 1 },
    { n: "示範商品 I 七分褲", p: "NT$1,380", c: 1 },
    { n: "示範商品 J 圖樣上衣", p: "NT$1,580", c: 2 }
  ];

  var grid = document.getElementById("product-grid");
  if (grid) {
    products.forEach(function (it, i) {
      var card = document.createElement("article");
      card.className = "card";
      var sw = "";
      for (var k = 0; k < it.c; k++) sw += '<span class="sw" style="background:' + palette[(i + k) % palette.length][0] + '"></span>';
      card.innerHTML =
        '<div class="thumb" style="background:' + grad(i) + '" role="img" aria-label="示範商品圖">PRODUCT</div>' +
        '<p class="name">' + it.n + "</p>" +
        '<p class="price">' + it.p + "</p>" +
        '<div class="swatches">' + sw + "</div>";
      grid.appendChild(card);
    });
  }

  function tiles(id, labels, offset, extraClass) {
    var el = document.getElementById(id);
    if (!el) return;
    labels.forEach(function (label, i) {
      var a = document.createElement("a");
      a.href = "#";
      a.className = "brand-tile" + (extraClass ? " " + extraClass : "");
      a.style.background = grad(i + offset);
      a.innerHTML = "<span>" + label + "</span>";
      el.appendChild(a);
    });
  }

  tiles("brands-a", ["BRAND ONE", "BRAND TWO", "BRAND THREE", "BRAND FOUR", "BRAND FIVE", "BRAND SIX", "BRAND SEVEN", "BRAND EIGHT", "BRAND NINE"], 0);
  tiles("brands-b", ["IMPORT ONE", "IMPORT TWO", "IMPORT THREE", "IMPORT FOUR", "IMPORT FIVE", "IMPORT SIX"], 3);
  tiles("select-brands", ["SELECT A", "SELECT B", "SELECT C", "全部品牌"], 1);
  tiles("styling-grid", ["LOOK 1", "LOOK 2", "LOOK 3", "LOOK 4"], 2);

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Back to top
  var top = document.getElementById("to-top");
  if (top) {
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  }

  // Keep placeholder links inert
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });
})();
