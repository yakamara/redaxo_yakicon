$(document).on('rex:ready', function (event, container) {

    var IconpickerAddon = function ($) {
        return {

            init: function () {
                var body = $('body');
                IconpickerAddon.initMainContent(body);
            },

            initContent: function(content) {
                content.find('[data-iconpicker]').each(function () {
                    var input = $(this);
                    var button = $('<button type="button" class="btn btn-default" name="' + input.attr('name') + '">Iconpicker</button>');
                    var iconpickerset = input.attr('data-iconpicker') || 'fontawesome';

                    button.iconpicker({
                        arrowPrevIconClass: "rex-icon rex-icon-previous",
                        arrowNextIconClass: "rex-icon rex-icon-next",
                        iconset: $['iconset_' + iconpickerset],
                        icon: input.val(),
                        placement: 'right',
                        cols: 20,
                        rows: 10
                    });
                    input.parent().append($('<div>').append(button));
                    input.remove();
                });
            },

            initMainContent: function(content) {
                IconpickerAddon.initContent(content);
            }
        };

    }(jQuery);

    IconpickerAddon.init();
});
