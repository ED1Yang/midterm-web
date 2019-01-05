$(document).ready(function () {
    $('.container').html("");
    $.ajax({
        url: 'https://sporadic.nz/2018a_web_assignment_service/Articles',
        type: 'GET',
        success: function(msg) {
            console.log(msg);
            for (var i = 0; i < msg.length; i++) {
                if(i!==4) {
                    $('.container').append(
                        "<div class=\"row\">" +
                        "<div class=\"col col-md-6 col-12\">" +
                        "<div class=\"card m-2\">" +
                        "<img class=\"card-img-top\" src=\"" + msg[i].imageUrl + "\" alt=\"yum picture\">" +
                        "<div class=\"card-body\">" +
                        "<h5 id=\""+ i+"\" class=\"card-title\">" + msg[i].title + "</h5>\n" +
                        "<p class=\"card-text\">" + msg[i].content + +"</p>\n"
                        + "</div>\n"
                        + "</div>\n"
                        + "</div>\n" +
                        "<div class=\"col col-md-6 col-12\">" +
                        "<div class=\"card m-2\">" +
                        "<img class=\"card-img-top\" src=\"" + msg[i+1].imageUrl + "\" alt=\"yum picture\">" +
                        "<div class=\"card-body\">" +
                        "<h5 id=\""+(i+1)+"\" class=\"card-title\">" + msg[i+1].title + "</h5>\n" +
                        "<p class=\"card-text\">" + msg[i+1].content + +"</p>\n" +
                        "</div>\n" +
                        "</div>\n" +
                        "</div>\n"
                        + "</div>\n"
                    );
                    i++;
                }else{
                    $('.container').append(
                        "<div class=\"row\">" +
                        "<div class=\"col col-md-6 col-12\">" +
                        "<div class=\"card m-2\">" +
                        "<img class=\"card-img-top\" src=\"" + msg[i].imageUrl + "\" alt=\"yum picture\">" +
                        "<div class=\"card-body\">" +
                        "<h5 id=\""+ i+"\" class=\"card-title\">" + msg[i].title + "</h5>\n" +
                        "<p class=\"card-text\">" + msg[i].content + +"</p>\n"
                        + "</div>\n"
                        + "</div>\n"
                        + "</div>\n"
                        + "</div>\n")
                }

            }

        }
    });
});
