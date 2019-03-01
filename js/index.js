const a = parseFloat(prompt('Введіть значення а'));
const b = parseFloat(prompt('Введіть значення b'));
const c = parseFloat(prompt('Введіть значення c'));

function deck(a, b, c) {
    return  b*b-4*a*c;
}
const resDesk=deck(a,b,c);
function addDesk (a, b, c, resDesk){
    if (resDesk > 0){
        const x1=(-b+Math.sqrt(resDesk))/(2*a);
        const x2=(-b-Math.sqrt(resDesk))/(2*a);
        return 'Х1= '+ x1 + '; X2=' + x2;
    }else if(resDesk === 0){
        const x=(-b)/(2*a)
        return "Рівняння має 1 корінь Х=" + x;
    }else{
        return 'Дескримінант <0 коренів рівняння немає';
    }
}
alert(addDesk(resDesk));


