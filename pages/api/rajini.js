// import upload from "@/utils/Multer";


// export default async (req, res) => {

//     console.log(req);
//     try {
//         const response = await upload.single(req.file);
//         console.log("res: " + response);
//         // const imgUrl = `http://localhost:3000/api/file/${req.file.filename}`;
//         return res.status(200).json(response);
//     } catch (e) {
//         console.log(e);
//         return res.status(500).json(e);
//     }
// };


import middleware from 'middleware/index'
import nextConnect from 'next-connect'

import upload from "@/utils/Multer";
import { Product } from "@/utils/DB";

const handler = nextConnect()
// handler.use(middleware)

handler.use(upload.array("logo"))
handler.post(async (req, res) => {
    console.log(req.body)
    console.log(req.files)

    // const created = await Product.create({
    //     name: "one",
    //     description: "desc",
    //     data: 
    // });

    return res.status(200).json(req.files);
})

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler