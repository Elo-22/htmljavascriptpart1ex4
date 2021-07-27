

let calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', function () {
    let lastname = document.getElementById('lastname').value;
    let firstname = document.querySelector('#firstname').value;
    let city = document.getElementById('city').value;
    alert(`nom: ${lastname}\nprénom: ${firstname}\nville: ${city}`);
})

// let calculateButton = document.getElementById('calculateButton'); 
// --> on selectionne le boutton déclaration de la variable qui stock le boutton
// // calculateButton.addEventListener('click', function () {            
// --> on lui donne un évenement=click, lors du click,on ouvre et lui donne donc une fonction , à l'intérieur de cette fonction on ouvre les {} pour lui dire ce qu'il doit afficher lors du click/évenements
// //     let lastname = document.getElementById('lastname').value;   
// --> getelementbyid : selection de l'élément avec un id, .value=....
//     let firstname = document.querySelector('#firstname').value;
// --> queryselector= selection, et bien nomer l'id avec # et pas juste des simples cotes 
//     let city = document.getElementById('city').value;
//     alert(`nom: ${lastname}\nprénom: ${firstname}\nville: ${city}`);
// })


