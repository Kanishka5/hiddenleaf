# Generated by Django 3.1.2 on 2020-10-19 20:06

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('username', models.CharField(max_length=30, unique=True)),
                ('email', models.CharField(max_length=35, unique=True)),
                ('isCustomer', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=100)),
                ('phone', models.IntegerField(default='0000000000', max_length=10)),
                ('dp', models.FileField(upload_to='customer/')),
            ],
        ),
        migrations.CreateModel(
            name='DeliveryAgent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('phone', models.IntegerField(default='0000000000', max_length=10)),
                ('dp', models.FileField(upload_to='deliveryagent/')),
            ],
        ),
        migrations.CreateModel(
            name='ECommerce',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, unique=True)),
                ('owner', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='LogisticCompany',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, unique=True)),
                ('owner', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('orderid', models.CharField(default='XXXXX0000000000', max_length=15, unique=True)),
                ('productName', models.CharField(max_length=50)),
                ('productType', models.CharField(max_length=15)),
                ('seller', models.CharField(max_length=40)),
                ('amount', models.IntegerField(default='0', max_length=10)),
                ('eta', models.DateField()),
                ('orderDate', models.DateField()),
                ('status', models.CharField(default='Out For Delivery', max_length=30)),
                ('deliveryAddress', models.CharField(max_length=100)),
                ('agentId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.deliveryagent')),
                ('customerId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.customer')),
                ('ecommerceId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.ecommerce')),
                ('logisticId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.logisticcompany')),
            ],
        ),
        migrations.CreateModel(
            name='DeliveryBox',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('boxId', models.CharField(max_length=15, unique=True)),
                ('manufacturer', models.CharField(max_length=30)),
                ('customerId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.customer')),
            ],
        ),
        migrations.AddField(
            model_name='deliveryagent',
            name='logisiticId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.logisticcompany'),
        ),
        migrations.AddField(
            model_name='deliveryagent',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='customer',
            name='boxId',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.deliverybox'),
        ),
        migrations.AddField(
            model_name='customer',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]