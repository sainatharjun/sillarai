$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel("pause");
    
  // Enable Carousel Controls
  // $(".left").click(function(){
  //   $("#myCarousel").carousel("prev");
    
  // });
  // $(".right").click(function(){
  //   $("#myCarousel").carousel("next");
  // });
  $('#gpayRadio').prop('checked',true);
  showPaymentForms('gpay');

  $('#ccnumfield').addClass('formcontrol')
  
  if (navigator.appVersion.indexOf("Mac") != -1)
  {
    //alert("hi")
    $('#appleDiv').remove();
    $('.osSpecific').remove();
  }

});

$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});

function showPaymentForms(ele){
  var gpay=$('#googleDiv').html();
  var apple=$('#appleDiv').html();
  var credit=$('#creditDiv').html();
  var ach=$('#achDiv').html();
  var temp="";
  if(ele=='gpay'){
   temp=gpay;
   $('#gpayRadio').prop('checked',true)
  }
  else if(ele=='apple'){
   temp=apple;
   $('#appleRadio').prop('checked',true)
  }
  else if(ele=='credit'){
   temp=credit;
   $('#creditRadio').prop('checked',true)
  }
  else if(ele=='ach'){
   temp=ach;
   $('#achRadio').prop('checked',true)
  }
 
  $('#payForm').html(temp)
}

$('.num').keypress(function (event) {
    var keycode = event.which;
    if (!(event.shiftKey == false && (keycode == 46 || keycode == 8 || keycode == 37 || keycode == 39 || (keycode >= 48 && keycode <= 57)))) {
        event.preventDefault();
    }
    if($('.card-no').val().length>=4){
      $(this).next('.card-no').focus();
    }
    if($('#cvv').val().length>=4){
      event.preventDefault();
    }
    
});



// $(document).ready(function(){
//             $(".card-no").keyup(function () {
//                 $this=$(this);
//                 if ($this.val().length >=$this.data("maxlength")) {
//                   if($this.val().length>$this.data("maxlength")){
//                     $this.val($this.val().substring(0,4));
//                   }
//                   $this.next(".card-no").focus();
//                 }
//              });
//         });
$("#myCarousel").carousel("pause");
setInterval(function(){ $("#myCarousel").carousel("pause");}, 10);