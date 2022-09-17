from django.db import models

# Create your models here.

class File(models.Model):
    FileName = models.CharField(max_length=30)
    Status = models.CharField(max_length=30)
    Createdby = models.DateTimeField()
    Assignedto = models.CharField(max_length=30)

    def __str__(self):
        return self.FileName