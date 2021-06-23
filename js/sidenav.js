window.addEventListener('click', function(e){   
  const toggle = document.querySelector("#menuToggle").querySelector("input[type='checkbox']")
  if (toggle !== e.target && toggle.checked && !document.getElementById('menu').contains(e.target)){
  toggle.checked = !toggle.checked;
  } 
});