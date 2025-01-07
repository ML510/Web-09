// let res = fetch("https://restcountries.com/v3.1/all")           ___
// res.then(res => {res.json()}).then(data => {console.log(data);})   | 
//                                                                     > --->>> //*****- undefined -*****
// console.log(res);                                               ___|

//fetch("https://restcountries.com/v3.1/all").then(res => res.json()).then(data => console.log(data));

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
console.log("Sinkronas");       //  ___
//     |    
console.log("i");               //     |    i
console.log("ii");              //     |    ii
console.log("iii");             //     |    ii
//     |    0
for (let i = 0; i < 5; i++) {   //     |    1
    console.log(i);             //      >   2
    //     |    3
}                               //     |    4
//     |    vi
console.log("iv");              //     |    v
console.log("v");               //     |    vi
console.log("vi");              //  ___|              

//-------------------Asinkronas-----------------------
console.log("Asinkronas");

setTimeout(() => {                  //  ___
    for (let i = 0; i < 5; i++) {   //     |    i
        console.log(i);             //     |    ii
        //     |    iii
    }                               //     |    iv
}, 1000);                           //      >   0
//     |    1
console.log("i");                   //     |    2   
console.log("ii");                  //     |    3   
console.log("iii");                 //     |    4
console.log("iv");                  //  ___|

//---************************ fetch is Asinkronas *******************---
// console.log("fetch is Asinkronas");                         
//                                                             //  ___
// fetch(`https://restcountries.com/v3.1/all`).then(res => {   //     |    
//     console.log("1");                                       //     |    i
//     console.log("2");                                       //     |    ii
//     console.log("3");                                       //     |    iii
// });                                                         //      >   iv
//                                                             //     |    1
// console.log("i");                                           //     |    2
// console.log("ii");                                          //     |    3
// console.log("iii");                                         //     |    4
// console.log("iv");                                          //  ___|


// ******************************************************************************
class Customer {
    name;
    age;
    address;

    // Customer(){

    // }
    constructor() {

    }

    setName(name) {
        this.name = name;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setAddress() {
        this.address = this.address;
        return this;
    }
}

let customer01 = new Customer();

let saman = customer01.setName("Saman").setAge(12).setAddress("Panadura");

console.log(saman);

//---****************************** Call Back Hell *******************************

setTimeout(() => {
    console.log("Lesthi Venava !");
    setTimeout(() => {
        console.log("Salli Illa Gnnava !");
        setTimeout(() => {
            console.log("Badu List Eka Hadanava !");
            setTimeout(() => {
                console.log("Kadeta Yanava !");
                setTimeout(() => {
                    console.log("Polime idala badu Tika Gannava !");
                    setTimeout(() => {
                        console.log("Badu Tika Aran Gedata Enava !");
                        setTimeout(() => {
                            console.log("Badu Tika Ammata Denava !");
                        }, 1000);
                    }, 3000);
                }, 2000);
            }, 2000);
        }, 3000);
    }, 1000);
}, 2000);




// <<<<< ** I ** >>>>>------------------------------------------------------

function sum(num1, num2, displayTotalfunction) {
    let sum = num1 + num2;

    displayTotalfunction(sum);
}

function displayTotal(sum) {
    document.getElementById("lblTotal-01").innerText = sum;
}

sum(10, 20, displayTotal);

// <<<<< ** II ** >>>>>------------------------------------------------------

sum(50, 20, (sum) => {
    document.getElementById("lblTotal-02").innerText = sum;
});


// <<<<< ** III ** >>>>>------------------------------------------------------

// document.getElementById("totalButton").addEventListener("click",(50, 50, (sum) => {
//     document.getElementById("lblTotal-03").innerText = sum;
// }));

document.getElementById("totalButton").addEventListener("click", () => {
    const num1 = 50;
    const num2 = 50;
    const sum = num1 + num2;
    document.getElementById("lblTotal-03").innerText = sum;
});
