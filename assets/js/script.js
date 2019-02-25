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