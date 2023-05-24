migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ebtdyne2vxb0fm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i7jikxjb",
    "name": "username",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ebtdyne2vxb0fm")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
