[![CircleCI](https://circleci.com/gh/mariamihai/udemy-react-authentication.svg?style=svg)](https://circleci.com/gh/mariamihai/udemy-react-authentication)

# udemy-react-authentication

The current project is part of the "React - The Complete Guide (incl Hooks, React Router, Redux)" [Udemy course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).

Contains the implementation done for Section 22.

An overview of all the projects involved can be found [here](../../..).

## Manually uploading the project to AWS S3

- build the project with `npm run build`
- create a new bucket for the project: `aws s3 mb s3://udemy-react-autentication-bucket`
- list existing buckets: `aws s3 ls`
- upload the content of the `build` folder with `read` access: `aws s3 cp . s3://udemy-react-authentication-bucket --recursive --acl public-read` (`.` refers to the content oin the `build` folder)
- delete the bucket: `aws s3 mb s3://udemy-react-autentication-bucket`

AWS CLI S3 commands [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-s3-commands.html#using-s3-commands-managing-buckets-creating).

## Using CircleCI

Integrated with CircleCI, the configuration file can be found under `.circleci/config.yml`.

## Status

**[COMPLETED]** - As I finished the section of the course and the associated project, I am setting a personal status of "Completed" and will probably not update this repository in the near future as this was a learning project.