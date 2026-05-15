import mongoose from "mongoose";

import{Model, Schema} from "mongoose";

// const Schema2 = mongoose.Schema;
const ObjectId = Schema.ObjectId;


enum contenttype{
    text  = "Text",
    link = "Link",
    youtube = "Youtube",
    tweet = "Tweet",
}

type con ={
    link : string;
    title : string ;
    tags: mongoose.Types.ObjectId;
    userId : mongoose.Types.ObjectId;
}


type user ={
    username : string;
    password :string;
}


const Users = new Schema<user>({
    username : {type: String ,  required: true},
    password: {type: String ,  required: true}

})

const Content = new Schema<con>({
    title: {type: String, required: true},
    link : {type : String , required: true},
    tags: [{type: mongoose.Types.ObjectId , ref:'Tags'}],
    userId :  { type: Schema.Types.ObjectId, ref: "Users" , required :true},

});


type tag ={
    title : string,
}


const Tags = new Schema<tag>({
    title: {type: String}
})


type linktype ={
    hash : string,
    userId :mongoose.Types.ObjectId;
}

const Link = new Schema<linktype>({
    hash : {type :String } ,
    userId : { type :Schema.Types.ObjectId,  ref: "Users"}
})


export const UserModel = mongoose.model('Users', Users);
export const TagsModel = mongoose.model('tags', Tags);
export const ContentModel = mongoose.model('content', Content);
export const LinkModel = mongoose.model('link', Link);

