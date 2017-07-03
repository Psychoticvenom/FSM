var watch = false;
var hear = false;
var disappear = true;
var blind = true;
var silent = true;
var catched = false;

function hunterFSM(){
  
  var fsm = StateMachine.create({

    events: [
		{ name: 'start',     from: 'none',      to: 'search' },
		{ name: 'watch',     from: 'search',    to: 'hunt'   },
		{ name: 'watch',     from: 'listen',    to: 'hunt'   },
		{ name: 'watch',     from: 'doubt',     to: 'hunt'   },
		{ name: 'hear',      from: 'search',    to: 'listen' },
		{ name: 'hear',      from: 'listen',    to: 'doubt'  },
		{ name: 'disappear', from: 'hunt',      to: 'search' },
		{ name: 'blind',     from: 'hunt',      to: 'listen' },
		{ name: 'silent',    from: 'listen',    to: 'search' },
		{ name: 'silent',    from: 'doubt',     to: 'listen' },
		{ name: 'catched',   from: 'hunt',      to: 'over'   }
	],

    callbacks: {
      onbeforestart:      function(event, from, to) { },
      onstart:            function(event, from, to) { },

	  oonbeforewatch:     function(event, from, to) { },
      oonbeforehear:      function(event, from, to) { },
	  onbeforedisappear:  function(event, from, to) { },
	  onbeforeblind:      function(event, from, to) { },
	  onbeforesilent:     function(event, from, to) { },
      onbeforecatched:    function(event, from, to) { },

      onwatch:            function(event, from, to) { 
		//視線捕捉到玩家
		watch = true;
	  },
      onhear:             function(event, from, to) {
		//聽力範圍接觸到玩家
		hear = true;
	  },
	  ondisappear:        function(event, from, to) {
		//完全追丟玩家
		disappear = false;
	  },
	  onblind:            function(event, from, to) {
		//玩家消失在視線中
		blind = false;
	  },
	  onsilent:           function(event, from, to) {
		//沒有聽到玩家的動靜
		silent = false;
	  },
      oncatched:          function(event, from, to) {
		//獵人抓到玩家
		catched = true;
	  },

      onleavesearch:      function(event, from, to) { },
      onleavelisten:      function(event, from, to) { },
	  onleavedoubt:       function(event, from, to) { },
      onleavehunt:        function(event, from, to) { },

      onsearch:           function(event, from, to) {
		//來回踱步
		//往障礙物走去
	  }, 
	  onlisten:           function(event, from, to) {
		//擴大聽力圈範圍
		//站定點（放慢速）觀察
	  },
	  ondoubt:            function(event, from, to) {
		//往音源方向找尋玩家
	  },
      onhunt:             function(event, from, to) {
		//追逐玩家
	  },
      onover:             function(event, from, to) { 
		//遊戲結束
	  }
    }
  });

  fsm.start();
  return fsm;

}
