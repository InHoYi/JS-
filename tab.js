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

// 이벤트 버블링 1번 방법
// for (let i = 0; i < 3; i++){
//     $('.list').on('click', function(e) {
//         if (e.target == document.querySelectorAll('.tab-button')[i]) {
//             openTab(i);
//         }
//     })
// }

// 이벤트 버블링 2번 방법
$('.list').on('click', function(e) {
    // .list만 클릭해도 .list 하위 클래스를 모두 같이 클릭을 당함.
    openTab(e.target.dataset.id);
    // html 태그에 저장한 데이터를 불러오는 방법
    console.log(e.target.dataset.id);
})