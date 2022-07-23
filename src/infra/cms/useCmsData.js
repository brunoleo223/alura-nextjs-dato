export async function useCmsData({query}){

    try {
        const contentCms = await fetch(`https://graphql.datocms.com/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_KEY}`,
            },
            body: JSON.stringify({query})
        })
        .then(async (res) => {
            const body = await res.json();
            return body;
        })

        return {
            data: contentCms.data
        };
    }
    catch (error) {
        throw new Error(error.message);
    }
}