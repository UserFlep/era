// import classes from "./styles/main-page.module.less"
import React from 'react';
import {hydroAcousticCards, imageCards, radioInfoCards, speechAndTextCards} from "./data/cardData";
import CardRow from "./components/CardRow";

const MainPage = () => {

    return (
        <div>
            <CardRow cardData={imageCards}/>
            <CardRow cardData={radioInfoCards}/>
            <CardRow cardData={hydroAcousticCards}/>
            <CardRow cardData={speechAndTextCards}/>
        </div>
    );
};

export default MainPage;