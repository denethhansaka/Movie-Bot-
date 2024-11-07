const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AI_CHAT_BOT', value: 'false' },
    { key: 'OWNER_REACT', value: 'true' },
    { key: 'autoBioEnabled', value: 'false' },
    { key: 'AutoTyping', value: 'true' },
    { key: 'AUTO_READ_CMD', value: 'true' }, 
    { key: 'AUTO_BLock_212', value: 'false' },
    { key: 'AUTO_KICK_212', value: 'false' },
    { key: 'WELCOME', value: 'true' },
    { key: 'button', value: 'true' },
    { key: 'movie', value: 'false' }
];

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Create default environment variables if they don't exist
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });
            if (!existingVar) {
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
