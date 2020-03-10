<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class WidthShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('column', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<div class="column ' . $class . '">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('article', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<article class="' . $class . '">' . $sc->getContent() . '</article>';
        });

        $this->shortcode->getHandlers()->add('content-group', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<div class="content-group ' . $class . '">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('button-group', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<div class="button-group ' . $class . '">' . $sc->getContent() . '</div>';
        });

    }
}