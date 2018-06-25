const urlCohort = "../data/cohorts.json"
const urlUser = "../data/cohorts/lim-2018-03-pre-core-pw/users.json"
const urlProgress = "../data/cohorts/lim-2018-03-pre-core-pw/progress.json"

//funcion para obtener datos json
const getData = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = callback;
  xhr.send();
};

// funcion para llamar lista de cohorts
const getCohorts = () => {
  return JSON.parse(event.target.responseText);
};

//funcion para llamar lista de estudiantes  
const getUsers = () => {
  // const data2 = JSON.parse(event.target.responseText);
  return JSON.parse(event.target.responseText);

};


const getProgress = (id) => {

  let data3 = JSON.parse(event.target.responseText);

  if (data3) {

    // console.log(usersWithStats);

    return data3[id].intro
  };


  return false;

}

// window.computerUsersState(users,progress,courses)
// id de users=id Progress bote info del progres(for of)

let loadDoc = (url, cFunction)=> {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
let serviceUser={
  users:{},
  setUser:(users)=>{
    serviceUser.users = users
  },
  getUsers:()=>{
    return serviceUser.users
  },
  sortUsers :()=>{
   let miArray = serviceUser.getUsers();
   let miArray2 = [];
		for(var i=1;i<miArray.length;i++)
		{
			for(var j=0;j<(miArray.length-i);j++)
			{
				if(j>(j+1))
				{
					k=miArray[j+1];
					miArray[j+1]=miArray[j];
					miArray2[j]=k;
				}
			}
    }
    console.log(miArray2)
		serviceUser.setUser(miArray2);
   // return serviceUser.getUsers(); 
  },
  computeUsersStats : (users, progress, courses)=>{

  }
}


