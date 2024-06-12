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
        name: 'Grinder',
        price: 250,
        img: 'grinder2.jpg',
        cate: 'item',
        
    },
    {
        name: 'Toppuff',
        price: 200,
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
            thc: 20,
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'เศษดอก Wedding Cake',
        price: 120,
        img: 'S__33071117.jpg',
        cate: 'trim',
        desc: {
            title: '',
            santiva: 20,
            indica: 80,
            thc: 0,
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'ใบทริม Bruce Baner',
        price: 50,
        img: 'S__33071112_0.jpg',
        cate: 'trim',
        desc: {
            title: '',
            santiva: 60,
            indica: 40,
            thc: 0,
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'ใบทริม Wedding Cake',
        price: 50,
        img: 'S__33071109_0.jpg',
        cate: 'trim',
        desc: {
            title: '',
            santiva: 20,
            indica: 80,
            thc: 0,
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'ใบทริม Honey Cream',
        price: 50,
        img: 'S__33071111_0.jpg',
        cate: 'trim',
        desc: {
            title: '',
            santiva: 35,
            indica: 65,
            thc: 0,
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
            thc: 25,
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
            thc: 27,
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
            thc: 25,
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'Lilac Diesel',
        price: 250,
        img: 'S__31678478_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 50,
            indica: 50,
            thc: 20,
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'Banana Hammock',
        price: 200,
        img: 'S__31678470_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 30,
            indica: 70,
            thc: 22-25,
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'Congo',
        price: 200,
        img: 'S__31678472_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 100,
            indica: 0,
            thc: 18-24,
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'Grape Dimond',
        price: 200,
        img: 'S__31678473_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 0,
            indica: 0,
            thc: 25-30,
            cbd: null,
            strain_flovors: '',
            effect: '',
        },
    },
    {
        name: 'LA Banana Cake',
        price: 400,
        img: '1716825619358.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 40,
            indica: 60,
            thc: 28,
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
            thc: 28,
            cbd: null,
            strain_flovors: 'berry , orange',
            effect: 'talking, happy',
        },
    },
     {
        name: 'Tigerz eye',
        price: 400,
        img: 'S__32088085.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 0,
            indica: 100,
            thc: '18-20',
            cbd: null,
            strain_flovors: 'Gelato',
            effect: 'Awake',
        },
    },
     {
        name: '11:11 (RS11)',
        price: 400,
        img: 'S__30498839_0.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 50,
            indica: 50,
            thc: 30,
            cbd: null,
            strain_flovors: 'berry',
            effect: 'creative',
        },
    },
    // {
    //     name: 'เศษดอก Wedding Cake',
    //     price: 100,
    //     img: '.jpg',
    //     cate: 'trim',
    //     desc: {
    //         title: '',
    //         santiva: 20,
    //         indica: 80,
    //         thc: 24,
    //         cbd: null,
    //         strain_flovors: '',
    //         effect: '',
    //     },
    // },
    // {
    //     name: 'Water Melon Zkittle',
    //     price: 250,
    //     img: '',
    //     cate: 'flower',
    //     desc: {
    //         title: '',
    //         santiva: 47,
    //         indica: 53,
    //         thc: 25,
    //         cbd: null,
    //         strain_flovors: '',
    //         effect: '',
    //     },
    // },
    {
        name: 'Godfather',
        price: 250,
        img: 'Godfather.png',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 40,
            indica: 60,
            thc: 30,
            cbd: null,
            strain_flovors: '',
            effect: '',
        }
    },
    {
        name: 'Mandarin Cookies',
        price: 180,
        img: '1715008634680.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 20,
            indica: 80,
            thc: 0,
            cbd: null,
            strain_flovors: '',
            effect: '',
        }
    },
    // {
    //     name: 'Future#1',
    //     price: 180,
    //     img: '.jpg',
    //     cate: 'flower',
    //     desc: {
    //         title: '',
    //         santiva: 50,
    //         indica: 50,
    //         thc: null,
    //         cbd: null,
    //         strain_flovors: '',
    //         effect: '',
    //     }
    // },
    // {
    //     name: 'Compounds',
    //     price: 250,
    //     img: '',
    //     cate: 'flower',
    //     desc: {
    //         title: '',
    //         santiva: 0,
    //         indica: 0,
    //         thc: 0,
    //         cbd: null,
    //         strain_flovors: '',
    //         effect: '',
    //     }
    // },
    // {
    //     name: 'Gorilla Skizttle',
    //     price: 250,
    //     img: '.jpg',
    //     cate: 'flower',
    //     desc: {
    //         title: '',
    //         santiva: 40,
    //         indica: 60,
    //         thc: 24,
    //         cbd: null,
    //         strain_flovors: '',
    //         effect: '',
    //     }
    // },
    // {
    //     name: 'Lava Freeze',
    //     price: 250,
    //     img: '.jpg',
    //     cate: 'flower',
    //     desc: {
    //         title: '',
    //         santiva: 10,
    //         indica: 90,
    //         thc: 20,
    //         cbd: null,
    //         strain_flovors: '',
    //         effect: '',
    //     }
    // },
    {
        name: 'Super Lemon Haze',
        price: 350,
        img: '1714556426651.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 90,
            indica: 10,
            thc: 20,
            cbd: null,
            strain_flovors: '',
            effect: '',
        }
    },
    {
        name: 'Velvet Moons',
        price: 350,
        img: '1714556425763.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 40,
            indica: 60,
            thc: 0,
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
            thc: 24,
            cbd: null,
            strain_flovors: '',
            effect: '',
        }
    },
    {
        name: 'Northern Light',
        price: 350,
        img: '1714556425574.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 20,
            indica: 80,
            thc: 25,
            cbd: null,
            strain_flovors: '',
            effect: '',
        }
    },
    // {
    //     name: 'เศษดอก Super Lemon Haze',
    //     price: 140,
    //     img: '.jpg',
    //     cate: 'trim',
    //     desc: {
    //         title: '',
    //         santiva: 0,
    //         indica: 0,
    //         thc: 0,
    //         cbd: null,
    //         strain_flovors: '',
    //         effect: '',
    //     }
    // },
    {
        name: 'Power',
        price: 400,
        img: '1714305889326.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 60,
            indica: 40,
            thc: 15,
            cbd: null,
            strain_flovors: '',
            effect: '',
        }
    },
    {
        name: 'Animal Runtz',
        price: 400,
        img: '1714305883327.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 30,
            indica: 70,
            thc: '20',
            cbd: null,
            strain_flovors: '',
            effect: '',
        }
    },
    {
        name: 'Z - Pie',
        price: 200,
        img: 'z_pie.jpg',
        cate: 'flower',
        desc: {
            title: '',
            santiva: 70,
            indica: 30,
            thc: '26-30',
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
            thc: 18,
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
            thc: 0,
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
        price: 700,
        img: 'bong_2.jpg',
        cate: 'item',
    },
    {
        name: 'บ้องแก้ว',
        price: 600,
        img: 'bong_3.jpg',
        cate: 'item',

    },
    {
        name: 'บ้องแก้ว',
        price: 1200,
        img: '1714305877218.jpg',
        cate: 'item',

    },
    {
        name: 'บ้องแก้ว',
        price: 1400,
        img: 'Bong_1400.jpg',
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
// Cate flower , trim , item & stick & roll = remove desc

function Menu() {
    // const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cardWidth, setCardWidth] = useState(150); // * Default = 240
    const [responsiveSpan, setResponsiveSpan] = useState(12);
    const [productList,setProductList] = useState([]);
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

