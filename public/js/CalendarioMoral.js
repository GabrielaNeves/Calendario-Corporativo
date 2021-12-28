document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {



      titleFormat: {
        year: 'numeric', month: 'long', day: 'numeric'
      },

      headerToolbar: {
        start: '', // will normally be on the left. if RTL, will be on the right
        center: '',
        end: '' // will normally be on the right. if RTL, will be on the left
      },
      handleWindowResize: true,
      default: true,
      editable: true,
      selectable: true,
      businessHours: true,
      dayMaxEvents: true,
      dayMaxEventRows: 5,
      locale: 'pt-br',
      monthNames: [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jlh', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
      ],
      fixedWeekCount: false,
      events: [
      ]
    });

    calendar.render();
  });

