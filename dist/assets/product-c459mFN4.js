import{g as o,o as c,p as d,q as l,r as n}from"./utils-QdhfMUCY.js";import{f as m}from"./productData-BCPXBWLg.js";let a={},t="";async function u(e,r){a=await m(e),(!a||!a.NameWithoutBrand)&&(t="Error 404 Product Not Found",a={}),document.querySelector(r).insertAdjacentHTML("afterBegin",g(a)),document.getElementById("addToCart").addEventListener("click",p)}function p(){let e=o("so-cart");e||(e=[]),e.push(a),c("so-cart",e),d.set(e.length)}function g(e){let r=e.SuggestedRetailPrice-e.FinalPrice,i=Math.round(r*100)/100;return t?`<p class="error-message">${t}</p>`:`<h3>${e.Brand.Name}</h3>
  <h2 class="divider">${e.NameWithoutBrand}</h2>
  <picture>
  <source media="(max-width: 320px)" srcset="${e.Images.PrimarySmall}" />
  <source media="(max-width: 480px)" srcset="${e.Images.PrimaryMedium}" />
  <source media="(max-width: 768px)" srcset="${e.Images.PrimaryLarge}" />
  <img
    src="${e.Images.PrimaryExtraLarge}" 
    alt="${e.Name}" 
  />
</picture>
  <p class="product-retail_price">Original Price: <s>$${e.SuggestedRetailPrice}</s></p>
  <p class="product-card__price">Final Price: $${e.FinalPrice}</p>
  <p class="product_discount">Total Savings: $${i}</p>
  <p class="product__color">${e.Colors[0].ColorName}</p>
  <p class="product__description">
  ${e.DescriptionHtmlSimple}
  </p>
  <h2 class="divider"></h2>
  <div class="product-detail__add">
    <button id="addToCart">Add to Cart</button>
  </div>`}const s=l("product");console.log(s);u(s,".product-detail");n();
