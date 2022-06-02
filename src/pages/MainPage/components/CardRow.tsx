import React from 'react';
import {Card, Col, Row, Typography} from "antd"
import Uploader from "./Uploader";
import {Link} from "react-router-dom";

const CardRow = ({cardData}) => {

    return (
        <>
            <Typography.Title level={3}>{cardData.title}</Typography.Title>

            <Row gutter={[16,16]} style={{marginBottom: "0.9em"}}>
                {cardData.cards.map(card=>(
                    <Col span={4} key={card.id} style={{ minWidth: 250}}>
                        <Card
                            style={{background: 'linear-gradient(45deg, #ffffff, #f5f5f5, #ffffff)'}}
                            title={<div>{card.cardTitle}</div>}
                            hoverable={true}
                            size="small"
                            extra={<Uploader/>}
                        >
                            <Link to="/search" style={{display: "flex", alignItems: "center", justifyContent: "center", height: "152px"}}>
                                <img style={{maxWidth: "100%", maxHeight: "150px"}} src={card.icon} alt="картинка"/>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default CardRow;