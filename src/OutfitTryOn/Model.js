import React from 'react'
import {useSelector} from 'react-redux'

export default function Model() {

    const {outfit} = useSelector(state => state.OutfitTryOnReducer)

    return (
        <div className="contain">
           <div className="body"></div>
            <div className="model"></div>
            <div className="hairstyle" style={{width: '1000px', height: '1000px', background: `url(${outfit.hairstyle})`, position: 'absolute', top: '-75%', right: '-57%', transform: 'scale(0.15)', zIndex: '4'}}></div>
            <div className="necklace" style={{width: '500px', height: '1000px', background: `url(${outfit.necklaces})`, position: 'absolute', bottom: '-40%', right: '-3.5%', transform: 'scale(0.5)', zIndex: '4'}}></div>
            <div className="bikinitop" style={{width: '500px', height: '500px', background: `url(${outfit.topclothes})`, position: 'absolute', top: '-9%', left: '-5%', zIndex: '3', transform: 'scale(0.5)'}}></div>
            <div className="bikinibottom" style={{width: '500px', height: '1000px', background: `url(${outfit.botclothes})`, position: 'absolute', top: '-30%', left: '-5%', zIndex: '2', transform: 'scale(0.5)'}}></div>
            <div className="handbag" style={{width: '500px', height: '1000px', background: `url(${outfit.handbags})`, position: 'absolute', bottom: '-40%', right: '-3.5%', transform: 'scale(0.5)', zIndex: '4'}}></div>
            <div className="feet" style={{width: '500px', height: '1000px', background: `url(${outfit.shoes})`, position: 'absolute', bottom: '-37%', right: '-3.5%', transform: 'scale(0.5)', zIndex: '1'}}></div>
            <div className="background" style={{backgroundImage: `url(${outfit.background})`}}></div>
          </div>
    )
}
