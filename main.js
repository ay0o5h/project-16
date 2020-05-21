(function($){
$(document).ready(function(){
    $('.navbarr li').on('click' , function (){
        // start navbarr
        $(this).addClass('active').siblings().removeClass('active');
    });
     $('body').css('paddingTop',$('.nav').innerHeight());
    //end navbrr
    // start slider
    if($('.carousel-item').hasClass('active')){
        $('.carousel-caption').fadeIn(000)
    }
   
    // end slider
    // start gallary
    $('.cy').fancybox();
    $('.gallary .btn').on('click' , function (){
        $(this).addClass('active1').siblings().removeClass('active1');
    });
       $(".gallary .bttn").on('click' , function (){
        $('.nuture').fadeIn(1000);
        $('.eng').fadeIn(1000);
        $('.music').fadeIn(1000);
        $('.tech').fadeIn(1000);
       })
       $(".gallary .bttn1").on('click' , function (){
        $('.nuture').fadeOut(1000);
        $('.eng').fadeIn(1000);
        $('.music').fadeOut(1000);
        $('.tech').fadeOut(1000);
    })
    $(".gallary .bttn2").on('click' , function (){
        $('.nuture').fadeIn(1000);
        $('.eng').fadeOut(1000);
        $('.music').fadeOut(1000);
        $('.tech').fadeOut(1000);
    })
    $(".gallary .bttn3").on('click' , function (){
        $('.nuture').fadeOut(1000);
        $('.eng').fadeOut(1000);
        $('.music').fadeIn(1000);
        $('.tech').fadeOut(1000);
    })
    $(".gallary .bttn4").on('click' , function (){
        $('.nuture').fadeOut(1000);
        $('.eng').fadeOut(1000);
        $('.music').fadeOut(1000);
        $('.tech').fadeIn(1000);
    })
    // end gallary
});
// start blog
var btn=document.querySelector('.btn-more');
var btn1=document.querySelector('.hide');
var more=document.querySelector('.more');
function show(){
    if(btn.textContent == 'اضهار المزيد من المقالات') {
        more.style.display='block';
        btn.style.display='none';
    }
}
function hide(){
        more.style.display='none';
        btn.style.display='block';
}
btn.addEventListener('click',show);
btn1.addEventListener('click',hide);
// end blog
// start  contact us
var fname=document.getElementById('inp1'),
    email=document.getElementById('inp2'),
    msg=document.getElementById('inp3'),
    num=document.getElementById('inp4');
    fname.onfocus=function(){
        fname.placeholder=''
    }
    fname.onblur=function(){
        fname.placeholder='الاسم الكامل'
    }
    email.onfocus=function(){
        email.placeholder=''
    }
    email.onblur=function(){
        email.placeholder='الايميل'
    }
    msg.onfocus=function(){
        msg.placeholder=''
    }
    msg.onblur=function(){
        msg.placeholder='الرساله'
    }
    num.onfocus=function(){
        num.placeholder=''
    }
    num.onblur=function(){
        num.placeholder='رقم الجوال'
    }
    // end contact us
})(jQuery)
