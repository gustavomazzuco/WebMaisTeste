var app = angular.module('produtosApp', ['ngRoute', 'ngResource']);

app.service('ProdutosService', function (ProdutosResource) {

    this.listar = function () {
        return ProdutosResource.listar().$promise;
    };
    this.salvar = function (produto) {
        if (produto.id) {
            return ProdutosResource.atualizar({id: produto.id}, produto).$promise;
        } else {
            return ProdutosResource.salvar(produto).$promise;
        }
    };
    this.excluir = function (produto) {
        return ProdutosResource.excluir({id: produto.id}).$promise;
    };

    this.getProduto = function (id) {
        return ProdutosResource.getProduto({id: id}).$promise;
    };

});

app.factory('ProdutosResource', function ($resource) {

    return $resource('http://localhost:8080/api/webresources/produtos/:id', {}, {
        atualizar: {
            method: 'PUT'
        },
        listar: {
            method: 'GET',
            isArray: true
        },
        getProduto: {
            method: 'GET'
        },
        salvar: {
            method: 'POST'
        },
        excluir: {
            method: 'DELETE'
        }
    });
});

app.config(function ($routeProvider) {
    $routeProvider
            .when('/cadastro', {
                templateUrl: 'produtos/cadastro/cadastroProduto.html',
                controller: 'ProdutoCadastroController'
            })
            .when('/edicao/:id', {
                templateUrl: 'produtos/cadastro/cadastroProduto.html',
                controller: 'ProdutoCadastroController'
            })
            .when('/listar', {
                templateUrl: 'produtos/lista/listaProduto.html',
                controller: 'ProdutoListaController'
            })
            .otherwise({
                redirectTo: 'listar'
            });
})