/*
 Navicat Premium Data Transfer

 Source Server         : localhost_27017
 Source Server Type    : MongoDB
 Source Server Version : 60004
 Source Host           : localhost:27017
 Source Schema         : rapidtitle

 Target Server Type    : MongoDB
 Target Server Version : 60004
 File Encoding         : 65001

 Date: 18/04/2023 08:42:20
*/


// ----------------------------
// Collection structure for titles
// ----------------------------
db.getCollection("titles").drop();
db.createCollection("titles");

// ----------------------------
// Documents of titles
// ----------------------------
db.getCollection("titles").insert([ {
    _id: ObjectId("643e7dbc59588d1c7c74ae1b"),
    image: "1.jpg",
    sn: "KM8J3CA46KU909995",
    title: "Hyundai Tucson",
    price: NumberInt("30400"),
    floorPlan: NumberInt("3040"),
    duration: NumberInt("31"),
    number: "K9015A",
    holds: "8/10",
    status: "Pending",
    observer: "user1.png",
    "observer_name": "James C",
    __v: NumberInt("0")
} ]);
db.getCollection("titles").insert([ {
    _id: ObjectId("643e7dbc59588d1c7c74ae1c"),
    image: "2.jpg",
    sn: "WA1LFAFP7DA041046",
    title: "Audi Q520T",
    price: NumberInt("90690"),
    floorPlan: NumberInt("969"),
    duration: NumberInt("28"),
    number: "K9204A",
    holds: "8/10",
    status: "Pending",
    observer: "user3.png",
    "observer_name": "Oman C",
    __v: NumberInt("0")
} ]);
db.getCollection("titles").insert([ {
    _id: ObjectId("643e7dbc59588d1c7c74ae1d"),
    image: "3.jpg",
    sn: "WA1LFAFP7DA041046",
    title: "Audi Q520T",
    price: NumberInt("90690"),
    floorPlan: NumberInt("9069"),
    duration: NumberInt("28"),
    number: "K9204A",
    holds: "8/10",
    status: "Pending",
    observer: "user3.png",
    "observer_name": "James G",
    __v: NumberInt("0")
} ]);
db.getCollection("titles").insert([ {
    _id: ObjectId("643e7dbc59588d1c7c74ae1e"),
    image: "4.jpg",
    sn: "WDDGJ4HB9DG054666",
    title: "Mercedes Benz C250C",
    price: NumberInt("50400"),
    floorPlan: NumberInt("9069"),
    duration: NumberInt("27"),
    number: "K9076A",
    holds: "7/10",
    status: "Pending",
    observer: "user2.png",
    "observer_name": "James C",
    __v: NumberInt("0")
} ]);
db.getCollection("titles").insert([ {
    _id: ObjectId("643e7dbc59588d1c7c74ae1f"),
    image: "4.jpg",
    sn: "KM8J3CA46KU909995",
    title: "Hyundai Tucson",
    price: NumberInt("30400"),
    floorPlan: NumberInt("9069"),
    duration: NumberInt("31"),
    number: "K9015A",
    holds: "8/10",
    status: "Pending",
    observer: "user1.png",
    "observer_name": "Tomas C",
    __v: NumberInt("0")
} ]);
db.getCollection("titles").insert([ {
    _id: ObjectId("643e7dbc59588d1c7c74ae20"),
    image: "3.jpg",
    sn: "WA1LFAFP7DA041046",
    title: "Audi Q520T",
    price: NumberInt("90690"),
    floorPlan: NumberInt("9250"),
    duration: NumberInt("28"),
    number: "K9204A",
    holds: "8/10",
    status: "Pending",
    observer: "user3.png",
    "observer_name": "James C",
    __v: NumberInt("0")
} ]);
db.getCollection("titles").insert([ {
    _id: ObjectId("643e7dbc59588d1c7c74ae21"),
    image: "2.jpg",
    sn: "WA1LFAFP7DA041046",
    title: "Audi Q520T",
    price: NumberInt("90690"),
    floorPlan: NumberInt("9053"),
    duration: NumberInt("28"),
    number: "K9204A",
    holds: "8/10",
    status: "Pending",
    observer: "user3.png",
    "observer_name": "chris C",
    __v: NumberInt("0")
} ]);
db.getCollection("titles").insert([ {
    _id: ObjectId("643e7dbc59588d1c7c74ae22"),
    image: "1.jpg",
    sn: "WDDGJ4HB9DG054666",
    title: "Mercedes Benz C250C",
    price: NumberInt("50400"),
    floorPlan: NumberInt("5069"),
    duration: NumberInt("27"),
    number: "K9076A",
    holds: "7/10",
    status: "Pending",
    observer: "user2.png",
    "observer_name": "James C",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("6424de36a2ef8d240c893158"),
    username: "test259820",
    email: "test@gmail.com",
    password: "$2a$10$uggRy6sEtSfgycPnQbrruek9aeL05WFOr5Vq70cuf.Eig3iEWUR96",
    date: ISODate("2023-03-30T00:56:22.222Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6424deadb25e7512f82ec028"),
    username: "automan300398",
    email: "automan@gmail.com",
    password: "$2a$10$0MH3Ke.gwE.s5Ipo0M6VVeCPTnmTwHnCTxaSUrGKCh5hTAF4isFhm",
    date: ISODate("2023-03-30T00:58:21.041Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6424df27583aa61b7cf612a5"),
    username: "test123364657",
    email: "new@gmail.com",
    password: "$2a$10$6wsH9xWaV5KKpbxQImovBO9wf6GDqCiVpGLRGGCYPnXwe/cDP7a4K",
    date: ISODate("2023-03-30T01:00:23.387Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6424df6ccbb7b60d88d35598"),
    username: "automan149559",
    email: "automan123@gmail.com",
    password: "$2a$10$.7vYwR6HG/d3wn3JVSOzNuQkwSBR1A3Djqiz/5oZsIdihbMB1vRfa",
    date: ISODate("2023-03-30T01:01:32.99Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6424dfb9cbb7b60d88d3559f"),
    username: "automan123314337",
    email: "automan1232@gmail.com",
    password: "$2a$10$lLAzdBvHZqkbuwJe1ZgbS.SfdK2xhOACvPDTbgg1F/uS7wJ4GTnJS",
    date: ISODate("2023-03-30T01:02:49.751Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6424e01f78a7f11a84cd844a"),
    username: "123467946",
    email: "test123123@gmail.com",
    password: "$2a$10$.tnFJstJU3Egp0rCJIgWN.u8njgNQA6Q9i.Wh8d6HBKH/J6ey3gji",
    date: ISODate("2023-03-30T01:04:31.14Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6424e03178a7f11a84cd844f"),
    username: "123518686",
    email: "test123124@gmail.com",
    password: "$2a$10$Db47I9uSd/3XDA5EFN0bP.x/.ppFP5zCJapFiFxuYo.6AhcwWToSC",
    date: ISODate("2023-03-30T01:04:49.89Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6424e04978a7f11a84cd8454"),
    username: "123410521",
    email: "test12314@gmail.com",
    password: "$2a$10$ME.dfLJDaOMr8Pkok69/y.zaAk0Cb2s7b7brZuukro06PL4KaAvPi",
    date: ISODate("2023-03-30T01:05:13.612Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6424e06378a7f11a84cd845b"),
    username: "test529948",
    email: "test12323@gmail.com",
    password: "$2a$10$ghDgUsCHigA1XmPmZGJTue34w5J89q7xYLCYwsylqJggNbo9JW46O",
    date: ISODate("2023-03-30T01:05:39.667Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6424e6e6f522ea3364bfb433"),
    username: "James622003",
    email: "james@schemadriven.com",
    password: "$2a$10$ylkzc8OzSBR.Zg0NS0E2LO3pB3fklG.POKEklR20X51jyzbg0KqTO",
    date: ISODate("2023-03-30T01:33:26.446Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("642b2bb336b271143cdc0ccf"),
    username: "test634370",
    email: "test@gmail.co",
    password: "$2a$10$tmWQtm45dXNAM0BB4d4kb.VxnxKqAx.rGNudjqzbij2DuE7xCB6tq",
    date: ISODate("2023-04-03T19:40:35.809Z"),
    __v: NumberInt("0"),
    wallet: "0x494bba0906e8662b6c7c10907c4c77fad75fec8d"
} ]);
