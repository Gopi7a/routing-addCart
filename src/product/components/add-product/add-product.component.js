angular.module('shoppingcart.product')
    .controller('AddProductCtrl',['ProductService',function(ProductService){
        this.newProduct = {};
        this.onFormSubmit = function(e){
            e.preventDefault();
            ProductService.addProduct(this.newProduct)
                            .then(function(){
                                   alert('added'); 
                            })
        }
    }])
    .component('addProduct', {
        templateUrl: 'src/product/components/add-product/add-product.component.html',
        controller: 'AddProductCtrl'
    });