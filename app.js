// let res = fetch("https://restcountries.com/v3.1/all")           ___
// res.then(res => {res.json()}).then(data => {console.log(data);})   | 
//                                                                     > --->>> //*****- undefined -*****
// console.log(res);                                               ___|

fetch("https://restcountries.com/v3.1/all").then(res => res.json()).then(data => console.log(data))

fetch("https://restcountries.com/v3.1/all").then(res => res.json()).then(data => {

    let tablethis = document.getElementById("tablethis");

    let tabdata = `<tr>
                            <th>Name</th>
                            <th>Flag</th>
                    </tr>`

    data.forEach(element => {

        tabdata += `<tr>
                            <td>${element.name.common}</td>
                            <td>${element.flag}</td>
                        </tr>`

        //console.log(element.name.common);


    });

    tablethis.innerHTML = tabdata;
})

//-----------------------------------------Serch Count-----------------------------------------------

function sherch() {

    let CounName = document.getElementById("txtFile").value;

    let officialName = document.getElementById("officialName");
    let name = document.getElementById("name");
    let img = document.getElementById("img");



    fetch(`https://restcountries.com/v3.1/name/${CounName}`).then(res => res.json()).then(data => {

        data.forEach(element => {

            officialName.innerText = element.name.official;
            name.innerText = element.name.common;

            img.innerHTML = `<img src="${element.flags.png}" alt="">`

        })
    })
}

//----------------------------------------------------------------------------------------------------------

//-------------------Sinkronas-----------------------
                           
console.log("1");           
console.log("2");
console.log("3");

for(let i=0; i<5; i++){
    console.log(i);
    
}

console.log("4");
console.log("5");
console.log("6");
console.log("7");


//-------------------Asinkronas-----------------------