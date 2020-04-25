from django.db import models


class Category(models.Model):
    id=models.CharField(max_length=300);
    name = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class Image(models.Model):
    name = models.CharField(max_length=300)
    price = models.IntegerField(null=True)
    description = models.TextField(default='')
    images = models.URLField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'images': self.images
        }

class User(models.Model):
    name = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }