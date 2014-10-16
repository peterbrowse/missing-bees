var targetDateStart = new Date("October 16, 2014 00:00:00"),
	targetDateEnd = new Date("October 17, 2014 00:00:00"),
	currDate =	new Date();

if (!window.jQuery) {
  var jq = document.createElement('script');
  jq.type = 'text/javascript';
  jq.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
  document.getElementsByTagName('head')[0].appendChild(jq);
  
  jq.onload = function() {
	  get_buzzy();
  }
} else {
	get_buzzy();
}

function get_buzzy() {
	jQuery(document).ready(function() {
		if(currDate > targetDateStart && currDate < targetDateEnd) {
			var targets_low_b = textHunter(document, "b");
			var targets_high_b = textHunter(document, "B");
			
			var targets = targets_low_b.concat(targets_high_b);
			
			jQuery.each(targets, function(key, value) {
			    jQuery(this).text(jQuery(this).text().replace("b",""));
			    jQuery(this).text(jQuery(this).text().replace("B",""));
			});
		}
	});	
}

function textHunter(ancestor, text) {
    var elements= [];
    walk(ancestor);
    return elements;

    function walk(element) {
        var n= element.childNodes.length;
        for (var i= 0; i<n; i++) {
            var child= element.childNodes[i];
            if (child.nodeType===3 && child.data.indexOf(text)!==-1) {
                elements.push(element);
                break;
            }
        }
        for (var i= 0; i<n; i++) {
            var child= element.childNodes[i];
            if (child.nodeType===1)
                walk(child);
        }
    }
}