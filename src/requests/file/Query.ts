import { gql} from '@apollo/client';

export const GET_FILE = gql`
    query File($id: ID!) {
        file(id: $id) {
            id,
            url,
            type,
            subtype,
            imageSize,
            fileSize,
            tags {
                id,
                name
            }
        }
    }
`

export const GET_FILE_TAGS = gql`
    query File($id: ID!) {
        file(id: $id) {
            tags {
                id,
                name
            }
        }
    }
`

export const GET_FILES = gql`
    query File {
        files {
            id,
            url,
            type,
            subtype,
            imageSize,
            fileSize,
            tags {
                id,
                name
            }
        }
    }
`

