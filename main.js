window.onload = () =>{
  
  let items = document.querySelectorAll('.carousel1 .carousel-item1')
  
  items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0]
      }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
    }
  })
  
  let items2 = document.querySelectorAll('.carousel2 .carousel-item2')
  
  items2.forEach((el) => {
    const minPerSlide = 2
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items2[0]
      }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
    }
  })
 
}