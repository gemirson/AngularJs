angular.module("listaTelefonica").factory("operadorasAPI",($http,config)=>{
 
    var _getContacts= ()=> { return $http.get(config + "/operadoras");}

    return {
        getContatos: _getContacts
    };
});