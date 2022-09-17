(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){


        var Buy = this;
      
        Buy.items = ShoppingListCheckOffService.getToBuyItems();


       
        Buy.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var Bought = this;
        
        Bought.items = ShoppingListCheckOffService.getBoughtItems();


        
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuy = [
            { itemName: "Cookies", itemQuantity: "2 packets" },
            { itemName: "Pepsi", itemQuantity: "2 liters" },
            { itemName: "Cereal", itemQuantity: "2 boxes" },
            { itemName: "Chips", itemQuantity: "2 bags" },
            { itemName: "Pepto Bismol", itemQuantity: "2 bottles" }
        ];

        var alreadyBoughtItems = [];
        
        service.buyItem = function(itemIndex){
            var item = toBuy[itemIndex];

            alreadyBoughtItems.push(item);
            toBuy.splice(itemIndex,1);
        };

        service.getToBuyItems = function() {
            return toBuy;
        }
        service.getBoughtItems = function(){
            return alreadyBoughtItems;

        }
    }
    

})();