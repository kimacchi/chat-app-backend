migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ebtdyne2vxb0fm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w47vdjlo",
    "name": "activeChats",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "lktkfiq8zxd2xmq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ebtdyne2vxb0fm")

  // remove
  collection.schema.removeField("w47vdjlo")

  return dao.saveCollection(collection)
})
