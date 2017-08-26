var fdb = new ForerunnerDB();
var db = fdb.db("createCollotion");
var createCollotion = db.collection('create');

createCollotion.load()

$("#submit").click(function() {
    var date = $("#date").val()
    var kind = $("#kind").val()
    var option = $("#option").val()
    var amount = $("#amount").val()

    createCollotion.insert({
        date: date,
        kind: kind,
        option: option,
        amount,
    });
    createCollotion.save()
    alert("complete")

    $("#date").val("")
    $("#kind").val("")
    $("#option").val("")
    $("#amount").val("")

});