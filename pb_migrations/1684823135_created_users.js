migrate((db) => {
  const collection = new Collection({
    "id": "6ebtdyne2vxb0fm",
    "created": "2023-05-23 06:25:35.353Z",
    "updated": "2023-05-23 06:25:35.353Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i7jikxjb",
        "name": "username",
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
  const collection = dao.findCollectionByNameOrId("6ebtdyne2vxb0fm");

  return dao.deleteCollection(collection);
})
