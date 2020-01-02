// var favoritesModule = (function(option) {

//     var _favorites_dictionary = {};

//     function _add(i_data){
//         _favorites_dictionary['test'] = i_data;
//         console.log(_favorites_dictionary);
//         console.log(i_data);
//     }

//     function _remove(){

//     }

//     function _show(){
//         test_function(_favorites_dictionary);
//     }
    
//     return {
//         add: _add,
//         _remove: _remove,
//         show: _show
//     }

//   }());

var _favorites_dictionary = [];

    function _add(i_data){
        _favorites_dictionary.push(i_data);
        console.log(_favorites_dictionary);
        console.log(i_data);
    }

    function _remove(){

    }

    function _show(){
        test_function(_favorites_dictionary);
    }