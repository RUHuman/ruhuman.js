document.getElementById ("ruhuman").addEventListener("click", function(e){
    if (this.checked) {
      ruhuman.checked = true;
      if (e.screenX && e.screenY) {
        ruhuman.human = true;
      } else {
        ruhuman.human = false;
      }
    }
    alert(ruhuman.human);
  });
