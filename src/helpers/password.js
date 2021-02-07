import argon from "argon2";

async function generatePassword(password) {
  try {
    const hashedPassword = await argon.hash(password);
    return hashedPassword;
  } catch (err) {
    throw err.message;
  }
}

async function verifyPassword(hashedPassword, password) {
  try {
    const isValid = await argon.verify(hashedPassword, password);
    return isValid;
  } catch (err) {
    throw err.message;
  }
}

export { generatePassword, verifyPassword };
