import { gql} from '@apollo/client';

export const GET_TAG = gql`
    query Tag($id: ID!) {
        tag(id: $id) {
            id,
            name
        }
    }
`

export const GET_TAGS = gql`
    query Tag {
        tags {
            id,
            name,
            parent {
                id, 
                name
            }
        }
    }
`