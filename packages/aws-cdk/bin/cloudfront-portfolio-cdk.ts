#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CloudfrontPortfolioStack } from '../lib/cloudfront-portfolio-stack';

const app = new cdk.App();

new CloudfrontPortfolioStack(app, 'CloudfrontStack', {

    // add aws region to app
    env: {
        region: 'us-east-1',
    },

});