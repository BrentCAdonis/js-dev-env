export const schema = {
  "type": "object",
  "properties": {
    "ledgers": {
      "type": "array",
      "minItems": 3,
      "maxItems": 50,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "company.companyName"
          },
          "contact": {
            "type": "string",
            "faker": "internet.email",
          },
          "date": {
            "type": "date",
            "faker": "date.recent",
          }
        },
        required: ['id', 'name', 'suffix', 'date']
      }
    }
  },
  required: ['ledgers']
};
