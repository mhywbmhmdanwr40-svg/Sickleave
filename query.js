document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('searchInput').value.trim();
  const resultDiv = document.getElementById('result');
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      const match = data.find(entry => entry.id === input || entry.leave_id === input);
      if (match) {
        resultDiv.innerHTML = `
          <h3>نتائج البحث:</h3>
          <table>
            <tr><th>رمز الإجازة</th><td>${match.leave_id}</td></tr>
            <tr><th>الاسم</th><td>${match.name}</td></tr>
            <tr><th>رقم الهوية</th><td>${match.id}</td></tr>
            <tr><th>الجنسية</th><td>${match.nationality}</td></tr>
            <tr><th>جهة العمل</th><td>${match.employer}</td></tr>
            <tr><th>اسم الطبيب</th><td>${match.doctor}</td></tr>
            <tr><th>المسمى الوظيفي</th><td>${match.position}</td></tr>
            <tr><th>تاريخ الدخول</th><td>${match.admission}</td></tr>
            <tr><th>تاريخ الخروج</th><td>${match.discharge}</td></tr>
            <tr><th>تاريخ إصدار التقرير</th><td>${match.issue_date}</td></tr>
            <tr><th>مدة الإجازة</th><td>${match.duration}</td></tr>
          </table>`;
      } else {
        resultDiv.innerHTML = "<p style='color:red;'>لم يتم العثور على نتائج.</p>";
      }
    })
    .catch(err => {
      resultDiv.innerHTML = "<p style='color:red;'>حدث خطأ أثناء تحميل البيانات.</p>";
    });
});