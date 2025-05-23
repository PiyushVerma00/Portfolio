import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const adminSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// const newPassword = 'Ayu@password';
// bcrypt.hash(newPassword, 10, (err, hash) => {
//   if (err) throw err;
//   console.log("Hashed Password:", hash);
// });

adminSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
   this.password = bcrypt.hash(this.password,10)
next()
})

adminSchema.methods.isPasswordCorrect = async function(password){
 return await bcrypt.compare(password,this.password)
}

adminSchema.methods.generateToken = function(){
  return jwt.sign({
    _id: this._id,
  },
  process.env.ACCESS_TOKEN_SECRET,{
   expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  }    
)
}
const Admin = mongoose.model("Admin", adminSchema);


export { Admin };
