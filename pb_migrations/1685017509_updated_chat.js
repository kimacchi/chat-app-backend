migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lktkfiq8zxd2xmq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g9ssptus",
    "name": "chatId",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lktkfiq8zxd2xmq")

  // remove
  collection.schema.removeField("g9ssptus")

  return dao.saveCollection(collection)
})
