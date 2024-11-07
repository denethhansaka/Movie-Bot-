const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '2zwBBZRY#iilEYqCXhmOB8rVEzfM2fY9Fqb7z1BFerCSsr2V4-Qs', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/',// Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94761864425',    // Enter Your Owner Number
};
