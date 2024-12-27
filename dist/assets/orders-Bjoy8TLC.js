import{r as n}from"./utils-QdhfMUCY.js";import{c as a}from"./auth-BenMQUpj.js";import{a as c}from"./productData-BCPXBWLg.js";n();const d=a();async function s(){try{const r=await c(d);i(r),console.log(r)}catch(r){console.error("Failed to fetch orders:",r)}}s();function i(r){const t=document.getElementById("ordersGrid");t.innerHTML="",r.forEach(e=>{const o=document.createElement("div");o.classList.add("order"),o.innerHTML=`
            <h3>Order #${e.id}</h3>
            <p>Date: ${e.orderDate}</p>
            <p>Total: $${e.orderTotal}</p>
            <p>Name: ${e.fname} ${e.lname}</p>
            <p>Location: ${e.city}, ${e.state}</p>
          `,t.appendChild(o)})}
