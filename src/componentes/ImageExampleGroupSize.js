import React from 'react'
import { Image } from 'semantic-ui-react'
import Botoncompra from './Botoncompra'

//const src = 'https://i.blogs.es/6c558d/luna-400mpx/1366_2000.jpg'
const src1 = 'https://www.cienporcientofutbol.cl/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/p/-/p-perso-2.png'
const src2 = 'https://i.pinimg.com/236x/64/b3/88/64b388049e640b36072604eddb3c0c2b.jpg'
const src3 = 'http://www.camisetasfutbol2017.net/bmz_cache/b/b055ff05d647a8556107cfd0f7f1cd4b.image.250x250.jpg'
const src4 = 'https://www.minejerseys.cn/html/upload/item_img/202007/106113/131595229235e7c14bfd.png'
const ImageExampleGroupSize = () => (
    <div>
    
    
    <Image.Group size='small'>


    <div>
        <Image src={src4} />

            <div>
                <Botoncompra/>
            </div>
    </div>

    <div>
        <Image src={src3} />
            <div>
                <Botoncompra/>
            </div>
    </div>
        <div>
        <Image src={src2} />
            <div>
                <Botoncompra/>
            </div>
        </div>
    <div>
        <Image src={src1} />
            <div>
                <Botoncompra/>
            </div>
    </div>  
    </Image.Group>
    </div>
)

export default ImageExampleGroupSize