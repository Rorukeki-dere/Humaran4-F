# Generated by Django 4.2.3 on 2023-08-09 19:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_alter_order_delivered_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shippingaddress',
            name='country',
        ),
    ]
