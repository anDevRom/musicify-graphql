# Graphql Service

## Установка
- Установите глобально nest cli:
```console
npm install -g @nestjs/cli
```
- Из корня проекта выполните команду:
```console
npm i
```
- Подключение и развертывание БД остается за вами)

## Запуск
- Для запуска, выполните команду:
```console
npm start
```

## Использование
- Откройте браузер и введите:
```console
http://localhost:3000/graphql
```

## Запросы
- Пользователь:
```console
type Query {
  user(id: ID!): User
  jwt(creds: CredentialsInput!): TokenJwt
}

type Mutation {
  register(body: CreateUserInput!): User
}
```
- Сущность:
```console
type Query {
  entity(id: ID!): Entity
  entities(limit: Int, offset: Int): EntitiesCollection
}

type Mutation {
  createEntity(body: CreateEntityInput!): Entity
  updateEntity(id: ID!, body: UpdateEntityInput!): Entity
  deleteEntity(id: ID!): EntityDelete
}
```
- Избранное:
```console
type Query {
  favourites: Favourites
}

type Mutation {
  addTrackToFavourites(id: ID!): Favourites
  addBandToFavourites(id: ID!): Favourites
  addArtistToFavourites(id: ID!): Favourites
  addGenreToFavourites(id: ID!): Favourites
}
```
- Подробное описание типов запросов для каждого модуля можно найти в соответствующих файлах:
```console
src/[moduleName]/[moduleName].graphql
```
либо воспользоваться прекрасным автозаполнением из песочницы) 