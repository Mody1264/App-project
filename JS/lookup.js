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
        var eatCost = 0;
        var playCost = 0;
        var otherCost = 0;
        for (var i = 0; i < create.length; i++) {
            console.log(create[i].kind)
            if (create[i].kind == "Food") {
                console.log(create[i].amount)
                eatCost += create[i].amount / 1;
            } else if (create[i].kind == "Play") {
                playCost += create[i].amount / 1;
            } else if (create[i].kind == "Others") {
                otherCost += create[i].amount / 1;
            }
        }
        console.log(eatCost)
        var totalCost = eatCost + playCost + otherCost;
        var eatProportion = Math.round((eatCost / totalCost) * 100) + "%";
        var playProportion = Math.round((playCost / totalCost) * 100) + "%";
        var otherProportion = Math.round((otherCost / totalCost) * 100) + "%";

        $("#eatCost").text(eatCost)
        $("#eatProportion").text(eatProportion)
        $("#playCost").text(playCost)
        $("#playProportion").text(playProportion)
        $("#otherCost").text(otherCost)
        $("#otherProportion").text(otherProportion)
        $("#totalCost").text(totalCost)
    } else {
        var timestart = $("#totalstart").val()

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