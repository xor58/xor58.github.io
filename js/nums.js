function calc_nums_size(n){
    n = n + "";
    return n.length;
}

function nums_to_array(n){
    n = n + "";
    return n.split("");
}

(function($){
    $.fn.extend({
        "love_nums" : function(){
            let o = this;
            if(!o.__nums__object__){
                o.__nums__object__ = "true";
                o.nums_data = {};
                let data = o.nums_data;
                data.n = [];
    
    
                let add_high_num = function(n){
                    let img = $("<div data-v='" + n +"' ></div>");
                    img.css("width","64px");
                    img.css("height","64px");
                    img.css("background-image","url(../img/nums.png)");
                    img.css("background-repeat","no-repeat");
                    img.css("background-position","0px " + n * -64 + "px");
                    img.css("float","left");
                    o.prepend(img)
                    data.n.unshift(img)
                }
    
                let set_num = function(offset, n){
                    let img = data.n[offset];
                    let old_num = img.attr("data-v");
                    if(n != old_num){
                        img.css("background-position","0px " + n * -64 + "px");
                        img.attr("data-v",n + "");
                    }
                }
    
                o.nums_render = function(n){
                    let num_array = nums_to_array(n);
                    let need_more_count = num_array.length - data.n.length;
                    for(let i = 0; i < need_more_count; i++){
                        add_high_num(0);
                    }
                    for(let i = num_array.length-1; i >= 0; i--){
                        set_num(i,num_array[i]);
                    }
                }
    
            }
            return o;
        }
    });
})(jQuery);

function nums_module(id){
    let nums = $("#" + id);

    (function (o) {
        if(!o.__nums__object__){
            o.__nums__object__ = "true";
            o.nums_data = {};
            let data = o.nums_data;
            data.n = [];


            let add_high_num = function(n){
                let img = $("<div src='../img/nums.png' data-v='" + n +"' ></div>");
                img.css("background-image","../img/nums.png");
                img.css("background-repeat","no-repeat");
                img.css("background-position","0px " + n * 64 + "px");
                o.prepend(img)
                data.n.unshift(img)
            }

            let set_num = function(offset, n){
                let img = data.n[offset];
                let old_num = img.attr("data-v");
                if(n != old_num){
                    img.css("background-position","0px " + n * 64 + "px");
                    img.attr("data-v",n + "");
                }
            }

            o.nums_render = function(n){
                let num_array = nums_to_array(n);
                let need_more_count = num_array.length - data.n.length;
                for(let i = 0; i < need_more_count; i++){
                    add_high_num(0);
                }
                for(let i = num_array.length-1; i >= 0; i--){
                    set_num(i,num_array[i]);
                }
            }

        }
        

      })(nums);
}