# Generated by Django 3.0.5 on 2021-07-05 14:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='user_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='cars', to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='Offer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('offre_title', models.CharField(max_length=255)),
                ('offre_start_time', models.TimeField()),
                ('offre_starting_point', models.CharField(max_length=255)),
                ('offre_end_time', models.TimeField()),
                ('offre_ending_point', models.CharField(max_length=255)),
                ('offre_availble_sites', models.IntegerField()),
                ('offre_car', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.Car')),
                ('offre_user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
