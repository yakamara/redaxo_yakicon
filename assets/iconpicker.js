
(function ($) {
    var IconpickerAddon = {};

    IconpickerAddon.init = function () {
        var body = $('body');
        IconpickerAddon.initMainContent(body);
    },

    IconpickerAddon.initContent = function(content) {
        content.find('[data-iconpicker]').each(function () {
            var input = $(this);
            var iconpickerset = input.attr('data-iconpicker') || 'fontawesome5';
            var button = $('<button type="button" class="btn btn-default" name="' + input.attr('name') + '" data-iconpickerset="' + iconpickerset + '">Iconpicker</button>');

            button.iconpicker({
                arrowPrevIconClass: "rex-icon rex-icon-previous",
                arrowNextIconClass: "rex-icon rex-icon-next",
				unselectedClass: "btn-default",
				selectedClass: "btn-save",
				search: true,
                iconset: $['iconset_' + iconpickerset],
                icon: input.val(),
                placement: 'right',
                cols: 20,
                rows: 10
            });
            // input.parent().append($('<div>').append(button));
            input.parent().append(button);
            input.remove();
        });
    },

    IconpickerAddon.initMblock = function(content) {
        content.find('.iconpicker').each(function () {
            var button = $(this);
            var iconpickerset = button.attr('data-iconpicker') || 'fontawesome';

            button.iconpicker({
                arrowPrevIconClass: "rex-icon rex-icon-previous",
                arrowNextIconClass: "rex-icon rex-icon-next",
				unselectedClass: "btn-default",
				selectedClass: "btn-save",
				search: true,
                iconset: $['iconset_' + iconpickerset],
                icon: '',
                placement: 'right',
                cols: 20,
                rows: 10
            });
        });
    },

    IconpickerAddon.initMainContent = function(content) {
        IconpickerAddon.initContent(content);
    };

    $(document).on('rex:ready', function(event, container) {
        IconpickerAddon.init();
    });

    if (typeof mblock_module !== 'undefined') {
        mblock_module.registerCallback('reindex_end', function() {
            IconpickerAddon.initMblock($('.mblock_wrapper'));
        });
    }

}(jQuery));

