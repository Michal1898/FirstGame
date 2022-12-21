state = 50

onkeydown = (event) => {

  if(event.key == "a" && a_release) {
    a_release = false
    state=state - 1
  }
  if (event.key == "l" && l_release) { 
    l_release = false
    state=state + 1
}
  
if (state < 0) {
  alert('vyhral hrac 😁')
  state = 50
}
  
 if (state > 100) {
  alert('vyhral hrac 👍')
  state = 50
}

p1.style.top = state + "%"
p2.style.top = 100 - state + "%"
}

onkeyup = (event2) => {

  if(event2.key == "a") {
    a_release = true
  }
  if (event.key == "l") { 
    l_release = true
}
  
}