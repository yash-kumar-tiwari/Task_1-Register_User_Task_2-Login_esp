import '../models/connection.js';
import url from 'url';
import path from 'path';
import jwt from 'jsonwebtoken';
import random from 'rand-token'

//static files path
const __dirname = url.fileURLToPath(new URL ('.', import.meta.url));

//import schema for use
import RegisterSchemaModel from '../models/userModel.js';

export var registerUser = async (req, res, next)=>{

    //extract content from UI
    var userDetail = req.body;
    const file = req.files.profilepic; 
    // console.log(userDetail);
    // console.log(file);

    if (req.body.password === req.body.cpassword)
    {
        if(file)
        {
            //modify data as per requirement & move file to folder
            var profilepicnm = Date.now()+"_"+file.name;
            var filepath = path.join(__dirname, "../../client/public/assets/uploads/profilepic",profilepicnm);
            file.mv(filepath);
            var userList = await RegisterSchemaModel.find();
            var len = userList.length;
            var _id = (len==0)? 0: userList[len-1]._id+1;
            userDetail = {...userDetail, "profilepicnm":profilepicnm , "_id":_id ,"status":0, "role":"user","info":Date()};
            var result = await RegisterSchemaModel.create(userDetail);
            if(result)
                return res.status(200).json({"output":"User Registered Successfully...."});
            else
                return res.status(500).json({"output": "Server Error"});
        }
        else
        {
            return res.status(200).json({"output": "File Not Submitted"});
        }
    }
    else
    {
        return res.status(200).json({"output": "Passwords do not match"});
    }
}

export var userLogin = async (req, res, next)=>{
    
    var userDetail = req.body;
    userDetail = {...userDetail, "status":1};
    // console.log(userDetail);
    var result = await RegisterSchemaModel.find(userDetail);
    // console.log(result);

    if(result.length!=0)
    {
        let randomKey = random.generate(25);
        let payload = {"subject":result[0].email};
        let token = jwt.sign(payload, randomKey);
        // let token = jwt.token(payload,Date.now());
        res.status(200).json({"token":token,"userDetails":result[0]});
        // console.log(result[0]);
    }
    else
    {
        res.status(200).json({"token":"error"});            
    }        
}

export var manageUser = async (req, res, next)=>{
    var condition_obj = {"role":"user"}
    var userList = await RegisterSchemaModel.find(condition_obj);

    // console.log(userList);

    if(userList.length != 0 )
    {        
        return res.status(200).json({"userDetails":userList}); 
    }
    else
    {
        return res.status(500).json({"userDetails":"error"});
    }
}