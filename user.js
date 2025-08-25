import bcrypt from 'bcryptjs';

class User {
    constructor(username, email, password, id) {
        this.username = username;
        this.email = email;
        this.id = id;
        this.password = null;
    }

    async setPassword(password) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(password, salt);
    }

    async checkPassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}

const user = new User('testUser', 'oussama.adame12@gmail.com', 'oussama', 24);
await user.setPassword('oussama');

export default User;
