export type ext_link= {code:string, position:number, confirmed:boolean};
export type rating_entry = {pos:number,
    snils:number, score:number[],
    confirmed:boolean, bvi:boolean,
    other:ext_link[]};

const other_link= {code:"01.02.03", position:4, confirmed:false};

const rating: rating_entry[] = [
    {pos:1,snils:12345678900, score:[70,80,70], confirmed:true, bvi:true, other:[]},
    {pos:2,snils:12345678900, score:[60,80,70], confirmed:true, bvi:false, other:[]},
    {pos:3,snils:12345678900, score:[60,75,70], confirmed:false, bvi:false, other:[other_link]},
    {pos:4,snils:12345678900, score:[60,70,70], confirmed:false, bvi:false, other:[other_link]},
    {pos:5,snils:12345678900, score:[70,60,60], confirmed:false, bvi:false, other:[other_link, other_link]},
    {pos:6,snils:12345678900, score:[60,60,60], confirmed:true, bvi:false, other:[other_link]},
];

export function  get_full_rating(rating_id: string){
    return {vuz: "UrFU", code:rating_id, rating: rating};
}
export function get_all_vuzes(){
    return ["UrFU", "AAA","BBB","CCC","DDDD","EEE"];
}
export function get_vuz_programs(vuz_name: string){
    if (vuz_name=="urfu")
        return ["01.02.03"];
    return [];
}
export function get_vuz_info(vuz_name:string){
    if (vuz_name=="urfu")
        return {name:"Уральский Федеральный Университет"};
    return null;
}