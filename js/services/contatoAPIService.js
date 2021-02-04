angular.module("listaTelefonica").factory("contatosAPI",($http,config)=>{
 
    var _getContacts= ()=> {
        return $http.get(config + "/Contatos");}

    var _saveContacts= (contato)=> {
        return $http.post( config + "/Adicionar",contato);
    }

    return {
        getContatos: _getContacts,
        saveContato: _saveContacts
    };
});