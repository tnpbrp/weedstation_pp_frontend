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
        name: 'Chronic cake',
        price: 400,
        img: 'S__3039240_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 0,
            indica: 0,
            thc: '27-30',
            cbd: null,
            strain_flovors: 'cake',
            effect: 'hight body',
        },
    },
    {
        name: 'Da Funk',
        price: 400,
        img: 'S__3039238_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 30,
            indica: 70,
            thc: '30',
            cbd: null,
            strain_flovors: 'sweet',
            effect: 'hight body',
        },
    },
    {
        name: 'White runtz',
        price: 250,
        img: 'S__2318355_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 0,
            indica: 0,
            thc: '30',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'Joker Candy',
        price: 250,
        img: 'S__2318349_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 50,
            indica: 50,
            thc: '30',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'Blueberry',
        price: 250,
        img: 'S__2318351_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 20,
            indica: 80,
            thc: '25',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'Purple Queen',
        price: 250,
        img: 'S__2318353_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 25,
            indica: 75,
            thc: '22',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'Apples & Banana',
        price: 250,
        img: 'S__2318352_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 50,
            indica: 50,
            thc: '30',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'Bottom Bird',
        price: 250,
        img: 'S__2318354_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 40,
            indica: 60,
            thc: '26',
            cbd: null,
            strain_flovors: 'herbel , woody',
            effect: '',
        },
    },
    {
        name: 'เศษดอก Medellin',
        price: 150,
        img: 'S__1744903.jpg',
        cate: 'trim',
        desc: {
            title: '',
            santiva: 0,
            indica: 0,
            thc: '25-34',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'เศษดอก White Runtz',
        price: 150,
        img: 'white_runtz_.jpg',
        cate: 'trim',
        desc: {
            title: '',
            santiva: 0,
            indica: 0,
            thc: '25',
            cbd: null,
            strain_flovors: '',
            effect: 'relaxed',
        },
    },
    {
        name: 'Grinder',
        price: 250,
        img: 'grinder2.jpg',
        cate: 'item',

    },
    {
        name: 'Toppuff',
        price: 250,
        img: 'top_puff2.jpg',
        cate: 'item',

    },
    {
        name: 'Gorilla glue',
        price: 250,
        img: 'S__33071119.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 35,
            indica: 65,
            thc: '20',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'ใบทริม Bruce Baner',
        price: 60,
        img: 'S__33071112_0.jpg',
        cate: 'trim',
        desc: {
            title: '',
            santiva: 60,
            indica: 40,
            thc: '0',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'ใบทริม Wedding Cake',
        price: 60,
        img: 'S__33071109_0.jpg',
        cate: 'trim',
        desc: {
            title: '',
            santiva: 20,
            indica: 80,
            thc: '0',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    
    {
        name: 'Mimosa Evo',
        price: 400,
        img: 'S__32890892_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 40,
            indica: 60,
            thc: '25',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'Platinum Oreoz',
        price: 400,
        img: 'S__32890890_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 40,
            indica: 60,
            thc: '27',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'Grand Daddy Purple',
        price: 250,
        img: 'S__31678476_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 0,
            indica: 100,
            thc: '25',
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'ipenema',
        price: 300,
        img: 'S__30498841_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 70,
            indica: 30,
            thc: '28',
            cbd: null,
            strain_flovors: 'berry , orange',
            effect: 'talking, happy',
        },
    },
    {
        name: 'Godfather',
        price: 250,
        img: 'Godfather.png',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 40,
            indica: 60,
            thc: '30',
            cbd: null,
            strain_flovors: '',
            effect: '',
        }
    },
    {
        name: 'Sour DieSel',
        price: 350,
        img: '1714556425684.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 0,
            indica: 0,
            thc: '24',
            cbd: null,
            strain_flovors: '',
            effect: '',
        }
    },
    {
        name: 'Bamboo',
        price: 200,
        img: 'Bamboo.jpg',
        cate: 'item',
    },
    {
        name: 'Sugar Cane',
        price: 250,
        img: 'Sugar_Cane.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 60,
            indica: 40,
            thc: '18',
            cbd: null,
            strain_flovors: '',
            effect: '',
        }
    },
    {
        name: 'paper',
        price: 120,
        img: 'paper_roll.jpg',
        cate: 'item',
    },
    {
        name: '-',
        price: 100,
        img: 'S__151994378_0.jpg',
        cate: 'item',
    },
    {
        name: 'Pipe',
        price: 180,
        img: 'Pipe.jpg',
        cate: 'item',
    },
    {
        name: 'Green Crack Pack',
        price: 450,
        img: 'green_crack_pack.jpg',
        cate: 'stick',

    },
    {
        name: 'Green Crack',
        price: 100,
        img: 'green_crack2.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 0,
            indica: 0,
            thc: '0',
            cbd: null,
            strain_flovors: '',
            effect: '',
        }
    },
    {
        name: 'อัดแท่ง 100 G',
        price: 550,
        img: 'stick1.jpg',
        cate: 'stick',
    },
    {
        name: 'อัดแท่ง เขียวๆ',
        price: 100,
        img: 'stick2.jpg',
        cate: 'stick',
    },
    {
        name: 'roll',
        price: 200,
        img: 'roll1.jpg',
        cate: 'roll',
    },
    {
        name: 'บ้องแก้ว',
        price: 600,
        img: 'bong_3.jpg',
        cate: 'item',

    },
    {
        name: 'บ้องแก้ว',
        price: 1000,
        img: 'bong1000.jpg',
        cate: 'item',

    },
    {
        name: 'บ้องแก้ว',
        price: 1200,
        img: '1714305877218.jpg',
        cate: 'item',

    },
    {
        name: 'TOPPUFF',
        price: 160,
        img: 'toppuff.jpg',
        cate: 'item',

    },
    {
        name: 'Grinder',
        price: 350,
        img: 'grinder.jpg',
        cate: 'item',

    },
    {
        name: 'Paper',
        price: 120,
        img: 'paper_roll.jpg',
        cate: 'item',

    },
    {
        name: 'Paper',
        price: 60,
        img: 'paper2.jpg',
        cate: 'item',

    },
    {
        name: 'Paper',
        price: 60,
        img: 'paper3.jpg',
        cate: 'item',

    },
    {
        name: 'Paper',
        price: 60,
        img: 'paper4.jpg',
        cate: 'item',

    },
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

        // เพิ่ม event listener เพื่อตรวจจับเหตุการณ์ resize
        // window.addEventListener('resize', handleResize);

        // คืนฟังก์ชันที่ใช้เพื่อลบ event listener เมื่อคอมโพเนนต์ถูกยกเลิก
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Define the sorting order of categories
        const categoryOrder = ['flower', 'trim', 'roll', 'stick', 'item'];

        // Sort the items array by category
        const sortedItems = products.sort((a, b) => {
            // Get the index of each category in the categoryOrder array
            const indexA = categoryOrder.indexOf(a.cate);
            const indexB = categoryOrder.indexOf(b.cate);

            // Compare the indexes to determine the sorting order
            return indexA - indexB;
        });
        setProductList(sortedItems)
        console.log(products)

        //1. Filter items is not images
        //2. Sort flower , trim , roll , stick , items * success
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
                            {/* {
                                <><span>New !!!</span></>
                            } */}

                            {item.name != '' ?
                                <Meta title={item.name} description={<span className='text-price' style={textPriceStyle}>{item.price + ' ฿'} </span>} />
                                :
                                <Meta title={<br></br>} description={<br></br>} />
                            }

                            {item.desc ?
                                <Meta title={''} description={`santiva : ${item.desc.santiva} % ` + ` indica : ${item.desc.indica} %`} style={{ paddingTop: 5 }} />
                                :
                                <Meta title={''} description={<><br></br><br></br></>} />
                            }

                            {
                                item.desc && item.desc.thc ? <Meta title={''} description={`THC : ${item.desc.thc} %`} /> :
                                    <Meta title={''} description={<br></br>} />
                            }



                        </Card>
                    </Col>
                )}
            </Row>
        </>

    );
}

export default Menu;

