
const list_groups=[
    {
        id:"01",
        image:"generic_detail_default.png",
        tag:[ { id:1, name:"Javascript", icon:"javascript.svg" } ],
        name:"Los Cryptos",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        active:true
    },
    {
        id:"02",
        image:"generic_detail_default.png",
        tag:[ { id:1, name:"Javascript", icon:"javascript.svg" } ],
        name:"Los Cryptos2",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        active:true
    },
    {
        id:"03",
        image:"generic_detail_default.png",
        tag:[ { id:2, name:"php", icon:"php.svg" } ],
        name:"Los Cryptos3",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        active:true
    },
    {
        id:"04",
        image:"generic_detail_default.png",
        tag:[ { id:3, name:"python", icon:"python.svg" } ],
        name:"Los Cryptos4",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        active:true
    },
    {
        id:"05",
        image:"generic_detail_default.png",
        tag:[ { id:3, name:"python", icon:"python.svg" } ],
        name:"Los Cryptos5",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        active:true
    },
    {
        id:"06",
        image:"generic_detail_default.png",
        tag:[ { id:4, name:"swift", icon:"swift.svg" } ],
        name:"Los Cryptos 6",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        active:true
    },
    {
        id:"07",
        image:"generic_detail_default.png",
        tag:[ { id:4, name:"swift", icon:"swift.svg" } ],
        name:"Los Cryptos 7",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        active:true
    },
    {
        id:"08",
        image:"generic_detail_default.png",
        tag:[ { id:1, name:"javascript", icon:"javascript.svg" } ],
        name:"Los Cryptos 8",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        active:true
    },
    {
        id:"09",
        image:"generic_detail_default.png",
        tag:[ { id:1, name:"javascript", icon:"javascript.svg" } ],
        name:"Los Cryptos 9",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        active:true
    },
    {
        id:"10",
        image:"generic_detail_default.png",
        tag:[ { id:5, name:"java", icon:"java.svg" } ],
        name:"Los Cryptos 10",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        active:true
    }
]

export default function handler(req, res) {
    res.status(200).json(list_groups)
}
