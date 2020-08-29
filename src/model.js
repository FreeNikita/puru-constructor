import image from './assets/image.png'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'
import {toCss} from "./utils";

export const model = [
    new TitleBlock('Website Builder In Javascript!', {
        tag: 'h2',
        styles: toCss({
            background: "linear-gradient(to right, #ff0099, #493240)",
            color: "#fff",
            padding: "1.5rem",
            "text-align": "center",
        }),
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0;display: flex;justify-content: center;',
        alt: 'my image',
        imageStyles: toCss({
            width: "500px",
            height: 'auto',
        })
    }),
    new TextColumnsBlock([
        'A closure is the combination of a function and the lexical environment within which that function was declared.',
        'An overview for those who think they know about JavaScript.',
        'Strict mode defines that you can not use any variable before initializing it. It is a restricted variant of ECMAScript 5, for faster performance and easier debugging.'
    ], {
        styles: toCss({
            padding: '2rem 0',
            color: "#fff",
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            'font-weight': "bold",
        })
    }),
    new TextBlock('JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. ', {
        styles: toCss({
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            'font-weight': "bold",
            padding: '1rem'
        }),
    })
]