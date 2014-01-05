/**
 * Created by Eric R DeCoff on 1/2/14.
 */
function showPage(page){
    console.log('showPage('+page+')');
    console.log('hiding div[data-page]');
    $('div[data-page]').hide();
    console.log('showing div[data-page="'+page+'"]');
    $('div[data-page="'+page+'"]').show();
    console.log('div[data-page="'+page+'"]');
    $('.ui-btn-active').removeClass('.ui-btn-active');
}
