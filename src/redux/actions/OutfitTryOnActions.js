import { CHANGE_OUTFIT } from "../types/OutfitTryOnTypes";

export const changeOutfit = id => ({
    type: CHANGE_OUTFIT,
    id
})