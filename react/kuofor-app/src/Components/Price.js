import React from 'react'
import "./Price.css"
function Price() {
  return (
    
    <div class="price-table-wrapper">
  <div class="pricing-table">
    <h2 class="pricing-table__header">- BASIC -</h2>
    <h3 class="pricing-table__price">₺50</h3>
    
    <ul class="pricing-table__list">
    <li>lorem ipsum</li>
      <li>lorem ipsum</li>
      <li>lorem ipsum</li>
      <li>lorem ipsum</li>
    </ul>
  </div>
  <div class="pricing-table featured-table">
    <h2 class="pricing-table__header">- BUSINESS -</h2>
    <h3 class="pricing-table__price">₺80</h3>
    
    <ul class="pricing-table__list">
    <li>lorem ipsum</li>
      <li>lorem ipsum</li>
      <li>lorem ipsum</li>
      <li>lorem ipsum</li>
    </ul>
  </div>
  <div class="pricing-table">
    <h2 class="pricing-table__header">- PREMIUM -</h2>
    <h3 class="pricing-table__price">₺130</h3>
    <ul class="pricing-table__list">
      <li>lorem ipsum</li>
      <li>lorem ipsum</li>
      <li>lorem ipsum</li>
      <li>lorem ipsum</li>
    </ul>
  </div>
</div>
  )
}

export default Price
