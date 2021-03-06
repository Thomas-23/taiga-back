/*
 * Copyright (C) 2014-2016 Andrey Antukh <niwi@niwi.be>
 * Copyright (C) 2014-2016 Jesús Espino <jespinog@gmail.com>
 * Copyright (C) 2014-2016 David Barragán <bameda@dbarragan.com>
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * This code is partially taken from django-rest-framework:
 * Copyright (c) 2011-2014, Tom Christie
 */


function getCookie(c_name)
{
    // From http://www.w3schools.com/js/js_cookies.asp
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}

// JSON highlighting.
prettyPrint();

// Bootstrap tooltips.
$('.js-tooltip').tooltip({
    delay: 1000
});

// Deal with rounded tab styling after tab clicks.
$('a[data-toggle="tab"]:first').on('shown', function (e) {
    $(e.target).parents('.tabbable').addClass('first-tab-active');
});
$('a[data-toggle="tab"]:not(:first)').on('shown', function (e) {
    $(e.target).parents('.tabbable').removeClass('first-tab-active');
});

$('a[data-toggle="tab"]').click(function(){
    document.cookie="tabstyle=" + this.name + "; path=/";
});

// Store tab preference in cookies & display appropriate tab on load.
var selectedTab = null;
var selectedTabName = getCookie('tabstyle');

if (selectedTabName) {
    selectedTab = $('.form-switcher a[name=' + selectedTabName + ']');
}

if (selectedTab && selectedTab.length > 0) {
    // Display whichever tab is selected.
    selectedTab.tab('show');
} else {
    // If no tab selected, display rightmost tab.
    $('.form-switcher a:first').tab('show');
}
