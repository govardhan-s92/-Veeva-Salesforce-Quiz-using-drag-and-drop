//Accordian jquery script
$(function () {
    $("#accordion").accordion({
        event: "click hoverintent",
        height: "content"
    });
});

/*
 * hoverIntent | Copyright 2011 Brian Cherne
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 * modified by the jQuery UI team
 */
$.event.special.hoverintent = {
    setup: function () {
        $(this).bind("mouseover", jQuery.event.special.hoverintent.handler);
    },
    teardown: function () {
        $(this).unbind("mouseover", jQuery.event.special.hoverintent.handler);
    },
    handler: function (event) {
        var currentX, currentY, timeout,
            args = arguments,
            target = $(event.target),
            previousX = event.pageX,
            previousY = event.pageY;

        function track(event) {
            currentX = event.pageX;
            currentY = event.pageY;
        };

        function clear() {
            target
                .unbind("mousemove", track)
                .unbind("mouseout", clear);
            clearTimeout(timeout);
        }

        function handler() {
            var prop,
                orig = event;

            if ((Math.abs(previousX - currentX) +
                    Math.abs(previousY - currentY)) < 7) {
                clear();

                event = $.Event("hoverintent");
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[prop] = orig[prop];
                    }
                }
                // Prevent accessing the original event since the new event
                // is fired asynchronously and the old event is no longer
                // usable (#6028)
                delete event.originalEvent;

                target.trigger(event);
            } else {
                previousX = currentX;
                previousY = currentY;
                timeout = setTimeout(handler, 100);
            }
        }

        timeout = setTimeout(handler, 100);
        target.bind({
            mousemove: track,
            mouseout: clear
        });
    }
};
setTimeout(function () {
    $('#ui-id-6 > p.read_more').click(function () {
        $('#accordion').hide();
        document.getElementsByTagName('h1')[0].innerHTML = 'iSnippet - Key Message';
        $('body').append('<article id="key-message"><p>Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac liberoac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quislacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.</p><table><tr><td align="right">Message : </td><td align="left"><input type="text" placeholder="&nbsp;Parent Slide Name from Content Map"></td></tr><tr><td align="right">Description : </td><td align="left"><input type="text" placeholder="&nbsp;External Slide Name from Content Map"></td></tr><tr><td align="right"> Slide Description : </td><td align="left"><input type="text" placeholder="&nbsp;Internal Name from MVR"></td></tr><tr><td align="right"> External Id : </td><td align="left"><input type="text" placeholder="&nbsp;Slide PAID ID / GUID :: Exploria Number"></td></tr><tr><td align="right"> CLM Id : </td><td align="left"><input type="text" placeholder="&nbsp;Slide PAID ID / GUID"></td></tr><tr><td align="right"> Slide version : </td><td align="left"><input type="text" placeholder="&nbsp;Exploria Number"></td></tr><tr><td align="right"> Slide Type : </td><td align="left"><input type="text" placeholder="&nbsp;Undefined"></td></tr><tr><td align="right"> Product : </td><td align="left"><input type="text" placeholder="&nbsp;Respective product"></td></tr></table><img src="images/Content-Map-Explanation.png"  "alt="Content map" style="width:1200px;height:700px;margin-top:15px;"/><a href="quiz.html" target="_self"><p class="read_more">next <span style="font-size: 26px;vertical-align: bottom;line-height: 22px;text-decoration:none;">>  </span></p></a></article>');
    });
}, 20);

/*--------------- Drag and Drop scropts follows ------------------*/
var ques = 0,
    sol = 0,
    x = 0,
    y = 0;

//On Dropped object function
$(".answer").draggable({
    containment: "#containment-wrapper",
    scroll: false,
    cursor: "move",
    revert: "invalid"
}, {
    stop: function () {
        sol = $(this).attr('id').split('l')[1];
        // console.log(sol);
    }
});

//On Drop object function
$(".question").droppable({
    drop: function (event, ui) {
        $('this').css('scale', '1.2%,1.2%');
        ques = $(this).attr('id').split('s')[1];
        // console.log(ques);
        setTimeout(function () {
            test();
        }, 200);
    }
});



function test() {
    console.log(parseInt(ques));
    console.log(parseInt(sol));
    if (parseInt(ques) == parseInt(sol)) {
        console.log('çorrect');
        $('.alert.alert-success').css({
            'position': 'absolute',
            'top': '-9px',
            'transform': 'scale(5)'
        }).fadeIn().delay(100).fadeOut();
        $("div[id='sol" + sol + "']").css({
            'transition': 'linear 0.2s !important',
            'opacity': '0'
        });
        $("div[id='ques" + ques + "']").css('background', "url('images/lockOpen.png') no-repeat");
    } else {
        $("div[id='sol" + sol + "']").css({
            'top': '0',
            'left': '0'
        });
        $('.alert-danger').css({
            'position': 'absolute',
            'top': '-9px'
        }).fadeIn().delay(100).fadeOut();
    }
}

/*--------------- Drag and Drop scropts ends ------------------*/
/*--------------- Alert popup opens ------------------*/

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var r = t.fn.jquery.split(" ")[0].split(".");
    if (r[0] < 2 && r[1] < 9 || 1 == r[0] && 9 == r[1] && r[2] < 1 || r[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function (t) {
    "use strict";

    function r(r) {
        return this.each(function () {
            var e = t(this),
                n = e.data("bs.alert");
            n || e.data("bs.alert", n = new a(this)), "string" == typeof r && n[r].call(e)
        })
    }
    var e = '[data-dismiss="alert"]',
        a = function (r) {
            t(r).on("click", e, this.close)
        };
    a.VERSION = "3.3.6", a.TRANSITION_DURATION = 150, a.prototype.close = function (r) {
        function e() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(s);
        r && r.preventDefault(), o.length || (o = n.closest(".alert")), o.trigger(r = t.Event("close.bs.alert")), r.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(a.TRANSITION_DURATION) : e())
    };
    var n = t.fn.alert;
    t.fn.alert = r, t.fn.alert.Constructor = a, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery);