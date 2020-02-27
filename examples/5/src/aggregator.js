const AWS = require('aws-sdk');

const { AGGREGATION_TABLE } = process.env;
const documentClient = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    const insertedRecords = event.Records.filter((record) => (
        record.eventName === 'INSERT'
    ));
    const unmarshalledRecords = insertedRecords.map((record) => (
        AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
    ));

    const updates = [];
    unmarshalledRecords.forEach((record) => {
        const createdAt = record.createdAt;
        const aggregateDate = new Date(createdAt).toLocaleDateString('en-us');

        updates.push(documentClient.update({
            TableName: AGGREGATION_TABLE,
            Key: {
                date: aggregateDate
            },
            UpdateExpression: 'ADD #totalCount :count',
            ExpressionAttributeNames: {
                '#totalCount': 'count'
            },
            ExpressionAttributeValues: {
                ':count': 1
            }
        }).promise());
    });

    await Promise.all(updates);

    return 'Done.';
};
