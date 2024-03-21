import {api} from "./api/api";

const port = process.env.PORT || 3001;

api.listen(port, () => {
    console.log(`Gestao de Frequência Online http://localhost:${port}`);
});