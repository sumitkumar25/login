/**
 * Created by sukumar on 7/3/2017.
 */
class LoginStore {
    constructor(name, callback) {
        this.name = name;
        const store = localStorage;

        this.setLocalStore = (data)=> {
            store[this.name] = JSON.stringify(data);
        }
        this.getLocalStore = ()=> {
            return JSON.parse(store[this.name] || '[]');
        }
        if (callback) {
            callback();
        }
    }

    inputCheck(name, password) {
        if (!name || !password) {
            return false;
        }
        return true;
    }

    callbackHandler(opState, success, failure) {
        if (opState) {
            success();
            return;
        }
        failure();
    }


    addUser(name, password, success, failure) {
        if (this.inputCheck(name, password)) {
            var data = this.getLocalStore();
            data.push({name: name, key: password});
            this.setLocalStore(data);
            return this.callbackHandler(true, success, failure);
        }
        return this.callbackHandler(false, success, failure);
    }

    checkUser(name, password, success, failure) {
        if (this.inputCheck(name, password)) {
            var data = this.getLocalStore();
            for (var i in data) {
                if (data[i].name == name && data[i].key == password) {
                    return this.callbackHandler(true, success, failure);
                }
            }
        }
        return this.callbackHandler(false, success, failure);
    }
}
