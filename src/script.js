state = 50

onkeydown = (event) => {

  if(event.key == "a") {
    state=state - 5
  }
  if (event.key == "l") { state=state + 5
}
  
if (state <= 0) {
  alert('vyhral hrac 😁')
  state = 50
}
  
 if (state => 100) {
  alert('vyhral hrac 👍')
  state = 50
}

p1.style.top = state + "%"
p2.style.top = 100 - state + "%"
}