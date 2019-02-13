var app = angular.module('produtosApp');
app.controller('ProdutoListaController', function ($scope, $location, ProdutosService) {

    $scope.produto = [];

    $scope.editar = editar;
    $scope.excluir = excluir;

    listar();

    function listar() {
        ProdutosService.listar().then(function (produtos) {
            $scope.produtos = produtos;
        });
    }
    
    function editar(produto) {
        $location.path('/edicao/' + produto.id);
    }

    function excluir(produto) {
        ProdutosService.excluir(produto).then(listar);
    }
    
});

