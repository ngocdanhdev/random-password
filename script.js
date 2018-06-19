$(function(){
    var chieudai= 8; 
   $('#length').click(function(){
      chieudai= Number($('[type="range"]').val());
   $('.number').html(chieudai);
     console.log(chieudai)
   })
    $('button').click(function(){
        var password="";
    var chars= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789![]{}()%&*$#^<>~@|" ;
     for(i=0; i< chieudai; i++){
       password += chars.charAt(Math.floor(Math.random()*chars.length));
     }
        console.log(password);
        $('#pas').val(password);
   })
     
   })
   
 $('#pas').click(function(){
    $('#pas').select();
    document.execCommand("copy");
    $(".text").html("Bạn đã copy mật khẩu vào clipboard").css("color","green")
  })
   $('#pas').mouseout(function(){
     $('.text').html('Chọn vào nút random để tạo mật khẩu').css('color','black');
    
 })