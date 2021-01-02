import React from "react";
import data from "./data/Data.json";
import { useSpring, useSprings } from "react-spring";
import Outfit from "./Outfit";

const { navPills, tabPanes } = data;

export default function OutfitList(props) {

    const renderItem = (type) => {
        return tabPanes.map((item, index) => {
            if (item.type === type) {
                return (
                    <Outfit key={index} outfit={item}/>
                );
            }
            return '';
        });
    };

    return (
        <div>
            <div>
                <ul className="nav nav-pills">
                    {navPills.map((item, index) => {
                        let active = index === 0 ? "active" : "";
                        return (
                            <li className="nav-item" key={index}>
                                <a
                                    className={`nav-link btn-default ${active}`}
                                    data-bs-toggle="pill"
                                    href={`#${item.tabName}`}
                                >
                                    {item.showName}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className="well">
                    <div className="tab-content">
                        {navPills.map((tab, index) => {
                            let active = index === 0 ? "active" : "";
                            return (
                                <div
                                    key={index}
                                    className={`tab-pane container ${active}`}
                                    id={tab.tabName}
                                >
                                    <div className="container">
                                        <div className="row">
                                            {renderItem(tab.type)}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
