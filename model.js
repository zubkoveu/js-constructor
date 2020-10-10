import image from './assets/img.png'
import {Block, TitleBlock, ColumnsBlock, ImageBlock, TextBlock} from './classes/block'

const text = 'Perfect site constructor!'

export const model = [
    new Block('title', 'Конструктор сайтов', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: 'white',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new TextBlock(text, {
         styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: 'white',
            padding: '1rem',
            'text-align': 'center',
            'font-wight': 'bold'
         }
    }),

    new ColumnsBlock([
            '1111111',
            '2222222',
            '3333333'
        ], {
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '2rem',
                'text-align': 'center',
                'font-wight': 'bold'
            }
        }),

     {
        type: 'image', value: image, options: {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'Picture'
        }
    }
]
