/*1. Crie uma função que solicite dois valores ao usuário, um nome e uma senha e
guarde cada um no seu respectivo array.
2. Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer
login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a
opção escolhida pelo usuário.
3. Crie uma função de login e recebe dois valores como parâmetro, um nome e uma
senha, depois procure o nome recebido no array de nomes e em caso positivo
compare a senha no array de senhas. Se as duas comparações forem válidas
retorne true se uma delas não for válida retorne false.
4. Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
então procure pelo nome no array de nomes e exclua ele e a senha correspondente
do outro varray, por fim organize o array para eliminar os espaços vazios.
5. Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere
que o usuário pode escolher quando encerrar o programa conforme as opções e
que no login caso seja bem sucedido retorna uma mensagem “Login feito com
sucesso!” e em caso negativo “Nome ou senha incorretos!*/

var user = []
var senha = []
var indexA = 0
var escolha 
var userA
var senhaA
var userSuporte = []
var indexB = 0
var senhaSuporte = []
var confirmacaoA = true
var confirmacao = false

function Escolha(){
    escolha = prompt('Deseja fazer qual operação ? 1- Cadastro, 2-Login, 3-Excluir um cadastro, 4-Finalizar o programa')
    return escolha
}

function Cadastro(){
    indexA++
}

function Login(user, senha) {
    for(var index = 0; index <= user.length; index++){
        if(user[index] == userA && senha[index] == senhaA){
            var confirmacao = true
        }
    }
    if(confirmacao == true){
        console.log('Login bem sucedido!')
        confirmacao = false
    }else(
        console.log('Usúario ou senha incorretos!')
    )
}

function ExcluirUser(user, senha) {
    for(var index = 0; index <= user.length; index++){
        if(user[index] == userA && senha[index] == senhaA){
            user[index] = 0
            senha[index] = 0
            var confirmacao = true
        }else{
            var confirmacao = false
        }
    }if(confirmacao == true){
        for(var index = 0; index <= user.length; index++){
            if(user[index] != 0){
                userSuporte[indexB] = user[index]
                senhaSuporte[indexB] = senha[index]
                indexB++
            }
        }
    }else(confirmacao == false);{
        console.log('Usúario ou senha incorretos')
    }
}

while(confirmacaoA){
    Escolha()
    if(escolha == 1){
        user[indexA] = prompt('Digite um usúario: ')
        senha[indexA] = prompt('Digite sua senha: ')
        Cadastro()
    } else if(escolha == 2){
        userA = prompt('Informe seu usúario: ')
        senhaA = prompt('Informe sua senha: ')
        Login(user, senha)
    } else if(escolha == 3){
        ExcluirUser(user, senha)
        userA = prompt('Informe o usúario a ser excluido: ')
        senhaA = prompt('Informe a senha para confirmação: ')
        confirmacao = false
    } else if(escolha == 4){
        confirmacaoA = false 
    }
}