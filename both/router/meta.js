if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'Coder Meetups',
        suffix: 'Your local coding hangouts'
      }
  });
}
