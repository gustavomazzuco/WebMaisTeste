var app = angular.module('produtosApp');
app.controller('ProdutoCadastroController', function ($scope, $location, $routeParams, ProdutosService) {

    $scope.salvar = salvar;
    $scope.cancelar = cancelar;

    listar();

    function listar() {
        var id = $routeParams.id;
        if (id) {
            ProdutosService.getProduto(id).then(function (produto) {
                $scope.produto = produto;
            });
        } else {
            cancelar();
        }
    }

    function salvar(produto) {
        ProdutosService.salvar(produto).then(function () {
            $location.path('/listar');
        });
    }
    
    function cancelar() {
        $scope.produto = {codigo: '', nome: '', preco: '', comentario: '', altura: '', largura: '', profundidade: ''};
    }
});