function placeAnOrder(orderNumber){
    console.log('Reveived order number:  ',orderNumber);

    // cookAndDeliverFood(function(){
    //   console.log('Delivered the foold for order: ',orderNumber);
    // });

    setTimeout(function(){
      console.log('Delivered the foold for order: ',orderNumber);
    },5000);
}


function cookAndDeliverFood(callBack){
    setTimeout(callBack,5000);
}



placeAnOrder('1');
placeAnOrder('2');
placeAnOrder('3');
placeAnOrder('4');
