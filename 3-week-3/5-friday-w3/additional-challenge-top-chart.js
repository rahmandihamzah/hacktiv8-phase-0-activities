function topChart(arrSong){
    let topSong = [];

    for (let i = 0; i < arrSong.length; i++) {
        if (topSong.length === 0) {
            topSong.push({});
            topSong[topSong.length - 1].title = arrSong[i].title;
            topSong[topSong.length - 1].count = 1;
        } else {
            let isSame = true;
            let j = 0;
            while (isSame) {
                if (j === topSong.length) {
                    topSong.push({});
                    topSong[topSong.length - 1].title = arrSong[i].title;
                    topSong[topSong.length - 1].count = 1;
                    isSame = false;
                } else if (arrSong[i].title === topSong[j].title) {
                    topSong[j].count++;
                    isSame = false;
                }

                j++;
            }
        } 
    }

    let status = true;
    while (status) {
        status = false;
        for (let i = 0; i < topSong.length - 1; i++) {
            if (topSong[i].count < topSong[i + 1].count) {
                let temp = topSong[i];
                topSong[i] = topSong[i + 1];
                topSong[i + 1] = temp;
                status = true
            }
        }
    }

    return topSong;
    
    
}

console.log(topChart([
    {"title": "Location Unknown"},
    {"title": "Senorita"},
    {"title": "A Whole New World"},
    {"title": "Senorita"},
    {"title": "Location Unknown"},
    {"title": "Location Unknown"}
]));