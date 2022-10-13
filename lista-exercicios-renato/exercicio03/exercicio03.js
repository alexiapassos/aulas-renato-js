let raio=Number(prompt('digite o valor do lado do raio'));
let diametro = (raio ** 2);
let perimetro = (Math.PI*diametro);
let area = (2*(Math.PI*raio));



alert('A area da circunferencia é:'+ Math.round(area));
alert('a area do perimetro é:' + Math.round(perimetro));