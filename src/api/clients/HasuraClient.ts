export const query = (query) => {
    return new Promise(resolve => {
        fetch('https://foster-behavior-hasura.herokuapp.com/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query
            })
        })
        .then(r => r.json())
        .then(data => resolve(data));
    })
}

export const mutate = (mutation, variables) => {
    return new Promise(resolve => {
        fetch('https://foster-behavior-hasura.herokuapp.com/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: mutation,
                variables
            })
        })
        .then(r => r.json())
        .then(data => resolve(data));
    })
}
