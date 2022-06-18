let numberPhone = '00123 01456 03666 00777 00889 03441 01558 00222 01789 01987 03333' //00 Viettel   //01  Mobifone   //03 Vinaphone
let numbers = numberPhone.split(' ');
let Viettel:string[]=[],Mobifone:string[]=[],Vinaphone:string[]=[];

for(let i=0;i<numbers.length;i++){
        if(numbers[i][0]+numbers[i][1]=='00'){
            Viettel.push(numbers[i]);
        }else if(numbers[i][0]+numbers[i][1]=='01'){
            Mobifone.push(numbers[i]);
        }else{
            Vinaphone.push(numbers[i]);
        }
}
console.log(Viettel);
console.log(Mobifone);
console.log(Vinaphone);




