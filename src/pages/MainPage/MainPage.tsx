//import classes from "./main-page.module.less"
import React, {FC} from 'react';
import {hydroAcousticCards, imageCards, radioInfoCards, speechAndTextCards} from "./data";
import CardBlock from "../../components/CardBlock/CardBlock";

const MainPage: FC = () => {

    return (
        <div>
            <CardBlock cardData={imageCards}/>
            <CardBlock cardData={radioInfoCards}/>
            <CardBlock cardData={hydroAcousticCards}/>
            <CardBlock cardData={speechAndTextCards}/>
        </div>
    );
};

export default MainPage;