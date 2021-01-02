import React from 'react'
import Model from './Model'
import OutfitList from './OutfitList'
import './OutfitTryOn.css'

export default function OutfitTryOn() {
    return (
        <div className="container-fluid">
            <h3 className="display-4 text-center">Fitting Room</h3>
            <div className="row">
                <div className="col-8">
                    <OutfitList/>
                </div>
                <div className="col-4">
                    <Model/>
                </div>
            </div>
        </div>
    )
}
