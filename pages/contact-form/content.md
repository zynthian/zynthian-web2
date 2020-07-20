---
form:
    name: contact-form
    classes: ajax-form
    action: /home
    fields:
        -
            name: email
            label: Email
            placeholder: bob@moog.sky
            type: email
            validate:
                required: true
        -
            name: name
            label: Name
            placeholder: 'Bob Moog'
            type: text
        -
            name: message
            type: textarea
            label: Message
            placeholder: 'Write something...'
        -
            g-recaptcha-response:
                type: captcha
                label: Captcha
    buttons:
        -
            type: submit
            value: Submit
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to:
                    - '{{ config.plugins.email.to }}'
                subject: 'Zynthian Contact from {{ form.value.email|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to:
                    - '{{ form.value.email }}'
                subject: 'Zynthian: Message received! 👌'
                body: '{% include "emails/confirmation.html.twig" %}'
        -
            reset: true
        -
            message: 'Your message has been sent! You will receive an answer very soon ...'
---

