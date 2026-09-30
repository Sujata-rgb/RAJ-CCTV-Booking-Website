from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('user', 'service_type', 'preferred_date', 'status', 'created_at')
    list_filter = ('status', 'service_type')
    search_fields = ('user__username', 'phone_number', 'address')