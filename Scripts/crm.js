/// <reference path="jquery-1.7.1.js" />
/// <reference path="jquery-ui-1.8.20.js" />
/// <reference path="jquery.validate.js" />
/// <reference path="jquery.validate.unobtrusive.js" />
/// <reference path="knockout-2.1.0.debug.js" />

$(document).ready(function () {
    $('#body').height($(window).height() - ($('#main-navbar').height() + $('header').height() + $('#second-navbar').height() + $('#lead-description-header').height()) - 30);
    resizeScrollableBody();
    //bind switch top menu block colors
    $('.top-menu-block').mouseover(function () {
        switchTopMenuBlockColors($(this));
    });
    $('.top-menu-block').mouseout(function () {
        switchTopMenuBlockColors($(this));
    });
    //////

    //    //show new lead wizard
    //    $('#add-lead-button').click(function () {
    //        $('#left-menu').css("display", "none");
    //        $('#new-lead-wizard-container').css("display", "inline-block");
    //        //carico anche la partial view con l'ajax
    //        $.ajax({
    //            url: baseurl + 'Home/Newlead',
    //            success: function (data) {
    //                $('#new-lead-wizard-container').html(data);
    //            }
    //        });
    //    });

    $('#modalDiv').find('.ok_button').click(function () {
        $('#modalTabelGray').hide();
        $("#create-ipm-process-bg").css({ "background-color": "rgba(0, 0, 0, 0.6)" });
    });

   


    //popover al click dell'icon a in alto a dx
    //$('#personal-menu-avatar').click(function () {
    $('#personal-menu-clickable-area').click(function () {
        if ($('#popover-menu').css('display') == 'none') {
            $('#popover-menu').css('display', 'block');
        }
        else {
            $('#popover-menu').css('display', 'none');
        }
    });

    //logout
    $('#logout-div').click(function () {
        $.ajax({
            url: baseurl + 'Home/Logout',
            success: function (data) {
                window.location.replace(baseurl + 'Home/Login');
            },
            error: function(data) {
                showModalMessage('Fatal error');
            }
        });
    });

    window.addEventListener("resize", onWindowResizeFunctionHandler);

    //resize del logo nel layout
    resizeLogo();

    $('.clickable').click(function () {
        location.reload();
    });
    
   
});

function onWindowResizeFunctionHandler() {
    $('#body').height($(window).height() - ($('#main-navbar').height() + $('header').height() + $('#second-navbar').height()) - 30);
    resizeScrollableBody();
    //resize anche dell'header della lista dei lead
    resizeListLeadHeader();
    //resize del logo nel layout
    resizeLogo();
    //resizeOverviewFont
    resizeOverviewFont();
}


function var_dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }

    alert(out);



    /* var pre = document.createElement('pre');
     pre.innerHTML = out;
     document.body.appendChild(pre) */
}

function resizeOverviewFont() {
    $('.lead-value-string').css('font-size', '26px');
    var wBlock = $('.overview-column-3').width() - getIntFromCssPxAttribute($('.lead-value-string').css('margin-right'));
    while($('.lead-value-string').width() >= wBlock) {
        var currentFontSize = getIntFromCssPxAttribute($('.lead-value-string').css('font-size'));
        $('.lead-value-string').css('font-size', (currentFontSize-1) + 'px');
    }
}

function resizeLogo() {
    if($(window).height() < 800) {
        $("#logo-img").attr("src", baseurl + 'Images/logoSmall.png');
    }
    else {
        $("#logo-img").attr("src", baseurl + 'Images/logo.png');
    }
}

function resizeScrollableBody() {
    //resize dello scrollable body
    horizontalScrollBarCoord = $('#horizontal-scollable-body').offset();
    $('#horizontal-scollable-body').height($(window).height() - horizontalScrollBarCoord.top  );
}

