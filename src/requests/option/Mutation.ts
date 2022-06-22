import {gql} from '@apollo/client';

export const ADD_OPTION = gql`
    mutation Tag($input: [CreateTagInput!]!) {
        addTag(input: $input) {
            recordId
        }
    }
`

