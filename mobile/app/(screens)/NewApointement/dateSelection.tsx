import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import Button from '@/components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

type DayType = {
  date: Date;
  dayName: string;
  dayNumber: number;
  month: string;
  isAvailable: boolean;
};

export default function DateSelectionScreen() {
  const { doctor, specialty, hospital, fullName, firstName } = useLocalSearchParams<{
    doctor: string;
    specialty: string;
    hospital: string;
    fullName: string;
    firstName: string;
  }>();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate calendar days
  const generateCalendarDays = (month: Date): DayType[] => {
    const days: DayType[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    
    // Get the number of days in the month
    const numDays = new Date(year, monthIndex + 1, 0).getDate();
    
    // Create days
    for (let i = 1; i <= numDays; i++) {
      const date = new Date(year, monthIndex, i);
      
      // Skip past dates
      if (date < today) continue;
      
      // Random availability for demo purposes
      const isAvailable = Math.random() > 0.3;
      
      const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
      const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
                      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      
      days.push({
        date: date,
        dayName: dayNames[date.getDay()],
        dayNumber: i,
        month: monthNames[monthIndex],
        isAvailable: isAvailable
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays(currentMonth);
  
  // Group days by week
  const groupByWeek = (days: DayType[]) => {
    const weeks: DayType[][] = [];
    let currentWeek: DayType[] = [];
    
    days.forEach((day, index) => {
      currentWeek.push(day);
      
      // Start a new week after Saturday or at the end
      if (day.date.getDay() === 6 || index === days.length - 1) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });
    
    return weeks;
  };

  const weeks = groupByWeek(calendarDays);

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  const handleDateSelect = (day: DayType) => {
    if (day.isAvailable) {
      setSelectedDate(day.date);
    }
  };

  const handleContinue = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD
      router.push({
        pathname: '/NewApointement/timeSelection',
        params: {
          doctor,
          specialty,
          hospital,
          fullName,
          firstName,
          date: formattedDate
        }
      });
    }
  };

  const formatMonthYear = (date: Date) => {
    const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
                     'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.instruction}>
            Sélectionnez une date pour votre rendez-vous avec {doctor}.
          </Text>
          
          <View style={styles.calendarHeader}>
            <TouchableOpacity onPress={handlePrevMonth} style={styles.navButton}>
              <ChevronLeft size={24} color={Colors.textDark} />
            </TouchableOpacity>
            <Text style={styles.monthTitle}>{formatMonthYear(currentMonth)}</Text>
            <TouchableOpacity onPress={handleNextMonth} style={styles.navButton}>
              <ChevronRight size={24} color={Colors.textDark} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.dayLabels}>
            <Text style={styles.dayLabel}>Lun</Text>
            <Text style={styles.dayLabel}>Mar</Text>
            <Text style={styles.dayLabel}>Mer</Text>
            <Text style={styles.dayLabel}>Jeu</Text>
            <Text style={styles.dayLabel}>Ven</Text>
            <Text style={styles.dayLabel}>Sam</Text>
            <Text style={styles.dayLabel}>Dim</Text>
          </View>
          
          <View style={styles.calendar}>
            {weeks.map((week, weekIndex) => (
              <View key={`week-${weekIndex}`} style={styles.week}>
                {Array(7).fill(null).map((_, dayIndex) => {
                  const day = week.find(d => d.date.getDay() === (dayIndex + 1) % 7);
                  
                  if (!day) {
                    return <View key={`empty-${dayIndex}`} style={styles.dayEmpty} />;
                  }
                  
                  const isSelected = selectedDate && 
                    day.date.getDate() === selectedDate.getDate() &&
                    day.date.getMonth() === selectedDate.getMonth() &&
                    day.date.getFullYear() === selectedDate.getFullYear();
                  
                  return (
                    <TouchableOpacity
                      key={`day-${day.dayNumber}`}
                      style={[
                        styles.day,
                        day.isAvailable ? styles.availableDay : styles.unavailableDay,
                        isSelected && styles.selectedDay,
                      ]}
                      onPress={() => handleDateSelect(day)}
                      disabled={!day.isAvailable}
                    >
                      <Text 
                        style={[
                          styles.dayNumber,
                          !day.isAvailable && styles.unavailableDayText,
                          isSelected && styles.selectedDayText,
                        ]}
                      >
                        {day.dayNumber}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
          
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: Colors.primary }]} />
              <Text style={styles.legendText}>Disponible</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#E0E0E0' }]} />
              <Text style={styles.legendText}>Indisponible</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Continuer"
          onPress={handleContinue}
          disabled={!selectedDate}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  instruction: {
    fontSize: 16,
    color: Colors.textDark,
    marginBottom: 24,
    lineHeight: 24,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  navButton: {
    padding: 8,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textDark,
  },
  dayLabels: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  dayLabel: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textLight,
  },
  calendar: {
    marginBottom: 24,
  },
  week: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  day: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    borderRadius: 20,
  },
  dayEmpty: {
    flex: 1,
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: '500',
  },
  availableDay: {
    backgroundColor: Colors.primary + '20',
  },
  unavailableDay: {
    backgroundColor: '#E0E0E0',
  },
  unavailableDayText: {
    color: Colors.textMuted,
  },
  selectedDay: {
    backgroundColor: Colors.primary,
  },
  selectedDayText: {
    color: 'white',
    fontWeight: '600',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendText: {
    fontSize: 14,
    color: Colors.textLight,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.borderColor,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
  },
});