class NewsList extends HTMLElement{
   
    constructor(){
        super();
        this.renderItem = '';
        this.items = null;
        const shadow = this.attachShadow({mode:'open'});
        const templateDOM = document.getElementById('newsList');
        
        const cloneTemplate = templateDOM.content.cloneNode(true);
        const style = document.createElement('style');
        style.innerHTML = `
            .list-container{
                display:flex;
                flex-direction:column;
            }
            .v-gap-20{
                padding-top:20px;
            }
            
            
        `
        shadow.appendChild(style);
        shadow.appendChild(cloneTemplate);

        const slot = shadow.querySelector('slot');
        this.renderItemClassName = slot.className;

        slot.addEventListener('slotchange',(event)=>{
            const children = event.target.assignedElements();
            children.forEach(child => {
                if (child.slot === 'renderItem') {
                    this.renderItem = child.localName;
                    
                    this.render();
                }
            });
        });
            
    }
    static get observedAttributes() {
        return ['newslist'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if(name === "newslist"){
            if(newVal){
                this.items = JSON.parse(newVal);
                this.render();
            }
        }
    }

    render(){ 
        if(this.items && this.renderItem){
            const listContainer = this.shadowRoot.querySelector('.list-container');
            listContainer.innerHTML = '';
            this.items.forEach((item)=>{
                const newItemElm = document.createElement(this.renderItem);
                newItemElm.setAttribute('news',JSON.stringify(item));
                newItemElm.className = this.renderItemClassName;
                listContainer.appendChild(newItemElm);
            })
        }
    }


}
customElements.define('news-list',NewsList)