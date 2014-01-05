/**
 * Created by Eric R DeCoff on 1/2/14.
 */
function getLike(url){
    console.log('getLike');
    try {
        var xhr = new XMLHttpRequest();
        xhr.open ("GET", url);
        xhr.send ();

        xhr.onreadystatechange = function (event){
            //alert (xhr.responseText);
            try {
                switch (xhr.readyState) {
                    case 0: // UNSENT
                        break;
                    case 1: // OPENED
                        break;
                    case 2: // HEADER RECEIVED
                        break;
                    case 3: // LOADING
                        break;
                    case 4: // DONE
//								alert('DONE')
//								alert (xhr.statusText);
//								alert (xhr.status);
//								alert (xhr.responseText)
                        if (xhr.status == 200){
                            $('#fbIframeLike').css('visibility','visible');
                        }
//								onsuccuss (xhr.responseText, xhr.statusText, xhr.status);
                        break;
                    default:
                        break;
                }
            }
            catch (e){
                alert('error')
            }
        }
    }
    catch(e) {
        console.log('getLike(ERROR)');
        alert('Error');
    }
}
