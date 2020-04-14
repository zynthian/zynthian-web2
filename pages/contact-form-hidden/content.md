---
form:
    name: contact-form
    classes: ajax-form
    action: /home
    fields:
        -
            name: email
            label: Email
            placeholder: email@email.com
            type: email
            validate:
                required: true
        -
            name: name
            label: Name
            placeholder: 'Bob Morane'
            type: text
        -
            name: message
            type: textarea
            label: Message
            placeholder: 'Write something nice'
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
                subject: 'CONTACT - {{ form.value.email|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to:
                    - '{{ form.value.email }}'
                subject: 'Message received! 👌'
                body: '{% include "emails/demo-confirmation.html.twig" %}'
        -
            reset: true
        -
            message: 'Horray! You just submitted a form trough a modular!'
---

