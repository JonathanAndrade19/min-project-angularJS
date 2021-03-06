angular.module('listaTelefonica', []);
angular.module('listaTelefonica').controller("listaTelefonicaCtrl", function($scope){
    $scope.titulo = "Lista Telefonica";

    $scope.contatos = [
        {nome: "Jonathan Moreira", telefone: "988770099", cor: "blue"},
        {nome: "Lídia Araújo", telefone: "933224455", cor: "red"},
        {nome: "Luna Andrade", telefone: "977550011", cor: "black"},
    ];

    $scope.operadoras = [
        {nome: "Oi", codigo: "14", categoria: "Celular"},
        {nome: "Vivo", codigo: "15", categoria: "Celular"},
        {nome: "Claro", codigo: "44", categoria: "Celular"},
        {nome: "Tim", codigo: "41", categoria: "Celular"},
        {nome: "GVT", codigo: "25", categoria: "Fixo"},
        {nome: "Embratel", codigo: "21", categoria: "Fixo"}
    ]
    
    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter( function (contato){
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato){
            return contato.selecionado;
        });
    }
});