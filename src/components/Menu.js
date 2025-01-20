import { Divider, Row, Col, Image, Card } from 'antd';
import { useEffect, useState } from 'react';

const { Meta } = Card;

const row_style = {
    padding: '8px 8px',
    textAlign: 'center',
    justifyContent: 'center',
};

const col_style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 'fit-content'
};

const imageStyle = {
    maxWidth: '100%',
    height: '190px',
    objectFit: 'cover',
};

const textPriceStyle = {
    color: '#ee4d2d',
    fontSize: '16px',
    fontWeight: 'bold',
};

const products = [
    {
        "name": "Dante's Inferno",
        "price": 400,
        "img": "S__32243715_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "28",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Cereal Milk",
        "price": 300,
        "img": "S__32243717_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "25",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Milk Cookies",
        "price": 350,
        "img": "S__32243718_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "25",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "GMO (Garlic Cookies)",
        "price": 350,
        "img": "S__32243719_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 20,
        "indica": 80,
        "thc": "29",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "The Queen 31",
        "price": 250,
        "img": "S__32243720_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 80,
        "indica": 20,
        "thc": "28",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Gelato #33",
        "price": 250,
        "img": "S__32243721_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "25",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Gas Mac",
        "price": 250,
        "img": "S__32243722_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "25-30",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Cookies and Cream",
        "price": 250,
        "img": "S__32243723_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 80,
        "indica": 20,
        "thc": "32",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Tropicana cherry",
        "price": 300,
        "img": "S__31547412.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 60,
        "indica": 40,
        "thc": "25",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Super Boof",
        "price": 300,
        "img": "S__31547411.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 50,
        "indica": 50,
        "thc": "32",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Blueberry Pie Oreoz",
        "price": 400,
        "img": "S__31547409.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 30,
        "indica": 70,
        "thc": "30",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Sugar Cane",
        "price": 250,
        "img": "S__10944553_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 60,
        "indica": 40,
        "thc": "28",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Grinder",
        "price": 250,
        "img": "grinder2.jpg",
        "cate": "item"
    },
    {
        "name": "Toppuff",
        "price": 250,
        "img": "top_puff2.jpg",
        "cate": "item"
    },
    {
        "name": "Bamboo",
        "price": 200,
        "img": "Bamboo.jpg",
        "cate": "item"
    },
    {
        "name": "paper",
        "price": 120,
        "img": "paper_roll.jpg",
        "cate": "item"
    },
    {
        "name": "-",
        "price": 100,
        "img": "S__151994378_0.jpg",
        "cate": "item"
    },
    {
        "name": "Pipe",
        "price": 180,
        "img": "Pipe.jpg",
        "cate": "item"
    },
    {
        "name": "Green Crack Pack",
        "price": 450,
        "img": "green_crack_pack.jpg",
        "cate": "stick"
    },
    {
        "name": "อัดแท่ง 100 G",
        "price": 550,
        "img": "stick1.jpg",
        "cate": "stick"
    },
    {
        "name": "อัดแท่ง เขียวๆ",
        "price": 100,
        "img": "stick2.jpg",
        "cate": "stick"
    },
    {
        "name": "roll",
        "price": 200,
        "img": "roll1.jpg",
        "cate": "roll"
    },
    {
        "name": "บ้องแก้ว",
        "price": 600,
        "img": "bong_3.jpg",
        "cate": "item"
    },
    {
        "name": "บ้องแก้ว",
        "price": 1000,
        "img": "bong1000.jpg",
        "cate": "item"
    },
    {
        "name": "บ้องแก้ว",
        "price": 1200,
        "img": "1714305877218.jpg",
        "cate": "item"
    },
    {
        "name": "TOPPUFF",
        "price": 160,
        "img": "toppuff.jpg",
        "cate": "item"
    },
    {
        "name": "Grinder",
        "price": 350,
        "img": "grinder.jpg",
        "cate": "item"
    },
    {
        "name": "Paper",
        "price": 120,
        "img": "paper_roll.jpg",
        "cate": "item"
    },
    {
        "name": "Paper",
        "price": 60,
        "img": "paper2.jpg",
        "cate": "item"
    },
    {
        "name": "Paper",
        "price": 60,
        "img": "paper3.jpg",
        "cate": "item"
    },
    {
        "name": "Paper",
        "price": 60,
        "img": "paper4.jpg",
        "cate": "item"
    }
];


