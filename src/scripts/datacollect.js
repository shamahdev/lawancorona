class DataCollect{
    static province() {
        return fetch(`https://api.kawalcorona.com/indonesia/provinsi/`)
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
    static local() {
        return fetch(`https://api.kawalcorona.com/indonesia/`)
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
        return Promise.all([
            fetch(`https://api.kawalcorona.com/positif/`),
            fetch(`https://api.kawalcorona.com/sembuh/`),
            fetch(`https://api.kawalcorona.com/meninggal/`)
        ])
        .then(responses => {
            return responses.map(response => {
                return response.json();
            });
        })
        .then(datasResponse => {
            const globalData = [{
                "name": "di dunia",
                "positif": null,
                "sembuh": null,
                "meninggal": null
            }];
            return datasResponse[0].then(v => {
                globalData[0].positif = v.value;
                return datasResponse[1].then(v => {
                    globalData[0].sembuh = v.value;
                    return datasResponse[2].then(v => {
                        globalData[0].meninggal = v.value;
                        return Promise.resolve(globalData);
                    })
                })
            })
        })
        .catch(error => {
            return Promise.reject(error);
        });
    }
}
export default DataCollect;