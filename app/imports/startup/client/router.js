import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { $ } from 'meteor/jquery';


/*                        LANDING ROUTE                       */

export const landingPageRouteName = 'Landing_Page';
FlowRouter.route('/', {
  name: landingPageRouteName,
  action() {
    BlazeLayout.render('Landing_Layout', { main: landingPageRouteName });
  },
});

/*                        DIRECTORY ROUTE                       */

function addDirectoryBodyClass() {
  $('body').addClass('directory-page-body');
}

function removeDirectoryBodyClass() {
  $('body').removeClass('directory-page-body');
}

export const directoryPageRouteName = 'Directory_Page';
FlowRouter.route('/directory', {
  name: directoryPageRouteName,
  action() {
    BlazeLayout.render('Directory_Layout', { main: directoryPageRouteName });
  },
  triggersEnter: [addDirectoryBodyClass],
  triggersExit: [removeDirectoryBodyClass],
});


/*                        USER ROUTES                      */


function addUserBodyClass() {
  $('body').addClass('user-layout-body');
}

function removeUserBodyClass() {
  $('body').removeClass('user-layout-body');
}

const userRoutes = FlowRouter.group({
  prefix: '/:username',
  name: 'userRoutes',
  triggersEnter: [addUserBodyClass],
  triggersExit: [removeUserBodyClass],
});

export const profilePageRouteName = 'Profile_Page';
userRoutes.route('/profile', {
  name: profilePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: profilePageRouteName });
  },
});
export const addBookPageRouteName = 'Add_Books_Page';
userRoutes.route('/add', {
  name: addBookPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: addBookPageRouteName });
  },
});
export const homePageRouteName = 'Home';
userRoutes.route('/home', {
  name: homePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: homePageRouteName });
  },
});
export const browsePageRouteName = 'Browse_Books_Page';
userRoutes.route('/browse', {
  name: browsePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: browsePageRouteName });
  },
});
export const availablePageRouteName = 'Available_Books_Page';
userRoutes.route('/available', {
  name: availablePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: availablePageRouteName });
  },
});
export const yourPageRouteName = 'Your_Books_Page';
userRoutes.route('/your', {
  name: yourPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: yourPageRouteName });
  },
});
export const sellPageRouteName = 'Sell_Books_Page';
userRoutes.route('/sell', {
  name: sellPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: sellPageRouteName });
  },
});
export const editPageRouteName = 'Edit_Sell_Books_Page';
userRoutes.route('/edit', {
  name: editPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: editPageRouteName });
  },
});
export const filterPageRouteName = 'Filter_Page';
userRoutes.route('/filter', {
  name: filterPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: filterPageRouteName });
  },
});

/*                        MISC ROUTES                       */
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('Page_Not_Found');
  },
};
