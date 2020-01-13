exports.UploadTutorials = [tutorials.fields([
    { name: 'tutorial', maxCount: 5 }
    ]), function (req, res) {
    const addTutorials = new Tutorials({
        question: req.body.question,
    });
    faq.save()
    .then(data=>{
        res.send({ response: true, message: 'Data added successfully !!!', data: data })
        return
    }).catch(err => {
        console.log(err)
        res.send({ response: false, message: 'Server encountered some error !!!' })
        return
    })

    // if(tutorial){
        var data
        const addTutorials = new Tutorials({
            tutorial= req.files.tutorial
            // data = tutorial
        })
        faq.save().then(data=>{
            res.send({
                response:true,
                data:data,
                message:"File uploaded successfully"
            })
            return
        },err=>{
            res.send({
                response:false,
                //data:tutorial,
                message:"Server encountered some error !!!"
            })
            return
        })
    // }else {
    //     res.send({
    //         response:false,
    //         message:'File not uploaded'
    //     })
    // }

}]