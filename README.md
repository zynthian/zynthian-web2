# Zynthian Web v2

This Website is built using Hotdoy Skeleton as base template. 
For better maintainance, [inheritance is used for theme customization](https://getgrav.org/blog/theme-development-with-inheritance) (themes/zynthian).

Installation from scratch:

>git clone https://github.com/getgrav/grav.git zynthian-web2
>cd zynthian-web2
>mv user user.bak
>git clone git@github.com:zynthian/zynthian-web2.git user
>./bin/grav install

Local run:

>php -S localhost:8000 system/router.php


--------------

# Hotdoy skeleton for Grav CMS

## A FAIR WARNING:
This theme is ever evolving. Things move around, major changes are made all the time, sometime requiring you take action. Use this as your own risk.

When extending this theme, you should use Theme Inheritance. Create, overwrite or clone template you want to customize instead of trying to hack into mine. This way I can keep updating and you can keep the feature you care about. I hope we all have fun. Good luck :)

I try to dump a fresh skeleton for each major update but it's hard to keep up. 
After installing the skeleton and creating a user, make sure you...

* Update the theme to the latest version.
* Update all the plugins.
* Head to the theme configuration and save.
* If content seems broken, try re-saving the page/modular.

**For communication and announcements, head to the [theme repo](https://github.com/hotdoy/grav-theme-hotdoy).**

![Theme screenshot](https://raw.githubusercontent.com/hotdoy/grav-skeleton-hotdoy/master/screenshot.jpg)

