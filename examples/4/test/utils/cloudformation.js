const AWS = require('aws-sdk');

const cloudFormation = new AWS.CloudFormation({
    // region: 'eu-west-1',
    // credentials: new AWS.SharedIniFileCredentials({
    //     profile: 'xxx'
    // })
});
exports.getStackOutputs = async (stackName) => {
    const response = await cloudFormation.describeStacks({
        StackName: stackName
    }).promise();

    const result = {};
    if (response.Stacks) {
        (response.Stacks[0].Outputs || []).forEach((output) => {
            if (output.OutputKey && output.OutputValue) {
                result[output.OutputKey] = output.OutputValue;
            }
        });
    }
    return result;
};
