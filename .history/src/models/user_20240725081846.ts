import moongoose, {Schema} from 'mongoose';
import { ObjectId } from 'bson';

const   userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id: {
        type: String,
        unique: true,
        default: new ObjectId()
       
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const User = moongoose.model('User', userSchema);

userSchema.c

export default User;