exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.text("VIN").notNullable().unique();
    tbl.text("Make").notNullable();
    tbl.text("Model").notNullable();
    tbl.integer("Mileage").notNullable();
    tbl.text("TitleStatus");
    tbl.text("TransmissionType");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
