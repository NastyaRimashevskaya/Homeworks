function HashStorageFunc() {
        var drinkStorage = {}
        this.addValue = function() { 
        var name = prompt('Введите название напитка')
        var alcohol = confirm('Напиток алкогольный?')
        var recept = prompt('Введите рецепт напитка:') 
        drinkStorage['напиток']= name;
        drinkStorage['алкогольный'] = alcohol;
        drinkStorage['рецепт приготовления'] = recept;
    } 

        this.getValue = function() {     
        var name1 = prompt('Введите название напитка');
         if (name1 == drinkStorage['напиток']) {
        console.log(drinkStorage)
        } else {
        console.log('нет информации о напитке')
        }
    }

        this.deleteValue = function() {
        var name2 = prompt('Введите название напитка')
        if (name2 == drinkStorage['напиток']) {
        delete (drinkStorage)
        console.log('напиток удален')
        } else {
        console.log('нет информации о напитке')
        }
    }

        this.getKeys = function() {
        var arr = [];
        arr.push(drinkStorage['напиток'])
        console.log(arr)
    }

}
   
var a1= new HashStorageFunc();
