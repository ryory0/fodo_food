from django.db import models
from markdownx.models import MarkdownxField

class Product(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=0)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')
    recipes = models.ManyToManyField('Recipe', related_name='products')


class Recipe(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/')
    description = models.TextField()
    ingredients = models.TextField()
    process = models.TextField()

    def __str__(self) -> str:
        return self.title
    
class Commet(models.Model):
    recipe = models.ForeignKey(Recipe, related_name="commments", on_delete=models.CASCADE)
    context = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.created_at}: {self.context[:20]}"

    class Meta:
        ordering = ["-created_at"]

class Topic(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/')
    description = models.TextField()

    def __str__(self):
        return self.title