/**
 * Created by sukumar on 7/3/2017.
 */
class LoginController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.signUp(this.addNewItem.bind(this));
        this.view.login(this.login.bind(this));
        this.loginSuccessRedirect = '../index.html';
    }

    addNewItem(user) {
        this.model.add(user, this.signUpSuccess.bind(this), this.signUpFailure.bind(this));
        this.view.clearFormFields();
    }

    login(user) {
        this.model.login(user, this.loginSuccess.bind(this), this.loginFailure.bind(this))
    }

    signUpSuccess() {
        this.view.updateInfoBox(1, "sign up success");
    }

    signUpFailure() {
        this.view.updateInfoBox(0, "sign up failure");
    }

    loginSuccess(username) {
        this.view.updateInfoBox(1, "login success");
        window.setTimeout(()=> {
            window.location.href = this.loginSuccessRedirect + "?username=" + username;
        }, 2000)
    }

    loginFailure() {
        this.view.updateInfoBox(0, "login failed username or password incorrect");
    }
}
