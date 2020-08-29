export function row(content, styles = '') {
    const style = `margin: 0; ${styles}`
    return `<div class="row" style="${style}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function toCss(styles = {}){
    return Object.entries(styles).map(([key, value]) => `${key}: ${value}`).join(';')
}