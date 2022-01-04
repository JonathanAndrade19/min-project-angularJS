angular.module('listaTelefonica', []);
angular.module('listaTelefonica').controller("listaTelefonicaCtrl", function($scope){
    $scope.titulo = "Lista Telefonica";

    $scope.contatos = [
        {nome: "Jonathan Moreira", telefone: "988770099"},
        {nome: "Lídia Araújo", telefone: "933224455"},
        {nome: "Luna Andrade", telefone: "977550011"},
    ];

    $scope.operadoras = [
        {nome: "Oi", codigo: "14"},
        {nome: "Vivo", codigo: "15"},
        {nome: "Claro", codigo: "44"},
        {nome: "Tim", codigo: "41"}
    ]
    
    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };
});