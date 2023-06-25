import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/usuario";
import jwt from "jsonwebtoken";

export const newUser = async (req: Request, res: Response) => {
  const { username, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  // Validamos si el usuario existe en la base de datos.

  const user = await User.findOne({ where: { username: username } })

  if (user) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el nombre ${username}`,
    })
  }

  try {
    // Guardamos el usuario en la base de datos
    await User.create({
      username: username,
      password: hashedPassword,
    })
    res.json({
      msg: `Usuario ${username} creado exitosamente`,
    })
  } catch (error) {
    res.status(400).json({
      msg: `Upps! Ocurrió un error`,
      error,
    })
  }
}

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body

  // Validamos si el usuario existe en la base de datos.

  const user: any = await User.findOne({
    where: { username: username },
  })

  if (!user) {
    return res.status(400).json({
      msg: `No existe un usuario con el nombre ${username} en la base de datos`,
    })
  }

  // Validamos password.

  const passwordValid = await bcrypt.compare(password, user.password);
  
  if(!passwordValid){
    return res.status(400).json({
      msg: `Password incorrecta`,
    })
  }

  // Generamos Token

const token = jwt.sign({
  usrname:username
},process.env.SECRET_KEY || 'pepito123');

res.json(token);


  /* res.json({
    msg: "Login User",
    body: req.body,
  }) */
}
