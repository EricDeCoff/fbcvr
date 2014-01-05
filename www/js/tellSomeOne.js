/**
 * Created by Eric R DeCoff on 1/2/14.
 */
function tellSomeone(subject,body){
    console.log('tellSomeone');
    var extras = {};
    extras[WebIntent.EXTRA_SUBJECT] = subject;
    extras[WebIntent.EXTRA_TEXT] = body;
    window.plugins.webintent.startActivity({
            action: WebIntent.ACTION_SEND,
            type: 'text/plain',
            extras: extras
        },
        function() {},
        function() {
            alert('Failed to send email via Android Intent');
        }
    );
};
