'use babel';

import NoteMergerMessageDialog from './note-merger-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(NoteMergerMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'NoteMergerMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'NoteMergerMessageDialog'
    )
    inkdrop.components.deleteClass(NoteMergerMessageDialog);
  }

};
