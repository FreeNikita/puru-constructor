import { model } from './model'
import './styles/main.css'

model.forEach( block => {
    let html;
    switch(block.type){
        case 'title':
            html = title(block)
            break
        case 'text':
            html = text(block)
            break
        case 'textColumns':
            html = textColumns(block)
            break
    }

    document.querySelector('#site').insertAdjacentHTML('beforeend', html)
} )

function title(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
    `
}

function text(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `
}

function textColumns(block) {
    return `
        <div class="row">
            ${block.value.map( value => `<div class="col-sm"><p>${value}</p></div>`).join('')}
        </div>
    `
}