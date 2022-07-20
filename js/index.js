var love_nums;
function calc_date(start,end){
    let diff_time = end.getTime() - start.getTime();
    var days = Math.floor(diff_time/(24*3600*1000))  + 1;
    return days;
}
$(function(){
    love_nums = $("#nums").love_nums();
    let start_date = new Date('2021/06/06');
    console.log(start_date)
    let days = calc_date(start_date,new Date());
    console.log(days)
    love_nums.nums_render(days);
})