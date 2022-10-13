const vogais = ["a,e,i,o,u"]
const consoantes = ["b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,x,y,z"]

let letra = prompt("Digite uma letra do nosso alfabeto")
if (letra == vogais.length) {
    alert('Sua letra é uma vogal')
}

else {
    alert('Sua letra não é uma consoante')
}
