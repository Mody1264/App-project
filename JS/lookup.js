var fdb = new ForerunnerDB();
var db = fdb.db("createCollotion");
var createCollotion = db.collection('create');
createCollotion.load()

function createAccontingHTMLString(date, kind, option, amount) {
    return "<tr><td>" + date + "</td><td>" + kind + "</td><td>" + option + "</td><td>" + amount + "</td></tr>"
}

$("#Searchbtn").click(function() {
    $("#creattable").find("tr").remove();
    if ($('input[name=timerange]:checked').val() == "month") {
        var date = new Date();
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        var dateString = year + "-" + month + "-" + "01";
        
        var create = createCollotion.find({
            date: {
                $gte: dateString
            }
        });
        console.log(create)
        for (var i = 0; i < create.length; i++) {
            $("#creattable").append(createAccontingHTMLString(create[i].date, create[i].kind, create[i].option, create[i].amount))
        }
    } else {
        var timestart = $("#timestart").val()
        var timeend = $("#timeend").val()
        console.log(timestart)
        var create = createCollotion.find({

            date: {
                $gte: timestart,
                $lte: timeend
            }
        });
        for (var i = 0; i < create.length; i++) {
            $("#creattable").append(createAccontingHTMLString(create[i].date, create[i].kind, create[i].option, create[i].amount))
        }
    }

});