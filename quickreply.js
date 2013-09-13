// Runs after the document has been parsed and shown
$(document).ready(function() {

  //Make sure that we're on a messages page on facebook and not any other page
  if (window.location.pathname.startsWith('/messages/')) {

    // Select the textarea on the messages page, and bind the keydown event
    $('div#contentArea div[role="main"] textarea').keydown(function(event) {
      // Make sure that Control/Command + Shift is pressed
      if ((event.metaKey || event.ctrlKey) && event.shiftKey) {

        // Get the message for the key
        var msg = getMessageForKey(event.which);

        // Make sure this is a valid key (so for example, Control + Shift shouldn't put anything into the box)
        if (msg !== undefined) {

          // Take the target of the event (a textarea) and put the message in it.
          $(event.target).val(msg);

        }
      }
    });
  }
});

/**
 * Get the message for a given key. To add a message, just add a list of keys (letters defined in lib/keyevent/keyevent.js)
 */
function getMessageForKey(keycode) {
  switch(keycode) {
    case KeyEvent.DOM_VK_A:
      return "A is for ACM!";
    case KeyEvent.DOM_VK_M:
      return "Hey Clare,\n\nJust wanted to let you know there's no food left for the hackathon. I ate it all.\n\nThanks,\nMatthew";
    default:
      return undefined;
  }
}