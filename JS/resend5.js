var fdb = new ForerunnerDB();
var db = fdb.db("createCollotion");
var createCollotion = db.collection('create');
createCollotion.load()

function creatAccontingHTMLString(date, kind, option, amount) {
    return "<tr><td>" + date + "</td><td>" + kind + "</td><td>" + option + "</td><td>" + amount + "</td></tr>"
}

setTimeout(function() {
    var create = createCollotion.find({}, {
        $orderBy: {
            date: -1
        },
        $limit: 5
    });
    for (var i = 0; i < create.length; i++) {
        $("#creattable").append(creatAccontingHTMLString(create[i].date, create[i].kind, create[i].option, create[i].amount))
    }

},500);