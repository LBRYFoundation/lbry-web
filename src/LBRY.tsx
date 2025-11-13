async function rpc(method: string,params?: object): Promise<object>{
    return await (await fetch(import.meta.env.VITE_DEFAULT_DAEMON,{
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
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
