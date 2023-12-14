/*
export class Add{
    data:number | string=20
    getData(){
        this.data="hello"
    }
}
*/
export{}

let message="welcome back"
console.log(message)


let x=10;
const y=10;
console.log(x, y) //print x nd y val


let name:string = 'Soundarya';
let word:string = `My name is ${name}
I am working in Digicoffer`;
console.log(word)


enum color {Red, Green, Blue}; //arr
let c: color= color.Green;
console.log(c)

//var obj.
const car: { car_type: string, year: number } = {
    car_type: "Toyota",
    year: 2009
  };
  console.log(car);

  //add function
  function doAdd(a: number,b: number){ 
    return(a + b);
  }
  var result = doAdd(3,2);
  console.log("doAdd function returns:" +result);
