/* 3.*/
const data = document.getElementsByClassName('voy-qb-item-value1 voy-wikidata-content');
if (data.length > 0){
  const firstInnerText = data[0].innerText;
  console.log(firstInnerText)
}
/* 4.*/
const region = document.getElementsByClassName('voy-regionName').length;
console.log(region);
/* 5.*/
const nature = document.querySelectorAll('[data-group="nature"] .p-name').forEach(function(p_name){
console.log(p_name.innerText);
}
);
document.querySelectorAll('[data-group="nature"] .p-name').forEach(n => console.log(n.innerText));
/* 6.*/
document.querySelector('.voy-qb-item-area [data-wikidata-id="Q219"]').innerText;