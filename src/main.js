// funcion para ocultar logging y mostrar formulario
let btnLogging = document.getElementById('logging');
let laboratoria1 = document.getElementById('laboratoria1');
let laboratoriaBar = document.getElementById('laboratoriaBar');
let btnLima = document.getElementById('lima');

btnLogging.addEventListener('click', function () {
  let laboratoria2 = document.getElementById('laboratoriaBar');
  let navigatingBar = document.getElementById('navigatingBar');
  let loggingIn = document.getElementById('loggingIn');

  if (true || (document.form.password.value == 'CONTRASEÑA' && document.form.user.value == 'USUARIO')) {
    loggingIn.classList.replace('show', 'hide');

    navigatingBar.classList.replace('hide', 'show');

    laboratoria2.classList.replace('hide', 'show');
  } else {
    alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
  }
});

//Mostrar lista de cohorts dando click en boton
const cohort = document.getElementById("newTab");
cohort.addEventListener('click', (event) => {
  event.preventDefault();

  getData(urlCohort, function () {
    let laboratoria2 = document.getElementById('laboratoria2');
    laboratoria2.classList.replace('hide', 'show');
    navigatingBar.classList.replace('show', 'hide');
    laboratoria2.classList.replace('hide', 'show');
    
    for (const group of getCohorts()) {
      const list = document.getElementById("listaCohorts");
      const a = document.createElement('a');
      const lista = document.createElement('li');
      a.setAttribute('href', '#');
      a.setAttribute('id', group.id);
      a.innerHTML = group.id;
      lista.appendChild(a);
      list.appendChild(lista);
      const liuser = document.getElementById('aqp-2018-03-jp-core-talento')
      addEventToCohortElem(liuser);
    };
  });
});

window.addEventToCohortElem = (elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    getData(urlUser, () => {
      serviceUser.setUser(getUsers())
      serviceUser.sortUsers()
      console.log(serviceUser.getUsers())
      for (const group of getUsers()) {
        const list = document.getElementById("usuarios");
        const a = document.createElement('a');
        const lista = document.createElement('li');
        // a.setAttribute('href', '#'); 
        a.setAttribute('id', group.id);
        a.innerHTML = group.name;
        lista.appendChild(a);
        list.appendChild(lista);
        addEventToUserElem(a);
      }
    })

  })
};

window.addEventToUserElem = (elem) => {
  elem.addEventListener('click', () => {
    event.preventDefault();
    getData(urlProgress, function () {
      const id = elem.getAttribute('id');
      const data = getProgress(id);
      if (data) {
        //for (const group of data) {

        console.log(data)
        /**       
           const list = document.getElementById("usuarios");
        const a = document.createElement('a');
        const lista = document.createElement('li');
        a.setAttribute('href', '#'); 
        a.setAttribute('id', group.id); 
        a.innerHTML = group.name;
        lista.appendChild(a);
        list.appendChild(lista); 
  */

        //}
      }

    })

  })
};
//users.addEventListener('click', (event)=>{
// event.preventDefault();
// getData(urlUser,getUsers);
// });  
// };


//Mostrar lista de estudiantes
// const lis = document.getElementsByClassName('li-cohort')[0];
// lis.addEventListener('click', (event) => {
//   event.preventDefault();
//   getData2();
// });

