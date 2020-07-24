let compareBMI
let jBMI=0
let tBMI=0
let jHeight=1.70
let tHeight=1.66

let jWeight=60
let tWeight=66

jBMI=jWeight/(jHeight*jHeight)
tBMI=tWeight/(tHeight*tHeight)

if(jBMI>tBMI){
    compareBMI=true
}else{
    compareBMI=false
}
console.log(`Jeff’s BMI :${jBMI} and Todd’s BMI :${tBMI}`)
console.log(`is Jeff’s BMI higher than Todd’s?: ${compareBMI}`)


Use Strict'
var jeffHeight=1.5
var toddHeight=1.8
let mass=[80,60]
let jeffHighBmi=false

let bmi= function(m,h){
   return m/(h*h)
}

let jeffBmi= bmi(mass[0],jeffHeight)
let toddBmi=bmi(mass[1],toddHeight)
jeffBmi>toddBmi ? jeffHighBmi=true : jeffHighBmi=false
jeffHighBmi===true ? console.log(`Jeff has BMI ${jeffBmi} which is higher than Todd`) : console.log(`Todd has BMI ${toddBmi} which is higher than Jeff`