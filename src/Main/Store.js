import Card from "./Card"



export default function Store (){
    
    const allProducts = [
        {id: 1, img: "./images/chair-3-1238x1536.jpg" , title: "Modern Shell Chair" , price: 208},
        {id: 2, img: "./images/lamp-1-940x1166.jpg" , title: "Pendant Lamp" , price: 89},
        {id: 3, img: "./images/lantern-1-940x1166.jpg" , title: "Lighthouse Lantern" , price: 69},
        {id: 4, img: "./images/clock-1-940x1166.jpg" , title: "Wall Clock" , price: 79},
        {id: 5, img: "./images/backpack-1-.jpg" , title: "Hans Backpack" , price: 79},
        {id: 6, img: "./images/havana-sunglasses-1-940x1166.jpg" , title: "Specs Sunglasses" , price: 109},
        {id: 7, img: "./images/press-coffee-1-maker.jpg" , title: "Press Coffee Maker" , price: 39},
        {id: 8, img: "./images/door-bumper-1-940x1166.jpg" , title: "Door Bumper" , price: 29},
        {id: 9, img: "./images/ceramic-tealight-holder-1-940x1166.jpg" , title: "Ceramic Tealight Holder" , price: 28},
    ]


    return (
        
            <section className="bg-white py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
				            Store
			                </a>

                            <div className="flex items-center" id="store-nav-content">

                                <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                    </svg>
                                </a>

                                <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </nav>
                <Card {...allProducts[0]}></Card>
                <Card {...allProducts[1]}></Card>
                <Card {...allProducts[2]}></Card>
                <Card {...allProducts[3]}></Card>
                <Card {...allProducts[4]}></Card>
                <Card {...allProducts[5]}></Card>
                <Card {...allProducts[6]}></Card>
                <Card {...allProducts[7]}></Card>
                <Card {...allProducts[8]}></Card>
                </div>
            </section>
        
    )
}