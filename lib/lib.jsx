Tasks = new Mongo.Collection("tasks");

Tasks.allow({
  insert: function X() {
    return true;
  },
  update: function X() {
    return true;
  },
  remove: function X() {
    return true;
  },
});
