/**
 * Created by sukumar on 7/3/2017.
 */
class LoginView {
    constructor() {
        this.elemSignUp = qs('.sign-up');
        this.elemLogin = qs('.login');
        this.elemName = qs('#username');
        this.elemPass = qs('#password');
        this.elemInfoBox = qs('#output');
    }

    signUp(callback) {
        evn(this.elemSignUp, 'click', ()=> {
            var userInfo = {};
            userInfo.name = this.elemName.value;
            userInfo.key = this.elemPass.value;
            callback(userInfo)
        });
    }

    login(callback) {
        evn(this.elemLogin, 'click', ()=> {
            var userInfo = {};
            userInfo.name = this.elemName.value;
            userInfo.key = this.elemPass.value;
            callback(userInfo)
        });
    }

    clearFormFields() {
        qsa('input[type=text]', 'form').forEach((elem)=> {
            elem.value = '';
        })
        qsa('input[type=password]', 'form').forEach((elem)=> {
            elem.value = '';
        })
    }

    updateInfoBox(infoParam, info) {
        if (!Number.isInteger(infoParam)) {
            return
        }
        else if (Number.parseInt(infoParam) == 0) {
            this.elemInfoBox.className = 'alert-danger';
        } else if (Number.parseInt(infoParam) == 1) {
            this.elemInfoBox.className = 'alert-success';
        }
        this.elemInfoBox.innerHTML = info;
        hideShowInfo();
    }
}