function switchTopMenuBlockColors(element) {
    var bgColor = element.css("background-color");
    var textColor = element.find('.top-menu-block-title').css("color");

    element.css("background-color", textColor);
    element.find('.top-menu-block-title').css("color", bgColor);
    element.find('.top-menu-block-sub-title').css("color", bgColor);
    element.find('.top-menu-block-lead-numbers').css("color", bgColor);
    element.find('.top-menu-block-lead-numbers-description').css("color", bgColor);
    element.find('.moreAccountAvatar').css("color", bgColor);
}

function showModalMessage(message) {

    var heightCorrection = 14*(message.match(/<br/g) || []).length;
    $('#modalDiv').height($('#modalDiv').height() + heightCorrection);

    var wContainer = $('#modalDiv').width();
    var hContainer = $('#modalDiv').height();
    var wScreen = $(window).width();
    var hScreen = $(window).height();
    $('#modalDiv').css('left', (wScreen / 2 - wContainer / 2));
    $('#modalDiv').css('top', (hScreen / 2 - hContainer / 2));
    var errorString = '<b>Warning:</b><br /><br /> ' + message;
    $('#modalDiv').find('.message').html('').html(errorString);
    $('#modalTabelGray').show();
}

function getUserLang() {
    //browser language
    //    $.ajax({
    //        url: "http://ajaxhttpheaders.appspot.com",
    //        dataType: 'jsonp',
    //        success: function (headers) {
    //            language = headers['Accept-Language'];
    //            console.log(language);
    //        }
    //    });
    //    console.log("The language is: " + userLang);
    
    var userLang = navigator.language || navigator.userLanguage;
    return userLang;
}

function setUserInfoInPopoverMenu(nome, cognome, idUtente, avatarFileName) {
    $('#username-div').find('span').text('').text(nome + ' ' + cognome);
    $('#personal-menu-name').text('').text(nome + ' ' + cognome);
    data = 'userId=' + idUtente;
    data += '&filenameImage=' + avatarFileName;
    $.ajax({
        type: "POST",
        url: baseurl + "Home/CheckUserAvatarPresence",
        data: data,
        success: function (data) {
            if(data) {
                $('#personal-menu-avatar').css('background', 'url(' + baseurl + 'Media/Users/' + idUtente + avatarFileName + ') no-repeat center').css('background-size', '100% 100%'); 
            }
            else {
                $('#personal-menu-avatar').css('background-size', '100% 100%');
            }
        },
        error: function(data) {
            showModalMessage('Fatal error');
        }
    });
}

function setAutocompleteTextInput(inputDom, JsonIntStringListOptions, inputHidden) {
    inputDom.autocomplete({
        source: JsonIntStringListOptions,
        select: function (event, ui) {
            event.preventDefault();
            inputDom.val(ui.item.label);
            inputHidden.val(ui.item.value).trigger('change');
        },
        focus: function (event, ui) {
            inputDom.val(ui.item.label);
            event.preventDefault(); // Prevent the default focus behavior.
        }
    });

    inputDom.blur(function () {
        //controllo che ci sia almeno un altro valore uguale nella lista -- caso in cui l'ho scritto da solo
        var value = $(this).val();
        var keyVal = '0';
        var k;
        for (k = 0; k < JsonIntStringListOptions.length; ++k) {
            if (JsonIntStringListOptions[k].label == value) {
                inputHidden.val(JsonIntStringListOptions[k].value);
                keyVal = JsonIntStringListOptions[k].value;
            }
        }
        if (keyVal == '0') {
            inputHidden.val('0');
            $(this).val('');
        }
    });
}

