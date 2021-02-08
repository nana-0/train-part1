exports.index = function(req,res,next){
    //console.log(req.session);
    var arr = ['nana','bb','cc'];
    res.render("index",{
        'title':'Express',
        'names':arr,
        'sess':req.session,
    })
}