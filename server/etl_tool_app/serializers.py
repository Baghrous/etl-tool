from rest_framework import serializers
from .models import UploadedFile, TransformationRule

class UploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = '__all__'

class TransformationRuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransformationRule
        fields = '__all__'
