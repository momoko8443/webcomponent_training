class HelloWorld extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});
        const style = document.createElement('style');
        style.innerHTML = `
            .hello{
                color:red;
                font-size:32px;
            }
        `
        const div = document.createElement('div');
        div.innerHTML = 'Hello, Webcomponent';
        shadow.appendChild(style);
        shadow.appendChild(div);
    }
}
customElements.define('wc-hello-world',HelloWorld)