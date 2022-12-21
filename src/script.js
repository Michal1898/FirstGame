state = 50

onkeydown = (event) => {

  if(event.key == "a") {
    state=state - 1  
  }
  if (event.key == "l") { state=state + 1
}
  
if (state <= 30) {
  alert('vyhral hrac 😁')
  state = 50
}
  
 if (state => 70) {
  alert('vyhral hrac 👍')
  state = 50
}

p1.style.top = state + "%"
p2.style.top = 100 - state + "%"
}