function setAutocompleteTextInputAndAlwaysAddCreateNew(inputDom, JsonIntStringListOptions, inputHidden) {
    inputDom.autocomplete({
        source: JsonIntStringListOptions,
        response: function(event, ui) {
            var createRes = new Object();
            createRes.label = "Create new...";
            createRes.value = -1;
            ui.content.unshift(createRes);
        },
        focus: function( event, ui ) {
            if(ui.item != undefined) {
                inputDom.val( ui.item.label );
            }
            return false;
        },
        select: function( event, ui ) {
            if(ui.item != undefined) {
                inputDom.val( ui.item.label );
                inputHidden.val(ui.item.value).trigger('change');
            }
            return false;
        },
        open: function(){
        }
    });

    inputDom.focus(function() {
        inputDom.autocomplete( "search", " " );
    });

    inputDom.blur(function () {
        //controllo che ci sia almeno un altro valore uguale nella lista -- caso in cui l'ho scritto da solo
        var value = $(this).val();
        var keyVal = '0';
        var k;
        for (k = 0; k < JsonIntStringListOptions.length; ++k) {
            if (JsonIntStringListOptions[k].label == value) {
                inputHidden.val(JsonIntStringListOptions[k].value);
                keyVal = JsonIntStringListOptions[k].value;
            }
        }
        if (keyVal == '0') {
            inputHidden.val('0');
            $(this).val('');
        }
    });
}

function setAutocompleteTextInputWithCRUD(inputDom, JsonIntStringListOptions, inputHidden, addCRUDButton) {
    inputDom.autocomplete({
        source: function (request, response) {
            var result = $.ui.autocomplete.filter(JsonIntStringListOptions, request.term);
            
            if (result.length == 0) {
                addCRUDButton.show();
            }
            else {
                addCRUDButton.hide();
            }
            
            response(result);
        },
        //source: JsonIntStringListOptions,
        select: function (event, ui) {
            event.preventDefault();
            inputDom.val(ui.item.label);
            inputHidden.val(ui.item.value).trigger('change');
            addCRUDButton.hide();
        },
        focus: function (event, ui) {
            inputDom.val(ui.item.label);
            event.preventDefault(); // Prevent the default focus behavior.
        },
        create: function () {
            $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                console.log(baseurl + 'Images/ico_elimina.png');
                var retValue = $('<li class="crud-autocomplete-item" style="position: relative;">')
                    .append(item.label + '<img class="delete-autocomplete-item" id="delete_autocomplete_item- ' + item.value + '" src="' + baseurl + '/Images/ico_delete.png" />')
                    .appendTo(ul);

                $('[id^=delete_autocomplete_item]').unbind('click');
                $('[id^=delete_autocomplete_item]').click(function () {
                    // Create the event
                    var temp = $(this).attr('id').split('-');
                    var idElement = temp[1];
                    var event = new CustomEvent("autocompleteDeletedItem", { "idElementToDelete": idElement });
                    event.idElementToDelete = idElement;

                    // Dispatch/Trigger/Fire the event
                    document.dispatchEvent(event);
                });

                return retValue;
            };
        }
    });

    inputDom.blur(function () {
        //controllo che ci sia almeno un altro valore uguale nella lista -- caso in cui l'ho scritto da solo
        var value = $(this).val();
        var keyVal = '0';
        var k;
        for (k = 0; k < JsonIntStringListOptions.length; ++k) {
            if (JsonIntStringListOptions[k].label == value) {
                inputHidden.val(JsonIntStringListOptions[k].value);
                keyVal = JsonIntStringListOptions[k].value;
            }
        }
        if (keyVal == '0') {
            inputHidden.val('0');
            if (addCRUDButton.css('display') == 'none') {
                $(this).val('');
            }
        }
        if (inputDom.val() == '') {
            addCRUDButton.hide();
        }
    });
}

function findChoiceInAutocompleteOptions(JsonIntStringListOptions, keyValue) {
    var k;
    for (k = 0; k < JsonIntStringListOptions.length; ++k) {
        if (JsonIntStringListOptions[k].value == keyValue) {
            return JsonIntStringListOptions[k].label;
        }
    }
}

function closeContextSearchBox() {
    $('#contextSearchBlock').animate(
        {
            height: 0,
        }, 
        500, 
        function () {
            $('#contextSearchBlock').remove();// css('display', 'none');
        }
    );
}

