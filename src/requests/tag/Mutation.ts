import {gql} from '@apollo/client';

export const ADD_TAG = gql`
    mutation Tag($input: [CreateTagInput!]!) {
        addTag(input: $input) {
            recordId
        }
    }
`

