import { gql} from '@apollo/client';

export const GET_TAG = gql`
    query Tag($id: ID!) {
        tag(id: $id) {
            id,
            name,
            parentId
        }
    }
`

export const GET_TAGS = gql`
    query Tag {
        tags {
            id,
            name,
            parentId
        }
    }
`


