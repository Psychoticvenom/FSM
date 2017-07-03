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
		//���u�����쪱�a
		watch = true;
	  },
      onhear:             function(event, from, to) {
		//ť�O�d��Ĳ�쪱�a
		hear = true;
	  },
	  ondisappear:        function(event, from, to) {
		//�����l�᪱�a
		disappear = false;
	  },
	  onblind:            function(event, from, to) {
		//���a�����b���u��
		blind = false;
	  },
	  onsilent:           function(event, from, to) {
		//�S��ť�쪱�a�����R
		silent = false;
	  },
      oncatched:          function(event, from, to) {
		//�y�H��쪱�a
		catched = true;
	  },

      onleavesearch:      function(event, from, to) { },
      onleavelisten:      function(event, from, to) { },
	  onleavedoubt:       function(event, from, to) { },
      onleavehunt:        function(event, from, to) { },

      onsearch:           function(event, from, to) {
		//�Ӧ^��B
		//����ê�����h
	  }, 
	  onlisten:           function(event, from, to) {
		//�X�jť�O��d��
		//���w�I�]��C�t�^�[��
	  },
	  ondoubt:            function(event, from, to) {
		//��������V��M���a
	  },
      onhunt:             function(event, from, to) {
		//�l�v���a
	  },
      onover:             function(event, from, to) { 
		//�C������
	  }
    }
  });

  fsm.start();
  return fsm;

}
