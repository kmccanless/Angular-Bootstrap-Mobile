
/*
 * GET users listing.
 */
exports.list = function(req, res){
    res.send(200,contacts);
};
 var contacts = {
    "contacts": [
        {
            "fullname":"Noob Here",
            "email":"myemail@server.com",
            "phone":"123456"
        },
        {
            "fullname":"Newbie There",
            "email":"hisemail@server.com",
            "phone":"589433"
        }
    ]
}
exports.details = function(req, res){
    res.send(200,contact);
};
var contact = {
    contact : {
        "fullname":"Noob Here",
        "email":"myemail@server.com",
        "phone":"123456"

    }
}