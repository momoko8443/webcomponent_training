class UserCard extends HTMLElement{
    constructor(){
        super();
        this._info = null;
        const shadow = this.attachShadow({mode:'open'});
        const style = document.createElement('style');
        style.innerHTML = `
            div{
                color:blue;
                font-size:32px;
                border: 1px solid blue;
                display: flex;
                flex-direction: column;
            }
        `
        const container = document.createElement('div');
        const nameSpan = document.createElement('span');
        nameSpan.id = 'name';
        const ageSpan = document.createElement('span');
        ageSpan.id = 'age';
        const btn = document.createElement('button');
        btn.id = 'btn';
        btn.innerHTML = 'click me';
        btn.addEventListener('click', ()=>{
            const event =  new CustomEvent('myevent',{
                detail:{
                    message: `hello, ${this._info.name}`
                }
            })
            this.dispatchEvent(event);
        })
        container.appendChild(nameSpan);
        container.appendChild(ageSpan);
        container.appendChild(btn);
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
    static get observedAttributes() {
        return ['info'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if(name === "info"){
            if(newVal){
                this._info = JSON.parse(newVal);
                this.render();
            }
        }
    }
    render(){
        if(this._info){
            this.shadowRoot.querySelector('#name').innerHTML = `Username: ${this._info.name}`;
            this.shadowRoot.querySelector('#age').innerHTML = `Age: ${this._info.age}`;
        }
    }
}
customElements.define('wc-user-card',UserCard);