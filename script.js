(function () {
  "use strict";

  // Product cards: 2 rows of 5, fictional items with illustrated images
  var products = [
    { n: "示範商品 A 短袖上衣", p: "NT$1,280", img: "p01", sw: ["#1e1e22"] },
    { n: "示範商品 B 短袖上衣", p: "NT$1,680", img: "p02", sw: ["#232327"] },
    { n: "示範商品 C 短袖上衣", p: "NT$1,680", img: "p03", sw: ["#1b1b1f"] },
    { n: "示範商品 D 短袖上衣", p: "NT$1,680", img: "p04", sw: ["#6e6f73"] },
    { n: "示範商品 E 短袖上衣", p: "NT$1,280", img: "p05", sw: ["#f2f1ec", "#1e1e22"] },
    { n: "示範商品 F 圓領上衣", p: "NT$1,280", img: "p06", sw: ["#b9bbbe", "#2b2b2f"] },
    { n: "示範商品 G 高筒襪", p: "NT$320", img: "p07", sw: ["#2b2b2f", "#f4f4f2"] },
    { n: "示範商品 H 牛仔寬褲", p: "NT$1,980", img: "p08", sw: ["#5f87b6"] },
    { n: "示範商品 I 七分褲", p: "NT$1,380", img: "p09", sw: ["#8c9484"] },
    { n: "示範商品 J 圖樣上衣", p: "NT$1,580", img: "p10", sw: ["#e8e4da", "#1e1e22"] }
  ];

  var grid = document.getElementById("product-grid");
  if (grid) {
    products.forEach(function (it) {
      var card = document.createElement("article");
      card.className = "card";
      var sw = it.sw.map(function (c) { return '<span class="sw" style="background:' + c + '"></span>'; }).join("");
      card.innerHTML =
        '<img class="thumb" src="assets/' + it.img + '.svg" alt="' + it.n + '">' +
        '<p class="name">' + it.n + "</p>" +
        '<p class="price">' + it.p + "</p>" +
        '<div class="swatches">' + sw + "</div>";
      grid.appendChild(card);
    });
  }

  function tiles(id, labels, offset) {
    var el = document.getElementById(id);
    if (!el) return;
    labels.forEach(function (label, i) {
      var n = ((i + offset) % 12) + 1;
      var a = document.createElement("a");
      a.href = "#";
      a.className = "brand-tile";
      a.innerHTML = '<img src="assets/look' + (n < 10 ? "0" : "") + n + '.svg" alt=""><span>' + label + "</span>";
      el.appendChild(a);
    });
  }

  tiles("brands-a", ["BRAND ONE", "BRAND TWO", "BRAND THREE", "BRAND FOUR", "BRAND FIVE", "BRAND SIX", "BRAND SEVEN", "BRAND EIGHT", "BRAND NINE"], 0);
  tiles("brands-b", ["IMPORT ONE", "IMPORT TWO", "IMPORT THREE", "IMPORT FOUR", "IMPORT FIVE", "IMPORT SIX"], 3);
  tiles("select-brands", ["SELECT A", "SELECT B", "SELECT C", "全部品牌"], 1);
  tiles("styling-grid", ["LOOK 1", "LOOK 2", "LOOK 3", "LOOK 4"], 6);

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
