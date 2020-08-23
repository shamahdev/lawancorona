class DataCollect{
    static province() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        return fetch(`${proxyUrl}https://api.kawalcorona.com/indonesia/provinsi/`)
            .then(response => response.json())
            .catch(error => {
                return Promise.reject(error);
        })
    }
    static local() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        return fetch(`${proxyUrl}https://api.kawalcorona.com/indonesia/`)
            .then(response => {
                return response.json();
            })
            .then(dataResponse => {
                // console.log(dataResponse);
                return Promise.resolve(dataResponse);
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }
    static global(){
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        return Promise.all([
            fetch(`${proxyUrl}https://api.kawalcorona.com/positif/`),
            fetch(`${proxyUrl}https://api.kawalcorona.com/sembuh/`),
            fetch(`${proxyUrl}https://api.kawalcorona.com/meninggal/`)
        ])
        .then(responses => {
            return responses.map(response => response.json());
        })
        .then(async (datasResponse) => [{
            "name": "di dunia",
            "positif": (await datasResponse[0]).value,
            "sembuh": (await datasResponse[1]).value,
            "meninggal": (await datasResponse[2]).value
        }]);
    }
}
export default DataCollect;