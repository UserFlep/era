//import classes from "./main-page.module.less"
import React, {FC} from 'react';
import {hydroAcousticCards, imageCards, radioInfoCards, speechAndTextCards} from "./data/cardData";
import CardRow from "./components/CardRow";

const Index: FC = () => {

    return (
        <div>
            <CardRow cardData={imageCards}/>
            <CardRow cardData={radioInfoCards}/>
            <CardRow cardData={hydroAcousticCards}/>
            <CardRow cardData={speechAndTextCards}/>
        </div>
    );
};

export default Index;