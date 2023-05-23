migrate((db) => {
  const collection = new Collection({
    "id": "qi5ucdfkd4i2wsk",
    "created": "2023-05-23 06:36:39.220Z",
    "updated": "2023-05-23 06:36:39.220Z",
    "name": "message",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zwz9rpiv",
        "name": "text",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("qi5ucdfkd4i2wsk");

  return dao.deleteCollection(collection);
})
