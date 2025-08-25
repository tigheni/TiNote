import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

class User {
    constructor(username, email, password, id) {
        this.username = username;
        this.email = email;
        this.id = id || uuidv4();
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

class UserManager {
    constructor() {
        this.users = new Map();
    }

    addUser(user) {
        if (this.users.has(user.id)) {
            throw new Error('User already exists');
        }
        this.users.set(
            new User(user.username, user.email, user.password, user.id).id,
            user
        );
    }

    getUser(id) {
        return this.users.get(id);
    }

    async authenticate(id, password) {
        const user = this.getUser(id);
        if (!user) {
            return false;
        }
        return await user.checkPassword(password);
    }
}
const userManager = new UserManager();
const user = new User('testUser', 'oussama.adame12@example.com', uuidv4());
const user2 = new User('testUser2', 'fasdfadsfasdfcom', uuidv4());
await user.setPassword('oussama');
await user2.setPassword('tig');
userManager.addUser(user);
userManager.addUser(user2);
