# Generated by Django 3.0.5 on 2020-04-25 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20200425_1751'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='images',
            field=models.URLField(),
        ),
        migrations.AlterField(
            model_name='image',
            name='price',
            field=models.IntegerField(null=True),
        ),
    ]