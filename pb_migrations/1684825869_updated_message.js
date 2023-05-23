migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qi5ucdfkd4i2wsk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1tl9ylh8",
    "name": "from",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "6ebtdyne2vxb0fm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qi5ucdfkd4i2wsk")

  // remove
  collection.schema.removeField("1tl9ylh8")

  return dao.saveCollection(collection)
})
