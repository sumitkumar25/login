/**
 * Created by sukumar on 7/1/2017.
 */
/*import {evn,qs,qsa,delegate} from '../script/util';*/

var store = new LoginStore("users");
var model = new LoginModel(store);
var view = new LoginView();
var controller = new LoginController(model, view);

