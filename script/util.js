/**
 * Created by sukumar on 7/2/2017.
 */
var evn = (elem, type, handler)=> {
    "use strict";
    elem.addEventListener(type, handler)
}
var qs = (elem, scope)=> {
    "use strict";
    return (document || scope).querySelector(elem);
}
var qsa = (elem, scope)=> {
    "use strict";
    return (document || scope).querySelectorAll(elem);
}
var delegate = (elem, type, handler, delegate)=> {
    "use strict";
    var delegateHandler = (e)=> {
        var eventOn = e.target;
        var execute = Array.prototype.indexOf.call(qsa(elem, delegate), eventOn) > -1;
        console.log(execute);
        if (execute) {
            handler.call(eventOn);
        }
        evn(delegate, type, delegateHandler);
    }
}
const output = qs('#output');
var hideShowInfo = ()=> {
    output.style.display = 'block';
    window.setTimeout(()=> {
        "use strict";
        output.style.display = 'none';
    }, 3000)
}
/*
 export {evn,qs,qsa,delegate}*/
