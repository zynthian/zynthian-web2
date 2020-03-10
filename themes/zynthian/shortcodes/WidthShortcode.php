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
    }
}