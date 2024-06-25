const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let lembretes = []
exibirMenu()

function exibirMenu() {
    console.log(` 
    1. Adicionar lembrete
    2. Listar lembretes
    3. Editar lembretes
    4. Marcar como concluída
    5. Sair
    `) 
    
rl.question(`Escolha uma opção: `, (opcao) => {
 	switch (opcao) {
 	    case '1':
 	        adicionar()
 	        break;
 	    case '2':
 	        listar()
 	        break;
 	    case '3':
 	        editar()
 	        break;
 	    case '4':
 	        marcarConcluida()
 	        break;
 	    case '5':
 	        console.log("Fechando o programa!")
 	        rl.close()
 	        break;
 	    default:
 	        console.log('Opção inválida!')
 	        exibirMenu()
 	        break;
 	   
 		}
 	})
}

function adicionar(){
	rl.question('Digite o lembrete: ', (lembrete) => {
		rl.question('Digite o prazo: ', (prazo) => {
			lembretes.push({ lembrete: lembrete, prazo: prazo})
			console.log('Lembrete salvo com sucesso. ')
			exibirMenu()
		})
	})
}
function listar () {
	if(lembretes.length > 0) {
	for (let i = 0; i < lembretes.length; i++ )
		console.log(lembretes[i])
		exibirMenu()
	} else {
		console.log('sem lembretes registrados')
		exibirMenu()
	}
}
function editar(){
	if(lembretes == 0){
		console.log('sem lembretes registrados')
		exibirMenu()
	}else{
		rl.question('digite o lembrete que deseja editar:', (opcao) =>{
			if(opcao > 0 && opcao <= lembretes.length){
				rl.question('digite o novo lembrete:',(lembrete) =>{
				rl.question('digite um novo prazo: ', (prazo) =>{
                 lembretes[opcao - 1] = {
					lembrete,
					prazo,
				 }
				 console.log('editado com sucesso')
				 exibirMenu()
				}
				)

				})
			}
		})
	}

exibirMenu()
}

function marcarConcluida() {
	if (lembretes.length <= 0 ) {
		console.log("Não há nada cadastrado")
	} else {
		listar()
		rl.question('Qual lembrete voce deseja marcar como concluido?', (numero) => {
			lembretes[numero].concluido = true
			console.log("Lembrete marcado como concluído")
			exibirMenu()

		})
	}

}