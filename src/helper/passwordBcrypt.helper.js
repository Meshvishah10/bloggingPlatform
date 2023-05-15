import bcrypt from "bcrypt";

//Password Bcrypt Function
export async function passwordBcrypt(password, hash) {
  try {
    const value = await bcrypt.compare(password, hash);
    return value;
  } catch (error) {
    return;
  }
}
