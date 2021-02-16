import bcrypt from "bcrypt-nodejs";

const encryptNewPassword = async (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt);

    return hash;
}

export default encryptNewPassword;