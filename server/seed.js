var configDB = require("./configDB");
var database = require("./database");
var Feedback = database.Feedback;
var Foodcourt = database.Foodcourt;
var Foodcourtstall = database.Foodcourtstall;
var News = database.News;
var Foodcourtdish = database.Foodcourtdish;
var apiURI = "https://localhost:3000";

module.exports = function() {
    if (configDB.seed) {
        Foodcourt.bulkCreate([
            {fc_name:"Foodcourt 4 Koufu", fc_id: "1", location: "Near Auditorium", op_hours: "Mon-Sat, 8.00am-8.00pm", fc_img01: apiURI + "/images/fc4_1.jpg",fc_img02: apiURI + "/images/fc4_2.jpg", description:"FoodCourt 4 brings Koufu to Singapore Polytechnic to offer students quality food from one of the best foodcourts."},
            {fc_name:"Foodcourt 6", fc_id: "2", location: "T19", op_hours: "Mon-Fri, 8.00am-8.00pm", fc_img01: apiURI + "/images/fc6_1.jpg", fc_img02: apiURI + "/images/fc6_2.jpg", description: "FoodCourt 6 at the Singapore Polytechnic."}
        ]).then(
            function() {
                console.log("Foodcourts created");
                Foodcourtstall.bulkCreate([
                    {
                        stall_id: "1", fc_id: "1" , stall_name: "Japanese Cuisine", description: "Japanese Cuisine with dishes like Chicken Katsu Curry and Katsu Dons."
                    },
                    {
                        stall_id: "2", fc_id: "1", stall_name: "Western Food", description: "Western Cuisine with dishes like chicken chops and mashed potatoes."
                    },
                    {
                        stall_id: "3", fc_id: "1", stall_name: "Drinks Store", description: "Drinks store with desserts."
                    },
                    {
                        stall_id: "4", fc_id: "2", stall_name: "Malay Rice", description: "A wide selection of halal food."
                    },
                    {
                        stall_id: "5", fc_id: "2", stall_name: "Drinks Store", description: "Drinks store ranging from bottled drinks to brewed coffee."
                    },
                    {
                        stall_id: "6", fc_id: "2", stall_name: "Chicken Rice", description: "The Singaporean favourite."
                    }
                ]).then(function() {
                    console.log("Done creating foodcourt stall records");
                    Foodcourtdish.bulkCreate([
                        {
                            fc_id:"1", stall_id:"1",dish_id:"1",dish_name:"Chicken Katsu Curry Rice",availability:"Available",price:"$4.00",
                            stall_img01: apiURI + "/images/11.jpg"
                        },
                        {
                            fc_id:"1",stall_id:"1",dish_id:"2",dish_name:"Chicken Katsu Don", availability:"Available",price:"$4.00",
                            stall_img01: apiURI + "/images/12.jpg"
                        },
                        {
                            fc_id:"1",stall_id:"1",dish_id:"3",dish_name:"Chawamushi",availability:"Available",price:"$1.50",
                            stall_img01: apiURI + "/images/13.jpg"
                        },
                        {
                            fc_id:"1",stall_id:"2",dish_id:"4",dish_name:"Chicken Cutlet",availability:"Available",price:"2.50",
                            stall_img01: apiURI + "/images/24.jpg"
                        },
                        {
                            fc_id:"1",stall_id:"2",dish_id:"5",dish_name:"Grilled Fish",availability:"Available",price:"$4.00",
                            stall_img01: apiURI + "/images/25.jpg"
                        },
                        {
                            fc_id:"1",stall_id:"2",dish_id:"6",dish_name:"Mashed Potatoes",availability:"Available",price:"$1.50",
                            stall_img01: apiURI + "/images/26.jpg"
                        },
                        {
                            fc_id:"1",stall_id:"3",dish_id:"7",dish_name:"Milo",availability:"Available",price:"$1.00",
                            stall_img01: apiURI + "/images/37.jpg"
                        },
                        {
                            fc_id:"1",stall_id:"3",dish_id:"8",dish_name:"Iced Tea",availability:"Available",price:"$1.00",
                            stall_img01: apiURI + "/images/38.jpg"
                        },
                        {
                            fc_id:"1",stall_id:"3",dish_id:"9",dish_name:"Apple Juice",availability:"Available",price:"$1.50",
                            stall_img01: apiURI + "/images/39.jpg"
                        },
                        {
                            fc_id:"2",stall_id:"4",dish_id:"10",dish_name:"Nasi Lemak",availability:"Not Available",price:"$3.00",
                            stall_img01: apiURI + "/images/410.jpg"
                        },
                        {
                            fc_id:"2",stall_id:"4",dish_id:"11",dish_name:"Mee Goreng",availability:"Not Available",price:"$3.00",
                            stall_img01: apiURI + "/images/411.jpg"
                        },
                        {
                            fc_id:"2",stall_id:"4",dish_id:"12",dish_name:"Ayam Penyet",availability:"Available",price:"$3.00",
                            stall_img01: apiURI + "/images/412.jpg"
                        },
                        {
                            fc_id:"2",stall_id:"5",dish_id:"13",dish_name:"Milo",availability:"Available",price:"$1.00",
                            stall_img01: apiURI + "/images/37.jpg"
                        },
                        {
                            fc_id:"2",stall_id:"5",dish_id:"14",dish_name:"Iced Tea",availability:"Available",price:"$1.00",
                            stall_img01: apiURI + "/images/38.jpg"
                        },
                        {
                            fc_id:"2",stall_id:"5",dish_id:"15",dish_name:"Coffee",availability:"Available",price:"$0.70",
                            stall_img01: apiURI + "/images/515.jpg"
                        },
                        {
                            fc_id:"2",stall_id:"6",dish_id:"16",dish_name:"Steamed Chicken Rice",availability:"Available",price:"$3.00",
                            stall_img01: apiURI + "/images/616.jpg"
                        },
                        {
                            fc_id:"2",stall_id:"6",dish_id:"17",dish_name:"Roasted Chicken Rice",availability:"Available",price:"$3.00",
                            stall_img01: apiURI + "/images/617.jpg"
                        },
                        {
                            fc_id:"2",stall_id:"6",dish_id:"18",dish_name:"Char Siew Rice",availability:"Available",price:"$3.00",
                            stall_img01: apiURI + "/images/618.jpg"
                        }
                    ]).then(function(){
                        console.log("Done creating foodcourt stall dish records");
                        News.bulkCreate([
                            { news_id: "1", news: "Foodcourt 4 closed down on 30th June due to maintenance."},
                            { news_id: "2", news: "Unexpected fire in Foodcourt 6, closed down today 25th June."}
                        ])
                    })
                });
            }
        )
    }
};