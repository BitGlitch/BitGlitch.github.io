$(document).ready(function(){
	$('.fill_l').append('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam, enim non mattis mollis, arcu nibh tristique magna, et varius nulla nisl quis turpis. Maecenas semper malesuada elit, ut ullamcorper tellus auctor id. Aenean posuere, tortor vulputate hendrerit feugiat, nisi elit luctus lectus, a tempor leo nisl ut ligula. Morbi lacinia elementum risus et pharetra. Donec justo augue, hendrerit quis egestas non, euismod et massa. Nunc dignissim nisl eu porta facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus dapibus tempus nunc, eu aliquet est lobortis non. Aliquam lectus tellus, interdum eu laoreet et, feugiat quis libero. Proin non rutrum sapien. Praesent iaculis interdum tellus.<br><br>Maecenas leo nisi, condimentum ut lectus ut, ultricies dapibus elit. Cras sit amet nulla lectus. Nullam rutrum faucibus eros non porttitor. Praesent iaculis augue lacus, vel luctus sapien lacinia non. Integer interdum eu diam nec dictum. Ut sed erat eget nisl accumsan vulputate. Suspendisse sollicitudin varius neque, vitae pharetra lectus commodo ac. Fusce hendrerit tincidunt enim. Aenean rhoncus scelerisque quam consectetur facilisis. Pellentesque nisl sem, facilisis nec malesuada et, faucibus a felis. Phasellus congue massa at lacinia egestas.');
	$('.fill_s').append('Sed aliquam aliquet metus, sit amet euismod eros hendrerit sit amet. Vestibulum at purus lacus. Pellentesque molestie felis mi, sit amet blandit enim tincidunt at. Proin dapibus arcu quis blandit vehicula.');
	//for (var i = 18; i >= 0; i--) {
	//	$('body').append('<div class="test"></div>');
	//};
	$('.test:nth-child(90)').append('DON\'T CLICK IF YOU VALUE LIFE');
	$('.test:nth-child(90)').click(function() {
		$('.test').addClass('holy_shit');
	});
	$('.test').append('<div class="under"></div><div class="over"><div><h1>TITLE HERE</h1>Wat Is This Man Holy Shit</div></div>');
});

$(function() {
    $(".test").hover(function(e) {
        var el_pos = $(this).offset();
        var edge = closestEdge(e.pageX - el_pos.left, e.pageY - el_pos.top, $(this).width(), $(this).height());
        //log('entered at: '+edge);
        $(this).children('.over').attr('class', 'over').addClass('enter_' + edge);
    }, function(e) {
        var el_pos = $(this).offset();
        var edge = closestEdge(e.pageX - el_pos.left, e.pageY - el_pos.top, $(this).width(), $(this).height());
        $(this).children('.over').attr('class', 'over').addClass('exit_' + edge);
        //log('left at: '+edge+'<br><br>');
    });
});

function closestEdge(x,y,w,h) {
        var topEdgeDist = distMetric(x,y,w/2,0);
        var bottomEdgeDist = distMetric(x,y,w/2,h);
        var leftEdgeDist = distMetric(x,y,0,h/2);
        var rightEdgeDist = distMetric(x,y,w,h/2);

        var min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);
        switch (min) {
            case leftEdgeDist:
                return "left";
            case rightEdgeDist:
                return "right";
            case topEdgeDist:
                return "top";
            case bottomEdgeDist:
                return "bottom";
        }
}

function log(msg) {
    $("#console").append("<pre>" + msg + "</pre>"); 
}

function distMetric(x,y,x2,y2) {
    var xDiff = x - x2;
    var yDiff = y - y2;
    return (xDiff * xDiff) + (yDiff * yDiff);
}