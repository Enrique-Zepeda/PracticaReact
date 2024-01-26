import {Client} from '@notionhq/client'

const DATABASE_ID = '5aadfe51f9524e99a451495fb11c5db1'

const notion = new Client({
    auth: import.meta.env.VITE_REACT_APP_NOTION_TOKEN
});

export const getTenis = async ({ filterBy } = {}) => {
    const query = {database_id: DATABASE_ID}

    if(filterBy){
        query.filter = {
            property: 'name',
            rich_text: {
                equals: filterBy
            }
        }
    }
    const { results } = await notion.databases.query(query)

    return results.map(page => {
        const { properties } = page
        const {name, img, price} = properties

        return{
            id: name.rich_text[0].plain_text,
            img: img.rich_text[0].plain_text,
            price: price.rich_text[0].plain_text,
        }
        


    })
 
}

export const ConnectApi = {
    getTenis,
};




