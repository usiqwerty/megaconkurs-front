const api_host = "http://127.0.0.1:5000";
const api_url = api_host + "/api";


export type ext_link = { vuz: string, code: string, position: number, confirmed: boolean };
export type rating_entry = {
    pos: number,
    snils: number,
    score: number,
    confirmed: boolean,
    bvi: boolean,
    other: ext_link[]
};

type attriute = {key: string, val: string|number}
export type vuz = { name: string, code: string, desc: string, attributes: string };

function api_call(url: string) {
    return fetch(url,
        {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            }
        });
}

export function get_all_vuzes() {
    return api_call(api_url + "/get_all_vuzes");
}

export function get_vuz_programs(vuz_name: string) {
    return api_call(api_url + "/get_vuz_programs?vuz=" + vuz_name);

}

export function get_vuz_info(vuz_name: string) {
    return api_call(api_url + "/get_vuz_info?vuz=" + vuz_name);
}

export function get_full_rating(vuz: string, rating_id: string) {
    return api_call(api_url + `/get_rating?vuz=${vuz}&rating_id=${rating_id}`);
}
