from django.db import models

class UploadedFile(models.Model):
    file = models.FileField(upload_to='uploads/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

class TransformationRule(models.Model):
    name = models.CharField(max_length=255)
    rule = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
