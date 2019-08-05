// import react library from react
import React from 'react';

// Class Product that writes to the html
export class Product extends React.Component {
    render() {
        // Object with my picture sources
        let pictures = {
            pic_1:'https://upload.wikimedia.org/wikipedia/en/7/7e/Mortal_Kombat_11_cover_art.png',
            pic_2:'https://upload.wikimedia.org/wikipedia/en/8/81/Skull_%26_Bones_video_game.jpg',
            pic_3:'https://upload.wikimedia.org/wikipedia/en/a/af/Cover_Art_of_Metro_Exodus.png'
        };
        // Object with my product prices
        let prices = {
            price_1:"R1099,90",
            price_2:"R999,90",
            price_3:"R899.90"
        };
        return (
            // Main div that holds all informtion
            <div  >
                <div className="pics">
                    {/* image with source of picture 1 */}
                    <img src={pictures.pic_1} alt=""/>
                    {/* price tag with the price of object 1 */}
                    <h4 className='prices'>{prices.price_1}</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore tenetur ad accusamus optio fugit, aut ducimus accusantium, autem asperiores vitae impedit et sit voluptas. Facere in veritatis accusantium recusandae incidunt!</p>
                </div>
                <div className="pics">
                    <img src={pictures.pic_2} alt=""/>
                    <h4 className='prices'>{prices.price_2}</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore tenetur ad accusamus optio fugit, aut ducimus accusantium, autem asperiores vitae impedit et sit voluptas. Facere in veritatis accusantium recusandae incidunt!</p>
                </div>
                <div className="pics">
                    <img src={pictures.pic_3} alt=""/>
                    <h4 className='prices'>{prices.price_3}</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore tenetur ad accusamus optio fugit, aut ducimus accusantium, autem asperiores vitae impedit et sit voluptas. Facere in veritatis accusantium recusandae incidunt!</p>
                </div>
            </div>
        )
    }
}