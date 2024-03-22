import {api} from "./api/api";

const port = process.env.PORT ? Number(process.env.PORT) : 3000

api.listen({
    host:'0.0.0.0',
    port: port,
}
).then(()=>{
    console.log(`Server running on port: ${port}`)
});