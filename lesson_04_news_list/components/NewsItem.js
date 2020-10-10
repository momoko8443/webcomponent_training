class NewsItem extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});
        const templateDOM = document.getElementById('newsItem');
        
        const cloneTemplate = templateDOM.content.cloneNode(true);
        const style = document.createElement('style');
        style.innerHTML = `
            :host{
                display:flex;
                flex-direction:row;
            }
            .title{
                font-size:32px;
            }
            .flex-hbox{
                display:flex;
                flex-direction:row;
            }
            .flex-vbox{
                display:flex;
                flex-direction:column;
            }
            .avatar{
                margin-top:10px;
                width:50px;
                height:50px;
                border-radius: 50%;
                border: 1px solid grey;
            }
            .author, .publish-date{
                color:grey;
            }
            .abstract{
                font-size:16px
            }
            .like, .comments, .share{
                color:cornflowerblue
            }
            .h-gap-20{
                padding-left:20px
            }
        `
        shadow.appendChild(style);
        shadow.appendChild(cloneTemplate);
    }
    static get observedAttributes() {
        return ['news'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if(name === "news"){
            if(newVal){
                const news = JSON.parse(newVal);
                this.render(news);
            }
        }
    }

    render(news){
        this.shadowRoot.querySelector('.avatar').src = news.avatar;
        this.shadowRoot.querySelector('.title').innerHTML = news.title;
        this.shadowRoot.querySelector('.author').innerHTML = news.author;
        this.shadowRoot.querySelector('.publish-date').innerHTML = news.publishDate;
        this.shadowRoot.querySelector('.abstract').innerHTML = news.abstract;
    }
}
customElements.define('news-item',NewsItem)