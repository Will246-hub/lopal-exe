// const PASSWORD = "pao123"
// let tentativas = 0

// while(tentativas < 3) {
//     let senha = prompt("Digite a senha: ")
//     if (senha === PASSWORD){
//  alert("senha correta!")
//  break
//     }
//     else if (tentativas >= 2){
// alert("senha Bloqueada...")
// break
//     }
//     else {
//         alert("senha errada! Tente novamente...")
//         tentativas++
//     }
// }

// let numbers = 10

// while(numbers >= 1) {
// alert(`Contagem regressiva em ${numbers}!`)
//         numbers--
//     }
// alert("Feliz ano novo!!!!")


let money_box = 0 
let quota = 300
let remaining
while (true){
    let quota_week
    quota_week = Number(prompt("Digite a quantidade dessa semana: "))
    if (money_box <= 300){
    money_box = quota_week + money_box
    let remaining = quota - money_box
     alert(`Ainda resta ${remaining} para atingir a cota`)
    } else if (quota_week < 0){
        alert("Numero incorreto!!") 
    }else{
alert("Parabens!! Você atingiu a meta.")
break
    }
}
