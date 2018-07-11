import 'babel-polyfill';
class SendForm {
    constructor(selector) {

        this.form = document.querySelector(selector);
        this.method = this.form.getAttribute('method') || 'POST';
        this.action = this.form.getAttribute('action') || 'server.php';

        this.form.addEventListener('submit', event => {
            event.preventDefault();

            this.sendForm();
        });
    }

    sendForm() {
        this.ajaxForm();
    }

    async ajaxForm() {
        const name = this.form.querySelector('input[name="user-name"]').value;
        const email = this.form.querySelector('input[name="email"]').value;
        const message = this.form.querySelector('textarea[name="message"]').value;

        const data = `name=${name}&email=${email}&message=${message}`;

        const res = await fetch(this.action, {
            method: this.method, body: data, headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            }
        });
        const resBody = await res.json();

        if (resBody.status === 'OK') {
            this.showPopup(true, resBody.mes);
        } else {
            this.showPopup(false, resBody.mes);
        }
    }

    showPopup(status, mes) {
        const popup = document.querySelector('#modal');
        const messBlock = popup.querySelector('.modal__text');
        const closeBtn = document.querySelector('.modal__btn');

        if (!status) messBlock.classList.add('modal__text_error');

        messBlock.textContent = mes;
        popup.classList.add('modal__active');
        closeBtn.addEventListener('click', function (event) {
            event.preventDefault();

            const modal = document.querySelector('.modal');
            modal.classList.remove('modal__active');
        });
    }
}

const send = new SendForm('#order-form');