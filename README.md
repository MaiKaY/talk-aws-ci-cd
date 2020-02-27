# Talk - AWS CI/CD

This repository holds all examples for my talk "One CI/CD to rule them all: Company driven CI/CD"

## Table of contents
1. CEO: Could you please ship the MVP to production as soon as possible?
    - [Source](./examples/1/pipeline.yml#L24-L40)
    - [Build](./examples/1/pipeline.yml#L41-L55)
    - [Deploy](./examples/1/pipeline.yml#L56-L73)
2. QA: Would be cool to have a staging environment system as well
    - Source
    - Build
    - Deploy Staging
    - Deploy Production
3. QA: Could we please approve all changes before it gets deployed to production?
    - Source
    - Build
    - Deploy Staging
    - Approval
    - Deploy Production
4. Devs: We need an acceptance environment for our acceptance tests. CTO: But this should not be so expensive...
    - Source
    - Build
    - TearUp Acceptance Environment
    - Run Acceptance Tests
    - Run Acceptance Tests
    - TearDown Acceptance Environment
    - Deploy Staging
    - Approval
    - Deploy Production
5. PM: We build so many great things, but who is now responsible to provide us the changelog?!
    - Source
    - Build
    - TearUp Acceptance Environment
    - Run Acceptance Tests
    - Run Acceptance Tests
    - TearDown Acceptance Environment
    - Changelog
    - Deploy Staging
    - Approval
    - Deploy Production
6. (optional) CEO: The changelog is awesome! Could we also share it in slack that the whole company is aware of all changes we made?
    - Source
    - Build
    - TearUp Acceptance Environment
    - Run Acceptance Tests
    - Run Acceptance Tests
    - TearDown Acceptance Environment
    - Changelog
    - Deploy Staging
    - Approval
    - Slack notification
