import React, {FC} from 'react';
import classes from "./card-block.module.less"
import {Card, Col, Row, Typography} from "antd"
import UploadModal from "../UploadModal/UploadModal";
import {Link} from "react-router-dom";
import {ICardsBlock} from "../../types/card"

interface IProps{
    cardData: ICardsBlock
}

const CardBlock: FC<IProps> = ({cardData}) => {

    return (
        <>
            <Typography.Title level={3}>{cardData.title}</Typography.Title>

            <Row gutter={[16,16]} className={classes.row}>
                {cardData.cards.map(card=>(
                    <Col span={4} key={card.id} className={classes.col}>
                        <Card
                            className={classes.card}
                            title={<div>{card.cardTitle}</div>}
                            hoverable={true}
                            size="small"
                            extra={<UploadModal/>}
                        >
                            <Link to="/search" className={classes.link}>
                                <img className={classes.img} src={card.icon} alt="картинка"/>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default CardBlock;