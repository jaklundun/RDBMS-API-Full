exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohorts_table', function(tbl) {
        // creates primary key
        tbl.increments(); 
    
        tbl
        .string('name', 255)
        .notNullable() // sets as required
        .unique('name'); // creates index
        
        
        });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts_table');
};
  
