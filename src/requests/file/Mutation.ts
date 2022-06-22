import {gql} from '@apollo/client';

export const ADD_FILES = gql`
    mutation File($files: [Upload!]! $tagIds: [String!]!) {
        addFiles(input: { files: $files, tagIds: $tagIds }) {
            recordId
            record {
                id
                url
                mimetype
                type
                subtype
                imageSize
                fileSize
                tags {
                    id
                    name
                }
            }
        }
    }
`

export const REMOVE_FILE = gql`
    mutation File($files: [Upload!]! $tagIds: [String!]!) {
        addFiles(input: { files: $files, tagIds: $tagIds }) {
            recordId
            record {
                id
                url
                mimetype
                type
                subtype
                imageSize
                fileSize
                tags {
                    id
                    name
                }
            }
        }
    }
`