async function rpc(url: string,proxy: boolean,method: string,params?: object,authorization?: string): Promise<object>{
    const input: URL = new URL(proxy?'/api/rpc':url,window.location.href);
    if(proxy){
        input.searchParams.set('url',url);
    }

    const headers: Headers = new Headers({
        'Content-Type': 'application/json',
    });
    if(authorization){
        headers.append('Authorization',authorization);
    }

    return await (await fetch(input,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            jsonrpc: '2.0',
            method: method,
            params: params,
            id: Math.ceil(Math.random()*65536),
        }),
    })).json();
}

export default {
    rpc,
};
