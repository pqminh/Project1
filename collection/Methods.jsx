Meteor.methods({
  addTask(text) {
    if (! Meteor.userId()) {
      alert('Permission Denied!');
      throw new Meteor.Error('Not-Authorize');
    }
    Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  removeTask(taskId) {
    const task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      alert('Permission Denied!');
      throw new Meteor.Error('Not-Authorize');
    }else {
      Tasks.remove(taskId);
    }
  },
  setChecked(taskId, setChecked) {
    const task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      alert('Permission Denied!');
      throw new Meteor.Error('Not-Authorize');
    }else {
      Tasks.update(taskId, {$set: {checked: setChecked}});
    }
  },
  setPrivate(taskId, setPrivate) {
    const task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      alert('Permission Denied!');
      throw new Meteor.Error('Not-Authorize');
    }else {
      Tasks.update( taskId, { $set: { private: setPrivate }});
    }
  },
});
