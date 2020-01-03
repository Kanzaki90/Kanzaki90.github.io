var auto_complete_module = (function () {


    function _search(i_city, callback) {

        // gmail
        // let url = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=5nSS4A4M6R0aK7l3xPQfgfgRQWfzB2TV&q=" + i_city + "&language=en-US";

        //walla
        let url = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=GWCsM5VwA33NiOJkmMSRGanNNPLM8Gtr&q=" + i_city + "&language=en-US";

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                let income_data = JSON.parse(this.responseText);

                if (income_data.length === 0) {
                    //alert("Oooops... Something went wrong");
                    modal_toggler("Something wrong came back from the server =( ");
                    return "";
                }

                let city_id_key = income_data[0]["Key"];
                callback(city_id_key, i_city);
            }
        };

        xhttp.open("GET", url, true);
        xhttp.send();
    }

    return {
        search: _search
    };

}());