function Menu() {
    // const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cardWidth, setCardWidth] = useState(150); // * Default = 240
    const [responsiveSpan, setResponsiveSpan] = useState(12);
    const [productList, setProductList] = useState([]);



    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                console.log("Mobile")
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                console.log("Tablet")
            } else {
                console.log("Desktop")
            }
            // setWindowWidth(window.innerWidth);
        };

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Define the sorting order of categories
        const categoryOrder = ['flower', 'trim', 'roll', 'stick', 'item'];

        // Sort the items array by category
        const sortedItems = products.sort((a, b) => {
            const indexA = categoryOrder.indexOf(a.cate);
            const indexB = categoryOrder.indexOf(b.cate);
            return indexA - indexB;
        });
        // Sort flower , trim , roll , stick , items

        // const filteredItems = sortedItems.filter(item => {
        //     // Add cut items is not images
        //     return item.cate !== 'item';
        // });

        setProductList(sortedItems);
        // console.log(products)

    }, []);

    return (
        <>
            <Divider orientation="center" className='menu-divider'>Menu Bottom </Divider>
            <Row gutter={[
                {
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }, 24]} style={row_style} className='row-items'>
                {productList.map((item, idx) =>
                    <Col className="gutter-row" span={responsiveSpan} key={idx} style={col_style}>
                        <Card
                            hoverable
                            style={{
                                width: cardWidth,
                            }}
                            cover={<Image src={require(`../assets/images/products/` + item.img)} style={imageStyle} loading="lazy" />}
                        >

                            {item.name !== '' ?
                                <Meta title={item.name} description={<span className='text-price' style={textPriceStyle}>{item.price + ' ฿'} </span>} />
                                :
                                <Meta title={<br></br>} description={<br></br>} />
                            }

                            {
                                item.desc ?
                                    <span title={''} style={{ color: 'rgb(78, 47, 255)' }}>* {item.desc} </span> :
                                    ''
                            }


                            {
                                item.santiva || item.indica !== '' ?
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '5px 0px' }}>
                                        <span style={{ display: item.santiva ? '' : 'none', borderRight: item.indica ? 'green 1px solid' : '' }}>Santiva {item.santiva} %</span>
                                        <span style={{ display: item.indica ? '' : 'none' }}>Indica {item.indica} %</span>

                                        {/* <span title={''} description={item.santiva ? `Santiva : ${item.santiva} %` : ''} style={{ padding: '5 0px' }} />
                                        <span title={''} description={item.indica ? `Indica : ${item.indica} %` : ''} style={{ padding: '5 0px' }} /> */}
                                    </div>
                                    :
                                    <Meta title={''} description={''} />
                            }

                            {
                                item.thc > 0 || item.cbd > 0 ?
                                    <>
                                        <Meta title={''} description={item.thc ? `THC : ${item.thc} %` : ''} />
                                        <Meta title={''} description={item.cbd ? `CBD : ${item.cbd} %` : ''} />
                                    </>
                                    :
                                    <Meta title={''} description={<br></br>} />
                            }

                            {/* {
                                item.flovors || item.effect ?
                                    <>
                                        <Meta title={''} description={item.flovors ? `Flovors : ${item.flovors} ` : ''} />
                                        <Meta title={''} description={item.effect ? `Effect : ${item.effect} ` : ''} />
                                    </>
                                    :
                                    <Meta title={''} description={<br></br>} />
                            } */}


                        </Card>
                    </Col>
                )}
            </Row>
        </>

    );
}

export default Menu;

