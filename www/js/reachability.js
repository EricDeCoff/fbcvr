/**
 * Created by Eric R DeCoff on 12/30/13.
 */
function Reachability(){
    this.IsNotConnected = function(){
        if(navigator.network.connection.type == Connection.NONE || navigator.network.connection.type == Connection.UNKNOWN)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