function showContextualSearch(actionUrl, params, elementToArriveOnTop) {
    var data = '';
    for (var i in params) {
        data += '&' + i + '=' + params[i];
    }
    data = data.substring(1, data.length);
    $.ajax({
        type: "POST",
        url: baseurl + actionUrl,
        data: data,
        success: function (data) {
            if (data.isRedirect) {
                window.location.href = data.redirectUrl;
            }
            $('#body').append(data);
            var searchHeight = 200;
            if(elementToArriveOnTop != null && elementToArriveOnTop.length > 0 && elementToArriveOnTop.css('display') != 'none') {
                //calcolo l'altezza della finestra di search dinamicamente
                var coord = elementToArriveOnTop.offset();
                var searchHeight = coord.top - parseInt($('#contextSearchBlock').css('padding-top').substring(0, $('#contextSearchBlock').css('padding-top').length -2)) - parseInt($('#contextSearchBlock').css('padding-bottom').substring(0, $('#contextSearchBlock').css('padding-bottom').length -2));
            }
            $('#contextSearchBlock').width($(window).width() - getIntFromCssPxAttribute($('#contextSearchBlock').css('padding-left')) - getIntFromCssPxAttribute($('#contextSearchBlock').css('padding-right')));
            //calcolo la width della form
            $('#contextSearchBlock').find('form').width($('#contextSearchBlock').width() - getIntFromCssPxAttribute($('#contextSearchBlock').css('padding-left')) - getIntFromCssPxAttribute($('#contextSearchBlock').css('padding-right')));
            var rightSearchButton = getIntFromCssPxAttribute($('#contextSearchBlock').css('padding-right'));
            $('#context-search-content-submit').css('right', rightSearchButton + 'px');
            $('#contextSearchBlock').animate(
                {
                    height: searchHeight,
                }, 
                500
            );
        },
        error: function(data) {
            showModalMessage('Fatal error');
        }
    });
}

function scrollToNowInTImeline() {
//    if(overflow == undefined) overflow = 0;
//    //document.getElementById('thumb_window').scrollWidth
//    console.log($('#horizontal-scollable-body').get(0).scrollWidth);
//    console.log($('#body').width());
//    console.log($('#lead-history-container').width());
//    
    $('#horizontal-scollable-body').animate(
        {
            scrollLeft: $('#horizontal-scollable-body').get(0).scrollWidth,
        }, 
        1000
    );
}

function resizeListLeadHeader() {
    //resize header 
    $('.table-content-firstrow-overview').width($('.overview-table-content-row').width());
}

function setCursorWait() {
//    console.log('wait');
    $("body").css("cursor", "progress");
}

function setCursorNormal() {
//    console.log('go');
    $("body").css("cursor", "default");
}

function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//var indexOf = function(needle) {
//    if(typeof Array.prototype.indexOf === 'function') {
//        indexOf = Array.prototype.indexOf;
//    } else {
//        indexOf = function(needle) {
//            var i = -1, index = -1;

//            for(i = 0; i < this.length; i++) {
//                if(this[i] === needle) {
//                    index = i;
//                    break;
//                }
//            }

//            return index;
//        };
//    }

//    return indexOf.call(this, needle);
//};

function getIntFromCssPxAttribute(input) {
    if (input) {
        return parseInt(input.substring(0, input.length - 2));
    }
}

function mainNavBarSelectionStyle(idElementToSelect) {
    $('#main-navbar-ul').find('li').each(function() {
        $(this).css('font-weight', '300');
    });
    $('#'+idElementToSelect).css('font-weight', '600');
    if(idElementToSelect == 'main-navbar-target') {
        $('#main-navbar-update-target').css('display', 'inline-block');
    }
    else {
        $('#main-navbar-update-target').css('display', 'none');
    }
}

function setDynamicMaxHeightToBlock(inputBlock, bottomLimitBlock, margin) {
   
    var inputCoord = inputBlock.offset();
    var bottomCoord = bottomLimitBlock.offset();
    var maxHeight = (bottomCoord.top - inputCoord.top) - margin;
    inputBlock.css('max-height', maxHeight + 'px');
}

function setDynamicHeightToBlock(inputBlock, bottomLimitBlock, margin) {
    var inputCoord = inputBlock.offset();
    var bottomCoord = bottomLimitBlock.offset();
    var maxHeight = (bottomCoord.top - inputCoord.top) - margin;
    inputBlock.css('height', maxHeight + 'px');
}

