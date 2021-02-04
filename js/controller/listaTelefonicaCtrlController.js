angular
  .module("listaTelefonica")
  .controller("listaTelefonicaCtrl", ($scope, $http, contatosAPI) => {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatosAsync = () => {
      contatosAPI.getContatos().then(function (response) {
        $scope.contatos = response.data;
      });
    };

    var carregarOperadorasAsync = () => {
      $http.get("https://localhost:44335/api/Operate/operadoras").then(function (response) {
        $scope.operadoras = response.data;
        console.log(response.data);
      });
    };

    $scope.adicionaContato = (contato) => {
      contato.data= new Date()
      contatosAPI.saveContato(contato).then(function (response) {
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        carregarContatosAsync();
      });
     
    };

    $scope.apagarContato = (contatos) => {
      $scope.contatos = contatos.filter((contato) => {
        if (!contato.selecionado) return contato;
      });
    };
    $scope.isContatoSelecionado = function (contatos) {
      return contatos.some(function (contato) {
        return contato.selecionado;
      });
    };
    carregarContatosAsync();
    carregarOperadorasAsync();
  });
