function getAvailableHSpace(postId, isFixedHeaderPresent, isDynamicHeaderPresent, isCreationPost, areThereComments) {
    var hScreen = $(window).height();
    if (isFixedHeaderPresent || isDynamicHeaderPresent) {
        var postBlockCoord = $('#special-post-block-' + postId).offset();
    }
    else {
        var postBlockCoord = $('#post-block-' + postId).offset();
    }
    var postBlockMarginTop = getIntFromCssPxAttribute($('#post-text-' + postId).css('margin-top'));
    var postBlockMarginBottom = getIntFromCssPxAttribute($('#post-text-' + postId).css('margin-bottom'));

    var addCommentHeight = $('.add-comment-box').height();
    var postAuthorNameHeight = $('.author-name').height();
    var postBlockPaddingHeight = getIntFromCssPxAttribute($('.post-block').css('padding-top')) * 2;
    
    var specialHeight = 0;
    var commentHeight = 0;

    if(isFixedHeaderPresent) 
    {

        var specialPostBlockHeight = $('#special-post-block-' + postId).height();
        var specialPostBlockPaddingHeight = getIntFromCssPxAttribute($('#special-post-block-' + postId).css('padding-top')) * 2;
        specialHeight = specialPostBlockHeight + specialPostBlockPaddingHeight;

    }
    if(isDynamicHeaderPresent) 
    {

        if (isElementVisible('detail-box-' + postId)) {
            var specialPostBlockHeight = $('#special-post-block-' + postId).height() - $('#detail-box-' + postId).height();
        }
        else {
            var specialPostBlockHeight = $('#special-post-block-' + postId).height();
        }
        var specialPostBlockPaddingHeight = getIntFromCssPxAttribute($('#special-post-block-' + postId).css('padding-top')) * 2;
        specialHeight = specialPostBlockHeight + specialPostBlockPaddingHeight;//  + specialPostDescriptionHeight;

    }

    if (isCreationPost) {
        var offerDetailCreationHeight = $('#lead-detail-' + postId).height();
        specialHeight = specialHeight + offerDetailCreationHeight;
    }
    if(areThereComments) 
    {
        var commentCounterHeight = $('.comment-counter').height();
        var commentBoxPaddingHeight = getIntFromCssPxAttribute($('#comment-box-' + postId).css('padding-top')) + getIntFromCssPxAttribute($('#comment-box-' + postId).css('padding-bottom'));
        if (isElementVisible('more-comments-container-' + postId)) {
            commentHeight = commentCounterHeight + commentBoxPaddingHeight - 55;
        }
        else {
            var cHeight = 55;// $('.comment-container').first().height();
            commentHeight = commentCounterHeight + commentBoxPaddingHeight + cHeight + addCommentHeight;
        }

    }

    var availableSpace = hScreen - (postBlockCoord.top + 
                                        postBlockMarginTop +
                                        postBlockMarginBottom +
                                        addCommentHeight +
                                        postAuthorNameHeight + 
                                        postBlockPaddingHeight +
                                        specialHeight +
                                        commentHeight);



    //sull'available space devo contare anche l'eventuale esplosione del more-comments-container e del dettaglio dell'offerta
    if (isDynamicHeaderPresent && isElementVisible('detail-box-' + postId)) {
    }
    if (areThereComments) {
        if(isElementVisible('more-comments-container-' + postId)) {
        }
        else {
        }
    }
    var ret = availableSpace - 50;
    if (ret > 0) return ret;
    else return 10;
}

function getMaxHeightDynamicBlocks(postId, isFixedHeaderPresent, isDynamicHeaderPresent, isCreationPost, areThereComments, idDetailBlock, idPostBlock, idCommentBlock) {
    var availableSpace = getAvailableHSpace(postId, isFixedHeaderPresent, isDynamicHeaderPresent, isCreationPost, areThereComments);
    var detailsHeight = 0;
    var postHeight = 1;
    var commentsHeight = 0;
    if (idDetailBlock != '' && idDetailBlock != undefined && idDetailBlock != 'null' && isElementVisible(idDetailBlock)) {
        //detailsHeight = $('#' + idDetailBlock).height();
        detailsHeight = 1
    }
    if (idPostBlock != '' && idPostBlock != undefined && idPostBlock != null) {
        //postHeight = $('#' + idPostBlock).height();
    }
    if (idCommentBlock != '' && idCommentBlock != undefined && idCommentBlock != 'null' && isElementVisible('more-comments-container-' + postId)) {
        //commentsHeight = $('#' + idCommentBlock).height();
        commentsHeight = 1;
    }

    var sum = detailsHeight + postHeight + commentsHeight;
    var remspace = availableSpace / sum;

    if ($('#post-text-' + postId)[0].scrollHeight < remspace) {
        availableSpace -= $('#post-text-' + postId)[0].scrollHeight;
        sum -= 1;
        remspace = availableSpace / sum;
    }

    if (idDetailBlock != '' && idDetailBlock != undefined && idDetailBlock != 'null' && isElementVisible(idDetailBlock) && $('#' + idDetailBlock)[0].scrollHeight < remspace) {
        availableSpace -= $('#' + idDetailBlock)[0].scrollHeight;
        sum -= 1;
        remspace = availableSpace / sum;
    }

    $('#post-text-' + postId).css('max-height', remspace + 'px');
    if (idDetailBlock != '' && idDetailBlock != undefined && idDetailBlock != 'null') {
        $('#' + idDetailBlock).css('max-height', remspace + 'px');
    }
    if (areThereComments && isElementVisible('more-comments-container-' + postId)) 
    {
        $('#' + idCommentBlock).css('max-height', remspace + 'px');
    }
}

function isElementVisible(elementId) {
    if ($('#' + elementId).css('display') == 'none') {
        return false;
    }
    else {
        return true;
    }
}