function getActualFormattedDate() {
    var myDate = new Date();
    var month = (myDate.getMonth()+1).toString();
    var day = myDate.getDate().toString();
    if(month.length < 2) month = '0' + month;
    if(day.length < 2) day = '0' + day;
    var todayString =day + '/' + month + '/' + myDate.getFullYear();
    return todayString;
}

function JQelementHasAttribute(JQelement, attributeName){
    var attr = JQelement.attr(attributeName);
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    return (typeof attr !== typeof undefined && attr !== false);
}

var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });
}

function setBlockHeightUntilNextElement(elementIdToSetHeight, netxElementId, margin) 
{
 
    if ($('#' + elementIdToSetHeight).offset() != undefined)
    {
        var top = $('#' + elementIdToSetHeight).offset().top;
    }  

    if ($('#' + netxElementId).offset() != undefined)
    {
        var top2 = $('#' + netxElementId).offset().top;
    }
    if(top != 0 && top2 != 0) {
        if(margin != undefined) {
            $('#' + elementIdToSetHeight).height(top2 - top - margin);
        }
        else {
            $('#' + elementIdToSetHeight).height(top2 - top);
        }
    }
}

function uploadImage(htmlElement, resourceId, folder, callback) {
    console.log('uploadImage');
    console.log('htmlElement', htmlElement);
    console.log('resourceId', resourceId);
    console.log('folder', folder);
    if(htmlElement.length > 0 && htmlElement.get(0).files.length > 0) {
        var data = new FormData();
        var files = htmlElement.get(0).files;
        if (files.length > 0) {
            data.append("Image", files[0]);
        }
        if (resourceId != undefined && resourceId != '' && resourceId != 0) {
            data.append("ResourceId", resourceId);
        }
        if (folder != undefined && folder != '' && folder != 0) {
            data.append("Folder", folder);
        }
        $.ajax({
            url: baseurl + 'Base/SendImage',
            type:"POST",
            processData: false,
            contentType: false,
            data: data,
            success: function (response) {
                if(response === true) {
                    if(callback != undefined && callback != null && callback != '') {
                        callback(response);
                    }
                }
                else {
                    showModalMessage(response);
                }
            },
            error: function (er) {
                showModalMessage("Error uploading image");
            }

        });
    }
    else {
        //altrimenti mando direttamente la callback con argomento nullo
        callback();
    }
}


function behaviourRefresh(type) {
    // a seguito di inserimenti di nuovi blocchi di indirizzo i comportamenti "onChange" di cui sotto non funzionavano più
    // questa procedura viene quindi richiamata dopo ogni inserimento/rimozione di blocchi di indirizzi.

    $(body).find("[name ='"+type+"_address_country']").change(function () {
        //disabilita campi provincia e regione quando si seleziona un paese diverso da Italia
     
        disableItalianFields($(this).parent().parent(), type);
        $(this).parent().parent().find("[name ='" + type + "_address_region']").css('color', 'gray');
        $(this).parent().parent().find("[name ='" + type + "_address_district']").css('color', 'gray');

        //gestisce la colorazione dell'option corrente 
        if ($(this).val() == "0") {
            //"Nation" funge da placeholder e va in grigio
            $(this).css('color', 'gray');
        }
        else {
            //Le altre in nero
            $(this).css('color', 'black');
        }

    });

    $("[name ='" + type + "_address_region']").change(function () {
        //gestisce i colori del testo
        var current = $(this).val();
        if (current != '0') {
            $(this).css('color', 'black');
        } else {
            $(this).css('color', 'gray');
        }

        //genera la lista di provincie in base alla regione selezionata
        $(this).parent().parent().find("[name = '" + type + "_address_district']").html(generateDistrictList($(this).val()));
        $(this).parent().parent().find("[name ='" + type + "_address_district']").css('color', 'gray');
    });

    $("[name = '" + type + "_address_district']").change(function () {

        //gestisce i colori del testo
        var current = $(this).val();
        if (current != '') {
            $(this).css('color', 'black');
        } else {
            $(this).css('color', 'gray');
        }

        //preseleziona l'opportuna regione in base alla provincia selezionata
        for (var i = 0; i < regioni.length; i++) {

            for (var key in regioniProvincie[regioni[i]]) {
                if (regioniProvincie[regioni[i]][key]['sigla'] == $(this).val())
                    $(this).parent().parent().find("[name ='" + type + "_address_region']").val(i);
                $(this).parent().parent().find("[name ='" + type + "_address_region']").css('color', 'black');
            }
        }

        if ($(this).val() == "") {
            $(this).html(generateDistrictList(0));
            $(this).parent().parent().find("[name ='" + type + "_address_region']").val(0);
            $(this).parent().parent().find("[name ='" + type + "_address_region']").css('color', 'gray');
        }
    });

}


