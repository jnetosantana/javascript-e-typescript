// ?
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Azul';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
/*const pontuacaoUsuario = 999;
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário Normal')
}*/
