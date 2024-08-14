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
        "name": "Californina Gold",
        "price": 100,
        "img": "S__12460141.jpg",
        "cate": "trim",
        "desc": "",
        "santiva": 20,
        "indica": 80,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Panty Punch",
        "price": 250,
        "img": "S__10944548_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "30",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Grape Stank",
        "price": 250,
        "img": "S__10944550_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "31",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Lava Freeze",
        "price": 250,
        "img": "S__10944551_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 10,
        "indica": 90,
        "thc": "20",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "LSD - 25",
        "price": 250,
        "img": "S__10944552_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 30,
        "indica": 70,
        "thc": "22",
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
        "name": "Slurricane",
        "price": 250,
        "img": "S__10944555.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 60,
        "indica": 40,
        "thc": "30",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Truffle Monkey",
        "price": 400,
        "img": "S__8830992_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 60,
        "indica": 0,
        "thc": "30",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Cookies kush",
        "price": 400,
        "img": "S__8830994_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 70,
        "indica": 0,
        "thc": "28",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Guava Tangie",
        "price": 400,
        "img": "S__8830995_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 70,
        "indica": 0,
        "thc": "28",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Midnight Daylight",
        "price": 400,
        "img": "S__8830996_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 100,
        "thc": "30",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Cafe Racer",
        "price": 400,
        "img": "S__8830997_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 70,
        "indica": 0,
        "thc": "28",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Gran master sexy",
        "price": 250,
        "img": "S__8830998_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 70,
        "indica": 0,
        "thc": "30",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Miracle cheery",
        "price": 250,
        "img": "S__8830999_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 70,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Black Berry Hybrid",
        "price": 250,
        "img": "S__8831000_0.jpg",
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
        "name": "Truffle Monkey",
        "price": 100,
        "img": "S__8831001_0.jpg",
        "cate": "flower",
        "desc": "ใบทริม indoor",
        "santiva": 60,
        "indica": 0,
        "thc": "30",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Pineapple Express",
        "price": 200,
        "img": "S__8831002_0.jpg",
        "cate": "flower",
        "desc": "Mini (indoor)",
        "santiva": 60,
        "indica": 0,
        "thc": "25",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "BISCOTTI",
        "price": 400,
        "img": "S__6660098_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "20",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "VELVET MOON",
        "price": 400,
        "img": "S__6660100_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "23.6",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "PULP FRICTION",
        "price": 400,
        "img": "S__6660101_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "0",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "ztrawberry",
        "price": 400,
        "img": "S__6660102_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "22.48",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "ดอก POP Sensi Star",
        "price": 180,
        "img": "S__6701058_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 10,
        "indica": 90,
        "thc": "24",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "ดอก POP Utopia Haze",
        "price": 180,
        "img": "S__6701060_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 90,
        "indica": 10,
        "thc": "22",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "ดอก POP LA Kush Cake",
        "price": 180,
        "img": "S__6701061_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 30,
        "indica": 70,
        "thc": "23-28",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "ดอก POP Cinderella 99",
        "price": 180,
        "img": "S__6701062_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "23",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "ดอก POP White Rhino",
        "price": 180,
        "img": "S__6701063_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 20,
        "indica": 80,
        "thc": "20",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Chronic cake",
        "price": 400,
        "img": "S__3039240_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "27-30",
        "cbd": null,
        "flovors": "cake",
        "effect": "hight body"
    },
    {
        "name": "Joker Candy",
        "price": 250,
        "img": "S__2318349_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 50,
        "indica": 50,
        "thc": "30",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Blueberry",
        "price": 250,
        "img": "S__2318351_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 20,
        "indica": 80,
        "thc": "25",
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
        "name": "Gorilla glue",
        "price": 250,
        "img": "S__33071119.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 35,
        "indica": 65,
        "thc": "20",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "ใบทริม Bruce Baner",
        "price": 60,
        "img": "S__33071112_0.jpg",
        "cate": "trim",
        "desc": "",
        "santiva": 60,
        "indica": 40,
        "thc": "0",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "ใบทริม Wedding Cake",
        "price": 60,
        "img": "S__33071109_0.jpg",
        "cate": "trim",
        "desc": "",
        "santiva": 20,
        "indica": 80,
        "thc": "0",
        "cbd": null,
        "flovors": "",
        "effect": ""
    },
    {
        "name": "Platinum Oreoz",
        "price": 400,
        "img": "S__32890890_0.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 40,
        "indica": 60,
        "thc": "27",
        "cbd": null,
        "flovors": "",
        "effect": ""
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
        "name": "Green Crack",
        "price": 100,
        "img": "green_crack2.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "0",
        "cbd": null,
        "flovors": "",
        "effect": ""
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

