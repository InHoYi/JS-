// for (let i = 0; i < 3; i++){
//     $('.tab-button').eq(i).on('click', function() {
//         openTab(i);
//     })  
// }

function openTab(tabNumber) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(tabNumber).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(tabNumber).addClass('show');
}

for (let i = 0; i < 3; i++){
    $('.list').on('click', function(e) {
        if (e.target == document.querySelectorAll('.tab-button')[i]) {
            openTab(i);
        }
    })
}