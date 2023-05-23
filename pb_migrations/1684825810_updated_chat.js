migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lktkfiq8zxd2xmq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vv1chtpk",
    "name": "to",
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
  const collection = dao.findCollectionByNameOrId("lktkfiq8zxd2xmq")

  // remove
  collection.schema.removeField("vv1chtpk")

  return dao.saveCollection(collection)
})
