const AWS = require('aws-sdk');
const uuid = require('uuid/v4');

const { VISITOR_TABLE } = process.env;
const documentClient = new AWS.DynamoDB.DocumentClient();

const greetings = {
    morning: {
        hamburg: ['Moin'],
        de: ['Guten Morgen'],
        en: ['Good Morning']
    },
    noon: {
        hamburg: ['Moin'],
        de: ['Guten Tag'],
        en: ['Good Afternoon']
    },
    evening: {
        hamburg: ['Moin'],
        de: ['Guten Abend'],
        en: ['Good Evening']
    }
};

exports.handler = async () => {
    await documentClient.put({
        TableName: VISITOR_TABLE,
        Item: {
            id: uuid(),
            createdAt: new Date().toISOString()
        }
    }).promise();

    const hours = new Date().getUTCHours();
    const greetingsType = hours < 12 ? 'morning' : hours < 18 ? 'noon' : 'evening';

    return {
        statusCode: 200,
        body: JSON.stringify(greetings[greetingsType])
    };
};
