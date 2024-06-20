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
 	        executar()
 	        break;
 	   
 		}
 	})
 }
function listar () {
	for (let i = 0; i < lembretes.length; i++ )
		console.log(lembretes[i])
}
exibirMenu()