function generateCountryList(countryList, defVal) {
    //restituisce l'elenco nazioni come blocco di option tag presi dal file /Scripts/districts-regions-countries.js
    var optionSet = '<option style="color: gray;" value="0">Country</option>';
    //riordino la lista in ordine alfabetico per nome
    countryList = countryList.sort(function (a, b) {
        return a.nome.localeCompare(b.nome);
    });

    for (var i = 0; i < countryList.length; i++) {
        //Italia selezionata di default
        if (countryList[i].codice == "380" && (defVal == undefined)) {
            optionSet += '<option class= "others" value="' + countryList[i].codice + '" selected>' + countryList[i].nome + '</option>';
        }
        else {

            if (defVal == countryList[i].codice) {
                optionSet += '<option class= "others" value="' + countryList[i].codice + '" selected>' + countryList[i].nome + '</option>';
            }
            else
            {
                optionSet += '<option class= "others" value="' + countryList[i].codice + '">' + countryList[i].nome + '</option>';
            }
                
        }
    }
    return optionSet;
}

function generateRegionList(regionList, defVal) {
    //restituisce l'elenco di regioni italiane come blocco di option tag presi dal file /Scripts/districts-regions-countries.js
    var optionSet = '<option style="color: gray;" value="0" selected>Region</option>';
    for (var i = 1; i < regionList.length; i++) {

        if (defVal != undefined && i == defVal)
        {
            selected = "selected";
        }
        else
        {
            selected = "";
        }
        optionSet += '<option class= "others" value="' + i + '" ' + selected + '>' + regionList[i] + '</option>';
    }
    return optionSet;
}

function generateDistrictList(regionId, defVal) {
    //restituisce un blocco di option tag con l'elenco delle provincie italiane (completo o contestualizzato per regione)
    var optionSet = '<option style="color: gray;" value="" >District</option>';
    var masterList = [];


    if (defVal != undefined)
    {
        //quando popolo in modifica la select, voglio mostrare la versione completa anche se la regione è già assegnata
        regionId = 0;
    }
    // Il regionId 0 è per la lista completa
    if (regionId == 0) {
        //genera la lista di tutte le provincie italiane
        for (var i = 0; i < regioni.length; i++) {
            for (var key in regioniProvincie[regioni[i]]) {
                masterList.push({ 'sigla': regioniProvincie[regioni[i]][key]['sigla'], 'nome': regioniProvincie[regioni[i]][key]['nome'] });
            }
        }
        //ordinamento alfabetico
        masterList = masterList.sort(function (a, b) {
            return a.nome.localeCompare(b.nome);
        });
        //generazione html
        for (var i = 0; i < masterList.length; i++) {
            if (defVal != undefined && masterList[i].sigla == defVal) {
                selected = "selected";
            }
            else {
                selected = "";
            }
            optionSet += '<option class= "others" value="' + masterList[i].sigla + '" ' + selected + '>' + masterList[i].nome + '</option>';
        }

    }
    else {
        //genera una lista di provincie contestualizzata per regione
        for (var key in regioniProvincie[regioni[regionId]]) {
            optionSet += '<option class="others" value="' + regioniProvincie[regioni[regionId]][key]['sigla'] + '">' + regioniProvincie[regioni[regionId]][key]['nome'] + '</option>';
        }
    }

    return optionSet;
}

