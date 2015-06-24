import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',

  off: true,
  audiocontext: null,
  oscillator: null,
  gainNode: null,

  didInsertElement: function() {
    this.audiocontext = new AudioContext();

    this.oscillator = this.audiocontext.createOscillator();
    this.gainNode = this.audiocontext.createGain();

    this.oscillator.type = 'triangle';

    this.gainNode.connect(this.audiocontext.destination);
    this.oscillator.connect(this.gainNode);
  },

  click: function() {
    if (this.off) {
      this.off = false;
      this.oscillator.start(0);
    } else {
      this.off = true;
      this.oscillator.stop(0);
    }
  }
});
