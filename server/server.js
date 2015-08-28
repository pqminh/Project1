Meteor.publish('tasks', function X() {
  return Tasks.find({
    $or: [
      { private: {$ne: true}},
      { owner: this.userId},
    ],
  });
});
