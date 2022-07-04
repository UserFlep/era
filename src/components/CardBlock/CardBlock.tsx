import React, {FC} from 'react';
import styles from "./card-block.module.less"
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

            <Row gutter={[16,16]} className={styles.row}>
                {cardData.cards.map(card=>(
                    <Col span={4} key={card.id} className={styles.col}>
                        <Card
                            className={styles.card}
                            title={<div>{card.cardTitle}</div>}
                            hoverable={true}
                            size="small"
                            extra={<UploadModal/>}
                        >
                            <Link to="/search" className={styles.link}>
                                <img className={styles.img} src={card.icon} alt="картинка"/>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default CardBlock;