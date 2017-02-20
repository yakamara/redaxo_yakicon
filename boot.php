<?php

if (rex::isBackend()) {
    // rex_view::addCssFile($this->getAssetsUrl('fonts/icomoon/styles.css'));
    // rex_view::addJsFile($this->getAssetsUrl('iconsets/iconset-icomoon.js'));

    rex_view::addCssFile($this->getAssetsUrl('fonts/font-awesome-4.7.0/css/font-awesome.min.css'));
    rex_view::addJsFile($this->getAssetsUrl('iconsets/iconset-font-awesome-4.7.0.js'));

    rex_view::addCssFile($this->getAssetsUrl('vendor/bootstrap-iconpicker/bootstrap-iconpicker/css/bootstrap-iconpicker.min.css'));
    rex_view::addJsFile($this->getAssetsUrl('vendor/bootstrap-iconpicker/bootstrap-iconpicker/js/bootstrap-iconpicker.js'));
    rex_view::addJsFile($this->getAssetsUrl('iconpicker.js'));
}
