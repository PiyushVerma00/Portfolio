import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = mongoose.Schema(
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

const User = mongoose.model("User", userSchema);


userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
   this.password = bcrypt.hash(this.password,10)
next()
})

userSchema.methods.isPasswordCorrect = async function(password){
 return await bcrypt.compare(password,this.password)
}


export { User };
