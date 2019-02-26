//Event pada saat kita klik 
$('.page-scroll').on('click', function(e) { 
    
    // mengambil isi href
    var tujuan = $(this).attr('href'); 

    // menangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan); 
    
    // pindah scroll
    $('html , body').animate({ scrollTop: elemenTujuan.offset().top - 50 },
        1000, 'easeInOutCubic'
    ); 
    
    e.preventDefault(); 
});

// Paralax
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});



$(window).scroll(function(){
    var wScroll = $(this).scrollTop();


    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    }); 

    //Animasi portofolio
    if( wScroll > $('.portofolio').offset().top -80){
      $('.portofolio .thumbnail').each(function(i){
        setTimeout(function(){
            $('.portofolio .thumbnail').eq(i).addClass('muncul');  
        }, 300 * (i+1));
      });
      
        //
    }
});