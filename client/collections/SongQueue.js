// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('playFirst', this.playFirst, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.ended, this);

  },

  enqueue: function(song){
    //check whether or not it's the first song
    //if it's the first song, play!
    //if not, wait your turn
    if( song === this.at(0) ){
      this.playFirst();
    } else{
      //do nothing
    }
  },

  dequeue: function(song){
    if( this.length > 0 ){
      this.remove(song);

    }
  },

  playFirst: function(){
    this.at(0).play();
  },

  ended: function(){
    this.shift();
    if(this.length>0){
      this.playFirst();
    }
  }

});
