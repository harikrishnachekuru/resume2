function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}

var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
})

  var rightChild=document.querySelector("#rightChild");
  function career(car){
    var heading=document.createElement("h2");
    heading.textContent="career objective";
    rightChild.appendChild(heading);
    var p=document.createElement("p");
    p.textContent=car.info;
    rightChild.appendChild(p);
  }
