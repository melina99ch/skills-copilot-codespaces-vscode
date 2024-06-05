function skillsMember() {
    // 1. Get the current user
    const user = Meteor.user();

    // 2. Check if the user is logged in
    if (!user) {
        throw new Meteor.Error('not-authorized', 'You must be logged in.');
    }

    // 3. Check if the user has the correct roles
    if (!Roles.userIsInRole(user, ['admin', 'member'])) {
        throw new Meteor.Error('not-authorized', 'You are not authorized.');
    }

    // 4. Return the user's skills
    return user.profile.skills;
}