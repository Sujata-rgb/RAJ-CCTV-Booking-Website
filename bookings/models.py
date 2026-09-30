from django.db import models
from django.contrib.auth.models import User

class Booking(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    SERVICE_CHOICES = [
        ('cctv_install', 'CCTV Installation'),
        ('wireless_camera', 'Wireless Camera Setup'),
        ('maintenance', 'Maintenance/Repair'),
        ('consultation', 'Consultation'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookings')
    service_type = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    preferred_date = models.DateField()
    preferred_time = models.TimeField()
    address = models.TextField()
    phone_number = models.CharField(max_length=15)
    notes = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - {self.service_type} - {self.preferred_date}"