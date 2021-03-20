import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Deployment from '@aws-cdk/aws-s3-deployment';
import { CfnOutput } from '@aws-cdk/core';
import * as cloudfront from '@aws-cdk/aws-cloudfront';

// create stack
export class CloudfrontPortfolioStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create bucket
    const myBucket = new s3.Bucket(this, "WebsiteBucketForCloudfrontPortfolio", {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html"
    });

    // create bucket deployment resource
    const deployment = new s3Deployment.BucketDeployment(this, "deployStaticWebsite", {
      sources: [s3Deployment.Source.asset("../vuejs-app/dist")],
      destinationBucket: myBucket
   });

   // create cloudfront distribution
   const distribution = new cloudfront.CloudFrontWebDistribution(this, 'cdk-example-cfront', {
    originConfigs: [
      {
        s3OriginSource: {
          s3BucketSource: myBucket
        },
        behaviors : [ {isDefaultBehavior: true}]
      }
    ],
  });

   // return for website URL
   new CfnOutput(this, "URL", {
     description: "publicly accessible url",
     value: myBucket.bucketWebsiteUrl
   });
  }
}
