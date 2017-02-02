/**
 * @returns {{initialize: Function, focus: Function, blur: Function}}
 */

/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

geotab.addin.<%= root %> = function (api, state) {
  'use strict';

  // the root container for all Global variables and functions in AddIn scope
  var elAddin;

  var toggleBackground = function () {
    elAddin.style.backgroundColor = '#FF0000';

    setTimeout(function () {
      elAddin.style.backgroundColor = '#FFFFFF';
    }, 1000);
  };

  return {
    /**
     * initialize() is called only once when the Add-In is first loaded. Use this function to initialize the
     * Add-In's state such as default values or make API requests (MyGeotab or external) to ensure interface
     * is ready for the user.
     * @param {object} api - The GeotabApi object for making calls to MyGeotab.
     * @param {object} state - The page state object allows access to URL, page navigation and global group filter.
     * @param {function} addInReady - Call this when your initialize route is complete. Since your initialize routine
     *        might be doing asynchronous operations, you must call this method when the Add-In is ready
     *        for display to the user.
     */
    initialize: function (api, state, addInReady) {
      elAddin = document.querySelector('#<%= root %>');

      // MUST call addInReady when done any setup
      addInReady();
    },

    /**
     * focus() is called whenever the Add-In receives focus.
     *
     * The first time the user clicks on the Add-In menu, initialize() will be called and when completed, focus().
     * focus() will be called again when the Add-In is revisited. Note that focus() will also be called whenever
     * the global state of the MyGeotab application changes, for example, if the user changes the global group
     * filter in the UI.
     *
     * @param {object} api - The GeotabApi object for making calls to MyGeotab.
     * @param {object} state - The page state object allows access to URL, page navigation and global group filter.
     */
    focus: function (api, state) {
      // example of setting url state
      state.setState({
        hello: 'world'
      });

      // getting the current user to display in the UI
      api.getSession(session => {
        document.querySelector('#<%= root %>-user').textContent = `${session.userName}'s`;
      });

      // Set Handlers
      elAddin.addEventListener('click', toggleBackground);

      // show main content
      elAddin.className = '';
    },

    /**
     * blur() is called whenever the user navigates away from the Add-In.
     *
     * Use this function to save the page state or commit changes to a data store or release memory.
     *
     * @param {object} api - The GeotabApi object for making calls to MyGeotab.
     * @param {object} state - The page state object allows access to URL, page navigation and global group filter.
     */
    blur: function (api, state) {

      // Hide main content
      elAddin.className = 'hidden';

      // Remove Handlers
      elAddin.removeEventListener('click', toggleBackground);
    }
  };
};
