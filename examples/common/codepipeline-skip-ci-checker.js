const AWS = require('aws-sdk');

const codePipeline = new AWS.CodePipeline();
exports.handler = async (event) => {
    const pipelineName = event.detail.pipeline;
    const pipelineExecutionId = event.detail['execution-id'];

    const execution = await codePipeline.getPipelineExecution({
        pipelineName,
        pipelineExecutionId
    }).promise();

    if (execution && execution.pipelineExecution && !['Stopped', 'Stopping'].includes(execution.pipelineExecution.status)) {
        if (execution.pipelineExecution.artifactRevisions && execution.pipelineExecution.artifactRevisions.length) {
            const commitMessage = execution.pipelineExecution.artifactRevisions[0].revisionSummary || '';
            if (commitMessage.includes('[skip ci]')) {
                try {
                    await codePipeline.stopPipelineExecution({
                        pipelineName,
                        pipelineExecutionId,
                        reason: '"[skip ci]" found'
                    }).promise();
                } catch (e) {
                    if (e.code !== 'DuplicatedStopRequestException') {
                        throw e;
                    }
                }
            }
        }
    }

    return 'Success';
};
