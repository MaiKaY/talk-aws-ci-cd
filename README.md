# Talk - AWS CI/CD

This repository holds all examples for my talk "One CI/CD to rule them all: Company driven CI/CD"

## Table of contents
1. CEO: Could you please ship the MVP to production as soon as possible?
    - [Source](./examples/1/pipeline.yml#L24-L40)
    - [Build](./examples/1/pipeline.yml#L41-L55)
    - [Deploy](./examples/1/pipeline.yml#L56-L73)
2. QA: Would be cool to have a staging environment system as well
    - [Source](./examples/2/pipeline.yml#L24-L40)
    - [Build](./examples/2/pipeline.yml#L41-L55)
    - [Deploy Staging](./examples/2/pipeline.yml#L58-L73)
    - [Deploy Production](./examples/2/pipeline.yml#L74-L89)
3. QA: Could we please approve all changes before it gets deployed to production?
    - [Source](./examples/3/pipeline.yml#L24-L40)
    - [Build](./examples/3/pipeline.yml#L41-L55)
    - [Deploy Staging](./examples/3/pipeline.yml#L56-L73)
    - [Approval](./examples/3/pipeline.yml#L74-L84)
    - [Deploy Production](./examples/3/pipeline.yml#L85-L102)
4. Devs: We need an acceptance environment for our acceptance tests. CTO: But this should not be so expensive...
    - [Source](./examples/4/pipeline.yml#L24-L40)
    - [Build](./examples/4/pipeline.yml#L41-L55)
    - [TearUp Acceptance Environment](./examples/4/pipeline.yml#L58-L77)
    - [Run Acceptance Tests](./examples/4/pipeline.yml#L78-L88)
    - [TearDown Acceptance Environment](./examples/4/pipeline.yml#L89-L101)
    - [Deploy Staging](./examples/4/pipeline.yml#L102-L123)
    - [Approval](./examples/4/pipeline.yml#L124-L134)
    - [Deploy Production](./examples/4/pipeline.yml#L135-L156)
5. PM: We build so many great things, but who is now responsible to provide us the changelog?!
    - [Source](./examples/5/pipeline.yml#L41-L55)
    - [Build](./examples/5/pipeline.yml#L56-L70)
    - [TearUp Acceptance Environment](./examples/5/pipeline.yml#L73-L94)
    - [Run Acceptance Tests](./examples/5/pipeline.yml#L95-L105)
    - [TearDown Acceptance Environment](./examples/5/pipeline.yml#L106-L118)
    - [Changelog](./examples/5/pipeline.yml#L119-L133)
    - [Deploy Staging](./examples/5/pipeline.yml#L134-L158)
    - [Approval](./examples/5/pipeline.yml#L159-L169)
    - [Deploy Production](./examples/5/pipeline.yml#L170-L194)
6. (optional) CEO: The changelog is awesome! Could we also share it in slack that the whole company is aware of all changes we made?
    - Source
    - Build
    - TearUp Acceptance Environment
    - Run Acceptance Tests
    - TearDown Acceptance Environment
    - Changelog
    - Deploy Staging
    - Approval
    - Slack notification

## How to run examples?
All examples are configured to receive a GitHub oAuth token from [AWS Parameter Store](https://eu-central-1.console.aws.amazon.com/systems-manager/parameters?region=eu-west-1).
1. generate GitHub token following [this instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
2. create `/GITHUB/ACCESS_TOKEN` parameter [here](https://eu-central-1.console.aws.amazon.com/systems-manager/parameters/create?region=eu-west-1)
3. [fork](https://github.com/MaiKaY/talk-aws-ci-cd/fork) this repository 

In the following commands exchange the following values
- `--profile xxx` with your configured AWS profile (e.g. `--profile default`)
- `RepositoryOwner=xxx` with your GitHub account/organization name (e.g. `RepositoryOwner=johndoe`)
- `ArtifactStoreBucket=xxx` with a S3 bucket to drop artifacts (e.g. `ArtifactStoreBucket=myawesomebucket`)

### Example 1
- `npm run deploy:pipeline:1 -- --profile xxx --parameter-overrides RepositoryOwner=xxx ArtifactStoreBucket=xxx`

### Example 2
- `npm run deploy:pipeline:2 -- --profile xxx --parameter-overrides RepositoryOwner=xxx ArtifactStoreBucket=xxx`

### Example 3
- `npm run deploy:pipeline:3 -- --profile xxx --parameter-overrides RepositoryOwner=xxx ArtifactStoreBucket=xxx`

### Example 4
- `npm run deploy:pipeline:4 -- --profile xxx --parameter-overrides RepositoryOwner=xxx ArtifactStoreBucket=xxx`

### Example 5
#### Prepare it
- `npm run prepare:common -- --profile xxx --s3-bucket xxx`
- `npm run deploy:common -- --profile xxx`

#### Run it
- `npm run deploy:pipeline:5 -- --profile xxx --parameter-overrides RepositoryOwner=xxx ArtifactStoreBucket=xxx`
