const express = require('express'),
    mongoose = require('mongoose');
    videoModal = require('../../models/videoModal');
    router = express.Router();

    const db = "mongodb://root:password1@ds245210.mlab.com:45210/videoplayer";
    mongoose.connect(db,(err)=>{
        if(err){
            console.error("Error "+err);
        }
    });

    router.get('/videos',(req,res)=>{
        videoModal.find({}).exec((err,gettingVideo)=>{
            if(err){
                console.error('Error in retrieving video');
            }else{
                res.json(gettingVideo);
            }
        });
    });
    router.get('/videos/:id',(req,res)=>{
        videoModal.findById(req.params.id).exec((err,gettingVideoById)=>{
            if(err){
                console.error('Error in retrieving video');
            }else{
                res.json(gettingVideoById);
            }
        });
    });
    router.put('/videos/:id',(req,res)=>{
        videoModal.findByIdAndUpdate(req.params.id,
        {
           $set: {title: req.body.title,url:req.body.url,publisher:req.body.publisher,description:req.body.description} 
        },
        {
            new: true
        },
        (err,UpdateVideo)=>{
            if(err){
                console.error(err);
            }else{
                res.json(UpdateVideo);
            }
        })
    });
    router.delete('/videos/:id',(req,res)=>{
        videoModal.findByIdAndRemove(req.params.id).exec((err,deletedVideo)=>{
            if(err){
                console.error(err);
            }else{
                res.json(deletedVideo);
            }
        });
    });
    router.post('/videos',(req,res)=>{
        const newvideo = new videoModal();
        newvideo.title = req.body.title;
        newvideo.url = req.body.url;
        newvideo.publisher = req.body.publisher;
        newvideo.description = req.body.description;
        newvideo.save((err,insertedVideo)=>{
            res.json(insertedVideo);
        });
    });

    module.exports = router;