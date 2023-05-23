migrate((db) => {
  const collection = new Collection({
    "id": "lktkfiq8zxd2xmq",
    "created": "2023-05-23 06:39:35.187Z",
    "updated": "2023-05-23 06:39:35.187Z",
    "name": "chat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b07bpshr",
        "name": "messages",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "qi5ucdfkd4i2wsk",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lktkfiq8zxd2xmq");

  return dao.deleteCollection(collection);
})
