angular.module('listaTelefonica', []);
angular.module('listaTelefonica').controller("listaTelefonicaCtrl", function($scope){
    $scope.titulo = "Lista Telefonica";
    // console.log($scope.titulo);

    $scope.contatos = [
        {nome: "Jonathan Moreira", telefone: "988770099"},
        {nome: "Lídia Araújo", telefone: "933224455"},
        {nome: "Luna Andrade", telefone: "977550011"},
    ];
    // console.log($scope.contatos);
    
});