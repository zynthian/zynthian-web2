---
title: Contact
form:
    name: my-nice-form
    fields:
        - name: name
          label: Name
          placeholder: Enter your name
          autofocus: on
          autocomplete: on
          type: text
          validate:
            required: true

        - name: email
          label: Email
          placeholder: Enter your email address
          type: text
          validate:
            rule: email
            required: true

        - name: message
          label: Message
          size: long
          placeholder: Enter your message
          type: textarea
          validate:
            required: true

    buttons:
        - type: submit
          value: Submit
          classes: btn--primary

    process:
        - email:
                from: '{{ config.plugins.email.from }}'
                to:
                    - '{{ config.plugins.email.to }}'
                subject: 'CONTACT - {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        - email:
                from: '{{ config.plugins.email.from }}'
                to:
                    - '{{ form.value.email }}'
                subject: 'Message received! 👌'
                body: '{% include "emails/demo-confirmation.html.twig" %}'
        - save:
                fileprefix: '{{ form.value.name }}'
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        - reset: true
        - message: 'Thanks for reaching out!.'
---