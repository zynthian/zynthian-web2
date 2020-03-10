<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class ZynthianShortcode extends Shortcode
{
    public function init()
    {
        // WidthShortcode
        $this->shortcode->getHandlers()->add('article', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<article class="' . $class . '">' . $sc->getContent() . '</article>';
        });

        $this->shortcode->getHandlers()->add('column', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<div class="column ' . $class . '">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('content-group', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<div class="content-group ' . $class . '">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('button-group', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<div class="button-group ' . $class . '">' . $sc->getContent() . '</div>';
        });

        // ButtonShortcode
        $this->shortcode->getHandlers()->add('btn-primary', function(ShortcodeInterface $sc) {
            $mi = $sc->getParameter('mi');
            $i = $sc->getParameter('i');
            $icon = $mi ? $mi : $i;
            $output = $this->twig->processTemplate('partials/buttonsc.html.twig', [
                'page' => $this->grav['page'],
                'label' => $sc->getContent(),
                'href' => $sc->getParameter('href'),
                'icon' => $icon,
                'class' => 'btn--primary'
            ]);
            return $output;
        });

         $this->shortcode->getHandlers()->add('btn-secondary', function(ShortcodeInterface $sc) {
            $mi = $sc->getParameter('mi');
            $i = $sc->getParameter('i');
            $icon = $mi ? $mi : $i;
            $output = $this->twig->processTemplate('partials/buttonsc.html.twig', [
                'page' => $this->grav['page'],
                'label' => $sc->getContent(),
                'href' => $sc->getParameter('href'),
                'icon' => $icon,
                'class' => 'btn--secondary'
            ]);
            return $output;
        });

        // BreakpointShortcode
        $this->shortcode->getHandlers()->add('large', function(ShortcodeInterface $sc) {
            return '<div class="large">' . $sc->getContent() . '</div>';
        });
        $this->shortcode->getHandlers()->add('medium', function(ShortcodeInterface $sc) {
            return '<div class="medium">' . $sc->getContent() . '</div>';
        });
        $this->shortcode->getHandlers()->add('small', function(ShortcodeInterface $sc) {
            return '<div class="small">' . $sc->getContent() . '</div>';
        });
    }
}