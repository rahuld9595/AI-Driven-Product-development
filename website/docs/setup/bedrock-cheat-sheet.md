---
id: bedrock-cheat-sheet
title: Bedrock Cheat Sheet
sidebar_label: Bedrock Cheat Sheet
sidebar_position: 22
---

# Bedrock Cheat Sheet

Quick reference for running the exercises against models hosted in Amazon Bedrock.

## Prerequisites

- An AWS account with Bedrock model access granted for the models you intend to call.
- Credentials available to the AWS SDK, ideally via a named profile rather than environment
  variables in your shell history.

## Confirm access

```bash
aws bedrock list-foundation-models --region us-east-1 --profile my-profile
```

An empty list usually means model access has not been requested for that account and region.

## Minimal invocation

```python
import boto3, json

client = boto3.client('bedrock-runtime', region_name='us-east-1')

response = client.converse(
    modelId='<model-id>',
    messages=[{'role': 'user', 'content': [{'text': 'Summarize this repository.'}]}],
)
print(response['output']['message']['content'][0]['text'])
```

## Notes

- Model identifiers are region-specific; a model available in one region may not be in another.
- Prefer the `converse` API over model-specific payload shapes so the call survives a model swap.
- Bedrock invocations are billed per token. Confirm cost ownership before running exercises at volume.

:::note Verify against current documentation
Model identifiers, regional availability, and API surface change. Treat this page as a
starting point and confirm details against the current AWS documentation.
:::
