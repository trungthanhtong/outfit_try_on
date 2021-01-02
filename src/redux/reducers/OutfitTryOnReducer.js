import { CHANGE_OUTFIT } from "../types/OutfitTryOnTypes";
import data from '../../OutfitTryOn/data/Data.json'

const outfitList = data.tabPanes;

const initialState = {
    outfit: {
        hairstyle: '../assets/images/hairstyle/hairstyle3.png',
        necklaces:'../assets/images/necklaces/necklace3.png',
        topclothes:'../assets/images/clothes/topcloth5.png',
        botclothes:'../assets/images/clothes/botcloth4.png',
        handbags:'../assets/images/handbags/handbag2.png',
        shoes:'../assets/images/shoes/shoes2.png',
        background:'../assets/images/background/background1.jpg'
    }
}

const OutfitTryOnReducer =  (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_OUTFIT: {
            let newOutfit = outfitList.find(item => item.id === action.id);
            console.log(newOutfit);
            state.outfit = {
                ...state.outfit,
                [newOutfit.type]: newOutfit.imgSrc_png,
            }
            return {...state}
        }
        default: return {...state}
    }
}

export default OutfitTryOnReducer;
