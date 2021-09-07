import users from './users/users.service';
// Don't remove this comment. It's needed to format import lines nicely.
export default function (app) {
    app.configure(users);
}
