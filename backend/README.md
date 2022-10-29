# Passos para executar o servidor

## Criar o arquivo .env como o example.env
```bash
# Após alimentar os dados no .env, preencher o endpoint para a consulta externa
BASE_URL_EXTERN=
```

## Subir container docker do MongoDB
```bash
docker compose -f "docker-compose.yaml" up -d --build
```

## Instalar dependências
```bash
yarn
```

## Executar em desenvolvimento
```bash
yarn dev
```

## Executar em produção
```bash
yarn build
yarn start
```
---

🚀 O servidor deverá estar executando normalmente :)
