//$(document).ready(function () {
//    console.log('list leads ready');
//    var params = 'leadState=-1';
//    $.ajax({
//        type: "POST",
//        url: baseurl + 'Home/GetLeadsList',
//        data: params,
//        
//        success: function (data) {
//            $('#selector-line-container').html('').html(data[0]);
//            $('.listleads-overview').html('').html(data[1]);
//            $('.listleads-timeline').html('').html(data[2]);
//            bindViewsToBehaviour();
//        }
//    });
//});

//var selectedLeadId = 0;

//function bindViewsToBehaviour() {
//    $('[id^=detail-lead]').click(function () {
//        var elem = $(this);
//        var temp = $(this).attr('id').split('-');
//        var leadId = temp[2];
//        var data = 'leadId=' + leadId;
//        $.ajax({
//            type: "POST",
//            url: baseurl + 'Home/GetLeadDetail',
//            data: data,
//            //            contentType: 'application/json',
//            success: function (data) {
//                console.log(data);
//                //controllo che non sia già aperto un dettaglio
//                if ($('#lead-detail-container').css('display') == 'block') {
//                    //chiudo il dettaglio
//                    $('#lead-detail-container').css('display', 'none');
//                    $('.detail-lead-spacer-' + selectedLeadId).css('display', "none");
//                }

//                $('#lead-detail-container-content').html('').html(data);
//                $('.detail-lead-spacer-' + leadId).css('display', "block");
//                //calcolo di quanto deve scendere lo scroll
//                var coord = $('#selector-spacer-' + leadId).offset();
//                var remHspace = $(window).height() - (coord.top + $('#lead-detail-container').height());
//                if (remHspace < 0) {
//                    $('#overview-line-container').scrollTop($('#overview-line-container').scrollTop() + ((Math.floor(Math.abs(remHspace) / 100)) + 1) * 100);
//                    $('#selector-line-container').scrollTop($('#selector-line-container').scrollTop() + ((Math.floor(Math.abs(remHspace) / 100)) + 1) * 100);
//                    coord = $('#selector-spacer-' + leadId).offset();
//                }
//                var parentCoord = elem.parents('.overview-table-content-row').offset();
//                var w = elem.parents('.overview-table-content-row').width();
//                var leftPeak = parentCoord.left + w;
//                var elemWidth = leftPeak - coord.left;
//                $('#lead-detail-container').css('top', coord.top);
//                $('#lead-detail-container').css('left', coord.left);
//                $('#lead-detail-container').css('width', elemWidth + 'px');
//                $('#lead-detail-container').css('display', 'block');
//                $('#close-lead-detail').attr('leadId', leadId);

//                $('#overview-line-container').css('overflow-y', 'hidden');
//                $('#selector-line-container').css('overflow-y', 'hidden');
//                $('#horizontal-scollable-body').css('overflow-x', 'hidden');

//                selectedLeadId = leadId;
//            }
//        });
//    });

//    $('#close-lead-detail').click(function () {
//        var leadId = $(this).attr('leadId');
//        $('#lead-detail-container').css('display', 'none');
//        $('.detail-lead-spacer-' + leadId).css('display', "none");
//        $('#overview-line-container').css('overflow-y', 'auto');
//        $('#selector-line-container').css('overflow-y', 'auto');
//        $('#horizontal-scollable-body').css('overflow-x', 'auto');
//    });

//    $('#overview-line-container').scroll(function () {
//        $('#selector-line-container').scrollTop($(this).scrollTop());
//    });

//    $('#selector-line-container').scroll(function () {
//        $('#overview-line-container').scrollTop($(this).scrollTop());
//    });
//}