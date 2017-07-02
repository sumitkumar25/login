/**
 * Created by sukumar on 7/3/2017.
 */
class LoginModel {
    constructor(store) {
        this.store = store;
    }

    add(user, success, failure) {
        this.store.addUser(user.name, user.key, success, failure);
    }

    login(user, success, failure) {
        this.store.checkUser(user.name, user.key, success, failure);
    }

}