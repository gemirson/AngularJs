angular.module("listaTelefonica",["ngMessages"]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl",($scope)=>{
 $scope.app="Lista Telefonica"
 $scope.contatos=[
     {nome:"Pedro",telefone:"999999999", data: new Date(), cor:"blue"  ,operadora:{nome:"Oi",codigo:31}  },
     {nome:"João", telefone:"999912345", data: new Date(), cor:"yellow",operadora:{nome:"Vivo",codigo:15}},
     {nome:"Maria",telefone:"999954321", data: new Date(), cor:"green" ,operadora:{nome:"Tim",codigo:41} }
 ];
 $scope.operadoras= [
     {nome:"Oi",codigo:31},
     {nome:"Vivo",codigo:15},
     {nome:"Tim",codigo:41}
 ];
 $scope.adicionaContato = (contato)=>{
     $scope.contatos.push(angular.copy(contato));
     delete $scope.contato;
     $scope.contatoForm.$setPristine();
 };
 $scope.apagarContato = (contatos)=>{
  $scope.contatos = contatos.filter((contato)=>{
    if (!contato.selecionado) return contato;
  });
}
 $scope.isContatoSelecionado =  function (contatos){
   return contatos.some((contato)=>{
       return contato.selecionado;
   });
 };  
    
});