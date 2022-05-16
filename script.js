// const siyahi =[]
//  const telebeler =[{
//      ad:"Humay"
//     evlidirMi:false,
//      age:26
// },
 
 
//  "Aynur","Resul"]

const siyahi = ["paper.png","scissors.png","rock.png"]
// massivin uzunlugu onu teskil eden elementlerin sayidir
// massssivinAdi noqte lenght
// siyahi.lenght3
// sonuncu index tapilir:siyahi.lengt-1
// elementlerin HTMLde secilmesi DOM adlanir Dociment object model
 const kagiz = document.getElementById('kagiz')
 const qayci = document.getElementById('qayci')
 const das = document.getElementById('das')

 const komputerSecim =document.getElementById('komputer')
 const neticeYazilanDiv =document.getElementById('netice')
//  hoisting

 k.onclick = seciminiEt
 qayci.onclick = seciminiEt
 das.onclick = seciminiEt

 function seciminiEt() {
     const menimQerarim= this.dataset.id
     const komputerinQerari= randomSeciminiEt()
     let netice = ''

     if(menimQerarim== komputerinQerari){}
     else ifmenimQerarim==( 0 && komputerinQerari){
         netice= ""

     }
     else {

     }

 }

function randomSeciminiEt (){
const say = Math.round(Math.random()*2)

komputerSecim=`./images/${siyahi[say]}`

return say
}