function disableItalianFields(elem, type) {

    // quando si seleziona un paese diverso dall'Italia, le select di region e district vengono disabilitate
    // riceve in var elem l'elemento padre della select chiamante e restituisce sempre true.

    switch (type) {

        case "contact": {
            var countrySelect = elem.find("[name ='contact_address_country']");
            var districtSelect = elem.find("[name ='contact_address_district']");
            var regionSelect = elem.find("[name ='contact_address_region']");
            break;
        }

        case "customer": {
            var countrySelect = elem.find("[name ='customer_address_country']");
            var districtSelect = elem.find("[name ='customer_address_district']");
            var regionSelect = elem.find("[name ='customer_address_region']");
            break;
        }

    }
    
  

    // 380 è il codice iso numerico dell'Italia
 
    if (countrySelect.val() != "380") {
        regionSelect.val("0");
        districtSelect.val('');
        regionSelect.prop('disabled', 'disabled');
        districtSelect.prop('disabled', 'disabled');
    }
    else {
        regionSelect.prop('disabled', false);
        districtSelect.prop('disabled', false);
    }
    return true;
}




function refreshAddedClientsNumber(addedClients) {
    $('#added-clients-number').text('').text(addedClients);
}

function decrementAddedClientsNumberAndRefreshLabel(decrementQuantity) {
    addedClientsNumber = addedClientsNumber - decrementQuantity;
    refreshAddedClientsNumber(addedClientsNumber);
}

function getAddressHTML(address) {
    var retValue = '';

    if (address.Label != undefined && address.Label != "") {
        retValue += '<div class="resource-summary-entry">' + address.Label + '</div> ';
    }
    retValue += '<div class="resource-summary-value">';
    if (address.Street != undefined && address.Street != "") {
        retValue += address.Street;
    }
    if ((address.City != undefined && address.City != "") || (address.District != undefined && address.District != "") || (address.Country != undefined && address.Country != "")) {
        retValue += ' - ';
    }
    if (address.City != undefined && address.City != "") {
        retValue += address.City + ' ';
    }
    if (address.District != undefined && address.District != "") {
        retValue += address.District + ' ';
    }
    if (address.Country != undefined && address.Country != "") {
        //retValue += address.Country;
        for (var i = 0; i < nazioni.length; i++)
        {
            if(nazioni[i].codice == address.Country )
            {
                retValue += nazioni[i].nome + ' ';
            }
        }
        
    }
    if (address.CAP != undefined && address.CAP != "") {
        retValue += ' - ' + address.CAP;
    }
    retValue += '</div>';
    retValue += '<div class="new-line"></div>';

    return retValue;
}

function getContatInfoHTML(contactInfo) {
    var html = '';

  

    html += '<div class="resource-summary-entry">';

    if (contactInfo.Label != undefined && contactInfo.Label != "") {
        html += contactInfo.Label + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
    else {
        html += contactInfoType[contactInfo.ContactInfoType] + "&nbsp;&nbsp;&nbsp;";
    }

    html + '</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    html += '<div class="resource-summary-value">' + contactInfo.Value + '</div>';
    html += '<div class="new-line"></div>';

    return html;
}

function getCustomerHTML(customer) {
    var html = '';

    html += '<div class="resources-dashboard-element" client-id="' + customer.ClientId + '">';
    html += '<div class="common-small-avatar resources-dashboard-element-avatar" style="background: url(' + customer.ClientFileName + ') no-repeat center; background-size: 100% 100%;"></div>';
    html += '<div class="resources-dashboard-element-name">' + customer.ClientName + '</div>';
    html += '</div>';

    return html;
}




function calculateAverage(rating) {
    var sum = 0;
    //var keys = Object.keys(rating);

   

    for (var i = 0; i < rating.length ; i++) {

        sum += parseFloat(rating[i].value);
    }


    return sum / rating.length;
}


function getScrollBarWidth() {

    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);
  
    return (w1 - w2 );
}