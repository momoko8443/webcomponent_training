class SayHello extends HTMLElement{
    constructor(){
        super();
        this._username = '';
        const shadow = this.attachShadow({mode:'open'});
        const style = document.createElement('style');
        style.innerHTML = `
            div {
                color:red;
                font-size:32px;
                border: 1px red solid;
            }
        `
        const div = document.createElement('div');
        shadow.appendChild(style);
        shadow.appendChild(div);
    }
    static get observedAttributes() {
        return ['username'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if(name === "username"){
            if(newVal){
                this._username = newVal;
                this.render();
            }
        }
    }
    render(){
        if(this._username){
            this.shadowRoot.querySelector('div').innerHTML = `Hello, ${this._username}`;
        }
    }
}
customElements.define('wc-say-hello',SayHello)
