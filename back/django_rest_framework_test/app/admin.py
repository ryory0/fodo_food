from django.contrib import admin
from .models import Product, Recipe, Commet, Topic
from markdownx.admin import MarkdownxModelAdmin

admin.site.register(Product)
admin.site.register(Recipe)
admin.site.register(Commet)
admin.site.register(Topic)
