$(document).ready(function() {
    const global_api = {
        search_movie: `${global_url}/resource/movie/search/`,
        search_cinema: `${global_url}/resource/cinema/search/`
    }
    const searchtable = document.getElementById("searchtable"),
        search_movie_button = document.getElementById('search_movie'),
        search_cinema_button = document.getElementById('search_cinema');




    search_movie_button.onclick=function search_movie(){
        searchtable.innerHTML='';
        $.ajax({
            url: global_api.search_movie,
            type: "GET",
            data:{
                "movieName":document.getElementById("movie_input").value
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(data) {
                for(let i=0;i<data.count;i++){
                    var html_ = "<tbody><tr>" +
                        "<td><img class=\'picture\' src=\'"+data.data[i].posterSmall+"\'/></td>"+
                        "<td><div class=\'movie_name\'>"+data.data[i].title+"</div>"+
                        "<div class=\'movie_time\'>"+data.data[i].pubDate+"</div></td>"+
                        "</tr></tbody>";
                    searchtable.innerHTML += html_;
                }

            },
        });
    }

    search_cinema_button.onclick=function search_cinema(){
        searchtable.innerHTML='';
        $.ajax({
            url: global_api.search_cinema,
            type: "GET",
            data:{
                "cinemaName":document.getElementById("cinema_input").value
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(data) {
                for(let i=0;i<data.count;i++){
                    var html_ = "<tbody><tr>" +
                        "<td><div class=\'movie_name\'>"+data.data[i].cinemaName+"</div>"+
                        "<div class=\'movie_time\'>"+data.data[i].cinemaAddr+"</div></td>"+
                        "</tr></tbody>";
                    searchtable.innerHTML += html_;
                }

            },
        });
    }

});

