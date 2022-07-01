const Post = require("../models/Post");

exports.nuevoPost = async (req, res) => {
    // crear objeto con info del aviso
    const posteo = new Post(req.body);
    try {
        await posteo.save();
        res.status(200).json({
            ok: true,
            mensaje: "Post agregado con exito",
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            mensaje: "No se pudo crear el posteo",
        });
    }
};

// --------------------------
// get de todos los Usuarios

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).populate("autor").populate({
            path:"posteos.post",
            model: "Aviso"
        })
        res.status(200).json(posts);
        
    } catch (error) {
        res.status(400).json({
            ok: false,
            mensaje: "No se puede consultar posts",
        });
    }
};