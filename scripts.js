const slider = document.getElementById('slider');
const pageNum = document.querySelector('.num-of-pages');
const price = document.querySelector('.price');

slider.addEventListener('input', (e) => {
  console.log(typeof e.target.value);
  switch(e.target.value) {
    case '0': 
      pageNum.textContent = "10K";
      price.textContent = "$8";
      break;
    case '1': 
      pageNum.textContent = "50K";
      price.textContent = "$12";
      break;
    case '2': 
      pageNum.textContent = "100K";
      price.textContent = "$16";
      break;
    case '3': 
      pageNum.textContent = "500K";
      price.textContent = "$24";
      break;
    case '4': 
      pageNum.textContent = "1M";
      price.textContent = "$36";
      break;
    default:
      return;
  }
})