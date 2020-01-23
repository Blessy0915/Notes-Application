const Note = require('../models/note')
module.exports.count = (req,res)=>
{
    Note.countDocuments({user:req.user._id})
    .then((count)=>
    {
        console.log(count)
        res.json(count)
    })
    .catch((err)=>
    {
        res.josn(err)
    })
}

module.exports.list = (req,res)=>
{
    Note.find({user:req.user._id}).populate('category', ['name'])
    .then((note)=>
    {
        res.json(note)
    })
    .catch((err)=>
    {
        res.json({})
    })
}

module.exports.show = (req,res)=>
{
    const id = req.params.id
    Note.findOne({_id:id, user:req.user._id}).populate('category', ['name'])
    .then((note)=>
    {
        if(note)
        {
            res.json(note)
        }
        else
        {
            res.json({})
        }
    })
    .catch((err)=>
    {
        console.log(err)
    })
}

module.exports.create = (req,res)=>{
    const body = req.body
    const note = new Note(body)
    note.user = req.user._id
    note.save()
    .then((note)=>
    {
        res.json(note)
    })
    .catch((err)=>
    {
        res.json(err)
    })
}

module.exports.update = (req,res) =>
{
    const id = req.params.id
    const body = req.body
    Note.findOneAndUpdate({_id:id, user:req.user._id}, body, {
        new:true , runValidators : true
    }).populate('category', ['name'])
    .then((note)=>
    {
        if(note)
        {
            res.json(note)
        }
        else
        {
            res.json({})
        }
    })
    .catch((err)=>
    {
        res.json(err)
    })
}

module.exports.destroy = (req,res)=>
{
    const id = req.params.id
    Note.findOneAndDelete({_id:id, user:req.user._id}).populate('category', ['name'])
    .then((note)=>
    {
        if(note)
        {
            res.json(note)
        }
        else
        {
            res.json({})
        }
    })
    .catch((err)=>
    {
        res.json(err)
    })
}

