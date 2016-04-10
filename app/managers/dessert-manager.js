var app = angular.module('desserts',[]);

app.value('DessertValues',{
    pies : [
        {flavor : "Cherry", score : 6},
        {flavor : "Apple", score : 7},
        {flavor : "Peach", score : 4}
    ]
});


app.factory('DessertManager',function(){
   return {
        pieFlavors : function(dessertValues){
            return dessertValues.pies.map(function(pie){
               return pie.flavor; 
            });
        }
    };  
});

   