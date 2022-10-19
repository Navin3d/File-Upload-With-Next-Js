import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
    url: "mongodb+srv://root:root@cluster0.syvha.mongodb.net/?retryWrites=true&w=majority",
});

export default multer({ storage });
