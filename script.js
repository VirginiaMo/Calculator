let suma= document.getElementById('sumar').addEventListener('click', () =>{
    suma = '+';
});

let resta = document.getElementById('restar').addEventListener('click', () =>{
    resta = '-';
});
let multiplicacion = document.getElementById('multiplicar').addEventListener('click', () =>{
    multiplicacion = '*';
});
let division = document.getElementById('dividir').addEventListener('click', () =>{
    division = '/';
});
let calcular = document.getElementById('calcular').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#a').value);
    const n2 = parseInt(document.querySelector('#b').value);
  
    let r;
    if(suma == '+'){
        r = n1 + n2;
    }else if( resta == '-'){
        r = n1 - n2;
    }else if(multiplicacion == '*'){
        r = n1 * n2;
    }else if(division == '/'){
        r = n1 / n2;
    }
    document.querySelector('#result').innerHTML = r;
 
});

function reset(){
    document.querySelector('#a').value="";
    document.querySelector('#b').value="";
    document.querySelector('#result').value="";
}